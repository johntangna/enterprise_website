<template>
  <div>
    <span class="area_title" v-html="title"></span>
    <div class="desktop_flex">
      <div
        v-for="(tab, index) in contentArr"
        :key="index"
        :class="['titleClass flex_shrank', { active: currentIndex == index }]"
        @click="clickTab(index)"
      >
        <img
          :src="currentIndex == index ? tab.bg_activeImg : tab.bg_img"
          alt=""
        />
        <span v-html="tab.button_text"></span>
      </div>
    </div>
    <div class="content_com content_padding">
      <img :src="contentArr[currentIndex].contentImg" alt="" />
      <div class="content_com_right">
        <div v-html="contentArr[currentIndex].title"></div>
        <div v-html="contentArr[currentIndex].content">
          <!-- {{ contentArr[currentIndex].content }} -->
        </div>
        <a :href="contentArr[currentIndex].link">Read More ></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ExhibitContent",
  data() {
    return {
      contentArr: [
        {
          contentImg: "",
          title: "",
          content: "",
          link: "",
        },
      ],
      title: "",
      currentIndex: 0,
      currentTab: "content1",
      tabs: ["content1", "content2", "content3", "content4"],
    };
  },
  methods: {
    clickTab(index) {
      this.currentIndex = index;
    },
    updateData(data) {
      this.contentArr = data.arr;
      this.title = data.title;
    },
  },
  mounted() {
    this.updateData(this.pageData.contentArr);
  },
  watch: {
    pageData: {
      handler(newV) {
        this.updateData(newV.contentArr);
      },
      deep: true,
    },
  },
};
</script>

<style lang="stylus" scoped>
.titleClass {
  color: #000;
  font-size: 1.25rem;
  border: 1px solid #dfdfdf;
  width: 19.157rem;
  height: 6rem;
  display: inline-block;
  vertical-align: middle;
  position: relative;

  &+ .titleClass {
    border-left-style: none;
  }

  span, img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  &:first-child {
    border-top-left-radius: 7px;
  }

  &:last-child {
    border-top-right-radius: 7px;
  }
}

.content_com {
  box-shadow: 0px 1px 1.25rem 0.375rem rgba(0, 0, 0, 0.2);

  .content_com_right {
    text-align: left;
    display: inline-block;
    vertical-align: middle;
    width: 50%;

    :nth-child(2) {
      margin: 2.1875rem 0;
    }
  }

  img {
    width: 43%;
    height: 18.75rem;
    border-radius: 6px;
    margin-right: 1.875rem;
    vertical-align: middle;
    object-fit: cover;
  }
}

.active {
  color: #fff;
  background: url('/content_active.png') 0 0 no-repeat;
  background-size: 100% 100%;
}
</style>