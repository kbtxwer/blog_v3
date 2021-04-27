<template>
  <div class="wallpaper">
    <div class="content">
      <ul class="list-box">
        <li v-for="(image,index) in imgList" :data-id="index" @click="choice(image)">
          <img :src="image">
        </li>
      </ul>
      <div class="search">
        <input type="text" placeholder="请输入网络图片URL" title="以https开头，可能会受到跨域策略限制无法生效" v-model="imgSrc"/>
        <button @click="confirm">确定</button>
      </div>
<!--      <div class="btn-confirm" @click="confirm">确定</div>-->
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Wallpaper',
    props: {
      layerid: {
        type: String,
        default: ''
      },
    },
    data() {
      return {
        imgList:[],
        imgSrc: ''
      }
    },
    mounted () {
      let init_img_list = ["images/wallpapers/bg.jpg","images/wallpapers/bg2.jpg","images/wallpapers/bg3.jpg","images/wallpapers/bg4.jpg","images/wallpapers/bg5.jpg","images/wallpapers/bg6.jpg"]
      let keyName = 'imgList'
      let img_list = JSON.parse(localStorage.getItem(keyName))
      if(!img_list) {
        localStorage.setItem(keyName, JSON.stringify(init_img_list))
        img_list = init_img_list
      }
      this.imgList = img_list
    },
    methods: {
      choice(image) {
        localStorage.setItem('bg',image)
        this.$parent.setBg()
      },
      confirm() {
        console.log(this.imgSrc)
        if (this.imgSrc) {
          localStorage.setItem('bg', this.imgSrc)
          this.$parent.setBg()
          this.imgList.push(this.imgSrc)
          localStorage.setItem('imgList', JSON.stringify(this.imgList))
        }
      }
    }
  }
</script>

<style scoped>
  .wallpaper {
    width: 100%;
    min-height: 100%;
    background: #fff;
  }

  .content {
    /*height: 100%;*/
    box-sizing: border-box;
  }

  h1 {
    margin-top: 15px;
  }

  .list-box {
    display: flex;
    flex-wrap: wrap;
    padding: 15px 49px;
  }

  .list-box li {
    width: 300px;
    cursor: pointer;
    box-sizing: border-box;
  }

  .active {
    border: #E84840 2px solid !important;
  }

  .list-box img {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    border: transparent 2px solid;
  }

  .list-box img:hover {
    border: #E84840 2px solid;
  }

  /*.btn-confirm {*/
  /*  width: 60px;*/
  /*  line-height: 40px;*/
  /*  margin: 20px auto 20px;*/
  /*  text-align: center;*/
  /*  background: #E84840;*/
  /*  color: #FFFFFF;*/
  /*  border-radius: 25px;*/
  /*  cursor: pointer;*/
  /*  transition: width 0.5s;*/
  /*}*/

  /*.btn-confirm:active {*/
  /*  opacity: 0.5;*/
  /*}*/

  /*.btn-confirm:hover {*/
  /*  width: 100px;*/
  /*}*/


  .search{
    width: 30%;
    margin: 0 auto;
    display: flex;
  }
  .search input{
    float: left;
    flex: 4;
    height: 30px;
    outline: none;
    border: 1px solid red;
    box-sizing: border-box;
    padding-left: 10px;
  }
  .search button{
    float: right;
    flex: 1;
    height: 30px;
    background-color: red;
    color: white;
    border-style: none;
    outline: none;
  }
  .search button:active{
    opacity: 0.5;
  }
</style>
