<template>
  <nuxt-link :to="`/news/${id}`" class="mx-auto mt-10">
    <div class="bg rounded-large shadow-normal">
      <img
        :id="`news-img-${id}`"
        :src="img"
        class="object-cover rounded-large hover:opacity-85"
        @load="load(id)"
      />
    </div>
    <div>
      <ScrollVisible>
        <div class="flex items-center mt-10">
          <p class="text-xl mr-6 text-date_gray">
            {{ date.split("T")[0].replace(/-/g, "/") }}
          </p>
          <p class="text-xl text-orange md:m-0 font-greycliffcf-heavy">
            {{ category }}
          </p>
        </div>
        <p class="mt-5 line-clamp-1 text-[14px] leading-[1.6] tracking-[.02em]">
          {{ title.replace(/\s+/g, "") }}
        </p>
        <p class="mt-3 line-clamp-2 text-[14px] leading-[1.8] tracking-[.02em]">
          {{
            text.replace(/<("[^"]*"|'[^']*'|[^'">])*>/g, "").replace(/\s+/g, "")
          }}
        </p>
      </ScrollVisible>
    </div>
  </nuxt-link>
</template>
<script>
import ScrollVisible from "@/components/common/ScrollVisible.vue";
import Common from "~/mixins/common";
export default {
  mixins: [Common],
  components: {
    ScrollVisible,
  },
  props: {
    id: String,
    title: String,
    date: String,
    category: String,
    text: String,
    img: String,
  },
  methods: {
    load(id) {
      const options = {
        root: null,
        rootMargin: "0px 0px -350px",
        threshold: 0,
      };
      var target = document.getElementById("news-img-" + id);
      this.onIntersect(target, options);
    },
  },
};
</script>
<style scoped>
img {
  height: 300px;
}
</style>
