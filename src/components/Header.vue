<template>
    <div class="w-screen h-[10vw] bg-white dark:bg-[black] ">
        <div class="w-screen h-[8vw] flex justify-around items-center">
            <Drawer  class="dark:bg-[black]"></Drawer>
            
            <label class="relative">
                <input type="text" placeholder="Love Is Gone (Acoustic)" class="text-[2vw] pl-[8vw] bg-gradient-to-r from-[#d9ddfd] text-[#8189A1] to-[#f3d9ef] w-[75vw] h-[6vw] border-2 border-[#CCCEF7] rounded-[25px]">
                <span class="text-[4vw] absolute top-[1vw] left-[3vw]"><Icon icon="basil:search-solid" color="#666" /></span>
                <span class="text-[4vw] absolute top-[1vw] right-[3vw]"><Icon icon="icon-park-outline:scan-code" color="#666" /></span>
            </label>
            <span  class="text-[4vw]  dark:text-[#999] flex"><Icon icon="uil:microphone" /></span>
        </div>
        
    </div>
    
</template>

<script>
// import axios from "axios"
export default {
    
}
</script>
<style>

</style>