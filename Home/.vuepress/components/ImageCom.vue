<template>
  <div></div>
  <!-- <banner-bg :width="bgWidth" :height="bgHeight"></banner-bg> -->
</template>
<script>
import BannerBg from "./BannerBg.vue";
export default {
  name: "ImageCom",
  components: {
    BannerBg,
  },
  props: {
    src: {
      type: String,
    },
    width: {
      type: Number,
    },
    height: {
      type: Number,
    },
    headerImg: {
      type: String,
    },
    bgWidth: {
      type: String,
    },
    bgHeight: {
      type: String,
    },
  },
  mounted() {
    let original_ele = document.getElementsByClassName("home-link")[0];
    let imgLogo = document.getElementById("imgLogo");
    if (imgLogo) original_ele.removeChild(imgLogo);
    let nav_bar = document.getElementsByClassName("navbar")[0];
    nav_bar.style.background = `url("${this.headerImg}")`;
    nav_bar.style.backgroundSize = "100% 100%";
    let img = document.createElement("img");
    img.id = "imgLogo";
    img.src = this.src;
    img.width = this.width;
    img.height = this.height;
    img.style.margin = "35px 0 0 80px";
    original_ele.appendChild(img);
  },
};
</script>