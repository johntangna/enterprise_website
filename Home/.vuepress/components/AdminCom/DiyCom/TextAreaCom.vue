<template>
  <div class="ope_area">
    <div class="ope_list">
      <i class="next_line" title="换行" @click="changeLine($event)"></i>
      <i class="p" title="段落" @click="pLine($event)"></i>
      <i class="first_line" title="缩进2格" @click="firstLine($event)"></i>
    </div>
    <textarea
      class="area_bg_input padding_area"
      :rows="rows"
      :value="content"
      @input="inputChange"
    />
  </div>
</template>

<script>
export default {
  name: "TextAreaCom",
  props: {
    rows: {
      type: Number,
      default: 4,
    },
    content: {
      type: String,
      defualt: "",
    },
  },
  methods: {
    inputChange(v) {
      this.$emit("update:content", v.target.value);
    },
    inputPointer($event, str, flag = true) {
      let getCurrentInput =
        $event.target.parentElement.parentElement.childNodes[2];
      let s_t = getCurrentInput.selectionStart;
      let e_t = getCurrentInput.selectionEnd;
      let v = { target: { value: "" } };
      if (s_t == undefined && e_t == undefined) {
        v.target.value = this.content + str;
        v.target.value += "  \n";
      } else {
        v.target.value =
          this.content.substring(0, s_t) + str + this.content.substring(e_t);
        let lineStr = flag ? "  \n" : "";
        v.target.value =
          v.target.value.substring(0, s_t + str.length) +
          lineStr +
          v.target.value.substring(e_t + str.length);
      }
      getCurrentInput.selectionStart = this.content.length;
      getCurrentInput.selectionEnd = this.content.length;
      getCurrentInput.focus();
      return v;
    },
    changeLine($event) {
      let v = this.inputPointer($event, "<br>");
      this.inputChange(v);
    },
    pLine($event) {
      let v = this.inputPointer($event, "<p>");
      this.inputChange(v);
    },
    firstLine($event) {
      let v = this.inputPointer(
        $event,
        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
        false
      );
      this.inputChange(v);
    },
  },
};
</script>

<style lang="stylus" scoped>
.ope_area {
  position: relative;

  .ope_list {
    height: 37px;
    position: absolute;
    top: -30px;
    right: 0px;
    padding: 5px;
    box-sizing: border-box;

    i {
      cursor: pointer;
      display: inline-block;
      width: 1.6875rem;
      height: 1.6875rem;
    }

    .next_line {
      background: url('/next_line.png') 0 0 no-repeat;
      background-size: 100% 100%;
    }

    .p {
      background: url('/p.png') 0 0 no-repeat;
      background-size: 100% 100%;
    }

    .first_line {
      background: url('/first_line.png') 0 0 no-repeat;
      background-size: 100% 100%;
    }
  }
}

input, textarea {
  padding: 5px;
  border-radius: 3px;
  border: 1px solid #d5dadf;
  color: #6d7882;
  width: 100%;
  box-sizing: border-box;
  resize: none;

  &:focus {
    outline: #646464 solid 1px;
  }
}
</style>