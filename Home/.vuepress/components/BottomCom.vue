<template>
  <div class="bottom bottom_com inline_common" :style="bgStyle">
    <div class="flex_row">
      <a
        v-for="(item, index) in BottomCom.arr"
        :key="index"
        :href="item.link"
        >{{ item.title }}</a
      >
    </div>
    <div class="flex_row">
      <a href="https://beian.miit.gov.cn/" target="_blank">{{
        BottomCom.content
      }}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "bottom",
  data() {
    return {
      BottomCom: {},
      bgStyle: {
        background: 'url("/footer.png")',
        backgroundSize: "100% 100%",
      },
    };
  },
  methods: {
    updateData(data) {
      this.BottomCom = data;
    },
  },
  watch: {
    pageData: {
      handler(newV) {
        this.updateData(newV.BottomCom);
      },
      deep: true,
    },
  },
  mounted() {
    this.updateData(this.pageData.BottomCom);
  },
};
</script>

<style lang="stylus" scoped>
.bottom {
  display: flex;
  align-items: center;
  width: 100%;
  height: auto;
  color: #fff;
  font-size: 16px;
  position: relative;
  bottom: 0;
  padding: 21px 0;

  a {
    color: #fff;
    padding: 0 33px;
  }

  div {
    flex: 1;
    text-align: center;
    justify-content: center;
  }
}
</style>