<template>
  <a :href="`${url}`">
    <div
      class="md:w-[316px] md:text-[18px] md:py-[26px] text-[14px] w-[276px] py-[22px] mx-auto relative text-center btn-color font-greycliffcf-heavy font-thin hover:opacity-85 text-white rounded-full"
    >
      {{ text }}
      <img
        :src="'/images/common/' + img_file + '.svg'"
        class="absolute top-1/2 right-[20px] -translate-x-5 -translate-y-1/2 hover:-translate-x-3"
      />
    </div>
  </a>
</template>
<script>
export default {
  props: {
    text: String,
    url: String,
    img_file: {
      default: "arrow-goto-page",
      type: String,
    },
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
