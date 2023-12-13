<template>
  <div>
    <div class=" flex items-center justify-between left-0 w-[100vw] h-[12vw] bg-[#fff]">
        <div class="w-[55vw] ml-[4vw] h-[10vw] flex items-center">
            <!-- {{ this.$route.query.id }} -->
            <router-link :to="{path:'/sing?',query:{id:this.$route.query.id}}">
                <div @click="showes=!showes" :style="{ transform: 'rotate(' + mixin_player.rotation + 'deg)' }" class=" relative w-[10vw] h-[10vw]">
                    <img src="https://admirable-jalebi-ce44af.netlify.app/static/d7e4e3a244701ee85fecb5d4f6b5bd57.png" alt="" class="absolute top-0 left-0 z-[1]">
                    <img 
                    :src="mixin_player.currentTrackDetail?.al?.picUrl" 
                    class="w-[7vw] h-[7vw] absolute top-[50%] left-[50%]  translate-x-[-50%] translate-y-[-50%] rounded-[50%]" 
                    >
                </div>
            </router-link>
            
            <div class="ml-[3vw] truncate w-[50vw] flex items-center">
                <span class="text-[#999] text-[2.5vw]">{{mixin_player.currentTrackDetail?.name }}</span>-
                <span class=" text-[2vw]">{{mixin_player.currentTrackDetail?.ar?.map(({name})=>name).join("/")}}</span>
                <!-- {{numse.songs[playinde].name}}-{{ numse.songs[playinde].ar[0].name }} -->
            </div>
        </div>
        <div class="w-[20vw]  h-[12vw] mr-[4vw] flex justify-between items-center ">
            <!-- <div @click="toggleRotation" > -->
                <div class="relative w-[6vw] h-[6vw]" @click="mixin_player.toggle()">
                    <van-circle :value="mixin_player.progress*100" size="6vw" :speed="100" />
                    <Icon 
                    class=" absolute top-[50%] text-[3vw] left-[50%] translate-x-[-50%] translate-y-[-50%]"
                    :icon="mixin_player.playing ?'lets-icons:stop-fill':'fluent:play-12-filled'" />
                </div>
            <!-- </div> -->
            <van-cell @click="showPopup"><span class="text-[6vw] text-[#3b4152]"><Icon icon="iconamoon:playlist-bold" /></span></van-cell>
                <van-popup v-model="show" round position="bottom" style="height: 60%;">
                    <div class="playmusic  py-[6vw]">
                        <div class="text-[4vw] bg-[#fff] h-[13vw]  z-20  flex justify-center items-center">
                            当前播放<span class="text-[#ccc]">({{ numse.length }})</span>
                        </div>
                    </div>

                    <div class="ml-[3vw]">
                        <div class="w-[90vw] h-[10vw] mb-[2vw] flex items-center justify-between " v-for="(item,index) in numse" :key="item.id">
                            <div class="text-[4vw] flex items-center"  @click="mixin_player.replaceTracks(numse.map(({id})=>id),numse.map(({id})=>id)[index])">
                                    <div class="text-[#999] w-[3vw] flex items-center h-[10vw] mr-[3vw]" v-if="index!=mixin_player.index">{{ index+1 }}</div>
                                    <div class="text-[#999] w-[2vw]  h-[2vw] flex items-center mr-[3vw]" :style="{ filter: 'hue-rotate(180deg)' }" v-else><img src="https://admirable-jalebi-ce44af.netlify.app/static/wave.gif"  style="filter: brightness(50%) saturate(200%);"  class=" imagese w-[2vw] h-[2vw]"></div>
                                <div class="ml-[3vw]">
                                    <div class="truncate  dark:text-[#999] w-[60vw]" :class="{ 'red-text': index==mixin_player.index }">{{ item.name }}</div>
                                    <div class="text-[2vw] h-[3vw] w-[40vw] flex text-[#999] truncate">
                                        <div class="text-[#bdbd3e] text-[2vw] mr-[1vw] border-[1px] border-[#bdbd3e]">超清母带</div>
                                        <span>{{ item.ar[0].name }} — {{ item.name }}</span>
                                    </div>
                                </div>
                            </div>
                            <div class="flex justify-between items-center w-[20vw] h-[10vw]">
                                <Icon icon="gg:play-button-r" color="#ccc" />
                                <span><Icon icon="ant-design:more-outlined" color="#999" class="text-[4vw]" /></span>
                            </div>
                        </div>
                    </div>
                </van-popup>
        </div>
    </div>
    
    <!-- <div class="w-[100vw] h-[200vw] fixed z-1000 top-0 left-0 bg-[red]" v-show="showes">

    </div> -->
  </div>
</template>

<script>
// import Player from "./player";
// const player = new Player();
// 通过windown这个全局变量共享,
// window.player = new Player()
import { getPlaylistTrack } from "@/service";
export default {
    name:"AudioPlayer",
    data(){
        return{
            currentrate:0,
            show:false,
            rotation:0,
            numse:[],
            num:null,
            showes:false
        }
    },
    // created(){
    //     console.log(this.$route.query.id);
    // },

    async created(){
        // console.log(this.$route.query.id);
        const [err,res] = await getPlaylistTrack({id:this.$route.query.id})
        if(err) return console.log(err);
        this.numse = res.data.songs
        // console.log(this.numse);
    },
    methods:{
        showPopup() {
            this.show = true;
        },
        // dian(index){
        //    this.num = index
        // }
    },
}
</script>

<style scoped>
.playmusic {
    position: sticky;
    top: 0;
    z-index: 999;
    left: 0;
    background-color: white;
}
</style>