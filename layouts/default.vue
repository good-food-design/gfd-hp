<template>
  <div :class="{ 'top-op': firstLoding }" v-if="firstLoding">
    <Lottie />
  </div>
  <div class="top-op2 bg" v-else>
    <Navbar />
    <Nuxt />
    <Footer />
  </div>
</template>
<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import Common from "~/mixins/common";
import Lottie from "@/components/Lottie.vue";
export default {
  mixins: [Common],
  components: {
    Navbar,
    Footer,
    Lottie,
  },
  mounted() {
    const keyName = "visited";
    const keyValue = true;
    window.onload = () => {
      if (!sessionStorage.getItem(keyName)) {
        //sessionStorageにキーと値を追加
        sessionStorage.setItem(keyName, keyValue);
        //ここに初回アクセス時の処理
        console.log("初めての訪問です");
        setTimeout(() => {
          this.firstLoding = false;
        }, 3000);
      } else {
        this.firstLoding = false;
      }
    };
  },
  data() {
    return {
      firstLoding: true,
    };
  },
};
</script>
<style lang="scss">
@import "@/assets/styles/app.scss";

.top-op {
  position: fixed;
  top: 0;
  left: 0;
  margin: 0 auto;
  width: 100%;
  height: 100vh;
}
.top-op {
  z-index: 99;
  animation-duration: 2s;
  animation-delay: 2.8s;
  animation-fill-mode: forwards;
  animation-name: opening;
  -webkit-animation-name: opening;
  -webkit-animation-duration: 2s;
  -webkit-animation-delay: 3s;
  -webkit-animation-fill-mode: forwards;
}
@keyframes opening {
  0% {
    width: 100%;
    left: 0;
  }
  50% {
    width: 100%;
  }
  100% {
    width: 0%;
    left: 100%;
  }
}

@-webkit-keyframes @keyframes opening {
  0% {
    width: 100%;
    left: 0;
  }
  50% {
    width: 100%;
  }
  100% {
    width: 0%;
    left: 100%;
  }
}
</style>
