<template>
  <div class="w-[100vw] h-[40vw] bg-[#fff] opacity-4 absolute bottom-0 left-0 z-30 rounded-t-[40px]">
    <div>
      
    </div>
        <span><Icon icon="mingcute:more-4-line" /></span>
  </div>
</template>

<script>
export default {
  name:"Menus",
  props:{
    "fates":{
      type:String,
      required: true,
    }
  },
  updated(){
    console.log(this.fates);
  }
}
</script>

<style>

</style>