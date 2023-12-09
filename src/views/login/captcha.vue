<template>
  <div class="w-[100vw] mt-[10vw]">
    <div class="w-[90vw] h-[10vw] ml-[5vw] text-[#ccc] flex items-center justify-between">
      <span>X</span>
      <span>游客登录</span>
    </div>
    <div class="ml-[5vw]">
      <div class="text-[30px]">输入验证码</div>
      <p>验证码已发送至+86 {{ this.$route.query.phone }}</p>
    </div>
   
    <div class="w-[90vw] ml-[5vw]">
      <input type="number" maxlength="4" minlength="4" ref="input" v-model="value" class="w-0 h-0" />
      <PasswordInput
        @click="focusInput"
        :value="value"
        class="border-[1px]"
        :gutter="10"
        :mask="false"
        :length="4"
        :focused="focused"
      />
    </div>
    <div class="w-[90vw] ml-[5vw] flex justify-between">
      <span class="text-[#ccc]">重新获取</span>
      <span>手机号已停用？</span>
    </div>
  </div>
</template>

<script>
// import { LoginCellphone } from "@/service"
import { PasswordInput } from "vant";
// import Captcha from "./captcha.vue"
export default {
  components: { PasswordInput },
  data() {
    return {
      value: "",
      focused: false,
      show:true
    };
  },
  watch: {
    value() {
      if (this.value.length === 4) {
        this.adds();
        console.log(this.adds);
      }
    }
  },
  methods: {
    focusInput() {
      this.$refs.input.focus();
      this.focused = true;
    },
    adds() {
      if (!/^\d{4}$/.test(this.value)) return alert("验证码不合法");
      this.$store.dispatch("requestLoginCellphone", {
        phone: this.$route.query.phone,
        captcha: this.value
      });
    }
  },

  created() {
    console.log(this.$route.query.phone);
  }
};
</script>

<style>
.underline-input {
  border-bottom: 1px solid #000; /* 设置下划线样式 */
}
</style>