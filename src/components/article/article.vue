<template>
  <div class="videoCourse">
    <ul class="classify">
      <li>
        <span>按时间</span><i class="icon-paixu"></i>
      </li>
      <li>
        <span>按热度</span><i class="icon-paixu"></i>
      </li>
      <li class="active">
        <span>按内容</span></i>
      </li>
    </ul>
    <div class="search">
      <input type="text"><i class="icon-sousuo"></i>
    </div>
    <ul class="features">
      <li class="active">关键词1</li>
      <li>关键词2</li>
      <li>关键词3</li>
      <li>关键词4</li>
      <li>关键词5</li>
      <li>关键词6</li>
    </ul>
    <div class="course-list">
      <div class="course-item">
        <span class="label">标签</span>
        <div class="poster"></div>
        <div class="content">
          <h2 class="name">文章标题文章标题文章标题文章标题文章标题文章标</h2>
          <p class="info">文章概要文章概要文章概要文章概要文章概要文章概要文章概要</p>
          <p class="time">11-11</p>
        </div>
      </div>
      <div class="course-item">
        <span class="label">标签</span>
        <div class="poster"></div>
        <div class="content">
          <h2 class="name">文章标题文章标题文章标题文章标题文章标题文章标</h2>
          <p class="info">文章概要文章概要文章概要文章概要文章概要文章概要文章概要</p>
          <p class="time">11-11</p>
        </div>
      </div>
      <div class="course-item">
        <span class="label">标签</span>
        <div class="poster"></div>
        <div class="content">
          <h2 class="name">文章标题文章标题文章标题文章标题文章标题文章标</h2>
          <p class="info">文章概要文章概要文章概要文章概要文章概要文章概要文章概要</p>
          <p class="time">11-11</p>
        </div>
      </div>
      <div class="course-item">
        <span class="label">标签</span>
        <div class="poster"></div>
        <div class="content">
          <h2 class="name">文章标题文章标题文章标题文章标题文章标题文章标</h2>
          <p class="info">文章概要文章概要文章概要文章概要文章概要文章概要文章概要</p>
          <p class="time">11-11</p>
        </div>
      </div>
      <div class="course-item">
        <span class="label">标签</span>
        <div class="poster"></div>
        <div class="content">
          <h2 class="name">文章标题文章标题文章标题文章标题文章标题文章标</h2>
          <p class="info">文章概要文章概要文章概要文章概要文章概要文章概要文章概要</p>
          <p class="time">11-11</p>
        </div>
      </div>
      <div class="course-item">
        <span class="label">标签</span>
        <div class="poster"></div>
        <div class="content">
          <h2 class="name">文章标题文章标题文章标题文章标题文章标题文章标</h2>
          <p class="info">文章概要文章概要文章概要文章概要文章概要文章概要文章概要</p>
          <p class="time">11-11</p>
        </div>
      </div>
      <div class="course-item">
        <span class="label">标签</span>
        <div class="poster"></div>
        <div class="content">
          <h2 class="name">文章标题文章标题文章标题文章标题文章标题文章标</h2>
          <p class="info">文章概要文章概要文章概要文章概要文章概要文章概要文章概要</p>
          <p class="time">11-11</p>
        </div>
      </div>
      <div class="course-item">
        <span class="label">标签</span>
        <div class="poster"></div>
        <div class="content">
          <h2 class="name">文章标题文章标题文章标题文章标题文章标题文章标</h2>
          <p class="info">文章概要文章概要文章概要文章概要文章概要文章概要文章概要</p>
          <p class="time">11-11</p>
        </div>
      </div>
      <div class="course-item">
        <span class="label">标签</span>
        <div class="poster"></div>
        <div class="content">
          <h2 class="name">文章标题文章标题文章标题文章标题文章标题文章标</h2>
          <p class="info">文章概要文章概要文章概要文章概要文章概要文章概要文章概要</p>
          <p class="time">11-11</p>
        </div>
      </div>
    </div>
    <div class="btn">
      <button class="viewMore">更多预览</button>
    </div>

  </div>
</template>

<script>
  export default {}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
  .videoCourse {
    width: 960px;
    position: relative;
    overflow: hidden;
    .classify {
      margin-top: 40px;
      overflow: hidden;
      li {
        float: left;
        line-height: 22px;
        font-size: 16px;
        padding: 0 13px;
        color: #808080;
        cursor: pointer;
        border-right: 1px solid #bfbfbf;
        &:first-child {
          padding-left: 0;
        }
        &:last-child {
          padding-right: 0;
          border: none;
        }
        &.active {
          color: #2056a6;
        }
      }
    }
    .search {
      position: absolute;
      right: 7px;
      top: 39px;
      input {
        width: 82px;
        height: 21px;
        border-radius: 11px;
        border: solid 1px #7f7f7f;
        box-sizing: border-box;
        text-align: center;
      }
      .icon-sousuo {
        font-size: 16px;
        margin-left: 7px;
        color: #7f7f7f;
        cursor: pointer;
      }
    }
    .features {
      margin-top: 15px;
      overflow: hidden;
      li {
        float: left;
        width: 75px;
        height: 25px;
        line-height: 25px;
        border-radius: 13px;
        border: solid 1px #7f7f7f;
        text-align: center;
        font-size: 14px;
        color: #808080;
        margin-right: 17px;
        cursor: pointer;
        &.active {
          color: #2056a6;
          border-color: #2050a6;
        }
      }
    }
    .course-list {
      overflow: hidden;
      .course-item {
        width: 240px;
        height: 344px;
        float: left;
        border-radius: 15px;
        margin-right: 120px;
        margin-top: 22px;
        font-size: 14px;
        line-height: 22px;
        .label {
          display: inline-block;
          text-align: center;
          width: 70px;
          height: 21px;
          color: #2056a6;
          background-color: #f2f8ff;
        }
        .poster {
          width: 240px;
          height: 167px;
          margin-top: 8px;
          border-radius: 15px;
          background-color: #2056a6;
        }
        .content {
          /*padding: 0 24px;*/
          text-align: left;
          .name {
            height: 44px;
            font-size: 18px;
            margin-top: 15px;
            color: #2056a6;
          }
          .info {
            margin: 8px auto;
          }
          .time {
            color: #666;
          }
        }
        &:nth-child(3n) {
          margin-right: 0;
        }
      }
    }
    .btn {
      width: 211px;
      height: 44px;
      margin: 53px auto 89px;
      .viewMore {
        width: 211px;
        height: 44px;
        line-height: 44px;
        background-color: #2056a6;
        border-radius: 22px;
        font-size: 20px;
        color: #fff;
        text-align: center;
      }
    }

  }
</style>
