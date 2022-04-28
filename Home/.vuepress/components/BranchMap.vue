<template>
  <img :src="imgPath" alt="" />
</template>

<script>
export default {
  name: "branchMap",
  data() {
    return {
      imgPath: "",
    };
  },
  watch: {
    pageData: {
      handler(newV) {
        this.updateData(newV.branchMap);
      },
      deep: true,
    },
  },
  methods: {
    updateData(v) {
      this.imgPath = v.contentImg;
    },
  },
  mounted() {
    this.updateData(this.pageData.branchMap);
  },
};
</script>

<style lang="stylus" scoped>
img {
  width: 100%;
}
</style>