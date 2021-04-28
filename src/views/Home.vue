<template>
  <div class="home">
    <div class="header">
      <ul class="header-left">
        <li class="iconfont"><a href="https://www.apple.com/cn/" target="_blank" title="苹果官网">&#xe60b;</a></li>
        <li><a href="https://github.com/lw1995/Vue-Mac-WebDesktop" target="_blank" title="原版">GitHub</a></li>
        <li><a href="https://gitee.com/kbtxwer/mac-web-desktop" target="_blank" title="改版">Gitee</a></li>
        <li @click="newFrame(null,'我的电脑','Computer')">文件</li>
        <li @click="newFrame(null,'壁纸','wallpaper')">壁纸</li>
        <li @click="newFrame(null,'关于','about')">关于</li>
      </ul>
      <ul class="header-right">
        <li class="iconfont">&#xe6c0;</li>
        <li class="iconfont">&#xe688;</li>
        <li class="iconfont" @click="newFrame('http://music.vaiwan.com/','搜索音乐')">&#xe6ca;</li>
        <li class="iconfont">&#xe6a7;</li>
        <li class="iconfont">&#xe6cb;</li>
        <li class="iconfont">&#xe6b8;</li>
        <li class="iconfont" @click="weather">{{time}}</li>
      </ul>
    </div>
    <div class="content-hone" :style="{backgroundImage: 'url(' + bgSrc + ')' }" @click="weatherHide">
      <ul class="app-list">
        <li class="list-item" @click="newFrame(null,'我的电脑','Computer')"><img src="images/icons/computer.png" alt=""><span>我的电脑</span></li>
        <li class="list-item" onclick="window.open('https://pan.baidu.com/disk/main#/recyclebin/list')"><img src="images/icons/TrashIcon.png" alt=""><span>回收站</span></li>
        <li class="list-item" @click="newFrame(null,'工具箱','tools')"><img src="images/tool.png" alt=""><span>工具箱</span></li>
      </ul>
    </div>
    <div id="container" @click="weatherHide" title="单击直接用iframe打开页面，拖拽可以在新标签页打开">
      <div id="dock">
        <ul>
          <li v-for="(dock) in dock_data" @click="newFrame(dock.url,dock.title,dock.who)" @dragstart.prevent="newWindow(dock.url)">
            <span>{{dock.title}}</span>
            <a href="#"><img :src="dock.icon"></a>
          </li>
        </ul>
      </div>
    </div>

    <transition name="slide-fade">
      <div class="weather" v-show="weatherShow">
        <iframe src="https://widget-page.heweather.net/h5/index.html?bg=3&md=036&lc=accu&key=09ce9044126b48f5b79c6d8f198e832a"></iframe>
      </div>
    </transition>
  </div>
</template>

<script>
  // @ is an alias to /src
  import Browser from '@/components/Browser.vue'
  import Wallpaper from '@/components/Wallpaper.vue'
  import Tools from '@/components/Tools.vue'
  import Computer from '@/components/Computer.vue'
  import About from '@/components/About.vue'
  import axios from 'axios'

  export default {
    name: 'home',
    components: {
      Wallpaper,
      Browser,
      Tools,
      Computer,
      About
    },
    data() {
      return {
        time: '',
        setInter: null,
        weatherShow: false,
        bgSrc: 'images/wallpapers/bg.jpg',
        dock_data:[]
      }
    },

    created() {

      let ua = navigator.userAgent.toLowerCase();
      //alert(ua)
      if(ua.indexOf('android')!==-1||ua.indexOf('Adr') > -1||(!!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/))){
        let c = confirm('当前可能是手机访问，建议跳转到简易版本')
        if(c){
          window.location = 'https://kbtxwer.gitee.io/articles'
        }
      }
      clearInterval(this.setInter)
      this.setInter = setInterval(() => {
        this.newDate()
      }, 1000)
      axios.get("data/dock_data.json").then(e=>{
        this.dock_data = e.data
      })
      this.setBg()
    },

    methods: {
      newWindow(url){
        window.open(url)
        return false
      },
      getComponent(who){
        if(!who) return Browser;
        who = who.toLowerCase();
        if(who==='computer') return Computer;
        if(who==='about') return About;
        if(who==='wallpaper') return Wallpaper;
        if(who==='tools') return Tools;
      },
      //打开新窗口
      newFrame(url,title,who){
        this.$layer.iframe({
          title: title,
          maxmin: true,
          shade:false,
          area: ['70%', '60%'],
          content: {
            content: this.getComponent(who), //传递的组件对象
            parent: this, //当前的vue对象
            data: {
              'url':url
            } //props(向组件中传入的参数)
          }
        });
      },
      /* 打开壁纸 */
      wallpaper() {
        this.$layer.iframe({
          title: '壁纸中心',
          maxmin: true,
          area: ['70%', '60%'],
          content: {
            content: Wallpaper, //传递的组件对象
            parent: this, //当前的vue对象
            data: {} //props
          }
        });
      },
      weather() {
        if (this.weatherShow) {
          this.weatherShow = false
        } else {
          this.weatherShow = true
        }
      },
      weatherHide() {
        this.weatherShow = false
      },
      newDate() {
        let now = new Date()
        let year = now.getFullYear() // 得到年份
        let month = now.getMonth() // 得到月份
        let date = now.getDate() // 得到日期
        let day = now.getDay() // 得到周几
        let hour = now.getHours() // 得到小时
        let minu = now.getMinutes() // 得到分钟
        let sec = now.getSeconds() // 得到秒
        let MS = now.getMilliseconds() // 获取毫秒

        month = month + 1
        if (month < 10) month = '0' + month
        if (date < 10) date = '0' + date
        if (hour < 10) hour = '0' + hour
        if (minu < 10) minu = '0' + minu
        if (sec < 10) sec = '0' + sec
        if (MS < 100) MS = '0' + MS
        const arrweek = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
        let week = arrweek[day]

        this.time = hour + ':' + minu + ':' + sec + ' ' + week
      },
      setBg() {
        if (localStorage.getItem('bg')) {
          this.bgSrc = localStorage.getItem('bg')
        } else {
          this.bgSrc = 'images/wallpapers/bg2.jpg'
        }
      }
    }
  }
</script>

<style>
  @import url("../assets/css/common.css");

  .header {
    position: relative;
    display: flex;
    height: 30px;
    line-height: 30px;
    background: #FBFCFB;
    box-shadow: 0 1px 8px #888888;
    color: #333;
    z-index: 5;
  }

  .header-left,
  .header-right {
    flex: 1;
  }

  .header-left {
    text-align: left;
  }

  .header-right {
    text-align: right;
  }

  .header .header-left li {
    display: inline-block;
    margin: 0 10px;
    cursor: pointer;
  }

  .header .header-left li:first-child {
    margin-left: 20px;
  }

  .header .header-right li {
    display: inline-block;
    margin: 0 5px;
    cursor: pointer;
  }

  .header .header-right li:last-child {
    margin-right: 10px;
  }

  .content-hone {
    height: calc(100vh - 30px);
    background: url(/images/wallpapers/bg.jpg) no-repeat no-repeat center;
    background-size: cover;
    overflow: hidden;
  }

  .app-list {
    display: flex;
    height: 80vh;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: flex-start;
    padding-left: 20px;
  }

  .app-list .list-item {
    width: 60px;
    margin-top: 20px;
    margin-left: 25px;
    cursor: pointer;
  }

  .app-list .list-item img {
    width: 100%;
  }

  .app-list .list-item span {
    display: block;
    line-height: 21px;
    text-align: center;
    background: rgba(0, 0, 0, 0.2);
    border-radius: 18px;
    margin-top: 8px;
    font-size: 12px;
    color: #FFFFFF;
  }

  #container {
    position: fixed;
    bottom: 0;
    left: calc(50% - 400px);
    width: 800px;
    padding: 16px 0;
    background: rgba(255, 255, 255, 0.5);
    border-radius: 10px 10px 0 0;
    text-align: center;
  }

  #container #dock {
    width: 100%;
    text-align: center;
    margin: 0 auto;
  }

  #container li {
    list-style-type: none;
    display: inline-block;
    position: relative;
    margin-left: 10px;
  }

  #container li img {
    width: 50px;
    height: 50px;
    -webkit-box-reflect: below 2px -webkit-gradient(linear, left top, left bottom, from(transparent), color-stop(0.7, transparent), to(rgba(255, 255, 255, .5)));
    -webkit-transition: all 0.3s;
    -webkit-transform-origin: 40% 70%;
  }

  #container li:hover img {
    -webkit-transform: scale(2);
    margin: 0 2em;
  }

  #container li:hover+li img,
  #container li.prev img {
    -webkit-transform: scale(1.5);
    margin: 0 1.5em;
  }

  #container li span {
    display: none;
    position: absolute;
    bottom: 100px;
    left: 0;
    width: calc(100% - 10px);
    margin-left: 10px;
    background-color: #222;
    padding: 4px 0;
    border-radius: 7px;
  }

  #container li:hover span {
    display: block;
    color: #fff;
  }

  .weather {
    position: fixed;
    top: 30px;
    right: 0;
  }

  .weather iframe {
    height: calc(100vh - 30px);
    border: none;
  }

  .vl-notify-content {
    height: 100% !important;
  }
</style>
