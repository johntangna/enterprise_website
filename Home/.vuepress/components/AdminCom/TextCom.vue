<template>
  <div class="scroll_out">
    <div v-if="currentObject">
      <div
        v-if="currentObject.title || currentObject.title == ''"
        class="area_bg"
      >
        <div>标题</div>
        <text-area-com
          :content.sync="pageData[currentObjectString].title"
        ></text-area-com>
      </div>
      <div
        v-if="currentObject.leftContent || currentObject.leftContent == ''"
        class="area_bg"
      >
        <div>总部地图</div>
        <text-area-com
          :content.sync="pageData[currentObjectString].leftContent"
        ></text-area-com>
      </div>
      <div
        v-if="currentObject.leftContent || currentObject.leftContent == ''"
        class="area_bg"
      >
        <div>子公司地图</div>
        <text-area-com
          :content.sync="pageData[currentObjectString].rightContent"
        ></text-area-com>
      </div>
      <div
        v-if="currentObject.content || currentObject.content == ''"
        class="area_bg"
      >
        <div>描述</div>
        <text-area-com
          :rows="8"
          :content.sync="pageData[currentObjectString].content"
        ></text-area-com>
      </div>
      <div
        v-if="currentObject.contentImg || currentObject.contentImg == ''"
        class="area_bg"
      >
        <div>Logo</div>
        <div
          class="bg_img"
          @click="changeImg(currentObjectString, 'contentImg')"
        >
          <img :src="pageData[currentObjectString].contentImg" alt="" />
        </div>
      </div>
      <div
        v-if="currentObject.linkTitle || currentObject.linkTitle == ''"
        class="area_bg"
      >
        <div>链接菜单名称</div>
        <text-area-com
          :rows="1"
          :content.sync="pageData[currentObjectString].linkTitle"
        ></text-area-com>
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
            <text-area-com
              :rows="2"
              :content.sync="pageData[currentObjectString].linkArr[index].text"
            ></text-area-com>
          </div>
          <div v-if="item.link || item.link == ''">
            <div class="text">详情链接</div>
            <text-area-com
              :rows="1"
              :content.sync="pageData[currentObjectString].linkArr[index].link"
            ></text-area-com>
          </div>
        </div>
      </div>
      <div
        v-if="currentObject.connectTitle || currentObject.connectTitle == ''"
        class="area_bg"
      >
        <div>联系方式名称</div>
        <text-area-com
          :rows="2"
          :content.sync="pageData[currentObjectString].connectTitle"
        ></text-area-com>
      </div>
      <!-- <div
        v-if="currentObject.connectArr || currentObject.connectArr == ''"
        class="area_bg"
      >
        <div>地址信息列表</div>
        <div
          class="area_bg_input plus_padding"
          v-for="(item, index) in currentObject.connectArr"
          :key="index"
        >
          <div v-if="item.heart || item.heart == ''">
            <div class="text">地址</div>
            <text-area-com
              :rows="2"
              :content.sync="
                pageData[currentObjectString].connectArr[index].heart
              "
            ></text-area-com>
          </div>
          <div v-if="item.heartImg || item.heartImg == ''">
            <div class="text">电话指示图标</div>
            <div
              class="bg_img"
              @click="
                changeImg(
                  currentObjectString,
                  'heartImg',
                  true,
                  'heartImg',
                  index
                )
              "
            >
              <img
                :src="pageData[currentObjectString].connectArr[index].heartImg"
                alt=""
              />
            </div>
          </div>
          <div v-if="item.heartAddressImg || item.heartAddressImg == ''">
            <div class="text">地址指示图标</div>
            <div
              class="bg_img"
              @click="
                changeImg(
                  currentObjectString,
                  'heartAddressImg',
                  true,
                  'heartAddressImg',
                  index
                )
              "
            >
              <img
                :src="
                  pageData[currentObjectString].connectArr[index]
                    .heartAddressImg
                "
                alt=""
              />
            </div>
          </div>
          <div v-if="item.heartAddress || item.heartAddress == ''">
            <div class="text">地址</div>
            <text-area-com
              :rows="2"
              :content.sync="
                pageData[currentObjectString].connectArr[index].heartAddress
              "
            ></text-area-com>
          </div>
        </div>
      </div> -->
      <div
        v-if="currentObject.qrcodeIns || currentObject.qrcodeIns == ''"
        class="area_bg"
      >
        <div>二维码标题</div>
        <text-area-com
          :rows="2"
          :content.sync="pageData[currentObjectString].qrcodeIns"
        ></text-area-com>
      </div>
      <div
        v-if="currentObject.qrcodeImg || currentObject.qrcodeImg == ''"
        class="area_bg"
      >
        <div>二维码图片</div>
        <div
          class="bg_img"
          @click="changeImg(currentObjectString, 'qrcodeImg')"
        >
          <img :src="pageData[currentObjectString].qrcodeImg" alt="" />
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
            <text-area-com
              :rows="2"
              :content.sync="
                pageData[currentObjectString].arr[index].button_text
              "
            ></text-area-com>
          </div>
          <div v-if="item.bg_img || item.bg_img == ''">
            <div class="text">失焦背景图片</div>
            <div
              class="bg_img"
              @click="
                changeImg(currentObjectString, 'bg_img', true, 'bg_img', index)
              "
            >
              <img
                :src="pageData[currentObjectString].arr[index].bg_img"
                alt=""
              />
            </div>
            <input
              class="area_bg_input opacityClass"
              type="hidden"
              v-model="pageData[currentObjectString].arr[index].bg_img"
            />
          </div>
          <div v-if="item.bg_activeImg || item.bg_activeImg == ''">
            <div class="text">聚焦背景图片</div>
            <div
              class="bg_img"
              @click="
                changeImg(
                  currentObjectString,
                  'bg_activeImg',
                  true,
                  'bg_activeImg',
                  index
                )
              "
            >
              <img
                :src="pageData[currentObjectString].arr[index].bg_activeImg"
                alt=""
              />
            </div>
            <input
              class="area_bg_input opacityClass"
              type="hidden"
              v-model="pageData[currentObjectString].arr[index].bg_activeImg"
            />
          </div>
          <div v-if="item.title || item.title == ''">
            <div class="text">内容标题</div>
            <text-area-com
              :rows="2"
              :content.sync="pageData[currentObjectString].arr[index].title"
            ></text-area-com>
          </div>
          <div v-if="item.content || item.content == ''">
            <div class="text">内容</div>
            <text-area-com
              :rows="8"
              :content.sync="pageData[currentObjectString].arr[index].content"
            ></text-area-com>
          </div>
          <div v-if="item.link || item.link == ''">
            <div class="text">详情链接</div>
            <text-area-com
              :rows="1"
              :content.sync="pageData[currentObjectString].arr[index].link"
            ></text-area-com>
          </div>
          <div v-if="item.contentImg || item.contentImg == ''">
            <div class="text">内容图片</div>
            <div
              class="bg_img"
              @click="
                changeImg(
                  currentObjectString,
                  'contentImg',
                  true,
                  'contentImg',
                  index
                )
              "
            >
              <img
                :src="pageData[currentObjectString].arr[index].contentImg"
                alt=""
              />
            </div>
            <input
              class="area_bg_input opacityClass"
              type="hidden"
              v-model="pageData[currentObjectString].arr[index].contentImg"
            />
          </div>
          <div v-if="item.video || item.video == ''">
            <div class="text">视频</div>
            <div class="text radio_group">
              <span>是否显示</span>
              <span @click="changeVisble(1, index)">
                <input
                  type="radio"
                  name="show"
                  value="1"
                  id="s"
                  :checked="item.show == 1"
                /><label for="s">是</label>
              </span>
              <span @click="changeVisble(0, index)">
                <input
                  type="radio"
                  name="show"
                  value="0"
                  id="h"
                  :checked="item.show == 0"
                /><label for="h">否</label>
              </span>
            </div>
            <div
              class="bg_img"
              @click="
                changeImg(currentObjectString, 'video', true, 'video', index, 1)
              "
            >
              <video
                :src="pageData[currentObjectString].arr[index].video"
                alt=""
              />
            </div>
            <input
              class="area_bg_input opacityClass"
              type="hidden"
              v-model="pageData[currentObjectString].arr[index].video"
            />
          </div>
          <div v-if="item.heart || item.heart == ''">
            <div class="text">地址</div>
            <text-area-com
              :rows="2"
              :content.sync="pageData[currentObjectString].arr[index].heart"
            ></text-area-com>
          </div>
          <div v-if="item.heartImg || item.heartImg == ''">
            <div class="text">电话指示图标</div>
            <div
              class="bg_img"
              @click="
                changeImg(
                  currentObjectString,
                  'heartImg',
                  true,
                  'heartImg',
                  index
                )
              "
            >
              <img
                :src="pageData[currentObjectString].arr[index].heartImg"
                alt=""
              />
            </div>
          </div>
          <div v-if="item.heartAddressImg || item.heartAddressImg == ''">
            <div class="text">地址指示图标</div>
            <div
              class="bg_img"
              @click="
                changeImg(
                  currentObjectString,
                  'heartAddressImg',
                  true,
                  'heartAddressImg',
                  index
                )
              "
            >
              <img
                :src="pageData[currentObjectString].arr[index].heartAddressImg"
                alt=""
              />
            </div>
          </div>
          <div v-if="item.heartAddress || item.heartAddress == ''">
            <div class="text">地址</div>
            <text-area-com
              :rows="2"
              :content.sync="
                pageData[currentObjectString].arr[index].heartAddress
              "
            ></text-area-com>
          </div>
        </div>
      </div>
    </div>
    <template v-if="uploadPic">
      <upload-pic-com
        :index="index"
        :property="property"
        :arr="arr"
        :img="img"
        :type="type"
        :list_index="list_index"
        :close="closeFn"
      ></upload-pic-com>
    </template>
  </div>
</template>

<script>
import { eventBus } from "../../EventBus.js";
import TextAreaCom from "./DiyCom/TextAreaCom.vue";
import UploadPicCom from "./UploadPic.vue";
export default {
  name: "TextCom",
  components: {
    TextAreaCom,
    UploadPicCom,
  },
  data() {
    return {
      currentObject: {},
      currentObjectString: "",
      index: "",
      property: "",
      uploadPic: false,
      arr: false,
      img: "",
      type: 0,
      list_index: 0,
      // bg_img: null,
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
    /**
     * @param value 传过来的值
     */
    changeVisble(value, index) {
      this.pageData[this.currentObjectString].arr[index].show = value;
    },
    /**
     * @param index 属性索引
     * @param property 属性值
     * @param arr 是否数组
     * @param img 数值在属性中的名字
     * @param list_index 在数组的位置
     * @param type 信息属性（只用于轮播图）
     */
    changeImg(
      index,
      property,
      arr = false,
      img = "",
      list_index = 0,
      type = 0
    ) {
      this.index = index;
      console.info(`索引${index}`);
      this.property = property;
      console.info(`属性${property}`);
      console.info(`pageData: ${this.pageData}`);
      this.arr = arr;
      this.img = img;
      this.list_index = list_index;
      this.type = type;
      this.uploadPic = true;
    },
    closeFn() {
      this.uploadPic = false;
    },
  },
  mounted() {
    this.updateDate();
    eventBus.$on("currentIndex", (msg) => {
      this.updateDate(msg);
    });
    // this.$nextTick(() => {
    //   this.bg_img = document.getElementsByClassName("bg_img");
    //   for (let i = 0; i < this.bg_img.length; i++) {
    //     this.bg_img[i].onclick = (e) => {
    //       console.info(e.target.parentElement.parentElement.children[2].value);
    //     };
    //   }
    // });
    // window.addEventListener
  },
  beforeDestroy() {
    eventBus.$off("currentIndex");
    // this.bg_img = null;
  },
};
</script>

<style lang="stylus" scoped>
.scroll_out {
  overflow-x: overlay;
  flex: 1;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);
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
    resize: none;

    &:focus {
      outline: #646464 solid 1px;
    }
  }

  ::v-deep .area_bg_input {
    margin-top: 10px;

    .text {
      margin-top: 10px;
    }

    img {
      vertical-align: middle;
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
    text-align: center;
    border-radius: 3px;
    cursor: pointer;
    position: relative;

    video {
      width: 100%;
      height: 100%;
    }

    &:hover {
      background-color: rgba(109, 120, 130, 0.85) !important;

      &:after {
        content: '\9009\62e9\56fe\50cf';
        width: 100%;
        height: 20px;
        background: rgba(0, 0, 0, 0.2);
        position: absolute;
        bottom: 0;
        left: 0;
        color: #fff;
        padding: 5px 0;
      }
    }
  }

  .radio_group {
    display: flex;

    input {
      width: 20px !important;
      outline: none;
    }
  }
}
</style>