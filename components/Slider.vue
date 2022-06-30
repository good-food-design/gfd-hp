<template>
  <ul v-if="isDesktop" class="slider_fade hidden md:block">
    <img src="/images/top/top_pc1.webp" class="w-full" />
    <img src="/images/top/top_pc2.webp" class="w-full" />
    <img src="/images/top/top_pc3.webp" class="w-full" />
    <img src="/images/top/top_pc4.webp" class="w-full" />
    <div
      class="absolute bottom-0 left-0 translate-x-20 -translate-y-12 text-left px-6 md:p-0"
    >
      <ScrollVisible>
        <h1
          class="text-[70px] leading-[1.1] tracking-[.06em] text-orange font-noto-black font-thin hidden md:block"
        >
          FULL UP YOUR HEART<br />FROM THE KITCHEN.
        </h1>
        <div
          class="text-[16px] leading-[1.8] tracking-[.04em] break-all my-[25px]"
        >
          “食でこころが満たされるひとを増やす”<br />
          おなかがいっぱいになるだけではなく、同時にこころも満たされる。そんなを夢見ています。<br />
          地域を支えるレストランや、市民の生活を支える飲食に関わる方を支えていくサービスを私たちは展開していきます。
        </div>
      </ScrollVisible>
    </div>
  </ul>
  <ul v-else class="slider_fade md:hidden">
    <img src="/images/top/top_sp1.webp" class="w-full" />
    <img src="/images/top/top_sp2.webp" class="w-full" />
    <img src="/images/top/top_sp3.webp" class="w-full" />
    <img src="/images/top/top_sp4.webp" class="w-full" />
    <img src="/images/top/top_sp5.webp" class="w-full" />
    <div
      class="absolute bottom-0 left-0 md:translate-x-16 md:-translate-y-104 -translate-y-10 text-left px-6 md:p-0"
    >
      <ScrollVisible>
        <h1
          class="text-orange font-noto-black font-thin md:hidden text-[43px] leading-[1] tracking-[.06em]"
        >
          FULL UP<br />YOUR HEART<br />FROM<br />THE KITCHEN.
        </h1>
        <div class="my-[20px] text-[12px] leading-[1.8] tracking-[.02em]">
          “食でこころが満たされるひとを増やす”<br />
          おなかがいっぱいになるだけではなく、同時にこころも満たされる。そんなを夢見ています。<br />
          地域を支えるレストランや、市民の生活を支える飲食に関わる方を支えていくサービスを私たちは展開していきます。
        </div>
      </ScrollVisible>
    </div>
  </ul>
</template>
<script>
import ScrollVisible from "@/components/common/ScrollVisible.vue";
export default {
  components: {
    ScrollVisible,
  },
  data() {
    return {
      isDesktop: this.$device.isDesktop,
    };
  },
  name: "Slider",
};
</script>

<style scoped>
.slider_fade {
  position: relative;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  z-index: 100;
}
.slider_fade > img {
  position: absolute;
  visibility: hidden;
  animation: anime_slider_fade 19s 0s infinite;
  height: 100vh;
  object-fit: cover;
}
.slider_fade > img:nth-of-type(2) {
  animation-delay: 4s;
}
.slider_fade > img:nth-of-type(3) {
  animation-delay: 8s;
}
.slider_fade > img:nth-of-type(4) {
  animation-delay: 12s;
}
.slider_fade > img:nth-of-type(5) {
  animation-delay: 15s;
}

@keyframes anime_slider_fade {
  0% {
    visibility: visible;
    opacity: 0;
  }
  15% {
    opacity: 1;
  }
  33.3% {
    opacity: 1;
  }
  48.3% {
    opacity: 0;
  }
  100% {
    opacity: 0;
    transform: scale(1.1);
  }
}
</style>
