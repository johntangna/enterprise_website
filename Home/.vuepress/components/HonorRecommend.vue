<template>
  <img :src="imgPath" alt="" />
</template>

<script>
export default {
  name: "honorRecommed",
  data() {
    return {
      imgPath: "",
    };
  },
  watch: {
    pageData: {
      handler(newV) {
        this.updateData(newV.honorRecommed);
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
    this.updateData(this.pageData.honorRecommed);
  },
};
</script>

<style lang="stylus" scoped>
img {
  width: 100%;
}
</style>