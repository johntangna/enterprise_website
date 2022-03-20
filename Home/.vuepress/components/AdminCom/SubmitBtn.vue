<template>
  <div>
    <button :disabled="disabled" @click="submit">更新</button>
  </div>
</template>

<script>
import { updateJsonContent } from "../../../request.js";
export default {
  name: "SubmitBtn",
  data() {
    return {
      disabled: false,
    };
  },
  methods: {
    submit() {
      this.disabled = true;
      updateJsonContent({
        id: JSON.parse(window.localStorage.getItem("pageData"))[0].id,
        jsonContent: JSON.stringify(this.pageData),
      }).finally(() => {
        this.disabled = false;
      });
    },
  },
};
</script>

<style lang="stylus" scoped>
button {
  background: #39b54a;
  color: #fff;
  padding: 10px 30px;
  border: 1px solid #39b54a;
  box-shadow: 1px 1px 5px 1px #636566;
  position: relative;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
}
</style>