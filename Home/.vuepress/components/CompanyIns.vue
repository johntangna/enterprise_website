<template>
  <div>
    <ul class="ul_class">
      <li v-for="(item, index) in company_info" :key="index">
        {{ item.content }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "CompanyIns",
  data() {
    return {
      company_info: [
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
        this.updateData(newV.company_info);
      },
      deep: true,
    },
  },
  methods: {
    updateData(data) {
      this.company_info = data.arr;
    },
  },
  mounted() {
    this.updateData(this.pageData.company_info);
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