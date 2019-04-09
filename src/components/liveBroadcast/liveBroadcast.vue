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
      <li class="active">内容1</li>
      <li>内容2</li>
      <li>内容3</li>
      <li>内容4</li>
      <li>内容5</li>
      <li>内容6</li>
    </ul>
    <div class="course-list">
      <div class="course-item">
        <div class="poster"></div>
        <div class="content">
          <div class="broadcast-info">
            <h2 class="name">直播主题</h2>
            <p class="teacher">直播人</p>
            <p class="info">简介</p>
          </div>
          <ul class="extra">
            <li>
              <i class="icon-pinglun"></i><span>999</span>
            </li>
            <li>
              <i class="icon-qiuguanzhu"></i><span>999</span>
            </li>
            <li>
              <i class="icon-fenxiang"></i><span>999</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="course-item">
        <div class="poster"></div>
        <div class="content">
          <div class="broadcast-info">
            <h2 class="name">直播主题</h2>
            <p class="teacher">直播人</p>
            <p class="info">简介</p>
          </div>
          <ul class="extra">
            <li>
              <i class="icon-pinglun"></i><span>999</span>
            </li>
            <li>
              <i class="icon-qiuguanzhu"></i><span>999</span>
            </li>
            <li>
              <i class="icon-fenxiang"></i><span>999</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="course-item">
        <div class="poster"></div>
        <div class="content">
          <div class="broadcast-info">
            <h2 class="name">直播主题</h2>
            <p class="teacher">直播人</p>
            <p class="info">简介</p>
          </div>
          <ul class="extra">
            <li>
              <i class="icon-pinglun"></i><span>999</span>
            </li>
            <li>
              <i class="icon-qiuguanzhu"></i><span>999</span>
            </li>
            <li>
              <i class="icon-fenxiang"></i><span>999</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="course-item">
        <div class="poster"></div>
        <div class="content">
          <div class="broadcast-info">
            <h2 class="name">直播主题</h2>
            <p class="teacher">直播人</p>
            <p class="info">简介</p>
          </div>
          <ul class="extra">
            <li>
              <i class="icon-pinglun"></i><span>999</span>
            </li>
            <li>
              <i class="icon-qiuguanzhu"></i><span>999</span>
            </li>
            <li>
              <i class="icon-fenxiang"></i><span>999</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="course-item">
        <div class="poster"></div>
        <div class="content">
          <div class="broadcast-info">
            <h2 class="name">直播主题</h2>
            <p class="teacher">直播人</p>
            <p class="info">简介</p>
          </div>
          <ul class="extra">
            <li>
              <i class="icon-pinglun"></i><span>999</span>
            </li>
            <li>
              <i class="icon-qiuguanzhu"></i><span>999</span>
            </li>
            <li>
              <i class="icon-fenxiang"></i><span>999</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="course-item">
        <div class="poster"></div>
        <div class="content">
          <div class="broadcast-info">
            <h2 class="name">直播主题</h2>
            <p class="teacher">直播人</p>
            <p class="info">简介</p>
          </div>
          <ul class="extra">
            <li>
              <i class="icon-pinglun"></i><span>999</span>
            </li>
            <li>
              <i class="icon-qiuguanzhu"></i><span>999</span>
            </li>
            <li>
              <i class="icon-fenxiang"></i><span>999</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="course-item">
        <div class="poster"></div>
        <div class="content">
          <div class="broadcast-info">
            <h2 class="name">直播主题</h2>
            <p class="teacher">直播人</p>
            <p class="info">简介</p>
          </div>
          <ul class="extra">
            <li>
              <i class="icon-pinglun"></i><span>999</span>
            </li>
            <li>
              <i class="icon-qiuguanzhu"></i><span>999</span>
            </li>
            <li>
              <i class="icon-fenxiang"></i><span>999</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="course-item">
        <div class="poster"></div>
        <div class="content">
          <div class="broadcast-info">
            <h2 class="name">直播主题</h2>
            <p class="teacher">直播人</p>
            <p class="info">简介</p>
          </div>
          <ul class="extra">
            <li>
              <i class="icon-pinglun"></i><span>999</span>
            </li>
            <li>
              <i class="icon-qiuguanzhu"></i><span>999</span>
            </li>
            <li>
              <i class="icon-fenxiang"></i><span>999</span>
            </li>
          </ul>
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
  .videoCourse{
    width: 960px;
    position: relative;
    overflow: hidden;
    .classify{
      margin-top: 40px;
      overflow: hidden;
      li{
        float: left;
        line-height: 22px;
        font-size: 16px;
        padding: 0 13px;
        color: #808080;
        cursor: pointer;
        border-right: 1px solid #bfbfbf;
        &:first-child{
          padding-left: 0;
        }
        &:last-child{
          padding-right: 0;
          border: none;
        }
        &.active{
          color: #2056a6;
        }
      }
    }
    .search{
      position: absolute;
      right: 7px;
      top: 39px;
      input{
        width: 82px;
        height: 21px;
        border-radius: 11px;
        border: solid 1px #7f7f7f;
        box-sizing: border-box;
        text-align: center;
      }
      .icon-sousuo{
        font-size: 16px;
        margin-left: 7px;
        color: #7f7f7f;
        cursor: pointer;
      }
    }
    .features{
      margin-top: 15px;
      overflow: hidden;
      li{
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
        &.active{
          color: #2056a6;
          border-color: #2050a6;
        }
      }
    }
    .course-list{
      overflow: hidden;
      .course-item{
        width: 458px;
        height: 152px;
        float: left;
        margin-right: 44px;
        margin-top: 22px;
        font-size: 14px;
        line-height: 22px;
        overflow: hidden;
        .poster{
          float: left;
          width: 240px;
          height: 152px;
          border-radius: 15px;
          background-color: #2056a6;
        }
        .content{
          width: 173px;
          float: right;
          margin-top: 24px;
          .broadcast-info{
            float: left;
            .name{
              font-size: 18px;
              color: #2056a6;
            }
            .info{
              margin: 8px auto;
            }
            .teacher{
              color: #666;
            }
          }
          .extra{
            float: right;
            overflow: hidden;
            li{
              width: 46px;
              text-align: center;
              margin-top: 8px;
              color: #666;
              &:first-child{
                margin-top: 0;
              }
              i{
                margin-right: 4px;
              }
            }
          }
        }
        &:nth-child(2n){
          margin-right: 0;
        }
      }
    }
    .btn{
      width: 211px;
      height: 44px;
      margin: 53px auto 89px;
      .viewMore{
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
