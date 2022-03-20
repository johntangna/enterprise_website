<template>
  <div class="scroll_out">
    <div v-if="currentObject">
      <div v-if="currentObject.title" class="area_bg">
        <div>标题</div>
        <input
          class="area_bg_input"
          type="text"
          v-model="pageData[currentObjectString].title"
        />
      </div>
      <div v-if="currentObject.content" class="area_bg">
        <div>描述</div>
        <textarea
          class="area_bg_input"
          rows="8"
          v-model="pageData[currentObjectString].content"
        ></textarea>
      </div>
      <div v-if="currentObject.contentImg" class="area_bg">
        <div>Logo</div>
        <div class="bg_img">
          <img :src="pageData[currentObjectString].contentImg" alt="" />
        </div>
      </div>
      <div v-if="currentObject.linkTitle" class="area_bg">
        <div>链接菜单名称</div>
        <input
          class="area_bg_input"
          type="text"
          v-model="pageData[currentObjectString].linkTitle"
        />
      </div>
      <div v-if="currentObject.linkArr" class="area_bg">
        <div>链接列表</div>
        <div
          class="area_bg_input plus_padding"
          v-for="(item, index) in currentObject.linkArr"
          :key="index"
        >
          <div v-if="item.text">
            <div class="text">详情名称</div>
            <input
              class="area_bg_input"
              type="text"
              v-model="pageData[currentObjectString].linkArr[index].text"
            />
          </div>
          <div v-if="item.link">
            <div class="text">详情链接</div>
            <input
              class="area_bg_input"
              type="text"
              v-model="pageData[currentObjectString].linkArr[index].link"
            />
          </div>
        </div>
      </div>
      <div v-if="currentObject.connectTitle" class="area_bg">
        <div>联系方式名称</div>
        <input
          class="area_bg_input"
          type="text"
          v-model="pageData[currentObjectString].connectTitle"
        />
      </div>
      <div v-if="currentObject.connectArr" class="area_bg">
        <div>联系方式列表</div>
        <div
          class="area_bg_input plus_padding"
          v-for="(item, index) in currentObject.connectArr"
          :key="index"
        >
          <div v-if="item.title">
            <div class="text">内容标题</div>
            <input
              class="area_bg_input"
              type="text"
              v-model="pageData[currentObjectString].connectArr[index].title"
            />
          </div>
        </div>
      </div>
      <div v-if="currentObject.connectImg" class="area_bg">
        <div>联系组合图标</div>
        <div class="bg_img">
          <img :src="pageData[currentObjectString].connectImg" alt="" />
        </div>
      </div>
      <div v-if="currentObject.arr" class="area_bg">
        <div>内容列表</div>
        <div
          class="area_bg_input plus_padding"
          v-for="(item, index) in currentObject.arr"
          :key="index"
        >
          <div v-if="item.button_text">
            <div class="text">按钮名称</div>
            <input
              class="area_bg_input"
              type="text"
              v-model="pageData[currentObjectString].arr[index].button_text"
            />
          </div>
          <div v-if="item.bg_img">
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
          <div v-if="item.bg_activeImg">
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
          <div v-if="item.title">
            <div class="text">内容标题</div>
            <input
              class="area_bg_input"
              type="text"
              v-model="pageData[currentObjectString].arr[index].title"
            />
          </div>
          <div v-if="item.content">
            <div class="text">内容</div>
            <textarea
              class="area_bg_input"
              rows="8"
              v-model="pageData[currentObjectString].arr[index].content"
            >
            </textarea>
          </div>
          <div v-if="item.link">
            <div class="text">详情链接</div>
            <input
              class="area_bg_input"
              type="text"
              v-model="pageData[currentObjectString].arr[index].link"
            />
          </div>
          <div v-if="item.contentImg">
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
          <div v-if="item.video">
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
      currentObject: null,
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