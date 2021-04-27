<template>
  <div class="computer">
    <div class="navigation"><img src="images/icons/computer.png" alt="">{{currentPath}}</div>
    <div class="content">
      <ul class="left-box">
        <li class="iconfont" @click="enterRoot">&#xe636;&nbsp;&nbsp;主目录</li>
        <li class="iconfont" onclick="window.open('https://bilibili.com')">&#xe600;&nbsp;&nbsp;视频</li>
        <li class="iconfont" onclick="window.open('https://www.kuwo.cn/')">&#xe680;&nbsp;&nbsp;音乐</li>
        <li class="iconfont" onclick="window.open('https://bing.ioliu.cn/')">&#xe665;&nbsp;&nbsp;图片</li>
        <li class="iconfont" onclick="window.open('https://docs.qq.com')">&#xe61f;&nbsp;&nbsp;文档</li>
        <li class="iconfont" onclick="window.open('https://npupt.com')" title="仅限西工大学生访问">&#xe6ad;&nbsp;&nbsp;下载</li>
        <li class="iconfont" onclick="window.open('https://pan.baidu.com/disk/main#/recyclebin/list')">&#xe61c;&nbsp;&nbsp;回收站</li>
        <li class="iconfont" @click="enterRoot" style="border-top: 1px solid #B4B4B4;">&#xe622;&nbsp;&nbsp;我的电脑</li>
        <li class="iconfont" onclick="window.open('https://pan-yz.chaoxing.com')">&#xe743;&nbsp;&nbsp;云盘</li>
        <li class="iconfont" @click="enterNeighbour" style="border-top: 1px solid #B4B4B4;">&#xe638;&nbsp;&nbsp;网络邻居(友链)</li>
      </ul>

      <ul class="right-box">
        <li v-for="file in file_data" @click="processFile(file)">
          <img v-if="!file.type||file.type==='root'" src="images/icons/disk.png" alt="">
          <img v-if="file.title.endsWith('html')||file.type==='link'" src="images/icons/html.png" alt=""/>
          <div :title="file.title + '\n' + file.inner_name">
            <span class="title">{{file.title}}</span>
            <span v-if="!file.type||file.type==='root'" class="progress-bar"></span>
            <span class="xtitle">{{file.inner_name}}</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'Computer',
    data(){
      return {
        root_file_data:[],
        neighbour_data:[],
        file_data:[],
        currentPath:''
      }
    },
    props: {

    },
    methods: {
      async getData(file){
        let combined_data = []
        //只有（根）目录能请求到数据，此外要是没有资源目录也无法打开
        if((file.type!=='root'&&file.type!=='floder')||!file.source) return combined_data;
        let source = file.source
        source.forEach((item)=>{
          //如果字符串没有以http开头，则从我的博客中直接引用资源
          //console.log(item)
          let url
          if(!item.startsWith('http')){
            // https://kbtxwer.gitee.io/blog/maogeshijue/json_utf8
            url = 'https://kbtxwer.gitee.io/' + item + '/' + file.inner_name + '/'
            item = url + 'json_utf8'
          }
          let cur_data = this.getReq(item)
          cur_data.then(e=>{
            //console.log(e)
            //文章类型
            if(e.data.article){
              e.data.article.forEach(a=>{
                a.type='file'
                a.title = a.name
                a.inner_name = a.date
                a.url=url + a.name
                combined_data.push(a)
              })
            }
          })
        })
        this.file_data = combined_data
        //return combined_data;
      },
      async getReq(url){
        let res = await axios.get(url)
        return res
      },
      enterRoot(){
        this.currentPath = '> 我的电脑'
        this.file_data = this.root_file_data
      },
      enterNeighbour(){
        this.currentPath = '> 友情链接',
          this.file_data = this.neighbour_data
      },
      processFile(file){
        if(file.type==='floder'||file.type==='root'){
          this.enterDir(file)
          return
        }
        if(file.url) window.open(file.url)
        else alert('没有合适的方式处理此资源')
      },
      enterDir(file){
        this.currentPath += ('/' + file.title)
        console.log(this.getData(file))
      }
    },
    mounted () {
      axios.get('data/root_file_data.json').then(e=>{
        this.root_file_data = e.data
        this.enterRoot()
      })
      axios.get('data/neighbour_data.json').then(e=>{
        this.neighbour_data = e.data
      })
    }
  }
</script>

<style scoped>
  .computer {
    width: 100%;
    min-height: 100%;
    background: #fff;
  }

  .navigation {
    display: flex;
    height: 20px;
    line-height: 20px;
    width: 98%;
    margin: 10px auto;
    font-size: 13px;
    color: #333;
    border-radius: 3px;
    border: 1px #a9a9a9 solid;
    cursor: pointer;
  }

  .navigation img {
    height: 20px;
    margin-left: 5px;
  }

  .content {
    display: flex;
    height: calc(100% - 30px);
    border-top: 1px solid #B4B4B4;
    box-sizing: border-box;
  }

  .left-box {
    width: 188px;
    border-right: 1px solid #B4B4B4;
    text-align: left;
    box-sizing: border-box;
  }

  .left-box li {
    height: 30px;
    line-height: 30px;
    padding-left: 20px;
    font-size: 17px;
    text-align: left;
    color: #333;
    cursor: pointer;
  }

  .left-box li:hover {
    color: #2DA7F8;
    background-color: #D1E8FA;
    border-right: 3px solid #2DA7F8;
  }

  .right-box {
    display: flex;
    flex: 1;
    padding-top: 20px;
    flex-wrap: wrap;
    align-content: flex-start;
  }

  .right-box li {
    display: flex;
    height: 75px;
    width: 25%;
    overflow: hidden;
    padding: 10px 20px;
    margin-left: 25px;
    margin-top: 10px;
    text-align: center;
    box-sizing: border-box;
    border-radius: 5px;
    cursor: pointer;
  }

  .right-box li:hover {
    background: #dedede;
  }

  .right-box li img {
    display: inline-block;
    margin-top: 8px;
    margin-right: 10px;
    /*width: 45px;*/
    height: 45px;
  }

  .right-box li span {
    display: block;
    line-height: 20px;
    font-size: 14px;
    text-align: left;
  }

  .right-box li .title {
    color: #3e3e3e;
    font-weight: bold;
  }

  .right-box li .xtitle {
    color: #717171;
  }

  .progress-bar {
    position: relative;
    background-color: #DEDEDE;
    width: 140px;
    height: 16px;
    border-radius: 3px;
    border: 1px #a9a9a9 solid;
  }

  .progress-bar:before {
    content: url(/images/bar.png);
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 50px;
    overflow: hidden;
    box-sizing: border-box;
  }
</style>
