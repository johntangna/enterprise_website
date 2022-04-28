<template>
  <img :src="imgPath" alt="" />
</template>

<script>
export default {
  name: "industry",
  data() {
    return {
      imgPath: "",
    };
  },
  watch: {
    pageData: {
      handler(newV) {
        this.updateData(newV.industry);
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
    this.updateData(this.pageData.industry);
  },
};
</script>

<style lang="stylus" scoped>
img {
  width: 100%;
}
</style>