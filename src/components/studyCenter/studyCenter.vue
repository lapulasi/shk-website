<template>
  <div class="studyCenter">
    <div class="menuList">
      <router-link to="/BSR-center/video">
        <div class="menu-item">
          <i class="icon icon-shipin"></i><span class="text">视频课程</span>
        </div>
      </router-link>
      <router-link to="/BSR-center/teaching">
        <div class="menu-item">
          <i class="icon icon-shuben"></i><span class="text">书籍教具</span>
        </div>
      </router-link>
      <router-link to="/BSR-center/article">
        <div class="menu-item">
          <i class="icon icon-wenzhang"></i><span class="text">文章干货</span>
        </div>
      </router-link>
      <router-link to="/BSR-center/broadcast">
        <div class="menu-item">
          <i class="icon icon-shipinzhibo"></i><span class="text">教授直播</span>
        </div>
      </router-link>
    </div>
    <div class="content-wrapper">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
  .studyCenter {
    width: 1200px;
    margin: 20px auto 90px;
    .menuList {
      width: 190px;
      padding: 30px 0;
      float: left;
      background-color: #f2f8ff;
      >a{
        display: inline-block;
        width: 180px;
        height: 48px;
        border-left: 10px solid #f2f8ff;
        &.active {
          border-left: 10px solid #2056a6;
          background-color: #ffffff;
          box-shadow: 0px 0px 13px 0px rgba(22, 103, 180, 0.18);
          .icon, .text {
            color: #2056a6!important;
          }
        }
      }
      .menu-item {
        width: 180px;
        height: 48px;
        text-align: center;
        .icon {
          font-size: 18px;
          line-height: 48px;
          color: #4c4c4c;
          margin-right: 10px;
        }
        .text {
          line-height: 48px;
          vertical-align: top;
        }
        .icon-shipin {
          font-size: 22px;
        }
      }
    }
    .content-wrapper{
      width: 960px;
      float: right;
      margin-left: -960px;
    }
  }
</style>
