<template>
  <div class="dark:bg-[black]">
    <van-sticky class="h-[30vw]">
          <div class="w-[100vw] h-[10vw] dark:bg-[black] flex justify-between items-center text-[4vw] fixed top-0 left-0 bg-[#fff]">
            <Drawer></Drawer>
            <Icon icon="ion:search-sharp" class=" mr-[4vw] text-[4vw] dark:text-[#999]"/>
          </div>
    </van-sticky>
    
    <div class="bg-[#fff] dark:bg-[#151515] w-[90vw] h-[20vw] ml-[4vw] flex flex-col items-center rounded-[20px] mb-[3vw] " v-show="!this.auth.anonimousUser">
      <div class="mt-[-10vw]"> 
        <img :src="numes.data.profile.avatarUrl" alt="" v-if="numes.data" class="w-[20vw] h-[20vw] rounded-[50%]">
      </div>
      <div class="w-[90vw] h-[10vw]"></div>
      <div class=" text-[3vw] text-center dark:text-[#fff]  w-[60vw]" v-if="numes.data">
        <span>{{ numes.data.profile.nickname }}</span>
      </div>
      <div class="h-[3vw] text-[2vw] text-center flex justify-between items-center text-[#999] w-[30vw] " v-if="numes.data">
        <span>{{ numes.data.profile.follows }}关注</span>|
        <span>{{  numes.data.profile.allSubscribedCount}} 粉丝</span>|
        <span>Lv.{{ numes.data.level }}</span>
      </div>
    </div>



    <div class="bg-[#fff] dark:bg-[#151515] w-[90vw] h-[20vw] ml-[4vw] flex flex-col items-center rounded-[20px] mb-[3vw] " v-show="this.auth.anonimousUser">
      <div class="mt-[-10vw] w-[20vw] h-[20vw] rounded-[50%] bg-[#fff]"> 
        <Icon icon="solar:user-circle-bold-duotone" color="#f9dada" class="text-[20vw]"/>
      </div>
      <div class="w-[90vw] h-[10vw]"></div>
      <div class=" text-[3vw] text-center  w-[60vw]">
        <span>立即登录</span>
      </div>
      <div class="h-[3vw] text-[2vw] text-center flex justify-between items-center text-[#999] w-[30vw] ">
        <span>0关注</span>|
        <span>0 粉丝</span>|
        <span>Lv.0</span>
      </div>
    </div>









    <div class="bg-[#fff] dark:bg-[#151515]  dark:text-[#999] icons w-[90vw] h-[40vw] ml-[4vw] rounded-[20px] mb-[3vw] flex flex-row flex-wrap justify-around">
      <div  >
        <Icon icon="gridicons:play" class="text-[red] text-[8vw] " />
        <span class="text-[4vw]">最近更新</span>
      </div>
      <div>
        <Icon icon="entypo:folder-music" class="text-[red] text-[8vw] "  />
        <span class="text-[4vw]">本地下载</span>
      </div>
      <div>
        <Icon icon="iconamoon:cloud-upload-fill" class="text-[red] text-[8vw] " />
        <span class="text-[4vw]">云盘</span>
        </div>
      <div>
        <Icon icon="ion:bag-check" class="text-[red] text-[8vw] "  />
        <span class="text-[4vw]">已购</span>
        </div>
      <div>
        <Icon icon="icon-park-solid:peoples" class="text-[red] text-[8vw] "  />
        <span class="text-[4vw]">我的好友</span>
        </div>
      <div>
        <Icon icon="ph:star-fill" class="text-[red] text-[8vw] "  />
        <span class="text-[4vw]">收藏和赞</span>
        </div>
      <div>
        <Icon icon="heroicons:signal" class="text-[red] text-[8vw] "  />
        <span class="text-[4vw]">我的博客</span>
        </div>
      <div>
        <Icon icon="el:heart" class="text-[red] text-[8vw] "  />
        <span class="text-[4vw]">乐迷团</span>
        </div>
    </div>

    <div class="bg-[#fff] dark:bg-[#151515]  dark:text-[#999] w-[90vw] h-[15vw] ml-[4vw] flex justify-between items-center rounded-[20px]">
      <div class="flex items-center"  v-show="!this.auth.anonimousUser">
        <div class=" relative">  
          <img :src="newsongsheet[0].coverImgUrl" v-if="newsongsheet[0]" class="w-[15vw] rounded-[20px] ml-[3vw]">
        </div>
        <div class="ml-[3vw]">
          <span class="text-[3vw]" v-if="newsongsheet[0]">
            {{ newsongsheet[0].name }}
          </span>
          <p class="text-[#999] text-[3vw]" v-if="newsongsheet[0]">{{ newsongsheet[0].trackCount }}首</p>
        </div>
        </div>

        <div class="flex items-center"  v-show="this.auth.anonimousUser">
        <div  class="w-[13vw] h-[13vw] flex justify-center items-center rounded-[20px] bg-[#ccc] ml-[3vw]">  
          <Icon icon="mdi:heart" color="white" class="text-[5vw]" />
        </div>
        <div class="ml-[3vw]">
          <span class="text-[3vw]">
            我喜欢的
          </span>
          <p class="text-[#999] text-[3vw]">0首</p>
        </div>
        </div>
      <div class="mr-[3vw] w-[18vw] h-[5vw] border-[1px] flex items-center rounded-[20px] text-[3vw] justify-center border-[#333]">
        <Icon icon="solar:heart-pulse-line-duotone" color="red" />
        <span>心动模式</span>
      </div>
    </div>


    <div class="w-[90vw] dark:text-[#999] h-[8vw] text-[4vw] flex justify-around items-center mt-[3vw] ml-[4vw] ">
      <a href="#create" class="flex flex-col items-center">创建歌单 <div class="w-[8vw] border-[1vw] border-[red] rounded-[20px]"></div></a>
      <a href="#collect" class="flex flex-col items-center">收藏歌单<div v-show="false" class="w-[8vw] border-[1vw] border-[red] rounded-[20px]"></div></a>
    </div>

    <div class="bg-[#fff]  dark:bg-[#151515]  dark:text-[#999] w-[90vw] mt-[3vw] ml-[4vw] rounded-[20px]" id="create"> 
      <div class="text-[#999] ml-[3vw]  text-[3vw] flex justify-between items-center h-[5vw] w-[90vw]">
        <span  v-show="!this.auth.anonimousUser">创建歌单({{ newsongsheet.length-1 }})</span>
        <span  v-show="this.auth.anonimousUser">创建歌单(0)</span>
        <div class="flex mr-[3vw] text-[5vw]">
          <span><Icon icon="material-symbols-light:add" /></span>
          <Icon icon="ant-design:more-outlined" />
        </div>
      </div>
      <div v-for="(itemes,index) in newsongsheet" :key="index+1" class="">
        <div class=" ml-[3vw] w-[90vw] h-[15vw] mt-[3vw] flex items-center justify-between" v-if="index>0">
            <div class="flex items-center">
              <img :src="itemes.coverImgUrl" class="w-[15vw] rounded-[20px]">
              <div class="ml-[3vw]">
                <span class="text-[3vw]">
                  {{ itemes.name }}
                </span>
                <p class="text-[#999] text-[3vw]">{{ itemes.trackCount }}首</p>
              </div>
            </div>
          <span class="mr-[5vw] text-[4vw]"><Icon icon="ant-design:more-outlined"/></span>
        </div>
      </div>

      <div class="mt-[3vw] ml-[3vw] flex items-center">
        <div class="w-[15vw]  dark:text-[#fff] h-[15vw] bg-[#999] text-[6vw] flex justify-center items-center rounded-[20px]">
          <Icon icon="carbon:document-import" />
        </div>
        <div class="text-[3vw]  ml-[3vw]">一键导入外部音乐</div>
      </div>
    </div>


<!-- <div  @scroll="windowness">fkldjsfhldsij</div> -->

    <div class="bg-[#fff] dark:bg-[#151515] w-[90vw] h-[30vw] mt-[3vw] mb-[20vw] ml-[4vw] rounded-[20px]" id="collect">
      <div class="text-[#999] text-[3vw]  ml-[3vw]  flex justify-between items-center h-[5vw] w-[90vw]">
        <span>收藏歌单</span>
        <div class="flex mr-[3vw] text-[5vw]">
          <Icon icon="ant-design:more-outlined"/>
        </div>
      </div>
      <div class="flex justify-center items-center text-[#999] w-[90vw] text-[4vw]">
        <div class=" ml-[3vw] w-[90vw] h-[15vw] mt-[3vw] flex items-center">
          <img :src="newsongsheet[newsongsheet.length-1].coverImgUrl" v-if="newsongsheet[newsongsheet.length-1]" class="w-[15vw] rounded-[20px] ml-[3vw]">
          <div class="ml-[3vw]">
            <span class="text-[3vw]" v-if="newsongsheet[newsongsheet.length-1]">
              {{ newsongsheet[newsongsheet.length-1].name }}
            </span>
            <p class="text-[#999] text-[3vw]" v-if="newsongsheet[newsongsheet.length-1]">{{ newsongsheet[newsongsheet.length-1].trackCount }}首</p>
          </div>
        </div>
      </div>
    </div>
    <Footer class=" bg-white"></Footer>
  </div>
</template>

<script>
//  ,getPlaylistCreate
import { mapState } from "vuex";
import { getUserdetail ,getlikelist,getUserPlaylist} from "@/service";
export default {
  data(){
    return{
      numes:[],
      likesong:0,
      isDo:false,
      scrollTop:0,
      songsheet:'',
      newsongsheet:[]
    }
  },
  computed:{...mapState(["auth"])},
  created(){
      console.log(this.auth.anonimousUser);
    if (this.auth.anonimousUser) {
      console.log(111);
    }else{
      // console.log(222);
        getUserdetail({ uid:this.auth.account.id})
     .then((res)=>{
      this.numes = res[1]
      // console.log(res);
     })
     .catch((err)=>{
      console.log(err);
     })

     getlikelist({ uid:this.auth.account.id})
     .then((res)=>{
      this.likesong=res[1].data.ids.length
      // console.log(res);
     })
     .catch((err)=>{
      console.log(err);
     })


     getUserPlaylist({ uid:this.auth.account.id})
      .then((res)=>{
        this.newsongsheet=res[1].data.playlist
        // console.log(this.newsongsheet);
      })
      .catch((err)=>{
        console.log(err);
     })
    }
   
  },

}
</script>

<style>
  .icons>div {
    width: 20vw;
    height: 20vw;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-around;
  }

  html {
    scroll-behavior: smooth;
}

.router-link-active {
    color:red;
}
</style>