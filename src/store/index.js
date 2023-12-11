import Vue from 'vue'
import Vuex from 'vuex'
import persistedstate from "vuex-persistedstate"
import { getHomePageData ,LoginCellphone, } from "@/service";

import { Popup } from 'vant';

Vue.use(Popup);
Vue.use(Vuex)


const store = new Vuex.Store({
    state:{//存储公共数据
        blocks: [],
        auth:{},
        numes:{},
        newseses:[],
        newses:[],
        isdarkMode:false,
        songnum:0
    },
    getters:{},
    mutations:{//定义同步修改公共数据的方法
        updateBlocks(state,res){
            state.blocks = res.data.data.blocks
        },
        updateAuth(state,res){
            state.auth = res.data
        },
        deleteCachedData(state) {
            if (confirm('确定退出吗？')) {
                state.auth.anonimousUser =true;
                state.numes =null;
                state.newseses =null;
                state.newses =null;
            }
        },
        changeDarkMode(state,payload){
            state.isdarkMode = payload
        },
        changeSongnum(state,numle){
            state.songnum = numle
        }
    },
    actions:{//定义异步修改公共数据的方法(借助mutations)，使用store.dispatch()触发
        async requestHomePageData(){
            const [err,homePageData] = await getHomePageData();
            if(err) return;
            store.commit("updateBlocks",homePageData)
        },
        async requestLoginCellphone(store,data){
            const [err,res]= await LoginCellphone(data);
            if(err) return alert("验证码错误");
            alert('成功')
            console.log(res);
            store.commit("updateAuth",res)
        },
    },
    //扩展其他额外的功能
    plugins:[persistedstate()]
});


window.store = store
export default store




// import { getPlaylistDetail,getRelated } from "@/service";