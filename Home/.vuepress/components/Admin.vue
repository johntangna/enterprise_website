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
        <div v-for="(menu, index) in menuArr" :key="index">
          <span @click="editData(menu, $event)" class="menu_class">{{
            menu.text
          }}</span>
          <div class="sub_menu" v-if="menu.items">
            <div
              v-for="(item, index) in menu.items"
              :key="index"
              @click="editData(item, $event)"
            >
              <span class="menu_class">{{ item.text }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="abs com_pane pos flex_row flex_vertical">
        <component :is="currentCom"></component>
        <submit-btn></submit-btn>
      </div>
      <div id="admin" class="content_right">
        <!-- <home></home> -->
        <component :is="currentPageCom"></component>
      </div>
    </div>
  </div>
</template>

<script>
import { eventBus } from "../EventBus.js";
import Home from "./AdminCom/Home.vue";
import GroupIns from "./AdminCom/GroupIns.vue";
import GroupBra from "./AdminCom/GroupBra.vue";
import GroupDevolp from "./AdminCom/GroupDevolp.vue";
import GroupDis from "./AdminCom/GroupDis.vue";
import GroupHon from "./AdminCom/GroupHon.vue";
import GroupCom from "./AdminCom/GroupCom.vue";
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
import BranchMap from "./BranchMap.vue";
import CompanyShow from "./CompanyShow.vue";
import SwiperBgBranch from "./SwiperBgBranch.vue";
import SwiperBgDevolp from "./SwiperBgDevolp.vue";
import SwiperBgInstruction from "./SwiperBgInstruction.vue";
import TimeLine from "./TimeLine.vue";
import SwiperBgIndustry from "./SwiperBgIndustry.vue";
import Industry from "./Industry.vue";
import SwiperBgHonor from "./SwiperBgHonor.vue";
import HonorRecommend from "./HonorRecommend.vue";
import honorPrise from "./honorPrise.vue";
import HonorTrophy from "./HonorTrophy.vue";
import SwiperBgCulture from "./SwiperBgCulture.vue";
import CultureCore from "./CultureCore.vue";
import CultureCorner from "./CultureCorner.vue";
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
    GroupIns,
    GroupBra,
    GroupDevolp,
    GroupDis,
    GroupHon,
    GroupCom,
    ScrollUp,
    CompanyIns,
    Ka,
    ParternBrand,
    BranchMap,
    CompanyShow,
    SwiperBgBranch,
    SwiperBgDevolp,
    SwiperBgInstruction,
    TimeLine,
    SwiperBgIndustry,
    Industry,
    SwiperBgHonor,
    HonorRecommend,
    honorPrise,
    HonorTrophy,
    SwiperBgCulture,
    CultureCore,
    CultureCorner,
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
        { text: "首页", link: "/" },
        {
          text: "关于我们",
          items: [
            { text: "集团简介", link: "/group/instruction" },
            { text: "分支机构", link: "/group/branch" },
            { text: "发展历程", link: "/group/devolp" },
            { text: "集团产业分布", link: "/group/distrubution" },
            { text: "集团荣耀", link: "/group/honor" },
            { text: "企业文化", link: "/group/company_feature" },
          ],
        },
        {
          text: "电商运营服务",
          items: [
            { text: "电商运营服务介绍", link: "/e_commerce/instruction" },
            { text: "专业运营团队", link: "/e_commerce/office" },
            { text: "客服顾问团队", link: "/e_commerce/custome" },
            { text: "品牌合作", link: "/e_commerce/brand" },
            { text: "店铺矩阵", link: "/e_commerce/store" },
          ],
        },
        {
          text: "分销与贸易业务",
          items: [
            { text: "分销体系", link: "/distrbution/contructor" },
            { text: "分销生态", link: "/distrbution/env" },
          ],
        },
        { text: "MCN网红经纪", link: "/mcn_celebrity" },
        { text: "欧美斯云仓", link: "/oms_warehouse" },
        { text: "大数据咨询", link: "/bid_data_consult" },
        { text: "欧美斯动态(新闻中心)", link: "/oms_news" },
        {
          text: "联系我们",
          link: "/contact_us/index",
        },
      ],
      com: null,
      currentUrl: "/",
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
    editData(menu, $event) {
      //必须有link才允许跳转，将当前页面操作对象删除
      if (menu.hasOwnProperty("link")) {
        let menuClass = document.querySelectorAll(".menu_class");
        for (let i = 0; i < menuClass.length; i++) {
          menuClass[i].className = "menu_class";
        }
        $event.target.className = "menu_class active";
        window.localStorage.setItem("currentOperateObj", "");
        eventBus.$emit(
          "currentIndex",
          window.localStorage.getItem("currentOperateObj")
        );
        this.currentUrl = menu.link;
      }
    },
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
    currentPageCom() {
      const page = {
        "/": "Home",
        "/group/instruction": "GroupIns",
        "/group/branch": "GroupBra",
        "/group/devolp": "GroupDevolp",
        "/group/distrubution": "GroupDis",
        "/group/honor": "GroupHon",
        "/group/company_feature": "GroupCom",
        "/e_commerce/instruction": "EcommerceIns",
        "/e_commerce/office": "EcommerceOff",
        "/e_commerce/custome": "EcommerceCus",
        "/e_commerce/brand": "EcommerceBra",
        "/e_commerce/store": "EcommerceSto",
        "/distrbution/contructor": "DisCon",
        "/distrbution/env": "DisEnv",
        "/mcn_celebrity": "McnCel",
        "/oms_warehouse": "OmsWar",
        "/bid_data_consult": "BidDc",
        "/oms_news": "OmsNew",
        "/contact_us/index": "ContactUs",
      };
      return page[this.currentUrl];
    },
  },
  mounted() {
    document.querySelectorAll(".menu_class")[0].className = "menu_class active";
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

  .sub_menu {
    margin-left: 1.25rem !important;

    span {
      font-size: 14px;
    }
  }

  .content_left {
    width: auto;
    background: #1d2327;
    padding: 1.25rem;

    div {
      cursor: pointer;
      margin: 1.25rem 0;

      span:hover {
        color: #2271b1;
      }

      .active {
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