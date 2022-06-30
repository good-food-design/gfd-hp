<template>
  <section class="service md:mt-48 pt-10">
    <ScrollVisible>
      <Intro />
    </ScrollVisible>
    <div class="text-orange bg-thin_orange md:py-24 md:mt-20 py-20">
      <div class="flex items-center justify-center px-16">
        <ScrollVisible
          class="md:text-[20px] md:leading-[1.8] tracking-[.02em] text-[16px] leading-[1.6]"
        >
          レストランやホテルなど特定の店舗に対して、弊社が運営する飲食ブランドを提供し、<br />
          新たなデリバリー専門レストランをオープンすることができます。<br />
          現在の店舗をそのまま活用するので、設備や人件費はそのままで売上を最大化させるサービスです。
        </ScrollVisible>
      </div>
    </div>
    <div class="md:mt-36 my-10">
      <Content />
    </div>
    <div class="bg mt-36 hidden md:block">
      <img src="/images/service/service1.webp" class="w-full" />
    </div>
    <div class="w-full bg-thin_orange md:py-56 mt-0 py-36">
      <div class="container mx-auto">
        <ScrollVisible>
          <p
            class="md:mb-16 mb-0 text-center md:text-[30px] md:leading-[2.6] md:tracking-[.02em] text-[24px] tracking-[.06em] leading-[3.3]"
          >
            HOW IT WORKS
          </p>
          <p
            class="text-center md:text-[36px] md:leading-[1.2] md:tracking-[.06em] text-[22px] tracking-[.02em] leading-[1.1]"
          >
            サービスの流れ
          </p>
        </ScrollVisible>
        <div
          class="flex flex-wrap items-center justify-between md:w-4/5 mx-auto mt-24 px-[20px] md:p-0 sm-line-grid"
        >
          <div
            class="md:mt-0 md:pt-0 md:w-1/4 w-[157px]"
            v-for="(service, i) in services"
            :key="i"
            :class="{ 'mt-22': i === 3, 'mt-22 pt-10': i === 2, 'pt-10': i === 1 }"
          >
            <label
              class="text-orange md:text-[28px] leading-[2.2] tracking-[.07em] text-[24px]"
              >0{{ i + 1 }}</label
            >
            <img
              :src="service.icon"
              class="mt-5 h-[90px] mx-auto"
              :class="{
                'md:h-64 md:w-2/5': i === 1,
                'md:h-auto w-auto md:w-3/5': !(i === 1),
              }"
            />
            <div class="mt-16 md:ml-16">
              <ScrollVisible>
                <p
                  class="mb-5 md:text-[20px] leading-[1.7] tracking-[.02em] text-[18px]"
                >
                  {{ service.title }}
                </p>
                <p
                  class="leading-[1.6] tracking-[.02em] text-[16px] font-noto-medium"
                >
                  {{ service.discription }}
                </p>
              </ScrollVisible>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg hidden md:block">
      <img src="/images/service/service2.webp" class="w-full" />
    </div>
  </section>
</template>
<script>
import Intro from "@/components/service/Intro.vue";
import Content from "@/components/service/Content.vue";
import ScrollVisible from "@/components/common/ScrollVisible.vue";
export default {
  components: {
    Intro,
    Content,
    ScrollVisible,
  },
  head() {
    return {
      title: "News",
      discription:
        "レストランやホテルなど特定の店舗に対して、弊社が運営する飲食ブランドを提供し、新たなデリバリー専門レストランをオープンすることができます。現在の店舗をそのまま活用するので、設備や人件費はそのままで売上を最大化させるサービスです。",
    };
  },
  data() {
    return {
      services: [
        {
          icon: "/images/common/service/how_it_works_1.webp",
          title: "ヒアリング",
          discription: "房設備や、既存店の状況をお伺いします。",
        },
        {
          icon: "/images/common/service/how_it_works_2.webp",
          title: "スタートパッケージ",
          discription: "メニューや研修販売ツールを提供します。",
        },
        {
          icon: "/images/common/service/how_it_works_3.webp",
          title: "デリバリー店舗OPEN",
          discription: "スマホやタブレットでビジネスが始まります。",
        },
        {
          icon: "/images/common/service/how_it_works_4.webp",
          title: "運用サポート",
          discription: "売上を上げるための様々な施策を提供します。",
        },
      ],
    };
  },
};
</script>


<style>
@media screen and (max-width: 480px) {
  .sm-line-grid {
    @apply grid grid-cols-2 content-start
  }
}
</style