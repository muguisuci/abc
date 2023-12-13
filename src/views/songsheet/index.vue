<template>
  <div class="dark:bg-gradient-to-br from-[#486D8D] to-[#6186AB]">
    <div class="w-[100vw] h-[70vw] bg-gradient-to-br from-[#486D8D] to-[#6186AB]">
      <van-sticky>
        <div class="w-[100vw] h-[13vw] flex items-center justify-between bg-gradient-to-br from-[#486D8D] to-[#6186AB]">
          <div class="h-[5vw] flex items-center justify-between">
            <router-link  class="text-[5vw] pl-[3vw]" :to="{path:'/main?',query:{id:this.$route.query.id}}"><Icon icon="solar:arrow-left-outline" color="white"/></router-link>
            <div class="  w-[20vw] text-[#fff] text-[4vw] ml-[3vw]" v-show="!topes">歌单</div>
            <div class="overflow-hidden w-[50vw]">
              <div class="w-[40vw] scrolling-text  text-[#fff] flex items-center text-[4vw] ml-[3vw]" v-show="topes">
                {{ numes.name }}
              </div>
            </div>
            <span class="ml-[3vw] text-[5vw]" v-show="topes"><Icon icon="fluent:collections-24-filled" color="white" /></span>
          </div>
          <div  class="text-[5vw] flex">
            <Icon icon="ion:search-sharp" color="white" class="mr-[2vw]"/>
            <Icon icon="ant-design:more-outlined" color="white" />
          </div>
        </div>
      </van-sticky>
      <div class="w-[90vw] ml-[3vw] h-[30vw] mt-[4vw]">
        <div class="flex  w-[75vw] h-[24vw]" v-show="istore">
          <div class="relative">
              <div class=" flex absolute text-[2vw] top-[0.5vw] right-[3vw] text-[#fff]">
              <Icon icon="ph:play-fill" color="white" />
              {{ formatNumber(numes.playCount) }}
            </div>
            <img :src="numes.coverImgUrl" class="w-[24vw]  mr-[2vw] h-[24vw] rounded-[20px]">
          </div>
          <div class="w-[50vw]">
            <span class="text-[#fff] text-[3vw]">{{ numes.name }}</span>
            <div class="flex items-center "  v-if="numes.creator">
              <img :src="numes.creator.avatarUrl" class="w-[6vw] mr-[1vw] h-[6vw] rounded-[50%]">
              <span class="text-[#ccc] mr-[1vw] text-[2.8vw]">{{ numes.creator.nickname }}</span>
              <div class="text-[#fff] text-center leading-[4vw] rounded-[20px] pr-[3.5vw] text-[2.5vw] px-[2vw] py-[1.25vw]  opacity-50 bg-opacity-20 bg-[#fff]">+关注</div>
            </div>
            <div class="classese w-[15vw] h-[6vw] flex justify-between items-center mt-[2vw]" v-if="numes.algTags">
              <div v-if="numes.algTags[0]">{{ numes.algTags[0] }}></div>
              <div  v-if="numes.algTags[1]">{{ numes.algTags[1] }}></div>
            </div>
          </div>
        </div>
        <div class="text-[3vw] text-[#999] " v-show="!istore">喜欢这个歌单的用户也听了</div>
        <div class=" w-[90vw] mt-[3vw] wrapper overflow-hidden"  v-show="!istore"  ref="wrapper">
          <div class="flex w-[140vw]">
            <div v-for="item in newses" :key="item.id"  class="mr-[3vw]">
                <div class="w-[28vw]" @click="loading(item.id)">
                  <img :src="item.coverImgUrl" class="w-[20vw]  mr-[2vw] h-[20vw] rounded-[20px]">
                  <div class="text-[2vw] w-[20vw] h-[8vw] text-center text-[#fff]">
                      {{ item.name }}
                  </div>
                </div>
              
            </div>
          </div>
        </div>

        <div class="text-[#ccc] text-[5vw] absolute top-[15vw] right-[15vw]"  @click="chang">
            <Icon icon="icon-park-solid:down-c" v-show="istore" />
            <Icon icon="icon-park-solid:up-c"  v-show="!istore" />
          </div>
        <div class="text-[3vw] text-[#ccc] flex mt-[3vw]"  v-show="istore"><div class="truncate w-[80vw] h-[8vw]">{{ numes.description }}</div>></div>
        <div class="w-[90vw] classes h-[10vw]  flex items-center justify-between">
          <div class="w-[25vw] rounded-[25px] text-[#fff] h-[10vw] flex justify-center items-center">
            <Icon icon="majesticons:share" color="white" class="text-[4vw] mr-[1vw]" />
            <span class="text-[4vw]">{{ numes.shareCount }}</span>
          </div>
          <div class="w-[25vw] rounded-[25px] text-[#fff] h-[10vw] flex justify-center items-center">
            <Icon icon="iconamoon:comment-dots-fill" color="white" class="text-[4vw] mr-[1vw]" />
            <span class="text-[4vw]">{{ numes.commentCount }}</span>
          </div>
          <div class="w-[25vw] rounded-[25px] text-[#fff] h-[10vw] flex justify-center items-center">
            <Icon icon="bi:collection-fill" color="white" class="text-[4vw] mr-[1vw]" />
            <span class="text-[4vw]">{{ numes.subscribedCount }}</span>
          </div>
        </div>
      </div>
    </div>
    
    <Song :numid="this.$route.query.id" class="mt-[-3vw] rounded-[15px]"></Song>
    <!-- <Music class=" fixed bottom-0 left-0"></Music> -->
  </div>
</template>
<script>
// getRelated
import { getPlaylistDetail,getRelated } from "@/service";
import BScroll from '@better-scroll/core'
import Song from "./song.vue"
export default {
  components:{Song},
  data(){
    return {
      stres:'歌单',
      numes:[],
      numess:{},
      newses:[],
      istore:true,
      topes:false,
      numseid:{sheetid:this.$route.query.id}
    }
  },
  async created(){
    const [DetailErr,Detail] = await getPlaylistDetail({id:this.$route.query.id});
        if(DetailErr) return DetailErr;
        let {data:{playlist}} = Detail
        // console.log('歌单头部数据',playlist);
        this.playlist = playlist
        this.numes =  playlist

      const [errse,reses]= await getRelated({id:this.$route.query.id});
      if(errse) return console.log(errse);
      this.newses=reses.data.playlists
      // console.log(reses);
  },
  updated(){

  },
  methods:{
    formatNumber(num) {
      num = Number(num);
      if (num == 0 || (num > 0 && num < 10000)) {
        return num + "";
      } else if(num > 10000 && num < 1000000000) {
        return (num / 10000).toFixed(0) + "万";
      }else {
        return (num / 100000000).toFixed(0) + "亿";
      }
    },
    chang(){
      this.istore=!this.istore
    },
    handleScroll(){
      const distanceFromTop = window.pageYOffset;
      // console.log(distanceFromTop,'sjilaldkj');
      if (distanceFromTop>=100) {
        this.topes=true
      }else{
        this.topes=false
      }
    },
    
    loading(id){
        this.$router.push({path:`/songsheet/`,query:{id}})
        location.reload()
    }
  },
  mounted(){
    new BScroll(this.$refs.wrapper, { scrollX: true, click:true});
    window.addEventListener("scroll", this.handleScroll);
  }
}
</script>

<style>
.classes>div{
  background: rgba(231, 229, 229, 0.5);
}
.classes>div:nth-child(3){
  background: red;
}

.classese>div {
  text-align: center;
  line-height: 3vw;
  font-size: 1.5vw;
  background: rgba(252, 250, 250, 0.5);
  color: #fff;
  width: 6vw;
  height: 3vw;
  border-radius: 10px;
}

.scrolling-text {
  white-space: nowrap;
  overflow: hidden;
  animation: scrolling 5s linear infinite;
}

@keyframes scrolling {
  0% {
    transform: translateX(40vw);
  }
  100% {
    transform: translateX(-40vw);
  }
}

</style>