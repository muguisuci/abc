<template>
  <div class="swiper-container w-[95vw] h-[40vw] m-[auto] rounded-[3vw] text-center bg-red-100">
        <div class="swiper-wrapper">
            <div class="swiper-slide w-[100%] h-[100%]" v-for="item in this.resource.extInfo.banners" :key="item.id" >
                <img :src="item.pic" class="w-[100%] h-[100%]">
            </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
    </div>
</template>

<script>
import Swiper from "swiper"
import "swiper/css/swiper.min.css"
// import { getBanner } from "@/service"
export default {
    props: {
        resource: {
        type: Object,
        required: true,
        },
    },
    created(){
        // console.log(this.resource.extInfo.banners);
    },
    updated(){
        new Swiper ('.swiper-container', {
            // direction: 'vertical', // 垂直切换选项
            loop: true, // 循环模式选项
            
            // 如果需要分页器
            pagination: {
            el: '.swiper-pagination',
            },
            
            // 如果需要前进后退按钮
            navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            },
            
            // 如果需要滚动条
            scrollbar: {
            el: '.swiper-scrollbar',
            },
        }) 
    }
}
</script>

<style>

</style>