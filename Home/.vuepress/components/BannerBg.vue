<template>
  <div style="position: absolute">
    <img src="/banner_bg.png" :Width="width" :Height="height" alt="" />
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