<template>
  <div
    class="scroll-visible"
    :class="{
      'animate-fade-in-up': visible,
    }"
  >
    <slot v-if="visible"></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
    };
  },
  mounted() {
    this.handleScroll();
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      if (!this.visible) {
        const top = this.$el.getBoundingClientRect().top;
        if (top < window.innerHeight) {
          this.visible = true;
          this.$el.style.opacity = "1";
        }
      }
    },
  },
};
</script>

<style>
.scroll-visible {
  opacity: 0;
}
</style>
>
