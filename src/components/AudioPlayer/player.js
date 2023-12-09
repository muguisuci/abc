import { Howl,Howler, } from "howler";
import { getTrackUrl,postSongDetail } from "@/service"
let timer = null
let readtime = null
// Howl加载音乐 播放暂停
// Howler  全局设置声音大小
// 播放器的功能
// 定义一个属性保存播放歌单
// 定义一个方法替换播放列表
export default class {
    constructor(){
        // 播放状态
        this.playing = false
        this.duration=0
        this.progress=0
        this.index=null
        this.tracks=[]
        // 0代表列表循环 1代表单曲循环
        this.loopMode=0
        this.currentTrackDetail={}
        this.howl = null
        this.rotation = 0

    }
    interval(){
        clearInterval(timer)
        timer = setInterval(()=>{
            this.progress  = this.howl.seek()/this.howl.duration()
        },1000)
    }


// 存放播放列表
    replaceTracks(tracks,autoplayTrack){
        this.tracks=tracks
        this.index=0
        this.rotation = 0
        // if (autoplay) return 
        // 指定从autoplayTrack开始播放
        if (autoplayTrack) {
            this.index = this.tracks.indexOf(autoplayTrack)
            // console.log(this.index);
        }
        
        this.playTrack(this.tracks[this.index])
    }


    async playTrack(track){
        // console.log(track);
        const [getTrackUrlerr,res] = await getTrackUrl(track)
        const [postSongDetailerror,response] = await postSongDetail(track)
        if (getTrackUrlerr) return alert('获取mp3异常异常');
        if(postSongDetailerror)return alert('获取歌曲异常异常');
        const mp3Url = res.data.data[0].url
        this.currentTrackDetail = response.data.songs[0]
        console.log(this.currentTrackDetail);
        if (mp3Url) return this.mountAudioSource(mp3Url,true)
        this.playNextTrack();
        // console.log(response.data.data.songs[0]);

    }

    // async covertTrackMp3Url(track){
    //     const [err,res] = await this.getTrackUrl(track)
    //     if (err) return alert('异常');
    //     const mp3Url = res.data.data[0].url
    //     if (mp3Url) return this.mountAudioSource(mp3Url)
    //     this.playNextTrack();
    // }

    mountAudioSource(url,autoplay=false){
        Howler.unload()
        this.howl = new Howl({
            src:[url],
            html5:true,
            format:["mp3"],
        });
        if (autoplay) this.play()
        this.howl.on("end",()=>this.getNextTrack())
    }

    play(){
        clearInterval(readtime)
        // if(!this._howl) return;
        // if(this._howl.playing())return
        this.playing = true
        this.interval();
        this.duration = this.howl.duration()
        this.howl.play()
        readtime = setInterval(() => this.rotation++, 50);
    }

    
    pause(){
        clearInterval(readtime)
        this.playing = false
        this.howl.pause()
    }

    toggle(){
        this.howl.playing() ? this.pause() : this.play()
    }


    // 获取需要播放的trackid
    playNextTrack(){
        // this.rotation = 0
        const nextTrack = this.getNextTrack()
        this.playTrack(nextTrack)
    }
    // 判断播放状态如果列表循环最后一首点下一曲切换第一首单曲循环播放当前歌曲
    getNextTrack(){
        if(this.loopMode==1) return this.tracks[this.index]
        const currentTrackIsLast=this.index+1==this.tracks.length
        if(currentTrackIsLast&&this.loopMode==0) return this.tracks[this.index=0]
        return this.tracks[++this.index]
    }
    // 上一曲
    playPreviousTrack(){
        const previousTrack = this.getPreviousTrack()
        this.playTrack(previousTrack)
    }

    getPreviousTrack(){
        if(this.loopMode==1) return this.tracks[this.index]
        const currentTrackIsFirst=this.index==0
        if(currentTrackIsFirst&&this.loopMode==0) return this.tracks[this.index]
        return this.tracks[--this.index]
    }


    setRate(rate){
        Howler.rate=rate
    }



    getTarckDetail(){

    }
}

// export default Vue.observable
