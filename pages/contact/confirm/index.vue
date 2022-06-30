<template>
  <section class="contact mb-64 md:mt-48 p-10">
    <SectionTitle title="CONTACT" />
    <div class="container mx-auto w-full max-w-screen-md">
      <form
        id="contact-form"
        class="formrun"
        action="https://form.run/api/v1/r/boarllbnwlrillkesmq0wy3y"
        method="post"
      >
        <input class="hidden" type="text" name="お名前" :value="contact.name" />
        <input
          class="hidden"
          type="text"
          name="会社名/店舗名"
          :value="contact.company"
        />
        <input
          class="hidden"
          type="email"
          name="メールアドレス"
          :value="contact.email"
        />
        <input class="hidden" type="tel" name="電話番号" :value="contact.tel" />
        <textarea
          class="hidden"
          name="お問い合わせ内容"
          :value="contact.message"
        />
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label class="block uppercase tracking-wide text-md mb-2">
              お名前<span class="ml-7 text-red-500 text-xl">必須</span>
            </label>
            <p class="py-3 mb-3">{{ contact.name }}</p>
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label class="block uppercase tracking-wide text-md mb-2">
              会社名 / 店舗名<span class="ml-7 text-red-500 text-xl">必須</span>
            </label>
            <p class="py-3 mb-3">{{ contact.company }}</p>
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label class="block uppercase tracking-wide text-md mb-2">
              メールアドレス<span class="ml-7 text-red-500 text-xl">必須</span>
            </label>
            <p class="py-3 mb-3">{{ contact.email }}</p>
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label class="block uppercase tracking-wide text-md mb-2">
              電話番号<span class="ml-7 text-red-500 text-xl">必須</span>
            </label>
            <p class="py-3 mb-3">{{ contact.tel }}</p>
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label class="block uppercase tracking-wide text-md mb-2">
              お問い合わせ内容<span class="ml-7 text-red-500 text-xl"
                >必須</span
              >
            </label>
            <p class="py-3 mb-3">{{ contact.message }}</p>
          </div>
        </div>
        <div class="relative grid mx-auto md:w-1/3 w-4/5 mt-40">
          <template>
            <a @click="submit">
              <div
                class="md:w-[316px] md:text-[18px] md:py-[26px] text-[14px] w-[276px] py-[22px] mx-auto relative text-center btn-color font-greycliffcf-heavy font-thin hover:opacity-85 text-white rounded-full"
              >
                送信する
                <img
                  :src="'/images/common/' + 'arrow-goto-page' + '.svg'"
                  class="absolute top-1/2 right-[20px] -translate-x-5 -translate-y-1/2 hover:-translate-x-3"
                />
              </div>
            </a>
          </template>
        </div>
      </form>
    </div>
  </section>
</template>
<script>
import SectionTitle from "@/components/SectionTitle.vue";
import Button from "@/components/Button.vue";
export default {
  head() {
    return {
      title: "Contact Confirm",
    };
  },
  methods: {
    submit() {
      $("#contact-form").submit();
    },
  },
  data() {
    const getContactData = this.$store.getters["contact/getContact"];
    return {
      contact: {
        name: getContactData.name,
        email: getContactData.email,
        company: getContactData.company,
        message: getContactData.message,
        tel: getContactData.tel,
      },
    };
  },
  components: {
    SectionTitle,
    Button,
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
