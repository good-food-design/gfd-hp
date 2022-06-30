<template>
  <section class="contact mb-64 md:mt-48 p-10">
    <SectionTitle title="CONTACT" />
    <div class="container mx-auto w-full max-w-screen-md">
      <form>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label class="block uppercase tracking-wide text-md mb-2">
              お名前<span class="ml-10 text-red-500 text-xl">必須</span>
            </label>
            <input
              v-model="contact.name"
              class="appearance-none block w-full border border-thin_gray rounded mb-3 focus:outline-none placeholder-gray"
              type="text"
              placeholder="山田太郎"
            />
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label class="block uppercase tracking-wide text-md mb-2">
              会社名 / 店舗名<span class="ml-10 text-red-500 text-xl"
                >必須</span
              >
            </label>
            <input
              v-model="contact.company"
              class="appearance-none block w-full border border-thin_gray rounded mb-3 focus:outline-none placeholder-gray"
              type="text"
              placeholder="株式会社FOOD"
            />
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label class="block uppercase tracking-wide text-md mb-2">
              メールアドレス<span class="ml-10 text-red-500 text-xl">必須</span>
            </label>
            <input
              v-model="contact.email"
              class="appearance-none block w-full bg-thin_gray border border-thin_gray rounded p-7 mb-3 focus:outline-none placeholder-gray"
              type="email"
              placeholder="yamada@foodinc.jp"
            />
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label class="block uppercase tracking-wide text-md mb-2">
              電話番号<span class="ml-10 text-red-500 text-xl">必須</span>
            </label>
            <input
              v-model="contact.tel"
              class="appearance-none block w-full bg-thin_gray border border-thin_gray rounded p-7 mb-3 focus:outline-none placeholder-gray"
              type="number"
              placeholder="09012345678"
            />
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label
              class="block uppercase tracking-wide text-md mb-2"
              for="grid-password"
            >
              お問い合わせ内容
            </label>
            <textarea
              v-model="contact.message"
              class="no-resize appearance-none block w-full bg-thin_gray border border-thin_gray rounded p-7 mb-3 focus:outline-none h-64 resize-none"
            ></textarea>
          </div>
        </div>
        <div class="relative grid mx-auto md:w-1/3 w-4/5 mt-40">
          <a @click="submit">
            <div
              class="md:w-[316px] md:text-[18px] md:py-[26px] text-[14px] w-[276px] py-[22px] mx-auto relative text-center btn-color font-thin hover:opacity-85 text-white rounded-full"
            >
              内容を確認する
              <img
                :src="'/images/common/' + 'arrow-goto-page' + '.svg'"
                class="absolute top-1/2 right-[20px] -translate-x-5 -translate-y-1/2 hover:-translate-x-3"
              />
            </div>
          </a>
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
      title: "Contact",
    };
  },
  data() {
    return {
      contact: {
        name: "",
        company: "",
        email: "",
        tel: "",
        message: "",
      },
    };
  },
  methods: {
    submit() {
      // storeに保存
      this.$store.dispatch(`contact/addAction`, this.contact);
      this.$router.push("/contact/confirm/");
    },
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

input[type="text"],
input[type="tel"],
input[type="email"] {
  padding: 1.75rem;
  background: #f7f8fa;
  font-family: "notosans-jp-mediam";
}
</style>
