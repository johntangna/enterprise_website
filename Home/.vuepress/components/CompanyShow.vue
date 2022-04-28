<template>
  <div>
    <div class="grid_c_r grid_2scale grid_1r">
      <img class="item_img" :src="companyShowArr[0].contentImg" />
      <div class="grid_c_r grid_2r grid_2c grid_gap15">
        <div v-for="(item, index) in companyShowArrComputed" :key="index">
          <img class="item_img" :src="item.contentImg" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CompanyShow",
  data() {
    return {
      companyShowArr: [
        {
          contentImg: "",
        },
      ],
      currentIndex: 0,
    };
  },
  computed: {
    companyShowArrComputed() {
      let temp = this.companyShowArr.slice();
      temp.shift();
      return temp;
    },
  },
  watch: {
    pageData: {
      handler(newV) {
        this.updateData(newV.companyShowArr);
      },
      deep: true,
    },
  },
  methods: {
    updateData(data) {
      this.companyShowArr = data.arr;
    },
  },
  mounted() {
    this.updateData(this.pageData.companyShowArr);
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
</style>