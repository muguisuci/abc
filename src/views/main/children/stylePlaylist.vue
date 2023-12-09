<template>
  <Card :title="resource.uiElement.subTitle.title" class=" w-[90vw] ml-[5vw] mt-[2vw] text-[2.5vw] h-[60vw]"> 
      <div class="flex"
        :style="{ width: `${this.resource.creatives.length * 70}vw` }">
        <div class="w-[90vw] h-[35vw]" v-for="creative in this.resource.creatives" :key="creative.id">
          <div v-for="resources in creative.resources" :key="resources.id" class="w-[70vw] h-[10vw] flex mb-[2vw]">
              <img :src="resources.uiElement.image.imageUrl" alt="" class="w-[10vw] rounded-[20px]">
              <div class="text-[3vw]  dark:text-[#999] ml-[3vw]">
                {{ resources.uiElement.mainTitle.title }}
                <p class="text-[2vw] dark:text-[#999] text-gray-400 " v-if="resources.uiElement.subTitle">{{ resources.uiElement.subTitle.title }}</p>
              </div>
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
      // console.log(this.resource.creatives[0].resources[0].uiElement.subTitle);
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