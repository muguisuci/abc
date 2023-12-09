<template>
  <div class="w-[100vw] h-[10vw]  fixed bottom-0 z-50">
     <div class="flex justify-around  flex-wrap h-[10vw] w-screen">
        <div class=" w-[10vw] h-[10vw] text-center flex justify-around  items-center  flex-col">
            <router-link to="/main">
                <span class="text-[5vw]"><Icon icon="ri:netease-cloud-music-fill"/></span>
                <p  class="text-[3vw]">首页</p>
            </router-link>
        </div>
        <div class="w-[10vw] h-[10vw] flex items-center justify-around  flex-col">
            <router-link to="/top">
                <span class="text-[5vw]"><Icon icon="icon-park-outline:ranking"/></span>
                <p class="text-[3vw]">排行榜</p>
            </router-link>
            
        </div>
        <div class="w-[10vw] h-[10vw] flex items-center justify-around  flex-col">
            <router-link to="/myse">
                <span class="text-[5vw]" ><Icon icon="lucide:music" /></span>
                <p class="text-[3vw]">我的</p>
            </router-link>
            
        </div>
        <div class="w-[10vw] h-[10vw] flex items-center justify-around  flex-col">
            <router-link to="/follow">
                <span class="text-[5vw]"><Icon icon="tabler:user-x" /></span>
                <p class="text-[3vw]">关注</p>
            </router-link>
            
        </div>
        <div class="w-[10vw] h-[10vw] flex justify-around  items-center flex-col">
            <router-link to="/community">
                <span class="text-[5vw]"><Icon icon="gridicons:chat" /></span>
                <p class="text-[3vw]">社区</p>
            </router-link>
        </div>
     </div>
  </div>

  
</template>

<script>
export default {

}
</script>

<style scoped>
    
</style>