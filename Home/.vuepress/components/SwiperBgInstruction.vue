<template>
  <div class="">
    <!-- Slider main container -->
    <div class="swiper" :style="swiperStyle">
      <!-- Additional required wrapper -->
      <div class="swiper-wrapper">
        <!-- Slides -->
        <div class="swiper-slide" v-for="(item, index) in itemArr" :key="index">
          <img
            v-if="item.type == 0 && item.show == 1"
            :src="item.contentImg"
            alt=""
          />
          <video
            v-if="item.type == 1 && item.show == 1"
            autoplay
            loop
            :src="item.video"
            muted
          ></video>
          <video
            v-if="item.type == 1 && item.show == 0 && adminAccess"
            autoplay
            loop
            :src="item.video"
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
  </div>
</template>

<script>
import Swiper from "../Swiper.js";
import "../Swiper.css";
export default {
  name: "SwiperBgInstruction",
  inject: {
    adminAccess: {
      default: false,
    },
  },
  data() {
    return {
      itemArr: [],
      swiperStyle: {
        background: "url('/banner_bg.png')",
        backgroundSize: "100% 100%",
      },
    };
  },
  watch: {
    pageData: {
      handler(v) {
        this.updateData(v.swiperBgInstruction);
      },
      deep: true,
    },
  },
  methods: {
    updateData(data) {
      data.arr.forEach((item, index) => {
        if (item.show == 0) {
          if (!this.adminAccess) {
            data.arr.splice(index, 1);
          }
        }
      });
      this.itemArr = data.arr;
    },
  },
  mounted() {
    this.updateData(this.pageData.swiperBgInstruction);
    this.$nextTick(() => {
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
        loop: false,
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
    });
  },
};
</script>

<style lang="stylus" scoped>
.swiper {
  width: 100%;
  padding: 8.125rem 0 0 0;
  text-align: center;

  ::v-deep .swiper-pagination-bullet {
    opacity: 1;
  }
}

video {
  height: 816px;
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