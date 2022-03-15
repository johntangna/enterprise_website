<template>
  <div class="flex_row company_info">
    <div>
      <img :src="serviceImg" alt="" />
      <div class="fontColor">{{ serviceScope }}</div>
    </div>
    <div>
      <strong>{{ linkTitle }}</strong>
      <div class="linkText" v-for="(item, index) in linkArr" :key="index">
        <a :href="item.link" target="_blank">{{ item.text }}</a>
      </div>
    </div>
    <div class="connect">
      <strong>{{ connectTitle }}</strong>
      <div v-for="(item, index) in connectArr" :key="index">
        <span class="fontColor">{{ item.text }}</span>
      </div>
      <img :src="connectImg" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "CompanyInfo",
  data() {
    return {
      serviceScope:
        "我们主要营业，以及主要经营产品，有什么问题可以咨询我们的，我们都竭力为你服务",
      serviceImg: "/widget_logo.png",
      linkTitle: "Usefull Links",
      linkArr: [
        { text: "About us", link: "#" },
        { text: "Team", link: "#" },
        { text: "Career", link: "#" },
        { text: "Services", link: "#" },
        { text: "Contact", link: "#" },
      ],
      connectTitle: "Connect",
      connectArr: [
        { text: "江苏省连云港市海州区市民路2号" },
        { text: "info@onmouse.cn" },
        { text: "114" },
      ],
      connectImg: "/widget_icon.png",
    };
  },
};
</script>

<style lang="stylus" scoped>
.flex_row {
  > div {
    text-align: left;

    :first-child {
      margin-bottom: 2.1875rem;
    }
  }

  span {
    line-height: 30px;
  }
}

.linkText + .linkText {
  margin-top: 1.25rem;
}

.connect {
  max-width: 16rem;

  img {
    margin-top: 1.875rem;
  }
}

.fontColor {
  color: #999;
  max-width: 25.875rem;
  line-height: 1.875rem;
}

strong {
  display: inline-block;
  margin-bottom: 1.875rem !important;
  font-size: 1.25rem;
}
</style>