<template>
  <div class=" flex items-center justify-between left-0 w-[100vw] h-[12vw] bg-[#fff] ">
    <div class="w-[55vw] ml-[4vw] h-[10vw] flex items-center">
        <div v-if="numse.songs">
            <img :src="numse.songs[playinde].al.picUrl" class="img w-[8vw] h-[8vw] rounded-[50%]" :style="{ transform: 'rotate(' + rotation + 'deg)' }">
        </div>
        <div class="ml-[3vw] truncate w-[50vw] text-[3vw]" v-if="numse.songs">
            {{numse.songs[playinde].name}}-{{ numse.songs[playinde].ar[0].name }}
        </div>
    </div>
    <div class="w-[15vw] h-[12vw] mr-[4vw] flex justify-between items-center">
        <div @click="toggleRotation"  class="text-[#3b4152]">
            <van-circle v-model="currentRate" :rate="0" :stroke-width="100" layer-color="#ccc" color="#999" size="6vw" :speed="50">
                <Icon icon="fluent:play-12-filled" v-show="!isRotating" @click="play(playinde)" />
                <Icon icon="lets-icons:stop-fill"  v-show="isRotating" />
            </van-circle>
        </div>
        <div>
            <van-cell @click="showPopup"><span class="text-[6vw] text-[#3b4152]"><Icon icon="iconamoon:playlist-bold" /></span></van-cell>
            <van-popup v-model="show" round position="bottom" :style="{ height: '60%' }" class="z-40">
                <van-sticky offset-top="74vw">
                    <div class="text-[4vw] bg-[#fff] h-[13vw] flex justify-center items-center" v-if="this.numse.songs">
                        当前播放<span class="text-[#ccc]">({{ numse.songs.length }})</span>
                    </div>
                </van-sticky>
                    

                <div class="ml-[3vw]">
                    <div class="w-[90vw] h-[10vw] mb-[2vw] flex items-center justify-between " v-for="(item,index) in numse.songs" :key="item.id">
                    <!-- <router-link :to="{path:'/sing?',query:{id:item.id}}"> -->
                            <div class="text-[4vw] flex items-center" @click="dian(index)">
                                    <div class="text-[#999] w-[3vw] flex items-center h-[10vw] mr-[3vw]" v-if="index!=num">{{ index+1 }}</div>
                                    <div class="text-[#999] w-[2vw]  h-[2vw] flex items-center mr-[3vw]" :style="{ filter: 'hue-rotate(180deg)' }" v-else><img src="https://admirable-jalebi-ce44af.netlify.app/static/wave.gif"  style="filter: brightness(50%) saturate(200%);"  class=" imagese w-[2vw] h-[2vw]"></div>
                                <div class="ml-[3vw]" @click="play(index)">
                                    <div class="truncate  dark:text-[#999] w-[60vw]" :class="{ 'red-text': index==num }">{{ item.name }}</div>
                                    <div class="text-[2vw] h-[3vw] w-[40vw] flex text-[#999] truncate">
                                        <div class="text-[#bdbd3e] text-[2vw] mr-[1vw] border-[1px] border-[#bdbd3e]">超清母带</div>
                                        <span>{{ item.ar[0].name }} — {{ item.name }}</span>
                                    </div>
                                </div>
                            </div>
                        <!-- </router-link> -->
                        
                        <div class="flex justify-between items-center w-[20vw] h-[10vw]">
                            <Icon icon="gg:play-button-r" color="#ccc" />
                            <span><Icon icon="ant-design:more-outlined" color="#999" class="text-[4vw]" /></span>
                        </div>
                    </div>
                </div>


            </van-popup>
        </div>
        
    </div>


    <!-- <AudioPlayer></AudioPlayer> -->



    
  </div>
</template>

<script>
// import AudioPlayer from "@/components/AudioPlayer.vue"
// import {Howl} from "howler";
import { mapState } from 'vuex';
import { getPlaylistTrack } from "@/service";
export default {
    // components:{ AudioPlayer },
    data() {
        return {
            rotation: 0,
            isRotating: false,
            currentRate: 0,
            show: false,
            audioPlayer:null,
            numse:[],
            musices:[],
            num:null,
            playinde:0,
            musongseet:0
        };
    },
    watch:{
        musongseet(nuwides){
            console.log(nuwides);
        },
        currentRate(newtime){
            if(newtime==100){
                this.isRotating=false
                this.stopRotation()
            }
        }
    },
    computed:{
    ...mapState(["songnum"])
  },
    methods:{
        toggleRotation() {
            this.isRotating = !this.isRotating;
            if (this.isRotating) {
                this.startRotation();
            } else {
                this.stopRotation();
            }
        },
        startRotation() {
            this.rotateInterval = setInterval(() => {
                this.rotation += 5; // 每次旋转1度
                this.currentRate +=0.1
            }, 50); // 每50毫秒旋转1度，可以根据需要调整速度
        },
        stopRotation() {
            clearInterval(this.rotateInterval);
        },
        showPopup() {
            this.show = true;
        },
        dian(index){
           this.num = index
           this.$emit('modify',index)
            this.playinde = index
        },
        play(numess){
            console.log(numess);
            // console.log(this.musices[numess]);
            this.isRotating= !this.isRotating
            this.mixin_player.replaceTracks(this.musices,this.musices[numess])
        }
    },
    created(){
        console.log(this.songnum);
        this.musongseet = this.songnum
        getPlaylistTrack({id:this.musongseet})
        .then((res)=>{
            this.numse = res[1].data
            for (let i = 0; i < this.numse.songs.length; i++) {
                this.musices.push(this.numse.songs[i].id)
            }
            // console.log(this.numse);
            // console.log(this.musices);
        })
        .catch((err)=>{
            console.log(err)
        })
    },
    
}
</script>

<style>
    .img {
        max-width: 100%;
        max-height: 100%;
        transition: transform 0.5s;
        cursor: pointer;  /* 添加过渡效果，使旋转更加流畅 */
    }

    .red-text {
        color: red;
    }
</style>