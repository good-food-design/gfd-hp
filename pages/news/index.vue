<template>
  <section class="news mb-64 md:mt-48 p-10 max-w-screen-xl mx-auto">
    <SectionTitle title="NEWS" />
    <div>
      <p class="text-3xl text-orange">CATEGORY</p>
      <ul class="mt-7" v-for="(catem, i) in allCategory" :key="i">
        <li class="mt-5" @click="serachCategory(catem)">{{ catem }}</li>
      </ul>
    </div>
    <div class="lg:container w-full mx-auto mb-24 md:mt-24">
      <div
        class="flex flex-wrap items-center justify-between md:max-w-screen-lg mx-auto"
      >
        <div
          v-for="news in newsList.nodes"
          :key="news.id"
          class="md:w-[260px] w-[138px] mt-20"
        >
          <Card
            :id="news.id"
            :title="news.title"
            :date="news.date"
            :category="
              news.categories.nodes[0] ? news.categories.nodes[0].name : ''
            "
            :text="news.content"
            :img="news.gfd_news_custom_filed.mainImage.mediaItemUrl"
          />
        </div>
      </div>
    </div>
    <nav
      aria-label="Page navigation example"
      class="text-center md:max-w-screen-lg w-full mx-auto relative pt-20"
    >
      <ul class="inline-flex -space-x-px flex">
        <li class="absolute left-10">
          <a @click="previousPage()" v-if="hasPrevious">
            <img src="/images/common/news/arrow_left.svg" />
          </a>
        </li>
        <li v-for="n of totalPage" :key="n">
          <a
            v-if="currentPage <= totalPage"
            @click="clickPage(n)"
            class="py-2 px-20 leading-tight text-gray-500 bg-white hover:text-gray-700"
            :class="{
              'text-orange': currentPage === n,
            }"
            >{{ n }}</a
          >
        </li>
        <li class="absolute right-10">
          <a @click="nextPage()" v-if="hasMore">
            <img src="/images/common/news/arrow_right.svg" />
          </a>
        </li>
      </ul>
    </nav>
  </section>
</template>
<script>
import SectionTitle from "@/components/SectionTitle.vue";
import Card from "@/components/news/Card.vue";
import "vue-apollo";
import newsList from "~/apollo/queries/newsList.gql";
let newsSize = 4;
export default {
  head() {
    return {
      title: "News",
    };
  },
  apollo: {
    newsList: {
      prefetch: "loading",
      query: newsList,
      variables: {
        size: newsSize,
        offset: 0,
        categoryName: "",
      },
      result({ data }) {
        this.newsList = data.gfdNewss;
        this.hasMore = data.gfdNewss.pageInfo.offsetPagination.hasMore;
        this.hasPrevious = data.gfdNewss.pageInfo.offsetPagination.hasPrevious;
        this.totalItem = data.gfdNewss.pageInfo.offsetPagination.total;
        this.totalPage = Math.ceil(this.totalItem / this.baseSize);
        console.log(data);
        this.allCategory = data.categories.edges.map(function (value) {
          if (value.node.name !== "未分類") {
            return value.node.name;
          }
        });
      },
    },
  },
  data() {
    return {
      newsList: {
        nodes: [],
      },
      hasMore: false,
      hasPrevious: false,
      totalItem: 0,
      totalPage: 0,
      currentPage: 1,
      baseSize: newsSize,
      selectCategory: "",
      allCategory: [],
    };
  },
  methods: {
    async previousPage() {
      this.currentPage -= 1;
      await this.getQuery(this.currentPage * this.baseSize - this.baseSize);
    },
    async nextPage() {
      this.currentPage += 1;
      await this.getQuery(this.currentPage * this.baseSize - this.baseSize);
    },
    async clickPage(page) {
      this.currentPage = page;
      await this.getQuery(this.currentPage * this.baseSize - this.baseSize);
    },
    serachCategory(category) {
      this.selectCategory = category;
      this.currentPage = 1;
      this.getQuery(this.currentPage * this.baseSize - this.baseSize);
    },
    async getQuery(currentOffset) {
      this.newsList.nodes = [];
      this.$apollo.queries.newsList.fetchMore({
        variables: {
          size: this.baseSize,
          offset: currentOffset,
          categoryName: this.selectCategory,
        },
        updateQuery: (previousResult, { fetchMoreResult }) => {
          console.log(fetchMoreResult);
          this.hasPrevious =
            fetchMoreResult.gfdNewss.pageInfo.offsetPagination.hasPrevious;
          this.hasMore =
            fetchMoreResult.gfdNewss.pageInfo.offsetPagination.hasMore;
          this.total = fetchMoreResult.gfdNewss.pageInfo.offsetPagination.total;
          this.newsList.nodes = fetchMoreResult.gfdNewss.nodes;
        },
      });
    },
  },
  components: {
    SectionTitle,
    Card,
  },
};
</script>
