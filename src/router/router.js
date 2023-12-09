// import Top from "@/views/top"
// import Main from "@/views/main"
// import Follow from "@/views/follow"
// import Myse from "@/views/myse"
// import Community from "@/views/community"
// import Songsheet from "@/views/songsheet/index"
export default [
    {
        path:'/',
        redirect:'/main'
    },
    {
        path:'/main',
        name:'main',
        component: ()=>import("@/views/main"),
    },
    {
        path:'/follow',
        name:'follow',
        component: ()=>import("@/views/follow"),
    },
    {
        path:'/myse',
        name:'myse',
        component: ()=>import("@/views/myse"),
    },
    {
        path:'/community',
        name:'community',
        component: ()=>import("@/views/community"),
    },
    {
        path:'/top',
        name:'top',
        component: ()=>import("@/views/top"),
    },
    {
        path:'/login',
        name:'login',
        component: ()=>import("@/views/login/index"),
    },
    {
        path:'/songsheet',
        name:'songsheet',
        component: ()=>import("@/views/songsheet/index"),
    },
    {
        path:'/sing',
        name:'sing',
        component: ()=>import("@/views/songsheet/sing.vue"),
    },
    {
        path:'/mvvideo',
        name:'mvvideo',
        component: ()=>import("@/views/top/mvvideo"),
    },
    {
        path:'/songcomment',
        name:'songcomment',
        component: ()=>import("@/views/songsheet/songcomment"),
    },
    
]