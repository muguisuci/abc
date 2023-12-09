<template>
  <div class="w-[100vw] h-[100vh] bg-[black]" >
    <div class="z-20 flex flex-col justify-between items-center absolute top-0 left-0 h-[100vh]">
      <div class="w-[90vw] ml-[4vw] flex justify-between items-center">
        <router-link :to="{path:'/songsheet?',query:{id:this.$route.query.id}}">
          <div class="text-[8vw]"><Icon icon="mingcute:down-line" color="white" /></div>
        </router-link>
        <div v-if="numse" class=" truncate w-[70vw] h-[13vw] flex flex-col justify-around items-center">
          <span class="text-[#fff] text-[4vw]">{{ numse[mixin_player.index]?.name }}</span>
          <div class="text-[3vw] text-[#fff] flex items-center">
            {{ numse[mixin_player.index]?.ar[0].name }}
            <div class="w-[8vw] ml-[2vw] h-[5vw] rounded-[10px] bg-[#ccc] text-[#999] flex justify-center items-center">关注</div>
          </div>
        </div>
        <div class="text-[8vw]"><Icon icon="material-symbols:share-outline" color="white" /></div>
      </div>

      <div class="w-[100vw] h-[80vw] relative">
        <div class=" absolute top-[0] left-[50vw] translate-x-[-50%] z-[10] rotated w-[30vw] h-[40vw]" :style="{ transform: mixin_player.playing ? 'rotate(-10deg)' : 'rotate(-45deg)' }">
          <img src="https://admirable-jalebi-ce44af.netlify.app/static/needle-ab.png" class="h-[40vw] absolute top-[-3.2vw] left-[-3.2vw]">
        </div>
        <div class="w-[80vw] h-[80vw] absolute top-[50vw] left-[50vw] translate-x-[-50%] translate-y-[-45%]">
          <div class="absolute w-[80vw] h-[80vw]">
            <img src="https://admirable-jalebi-ce44af.netlify.app/static/d7e4e3a244701ee85fecb5d4f6b5bd57.png" class="absolute top-0 w-[80vw] h-[80vw]">
            <img src="https://admirable-jalebi-ce44af.netlify.app/static/disc_light.png" class="w-[80vw] h-[80vw] absolute top-0">
          </div> 
          <img  v-if="numse" :src="numse[mixin_player.index]?.al.picUrl"  :style="{ transform: 'rotate(' + mixin_player.rotation + 'deg)' }" class="w-[50vw] h-[50vw] absolute top-[15vw] left-[15vw] rounded-[50%] border-[5px] border-[#000] imgese">
        </div>
      </div>

     <div>
      <div class="w-[90vw] text-[8vw] flex justify-around items-center h-[15vw] ml-[5vw]">
        <div @click="loves">
          <span v-show="loveis"><Icon icon="mdi:heart-outline" color="white" /></span>
          <span v-show="!loveis"><Icon icon="mdi:heart" color="red" /></span>
        </div>
        <span><Icon icon="grommet-icons:download-option" color="white" /></span>
        <span><Icon icon="octicon:people-24" color="white" /></span>
        <span><Icon icon="uil:comment-notes" color="white" /></span>
        <span><Icon icon="ri:more-fill" color="white" :rotate="1" /></span>
      </div>

      <!-- <div class="w-[100vw] border-[1px]"></div> -->
      <VueSlider :value="mixin_player.progress*100"></VueSlider>


      <div class="w-[90vw] h-[15vw] ml-[4vw] flex justify-around items-center">
        <div @click="circulatees"  class="text-[#fff] text-[8vw]">
          <Icon icon="teenyicons:loop-solid"  v-show="circulate" />
          <Icon icon="cil:loop-1"  v-show="!circulate" />
        </div>

        <div @click="mixin_player.playPreviousTrack()"><Icon icon="fluent:previous-16-filled" color="white" /></div>
        <div @click="mixin_player.toggle()"  class="text-[#fff] text-[8vw]">
          <Icon 
            :icon="mixin_player.playing ?'lets-icons:stop-fill':'gridicons:play'" />
          <!-- <Icon icon="gridicons:play" v-show="!isotating" />
          <Icon icon="lets-icons:stop-fill"  v-show="isotating" /> -->
        </div>

        <div @click="mixin_player.playNextTrack()"><Icon icon="teenyicons:next-solid" color="white" /></div>
        <div>
          <van-cell @click="showPopup" style="background:0;"><span class="text-[6vw] text-[#fff]"><Icon icon="iconamoon:playlist-bold" /></span></van-cell>
                <van-popup v-model="show" round position="bottom" style="height: 60%;">
                    <div class="playmusic py-[6vw]">
                        <div class="text-[4vw] bg-[#fff] h-[13vw] flex justify-center items-center">
                            当前播放<span class="text-[#ccc]">({{ numse.length }})</span>
                        </div>
                    </div>

                    <div class="ml-[3vw] playmusic">
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
     </div>




    </div>
    
    <div data-v-8298fe8a="" class="element fixed z-[1] top-0 left-0 right-0 bottom-0" :style="{ backgroundImage: 'url(' + numse[mixin_player.index]?.al?.picUrl + ')' }"></div>
    <div class="fixed bgColor top-0 left-0 right-0 bottom-0"></div>
  </div>
</template>

<script>

import { getPlaylistTrack } from "@/service";
import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/default.css'
export default {
  data() {
        return {
            rotation: 0,
            isotating: false,
            currentRate: 0,
            rotations:-45,
            numse:[],
            tranks:[],
            loveis:true,
            circulate:true,
            show: false,
            value:0
        };
    },
    components: {
      VueSlider
    },
    async created(){
      // console.log(this.$route.query.id);
        const [err,res] = await getPlaylistTrack({id:this.$route.query.id})
        if(err) return console.log(err);
        this.numse = res.data.songs
        // for (let i = 0; i < this.numse.songs.length; i++) {
        //         this.tranks.push(this.numse.songs[i].id)
        //     }
        //     // console.log(this.numse);
        //     console.log(this.tranks);
        // console.log(this.numse);
    },
    // created(){
    //   // console.log(this.playinde);
    //     // console.log(this.$route.query.index);
    //     this.musongseet = this.songnum
    //     getPlaylistTrack({id:this.$route.query.id})
    //     .then((res)=>{
    //         this.numse = res[1].data
    //         for (let i = 0; i < this.numse.songs.length; i++) {
    //             this.tranks.push(this.numse.songs[i].id)
    //         }
    //         // console.log(this.numse);
    //         console.log(this.tranks);
    //     })
    //     .catch((err)=>{
    //         console.log(err)
    //     })
    // },
    methods:{
      circulatees(){
        this.circulate = !this.circulate
      },
      loves(){
        this.loveis = !this.loveis
      },
      showPopup() {
          this.show = true;
      },
      },
      updated(){
        // console.log(this.playinde);
      }
}
</script>

<style scoped>
 .imgese {
  max-width: 100%;
  max-height: 100%;
  transition: transform 0.5s;
  cursor: pointer; /* 鼠标指针指向图片时显示为手型指针 */
}

.rotated {
  transition: transform .5s;
  transform-origin: left top;
  
}

.bgimg{
  width: 100vw;
  height: screen;
  background-size: 100vw 120vh; 
  background-repeat:no-repeat;
  background-position: center;
  z-index:-30;
}

.bgColor{
  background-color: rgba(0, 0, 0, 0.5)
}

.element {
    background-size: 100% 100%;
    filter: blur(24px);
}






</style>