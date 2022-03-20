<template>
  <div class="scroll_out">
    <div v-if="currentObject">
      <div
        v-if="currentObject.title || currentObject.title == ''"
        class="area_bg"
      >
        <div>标题</div>
        <input
          class="area_bg_input"
          type="text"
          v-model="pageData[currentObjectString].title"
        />
      </div>
      <div
        v-if="currentObject.content || currentObject.content == ''"
        class="area_bg"
      >
        <div>描述</div>
        <textarea
          class="area_bg_input"
          rows="8"
          v-model="pageData[currentObjectString].content"
        ></textarea>
      </div>
      <div
        v-if="currentObject.contentImg || currentObject.contentImg == ''"
        class="area_bg"
      >
        <div>Logo</div>
        <div class="bg_img">
          <img :src="pageData[currentObjectString].contentImg" alt="" />
        </div>
      </div>
      <div
        v-if="currentObject.linkTitle || currentObject.linkTitle == ''"
        class="area_bg"
      >
        <div>链接菜单名称</div>
        <input
          class="area_bg_input"
          type="text"
          v-model="pageData[currentObjectString].linkTitle"
        />
      </div>
      <div
        v-if="currentObject.linkArr || currentObject.linkArr == ''"
        class="area_bg"
      >
        <div>链接列表</div>
        <div
          class="area_bg_input plus_padding"
          v-for="(item, index) in currentObject.linkArr"
          :key="index"
        >
          <div v-if="item.text || item.text == ''">
            <div class="text">详情名称</div>
            <input
              class="area_bg_input"
              type="text"
              v-model="pageData[currentObjectString].linkArr[index].text"
            />
          </div>
          <div v-if="item.link || item.link == ''">
            <div class="text">详情链接</div>
            <input
              class="area_bg_input"
              type="text"
              v-model="pageData[currentObjectString].linkArr[index].link"
            />
          </div>
        </div>
      </div>
      <div
        v-if="currentObject.connectTitle || currentObject.connectTitle == ''"
        class="area_bg"
      >
        <div>联系方式名称</div>
        <input
          class="area_bg_input"
          type="text"
          v-model="pageData[currentObjectString].connectTitle"
        />
      </div>
      <div
        v-if="currentObject.connectArr || currentObject.connectArr == ''"
        class="area_bg"
      >
        <div>联系方式列表</div>
        <div
          class="area_bg_input plus_padding"
          v-for="(item, index) in currentObject.connectArr"
          :key="index"
        >
          <div v-if="item.title || item.title == ''">
            <div class="text">内容标题</div>
            <input
              class="area_bg_input"
              type="text"
              v-model="pageData[currentObjectString].connectArr[index].title"
            />
          </div>
        </div>
      </div>
      <div
        v-if="currentObject.connectImg || currentObject.connectImg == ''"
        class="area_bg"
      >
        <div>联系组合图标</div>
        <div class="bg_img">
          <img :src="pageData[currentObjectString].connectImg" alt="" />
        </div>
      </div>
      <div v-if="currentObject.arr || currentObject.arr == ''" class="area_bg">
        <div>内容列表</div>
        <div
          class="area_bg_input plus_padding"
          v-for="(item, index) in currentObject.arr"
          :key="index"
        >
          <div v-if="item.button_text || item.button_text == ''">
            <div class="text">按钮名称</div>
            <input
              class="area_bg_input"
              type="text"
              v-model="pageData[currentObjectString].arr[index].button_text"
            />
          </div>
          <div v-if="item.bg_img || item.bg_img == ''">
            <div class="text">失焦背景图片</div>
            <div class="bg_img">
              <img
                :src="pageData[currentObjectString].arr[index].bg_img"
                alt=""
              />
            </div>
            <input
              class="area_bg_input opacityClass"
              type="text"
              v-model="pageData[currentObjectString].arr[index].bg_img"
            />
          </div>
          <div v-if="item.bg_activeImg || item.bg_activeImg == ''">
            <div class="text">聚焦背景图片</div>
            <div class="bg_img">
              <img
                :src="pageData[currentObjectString].arr[index].bg_activeImg"
                alt=""
              />
            </div>
            <input
              class="area_bg_input opacityClass"
              type="text"
              v-model="pageData[currentObjectString].arr[index].bg_activeImg"
            />
          </div>
          <div v-if="item.title || item.title == ''">
            <div class="text">内容标题</div>
            <input
              class="area_bg_input"
              type="text"
              v-model="pageData[currentObjectString].arr[index].title"
            />
          </div>
          <div v-if="item.content || item.content == ''">
            <div class="text">内容</div>
            <textarea
              class="area_bg_input"
              rows="8"
              v-model="pageData[currentObjectString].arr[index].content"
            >
            </textarea>
          </div>
          <div v-if="item.link || item.link == ''">
            <div class="text">详情链接</div>
            <input
              class="area_bg_input"
              type="text"
              v-model="pageData[currentObjectString].arr[index].link"
            />
          </div>
          <div v-if="item.contentImg || item.contentImg == ''">
            <div class="text">内容图片</div>
            <div class="bg_img">
              <img
                :src="pageData[currentObjectString].arr[index].contentImg"
                alt=""
              />
            </div>
            <input
              class="area_bg_input opacityClass"
              type="text"
              v-model="pageData[currentObjectString].arr[index].contentImg"
            />
          </div>
          <div v-if="item.video || item.video == ''">
            <div class="text">视频</div>
            <div class="bg_img">
              <img src="/play.png" alt="" />
            </div>
            <input
              class="area_bg_input opacityClass"
              type="text"
              v-model="pageData[currentObjectString].arr[index].video"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { eventBus } from "../../EventBus.js";

export default {
  name: "TextCom",
  data() {
    return {
      currentObject: {
        swiperBg: {
          arr: [
            {
              type: 1,
              video: "/video.mp4",
            },
            {
              type: 0,
              contentImg: "/swiper1.jpg",
            },
            {
              type: 0,
              contentImg: "/swiper2.jpg",
            },
            {
              type: 0,
              contentImg: "/swiper3.jpg",
            },
            {
              type: 0,
              contentImg: "/swiper4.jpg",
            },
          ],
        },
        contentArr: {
          arr: [
            {
              button_text: "示意按钮",
              bg_img: "/content1.png",
              bg_activeImg: "/content1_active.png",
              contentImg: "/swiper1.jpg",
              title: "示意标题1",
              content: "示意内容1",
              link: "#",
            },
            {
              button_text: "示意按钮",
              bg_img: "/content2.png",
              bg_activeImg: "/content2_active.png",
              contentImg: "/swiper2.jpg",
              title: "示意标题2",
              content: "示意内容2",
              link: "#",
            },
            {
              button_text: "示意按钮",
              bg_img: "/content3.png",
              bg_activeImg: "/content3_active.png",
              contentImg: "/swiper3.jpg",
              title: "示意标题3",
              content: "示意内容3",
              link: "#",
            },
            {
              button_text: "示意按钮",
              bg_img: "/content4.png",
              bg_activeImg: "/content4_active.png",
              contentImg: "/swiper4.jpg",
              title: "示意标题4",
              content: "示意内容4",
              link: "#",
            },
            {
              button_text: "示意按钮",
              bg_img: "/content5.png",
              bg_activeImg: "/content5_active.png",
              contentImg: "/swiper1.jpg",
              title: "示意标题1",
              content: "示意内容1",
              link: "#",
            },
          ],
          title: "示意文案内容标题",
        },
        evaluateArr: {
          arr: [
            {
              bg_img: "/evaluate_left.png",
              title: "17,354+ Happy Customer",
              content:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspen",
            },
            {
              bg_img: "/evaluate_center.png",
              title: "135+ Got Award",
              content:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspen",
            },
            {
              bg_img: "/evaluate_right.png",
              title: "2,45,000+ Follower",
              content:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspen",
            },
          ],
          title: "示意文案内容标题",
        },
        planArr: {
          arr: [
            {
              bg_img: "/plan1.png",
              bg_activeImg: "/plan1_active.png",
              title: "Basic",
              content: "content1",
            },
            {
              bg_img: "/plan2.png",
              bg_activeImg: "/plan2_active.png",
              title: "Standard",
              content: "content2",
            },
            {
              bg_img: "/plan3.png",
              bg_activeImg: "/plan3_active.png",
              title: "Premium",
              content: "content3",
            },
          ],
          title: "示意文案内容标题",
        },
        qaArr: {
          arr: [
            {
              content: "content1",
              title: "somebody1",
            },
            {
              content: "content2",
              title: "somebody2",
            },
            {
              content: "content3",
              title: "somebody3",
            },
            {
              content: "content4",
              title: "somebody4",
            },
          ],
          title: "示意文案内容标题",
        },
        helpInfo: {
          title: "Need Any Help",
          content: "content1",
        },
        teamArr: {
          arr: [
            {
              contentImg: "/default_img.png",
              title: "A",
              content: "A",
            },
            {
              contentImg: "/default_img.png",
              title: "AB",
              content: "AB",
            },
            {
              contentImg: "/default_img.png",
              title: "ABC",
              content: "ABC",
            },
            {
              contentImg: "/default_img.png",
              title: "ABCD",
              content: "ABCD",
            },
          ],
          title: "示意文案内容标题",
        },
        blogTeamArr: {
          arr: [
            {
              contentImg: "/default_img.png",
              title: "A",
              content: "25 July",
              link: "#",
            },
            {
              contentImg: "/default_img.png",
              title: "ABC",
              content: "25 July",
              link: "#",
            },
            {
              contentImg: "/default_img.png",
              title: "ABCD",
              content: "25 July",
              link: "#",
            },
          ],
          title: "示意文案内容标题",
        },
        companyInfo: {
          content:
            "我们主要营业，以及主要经营产品，有什么问题可以咨询我们的，我们都竭力为你服务",
          contentImg: "/widget_logo.png",
          linkTitle: "Usefull Links",
          linkArr: [
            {
              text: "About us",
              link: "#",
            },
            {
              text: "Team",
              link: "#",
            },
            {
              text: "Career",
              link: "#",
            },
            {
              text: "Services",
              link: "#",
            },
            {
              text: "Contact",
              link: "#",
            },
          ],
          connectTitle: "Connect",
          connectArr: [
            {
              title: "江苏省连云港市海州区市民路2号",
            },
            {
              title: "info@onmouse.cn",
            },
            {
              title: "114",
            },
          ],
          connectImg: "/widget_icon.png",
        },
        contactUs: {
          title: "示意文案内容标题",
        },
        BottomCom: {
          arr: [
            {
              title: "Terms & Consitions",
              link: "#",
            },
            {
              title: "Support",
              link: "#",
            },
            {
              title: "Contact us",
              link: "#",
            },
          ],
          content: "© 2022 欧美斯科技发展集团有限公司 苏ICP备20046058",
        },
      },
      currentObjectString: "",
    };
  },
  methods: {
    updateDate(msg) {
      let obj_localstorage =
        msg || window.localStorage.getItem("currentOperateObj");
      if (obj_localstorage) {
        this.currentObject = this.pageData[obj_localstorage];
        this.currentObjectString = obj_localstorage;
      }
    },
  },
  mounted() {
    this.updateDate();
    eventBus.$on("currentIndex", (msg) => {
      this.updateDate(msg);
    });
  },
  beforeDestroy() {
    eventBus.$off("currentIndex");
  },
};
</script>

<style lang="stylus" scoped>
.scroll_out {
  overflow-x: overlay;
  flex: 1;
}

.area_bg {
  color: #6d7882;
  background: #fff;
  padding: 20px;

  +.area_bg {
    margin-top: 20px;
  }

  input, textarea {
    padding: 5px;
    border-radius: 3px;
    border: 1px solid #d5dadf;
    color: #6d7882;
    width: 100%;
    box-sizing: border-box;

    &:focus {
      outline: #646464 solid 1px;
    }
  }

  .area_bg_input {
    margin-top: 10px;

    .text, img {
      margin-top: 10px;
    }

    &:after {
      content: '';
      position: absolute;
      height: 10px;
      background: #e6e9ec;
      width: 100%;
      left: 50%;
      transform: translateX(-50%);
      margin-top: 10px;
    }
  }

  .plus_padding {
    padding: 10px 0;
    position: relative;
  }

  .opacityClass {
    opacity: 0;
  }

  .bg_img {
    background: #9e9e9e;
    margin-top: 10px;
  }
}
</style>