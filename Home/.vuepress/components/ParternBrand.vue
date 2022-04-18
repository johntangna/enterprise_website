<template>
  <div>
    <span class="customer_color customer_font_size2" v-html="title"> </span>
    <span
      class="area_title customer_color customer_font_size"
      v-html="content"
    ></span>
    <div class="flex_row flex_wrap_c">
      <div class="customer" v-for="(item, index) in parternArr" :key="index">
        <img :src="item.contentImg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ParternBrand",
  data() {
    return {
      title: "",
      content: "",
      parternArr: [
        {
          contentImg: "",
        },
      ],
    };
  },
  watch: {
    pageData: {
      handler(newV) {
        this.updateData(newV.parternBrand);
      },
      deep: true,
    },
  },
  methods: {
    updateData(data) {
      this.parternArr = data.arr;
      this.title = data.title;
      this.content = data.content;
    },
  },
  mounted() {
    this.updateData(this.pageData.parternBrand);
  },
};
</script>

<style lang="stylus" scoped>
.customer {
  &:nth-child(n + 5) {
    margin-top: 30px;
  }

  &:hover {
    transform: scale3d(1.1, 1.1, 1.1);
    transition: all 0.2s;
  }
}

.customer_color {
  color: #0d87fa;
}

.customer_font_size2 {
  font-size: 40px;
  display: block;
  margin-bottom: 35px;
}

.customer_font_size {
  font-size: 26px;
}
</style>