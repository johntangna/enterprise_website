<template>
  <div class="flex_row">
    <div
      class="flex_row flex_vertical align_center"
      v-for="(item, index) in planArr"
      :key="index"
      :class="{ active: index == currentIndex }"
      @click="currentIndex = index"
    >
      <img
        :src="index == currentIndex ? item.activeImg : item.img"
        :width="width"
        :height="height"
        alt=""
      />
      <strong>{{ item.title }}</strong>
      <span>{{ item.content }}</span>
      <button>Purchase</button>
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
      planArr: [
        {
          img: "/plan1.png",
          activeImg: "/plan1_active.png",
          title: "Basic",
          content: "content1",
        },
        {
          img: "/plan2.png",
          activeImg: "/plan2_active.png",
          title: "Standard",
          content: "content2",
        },
        {
          img: "/plan3.png",
          activeImg: "/plan3_active.png",
          title: "Premium",
          content: "content3",
        },
      ],
      currentIndex: 1,
    };
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