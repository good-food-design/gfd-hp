<template>
  <nuxt-link :to="`/news/${id}`" class="mx-auto md:w-[260px] w-[138px]">
    <div class="bg rounded-3xl shadow-normal md:w-[260px] w-[138px]">
      <img
        :id="`news-img-${id}`"
        :src="img"
        class="object-cover border-0.5 border-border_gray hover:opacity-85 md:h-[260px] h-[138px] md:w-[260px] w-[138px]"
        @load="load(id)"
      />
    </div>
    <div>
      <div class="md:flex items-center mt-10">
        <p
          class="text-xl mr-6 text-date_gray text-[12px] leading-[1.1] tracking-[.05em]"
        >
          {{ date.split("T")[0].replace(/-/g, "/") }}
        </p>
        <p class="text-xl text-orange mt-5 md:m-0">{{ category }}</p>
      </div>
      <p
        class="mt-5 md:line-clamp-1 line-clamp-2 text-[14px] leading-[1.6] tracking-[.02em]"
      >
        {{ title.replace(/\s+/g, "") }}
      </p>
      <p
        class="mt-3 line-clamp-2 text-[14px] leading-[1.8] tracking-[.02em] font-noto-medium"
      >
        {{
          text.replace(/<("[^"]*"|'[^']*'|[^'">])*>/g, "").replace(/\s+/g, "")
        }}
      </p>
    </div>
  </nuxt-link>
</template>
<script>
import Common from "~/mixins/common";
export default {
  mixins: [Common],
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
