<template>
  <div>
    <span class="area_title" v-html="title"></span>
    <div class="flex_row pricing_plan_content">
      <div
        class="flex_row flex_vertical align_center pricing_plan"
        v-for="(item, index) in planArr"
        :key="index"
        :class="{ active: index == currentIndex }"
        @click="currentIndex = index"
      >
        <img
          :src="index == currentIndex ? item.bg_activeImg : item.bg_img"
          :width="width"
          :height="height"
          alt=""
        />
        <strong v-html="item.title"></strong>
        <span v-html="item.content"></span>
        <button v-html="item.button_text"></button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PricingPlan",
  props: {
    width: {
      type: Number,
    },
    height: {
      type: Number,
    },
  },
  data() {
    return {
      planArr: [],
      currentIndex: 1,
      title: "",
    };
  },
  watch: {
    pageData: {
      handler(v) {
        this.updateData(v.planArr);
      },
      deep: true,
    },
  },
  methods: {
    updateData(data) {
      this.planArr = data.arr;
      this.title = data.title;
    },
  },
  mounted() {
    this.updateData(this.pageData.planArr);
  },
};
</script>
<style lang="stylus" scoped>
.align_center {
  padding: 1.875rem 4.375rem;
  width: 22.25rem;
  height: 31.625rem;
  border: 1px solid #dfdfdf;

  &:nth-child(2) {
    margin: 0 1.875rem;
  }

  span {
    color: #999999;
  }

  button {
    color: #999;
    border: 1px solid #dfdfdf;
    border-radius: 50px;
    padding: 15px 50px;
    font-weight: 700;
    background: transparent;
  }
}

.active {
  box-shadow: 0px 8px 9px 0px rgba(208, 208, 208, 0.8);

  button {
    background: #0d87fa;
    color: #fff;
  }
}
</style>