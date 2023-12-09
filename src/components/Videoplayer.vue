<template>
  <div>
    <video ref="video" id="player" playsinline controls >
        <source :src="source" type="video/mp4">
    </video>
  </div>
</template>

<script>
import Plyr from 'plyr';
import "plyr/dist/plyr.css"
// import
export default {
    name:"Videoplayer",
    data(){
        return{
            videoPlayer:null
        }
    },
    props:{
        "source":{
            type:String,
            required:true,
        }
    },
    mounted(){
        this.videoPlayer = new Plyr(this.$refs.video,
        {
            controls:["progress","play-large"],
            muted: "false",
            autoplay: true,
            hideControls:false,
        })

    }
}
</script>

<style scoped>

</style>