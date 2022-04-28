<template>
  <img :src="imgPath" alt="" />
</template>

<script>
export default {
  name: "cultureCore",
  data() {
    return {
      imgPath: "",
    };
  },
  watch: {
    pageData: {
      handler(newV) {
        this.updateData(newV.culture_core);
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
    this.updateData(this.pageData.culture_core);
  },
};
</script>

<style lang="stylus" scoped>
img {
  width: 100%;
}
</style>