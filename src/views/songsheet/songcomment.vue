<template>
  <div>
    <div> 评论</div>
  </div>
</template>

<script>
import { postCommentMusic } from "@/service";
export default {





    async created(){
        const [err,res] = await postCommentMusic({id:2763642633})
        if(err) return console.log(err);
        console.log(res);
    }
}
</script>

<style>

</style>