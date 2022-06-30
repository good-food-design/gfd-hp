<template>
  <div>
    <div v-for="(cont, index) in contents" :key="index" class="md:mt-36 mt-24">
      <div>
        <div
          class="hidden md:block container mx-auto w-full max-w-screen-xl md:flex items-center flex justify-evenly"
        >
          <div class="card flex w-1/2 items-center md:pr-[35px]">
            <div class="bg mx-auto my-16 shadow-normal rounded-3xl">
              <img
                :src="`/images/common/service_pc${index + 1}.webp`"
                class="md:w-[446px]"
              />
            </div>
          </div>
          <div class="w-1/2 flex items-center">
            <div>
              <div class="flex items-baseline">
                <ScrollVisible class="inline-block w-full">
                  <p
                    class="mt-[-50px] mb-[-50px] font-noto-black md:text-[50px] tracking-[.07em] relative"
                  >
                    0{{ index + 1 }}
                    <span
                      class="text-orange font-noto-black tracking-widest text-[24px] ml-10 leading-[2.5]"
                      >{{ cont.label }}</span
                    >
                  </p>
                </ScrollVisible>
              </div>
              <div class="whitespace-pre-line mt-[53px]">
                <ScrollVisible>
                  <p
                    class="mt-[-34px] mb-[-34px] pb-[34px] text-[20px] tracking-[0.02em] leading-[1.7]"
                  >
                    {{ cont.topText }}
                  </p>
                  <p
                    class="mt-[-25px] mb-[-25px] text-[16px] tracking-[0.02em] leading-[1.6] font-noto-medium"
                  >
                    {{ cont.bottomText }}
                  </p>
                </ScrollVisible>
              </div>
            </div>
          </div>
        </div>
        <div class="container w-100 mx-auto md:hidden px-10">
          <div
            class="shadow-normal border-1 border-border_gray rounded-2xl pb-16"
          >
            <div class="flex items-center justify-center w-full box-border bg">
              <img
                class="w-4/5"
                :src="`/images/common/service_pc${index + 1}.webp`"
              />
            </div>
            <div class="mx-auto px-[30px] mt-5">
              <div>
                <div class="flex items-baseline">
                  <p
                    class="font-greycliffcf-heavy leading-[1.2] tracking-[.07em] text-[50px] mr-[50px]"
                  >
                    <ScrollVisible>0{{ index + 1 }}</ScrollVisible>
                  </p>
                  <p
                    class="text-orange text-[20px] leading-[3] tracking-[.1em] font-greycliffcf-heavy"
                  >
                    <ScrollVisible>{{ cont.label }}</ScrollVisible>
                  </p>
                </div>
                <div class="whitespace-pre-line mt-[-20px]">
                  <ScrollVisible>
                    <p class="text-[20px] leading-[1.7] tracking-[0.02em]">
                      {{ cont.topText.replace(/\r?\n/g, "") }}
                    </p>
                    <p
                      class="text-[14px] leading-[1.8] tracking-[0.02em] font-noto-medium"
                    >
                      {{ cont.bottomText.replace(/\r?\n/g, "") }}
                    </p>
                  </ScrollVisible>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ScrollVisible from "@/components/common/ScrollVisible.vue";
export default {
  components: {
    ScrollVisible,
  },

  data() {
    return {
      contents: [
        {
          label: "NEW OPEN",
          topText: "今あるお店（キッチン）で\n新たなデリバリー専門店",
          bottomText:
            "厨房や設備はそのまま。\n固定費をかけずに、専門店がスタートできます。",
        },
        {
          label: "DELIVERY",
          topText: "スマホ/タブレットで注文を受けて\nデリバリーでお届け",
          bottomText:
            "Uber EatsやWoltなどのアプリを使い\nタブレットひとつでお客様へ食事をお届けします。",
        },
        {
          label: "NEW PROFIT",
          topText: "ブランドシェアを導入する\nことで収益の拡大が実現",
          bottomText:
            "現在のお店はそのままでデリバリー専門店を\nオープンするので、売上とともに利益UPが可能になります。",
        },
      ],
    };
  },
};
</script>
