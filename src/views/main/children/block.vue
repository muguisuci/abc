<template>
  <component
    :is="blocksTypeComponentMap[resource.blockCode]"
    :resource="resource"
    @modifyes="fatherFn"
  />
</template>

<script>
import Banner from "./banner";
import RecommendPlaylist from "./recommendPlaylist";
import StylePlaylist from "./stylePlaylist";
import Toplist from "./toplist";
import RadarPlaylist from "./radarPlaylist";
import NewSong from "./newSong";
import Dragonball from "./dragonball";
const blocksTypeComponentMap = {
  HOMEPAGE_BANNER: Banner,
  HOMEPAGE_BLOCK_PLAYLIST_RCMD: RecommendPlaylist,
  HOMEPAGE_BLOCK_STYLE_RCMD: StylePlaylist,
  HOMEPAGE_BLOCK_TOPLIST: Toplist,
  HOMEPAGE_BLOCK_MGC_PLAYLIST: RadarPlaylist,
  HOMEPAGE_BLOCK_NEW_ALBUM_NEW_SONG: NewSong,
  HOMEPAGE_MUSICIAN_REVISIT: NewSong,
  HOMEPAGE_BLOCK_OLD_DRAGON_BALL:Dragonball,
};
export default {
    name: "Block",
    data() {
        return {
          blocksTypeComponentMap,
          arres:''
        };
    },
    props: {
        resource: {
            type: Object,
            required: true,
        },
    },
    created(){
      // console.log(this.resource);
    },
    methods:{
      fatherFn(newStr){
        this.arres = newStr
        console.log(this.arres);
      this.$emit('modiflyes',this.arres)
      }
    },
    updated(){
    }
    
}
</script>

<style>

</style>