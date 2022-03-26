<template>
  <div class="upload_pic">
    <div class="wrapper">
      <button class="close" @click="closeDialog">X</button>
      <div class="upload_pic_left">
        <div>
          <button>本地路径</button>
        </div>
      </div>
      <div class="upload_pic_right">
        <div class="upload_pic_right_header">
          <button
            :class="{ active: currentIndex == 1 }"
            @click="currentIndex = 1"
          >
            上传媒体
          </button>
          <button
            :class="{ active: currentIndex == 2 }"
            @click="currentIndex = 2"
          >
            本地库
          </button>
        </div>
        <div class="upload_pic_right_content">
          <template v-if="currentIndex == 1">
            <div class="upload_file">
              <h3>请选择文件</h3>
              <label for="upload_id">选择文件</label>
              <input
                id="upload_id"
                name="upload_id"
                type="file"
                multiple
                accept=".png,.jpg,jpeg,.mp4"
                @change="fileChange"
              />
              <span>最大上传文件大小: 5 MB</span>
            </div>
          </template>
          <template v-if="currentIndex == 2">
            <div
              class="list_item"
              v-for="(item, index) in dataList"
              :key="item.id"
              :class="{ activeItem: currentItem === index }"
              @click="currentItem = index"
            >
              <video
                v-if="
                  item.fileName.indexOf('mp4') != -1 ||
                  item.fileName.indexOf('MP4') != -1
                "
                :src="item.fileName"
                muted
                autoplay
                loop
              ></video>
              <img v-else :src="item.fileName" alt="" />
            </div>
          </template>
        </div>
        <div class="upload_pic_right_footer">
          <button class="getMore" v-if="model.pageNo != pages" @click="reload">
            获取更多
          </button>
          <button :disabled="computedDisabled" @click="insertMedia">
            插入媒体
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getFileList, uploadFile } from "../../../request.js";
export default {
  name: "UploadPic",
  props: {
    //当前激活数组大索引
    index: {
      type: String,
    },
    //激活属性
    property: {
      type: String,
    },
    //是否有下一层级的属性
    arr: {
      type: Boolean,
    },
    //下一层级图片属性
    img: {
      type: String,
    },
    //类型，1为视频，0为图片
    type: {
      type: Number,
      default: 0,
    },
    // 数组索引
    list_index: {
      type: Number,
      default: 0,
    },
    //关闭
    close: {
      type: Function,
      default() {},
    },
  },
  data() {
    return {
      dataList: [],
      total: 0,
      pages: 0,
      model: {
        pageNo: 1,
        pageSize: 10,
        fileName: "",
        type: 0,
      },
      currentIndex: 2,
      currentItem: "",
    };
  },
  computed: {
    computedDisabled() {
      return this.currentItem === "" ? true : false;
    },
  },
  watch: {
    currentIndex(newV) {
      if (newV == 2) {
        this.model.pageNo = 1;
        this.getAllList();
      }
    },
    type: {
      handler(newV) {
        this.model.type = newV;
      },
      immediate: true,
    },
  },
  methods: {
    closeDialog() {
      this.close();
    },
    getAllList() {
      getFileList(this.model).then((res) => {
        if (res.data.code == 200) {
          const { total, pages, records } = res.data.result;
          this.total = total;
          this.pages = pages;
          this.dataList = records;
        }
      });
    },
    reload() {
      this.model.pageNo++;
      getFileList(this.model).then((res) => {
        this.dataList = this.dataList.concat(res.data.result.records);
      });
    },
    inputChange() {
      this.model.pageNo = 1;
      this.getAllList();
    },
    upload(data) {
      uploadFile(data)
        .then((res) => {
          console.info(res);
          if (res.data.code == 500) {
            alert("图片仅支持jpg,jpeg,png格式,视频仅支持MP4格式");
          }
          if (res.data.code == 200) {
            this.currentIndex = 2;
            alert("上传成功");
          }
        })
        .catch((e) => {
          alert("文件过大，请核查!");
        });
    },
    fileChange(e) {
      if (e.target.value) {
        let formData = new FormData();
        console.info(document.getElementById("upload_id").files);
        for (
          let i = 0;
          i < document.getElementById("upload_id").files.length;
          i++
        ) {
          formData.append(
            "files",
            document.getElementById("upload_id").files[i]
          );
        }
        this.upload(formData);
      }
    },
    insertMedia() {
      if (this.arr) {
        this.pageData[this.index]["arr"][this.list_index][this.img] =
          this.dataList[this.currentItem].fileName;
      } else {
        this.pageData[this.index][this.property] =
          this.dataList[this.currentItem].fileName;
      }
      this.close();
    },
  },
  created() {
    this.getAllList();
  },
  mounted() {},
};
</script>

<style lang="stylus" scoped>
.upload_pic {
  position: fixed;
  top: 30px;
  left: 30px;
  right: 30px;
  bottom: 30px;
  z-index: 160000;

  .wrapper {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: auto;
    min-height: 300px;
    box-shadow: 0 5px 15px rgb(0, 0, 0, 0.7);
    background: #fff;
    -webkit-font-smoothing: subpixel-antialiased;
    padding: 16px;
    display: flex;

    .close {
      background: #fff;
      border: none;
      font-size: 25px;
      font-weight: bold;
      cursor: pointer;
      position: absolute;
      right: 16px;
    }

    .upload_pic_left {
      width: 200px;
      border-right: 1px solid #b2b3b4;
      padding: 10px;

      div {
        cursor: pointer;

        &:hover {
          background: rgba(0, 0, 0, 0.2);

          button {
            background: unset;
          }
        }
      }

      button {
        background: #fff;
        border: none;
        font-size: 16px;
        color: #2271b1;
        padding: 10px;
        cursor: pointer;
      }

      div + div {
        margin-top: 10px;
        border-top: 1px solid #b2b3b4;
      }
    }

    .upload_pic_right {
      flex: 1;
      display: flex;
      flex-direction: column;
      padding: 20px;

      .upload_pic_right_header {
        .active {
          margin: -1px -1px 0;
          background: #2271b1;
          border: 1px solid #2271b1;
          border-bottom: none;
          color: #fff;
        }
      }

      .upload_pic_right_content {
        flex: 1;
        display: flex;
        flex-wrap: wrap;
        align-content: flex-start;
        padding: 5px;
        border-top: 1px solid #2271b1;
        position: relative;

        .activeItem {
          border: 4px solid #4f94d4;
          box-sizing: border-box;
        }

        .upload_file {
          color: #000;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-content: center;
          width: 100%;
          height: 100%;
          text-align: center;
        }

        #upload_id {
          opacity: 0;
        }

        label {
          font-size: 16px;
          display: block;
          position: relative;
          cursor: pointer;

          &:after {
            content: '选择文件';
            width: 130px;
            height: 40px;
            line-height: 40px;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            z-index: 0;
            color: #2271b1;
            border: 1px solid #2271b1;
            background: #f6f7f7;
          }
        }

        .list_item {
          width: 7.75rem;
          height: 7.75rem;
          box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.1);
          margin: 5px;

          img {
            width: 100%;
            height: 100%;
            object-fit: scale-down;
          }

          video {
            width: 100%;
            height: 100%;
            object-fit: scale-down;
          }
        }
      }

      .upload_pic_right_footer {
        text-align: right;
        padding: 20px;

        button {
          background: #2271b1;
          color: #fff;
        }

        button + button {
          margin-left: 10px;
        }
      }

      button {
        border: 0;
        margin: 0;
        line-height: 1.28571428;
        font-size: 14px;
        text-decoration: none;
        background: 0 0;
        cursor: pointer;
        transition: none;
        padding: 10px;
      }
    }
  }
}
</style>