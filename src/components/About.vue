<template>
  <div class="about">
    <div class="content">
      <div class="iconfont logo" onclick="window.open('https://search.jd.com/Search?keyword=%E8%8B%B9%E6%9E%9C')" title="给你来点黑色幽默">&#xe60b;</div>
      <ul class="list-box">
        <li v-for="(item, index) in list"><a :href="item.url" target="_blank">{{item.title}}</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'About',
    props: {

    },
    data() {
      return {
        list: [{
            url: 'https://github.com/lw1995/Vue-Mac-WebDesktop',
            title: '这是一个前端小白的开源项目,基于vue全家桶'
          }, {
            url: 'https://gitee.com/kbtxwer/mac-web-desktop',
            title: '我在其基础上加以修改，制成了自己的博客首页，源码同样开放'
          },{
            url: 'https://www.bilibili.com/video/BV1sA411V7iA',
            title: '这是保存微信文章的演示视频，如果你希望了解如何保存，可以在评论区和我交流'
          }
        ]
      }
    },
    methods: {}
  }
</script>

<style scoped>
  .about {
    width: 100%;
    min-height: 100%;
    background: #fff;
  }


  .content {
    height: 100%;
    border: 1px solid #B4B4B4;
    box-sizing: border-box;
  }

  .logo {
    padding: 20px 0;
    font-size: 150px;
    text-align: center;
    cursor: pointer;
  }

  .list-box {
    padding-top: 20px;
  }

  .list-box li {
    padding: 10px 0;
    margin: 10px 100px 0 100px;
    text-align: center;
    box-sizing: border-box;
    background-image: linear-gradient(160deg, #00ffd5 20%, #008cff 80%);
    border-radius: 20px;
    cursor: pointer;
  }

  .list-box li a {
    color: #fff;
  }
</style>
