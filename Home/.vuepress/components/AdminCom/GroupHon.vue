<template>
  <div>
    <scroll-up></scroll-up>
    <div
      class="swiperBgClass"
      :class="{ areaActive: currentIndex == 'swiperBgHonor' }"
      @click="editData('swiperBgHonor', $event)"
    >
      <swiper-bg-honor></swiper-bg-honor>
    </div>

    <div class="content_exhibit">
      <div
        class="main_padding"
        style="padding: 0 !important"
        :class="{ areaActive: currentIndex == 'honorRecommed' }"
        @click="editData('honorRecommed', $event)"
      >
        <div class="area_content">
          <honor-recommend></honor-recommend>
        </div>
      </div>
    </div>

    <div class="content_exhibit">
      <div
        class="main_padding"
        style="padding: 5.8rem 10rem 6.2rem"
        :class="{ areaActive: currentIndex == 'honorPrise' }"
        @click="editData('honorPrise', $event)"
      >
        <div class="area_content">
          <honor-prise></honor-prise>
        </div>
      </div>
    </div>

    <div class="content_exhibit">
      <!-- <banner-bg :width="'1920'" :height="'565'"></banner-bg> -->
      <div
        class="main_padding"
        style="padding: 0 !important"
        :class="{ areaActive: currentIndex == 'honorTrophy' }"
        @click="editData('honorTrophy', $event)"
      >
        <div class="area_content">
          <honor-trophy></honor-trophy>
        </div>
      </div>
    </div>

    <div
      class="content_exhibit"
      style="background: url('/widget_bg.png'); background-size: 100% 100%"
    >
      <!-- <banner-bg :width="'1920'" :height="'565'"></banner-bg> -->
      <div
        class="main_padding"
        :class="{ areaActive: currentIndex == 'companyInfo' }"
        @click="editData('companyInfo', $event)"
      >
        <div class="area_content">
          <company-info></company-info>
        </div>
      </div>
    </div>
    <div
      class="bottomClass"
      :class="{ areaActive: currentIndex == 'BottomCom' }"
      @click="editData('BottomCom', $event)"
    >
      <bottom-com />
    </div>
  </div>
</template>

<script>
import { eventBus } from "../../EventBus.js";
export default {
  name: "GroupHon",
  data() {
    return {
      currentIndex: "",
    };
  },
  methods: {
    editData(key, event) {
      if (this.currentIndex == key) return;
      console.info(this.pageData[key]);
      this.currentIndex = key;
      window.localStorage.setItem("currentOperateObj", key);
      eventBus.$emit("currentIndex", this.currentIndex);
    },
  },
  mounted() {
    let obj_localstorage = window.localStorage.getItem("currentOperateObj");
    if (obj_localstorage) {
      this.currentIndex = obj_localstorage;
    }
  },
  beforeDestroy() {},
};
</script>

<style lang="stylus" scoped>
#admin {
  &.content_right {
    .main_padding {
      padding: 5.8rem 8rem 6.2rem !important;
    }
  }
}

.bottomClass {
  position: relative;
}

.areaActive {
  border: 2px solid #71d7f7;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    z-index: 99;
    left: 50%;
    transform: translateX(-50%);
    border-top: 15px solid #71d7f7;
    border-left: 25px solid transparent;
    border-right: 25px solid transparent;
  }
}
</style>