<template>
  <div class="tools">
    <div class="content">

      <div class="search">
        <input type="text" placeholder="搜索工具" v-model="keyWord"/>
        <button @click="search(keyWord)">搜索</button>
        <button @click="search('')">重置</button>
      </div>

      <ul class="list-box">
        <li v-for="(tool,index) in tools" :data-id="index" style="cursor:pointer;" @click="openTool(tool)">
          <img :src="tool.icon" width="80px">
          <p>{{tool.name}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import Browser from '@/components/Browser'
  export default {
    name: 'Tools',
    data() {
      return {
        init_tools:[],
        tools:[],
        keyWord:''
      }
    },
    mounted () {
      axios.get('data/tools_data.json').then(e=>{
        this.init_tools = e.data
        this.tools = this.init_tools
      })
    },
    methods: {
      search(keyWord){
        if(!keyWord) {
          this.tools = this.init_tools
          this.keyWord = ''
          return
        }
        this.tools = []
        this.init_tools.forEach((tool,index)=>{
          if(tool.name.indexOf(keyWord)!==-1){
            this.tools.push(tool)
          }
        })
      },
      //打开新窗口
      newFrame(url,title,who){
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
      },
      openTool(tool){
        if(tool.newtab){
          window.open(tool.url,'_blank')
          return;
        }
        this.newFrame(tool.url,tool.name)
      }
    }
  }
</script>

<style scoped>
  .tools {
    width: 100%;
    min-height: 100%;
    background: #fff;
  }

  .content {
    height: 100%;
    border: 1px solid #B4B4B4;
    box-sizing: border-box;
  }

  .list-box {
    display: flex;
    padding-top: 20px;
    flex-wrap: wrap;
  }

  .list-box :hover {
    background: #dedede;
  }

  .list-box li {
    width: 100px;
    padding: 10px 0;
    margin-left: 38px;
    margin-top: 10px;
    text-align: center;
    box-sizing: border-box;
  }

  .list-box li .bt {
    display: inline-block;
    width: 80px;
    line-height: 80px;
    line-height: 80px;
    font-size: 48px;
    text-align: center;
    font-weight: 700;
    color: #fff;
    background-image: linear-gradient(160deg, #166FEF 20%, #14B1F8 80%);
    border-radius: 50%;
    border: 5px solid #E9E9E9;
  }

  .list-box li .bt:hover {
    background-color: #21D4FD;
    background-image: linear-gradient(19deg, #21D4FD 0%, #B721FF 100%);
  }

  .list-box li .title {
    line-height: 40px;
    color: #333;
  }


  .search{
    width: 30%;
    margin: 0 0 0 auto;
    display: flex;
  }
  .search input{
    float: left;
    flex: 4;
    height: 30px;
    outline: none;
    border: 1px solid #e0e0e0;
    box-sizing: border-box;
    padding-left: 10px;
  }
  .search button{
    float: right;
    flex: 1;
    height: 30px;
    border: 1px solid #a1afce;
    background-color: #e0e0e0;

    outline: none;
  }
  .search button:active{
    opacity: 0.5;
  }
</style>
