<template>
  <Card :title="resource.uiElement.subTitle.title" @modify="fatherFn" class="w-[90vw] ml-[5vw] mt-[8vw] text-[2.5vw]"> 
      <div
        class="flex"
        :style="{ width: `${this.resource.creatives.length * 33}vw` }">
        <div v-for="creative in this.resource.creatives" :key="creative.id" class=" mr-[3vw] relative">
          <Icon icon="ph:play-fill" color="white" class="absolute top-[25vw] right-[1vw] text-[4vw]"/>
          <router-link  :to="{path:'/songsheet?',query:{id:creative.creativeId}}">
            <img
            class="w-[30vw] h-[30vw] rounded-[8px] overflow-hidden"
            :src="creative.uiElement.image.imageUrl"
            alt=""
          />
          <div class="text-[2.5vw] w-[30vw] dark:text-[#999]" >{{ creative.uiElement.mainTitle.title }}</div>
          
          </router-link>
          
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
    components: { Card  },
    props: {
        resource: {
        type: Object,
        required: true,
        },
    },
    created() {
      
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