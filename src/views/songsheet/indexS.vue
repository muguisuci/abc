<template>
  <div>
    <van-button @click="mixin_player.replaceTracks(playlist.map(({id})=>id))">
        播放全部
    </van-button>
    <van-button @click="mixin_player.playNextTrack()">
        下一曲
    </van-button>
    <ul>
        <li v-for="song in playlist" :key="song.id">
            {{ song.name }}
        </li>
    </ul>





    <AudioPlayer></AudioPlayer>
  </div>
</template>

<script>
import { getPlaylistTrack } from "@/service";
export default {
    data(){
        return{
            playlist:[]
        }
    },

    async created(){
        const [err,res] = await getPlaylistTrack({id:'6882816667'})
        if(err) return console.log(err);
        this.playlist = res.data.songs
        // console.log(res);
    }
}
</script>

<style>

</style>