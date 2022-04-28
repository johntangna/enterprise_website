<template>
  <div>
    <div class="grid_c_r grid_4c grid_1r grid_gap15">
      <div v-for="(item, index) in culture_corner" :key="index">
        <img class="item_img" :src="item.contentImg" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CultureCorner",
  data() {
    return {
      culture_corner: [
        {
          contentImg: "",
        },
      ],
      currentIndex: 0,
    };
  },
  watch: {
    pageData: {
      handler(newV) {
        this.updateData(newV.culture_corner);
      },
      deep: true,
    },
  },
  methods: {
    updateData(data) {
      this.culture_corner = data.arr;
    },
  },
  mounted() {
    this.updateData(this.pageData.culture_corner);
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