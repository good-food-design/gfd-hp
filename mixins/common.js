const options = {
  root: null,
  rootMargin: "0px 0px -350px",
  threshold: 0,
};
export default {
  beforeUpdate() {
    // rootからbottom:-150pxの位置で発火
    setTimeout(() => {
      const images = document.querySelectorAll(".bg");
      images.forEach((target) => this.onIntersect(target, options));
    }, 700);
  },
  methods: {
    onIntersect(target, options = {}) {
      const observer = new IntersectionObserver(this.addVisibleClass, options);
      // 監視したい要素をobserveする。
      observer.observe(target);
    },
    addVisibleClass(entries) {
      for (const e of entries) {
        if (e.isIntersecting) {
          e.target.classList.add("-visible");
        }
      }
    },
  },
}
