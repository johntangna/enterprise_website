<template>
  <img :src="imgPath" alt="" />
</template>

<script>
export default {
  name: "timeLine",
  data() {
    return {
      imgPath: "",
    };
  },
  watch: {
    pageData: {
      handler(newV) {
        this.updateData(newV.timeLine);
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
    this.updateData(this.pageData.timeLine);
  },
};
</script>

<style lang="stylus" scoped>
img {
  width: 100%;
}
</style>