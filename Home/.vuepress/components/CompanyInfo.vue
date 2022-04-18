<template>
  <div class="flex_row company_info">
    <div>
      <img :src="companyInfo.contentImg" alt="" />
      <div class="flex_row">
        <div
          class="address"
          v-for="(item, index) in companyInfo.arr"
          :key="index"
        >
          <div>
            <img :src="item.heartImg" alt="" />
            <span> {{ item.heart }}</span>
          </div>
          <div>
            <img :src="item.heartAddressImg" alt="" />
            <span> {{ item.heartAddress }}</span>
          </div>
        </div>
      </div>
      <!-- <div class="fontColor" v-html="companyInfo.content"></div> -->
    </div>
    <div>
      <!-- <strong v-html="companyInfo.linkTitle"></strong>
      <div
        class="linkText"
        v-for="(item, index) in companyInfo.linkArr"
        :key="index"
      >
        <a :href="item.link" target="_blank" v-html="item.text"></a>
      </div> -->
    </div>
    <div class="connect flex_row flex_vertical flex_start align_center">
      <!-- <strong v-html="companyInfo.connectTitle"></strong>
      <div v-for="(item, index) in companyInfo.connectArr" :key="index">
        <span class="fontColor" v-html="item.title"></span>
      </div> -->
      <span v-html="companyInfo.qrcodeIns"></span>
      <img :src="companyInfo.qrcodeImg" alt="" />
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
  font-size: 18px;
  font-weight: 700;
  color: #333333;

  > div {
    text-align: left;

    :first-child {
      margin-bottom: 2.1875rem;
    }
  }

  span {
    line-height: 30px;
    vertical-align: top;
  }
}

.linkText + .linkText {
  margin-top: 1.25rem;
}

.connect {
  max-width: 16rem;
  text-align: center !important;

  img {
    width: 7.625rem;
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

.address {
  :first-child {
    margin-bottom: 0.625rem !important;
  }

  & + .address {
    margin-left: 2.5rem;
  }

  span {
    line-height: 3.125rem;
    margin-left: 1.25rem;
  }

  img {
    width: 2.8125rem;
  }
}
</style>