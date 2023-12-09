import Vue from "vue";
import VueRouter from "vue-router";
import routes from "@/router/router";
import 'vant/lib/index.css';
import Vant from 'vant';
Vue.use(Vant);
// 注册两个全局组件router-link router-view
Vue.use(VueRouter)

const router  = new VueRouter({
    mode:'history',
    routes,
})

export default router;