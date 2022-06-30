<template>
  <section
    v-if="newsDetail"
    class="news mb-64 md:mt-48 p-10 mx-auto max-w-screen-lg"
  >
    <SectionTitle title="NEWS" />
    <div class="relative container mx-auto w-full max-w-screen-sm">
      <a href="/news">
        <img
          src="/images/common/news/arrow_left.svg"
          class="absolute left-0 -translate-x-48 translate-y-5 hover:-translate-x-56"
        />
      </a>
      <div>
        <ScrollVisible>
          <h1 class="font-thin text-[28px] leading-[1.2] tracking-[.02em]">
            {{ newsDetail.title }}
          </h1>
          <div class="flex items-center mt-10">
            <p
              class="mr-10 text-date_gray text-[12px] leading-[1.1] tracking-[.05em]"
            >
              {{ newsDetail.date.split("T")[0].replace(/-/g, "/") }}
            </p>
            <p class="text-orange">
              {{
                newsDetail.categories.nodes[0]
                  ? newsDetail.categories.nodes[0].name
                  : ""
              }}
            </p>
          </div>
        </ScrollVisible>
      </div>
    </div>
    <hr class="my-12" />
    <div class="container mx-auto w-full max-w-screen-sm mb-20">
      <ScrollVisible>
        <div
          class="text-[14px] leading-[1.8] tracking-[.02em] font-noto-medium"
          v-html="newsDetail.content"
        />
      </ScrollVisible>
    </div>
    <div class="mx-auto w-full mb-20 px-20 hidden md:block">
      <div class="flex items-center justify-between mx-auto my-40">
        <nuxt-link :to="`/news/${previousContentLink}`" class="flex">
          <div class="flex" v-if="previousContentLink.length">
            <img
              src="/images/common/news/arrow_left.svg"
              class="hover:-translate-x-3"
            />
            <p class="ml-5 font-noto-medium">前の記事</p>
          </div>
        </nuxt-link>
        <div class="relative md:w-1/3 w-2/3">
          <Button text="ニュース一覧ページへ" url="/news" />
        </div>
        <nuxt-link :to="`/news/${nextContentLink}`" class="flex">
          <div class="flex" v-if="nextContentLink.length">
            <p class="mr-5 font-noto-medium">次の記事</p>
            <img
              src="/images/common/news/arrow_right.svg"
              class="hover:translate-x-3"
            />
          </div>
        </nuxt-link>
      </div>
    </div>
    <div class="mx-auto w-full mb-20 md:hidden">
      <div class="flex items-center justify-between mx-auto my-16">
        <nuxt-link :to="`/news/${previousContentLink}`" class="flex">
          <div class="flex" v-if="previousContentLink.length">
            <img src="/images/common/news/arrow_left.svg" />
            <p class="ml-5 font-noto-medium">前の記事</p>
          </div>
        </nuxt-link>

        <nuxt-link :to="`/news/${nextContentLink}`" class="flex">
          <div class="flex" v-if="nextContentLink.length">
            <p class="mr-5 font-noto-medium">次の記事</p>
            <img src="/images/common/news/arrow_right.svg" />
          </div>
        </nuxt-link>
      </div>
      <div class="relative grid mx-auto md:w-1/3 w-4/5">
        <Button text="ニュース一覧ページへ" url="/news" />
      </div>
    </div>
  </section>
</template>
<script>
import SectionTitle from "@/components/SectionTitle.vue";
import Button from "@/components/Button.vue";
import ScrollVisible from "@/components/common/ScrollVisible.vue";
import "vue-apollo";
import newsDetailQuery from "~/apollo/queries/newsDetail.gql";
// import gql from "graphql-tag";
export default {
  components: {
    SectionTitle,
    Button,
    ScrollVisible,
  },
  data() {
    return { nextContentLink: "", previousContentLink: "" };
  },
  async asyncData({ route, app, payload }) {
    var news = null;
    const client = app.apolloProvider.defaultClient;
    const result = await client.query({
      query: newsDetailQuery,
      variables: {
        id: route.params.id,
      },
    });
    news = result.data.gfdNewsBy;
    return {
      newsDetail: news,
    };
  },
  mounted() {
    if (!this.newsDetail) {
      return;
    }
    const fetch = require("node-fetch");
    const { gql } = require("apollo-boost");
    const ApolloBoost = require("apollo-boost");
    const ApolloClient = ApolloBoost.default;
    const client = new ApolloClient({
      fetch: fetch,
      uri: "https://admin.gfd.jp/graphql",
    });
    const query = gql`
      query {
        gfdNewss(
          where: { status: PUBLISH, orderby: { field: DATE, order: DESC } }
        ) {
          nodes {
            id
          }
        }
      }
    `;
    client
      .query({
        query: query,
      })
      .then((entries) => {
        const ids = entries.data.gfdNewss.nodes;
        const currentIndex = ids.findIndex(
          (result) => result.id === this.newsDetail.id
        );

        this.nextContentLink = ids[currentIndex + 1]
          ? ids[currentIndex + 1].id
          : "";
        this.previousContentLink = ids[currentIndex - 1]
          ? ids[currentIndex - 1].id
          : "";
      });
  },
  methods: {
    someMethod() {
      const CLASSNAME = "-visible";
      const TIMEOUT = 200;

      setInterval(() => {
        const target = document.querySelector(".bg").add(CLASSNAME);
        setTimeout(() => {
          target.remove(CLASSNAME);
        }, TIMEOUT);
      }, TIMEOUT * 2);
    },
  },
};
</script>
<style scoped></style>
