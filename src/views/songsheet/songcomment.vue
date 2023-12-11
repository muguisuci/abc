<template>
  <div>
    <div class="w-[100vw] pl-[4vw] bg-[#fff] h-[10vw] flex justify-between items-center"> 
      <router-link :to="{path:'/sing?',query:{id:this.$route.query.id}}">
        <span class="text-[5vw]"><Icon icon="ph:arrow-left-bold" /></span>
      </router-link>
      <div>评论</div>
      <div class="text-[5vw] flex justify-between items-center">
        <span class="mr-[3vw]"><Icon icon="solar:gallery-add-bold" /></span>
        <span><Icon icon="mingcute:more-2-fill" /></span>
      </div>
    </div>

    <div class="pl-[4vw] bg-[#fff] flex items-center">
      <div class=" relative w-[10vw] h-[10vw]">
          <img src="https://admirable-jalebi-ce44af.netlify.app/static/d7e4e3a244701ee85fecb5d4f6b5bd57.png" alt="" class="absolute top-0 left-0 z-[1]">
          <img 
          :src="mixin_player.currentTrackDetail?.al?.picUrl" 
          class="w-[7vw] h-[7vw] absolute top-[50%] left-[50%]  translate-x-[-50%] translate-y-[-50%] rounded-[50%]" 
          >
      </div>
      <div class="flex items-center ml-[2vw] w-[60vw] truncate">
        <span class="text-[3vw]">{{ mixin_player.currentTrackDetail?.name }}</span><span class="text-[#ccc] text-[2.5vw]"> - {{mixin_player.currentTrackDetail?.ar?.map(({name})=>name).join("/")}} · </span> <span class="text-[red] text-[2.5vw]">关注</span>
      </div>
    </div>

    <div class="w-[100vw] pl-[4vw] pr-[3vw] mt-[3vw] bg-[#fff]">
      <div class="flex justify-between items-center">
        <span class="text-[4vw]" v-if="songcomment">评论区({{ songcomment.length }})</span>
        <div class="text-[#999] text-[3vw] w-[25vw] flex justify-between items-center">
          <span>推荐</span>|
          <span>最热</span>|
          <span class="text-[#000]">最新</span>
        </div>
      </div>

      <div class="w-[100vw]" v-for="itme in songcomment" :key="itme.id">
        <div class="w-[100vw] flex ">
          <div  class="w-[11vw] ">
            <img :src="itme.user.avatarUrl" class="w-[10vw] rounded-[50%]">
          </div>
          <div  class="ml-[3vw] w-[100vw] mb-[10vw]  border-b-[1px]">
            <div>
              <div class="flex items-center">
                {{ itme.user.nickname }}
                <img :src="itme.user.vipRights?.associator?.iconUrl" class="w-[8vw]">
              </div>
              <span class="text-[2vw] flex items-center text-[#999]">{{ itme.timeStr }} {{ itme.ipLocation.location }}</span>
            </div>
            <div class="text-[3vw] mt-[4vw] mb-[10vw]">
              {{ itme.content }}
            </div>
          </div>
        </div>
      </div>


    </div>


  </div>
</template>

<script>
import { postCommentMusic } from "@/service";
export default {
  data(){
    return {
      songcomment:[]
    }
  },




    async created(){
      console.log(this.mixin_player.currentTrackDetail.id);
      console.log(this.mixin_player.currentTrackDetail);
        const [err,res] = await postCommentMusic({id:this.mixin_player.currentTrackDetail.id,limit:100})
        if(err) return console.log(err);
        this.songcomment = res.data.comments
        console.log(this.songcomment);
    }
}
</script>

<style>

</style>