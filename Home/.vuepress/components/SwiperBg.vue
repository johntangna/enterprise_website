<template>
  <!-- Slider main container -->
  <div class="swiper">
    <!-- Additional required wrapper -->
    <div class="swiper-wrapper">
      <!-- Slides -->
      <div class="swiper-slide" v-for="(item, index) in itemArr" :key="index">
        <img :src="item.link" alt="" />
      </div>
    </div>
    <!-- If we need pagination -->
    <div class="swiper-pagination"></div>

    <!-- If we need navigation buttons -->
    <!-- <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div> -->

    <!-- If we need scrollbar -->
    <div class="swiper-scrollbar"></div>
  </div>
</template>

<script>
import Swiper from "../Swiper.js";
import "../Swiper.css";
export default {
  name: "SwiperBg",
  data() {
    return {
      itemArr: [
        { link: "/swiper1.jpg" },
        { link: "/swiper2.jpg" },
        { link: "/swiper3.jpg" },
        { link: "/swiper4.jpg" },
      ],
    };
  },
  mounted() {
    const swiper = new Swiper(".swiper", {
      // Optional parameters
      loop: true,
      autoplay: {
        delay: 3000,
      },
      // If we need pagination
      pagination: {
        el: ".swiper-pagination",
      },

      // Navigation arrows
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

      // And if we need scrollbar
      // scrollbar: {
      //   el: ".swiper-scrollbar",
      // },
    });
  },
};
</script>

<style lang="stylus" scoped>
.swiper {
  width: 1920px;
  height: 896px;
}

.swiper-scrollbar {
  display: none;
}

::v-deep .swiper-pagination-bullet {
  background: #5daeff;
}

::v-deep .swiper-pagination-bullet-active {
  background: #fff;
}
</style>