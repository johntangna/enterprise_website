<template>
  <div class="flex_row contact_us">
    <div class="submit_form">
      <input type="text" placeholder="Name" v-model="name" />
      <input type="text" placeholder="Email" v-model="email" />
      <textarea placeholder="Message" rows="8" v-model="message" />
      <button @click="send">Send Message</button>
    </div>
    <div class="map">
      <el-amap
        class="amap-box"
        :vid="'amap-vue'"
        :center="center"
        :zooms="zooms"
      >
        <el-amap-marker
          :position="position"
          :title="'欧美斯科技发展集团有限公司'"
          :icon="'../marker.png'"
          :offset="offset"
        ></el-amap-marker>
      </el-amap>
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
      position: [],
      offset: [-35, -60],
      zooms: [14, 19],
    };
  },
  watch: {
    submit(newV) {
      if (newV) {
        this.name = this.email = this.message = "";
        this.submit = false;
      }
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
  },
  mounted() {
    this.center = [119.177538, 34.604303];
    this.position = [119.177538, 34.604303];
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
  width: 34.375rem;
  height: 20.9375rem;
  background: #fff;
  padding: 0.5rem;
  flex: 1;
}

::v-deep .amap-logo, ::v-deep .amap-copyright {
  opacity: 0 !important;
}
</style>