<template>
  <div class=" mb-[10vw]">
    <div class="flex text-[4vw] mb-[3vw] dark:text-[#fff] items-center justify-between">
      <div>{{ title }}</div>
      <div @click="more"><Icon icon="ant-design:more-outlined" /></div>
    </div>
    <div>
      <div class="wrapper h-[55vw]" ref="wrapper">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from '@better-scroll/core'
// import Scrollbar from '@better-scroll/scroll-bar'
// import Bus from '@/Hub.js'
// BScroll.use(Scrollbar)
export default {
  data(){
    return {
      mores:{isDo:true,span:this.title}
    }
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    config: {
        type: Object,
        default: () => ({ scrollX: true , click:true }),
    },
  },
  methods:{
    more(){
      this.$emit('modify',this.mores)
    }
  },
  mounted(){
      new BScroll(this.$refs.wrapper, this.config);
  },
}
</script>

<style>
  .scroll-wrapper{
    position :relative;
    width :90vw;
    margin: auto;
    white-space: nowrap;
    border-radius: 5px;
    overflow: hidden;
  }
  
  .scroll-content{
    display: inline-block;
    height: 30vw;
    width: 230vw;
  }
  .scroll-item{
    line-height:10vw;
    font-size:2vw;
    display:inline-block;
    text-align:center;
    margin-left: 2vw;
    
  }
</style>