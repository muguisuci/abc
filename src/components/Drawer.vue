<template>
  <div>
    <!-- this.auth.anonimousUser -->
      <van-cell  @click="showPopup"  style="background:0;"><Icon icon="ic:baseline-menu" class="text-[8vw] dark:text-[#999]"/></van-cell>
          <van-popup v-model="show" position="left" class="z-500 bg-[#F4F4F4] dark:bg-[black]"  :style="{ height: '100%',width:'80vw' }">
            <div class="w-[80vw] h-[8vw] flex items-center justify-between">
              <div v-show="!this.auth.anonimousUser">
                <div class=" flex items-center" v-if="this.auth.profile">
                  <img :src="this.auth.profile.avatarUrl" class="w-[6vw] ml-[3vw] h-[6vw] mr-[2vw] rounded-[50%]">
                  <div class=" dark:text-[#fff]">{{this.auth.profile.nickname}}></div>
                </div>
              </div>
              <div v-show="this.auth.anonimousUser">
                <router-link to="/login">
                  <div class=" flex items-center">
                    <span class="text-[5vw] mr-[3vw]"><Icon icon="solar:user-circle-bold-duotone" color="#f9dada" /></span>
                    <span class="text-[3vw]  dark:text-[#fff]">立即登录></span>
                  </div>
                </router-link>
                
              </div>
              <span class="text-[4vw] mr-[3vw]"><Icon icon="icon-park-outline:scan-code" color="#666" /></span>
            </div>
            
            <div class="w-[70vw] pt-[3vw] h-[25vw] rounded-[20px] dark:text-[#999] ml-[3vw] mt-[5vw] bg-gradient-to-r from-[#3b3b3b] to-[#5f5050]">
              <div class="w-[70vw] h-[5vw] flex justify-between items-center">
                <div class="text-[4vw] ml-[2vw] text-[#ffeeeb]">黑胶VIP·壹</div>
                <div class="border-[1px] text-[2.5vw] mr-[3vw] rounded-[20px] text-[#9e8f8f] border-[#9e8f8f]"> 会员中心</div>
              </div>
              <div class="mb-[2vw] ml-[2vw] mt-[3vw] text-[#9e8f8f] text-[2.5vw] border-b-[1px] border-[#9e8f8f]"><p>点击恢复超21项专属特权</p></div>
              <div class="h-[8vw] ml-[2vw] text-[#9e8f8f] flex justify-between items-center mr-[4.45vw]">
                <div class="text-[2.5vw] ">受邀专享，黑胶VIP低至0.27元/天!</div>
                    <div class="w-[6vw] h-[6vw] rounded-[5px] pl-[1vw] bg-[#e54701] text-[#fff] text-[2.2vw]">受邀专享</div>
                </div>
            </div>


            <div class="w-[70vw] rounded-[20px] dark:bg-[#151515] dark:text-[#999] bg-[#fff] mt-[3vw] ml-[3vw]">
              <div class="w-[70vw] ml-[3vw]  h-[12vw] flex justify-between items-center">
                <div class="flex items-center">
                  <span class="text-[4vw]"><Icon icon="solar:letter-line-duotone" /></span>
                  <span class="ml-[3vw] text-[4vw]">我的消息</span>
                </div>
                <div class="mr-[5vw] flex items-center">
                  <span class="text-[2vw] mr-[2vw] text-[#999]"></span>
                  <span class="text-[4vw]"><Icon icon="uiw:right" color="#999" /></span>
                </div>
              </div>

              <div class="w-[70vw] ml-[3vw]  h-[12vw] flex justify-between items-center">
                <div class="flex items-center">
                  <span class="text-[4vw]"><Icon icon="cib:shell" /></span>
                  <span class="ml-[3vw] text-[4vw]">云贝中心</span>
                </div>
                <div class="mr-[5vw] flex items-center">
                  <span class="text-[3vw] mr-[2vw] text-[#999]">签到</span>
                  <span class="text-[4vw]"><Icon icon="uiw:right" color="#999" /></span>
                </div>
              </div>

              <div class="w-[70vw] ml-[3vw]  h-[12vw] flex justify-between items-center">
                <div class="flex items-center">
                  <span class="text-[4vw]"><Icon icon="humbleicons:bulb" /></span>
                  <span class="ml-[3vw] text-[4vw]">创作者服务中心</span>
                </div>
                <div class="mr-[5vw] flex items-center">
                  <span class="text-[2vw] mr-[2vw] text-[#999]"></span>
                  <span class="text-[4vw]"><Icon icon="uiw:right" color="#999" /></span>
                </div>
              </div>
            </div>




            <div class="w-[70vw] rounded-[20px] dark:bg-[#151515] dark:text-[#999]  bg-[#fff] mt-[3vw] ml-[3vw]">
              <div class="text-[3vw] w-[70vw] border-b-[1px] border-[#ccc] flex items-center pl-[3vw] h-[10vw] mr-[2vw] text-[#999]">音乐服务</div>
              <div class="w-[70vw] ml-[3vw]  h-[12vw] flex justify-between items-center">
                <div class="flex items-center">
                  <span class="text-[4vw]"><Icon icon="icon-park-outline:hexagonal" /></span>
                  <span class="ml-[3vw] text-[4vw]">趣测</span>
                </div>
                <div class="mr-[5vw] flex items-center">
                  <span class="text-[3vw] mr-[2vw] text-[#999]">点击查看今日运势</span>
                  <span class="text-[4vw]"><Icon icon="uiw:right" color="#999" /></span>
                </div>
              </div>
              <div class="w-[70vw] ml-[3vw]  h-[12vw] flex justify-between items-center">
                <div class="flex items-center">
                  <span class="text-[4vw]"><Icon icon="twemoji:admission-tickets" /></span>
                  <span class="ml-[3vw] text-[4vw]">云村有票</span>
                </div>
                <div class="mr-[5vw] flex items-center">
                  <span class="text-[2vw] mr-[2vw] text-[#999]"></span>
                  <span class="text-[4vw]"><Icon icon="uiw:right" color="#999" /></span>
                </div>
              </div>
              <div class="w-[70vw] ml-[3vw]  h-[12vw] flex justify-between items-center">
                <div class="flex items-center">
                  <span class="text-[4vw]"><Icon icon="icon-park-outline:shopping-bag" /></span>
                  <span class="ml-[3vw] text-[4vw]">商城</span>
                </div>
                <div class="mr-[5vw] flex items-center">
                  <span class="text-[2vw] mr-[2vw] text-[#999]"></span>
                  <span class="text-[4vw]"><Icon icon="uiw:right" color="#999" /></span>
                </div>
              </div>
              <div class="w-[70vw] ml-[3vw]  h-[12vw] flex justify-between items-center">
                <div class="flex items-center">
                  <span class="text-[4vw]"><Icon icon="ph:heartbeat-light" /></span>
                  <span class="ml-[3vw] text-[4vw]">Beat专区</span>
                </div>
                <div class="mr-[5vw] flex items-center">
                  <span class="text-[3vw] mr-[2vw] text-[#999]">节奏玩家年终对决</span>
                  <span class="text-[4vw]"><Icon icon="uiw:right" color="#999" /></span>
                </div>
              </div>
              <div class="w-[70vw] ml-[3vw]  h-[12vw] flex justify-between items-center">
                <div class="flex items-center">
                  <span class="text-[4vw]"><Icon icon="ri:auction-line" /></span>
                  <span class="ml-[3vw] text-[4vw]">音乐收藏家</span>
                </div>
                <div class="mr-[5vw] flex items-center">
                  <span class="text-[3vw] mr-[2vw] text-[#999]">与音乐人共享收益</span>
                  <span class="text-[4vw]"><Icon icon="uiw:right" color="#999" /></span>
                </div>
              </div>
              <div class="w-[70vw] ml-[3vw]  h-[12vw]  flex justify-between items-center">
                <div class="flex items-center">
                  <span class="text-[4vw]"><Icon icon="solar:play-bold" /></span>
                  <span class="ml-[3vw] text-[4vw]">视频彩铃</span>
                </div>
                <div class="mr-[5vw] flex items-center">
                  <span class="text-[3vw] mr-[2vw] text-[#999]">pick你的音乐彩铃</span>
                  <span class="text-[4vw]"><Icon icon="uiw:right" color="#999" /></span>
                </div>
              </div>
            </div>





            <div class="w-[70vw] rounded-[20px] dark:bg-[#151515] dark:text-[#999] bg-[#fff] mt-[3vw] ml-[3vw]">
              <div class="text-[3vw] w-[70vw] border-b-[1px] border-[#ccc] flex items-center pl-[3vw] h-[10vw] mr-[2vw] text-[#999]">其他</div>
              <div class="w-[70vw] ml-[3vw]  h-[12vw]  flex justify-between items-center">
                <div class="flex items-center">
                  <span class="text-[4vw]"><Icon icon="tabler:settings-2" /></span>
                  <span class="ml-[2vw] text-[4vw]">设置</span>
                </div>
                <div class="mr-[5vw] flex items-center">
                  <span class="text-[2vw] mr-[2vw] text-[#999]"></span>
                  <span class="text-[4vw]"><Icon icon="uiw:right" color="#999" /></span>
                </div>
              </div>
              <div class="w-[70vw] ml-[3vw]  h-[12vw]  flex justify-between items-center">
                <div class="flex items-center">
                  <span class="text-[4vw]"><Icon icon="arcticons:moon" /></span>
                  <span class="ml-[2vw] text-[4vw]">深色模式</span>
                </div>
                <div class="mr-[5vw] flex items-center">
                  <van-switch v-model="isdarkMode"  class="text-[5vw] mr-[2vw] text-[#999]" />
                  <span class="text-[4vw]"><Icon icon="uiw:right" color="#999" /></span>
                </div>
              </div>
              <div class="w-[70vw] ml-[3vw]  h-[12vw]  flex justify-between items-center">
                <div class="flex items-center">
                  <span class="text-[4vw]"><Icon icon="fluent-mdl2:buffer-time-before" /></span>
                  <span class="ml-[2vw] text-[4vw]">定时关闭</span>
                </div>
                <div class="mr-[5vw] flex items-center">
                  <span class="text-[2vw] mr-[2vw] text-[#999]"></span>
                  <span class="text-[4vw]"><Icon icon="uiw:right" color="#999" /></span>
                </div>
              </div>
              <div class="w-[70vw] ml-[3vw]  h-[12vw]  flex justify-between items-center">
                <div class="flex items-center">
                  <span class="text-[4vw]"><Icon icon="iconoir:t-shirt" /></span>
                  <span class="ml-[2vw] text-[4vw]">个性装扮</span>
                </div>
                <div class="mr-[5vw] flex items-center">
                  <span class="text-[2vw] mr-[2vw] text-[#999]"></span>
                  <span class="text-[4vw]"><Icon icon="uiw:right" color="#999" /></span>
                </div>
              </div>
              <div class="w-[70vw] ml-[3vw]  h-[12vw]  flex justify-between items-center">
                <div class="flex items-center">
                  <span class="text-[4vw]"><Icon icon="iconoir:headset-bolt" /></span>
                  <span class="ml-[2vw] text-[4vw]">边听边存</span>
                </div>
                <div class="mr-[5vw] flex items-center">
                  <span class="text-[3vw] mr-[2vw] text-[#999]">未开启</span>
                  <span class="text-[4vw]"><Icon icon="uiw:right" color="#999" /></span>
                </div>
              </div>
              <div class="w-[70vw] ml-[3vw]  h-[12vw]  flex justify-between items-center">
                <div class="flex items-center">
                  <span class="text-[4vw]"><Icon icon="icon-park-twotone:online-meeting" /></span>
                  <span class="ml-[2vw] text-[4vw]">在线听歌免流量</span>
                </div>
                <div class="mr-[5vw] flex items-center">
                  <span class="text-[2vw] mr-[2vw] text-[#999]"></span>
                  <span class="text-[4vw]"><Icon icon="uiw:right" color="#999" /></span>
                </div>
              </div>
              <div class="w-[70vw] ml-[3vw]  h-[12vw]  flex justify-between items-center">
                <div class="flex items-center">
                  <span class="text-[4vw]"><Icon icon="ph:prohibit" /></span>
                  <span class="ml-[2vw] text-[4vw]">音乐黑名单</span>
                </div>
                <div class="mr-[5vw] flex items-center">
                  <span class="text-[2vw] mr-[2vw] text-[#999]"></span>
                  <span class="text-[4vw]"><Icon icon="uiw:right" color="#999" /></span>
                </div>
              </div>
              <div class="w-[70vw] ml-[3vw]  h-[12vw]  flex justify-between items-center">
                <div class="flex items-center">
                  <span class="text-[4vw]"><Icon icon="icon-park-outline:protect" /></span>
                  <span class="ml-[2vw] text-[4vw]">青少年模式</span>
                </div>
                <div class="mr-[5vw] flex items-center">
                  <span class="text-[3vw] mr-[2vw] text-[#999]">未开启</span>
                  <span class="text-[4vw]"><Icon icon="uiw:right" color="#999" /></span>
                </div>
              </div>
              <div class="w-[70vw] ml-[3vw]  h-[12vw]  flex justify-between items-center">
                <div class="flex items-center">
                  <span class="text-[4vw]"><Icon icon="mdi:alarm-clock" /></span>
                  <span class="ml-[2vw] text-[4vw]">音乐闹钟</span>
                </div>
                <div class="mr-[5vw] flex items-center">
                  <span class="text-[2vw] mr-[2vw] text-[#999]"></span>
                  <span class="text-[4vw]"><Icon icon="uiw:right" color="#999" /></span>
                </div>
              </div>
            </div>





            <div class="w-[70vw] rounded-[20px] dark:bg-[#151515] dark:text-[#999] bg-[#fff] mt-[3vw] ml-[3vw]">
              <div class="w-[70vw] ml-[3vw]  h-[12vw]  flex justify-between items-center">
                <div class="flex items-center">
                  <span class="text-[4vw]"><Icon icon="fluent-mdl2:activate-orders" /></span>
                  <span class="ml-[2vw] text-[4vw]">我的订单</span>
                </div>
                <div class="mr-[5vw] flex items-center">
                  <span class="text-[2vw] mr-[2vw] text-[#999]"></span>
                  <span class="text-[4vw]"><Icon  icon="uiw:right" color="#999" /></span>
                </div>
              </div>
              <div class="w-[70vw] ml-[3vw]  h-[12vw]  flex justify-between items-center">
                <div class="flex items-center">
                  <span class="text-[4vw]"><Icon icon="ri:coupon-line" /></span>
                  <span class="ml-[2vw] text-[4vw]">优惠券</span>
                </div>
                <div class="mr-[5vw] flex items-center">
                  <span class="text-[2vw] mr-[2vw] text-[#999]"></span>
                  <span class="text-[4vw]"><Icon  icon="uiw:right" color="#999" /></span>
                </div>
              </div>
              <div class="w-[70vw] ml-[3vw]  h-[12vw]  flex justify-between items-center">
                <div class="flex items-center">
                  <span class="text-[4vw]"><Icon icon="ri:customer-service-line" /></span>
                  <span class="ml-[2vw] text-[4vw]">我的客服</span>
                </div>
                <div class="mr-[5vw] flex items-center">
                  <span class="text-[2vw] mr-[2vw] text-[#999]"></span>
                  <span class="text-[4vw]"><Icon  icon="uiw:right" color="#999" /></span>
                </div>
              </div>
              <div class="w-[70vw] ml-[3vw]  h-[12vw]  flex justify-between items-center">
                <div class="flex items-center">
                  <span class="text-[4vw]"><Icon icon="ri:share-circle-line" /></span>
                  <span class="ml-[2vw] text-[4vw]">分享网易云音乐</span>
                </div>
                <div class="mr-[5vw] flex items-center">
                  <span class="text-[2vw] mr-[2vw] text-[#999]"></span>
                  <span class="text-[4vw]"><Icon  icon="uiw:right" color="#999" /></span>
                </div>
              </div>
              <div class="w-[70vw] ml-[3vw]  h-[12vw]  flex justify-between items-center">
                <div class="flex items-center">
                  <span class="text-[4vw]"><Icon icon="basil:file-outline" /></span>
                  <span class="ml-[2vw] text-[4vw]">个人收集与使用清单</span>
                </div>
                <div class="mr-[5vw] flex items-center">
                  <span class="text-[2vw] mr-[2vw] text-[#999]"></span>
                  <span class="text-[4vw]"><Icon icon="uiw:right" color="#999" /></span>
                </div>
              </div>
              <div class="w-[70vw] ml-[3vw]  h-[12vw]  flex justify-between items-center">
                <div class="flex items-center">
                  <span class="text-[4vw]"><Icon icon="solar:share-circle-linear" /></span>
                  <span class="ml-[2vw] text-[4vw]">个人信息第三方共享清单</span>
                </div>
                <div class="mr-[5vw] flex items-center">
                  <span class="text-[2vw] mr-[2vw] text-[#999]"></span>
                  <span class="text-[4vw]"><Icon icon="uiw:right" color="#999" /></span>
                </div>
              </div>
              <div class="w-[70vw] ml-[3vw]  h-[12vw]  flex justify-between items-center">
                <div class="flex items-center">
                  <span class="text-[4vw]"><Icon icon="icon-park-outline:protect" /></span>
                  <span class="ml-[2vw] text-[4vw]">个人信息与隐私保护</span>
                </div>
                <div class="mr-[5vw] flex items-center">
                  <span class="text-[2vw] mr-[2vw] text-[#999]"></span>
                  <span class="text-[4vw]"><Icon icon="uiw:right" color="#999" /></span>
                </div>
              </div>
              <div class="w-[70vw] ml-[3vw]  h-[12vw]  flex justify-between items-center">
                <div class="flex items-center">
                  <span class="text-[4vw]"><Icon icon="mingcute:information-line" /></span>
                  <span class="ml-[2vw] text-[4vw]">关于</span>
                </div>
                <div class="mr-[5vw] flex items-center">
                  <span class="text-[2vw] mr-[2vw] text-[#999]"></span>
                  <span class="text-[4vw]"><Icon icon="uiw:right" color="#999" /></span>
                </div>
              </div>
            </div>

            <div @click="deleteCachedData" class="w-[70vw] dark:bg-[#151515] h-[10vw] rounded-[20px] leading-[10vw] bg-[#fff] flex justify-center itmes-center  mt-[3vw] ml-[3vw]">
              <span class="text-[red] text-[4vw]">退出登录/关闭</span>
            </div>
          </van-popup>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { mapMutations } from 'vuex';
export default {
  data() {
        return {
            show: false,
            mynues:{}
        };
    },
    computed:{
      ...mapState(["auth"]),
      isdarkMode:{
        get(){
          return this.$store.state.isdarkMode
        },
        set(value){
          this.$store.commit("changeDarkMode",value)
          // console.log(value);
        }
      }
  },
    created(){
      this.mynues=this.auth
      // console.log(this.auth);
    },
    methods: {
      showPopup() {
        this.show = true;
      },
      
      ...mapMutations( ['deleteCachedData']),
      // async outsend() {
      // const [err, res] = await getLogout();
      // if (err) return console.log(err);
      // alert("已退出");
      // console.log(res);
    // },



    },
}
</script>

<style>

</style>