<template>
  <div>
    <span class="area_title" v-html="title"></span>
    <div class="flex_row blog">
      <div
        class="team"
        v-for="(item, index) in blogTeamArr"
        :key="index"
        :class="{ active: currentIndex == index }"
        @click="currentIndex = index"
      >
        <img :src="item.contentImg" alt="" />
        <div class="team_content">
          <strong v-html="item.title"></strong>
          <div>
            <span v-html="item.content">{{ item.content }}</span>
            <a :href="item.link">Read More</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Blog",
  data() {
    return {
      blogTeamArr: [],
      currentIndex: 0,
      teamActive: "/team_active.png",
      title: "",
    };
  },
  methods: {
    updateData(data) {
      this.blogTeamArr = data.arr;
      this.title = data.title;
    },
  },
  watch: {
    pageData: {
      handler(newV) {
        this.updateData(newV.blogTeamArr);
      },
      deep: true,
    },
  },
  mounted() {
    this.updateData(this.pageData.blogTeamArr);
  },
};
</script>

<style lang="stylus" scoped>
.team {
  border-radius: 5px;
  position: relative;
  border: 1px solid #dfdfdf;

  img {
    width: 22.5rem;
    height: 31.1875rem;
    vertical-align: bottom;
  }

  .team_content {
    padding: 1.875rem;
    background: #fff;
    border-radius: inherit;
    text-align: left;

    div {
      margin-top: 0.9375rem;
      color: #999;
      font-size: 0.875rem;
      text-align: left;

      a {
        float: right;
        color: #1754fa;
      }
    }
  }
}

.active {
  box-shadow: 0px 4px 11px 0px rgba(192, 192, 192, 0.8);

  .team_content {
    strong {
      color: #1754fa;
    }
  }
}
</style>