<template>
  <div>
    <ul class="ul_class">
      <li v-for="(item, index) in eCommerceIntruction" :key="index">
        <span v-html="item.content"></span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ECommerceIntruction",
  data() {
    return {
      eCommerceIntruction: [
        {
          content: "",
        },
      ],
      currentIndex: 0,
    };
  },
  watch: {
    pageData: {
      handler(newV) {
        this.updateData(newV.eCommerceIntruction);
      },
      deep: true,
    },
  },
  methods: {
    updateData(data) {
      this.eCommerceIntruction = data.arr;
    },
  },
  mounted() {
    this.updateData(this.pageData.eCommerceIntruction);
  },
};
</script>

<style lang="stylus" scoped>
.ul_class {
  font-size: 26px;
  font-family: '黑体';
  text-align: left;

  li + li {
    margin-top: 45px;
  }
}
</style>