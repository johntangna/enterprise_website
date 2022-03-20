<template>
  <div class="flex_row company_info">
    <div>
      <img :src="companyInfo.contentImg" alt="" />
      <div class="fontColor">{{ companyInfo.content }}</div>
    </div>
    <div>
      <strong>{{ companyInfo.linkTitle }}</strong>
      <div
        class="linkText"
        v-for="(item, index) in companyInfo.linkArr"
        :key="index"
      >
        <a :href="item.link" target="_blank">{{ item.text }}</a>
      </div>
    </div>
    <div class="connect">
      <strong>{{ companyInfo.connectTitle }}</strong>
      <div v-for="(item, index) in companyInfo.connectArr" :key="index">
        <span class="fontColor">{{ item.title }}</span>
      </div>
      <img :src="companyInfo.connectImg" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "CompanyInfo",
  data() {
    return {
      companyInfo: {},
    };
  },
  methods: {
    updateData(data) {
      this.companyInfo = data;
    },
  },
  watch: {
    pageData: {
      handler(newV) {
        this.updateData(newV.companyInfo);
      },
      deep: true,
    },
  },
  mounted() {
    this.updateData(this.pageData.companyInfo);
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