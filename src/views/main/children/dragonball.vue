<template>
    <div class="w-[90vw] ml-[5vw] mt-[2vw] text-[2.5vw] h-[20vw] wrapper"  ref="wrapper">
        <div class="flex w-[210vw] relative">
            <span class="absolute top-[6vw] left-[29vw] text-white text-[4vw] font-black" v-show="!this.auth.anonimousUser">{{ dates }}</span>
            <span class="absolute top-[7vw] left-[7vw] text-white text-[4vw] font-black" v-show="this.auth.anonimousUser">{{ dates }}</span>
            <div v-for="creative in this.resource.creatives[0].resources" :key="creative.id" class="mr-[3vw]">
                <img :src="creative.uiElement.image.imageUrl2" alt="" class=" w-[20vw]">
                <div class="text-[3vw] dark:text-[#999] text-center">
                    {{ creative.uiElement.mainTitle.title }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import BScroll from '@better-scroll/core'
export default {
    data(){
        return {
            dates:new Date().getDate()
        }
    },
    computed:{
        ...mapState(["auth"])
    },
    props: {
        resource: {
        type: Object,
        required: true,
        },
        config: {
            type: Object,
            default: () => ({ scrollX: true }),
        },
    },
    created() {
    //   console.log(new Date().getDate());
    },
  mounted(){
      new BScroll(this.$refs.wrapper, this.config);
  },
}
</script>

<style>

</style>