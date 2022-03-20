<template></template>

<script>
export default {
  name: "ScrollUp",
  data() {
    return {
      setTimeout: null,
    };
  },
  methods: {
    debounce(fn) {
      return (wait) => {
        if (this.setTimeout) {
          clearTimeout(this.setTimeout);
          this.setTimeout = null;
        }
        this.setTimeout = setTimeout(() => {
          fn();
        }, wait);
      };
    },
    recordScrollPos() {
      window.localStorage.setItem(
        `scrollY${window.location.pathname}`,
        window.scrollY
      );
    },
    scrollUp() {
      this.debounce(this.recordScrollPos)(300);
    },
  },
  mounted() {
    this.pageData = new Function(
      "return " +
        JSON.parse(window.localStorage.getItem("pageData"))[0].jsonContent
    )();
    this.$nextTick(() => {
      setTimeout(() => {
        window.scrollTo(
          0,
          Number(
            window.localStorage.getItem(`scrollY${window.location.pathname}`)
          )
        );
      }, 300);
    });
    window.addEventListener("scroll", this.scrollUp);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.scrollUp);
  },
};
</script>