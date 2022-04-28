<template>
  <div>
    <span class="area_title customer_title" v-html="title"></span>
    <div class="grid_c_r grid_2r grid_4c grid_gap15">
      <div v-for="(item, index) in honorPrise" :key="index">
        <img class="item_img" :src="item.contentImg" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CompanyShow",
  data() {
    return {
      honorPrise: [
        {
          contentImg: "",
        },
      ],
      currentIndex: 0,
      title: "",
    };
  },
  watch: {
    pageData: {
      handler(newV) {
        this.updateData(newV.honorPrise);
      },
      deep: true,
    },
  },
  methods: {
    updateData(data) {
      this.honorPrise = data.arr;
      this.title = data.title;
    },
  },
  mounted() {
    this.updateData(this.pageData.honorPrise);
  },
};
</script>

<style lang="stylus" scoped>
.grid_c_r img {
  height: 100%;
}

.item_img {
  &:hover {
    transform: scale3d(1.01, 1.01, 1.01);
    transition: all 0.2s;
  }
}

.customer_title {
  color: #089ffa;
  display: inline-block;
  padding: 10px 30px;
  width: auto;
  border: 2px solid #089ffa;
  font-size: 26px;
}
</style>