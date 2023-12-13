<template>
    <div class="w-screen h-[20vw] dark:from-[#2c1a2b] dark:to-[#1a1c23] bg-gradient-to-b from-[#E6E6FB] to-[#f1f1f1] ">
        <div class="w-screen h-[16vw] flex justify-around items-center">
            <Drawer></Drawer>
            <!-- <div @click="deleteCachedData">dianjituichu</div> -->
            <router-link to="/search">
                <label class="relative">
                    <input type="text" placeholder="Love Is Gone (Acoustic)" 
                    class="text-[3vw] pl-[8vw] bg-gradient-to-r from-[#d9ddfd] text-[#8189A1] to-[#f3d9ef] w-[75vw] h-[10vw] border-2 border-[#CCCEF7] dark:from-[#34304b] dark:to-[#403246] dark:border-0 rounded-[25px]">
                    <span class="text-[5vw] absolute top-[0.5vw] left-[3vw]"><Icon icon="basil:search-solid" color="#666" /></span>
                    <span class="text-[5vw] absolute top-[0.5vw] right-[3vw]"><Icon icon="icon-park-outline:scan-code" color="#666" /></span>
                </label>
            </router-link>
            <span  class="text-[7vw] ml-[3vw] mr-[2vw]  dark:text-[#999] flex"><Icon icon="uil:microphone" /></span>
        </div>
        
    </div>
    
</template>

<script>
export default {
    
}
</script>
<style>

</style>