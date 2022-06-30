<template>
  <div class="mt-20 md:hidden">
    <div class="vue-slider-content-box">
      <transition-group :name="transitionName" tag="div">
        <div
          class="vue-slider-content"
          v-for="(img, index) in contents"
          :key="index"
        >
          <img :src="img" v-if="visibleContent == index" class="w-full" />
        </div>
      </transition-group>
    </div>
    <div class="flex items-center justify-between mx-auto my-10 mx-5">
      <img
        src="/images/arrow_left.webp"
        @click="sliderPrev"
        class="cursor-pointer hover:-translate-x-2"
      />
      <img
        src="/images/arrow_right.webp"
        @click="sliderNext"
        class="cursor-pointer hover:translate-x-2"
      />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      visibleContent: 0,
      transitionName: "show-next",
    };
  },
  props: {
    contents: Array,
  },
  methods: {
    sliderPrev() {
      this.transitionName = "show-prev";
      if (this.visibleContent === 0) {
        this.visibleContent = this.contents.length - 1;
      } else {
        this.visibleContent--;
      }
    },
    // スライダーを進める処理
    sliderNext() {
      this.transitionName = "show-next";
      if (this.visibleContent === this.contents.length - 1) {
        this.visibleContent = 0;
      } else {
        this.visibleContent++;
      }
    },
  },
};
</script>
<style scoped>
.show-next-enter-active,
.show-next-leave-active,
.show-prev-enter-active,
.show-prev-leave-active {
  transition: all 0.4s;
}
.show-next-enter,
.show-prev-leave-to {
  transform: translateX(100%);
}
.show-next-leave-to,
.show-prev-enter {
  transform: translateX(-100%);
}
</style>
