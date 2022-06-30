<template>
  <section class="brands mb-64 md:mt-48 p-10 mt-28">
    <ScrollVisible>
      <SectionTitle title="BRANDS" />
    </ScrollVisible>
    <div class="mx-auto max-w-screen-lg">
      <div class="one-brand" v-for="(brand, i) in brandList" :key="i">
        <div class="bg bg-rounded">
          <img
            :src="`${brand.custom_fields.mainImage.mediaItemUrl}`"
            class="w-full hidden md:block"
          />
          <img
            :src="`${brand.custom_fields.spMainImage.mediaItemUrl}`"
            class="w-full md:hidden"
          />
        </div>
        <div class="w-full flex justify-between items-center mt-16">
          <div>
            <ScrollVisible>
              {{ brand.title }}
            </ScrollVisible>
          </div>
          <template>
            <a
              :href="`${brand.custom_fields.brandUrl}`"
              target="_blank"
              class="md:w-[160px]"
            >
              <div
                class="hidden md:block w-[160px] relative text-[12px] leading-[1.1] tracking-[.05em] text-center btn-color font-thin hover:opacity-85 text-white px-[30px] py-[20px] rounded-full"
              >
                BRAND SITE
                <img
                  src="/images/common/arrow_brand_diagonal.svg"
                  class="absolute bottom-[10px] right-[0px] -translate-x-5 -translate-y-1/2 hover:-translate-x-3"
                />
              </div>
            </a>
          </template>
        </div>
        <p class="mt-10 md:m-0">
          <ScrollVisible
            class="text-[16px] leading-[1.8] tracking-[.04em] font-noto-medium"
            v-html="brand.content"
          >
          </ScrollVisible>
        </p>
        <div class="md:hidden flex justify-end">
          <div class="relative mt-10">
            <template>
              <a
                :href="`${brand.custom_fields.brandUrl}`"
                target="_blank"
                class="md:w-[160px]"
              >
                <div
                  class="md:hidden w-[160px] relative text-[12px] leading-[1.1] tracking-[.05em] text-center btn-color font-thin hover:opacity-85 text-white px-[30px] py-[20px] rounded-full"
                >
                  BRAND SITE
                  <img
                    src="/images/common/arrow_brand_diagonal.svg"
                    class="absolute bottom-[10px] right-[0px] -translate-x-5 -translate-y-1/2 hover:-translate-x-3"
                  />
                </div>
              </a>
            </template>
          </div>
        </div>
        <div>
          <SlideForPc
            :contents="[
              brand.custom_fields.subImages1.mediaItemUrl,
              brand.custom_fields.subImages2.mediaItemUrl,
              brand.custom_fields.subImages3.mediaItemUrl,
              brand.custom_fields.subImages4.mediaItemUrl,
            ]"
          />
        </div>
        <div>
          <SlideForSp
            :contents="[
              brand.custom_fields.subImages1.mediaItemUrl,
              brand.custom_fields.subImages2.mediaItemUrl,
              brand.custom_fields.subImages3.mediaItemUrl,
              brand.custom_fields.subImages4.mediaItemUrl,
            ]"
          />
        </div>
        <hr class="my-36" />
      </div>
    </div>
  </section>
</template>
<script>
import SectionTitle from "@/components/SectionTitle.vue";
import Button from "@/components/Button.vue";
import SlideForPc from "@/components/brands/SlideForPc.vue";
import SlideForSp from "@/components/brands/SlideForSp.vue";
import ScrollVisible from "@/components/common/ScrollVisible.vue";
export default {
  head() {
    return {
      title: "Brands",
    };
  },
  components: {
    SectionTitle,
    Button,
    SlideForPc,
    SlideForSp,
    ScrollVisible,
  },
  mounted() {
    const fetch = require("node-fetch");
    const { gql } = require("apollo-boost");
    const ApolloBoost = require("apollo-boost");
    const ApolloClient = ApolloBoost.default;
    const client = new ApolloClient({
      fetch: fetch,
      uri: "https://admin.gfd.jp/graphql",
    });
    const allBrands = gql`
      query GfdNewsList {
        gfdBrands(where: { orderby: { field: DATE, order: ASC } }) {
          nodes {
            content
            title
            custom_fields {
              brandUrl
              spMainImage {
                mediaItemUrl
              }
              mainImage {
                mediaItemUrl
              }
              subImages1 {
                mediaItemUrl
              }
              subImages2 {
                mediaItemUrl
              }
              subImages3 {
                mediaItemUrl
              }
              subImages4 {
                mediaItemUrl
              }
            }
          }
        }
      }
    `;
    return client
      .query({
        query: allBrands,
      })
      .then((entries) => {
        this.brandList = entries.data.gfdBrands.nodes;
      });
  },
  data() {
    return {
      brandList: [],
    };
  },
};
</script>

<style scoped>
.btn-color {
  background-image: -moz-linear-gradient(rgba(254, 71, 49), rgba(255, 182, 44));
  background-image: -webkit-linear-gradient(
    rgba(254, 71, 49),
    rgba(255, 182, 44)
  );
  background-image: linear-gradient(
    to right,
    rgba(254, 71, 49),
    rgba(255, 182, 44)
  );
}
</style>
