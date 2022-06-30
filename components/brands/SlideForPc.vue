<template>
  <div class="hidden md:block">
    <div
      class="flex flex-wrap items-center justify-between mx-auto max-w-screen-lg mt-20"
    >
      <div
        class="bg w-1/2 rounded-2xl mb-10"
        v-for="img in contents"
        :key="img"
      >
        <img :src="img" :class="index % 2 === 0 ? 'pr-5' : 'pl-5'" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    contents: Array,
  },
};
</script>
