<template>
  <div class="admin">
    <div class="header">
      <img src="/pure.png" alt="" />
      <span>您好，管理员</span>
      <span class="border_bottom" @click="logout">退出UI管理</span>
      <span class="border_bottom" @click="reloadPage">重置本页</span>
    </div>
    <div class="content">
      <div class="abs content_left over_auto">
        <div
          v-for="(menu, index) in menuArr"
          :class="{ active: currentIndex == index }"
          :key="index"
          @click="editData(menu, index)"
        >
          <span>{{ menu.text }}</span>
        </div>
      </div>
      <div class="abs com_pane pos flex_row flex_vertical">
        <component :is="currentCom"></component>
        <submit-btn></submit-btn>
      </div>
      <div id="admin" class="content_right">
        <home></home>
      </div>
    </div>
  </div>
</template>

<script>
import Home from "./AdminCom/Home.vue";
import TextCom from "./AdminCom/TextCom.vue";
import SubmitBtn from "./AdminCom/SubmitBtn.vue";
import PictureCom from "./AdminCom/PictureCom.vue";
import SwiperBg from "./SwiperBg.vue";
import ExhibitContent from "./ExhibitContent.vue";
import Evaluate from "./Evaluate.vue";
import PricingPlan from "./PricingPlan.vue";
import Appraise from "./Appraise.vue";
import NeedHelp from "./NeedHelp.vue";
import Team from "./Team.vue";
import Blog from "./Blog.vue";
import ContactUs from "./ContactUs.vue";
import CompanyInfo from "./CompanyInfo.vue";
import BottomCom from "./BottomCom.vue";
import ScrollUp from "./ScrollUp.vue";
import CompanyIns from "./CompanyIns.vue";
import Ka from "./Ka.vue";
import ParternBrand from "./ParternBrand.vue";
export default {
  name: "admin",
  components: {
    SwiperBg,
    ExhibitContent,
    Evaluate,
    PricingPlan,
    Appraise,
    NeedHelp,
    Team,
    Blog,
    ContactUs,
    CompanyInfo,
    BottomCom,
    TextCom,
    SubmitBtn,
    PictureCom,
    Home,
    ScrollUp,
    CompanyIns,
    Ka,
    ParternBrand,
  },
  provide() {
    return {
      adminAccess: true,
    };
  },
  data() {
    return {
      jsonContent: {},
      menuArr: [
        { text: "首页", link: "home" },
        {
          text: "关于我们",
          itemsArr: [
            { text: "集团简介", link: "instruction" },
            { text: "分支结构", link: "constraction" },
          ],
        },
        { text: "电商运营服务", link: "ecommerce" },
      ],
      com: null,
      currentIndex: 0,
      typeArea: 1, //1 is text,2 is picture, 0 is nothing
      open: false,
    };
  },
  methods: {
    logout() {
      window.localStorage.setItem("default-admin", "");
      window.location.reload();
    },
    reloadPage() {
      window.location.reload();
    },
    editData(menu, index) {},
  },
  computed: {
    currentCom() {
      let result;
      switch (this.typeArea) {
        case 0:
          result = null;
          break;
        case 1:
          result = "TextCom";
          break;
        case 2:
          result = "PictureCom";
          break;
      }
      return result;
    },
  },
  mounted() {
    this.jsonContent = JSON.parse(window.localStorage.getItem("pageData"))[0];
  },
};
</script>

<style lang="stylus" scoped>
.header {
  width: 100%;
  background: #1d2327;
  height: 1.875rem;
  position: fixed;
  z-index: 999;
  text-align: right;
  line-height: 1.875rem;
  font-size: 14px;

  img {
    position: fixed;
    height: 18px;
    left: 1.25rem;
    top: 5px;
  }

  span {
    color: #f0f0f1;

    &+span {
      margin-left: 1.25rem;
      cursor: pointer;
    }

    &:last-child {
      margin-right: 1.25rem;
    }
  }

  .border_bottom {
    border-bottom: 1px solid #f0f0f1;
  }
}

.content {
  display: flex;

  .abs {
    position: fixed;
    top: 1.875rem;
    bottom: 0px;
    left: 0;
    z-index: 100;
  }

  .content_left {
    width: 10rem;
    background: #1d2327;
    padding: 1.25rem;

    div {
      cursor: pointer;
      margin: 1.25rem 0;

      &:hover {
        color: #2271b1;
      }

      &.active {
        color: #2271b1;
      }
    }
  }

  .com_pane {
    background: #e6e9ec;
    width: 320px;
    font-size: 0.875rem;

    &.pos {
      left: 12.5rem;
    }
  }

  .over_auto {
    overflow: auto;
  }

  .content_right {
    flex: 1;
    margin-top: 1.875rem;
    position: absolute;
    left: 32.5rem;
    width: calc(100% - 32.5rem);
  }
}
</style>