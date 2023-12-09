<template>
  <div class="h-screen bg-[black] relative">
    <div class="w-[100vw] flex justify-between items-center h-[10vw] text-[8vw]">
      <router-link to="/top"><Icon icon="mingcute:left-line" color="white" /></router-link>
      <div class="text-[6vw] mr-[5vw] h-[8vw] flex justify-between items-center">
        <span class="mr-[3vw]"><Icon icon="fluent:picture-in-picture-enter-24-regular" color="white" /></span>
        <span><Icon icon="ant-design:more-outlined" color="white"/></span>
      </div>
    </div>
    <div class="w-[10vw] h-[70vw] absolute z-50 right-[3vw] bottom-[40vw] flex flex-col justify-between items-center">
      <div class="text-[8vw] flex flex-col items-center"><Icon icon="majesticons:heart" color="white" /><span class="text-[3vw] text-[#fff]">{{ mvcompet.likedCount }}</span></div>
      <div class="text-[8vw] flex flex-col items-center"><Icon icon="iconamoon:comment-dots-fill" color="white" /><span class="text-[3vw] text-[#fff]">{{ mvcompet.commentCount }}</span></div>
      <div class="text-[8vw] flex flex-col items-center"><Icon icon="majesticons:share" color="white" /><span class="text-[3vw] text-[#fff]">{{ mvcompet.shareCount }}</span></div>
      <div class="text-[8vw] flex flex-col items-center"> <Icon icon="fluent:collections-24-filled" color="white" /><span class="text-[3vw] text-[#fff]">收藏</span></div>
     
    </div>
    <div v-if="mvurl">
      <Videoplayer :source="mvurl"></Videoplayer>
    </div>
    
    <div class="w-[80vw] h-[50vw]">
      <div class="flex items-center ml-[3vw]">
        <img :src="songer.artists[0].img1v1Url" v-if="songer.artists" class="w-[10vw] h-[10vw] rounded-[50%]">
        <span class="text-[#fff] text-[4vw] ml-[3vw]" v-if="songer.artists">{{ songer.artists[0].name }}</span>
        <span class="bg-[red] ml-[3vw] flex justify-center items-center rounded-[20px] w-[6vw] h-[5vw] text-[4vw]"><Icon icon="fluent:add-48-filled" color="#fff" /></span>
      </div>
      <div class="ml-[3vw] mt-[3vw] flex justify-between items-center">
        <div class="flex items-center">
          <div class="w-[6vw] rounded-[5px] h-[5vw] bg-[#ccc] text-[#999] text-[2.5vw] flex justify-center items-center">MV</div>
          <span><span class="text-[#fff] text-[4vw] ml-[3vw]">{{ songer.name }}</span></span>
        </div>
        <div class="text-[4vw] mr-[3vw]" @click="change">
          <Icon icon="mingcute:down-line" color="white" v-show="isDos"/>
          <Icon icon="mingcute:up-line" color="white" v-show="!isDos" />
        </div>
      </div> 
      <div v-show="!isDos" class="text-[#fff] mt-[3vw] text-[3vw] w-[75vw] ml-[3vw] h-[10vw]">
        {{ songer.desc }}
      </div>
      <div class=" mt-[3vw] ml-[3vw] flex items-center">
        <span><Icon icon="entypo:note" class="text-[4vw]" color="#999" /></span>
        <div class="w-[30vw] overflow-hidden">
          <div class="w-[30vw] scrolling-text  text-[#fff] flex items-center text-[3vw] ml-[3vw]">
            {{ songer.name }}
          </div>
        </div>
        <span><Icon icon="ph:heart" class="text-[4vw]" color="#999" /></span>
      </div>



    </div>
    <div class="w-[90vw] ml-[3vw] h-[10vw] flex items-center">
      <input type="text" placeholder="发条评论结识有趣的人" class="bg-[black] text-[#999]">
    </div>
  </div>
</template>

<script>
import { getMvUrl,getDetailInfo,getDetail } from "@/service";
import Videoplayer from "@/components/Videoplayer.vue"
export default {
  data(){
    return{
      mvurl:'',
      mvcompet:{},
      songer:{},
      isDos:true
    }
  },
  components:{Videoplayer},
  async created(){
    // console.log(this.$route.query.id);
      const [err,res] = await getMvUrl({id:this.$route.query.id});
      console.log();
      if(err) return console.log(err);
      this.mvurl = res.data.data.url
      // console.log(res);




      const [erres,reses] = await getDetailInfo({mvid:this.$route.query.id});
      if(erres) return console.log(erres);
      this.mvcompet = reses.data
      // console.log(this.mvcompet);

      const [erresve,resesve] = await getDetail({mvid:this.$route.query.id});
      if(erresve) return console.log(erresve);
      this.songer = resesve.data.data
      console.log(this.songer);
  },
  methods:{
    change(){
      this.isDos=!this.isDos
    }
  }
}
</script>

<style>
.scrolling-text {
  white-space: nowrap;
  overflow: hidden;
  animation: scrolling 5s linear infinite;
}

@keyframes scrolling {
  0% {
    transform: translateX(30vw);
  }
  100% {
    transform: translateX(-30vw);
  }
}
.plyr__progress{
  position: fixed !important;
  bottom: 3vw;
  width: 100vw;
}

</style>