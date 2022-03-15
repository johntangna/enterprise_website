<template>
  <div>
    <div class="desktop_flex">
      <div
        v-for="(tab, index) in tabs"
        :key="index"
        :class="['titleClass flex_shrank', { active: currentTab == tab }]"
        @click="clickTab(tab, index)"
      >
        <img
          :src="
            currentTab == tab
              ? contentArr[index].activeImg
              : contentArr[index].img
          "
          alt=""
        />
        <span>{{ contentArr[index].text }}</span>
      </div>
    </div>
    <div class="content_com content_padding">
      <img :src="contentArr[currentIndex].contentImg" alt="" />
      <div class="content_com_right">
        <div>{{ contentArr[currentIndex].title }}</div>
        <div>
          {{ contentArr[currentIndex].content }}
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
          text: "示意按钮",
          img: "/content1.png",
          activeImg: "/content1_active.png",
          contentImg: "/swiper1.jpg",
          title: "示意标题1",
          content: "示意内容1",
          link: "#",
        },
        {
          text: "示意按钮",
          img: "/content2.png",
          activeImg: "/content2_active.png",
          contentImg: "/swiper2.jpg",
          title: "示意标题2",
          content: "示意内容2",
          link: "#",
        },
        {
          text: "示意按钮",
          img: "/content3.png",
          activeImg: "/content3_active.png",
          contentImg: "/swiper3.jpg",
          title: "示意标题3",
          content: "示意内容3",
          link: "#",
        },
        {
          text: "示意按钮",
          img: "/content4.png",
          activeImg: "/content4_active.png",
          contentImg: "/swiper4.jpg",
          title: "示意标题4",
          content: "示意内容4",
          link: "#",
        },
      ],
      currentIndex: 0,
      currentTab: "content1",
      tabs: ["content1", "content2", "content3", "content4"],
    };
  },
  methods: {
    clickTab(tab, index) {
      this.currentTab = tab;
      this.currentIndex = index;
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

    :nth-child(2) {
      margin: 2.1875rem 0;
    }
  }

  img {
    width: 28.375rem;
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