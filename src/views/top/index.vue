<template>
  <div class="bg-[#fff] dark:bg-[black]">
    <div class="h-[12vw] flex justify-center items-center text-center">
        <h3 class="text-[4vw] font-[600] dark:text-[#999]">MV排行榜</h3>
    </div>
    <van-tabs v-model="activeName" class="dark:text-[#999] " background="rgba(255,0,0,0)" animated>
      <van-tab v-for="(item,index) in area" class="" :key="index+1" :title="item" :name="item" @click="getMvData()" >
        <div class="w-[80vw] mt-[4vw] ml-[10vw]" v-for="(artist,index) in MVdata" :key="artist.id">
          <router-link :to="{ path: '/mvvideo', query: {id:artist.id} }"  tag="div">
            <div class="w-[80vw] h-[40vw] relative">
              <div class="w-[13vw] flex items-center  h-[5vw] absolute top-[3vw] right-[3vw]">
                <span><Icon icon="ph:play-fill" color="white" /></span>
                <span class="text-[3vw] text-[#fff]">{{ artist.playCount }}</span>
              </div>
              <img class="w-[80vw] h-[40vw] rounded-[20px]" :src="artist.cover">
            </div>
            <div class="flex text-[4.3vw] mt-[2vw]">
                <p class="text-[#999] text-[4vw]">{{index+1}}</p>
                <div class="text-[4vw] ml-[3vw]">
                    <div>{{artist.name}}</div>
                    <p class="text-[3vw] text-[#999]">{{artist.artistName}}</p>
                </div>
            </div>
          </router-link>
        </div>
      </van-tab>
    </van-tabs>



    
    <Footer class=" bg-white z-20"></Footer>
  </div>
</template>

<script>
import { getMvall } from "@/service";
export default {
  data() {
       return {
        activeName: '内地',
        area:['内地','港台','欧美','日本','韩国'],
        MVdata:[],
       };
   },
    methods: {
        // 获取排行榜
        async getMvData() {
            const [err,res] = await getMvall({area:this.activeName,limit:30});
            if(err) return console.log(err);
            let MVdata = res.data.data;
            this.MVdata = MVdata;
            console.log(res);
        }
    },
    watch:{
        activeName(){
            this.getMvData();
        }
    },
    created() {
        this.getMvData();
    },
    
}
</script>

<style>

</style>