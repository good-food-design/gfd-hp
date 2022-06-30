<template>
  <div class="service">
    <ScrollVisible>
      <div>
        <SectionTitle title="SERVICE" />
      </div>
      <div class="text-center">
        <h2
          class="tracking-[.02em] md:leading-[1.9] md:mb-[75px] md:text-[36px] text-[22px] leading-[1.1] mb-[35px] font-noto-black font-thin"
        >
          ブランドシェアリングサービス
        </h2>
        <p
          class="md:text-[24px] tracking-[.02em] md:leading-[1.9] text-[16px] leading-[1.6] md:mb-[0px] mb-[50px]"
        >
          キッチンの稼働率を上げ収益を最大化させる<br />
          飲食店向けのサービスです
        </p>
      </div>
    </ScrollVisible>
  </div>
</template>
<script>
import ScrollVisible from "@/components/common/ScrollVisible.vue";
import SectionTitle from "@/components/SectionTitle.vue";
export default {
  components: {
    SectionTitle,
    ScrollVisible,
  },
};
</script>
