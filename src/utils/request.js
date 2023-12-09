import store from "@/store";
import axios from "axios";
import axiosRetry from "axios-retry";
// 返回值是一个新的axios的实例
const request=axios.create({
    baseURL:'http://111.229.247.11:3000',
    timeout:3000,
    withCredentials: true,
})
axiosRetry(request,{retries:3})

// 每一次请求都会触发的函数如何去设置（请求拦截器）
// 如何设置请求拦截器？
request.interceptors.request.use((config)=>{
    const cookie = store.state.auth.cookie
    // console.log(store.state.auth);
    if (cookie) {
        // 策略模式
        ({
            get(){
                config.params ||(config.params={})
                config.params.cookie = cookie
            },
            post(){
                config.data ||(config.data={})
                config.data.cookie = cookie
            }
        })[config.method]()






        // if (config.method == "post") {
        //     config.params ||(config.params={})
        //     config.data.cookie = 'xyz'
        // }
        // if (config.method == "get") {
        //     config.params ||(config.params={})
        //     config.params.cookie = 'xyz'
        // }
    }
    

    // console.log(config);
    
    // config.url = '/abc'
    // config.method = "post"
    //config每一次发送请求的详细配置(请求的地址、请求的路径、请求的参数)
    // 在这个位位置可以对请求配置作更改
    return config
})




// _axios和axios的功能99%一致
window.axios = axios
// axios.get("/abc")=>http://localhost:8080/abc
// 基础请求地址baseURL
window.request= request
export default request