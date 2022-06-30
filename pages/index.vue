<template>
  <div>
    <div><Slider /></div>
    <div class="container mx-auto w-full max-w-screen-lg pt-20">
      <div><Intro /></div>
      <div><Content /></div>
      <div class="relative grid mx-auto md:w-1/3 w-4/5 mt-[57px] mb-[150px]">
        <Button text="SERVICEページへ" url="/service" />
      </div>
    </div>
    <div class="mt-36 bg">
      <img
        src="/images/top/salad_source_pc.webp"
        class="w-full hidden md:block"
      />
      <img src="/images/top/salad_source_sp.webp" class="w-full md:hidden" />
    </div>
    <!-------------------- NEWS -------------------->
    <div v-if="newsList" class="w-full bg-thin_orange py-16">
      <div class="container mx-auto">
        <SectionTitle title="NEWS" />
        <div
          class="flex flex-wrap items-center justify-between md:max-w-screen-lg mx-auto"
        >
          <div
            v-for="news in newsList"
            :key="news.id"
            class="index_news_card md:w-1/3 sm:w-5/12 mb-20 md:mb-0 md:mt-20 mx-auto"
          >
            <CardForTop
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
        <div class="w-full max-w-screen-md mx-auto">
          <div class="relative grid mx-auto md:w-1/3 w-4/5 my-36">
            <Button text="全てのニュースを見る" url="/news" />
          </div>
        </div>
      </div>
    </div>
    <div class="bg">
      <img
        src="/images/top/karaage_party_pc.webp"
        class="w-full hidden md:block"
      />
      <img src="/images/top/karaage_party_sp.webp" class="w-full md:hidden" />
    </div>
    <div class="w-full py-16">
      <div class="container mx-auto">
        <ScrollVisible>
          <SectionTitle title="BRANDS" />
        </ScrollVisible>
        <div
          class="max-w-screen-xl md:flex flex-wrap justify-evenly mx-auto md:mt-24 mt-16"
        >
          <div
            v-for="(brand, i) in brandList"
            class="md:w-1/3 mt-24 md:m-0 px-5"
            :key="i"
          >
            <div class="bg bg-rounded w-[316px] mx-auto">
              <img
                :src="`${brand.custom_fields.topPageMainImg.mediaItemUrl}`"
                class="mx-auto w-[316px]"
              />
            </div>
            <div class="mt-[23px] text-center">
              <ScrollVisible>
                <div>
                  {{ brand.title }}
                </div>
                <p
                  class="mt-[23px] md:w-full w-4/5 mx-auto text-[16px] leading-[1.6] tracking-[.02em] hidden md:block"
                  v-html="brand.custom_fields.topageText"
                />
                <p
                  class="mt-[23px] w-4/5 mx-auto text-[16px] leading-[1.8] tracking-[.02em] md:hidden"
                  v-html="brand.custom_fields.topageText"
                />
              </ScrollVisible>
            </div>
          </div>
        </div>
        <div class="w-full max-w-screen-md mx-auto">
          <div class="relative grid mx-auto md:w-1/3 w-4/5 my-36">
            <Button text="BRANDSページへ" url="/brands" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Slider from "@/components/Slider.vue";
import Intro from "@/components/service/Intro.vue";
import Content from "@/components/service/Content.vue";
import SectionTitle from "@/components/SectionTitle.vue";
import CardForTop from "@/components/news/CardForTop.vue";
import Button from "@/components/Button.vue";
import ScrollVisible from "@/components/common/ScrollVisible.vue";
import "vue-apollo";
import topPageQuery from "~/apollo/queries/topPageQuery.gql";
let newsSize = 3;
export default {
  head() {
    return {
      title: "TOP",
      discription:
        "食でこころが満たされるひとを増やす。おなかがいっぱいになるだけではなく、同時にこころも満たされる。そんなを夢見ています。地域を支えるレストランや、市民の生活を支える飲食に関わる方を支えていくサービスを私たちは展開していきます",
    };
  },
  apollo: {
    topPageQuery: {
      prefetch: "loading",
      query: topPageQuery,
      variables: {
        size: newsSize,
        offset: 0,
        categoryName: "",
      },
      result({ data }) {
        this.newsList = data.gfdNewss.nodes;
        this.brandList = data.gfdBrands.nodes;
      },
    },
  },
  data() {
    return {
      newsList: [],
      brandList: [],
    };
  },
  components: {
    Slider,
    Intro,
    Content,
    SectionTitle,
    CardForTop,
    Button,
    ScrollVisible,
  },
};
</script>
<style scoped>
.index_news_card {
  width: 300px;
}
</style>
