import request from "@/utils/request"
import { co } from "@/utils";
/**
 * @description 获取歌手分类
 * @param {Object} data 请求参数
 * @param {Number} data.limit 返回数量 默认为30
 * @param {Number} data.offset 偏移数量 用于分页 , 如 : 如 :( 页数 -1)*30, 其中 30 为 limit 的值 , 默认为 0
* @param {Number}  data.type    类别{-1:全部，1:男歌手，2:女歌手，3:乐队}
* @param {Number}  data.area    地域
 * @returns {Promise}
 */
// 获取歌手列表
// axios.post返回值promise实例
export const getArtisList =(data)=>co(request.post(`/artist/list?timestamp=${Date.now()}`,data))



/**
 * @description 搜索关键词可以搜索音乐 / 专辑 / 歌手 / 歌单 / 用户 
 * @param {Object} params 请求参数
 * @param {Number}  params.type  搜索类型{1:单曲,10:专辑,100:歌手,1000:歌单,1002:用户,1004:MV,1006: 歌词,1009:电台,1014: 视频,1018:综合,2000:声音}
 * @param {String}  params.keywords 关键词 必写
 * @param {Number} params.limit 返回数量 , 默认为 30
 * @param {Number} params.offset 偏移数量   用于分页,如:( 页数 -1)*30,其中30为limit的值,默认为0
 * @returns {Promise}
 */

// 搜索
export const cloudsearch =(params) => co(request.get("/cloudsearch", { params }))




/**
 * 
 * @param {Object} data  调用此接口 , 轮播图
 * @returns 
 */


export const getBanner  =(params) => co(request.get("/banner", { params }))


/**
 * @description 获取 APP 首页信息
 */
export const getHomePageData = () => co(request.post("/homepage/block/page"));

/**
 * @description
 */

export const getHomepageDragonBall = () =>
  co(request.get("/homepage/dragon/ball"));
 


export const getAlbumNewest = (params) =>
co(request.get("/album/newest", { params }));




/**
 * @description 调用此接口 ,传入手机号码, 可发送验证码
 * @param {*} params
 * @param {String} params.phone 手机号码
 */

// 验证码
export const getCaptcha = (params)=>co(request.get("/captcha/sent",{params}))



/**
* @description 手机号+验证码登陆
* @param {*} data
* @param {String} data.phone 手机号码
* @param {String} data.captcha 验证码
*/
 export const LoginCellphone = (data) => co(request.post("/login/cellphone",data));

 export const getCountries = () => co(request.post("/countries/code/list"));


// 歌单详情
 export const getPlaylistDetail = (data) => co(request.post(`/playlist/detail?timestamp=${ Date.now()}`,data));

 export const getPlaylistTrack = (data) => co(request.post(`/playlist/track/all?timestamp=${ Date.now()}`,data));


//  用户详情
export const getUserdetail = (data) => co(request.post(`/user/detail?timestamp=${ Date.now()}`,data));


export const getlikelist = (data) => co(request.post("/likelist",data));

// 喜欢的音乐
export const getRelated = (data) => co(request.post("/related/playlist",data));


// 新建歌单
export const getPlaylistCreate = (data) => co(request.post(`/playlist/create?timestamp=${ Date.now()}`,data));


// 用户歌单
export const getUserPlaylist = (data) => co(request.post(`/user/playlist?timestamp=${ Date.now()}`,data));



// 退出登录
export const getLogout = () => co(request.post("/logout"));

// 全部接口
export const getMvall = (params) => co(request.get(`/top/mv?timestamp=${ Date.now()}`, { params }));




export const getMvUrl = (data) => co(request.post(`/mv/url?timestamp=${ Date.now()}`,data));


// mv评论收藏等
export const getDetailInfo = (data) => co(request.post(`/mv/detail/info?timestamp=${ Date.now()}`,data));


export const getDetail = (data) => co(request.post(`/mv/detail?timestamp=${ Date.now()}`,data));



// 音乐
export const getTrackUrl = (track) => {
  return co(request.post(`/song/url/v1?timestamp=${Date.now()}`, { id: track, level: "standard" }));
};






// 音乐评论
export const postCommentMusic = (data) => co(request.post(`/comment/music?timestamp=${ Date.now()}`,data));


export const postSongDetail = (ids) => co(request.get("/song/detail",{params:{ids}}));

