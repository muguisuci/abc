<template>
  <div id="app" :class="{dark:isdarkMode}">
    <router-view></router-view>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'App',
  components: {
    
  },
  computed:{
    ...mapState(["isdarkMode"])
  },
  created(){
    this.$store.dispatch("requestHomePageData");
  }
}
</script>
data
<style>
*{margin: 0;padding: 0;}
#app {
  position: relative;
  overflow-x: hidden;
  overflow-y: hidden;
  /* background: #F4F4F4; */
}


.router-link-active {
    color:red;
}

</style>
