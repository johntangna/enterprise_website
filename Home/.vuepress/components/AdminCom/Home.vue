<template>
  <div>
    <scroll-up></scroll-up>
    <div
      class="swiperBgClass"
      :class="{ areaActive: currentIndex == 'swiperBg' }"
      @click="editData('swiperBg', $event)"
    >
      <swiper-bg></swiper-bg>
    </div>
    <div class="content_exhibit">
      <div
        class="main_padding"
        :class="{ areaActive: currentIndex == 'contentArr' }"
        @click="editData('contentArr', $event)"
      >
        <div class="area_content">
          <exhibit-content></exhibit-content>
        </div>
      </div>
    </div>

    <div
      class="content_exhibit"
      style="background: url('/banner_bg.png'); background-size: 100% 100%"
    >
      <!-- <banner-bg :width="'1920'" :height="'565'"></banner-bg> -->
      <div
        class="main_padding"
        :class="{ areaActive: currentIndex == 'evaluateArr' }"
        @click="editData('evaluateArr', $event)"
      >
        <div class="area_content">
          <evaluate :width="77" :height="77"></evaluate>
        </div>
      </div>
    </div>

    <div class="content_exhibit" style="background: #f8f7fd">
      <!-- <banner-bg :width="'1920'" :height="'565'"></banner-bg> -->
      <div
        class="main_padding"
        :class="{ areaActive: currentIndex == 'planArr' }"
        @click="editData('planArr', $event)"
      >
        <div class="area_content">
          <pricing-plan :width="60" :height="60"></pricing-plan>
        </div>
      </div>
    </div>

    <div class="content_exhibit">
      <!-- <banner-bg :width="'1920'" :height="'565'"></banner-bg> -->
      <div
        class="main_padding"
        :class="{ areaActive: currentIndex == 'qaArr' }"
        @click="editData('qaArr', $event)"
      >
        <div class="area_content">
          <appraise :width="37" :height="29"></appraise>
        </div>
      </div>
    </div>

    <div
      class="content_exhibit"
      style="background: url('/need_help_bg.png'); background-size: 100% 100%"
    >
      <!-- <banner-bg :width="'1920'" :height="'565'"></banner-bg> -->
      <div
        class="main_padding"
        :class="{ areaActive: currentIndex == 'helpInfo' }"
        @click="editData('helpInfo', $event)"
      >
        <div class="area_content">
          <need-help></need-help>
        </div>
      </div>
    </div>

    <div class="content_exhibit" style="background: #f2f7fd">
      <!-- <banner-bg :width="'1920'" :height="'565'"></banner-bg> -->
      <div
        class="main_padding"
        :class="{ areaActive: currentIndex == 'teamArr' }"
        @click="editData('teamArr', $event)"
      >
        <div class="area_content">
          <team :width="263" :height="49"></team>
        </div>
      </div>
    </div>

    <div class="content_exhibit">
      <!-- <banner-bg :width="'1920'" :height="'565'"></banner-bg> -->
      <div
        class="main_padding"
        :class="{ areaActive: currentIndex == 'blogTeamArr' }"
        @click="editData('blogTeamArr', $event)"
      >
        <div class="area_content">
          <blog></blog>
        </div>
      </div>
    </div>

    <div class="content_exhibit" style="background: #f2f8fd">
      <!-- <banner-bg :width="'1920'" :height="'565'"></banner-bg> -->
      <div
        class="main_padding"
        :class="{ areaActive: currentIndex == 'contactUs' }"
        @click="editData('contactUs', $event)"
      >
        <div class="area_content">
          <contact-us></contact-us>
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
  name: "Home",
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