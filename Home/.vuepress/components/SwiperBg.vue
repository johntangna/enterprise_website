<template>
  <!-- Slider main container -->
  <div class="swiper" :style="swiperStyle">
    <!-- Additional required wrapper -->
    <div class="swiper-wrapper">
      <!-- Slides -->
      <div class="swiper-slide" v-for="(item, index) in itemArr" :key="index">
        <img v-if="item.type == 0" :src="item.link" alt="" />
        <video
          v-if="item.type == 1"
          autoplay
          loop
          :src="item.link"
          muted
        ></video>
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
        { type: 1, link: "/video.mp4" },
        { type: 0, link: "/swiper1.jpg" },
        { type: 0, link: "/swiper2.jpg" },
        { type: 0, link: "/swiper3.jpg" },
        { type: 0, link: "/swiper4.jpg" },
      ],
      swiperStyle: {
        background: "url('/banner_bg.png')",
        backgroundSize: "100% 100%",
      },
    };
  },
  mounted() {
    const swiper = new Swiper(".swiper", {
      effect: "flips",
      // creativeEffect: {
      //   prev: {
      //     translate: [0, 0, -400],
      //   },
      //   next: {
      //     translate: ["100%", 0, 0],
      //   },
      // },
      // Optional parameters
      loop: true,
      autoplay: {
        delay: 30000,
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
  width: 100%;
  padding: 8.125rem 0 0 0;
  text-align: center;

  img {
    width: 95%;
  }
}

video {
  width: 90%;
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