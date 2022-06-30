<template>
  <transition>
    <header
      class="fixed w-full bg-transparent top-0 flex items-center justify-between"
    >
      <div
        class="w-full md:pl-16 pl-5 mx-auto flex items-center justify-between"
      >
        <a href="/" class="" v-if="scrollY === 0">
          <img
            src="/images/common/header-logo.webp"
            class="mr-3 h-9"
            alt="Logo"
          />
        </a>
        <a href="/" class="" v-else>
          <img
            src="/images/common/logo-short.webp"
            class="h-12 md:h-15 mt-3"
            alt="Logo"
          />
        </a>

        <!-- ハンバーガーボタン -->
        <div
          v-show="isMobile"
          class="hamburger"
          @click="toggleNav"
          :class="{ active: isActiveMenu }"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <!-- グローバルメニュー -->
        <nav class="md:flex flex-grow items-center hidden md:block">
          <ul
            class="flex flex-col md:flex-row list-none md:ml-auto p-20 pb-4 bg-orange"
          >
            <li v-for="(link, i) in links" :key="i">
              <a :href="`${link.link}`" class="nav-link">{{ link.label }}</a>
            </li>
          </ul>
        </nav>
        <!-- sp -->
        <nav
          v-show="!isMobile || isActiveMenu"
          class="menu bg-white bg-opacity-85 md:hidden"
          :class="{ open: isActiveMenu }"
        >
          <ul
            class="absolute top-1/2 left-1/4 -translate-x-1/4 -translate-y-1/2"
          >
            <li
              v-for="(link, i) in linkMenus"
              :key="i"
              class="rigth-fadein mt-10"
              :class="`txt0${i + 1}`"
            >
              <a
                :href="`${link.link}`"
                class="py-2 pr-4 pl-3 font-light text-orange focus:text-black"
                >{{ link.label }}</a
              >
            </li>
          </ul>
        </nav>
      </div>
    </header>
  </transition>
</template>
<script>
export default {
  data() {
    return {
      visible: true,
      scrollY: 0,
      windowWidth: 768,
      isActiveMenu: false,
      links: [
        { label: "NEWS", link: "/news" },
        { label: "SERVICE", link: "/service" },
        { label: "BRANDS", link: "/brands" },
        { label: "COMPANY", link: "/company" },
      ],

      linkMenus: [
        { label: "NEWS", link: "/news" },
        { label: "SERVICE", link: "/service" },
        { label: "BRANDS", link: "/brands" },
        { label: "COMPANY", link: "/company" },
        { label: "CONTACT", link: "/contact" },
        { label: "PRIVACY POLICY", link: "/privacy_policy" },
      ],
    };
  },
  methods: {
    handleScroll() {
      if (this.scrollY > window.scrollY) {
        this.visible = true;
      } else {
        this.visible = false;
      }
      this.scrollY = window.scrollY;
    },
    toggleNav() {
      this.isActiveMenu = !this.isActiveMenu;
    },
  },
  computed: {
    isMobile() {
      return this.windowWidth < 768;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);

    this.windowWidth = window.innerWidth;
    this.$nextTick(() => {
      window.addEventListener("resize", () => {
        this.windowWidth = window.innerWidth;
      });
    });
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>
<style scoped>
header {
  z-index: 1000;
}
.nav-link {
  @apply py-2 pr-4 pl-3 text-white font-light hover:text-opacity-75 focus:text-black;
}
.v-enter {
  opacity: 0;
}
.v-enter-active,
.v-leave-active {
  transition: opacity 1.5s;
}
.v-enter-to {
  opacity: 1;
}
.v-leave-to {
  opacity: 0;
  transition: opacity 1s;
}
.hamburger {
  width: 50px;
  height: 50px;
  background: #fe4731;
  padding: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.hamburger span {
  background: #000;
  width: 25px;
  height: 1px;
  position: absolute;
  transition: 0.3s ease-out;
}
.hamburger span:nth-of-type(1) {
  top: 15px;
}
.hamburger span:nth-of-type(3) {
  bottom: 15px;
}
.hamburger.active span:nth-of-type(1) {
  transform: translateY(9px) rotate(-45deg);
  transition: 0.3s ease-out;
}
.hamburger.active span:nth-of-type(3) {
  transform: translateY(-9px) rotate(45deg);
  transition: 0.3s ease-out;
}
.hamburger.active span:nth-of-type(2) {
  opacity: 0;
}
.menu {
  height: 100vh;
  width: calc(100% - 50px);
  position: fixed;
  z-index: 999;
  top: 0;
  left: -120%;
  transition: all 0.6s;
}
.menu.open {
  left: 0;
}
.rigth-fadein {
  opacity: 0;
  animation: fade 1s ease forwards;
}
@keyframes fade {
  from {
    opacity: 0;
    transform: translatex(0);
  }
  to {
    opacity: 1;
    transform: translatex(-30px);
  }
}
.txt02 {
  animation-delay: 0.3s;
}
.txt03 {
  animation-delay: 0.6s;
}
.txt04 {
  animation-delay: 0.9s;
}
.txt05 {
  animation-delay: 1.2s;
}
.txt06 {
  animation-delay: 1.5s;
}
</style>
