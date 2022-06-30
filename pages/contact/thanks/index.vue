<template>
  <section class="contact mb-64 md:mt-48 p-10">
    <SectionTitle title="CONTACT" />
    <div class="container mx-auto w-full max-w-screen-md text-center my-40">
      <h1 class="text-8xl font-noto-black font-thin">Thank you.</h1>
      <p class="mt-16 w-2/3 mx-auto">
        お問い合わせいただき、ありがとうございます。<br />
        数日以内に担当者よりご連絡をさせていただきます。
      </p>
    </div>
  </section>
</template>
<script>
import SectionTitle from "@/components/SectionTitle.vue";
export default {
  head() {
    return {
      title: "Contact Thanks",
    };
  },
  components: {
    SectionTitle,
  },
};
</script>
