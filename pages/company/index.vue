<template>
  <div>
    <div class="relative">
      <img
        src="/images/company/karaage_pc.webp"
        class="w-full hidden md:block"
      />
      <img src="/images/company/karaage_sp.webp" class="w-full md:hidden" />
      <div
        class="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 text-center w-full"
      >
        <ScrollVisible>
          <h2
            class="font-thin mt-10 md:text-[36px] md:leading-[1.9] tracking-[.06em] mb-[70px] text-[20px] leading-[1.2]"
          >
            こころを満たす食を提供する
          </h2>
          <p class="discription-md-p">
            おいしいごはんを食べるだけで、<br />
            会話が弾み、笑顔が生まれる。<br />
            おいしいは人を豊かにします。<br /><br />
            わたしたちは「おいしい」にもうひと工夫して、<br />
            つくるひと、届ける人、たべるひと、<br />
            ひととひとがつながり、<br />
            こころが豊かになるサービスを提供します。<br />
          </p>
        </ScrollVisible>
      </div>
    </div>
    <section class="company mb-64 md:mt-48 p-10">
      <SectionTitle title="COMPANY" />
      <ScrollVisible>
        <div v-html="company" />
      </ScrollVisible>
    </section>
  </div>
</template>
<script>
import SectionTitle from "@/components/SectionTitle.vue";
import ScrollVisible from "@/components/common/ScrollVisible.vue";
export default {
  head() {
    return {
      title: "Company",
    };
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
    const allNews = gql`
      query GfdNewsList {
        gfdCampanies(first: 10) {
          edges {
            node {
              id
              custom_fields {
                content
              }
            }
          }
        }
      }
    `;
    return client
      .query({
        query: allNews,
      })
      .then((entries) => {
        this.company =
          entries.data.gfdCampanies.edges[0].node.custom_fields.content;
      });
  },
  data() {
    return {
      company: "",
    };
  },
  components: {
    SectionTitle,
    ScrollVisible,
  },
};
</script>

<style scoped>
.discription-md-p {
  @apply md:text-[20px] leading-[2.3] tracking-[.02em] text-[16px];
}
</style>
