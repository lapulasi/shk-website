<template>
  <div class="app">
    <!--<v-header :headerIsShow="headerIsShow" v-on:goTop="goOnTop" v-on:navIndexEvent="goToPosition"></v-header>-->
    <div class="header-wrapper" v-show="headerIsShow">
      <div class="header">
        <div class="logo">
          <img src="./logo.png" width="132" height="56" alt="">
        </div>
        <ul class="nav">
          <li @click.prevent.stop="goToPosition(0)">首页</li>
          <li @click.prevent.stop="goToPosition(1)">平台介绍</li>
          <li @click.prevent.stop="goToPosition(2)">守望者们</li>
          <li @click.prevent.stop="goToPosition(3)">在线测试</li>
          <li @click.prevent.stop="goToPosition(4)">BSR学习中心</li>
          <li @click.prevent.stop="goToPosition(5)">资源站</li>
        </ul>
        <div class="userInfo">
          <span class="login">登录</span><span>注册</span>
        </div>
      </div>
    </div>
    <div class="header-icon" v-show="!headerIsShow"><span @click="goOnTop(6)" class="icon-menu-list"></span></div>
    <keep-alive><!--页面返回不刷新-->
      <router-view ref="home" v-on:scrollEvent="getScrollParam"></router-view>
    </keep-alive>

  </div>
</template>

<script>
  //  import header from 'components/header/header.vue'

  export default {
    name: 'App',
    data() {
      return {
        currentIndex: 0,
        headerIsShow: true
      }
    },
    methods: {
      goToPosition(index) {
//          this.currentIndex = index;
        console.log('app==' + index);
        let currentUrl = this.$route.path;
        if (currentUrl.indexOf('/BSR-center') >= 0) {
          this.$router.push('/home')
        } else if (currentUrl.indexOf('/home') >= 0) {
          this.$refs.home._scrollElement(index)
        }
      },
      getScrollParam(data) {
        this.headerIsShow = data;
      },
      goOnTop(data) {
//        console.log('goOnTop===' + data);
        this.headerIsShow = true;
      }
    }
  }
</script>

<style scopted lang="scss" rel="stylesheet/scss">
  .header-wrapper {
    position: relative;
    z-index: 10;
    width: 100%;
    height: 70px;
    background: url("./header_bg.jpg");
    /*background: rgba(22, 103, 180, 0.2);*/
    .header {
      width: 1248px;
      margin: 0 auto;
      .logo {
        width: 132px;
        height: 56px;
        margin-top: 7px;
        float: left;
      }
      .nav {
        float: left;
        margin-top: 42px;
        margin-left: 262px;
        li {
          float: left;
          margin-right: 46px;
          font-size: 16px;
          line-height: 22px;
          color: #1667b4;
          cursor: pointer;
          &:last-child {
            margin-right: 0;
          }
        }
      }
      .userInfo {
        float: right;
        margin-top: 40px;
        span {
          float: left;
          font-size: 16px;
          line-height: 22px;
          color: #1667b4;
          padding: 0 8px;
          cursor: pointer;
          &.login {
            border-right: 1px solid #1667b4;
          }
          &.icon-menu-list {
            margin-left: 22px;
            line-height: 24px;
            font-size: 24px;
            color: #1667b4;
          }
        }
      }
    }
  }

  .header-icon {
    position: absolute;
    top: 0;
    width: 1248px;
    height: 70px;
    left: 50%;
    margin-left: -624px;
    text-align: right;
    z-index: 10;
    .icon-menu-list {
      float: right;
      line-height: 24px;
      font-size: 24px;
      color: #1667b4;
      margin-top: 40px;
      cursor: pointer;
    }
  }
</style>
