<template>
  <div class="flex_row align_center flex_start help_inline">
    <div>
      <h1>{{ title }}</h1>
      <span>{{ content }}</span>
    </div>
    <div class="right" v-if="submit">
      <h3>Best wishes</h3>
    </div>
    <div class="right unsubmit inline_common" v-else>
      <input type="text" v-model="name" placeholder="name" />
      <input type="text" v-model="email" placeholder="email" />
      <button @click="submitAct">Submit</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "NeedHelp",
  data() {
    return {
      title: "",
      content: "",
      name: "",
      email: "",
      submit: false,
    };
  },
  methods: {
    submitAct() {
      if (this.name == "" && this.email == "") {
        alert("请填写姓名以及邮箱");
        return;
      }
      this.submit = true;
    },
    updateData(data) {
      this.title = data.title;
      this.content = data.content;
    },
  },
  watch: {
    pageData: {
      handler(v) {
        this.updateData(v.helpInfo);
      },
      deep: true,
    },
  },
  mounted() {
    this.updateData(this.pageData.helpInfo);
  },
};
</script>

<style lang="stylus" scoped>
h1, h3, span {
  color: #fff;
}

button {
  background: #0d87fa;
  border-radius: 3.125rem;
  padding: 1.125rem 3.125rem;
  border: none;
  color: #fff;
  flex: 1;
}

input {
  border-radius: 3.125rem;
  padding: 1.125rem 1.875rem;
  border: none;
  width: 16.125rem;
  flex: 4;

  &:focus {
    outline: none;
  }
}

.right {
  display: flex;
  margin-left: 2.5rem;
}

.unsubmit {
  input + input {
    margin: 0 1.5625rem;
  }
}
</style>