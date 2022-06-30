<template>
  <div class="container mx-auto w-full max-w-screen-md my-24">
    <h1 class="text-center font-noto-black font-thin">
      <img
        src="/images/common/logo.svg"
        class="inline-block align-middle mr-5"
      />
      <span
        class="align-middle md:text-[30px] md:tracking-[.2em] md:leading-[2.6] text-[24px] leading-[2.6] tracking-[.0.6em]"
      >
        {{ title }}
      </span>
    </h1>
  </div>
</template>
<script>
export default {
  props: {
    title: String,
  },
};
</script>
