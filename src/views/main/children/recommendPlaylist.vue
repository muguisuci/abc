<template>
  <Card
    :title="resource.uiElement.subTitle.title"
    @modify="fatherFn"
    class="w-[90vw] ml-[5vw] h-[40vw] mt-[4vw] text-[3.5vw] ">
      <div class="flex relative" :style="{ width: `200vw` }">
        <!-- <Icon
          icon="iconoir:infinite"
          color="white"
          class="absolute top-[2vw] left-[23vw] z-10 text-[5vw]"
        /> -->
        <div v-for="creative in this.resource.creatives" :key="creative.id" class="mr-[3vw]">
          <div class="bg-[#ccc] w-[26vw] h-[1vw] ml-[2vw] rounded-t-[40px]"></div>
          <div v-if="creative.resources.length>1"
            class="wgi w-[30vw] h-[35vw] relative overflow-hidden"
          >
            <div class="swiper w-[30vw] h-[35vw] m-[auto] rounded-[3vw] text-center">
              <div class="swiper-wrapper">
                <div
                  class="swiper-slide w-[30vw] dark:text-[#999]"
                  v-for="item in creative.resources"
                  :key="item.id"
                >
                <router-link :to="{path:'/songsheet?',query:{id:Number(creative.creativeId)}}">
                  <img :src="item.uiElement.image.imageUrl" class="w-[30vw] h-[30vw] rounded-[8px]" />
                  <div class="text-[3vw]  h-[5vw] w-[30vw]">{{ item.uiElement.mainTitle.title }}</div>
                </router-link>
                  
                </div>
              </div>
            </div>
          </div>

          <div class="relative"  v-else>
            <Icon
              icon="ph:play-fill"
              color="white"
              class="absolute top-[25vw] right-[1vw] text-[4vw]"
            />
            <div class="absolute flex items-center text-white top-[1.5vw] right-[1.5vw]">
              <Icon icon="ph:play-fill" color="white" />
              {{ formatNumber(creative.resources[0].resourceExtInfo.playCount) }}
            </div>
            <router-link  :to="{path:'/songsheet?',query:{id:creative.creativeId}}" >
              <div class="w-[30vw]" >
                <img
                  class="w-[30vw] h-[30vw] rounded-[8px]"
                  :src="creative.uiElement.image.imageUrl"
                  alt
                />
                <p class="text-[3vw] dark:text-[#999] w-[30vw]">{{ creative.uiElement.mainTitle.title }}</p>

              </div>
            </router-link>
          </div>
        </div>
      </div>
    <!-- </Scroll> -->
  </Card>
</template>

<script>
import Card from "./card.vue";
import Swiper from "swiper";
// import Scroll from "@/components/Scroll";
import "swiper/css/swiper.min.css";
export default {
  data() {
    return {
      arr: ""
    };
  },
  components: { Card },
  props: {
    resource: {
      type: Object,
      required: true
    }
  },
  methods: {
    formatNumber(num) {
      num = Number(num);
      if (num == 0 || (num > 0 && num < 10000)) {
        return num + "";
      } else {
        return (num / 10000).toFixed(0) + "万";
      }
    },
    fatherFn(newStr) {
      this.arr = newStr;
      console.log(this.arr);
      this.$emit("modifyes", this.arr);
    },
    add() {
      console.log(111);
    }
  },
  created() {
    // console.log(this.resource.creatives);
  },
  mounted() {
    new Swiper(".swiper", {
      direction: "vertical", // 垂直切换选项
      loop: true, // 循环模式选项
      autoplay: {
        delay: 3000,
        disableOnInteraction: false
      }
    });
  }
};
</script>

<style scoped>
</style>