<template>
  <div class=" relative bg-[#F4F4F4] dark:bg-[black]" >
    <Header></Header>
    <Block v-for="block in blocks" :resource="block" @modiflyes="father" :key="block.id"/>
    <div class="w-[100vw] h-screen mb-[5vw] fixed bottom-0 left-0 z-30 bges" v-show="isTrue" @click="bloces" :fates="str">
      <div class="w-[100vw] h-[43vw] bg-[#fff] opacity-4 absolute bottom-0 left-0 z-30 rounded-t-[40px]">
        <div class="w-[100vw] h-[10vw] border-b flex justify-between items-center">
          <span class="ml-[3vw] text-[#999]">{{ str }}</span>
          <span class="mr-[5vw] text-[6vw]" @click="bloces"><Icon icon="mi:circle-error" /></span>
        </div>
        <div class="ml-[3vw]">
          <span class="flex items-center mt-[3vw]"><Icon icon="uiw:like-o" class="mr-[5vw] text-[4vw]" />优先推荐</span>
          <span class="flex items-center mt-[3vw]"><Icon icon="basil:heart-off-outline" class="mr-[5vw] text-[4vw]" />减少推荐</span>
          <span class="flex items-center mt-[3vw]"><Icon icon="mingcute:more-4-line" class="mr-[5vw] text-[4vw]" />更多内容</span>
        </div>
      </div>
    </div>
    





    <AudioPlayer class=" fixed bottom-[10vw] left-0"></AudioPlayer>
    <!-- <AudioPlayer></AudioPlayer> -->
    <!-- <Music class=" fixed bottom-[10vw] left-0"></Music> -->
    <Footer class=" bg-white z-20"></Footer>
    
  </div>
</template>

<script>
import { mapState } from "vuex";
import Block from "./children/block.vue";
export default {
  data(){
    return {
      isTrue:false,
      str:'',
      logines:true,
    }
  },
  components: { Block },
  computed:{...mapState(["blocks"])},
  created(){
    // console.log(this.$store.dispatch);
    this.$store.dispatch("requestHomePageData");
  },
  methods:{
    bloces(){
      this.isTrue=false
    },
    father(news){
      console.log(news);
      this.isTrue=news.isDo
      this.str =news.span
    },
    bocklog(){
      this.logines=!this.logines
    },
  },
  
}
</script>

<style>
  .bges {
    background-color: rgba(0, 0, 0, .5);
  }

  .meng{
    background-color: rgba(0, 0, 0, .5);
  }
</style>