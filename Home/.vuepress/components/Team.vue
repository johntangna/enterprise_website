<template>
  <div class="flex_row team_team">
    <div
      class="team"
      v-for="(item, index) in teamArr"
      :key="index"
      :class="{ active: currentIndex == index }"
      @click="currentIndex = index"
    >
      <img :src="item.img" alt="" />
      <div
        class="activeImg"
        :style="
          currentIndex == index
            ? 'background:url(' +
              teamActive +
              ') 0 0 no-repeat;background-size:100% 100%'
            : ''
        "
      ></div>
      <div class="team_content">
        <strong>{{ item.name }}</strong>
        <div>{{ item.job }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Team",
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
      teamArr: [
        { img: "/default_img.png", name: "A", job: "A" },
        { img: "/default_img.png", name: "AB", job: "AB" },
        { img: "/default_img.png", name: "ABC", job: "ABC" },
        { img: "/default_img.png", name: "ABCD", job: "ABCD" },
      ],
      currentIndex: 0,
      teamActive: "/team_active.png",
    };
  },
};
</script>

<style lang="stylus" scoped>
.team {
  border-radius: 5px;
  position: relative;

  img {
    width: 16.25rem;
    height: 18.125rem;
    vertical-align: bottom;
  }

  .activeImg {
    width: 100%;
    height: 3.0625rem;
    position: absolute;
    top: 0;
  }

  .team_content {
    padding: 2.1875rem 3.75rem;
    background: #fff;

    div {
      margin-top: 0.9375rem;
      color: #999;
      font-size: 0.875rem;
    }
  }
}

.active {
  box-shadow: 0px 4px 11px 0px rgba(192, 192, 192, 0.8);
}
</style>