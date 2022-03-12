<template>
  <div class="bottom" :style="bgStyle">
    <div>
      <a v-for="(item, index) in left" :key="index" :href="item.link">{{
        item.text
      }}</a>
    </div>
    <div>
      <a href="https://beian.miit.gov.cn/" target="_blank">{{ right }}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "bottom",
  data() {
    return {
      left: [
        { text: "Terms & Consitions", link: "#" },
        { text: "Support", link: "#" },
        { text: "Contact us", link: "#" },
      ],
      right: "© 2022 欧美斯科技发展集团有限公司 苏ICP备20046058",
      bgStyle: {
        background: 'url("/footer.png")',
        backgroundSize: "100% 100%",
      },
    };
  },
};
</script>

<style lang="stylus" scoped>
.bottom {
  display: flex;
  align-items: center;
  width: 1920px;
  height: 80px;
  color: #fff;
  font-size: 16px;
  position: relative;
  bottom: 0;

  a {
    color: #fff;
    padding: 0 33px;
  }

  div {
    flex: 1;
    text-align: center;
  }
}
</style>