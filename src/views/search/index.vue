<template>
  <div class="w-[100vw] pl-[3vw] pr-[3vw] bg-[#fff]">
    <div class="pt-[3vw] flex justify-between items-center">
        <router-link to="/main">
          <span class="text-[5vw]"><Icon icon="ph:arrow-left" /></span>
        </router-link>
        <label class="relative">
            <input type="text" placeholder="Love Is Gone (Acoustic)" class="text-[2vw] pl-[8vw] text-[#8189A1] w-[65vw] h-[6vw] border-2  rounded-[25px]">
            <span class="text-[4vw] absolute top-[1vw] left-[3vw]"><Icon icon="basil:search-solid" color="#666" /></span>
        </label>
        <div class="text-[3.5vw]">
          搜索
        </div>
    </div>
    
    <div class="h-[10vw] mt-[3vw] flex justify-between text-[5vw] text-[#ccc] items-center">
      <div>
        <Icon icon="icon-park-solid:people"  />
      </div>|
      <div>
        <Icon icon="mdi:book-music" />
      </div>|
      <div>
        <Icon icon="fa:music" />
      </div>|
      <div>
        <Icon icon="carbon:microphone-filled" />
      </div>
    </div>
  
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>