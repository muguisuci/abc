<template>
  <Card :title="resource.uiElement.subTitle.title" @modify="fatherFn" class=" w-[90vw] ml-[5vw] mb-[20vw] mt-[2vw] text-[3vw] h-[60vw] "> 
      <div class="flex"
        :style="{ width: `${this.resource.creatives.length * 80}vw` }">
        <div class="w-[90vw] h-[50vw] mt-[3vw] bg-[#fff]  dark:bg-[#353131] rounded-[20px] mr-[2vw]" v-for="creative in this.resource.creatives" :key="creative.id">
          <div class="text-[3vw] dark:text-[#fff] mt-[3vw] ml-[3vw]">
            {{ creative.uiElement.mainTitle.title }}>
          </div>
          <div v-for="(resources,index) in creative.resources" :key="resources.id" class="w-[70vw] h-[10vw] ml-[3vw] mt-[3vw] flex justify-between  items-center mb-[2vw]">
              <div class="flex items-center">
                <img :src="resources.uiElement.image.imageUrl" alt="" class="w-[10vw] rounded-[20px]">
                <div class="text-[3vw] text-[red] ml-[3vw]">{{ index+1 }}</div>
                <div class="text-[3vw] ml-[3vw]">
                  <div class="truncate dark:text-[#fff] w-[40vw]">{{ resources.uiElement.mainTitle.title }}</div>
                  <p class="text-[2vw] dark:text-[#999] text-gray-400" v-if="resources.resourceExtInfo">{{ resources.resourceExtInfo.artists[0].name }}</p>
                  <!-- <p class="text-[2vw] dark:text-[#999] text-gray-400" v-if="resources.resourceExtInfo">{{ resources.uiElement.subTitle.title }}</p> -->
                </div>
              </div>
              <div class="text-[2.5vw] mt-[5vw] mr-[3vw] text-[red]">{{ resources.uiElement.labelText.text }}</div>
          </div>
        </div>
      </div>
  </Card>
</template>

<script>
import Card from './card.vue';
export default {
  data(){
      return{
        arr:''
      }
    },
    components: { Card },
    props: {
        resource: {
        type: Object,
        required: true,
        },
    },
    created() {
      // console.log(this.resource.creatives);
    },
    methods:{
      fatherFn(newStr){
          this.arr = newStr
          console.log(this.arr);
          this.$emit('modifyes',this.arr)
      }
    }
}
</script>

<style>

</style>