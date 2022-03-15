<template>
  <div class="flex_row flex_around appraise_block">
    <img :src="appraise" alt="" />
    <div class="appraise">
      <div class="appraise_time_line">
        <div
          class="qa_line"
          v-for="(item, index) in qaArr"
          :key="index"
          :class="{ active: currentIndex == index }"
          @click="currentIndex = index"
        ></div>
      </div>
    </div>
    <div class="flex_row align_center">
      <img :src="icon" :width="width" :height="height" alt="" />
      <div class="content">
        <div>{{ qaArr[currentIndex].content }}</div>
        <strong>{{ qaArr[currentIndex].name }}</strong>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Appraise",
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
      appraise: "/appraise.png",
      icon: "/appraise_icon.png",
      qaArr: [
        { content: "content1", name: "somebody1" },
        { content: "content2", name: "somebody2" },
        { content: "content3", name: "somebody3" },
        { content: "content4", name: "somebody4" },
      ],
      currentIndex: 0,
      setInterval: null,
    };
  },
  mounted() {
    this.setInterval = setInterval(() => {
      if (this.currentIndex == this.qaArr.length - 1) {
        this.currentIndex = 0;
      } else {
        this.currentIndex++;
      }
    }, 3000);
  },
  beforeDestroy() {
    clearInterval(this.setInterval);
    this.setInterval = null;
  },
};
</script>

<style lang="stylus" scoped>
.appraise {
  position: relative;

  &::before {
    content: '';
    background: #dfdfdf;
    width: 1px;
    height: 21.25rem;
    position: absolute;
  }

  .appraise_time_line {
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}

.qa_line {
  width: 0.9375rem;
  height: 0.9375rem;
  border: 1px solid #0d87fa;
  border-radius: 50%;
  position: relative;
  margin: 1.875rem 0;
}

.active {
  &:after {
    content: '';
    width: 0.8125rem;
    height: 0.8125rem;
    border-radius: 50%;
    background: #0d87fa;
    position: absolute;
    left: 45%;
    top: 48%;
    transform: translate(-48%, -48%);
  }
}

.content {
  margin-left: 1.875rem;
  text-align: left;
  max-width: 28.125rem;

  div {
    color: #999;
    margin-bottom: 1.875rem;
  }
}
</style>