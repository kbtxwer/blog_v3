<template>
  <div class="computer">

    <div class="navigation_0">
      <div class="navigation"><img src="images/icons/computer.png" alt="">{{currentPath}}</div>
      <img data-v-9232cc6a="" src="images/icons/goback.svg" alt="" @click="goback" title="返回上级目录" class="gobackbtn">
      <div class="search">
        <input type="text" :placeholder="placeholder" v-model="keyWord" @keyup.enter="search(keyWord)" @keyup.esc="search('')"/>
        <button @click="search(keyWord)">搜索</button>
        <button @click="search('')">重置</button>
      </div>
    </div>




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
        <li v-for="file in file_data" @click="processFile(file)" @dragstart.prevent="windowopen(file)">
<!--          <img v-if="!file.type||file.type==='root'" src="images/icons/disk.png" alt="">-->
<!--          <img v-if="file.title.endsWith('html')||file.type==='link'" src="images/icons/html.png" alt=""/>-->
          <img :src="getIcon(file)" alt=""/>
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
  import Browser from '@/components/Browser'
  export default {
    name: 'Computer',
    data(){
      return {
        keyWord:'',
        root_file_data:[],
        neighbour_data:[],
        file_data_stack:[],
        file_data_saved:[],
        file_data:[],
        placeholder:'搜索当前目录',
        currentPath:''
      }
    },
    props: {

    },
    methods: {
      windowopen(file){
        //超星网盘的资源可以用直链下载
        if(file.puid&&file.id){window.open("http://pan-yz.chaoxing.com/download/downloadfile?fleid=" + file.id + "&puid=" + file.puid);return}
        if(file.url) {window.open(file.url);return}
      },
      setPlaceHolderWithCount(keyWord){
        if(this.file_data.length>0){
          if(!keyWord) keyWord = '搜索当前目录'
          this.placeholder = keyWord + "(共" +  this.file_data.length + "项）"
        }
      },
      search(keyWord){
        //搜索前先保存相关数据
        if(this.file_data_saved.length===0){
          this.file_data_saved = this.file_data
        }
        //清空搜索
        if(!keyWord){
          this.file_data = this.file_data_saved
          this.keyWord=''
          this.setPlaceHolderWithCount(keyWord)
          return
        }
        this.file_data = []
        this.file_data_saved.forEach((file,index)=>{
          if(file.title.indexOf(keyWord)!==-1) this.file_data.push(file)
        })
        this.setPlaceHolderWithCount(keyWord)
      },
      getSize(fileSize){
        let byte = fileSize
        let kb = byte/1024
        let mb = kb/1024
        let gb = mb/1024
        if(gb>1) return gb.toFixed(2) + ' GB'
        if(mb>1) return mb.toFixed(2) + ' MB'
        if(kb>1) return kb.toFixed(2) + ' KB'
        return byte + ' B'
      },
      getIcon(file){
        if(file.icon) return file.icon;//自定义图标优先级高于一切
        if(!file.type||file.type==='root') return 'images/icons/disk.png'
        if(file.title.endsWith('html')||file.type==='link') return 'images/icons/html.png'
        if(file.type==='folder') return 'images/icons/folder.svg'
        if(file.thumbnail) return file.thumbnail.replace('http://','https://') //超星网盘专属
        if(file.title.endsWith('mp4')||file.title.endsWith('mkv')) return 'images/icons/video.svg'
        if(file.type==='file') return 'images/icons/file.svg'
      },
      async getData(file){
        let combined_data = []
        //只有（根）目录能请求到数据，此外要是没有资源目录也无法打开
        if((file.type!=='root'&&file.type!=='folder')||!file.source) return combined_data;
        let source = file.source
        source.forEach((item)=>{
          //确保每一项采用的都是https协议
          item = item.replace('http://','https://')
          //如果字符串没有以http开头，则从我的博客中直接引用资源
          //console.log(item)
          //当前源下的文件的基址
          let file_baseUrl
          //简写源总是在 kbtxwer.gitee.io 的域下
          if(!item.startsWith('http')){
            // https://kbtxwer.gitee.io/blog/maogeshijue/json_utf8
            file_baseUrl = 'https://kbtxwer.gitee.io/' + item + '/' + file.inner_name + '/'
            item = file_baseUrl + 'json_utf8'
          }else {
            //以.json结尾的是资源列表，不需要处理
            if(!item.endsWith('.json')) {
              //完整源可以放在任何地方，但是要求名称对应
              // 格式： https://kbtxwer.github.io/blog3/
              if (!item.endsWith('/')) item += '/'
              // https://kbtxwer.github.io/blog3/tianyaDaily/
              file_baseUrl = item + file.inner_name + '/'
              item = file_baseUrl + 'json_utf8'
            }
          }
          let cur_data = axios.get(item)
          cur_data.then(e=>{
            //console.log(e)
            //说明获取到的是公众号文章索引
            if(e.data.article){
              e.data.article.forEach(a=>{
                a.type='file'
                a.title = a.name
                a.inner_name = a.date
                a.url=file_baseUrl + a.name
                combined_data.push(a)
              })
              //取得数据后，按发布日期降序排序
              combined_data.sort((d1,d2)=>{
                return d1.inner_name<d2.inner_name?1:-1
              })
            }
            //说明获取到的是超星网盘文件索引
            else if(e.data.list&&e.data.totalCount){
              e.data.list.forEach(f=>{
                f.type = f.isfile?'file':'folder'
                f.title = f.name
                if(f.isfile) f.url = 'https://pan-yz.chaoxing.com/preview/showpreview_' + f.id + '.html'
                //去掉末尾的list.json，保留斜杠
                else f.source = [item.substring(0,item.length - 'list.json'.length) + f.name + '/list.json']
                f.inner_name = f.isfile?('大小：' + this.getSize(f.filesize)):'文件夹'
                combined_data.push(f)
              })

              //取得数据后，按名称升序排序，注意数字
              combined_data.sort((d1,d2)=>{
                return  d1.title.localeCompare(d2.title,undefined,{numeric:true,sensitivity:'base'})
              })

            }

          })
        })
        //将当前页面数据“压栈”
        this.file_data_stack.unshift(this.file_data)
        this.file_data = combined_data
        //清空搜索缓存
        this.file_data_saved = []
      },
      async getReq(url){
        let res = await axios.get(url)
        return res
      },
      goback(){
        if(this.file_data_stack.length===0) return;
        //"回退"到上级目录
        this.currentPath = this.currentPath.substring(0,this.currentPath.lastIndexOf('/'))
        //"弹栈"
        this.file_data = this.file_data_stack[0]
        this.file_data_stack.splice(0,1)
      },
      enterRoot(){
        this.currentPath = '> 我的电脑'
        this.file_data_stack = []
        this.file_data = this.root_file_data
      },
      enterNeighbour(){
        this.currentPath = '> 友情链接'
        this.file_data_stack = []
        this.file_data = this.neighbour_data
      },
      processFile(file,drag){

        //文件夹或根目录应当直接进入
        if(file.type==='folder'||file.type==='root') {this.enterDir(file);return;}
        //如果要求在新标签页打开，或者资源是http形式，在新标签页打开
        if(file.newtab||(file.url&&!file.url.startsWith('https://'))) {window.open(file.url);return;}
        //如果存在资源链接，在内嵌页面打开
        if(file.url) {this.newFrame(file.url,file.title);return;}
        alert('没有合适的方式处理此资源')
      },
      enterDir(file){
        this.currentPath += ('/' + file.title)
        console.log(this.getData(file))
      },

      //打开新窗口
      newFrame(url,title){
        this.$layer.iframe({
          title: title,
          maxmin: true,
          shade:false,
          area: ['70%', '60%'],
          content: {
            content: Browser, //传递的组件对象
            parent: this, //当前的vue对象
            data: {
              'url':url
            } //props(向组件中传入的参数)
          }
        });
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
  .navigation_0{
    position: fixed;
    width: 100%;
    display: flex;
    border-top: 1px solid #b4b4b4;
    border-bottom: 1px solid #c3c3c3;
    background: white;
  }
  .navigation {
    display: flex;
    height: 20px;
    line-height: 20px;
    width: 80%;
    margin: 10px auto 10px 5px;
    font-size: 13px;
    color: #333;
    border-radius: 3px;
    border: 1px #a9a9a9 solid;
    cursor: text;
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
    margin-top: 43px;
    position: fixed;
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
    margin-left: 188px;
    margin-top: 35px;
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


  .search{
    width: 30%;
    margin: 10px 5px;
    display: flex;
  }
  .search input{
    float: left;
    flex: 6;
    height: 22px;
    outline: none;
    border: 1px solid #e0e0e0;
    box-sizing: border-box;
    padding-left: 10px;
  }
  .search button{
    float: right;
    flex: 1;
    height: 22px;
    border: 1px solid #a1afce;
    background-color: #e0e0e0;

    outline: none;
  }
  .search button:active{
    opacity: 0.5;
  }

  .gobackbtn {
    height: 20px;
    margin: 10px 0px 10px 0px;
    border: 1px solid #bababa;
    border-radius: 3px;
    cursor: pointer;
  }
</style>
