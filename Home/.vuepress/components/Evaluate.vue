<template>
  <div>
    <span class="area_title white_area_title">{{ title }}</span>
    <div class="inline_row">
      <div
        v-for="(item, index) in evaluateArr"
        :key="index"
        class="inline_row align_center"
      >
        <div>
          <img :src="item.bg_img" alt="" :width="width" :height="height" />
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
      evaluateArr: [],
      title: "",
    };
  },
  watch: {
    pageData: {
      handler(v) {
        this.updateDate(v.evaluateArr);
      },
      deep: true,
    },
  },
  methods: {
    updateDate(data) {
      this.evaluateArr = data.arr;
      this.title = data.title;
    },
  },
  mounted() {
    this.updateDate(this.pageData.evaluateArr);
  },
};
</script>

<style lang="stylus" scoped>
.inline_row {
  display: inline-block;
  text-align: center;
  vertical-align: middle;

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