<template>
  <div class="w-[100vw] mt-[-3vw] rounded-[15px]">
    <van-sticky offset-top="13vw">
        <div class="flex items-center w-[100vw] h-[10vw] text-[3vw]  rounded-t-[15px] bg-[#fff] dark:bg-gradient-to-br from-[#486D8D] to-[#6186AB]"  @click="mixin_player.replaceTracks(playlist.map(({id})=>id))">
            <span><Icon icon="carbon:play-filled" color="red" class="text-[5vw] ml-[3vw] " /></span>
            <div class="dark:text-[#fff] ml-[2vw]" @click="mixin_player.replaceTracks(playlist.map(({id})=>id))">
                <span class="text-[4vw]">播放全部</span>
                <span class="text-[#ccc] ml-[2vw] text-[3vw]" v-if="this.playlist">({{playlist.length }})</span>
            </div>
        </div> 
    </van-sticky>
    
    <div class="mt-[2vw] ml-[3vw]">
        <div class="w-[90vw] h-[10vw] mb-[2vw] flex items-center justify-between " v-for="(item,index) in playlist" :key="item.id">
            <!-- <router-link :to="{path:'/sing?',query:{index:index}}"> -->
                <!-- <div @click="dian(index)"> -->
                    <div @click="numesss">
                        <div class="text-[4vw] flex items-center" @click="mixin_player.replaceTracks(playlist.map(({id})=>id),playlist.map(({id})=>id)[index])">
                                <div class="text-[#999] w-[3vw] flex items-center h-[10vw] mr-[3vw]" v-if="index!=mixin_player.index">{{ index+1 }}</div>
                                <div class="text-[#999] w-[3vw] flex items-center h-[10vw] mr-[3vw]" v-else><img src="https://admirable-jalebi-ce44af.netlify.app/static/wave.gif" style="filter: brightness(50%) saturate(200%);"  class="red-image w-[2vw] h-[2vw]"></div>
                            
                            <!-- <div v-show="!trestrue"></div> -->
                            <div class="ml-[3vw] ">
                                <div class="truncate  dark:text-[#fff] w-[60vw]" :class="{ 'red-text': index==mixin_player.index }">{{ item.name }}</div>
                                <div class="text-[2vw] h-[3vw] w-[40vw] flex text-[#999] truncate">
                                    <div class="text-[#bdbd3e] text-[2vw] mr-[1vw] border-[1px] border-[#bdbd3e]">超清母带</div>
                                    <span>{{ item.ar[0].name }} — {{ item.name }}</span>
                                </div>
                            </div>
                        </div> 
                    </div>
                <!-- </div> -->
            <!-- </router-link> -->
            
            <div class="flex justify-between items-center w-[20vw] h-[10vw]">
                <Icon icon="gg:play-button-r" color="#ccc" />
                <span><Icon icon="ant-design:more-outlined" color="#999" class="text-[4vw]" /></span>
            </div>
        </div>
    </div>
    
    <AudioPlayer class=" fixed bottom-0 left-0"></AudioPlayer>
    <!-- <Music @modify="fatherFn"></Music> -->
  </div>
</template>

<script>
import { getPlaylistTrack} from "@/service";
export default {
    data(){
        return{
            numse:[],
            trestrue:true,
            num:null,        
            indexse:0,
            playlist:[]
        }
    },
    name:'Song',
    methods:{
        numesss(){
            this.$store.commit('changeSongnum',this.$route.query.id)
        },
        dian(index){
           this.num = index
        },
        
        fatherFn(newStr) {
            console.log(newStr);
            this.num = newStr
        },
    },
    props:{
        numid:{
            type:String,
            required: true,
        }
    },
    updated(){
    },
    async created(){
        console.log(this.numid);
        const [err,res] = await getPlaylistTrack({id:this.$route.query.id})
        if(err) return console.log(err);
        // this.numse=res[1].data
        this.playlist = res.data.songs
        // console.log(this.playlist);
    }
}
</script>

<style>
.reds{
    filter: saturate(0) brightness(200%);
}


/* .red-image{
    filter
} */
</style>