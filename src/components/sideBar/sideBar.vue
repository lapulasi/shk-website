<template>
  <div class="side-bar">
    <div class="side-panel ai">
      <span class="icon"></span>
      <p class="text">Ai<br>问诊</p>
      <div class="qr-code">
        <img src="./ai-code.png" alt="">
        <p>扫描二维码立即在线咨询</p>
      </div>
    </div>
    <div class="side-panel qq">
      <span class="icon"></span>
      <p class="text">家长<br>交流群</p>
      <div class="qr-code">
        <img src="./ai-code.png" alt="">
        <p>扫描二维码一起交流吧</p>
      </div>
    </div>
    <div class="side-panel wx">
      <span class="icon"></span>
      <p class="text">微信<br>公众号</p>
      <div class="qr-code">
        <img src="./ai-code.png" alt="">
        <p>扫描二维码关注我们</p>
      </div>
    </div>
    <div class="top" @click="goTop">
      <span class="icon"></span>
    </div>
  </div>
</template>

<script>
  export default {
      methods: {
        goTop() {
          this.$emit('goTop', 0)
        }
      }
  }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
  .side-bar {
    width: 80px;
    height: 340px;
    position: fixed;
    right: 10px;
    top: 50%;
    margin-top: -170px;
    z-index: 40;
  }
  .top{
    position: absolute;
    bottom: 1px;
    width: 80px;
    height: 84px;
    border-radius: 10px;
    background: #4586c4;
    cursor: pointer;
    .icon{
      display: inline-block;
      width: 26px;
      height: 34px;
      margin: 25px 27px;
      background: url("./top.png");
    }
  }
  .side-panel {
    position: relative;
    width: 80px;
    height: 84px;
    background-color: rgba(22, 103, 180, 0.4);
    border-radius: 10px;
    margin-bottom: 1px;
    text-align: center;
    line-height: 22px;
    font-size: 18px;
    color: #fff;
    float: left;
    .text {
      display: none;
      margin-top: 20px;
    }
    .qr-code {
      display: none;
      position: absolute;
      left: -236px;
      top: -93px;
      width: 236px;
      height: 248px;
      background: url("./group.png") center no-repeat;
      img{
        margin: 27px 34px 0 27px;
      }
      p{
        line-height: 22px;
        font-size: 15px;
        margin-top: 8px;
        text-align: center;
        color: #000;
      }
    }
    &.ai{
      .icon{
        display: inline-block;
        width: 40px;
        height: 36px;
        margin: 24px 20px;
        background: url("./Ai.png");
      }
    }
    &.wx{
      .icon{
        display: inline-block;
        width: 43px;
        height: 35px;
        margin: 24px 19px;
        background: url("./wx-chart.png");
      }
    }
    &.qq{
      .icon{
        display: inline-block;
        width: 47px;
        height: 37px;
        margin: 24px 16px;
        background: url("./qq.png");
      }
    }
    &:hover{
      background: #4586c4;
      .text,.qr-code{
        display: block;
      }
      .icon{
        display: none;
      }
    }
  }
</style>
