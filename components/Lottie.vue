<template>
  <div
    ref="animationElement"
    class="animation md:w-1/2 w-full mx-auto lottie-anime"
  />
</template>

<script>
export default {
  mounted() {
    this.$lottie.loadAnimation({
      container: this.$refs.animationElement, // the dom element that will contain the animation
      loop: false,
      autoplay: true,
      path: "/animation/data.json", // the path to the animation json
    });
  },
};
</script>

<style lang="scss">
.lottie-anime {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 15px 30px;
  color: #fff;
  text-align: center;
  // width: 300px;
}
</style>
