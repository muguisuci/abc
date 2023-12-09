<template>
  <div @click="play">
    音乐播放器
  </div>
</template>

<script>
import {Howl} from "howler";
export default {
    name:"AudioPlayer",
    data(){
        return{
            audioPlayer:null
        }
    },
    created(){
        this.audioPlayer = new Howl({
            src:[
                ""
            ]
        })
    },
    methods:{
        play(){
            this.audioPlayer.play()
        }
    }
}
</script>

<style>

</style>