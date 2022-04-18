<template>
  <div>
    <span class="area_title" v-html="title"></span>
    <div class="flex_row contact_us">
      <!-- <div class="submit_form">
        <input type="text" placeholder="Name" v-model="name" />
        <input type="text" placeholder="Email" v-model="email" />
        <textarea placeholder="Message" rows="8" v-model="message" />
        <button @click="send">Send Message</button>
      </div> -->
      <div class="map">
        <el-amap
          class="amap-box"
          :vid="'amap-vue1'"
          :center="center"
          :zooms="zooms"
        >
          <el-amap-marker
            :position="position"
            :title="leftContent"
            :icon="'../marker.png'"
            :offset="offset"
          ></el-amap-marker>
        </el-amap>
        <div class="linear_gradient">
          <span>{{ leftContent }}</span>
        </div>
      </div>
      <div class="map">
        <el-amap
          class="amap-box"
          :vid="'amap-vue2'"
          :center="center2"
          :zooms="zooms2"
        >
          <el-amap-marker
            :position="position2"
            :title="rightContent"
            :icon="'../marker.png'"
            :offset="offset2"
          ></el-amap-marker>
        </el-amap>
        <div class="linear_gradient">{{ rightContent }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import VueAMap from "../Amap.js";
// window.VueAMap.initAMapApiLoader({
//   key: "3056e7967382c1e7a8baded08f3969b3",
//   plugin: [
//     "AMap.Autocomplete",
//     "AMap.PlaceSearch",
//     "AMap.Scale",
//     "AMap.OverView",
//     "AMap.ToolBar",
//     "AMap.MapType",
//     "AMap.PolyEditor",
//     "AMap.CircleEditor",
//   ],
// });
// Vue.use(window.VueAMap);
export default {
  name: "ContactUs",
  data() {
    return {
      name: "",
      email: "",
      message: "",
      submit: false,
      center: [],
      center2: [],
      position: [],
      position2: [],
      offset: [-35, -60],
      offset2: [-35, -60],
      zooms: [14, 19],
      zooms2: [14, 19],
      title: "",
      leftContent: "",
      rightContent: "",
    };
  },
  watch: {
    submit(newV) {
      if (newV) {
        this.name = this.email = this.message = "";
        this.submit = false;
      }
    },
    pageData: {
      handler(newV) {
        this.updateData(newV.contactUs);
      },
      deep: true,
    },
  },
  methods: {
    send() {
      if (this.name == "" && this.email == "" && this.submit == "") {
        alert("请填写姓名、邮箱以及留言");
        return;
      }
      alert("感谢您宝贵的建议，如有需要，我们将第一时间与您联系！");
      this.submit = true;
    },
    updateData(data) {
      this.title = data.title;
      this.leftContent = data.leftContent;
      this.rightContent = data.rightContent;
    },
  },
  mounted() {
    this.updateData(this.pageData.contactUs);
    this.center = [119.177538, 34.604303];
    this.center2 = [121.48209, 31.232879];
    this.position = [119.177538, 34.604303];
    this.position2 = [121.48209, 31.232879];
    try {
      VueAMap.initAMapApiLoader({
        key: "3056e7967382c1e7a8baded08f3969b3",
        plugin: [
          "AMap.Autocomplete",
          "AMap.PlaceSearch",
          "AMap.Scale",
          "AMap.OverView",
          "AMap.ToolBar",
          "AMap.MapType",
          "AMap.PolyEditor",
          "AMap.CircleEditor",
        ],
      });
    } catch (error) {}
    Vue.use(VueAMap);
  },
};
</script>

<style lang="stylus" scoped>
.submit_form {
  text-align: left;
  flex: 1;

  input, textarea {
    width: 85%;
    padding: 0.9375rem 1.875rem;
    display: block;
    border-radius: 0.3125rem;

    &:focus {
      outline: none;
    }

    border: 1px solid #dfdfdf;

    & + input {
      margin-top: 1.875rem;
    }
  }

  textarea {
    margin-top: 1.875rem;
    resize: none;
  }

  button {
    background: #0d87fa;
    color: #fff;
    padding: 0.9375rem 1.875rem;
    border-radius: 3.125rem;
    border: none;
    margin-top: 1.875rem;
  }
}

.map {
  width: 39.5rem;
  height: 17.75rem;
  background: #fff;
  padding: 0.5rem;
  box-shadow: 0px 0px 10px 0px #c3c3c3;
}

.linear_gradient {
  background-image: linear-gradient(to right, #06abfb, #00a1fd, #0096fd, #008bfc, #0e7ffa);
  padding: 10px 3.125rem;
  color: #fff;
  font-size: 17px;
  display: inline-block;
  margin-top: 33px;
  border-radius: 100px;
}

::v-deep .amap-logo, ::v-deep .amap-copyright {
  opacity: 0 !important;
}
</style>