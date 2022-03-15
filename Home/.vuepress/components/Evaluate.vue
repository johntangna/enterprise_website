<template>
  <div class="inline_row">
    <div
      v-for="(item, index) in evaluateArr"
      :key="index"
      class="inline_row align_center"
    >
      <div>
        <img :src="item.img" alt="" :width="width" :height="height" />
      </div>
      <div>
        <span>{{ item.title }}</span>
      </div>
      <div>
        <span>
          {{ item.content }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Evaluate",
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
      evaluateArr: [
        {
          img: "/evaluate_left.png",
          title: "17,354+ Happy Customer",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspen",
        },
        {
          img: "/evaluate_center.png",
          title: "135+ Got Award",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspen",
        },
        {
          img: "/evaluate_right.png",
          title: "2,45,000+ Follower",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspen",
        },
      ],
    };
  },
};
</script>

<style lang="stylus" scoped>
.inline_row {
  display: inline-block;
  text-align: center;

  :nth-child(2) {
    padding: 0 3.125rem;
  }
}

.align_center {
  color: #fff;
  max-width: 15.625rem;

  :nth-child(2) {
    margin: 2.3125rem 0;
    font-size: 1.25rem;
  }

  :nth-child(3) {
    font-size: 1rem;
  }
}
</style>