<template>
  <div class="w-[100vw] mt-[10vw] bg-white dark:bg-[black]">
    <div class="w-[90vw] h-[10vw] ml-[5vw] text-[#ccc] flex items-center justify-between">
      <router-link to="/main">X</router-link>
      <span>游客登录</span>
    </div>
      <div v-show="alls==false||isDo==false">
        <div class="w-[90vw] h-[30vw] ml-[5vw]">
          <Icon
            icon="ri:netease-cloud-music-fill"
            color="#de4033"
            class="text-[20vw] ml-[35vw] mt-[10vw]"
          />
        </div>

        <div class="w-[80vw] h-[10vw] ml-[10vw] bg-[#F4F4F4] rounded-[20px] relative flex items-center">
          <div @click="showPopup" class="mr-[4vw]">+{{ numb }}</div>
          <input type="tel" placeholder="请输入手机号" v-model="phone" class="w-[40vw] h-[10vw] bg-[#F4F4F4]" />
          <span class="text-[3vw] absolute right-[3vw] top-[3.5vw]" @click="all">
            <Icon icon="fluent-mdl2:status-error-full" color="#ccc" v-show="inp" />
          </span>
        </div>
        <button
          @click="sendCode"
          class="w-[80vw] h-[10vw] ml-[10vw] mt-[5vw] text-[rgb(255,255,255)] text-[4vw] rounded-[50px] bg-red-500"
        >
          <!-- <router-link
            :to="{path:'/captcha?',query:{phone:this.phone}}"
            v-if="alls==true&&isDo==true"
          >获取验证码</router-link>
          <div v-else>获取验证码</div> -->
          获取验证码
        </button>

        <div class="w-[80vw] h-[10vw] ml-[10vw] mt-[5vw] flex">
          <div class="inp relative">
            <input type="checkbox" id="myCheckbox" v-model="isDo" />
            <label for="myCheckbox" class="customCheckbox"></label>
          </div>
          <span class="text-[3vw]">
            我已阅读并同意
            <span class="text-blue-800">《服务条款》</span> 、
            <span class="text-blue-800">《隐私政策》</span>
          </span>
        </div>
        <van-action-sheet v-model="show" title="选择国家和地区">
          <van-index-bar v-if="areaAll">
            <div v-for="item in  areaAll" :key="item.id">
              <van-index-anchor :index="item.label" />
              <div
                v-for="item1 in item.countryList"
                :key="item1.id"
                class="flex justify-between pr-[10vw]"
                @click="tagbel(item1.code)"
              >
                <van-cell :title="item1.zh" />
                <span @click="nums(item1)">+{{ item1.code }}</span>
              </div>
            </div>
          </van-index-bar>
        </van-action-sheet>
    </div>

    <div v-if="alls==true&&isDo==true">
      <div class="ml-[5vw]">
        <div class="text-[30px]">输入验证码</div>
        <p>验证码已发送至+{{ numb }} {{ phone }}</p>
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
    
  </div>
</template>

<script>
// LoginCellphone
import { getCaptcha,getCountries } from "@/service";
import { PasswordInput } from "vant";

// import Captcha from "./captcha.vue"
export default {
  components: { PasswordInput },
  data() {
    return {
      phone: "",
      captcha: "",
      isDo: true,
      inp: false,
      alls: false,
      show: false,
      areaAll:'',
      value: "",
      focused: false,
      hipt:false,
      numb:86
    };
  },
  updated() {
    if (this.phone != "") {
      this.inp = true;
    } else {
      this.inp = false;
    }
  },
  watch: {
    value() {
      if (this.value.length === 4) {
        this.adds();
      }
    }
  },
  methods: {
    async sendCode() {
      if (!/^1[356789]\d{9}$/.test(this.phone))
        return alert("手机号不合规", (this.phone = ""));
      const [err, res] = await getCaptcha({ phone: this.phone,countrycode:this.numb });
      if (err) return alert("请求错误");
      alert("验证码发送成功");
      this.alls = true;
      console.log(res);
    },
    all() {
      this.phone = "";
    },
    showPopup() {
      this.show = true;
      this.tagbel()
      console.log(this.areaAll);
    },
    async tagbel(){
        const [err,res]= await getCountries();
        if(err) return console.log(err);
        this.areaAll = res.data.data
        console.log(this.areaAll);
    },
    focusInput() {
      this.$refs.input.focus();
      this.focused = true;
    },
    adds() {
      if (!/^\d{4}$/.test(this.value)) return alert("验证码不合法");
      this.$store.dispatch("requestLoginCellphone", {
        phone: this.phone,
        captcha: this.value,
        ctcode:this.numb
      });
    },
    nums(items){
      this.numb=items.code
      this.show = false;
    }
  }
};
</script>

<style>
.inp > input[type="checkbox"] {
  display: none; /* 隐藏复选框 */
}

.customCheckbox {
  width: 4vw; /* 设置圆形的宽度 */
  height: 4vw; /* 设置圆形的高度 */
  border-radius: 50%; /* 将标签设置成圆形 */
  border: 2px solid #000; /* 添加圆形的边框 */
  display: inline-block;
}

.inp > input[type="checkbox"]:checked + .customCheckbox::after {
  width: 4vw; /* 设置圆形的宽度 */
  height: 4vw; /* 设置圆形的高度 */
  text-align: center;
  content: "√"; /* 当复选框被选中时，添加√符号 */
  font-size: 18px; /* 设置字体大小 */
  color: #fff; /* 设置√的颜色为白色 */
  background: #999;
  border-radius: 50%;
  position: absolute; /* 绝对定位，使√处于中心位置 */
  top: 0; /* 垂直居中 */
  left: 0; /* 水平居中 */
  z-index: 5;
  /* transform: translate(-50%, -50%); 通过transform来实现居中 */
}
</style>