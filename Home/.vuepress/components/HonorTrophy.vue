<template>
  <img :src="imgPath" alt="" />
</template>

<script>
export default {
  name: "honorTrophy",
  data() {
    return {
      imgPath: "",
    };
  },
  watch: {
    pageData: {
      handler(newV) {
        this.updateData(newV.honorTrophy);
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
    this.updateData(this.pageData.honorTrophy);
  },
};
</script>

<style lang="stylus" scoped>
img {
  width: 100%;
}
</style>