<template>
  <div class="banner_bg_main">
    <img src="/banner_bg.png" alt="" />
  </div>
</template>

<script>
export default {
  name: "BannerBg",
  props: {
    width: {
      type: String,
    },
    height: {
      type: String,
    },
  },
};
</script>

<style lang="stylus" scoped>
.banner_bg_main {
  position: absolute;

  img {
    width: 100%;
    height: 100%;
  }
}
</style>