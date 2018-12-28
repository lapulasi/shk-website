<template>
  <div class="contentWrapper" ref="contentWrapper">
    <div class="home">
      <div class="platform" :class="{marginTop129: hederShow}">
        <p class="fans"><span>9999个</span></p>
        <div class="video-list clearfix">
          <div class="video-item">
            <span class="title">干货</span>
            <p class="name">自闭症孩子真的没有感情吗？</p>
            <div class="view"><span>查看</span><span class="icon"></span></div>
          </div>
          <div class="video-item">
            <span class="title">热贴</span>
            <p class="name">记录|我是如何把自己的星儿送进幼儿园</p>
            <div class="view"><span>查看</span><span class="icon"></span></div>
          </div>
          <div class="video-item">
            <span class="title">好课上架</span>
            <p class="name">《邹小兵：BSR训练方法系列》</p>
            <div class="view"><span>查看</span><span class="icon"></span></div>
          </div>
          <div class="video-item">
            <span class="title">资料更新</span>
            <p class="name">成长日记记录模板，可供下载</p>
            <div class="view"><span>查看</span><span class="icon"></span></div>
          </div>
        </div>
      </div>
      <div class="watch" ref="homeList1">
        <div class="logo">
          <img @mouseenter="enter()" @mouseleave="leave()" :src="imgSrc" width="183" height="241" alt="">
        </div>
      </div>
      <div class="bsr-module"></div>
      <div class="bsr-guide">
        <div class="wrapper">
          <h2 class="title">
            <img src="./family.png" width="356" height="68" alt="">
          </h2>
          <p class="info">在BSR理念的指导下，我们为家庭提供咨询-测评-干预训练-再测评的服务支持<br>
            让您学习权威专业的知识，合理安排干预时间，并追踪儿童的康复效率</p>
          <div>
            <transition name="fade">
              <div class="pro-panel advisory">
                <div class="normal"></div>
                <div class="hover">
                  <img src="./guide-hover-01.png" width="269" height="74" alt="">
                  <div class="content">
                    <p>关注“星儿守望者”微信公众号，可在公众号内进行AI问诊，帮助您解答与自闭症相关的知识性问题。您亦可在公众号留言提问，我们将定期整理问题进行统一解
                      答，请您持续关注。</p>
                    <img src="./ai-code.png" width="83px" height="83px" alt="">
                  </div>
                </div>
              </div>
            </transition>
            <div class="pro-panel evaluation">
              <div class="normal"></div>
              <div class="hover">
                <img src="./guide-hover-02.png" width="269" height="74" alt="">
                <p class="summary">当您的孩子出现疑似自闭症征象时，可通过科学量表做初步筛查检查，我们的测评结果准确度为XX%。</p>
                <button @click.stop="showEvaluationShow">点击测评</button>
              </div>
            </div>
            <div class="pro-panel train">
              <div class="normal"></div>
              <div class="hover">
                <img src="./guide-hover-03.png" width="269" height="74" alt="">
                <p class="summary">
                  如果您的早期测评结果为可疑阳性，孩子具有自闭症典型表现，那么您需要尽早对孩子进行干预训练。我们将根据测评结果，提供个性化的干预训练方法，制定干预计划。</p>
              </div>
            </div>
            <div class="pro-panel re-evaluation">
              <div class="normal"></div>
              <div class="hover">
                <img src="./guide-hover-04.png" width="269" height="74" alt="">
                <p class="summary">
                  当完成某一阶段的干预后，您可以再次进行测评，直观了解干预训练的有效性，及时改进干预中的不足；也能详细掌握孩子各项能力的改善与进步情况，为选择干预课程训练作参考。</p>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div class="happy"></div>
      <div class="advance"></div>
      <div class="doctor-wrapper" ref="homeList2">
        <div class="wrapper">
          <h2 class="title">
            <img src="./doctor.png" width="197" height="68" alt="">
          </h2>
          <p class="info">来自中山三院儿童发育行为中心的教授专家们，是“星儿守望者”的核心力量<br>
            他们提供了专业的理论支持、课程录制、教具开发等支持<br>
            邹小兵教授领衔的医疗团队与广大家长一起同行</p>
          <div>
            <swiper :options="swiperOption">
              <swiper-slide>
                <div class="doc-panel">
                  <div class="doc-info-wrapper">
                    <img src="./zxb.png" width="104" height="104" alt="">
                    <div class="doc-info">
                      <p class="name">邹小兵</p>
                      <p class="position">中心主任<br>
                        主任医师</p>
                    </div>
                  </div>
                  <p class="introduction">著名儿童发育行为专家，长期从事发育行为儿科学专业临床和科学研究，有深厚造诣和极为丰富的临床经验</p>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="doc-panel">
                  <div class="doc-info-wrapper">
                    <img src="./dhz.png" width="104" height="104" alt="">
                    <div class="doc-info">
                      <p class="name">邓红珠</p>
                      <p class="position">中心副主任<br>
                        主任医师</p>
                    </div>
                  </div>
                  <p class="introduction">医学博士，知名发育行为儿科专家。擅长自闭症谱系障碍儿童生长发育评估和干预</p>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="doc-panel">
                  <div class="doc-info-wrapper">
                    <img src="./ljy.png" width="104" height="104" alt="">
                    <div class="doc-info">
                      <p class="name">李建英</p>
                      <p class="position">副主任医师</p>
                    </div>
                  </div>
                  <p class="introduction">医学硕士，知名发育行为儿科专家。擅长自闭症谱系障碍儿童的诊断和治疗</p>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="doc-panel">
                  <div class="doc-info-wrapper">
                    <img src="./tc.png" width="104" height="104" alt="">
                    <div class="doc-info">
                      <p class="name">唐春</p>
                      <p class="position">副主任医师</p>
                    </div>
                  </div>
                  <p class="introduction">知名发育行为儿科专家，从事儿科临床、儿童保健、儿童发育行为工作27年</p>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="doc-panel">
                  <div class="doc-info-wrapper">
                    <img src="./lym.png" width="104" height="104" alt="">
                    <div class="doc-info">
                      <p class="name">李咏梅</p>
                      <p class="position">副主任医师</p>
                    </div>
                  </div>
                  <p class="introduction">医学博士，在自闭症神经心理学机制方面有较深造诣</p>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="doc-panel">
                  <div class="doc-info-wrapper">
                    <img src="./ccq.png" width="104" height="104" alt="">
                    <div class="doc-info">
                      <p class="name">岑超群</p>
                      <p class="position">副主任医师</p>
                    </div>
                  </div>
                  <p class="introduction">中山大学发育行为儿科专业硕士，广东省发育行为儿科学组秘书</p>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="doc-panel">
                  <div class="doc-info-wrapper">
                    <img src="./zhl.png" width="104" height="104" alt="">
                    <div class="doc-info">
                      <p class="name">朱绘霖</p>
                      <p class="position">助理研究员</p>
                    </div>
                  </div>
                  <p class="introduction">中山三院儿童发育行为中心专职科研人员，发表多篇SCI论文并主持以自闭症为主题的国家自然科学基金</p>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="doc-panel">
                  <div class="doc-info-wrapper">
                    <img src="./cky.png" width="104" height="104" alt="">
                    <div class="doc-info">
                      <p class="name">陈凯云</p>
                      <p class="position">主治医师</p>
                    </div>
                  </div>
                  <p class="introduction">中医学硕士，中山三院儿童发育行为中心自闭症家长培训班常驻讲师</p>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="doc-panel">
                  <div class="doc-info-wrapper">
                    <img src="./cby.png" width="104" height="104" alt="">
                    <div class="doc-info">
                      <p class="name">陈碧媛</p>
                      <p class="position">主治医师</p>
                    </div>
                  </div>
                  <p class="introduction">在读博士，擅长儿童自闭症的早期诊断和家长干预技能指导</p>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="doc-panel">
                  <div class="doc-info-wrapper">
                    <img src="./zgd.png" width="104" height="104" alt="">
                    <div class="doc-info">
                      <p class="name">詹国栋</p>
                      <p class="position">主治医师</p>
                    </div>
                  </div>
                  <p class="introduction">医学博士，擅长各类儿童发育行为疾病的诊断和治疗</p>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="doc-panel">
                  <div class="doc-info-wrapper">
                    <img src="./lfj.png" width="104" height="104" alt="">
                    <div class="doc-info">
                      <p class="name">梁凤晶</p>
                      <p class="position">主治医师</p>
                    </div>
                  </div>
                  <p class="introduction">医学硕士，熟悉自闭症谱系障碍、多动症、抽动症等儿童发育性疾病的诊治</p>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="doc-panel">
                  <div class="doc-info-wrapper">
                    <img src="./yc.png" width="104" height="104" alt="">
                    <div class="doc-info">
                      <p class="name">游聪</p>
                      <p class="position">主治医师</p>
                    </div>
                  </div>
                  <p class="introduction">医学硕士，擅长各种儿童发育行为障碍性疾病尤其是自闭症谱系障碍的诊断和矫治</p>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="doc-panel">
                  <div class="doc-info-wrapper">
                    <img src="./zyy.png" width="104" height="104" alt="">
                    <div class="doc-info">
                      <p class="name">邹园园</p>
                      <p class="position">主管技师</p>
                    </div>
                  </div>
                  <p class="introduction">治疗师组长，广东省康复医学会言语语言治疗师分会理事</p>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="doc-panel">
                  <div class="doc-info-wrapper">
                    <img src="./csm.png" width="104" height="104" alt="">
                    <div class="doc-info">
                      <p class="name">成三梅</p>
                      <p class="position">主管技师</p>
                    </div>
                  </div>
                  <p class="introduction">治疗师组长，广东省自闭症康复协会会员</p>
                </div>
              </swiper-slide>
              <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
          </div>
        </div>
      </div>
      <div class="evaluation-wrapper" @click.stop="showEvaluationShow" ref="homeList3">
        <div class="evaluation-panel">
          <div class="evaluation-text">
            <div class="title">
              <img src="./zxcp.png" width="158" height="" alt="">
            </div>
            <p>孩子似乎出现了自闭症的征象？<br>
              医院专家又一时难以挂上号？<br>
              科学权威的在线测评，给您一个可靠的结果</p>
            <button class="button">点击测评</button>
          </div>
          <div class="bg-img">
            <img src="./cpch.png" width="924" height="364" alt="">
          </div>
          <div class="mask" v-show="evaluationShow">
            <span class="close" @click.stop="hideEvaluationShow"></span>
            <div class="text">
              <p>为了提供更准确的测评结果<br>
                医生团队和程序员们正在努力开发中！</p>
              <p>您可先关注我们的微信公众号<br>
                “在线测评”功能上线后我们将通知您哦~</p>
            </div>
            <div class="avatar">

            </div>
          </div>
        </div>

      </div>
      <div class="bsr-wrapper" ref="homeList4">
        <div class="bsr-panel">
          <div class="content">
            <div class="title">
              <img src="./bsr-title.png" width="234" height="66" alt="">
            </div>
            <p>未知才是最大的恐惧，<br>
              不用过于焦虑忧心，<br>
              这里有专业的医生团队让你了解自闭症的方方面面</p>
            <button class="button">点击进入</button>
          </div>
          <div class="bg-img">
            <img src="./bsrch.jpg" width="800" height="600" alt="">
          </div>
        </div>
      </div>
      <div class="resource-wrapper" ref="homeList5">
        <div class="resource-panel">
          <div class="title">
            <img src="./zyz.png" width="120" height="66" alt="">
          </div>
          <p>国际上与自闭症相关的新标准与研究<br>
            日常干预中需要的辅助日志与表格<br>
            我们为您整理好了</p>
          <button class="button">点击测评</button>
        </div>
        <div class="follow-us">
          <p class="title">您还可以通过以下方式关注我们</p>
          <div class="channel">
            <div class="we-chart">
              <div>
                <img src="./weChart.png" width="81" height="81" alt="">
              </div>
              <p>微信公众号<br>
                AI问诊、丰富干货资讯</p>
            </div>
            <div class="zhi-hu">
              <div>
                <img src="./zhihu.png" width="107" height="82" alt="">
              </div>
              <p>知乎<br>
                每周解答X个自闭症疑问</p>
            </div>
            <div class="dou-yin">
              <div>
                <img src="./douyin.png" width="84" height="84" alt="">
              </div>
              <p>抖音号<br>
                每天了解一点自闭症</p>
            </div>
          </div>
          <p class="copy-right">Copyright©️2018 深圳市视惠康技术有限责任公司 版权所有</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import logoUrlG from './logo.gif'
  import logoUrlP from './logo.png'

  export default {
    data() {
      return {
        evaluationShow: false,
        swiperOption: {
          slidesPerView: 4,
          spaceBetween: 54,
          slidesPerGroup: 4,
          loop: false,
          loopFillGroupWithBlank: true,
          pagination: '.swiper-pagination',
          paginationClickable :true
        },
        hederShow: false,
        imgSrc: logoUrlG
      }
    },
    mounted() {
      this.$nextTick(function () {
        this.scrollhome = new BScroll(this.$refs.contentWrapper, {
          click: true,
          mouseWheel: true
        });
        this.scrollhome.on('scroll', (pos) => {
          // 判断滑动方向，避免下拉时分类高亮错误（如第一分类商品数量为1时，下拉使得第二分类高亮）
          if (pos.y <= 0) {
            let scrolly = Math.abs(Math.round(pos.y));
//            console.log(scrolly)
            if (scrolly > 129) {
              this.$emit('scrollEvent', false)
            } else {
              this.$emit('scrollEvent', true)
            }
            if (scrolly <= 70) {
              this.hederShow = true;
            }else{
              this.hederShow = false;
            }
          }
        });
      });
    },
    methods: {
      _scrollElement(index) {
//        console.log('index===' + index);
        let tempList = {};
        if (index === 0) {
          this._scrollTop();
        } else {
          if (index === 1) {
            tempList = this.$refs.homeList1;
          } else if (index === 2) {
            tempList = this.$refs.homeList2;
          } else if (index === 3) {
            tempList = this.$refs.homeList3;
          } else if (index === 4) {
            tempList = this.$refs.homeList4;
          } else if (index === 5) {
            tempList = this.$refs.homeList5;
          }

//        console.log(tempList)
          this.scrollhome.scrollToElement(tempList, 500);
          this.$emit('scrollEvent', false);
        }
      },
      _scrollTop() {
        let tempList = this.$refs.contentWrapper;
        this.scrollhome.scrollToElement(tempList, 500);
        this.hederShow = true;
      },
      _scrollEvaluation() {
        let tempList = this.$refs.homeList3;
        this.scrollhome.scrollToElement(tempList, 500);
      },
      showEvaluationShow() {
        this._scrollEvaluation();
        this.evaluationShow = true;
      },
      hideEvaluationShow() {
        this.evaluationShow = false;
      },
      enter() {
        this.imgSrc = logoUrlG;
      },
      leave() {
        this.imgSrc = logoUrlP;
      }
    }
  }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
  .contentWrapper {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }

  .marginTop129 {
    margin-top: 139px !important;
  }

  .platform {
    position: relative;
    width: 100%;
    height: 969px;
    background: url("./home_02.png") center center no-repeat;
    overflow: hidden;
    margin-top: 70px;
    .fans {
      width: 1200px;
      margin: 129px auto 0;
      span {
        line-height: 34px;
        font-size: 32px;
        color: #fd5c7a;
        margin-left: 120px;
      }

    }
    .video-list {
      margin: 552px auto 0;
      width: 1201px;
      .video-item {
        width: 280px;
        padding: 25px 0 29px;
        line-height: 22px;
        font-size: 16px;
        background: #fff;
        box-shadow: 0px 17px 49px 0px rgba(33, 41, 53, 0.18);
        border-radius: 20px;
        float: left;
        margin-right: 27px;
        cursor: pointer;
        &:last-child {
          margin-right: 0;
        }
        .title {
          line-height: 30px;
          height: 30px;
          background-color: #1667b4;
          font-size: 20px;
          color: #fff;
          padding: 0 30px;
        }
        .name {
          height: 44px;
          margin: 10px 0;
          padding: 0 28px;
        }
        .view {
          padding-left: 30px;
          color: #1667b4;
          span {
            vertical-align: top;
          }
          .icon {
            display: inline-block;
            margin-top: 2px;
            width: 17px;
            height: 17px;
            margin-left: 4px;
            background: url("./video.png") center center no-repeat;
          }
        }
      }
    }
  }

  .watch {
    width: 100%;
    height: 729px;
    background: url("./home_03.png") center center no-repeat;
    .logo {
      width: 1200px;
      margin: 0 auto;
      img {
        cursor: pointer;
        width: 183px;
        height: 241px;
        margin: 98px 0 0 125px;
      }
    }
  }

  .bsr-module {
    width: 100%;
    height: 923px;
    background: url("./home_04.png") center center no-repeat;
  }

  .bsr-guide, .doctor-wrapper {
    width: 100%;
    height: 605px;
    background: #fff;
    .wrapper {
      width: 1201px;
      margin: 0 auto;
      .title {
        width: 356px;
        height: 68px;
        margin: 63px auto;
        text-align: center;
      }
      .info {
        text-align: center;
        line-height: 22px;
        font-size: 17px;
        margin: 30px auto 70px;
      }
    }
    .pro-panel {
      position: relative;
      width: 283px;
      height: 214px;
      float: left;
      margin-right: 23px;
      .normal {
        width: 283px;
        height: 214px;
        cursor: pointer;
        transition: all 0.3s;
      }
      .hover {
        display: none;
        position: absolute;
        text-align: center;
        left: -21px;
        top: -37px;
        width: 325px;
        height: 289px;
        background-color: #ffffff;
        box-shadow: 0px 13px 29px 0px rgba(255, 112, 88, 0.18);
        border-radius: 15px;
        transition: all 0.3s;
        line-height: 22px;
        font-size: 17px;
        > img {
          margin-top: 24px;
        }
        .summary {
          margin: 18px 42px;
          text-align: left;
        }
      }
      &:last-child {
        margin-right: 0;
      }
      &.advisory {
        .normal {
          background: url("./guide01.png");
        }
        .hover {
          border: solid 1px rgba(255, 112, 88, 0.23);
          background-image: linear-gradient(rgba(255, 197, 187, 0.32), #fff 60%);
          .content {
            margin: 18px 13px;
            p {
              float: left;
              width: 204px;
              height: 148px;
              text-align: left;
            }
            img {
              float: right;
              margin-top: 34px;
              background: rgba(255, 112, 88, 0.23);
              margin-left: 10px;
            }
          }
        }
      }
      &.evaluation {

        .normal {
          background: url("./guide02.png");
        }
        .hover {
          border: solid 1px rgba(0, 184, 212, 0.23);
          background-image: linear-gradient(rgba(151, 226, 237, 0.32), #fff 60%);
          button {
            width: 155px;
            height: 31px;
            margin: 0 auto;
            background-color: #00b8d4;
            border-radius: 7px;
            color: #fff;
            border: none;
            cursor: pointer;
            &:focus {
              outline: 0;
            }
          }
        }
      }
      &.train {
        .normal {
          background: url("./guide03.png");
        }
        .hover {
          border: solid 1px rgba(255, 208, 91, 0.23);
          background-image: linear-gradient(rgba(255, 236, 188, 0.32), #fff 60%);
        }
      }
      &.re-evaluation {
        .normal {
          background: url("./guide04.png");
        }
        .hover {
          border: solid 1px rgba(59, 203, 182, 0.23);
          background-image: linear-gradient(rgba(176, 234, 225, 0.32), #fff 60%);
        }
      }
      &:hover {
        .normal {
          display: none;
        }
        .hover {
          display: block;
        }
      }
      /*&.fade-enter-active, &.fade-leave-active {
        transition: all 1s;
        .hover {
          display: block;
          opacity: 1;
        }
      }
      &.fade-enter, &.fade-leave-to {
        .normal {
          display: block;
        }
        .hover {
          display: none;
          opacity: 0;
        }
      }*/
    }
    .doc-panel {
      margin-top: 57px;
      margin-bottom: 72px;
      height: 190px;
      background-color: #ffffff;
      box-shadow: 0px 17px 49px 0px rgba(33, 41, 53, 0.18);
      border-radius: 15px;
      .doc-info-wrapper {
        position: relative;
        height: 84px;
      }
      img {
        position: absolute;
        width: 104px;
        height: 104px;
        border-radius: 50%;
        top: -40px;
        left: 10px;
      }
      .doc-info {
        position: absolute;
        right: 56px;
        top: 16px;
        .name {
          font-size: 20px;
          line-height: 22px;
          margin-bottom: 8px;
        }
        .position {
          font-size: 14px;
          line-height: 18px;
        }
      }
      .introduction {
        width: 216px;
        margin: 0 auto;
        line-height: 22px;
        color: #666;
        padding-top: 8px;
        border-top: solid 1px #1667b4;
      }
    }
  }

  .doctor-wrapper {
    .wrapper {
      .info {
        margin-bottom: 17px;
      }
    }
  }

  .happy {
    width: 100%;
    height: 1126px;
    background: url("./home_06.png") center center no-repeat;
  }

  .advance {
    width: 100%;
    height: 656px;
    background: url("./home_07.png") center center no-repeat;
  }

  .button {
    width: 137px;
    height: 42px;
    font-size: 16px;
    color: #fff;
    text-align: center;
    background-color: #1667b4;
    border-radius: 6px;
  }

  .evaluation-wrapper {
    width: 100%;
    height: 454px;
    background: #f9fafb;
    overflow: hidden;
    .evaluation-panel {
      .evaluation-text {
        position: relative;
        z-index: 20;
        /*width: 64%;*/
        width: 1229px;
        height: 454px;
        margin: 0 auto;
        /*margin: 0 243px 0 448px;*/
        .title {
          margin-top: 65px;
        }
        > p {
          margin-top: 22px;
          line-height: 22px;
          font-size: 16px;
        }
        .button {
          margin-top: 76px;
        }
      }
      position: relative;
      .bg-img {
        width: 924px;
        height: 364px;
        position: absolute;
        right: 0;
        top: 0;
      }
      .mask {
        position: absolute;
        top: 12px;
        width: 666px;
        height: 294px;
        left: 50%;
        margin-left: -333px;
        background-color: rgba(22, 102, 179, 0.68);
        box-shadow: 0px 13px 29px 0px rgba(22, 103, 180, 0.18);
        border-radius: 15px;
        border: solid 1px rgba(22, 103, 180, 0.23);
        z-index: 20;
        color: #fff;
        .close {
          position: absolute;
          width: 32px;
          height: 32px;
          right: 17px;
          top: 15px;
          background: url("./close.png") center center no-repeat;
          cursor: pointer;
        }
        .text {
          float: left;
          width: 282px;
          margin: 99px 48px 0 99px;
          line-height: 22px;
          font-size: 15px;
          p:last-child {
            margin-top: 16px;
          }
        }
        .avatar {
          float: left;
          width: 124px;
          height: 124px;
          padding: 6px;
          background: url("./ai-code.png") center no-repeat;
          margin-top: 90px;
        }
      }
    }
  }

  .bsr-wrapper {
    width: 100%;
    height: 600px;
    background-color: #e0effb;
    overflow: hidden;
    .bsr-panel {
      position: relative;
      width: 1157px;
      height: 600px;
      margin: 0 auto;
      /*margin: 0 23% 0 16.2%;*/
      .content {
        position: absolute;
        right: 0;
        top: 0;
        text-align: right;
      }
      .title {
        margin-top: 172px;
      }
      p {
        margin-top: 22px;
        line-height: 22px;
        font-size: 16px;
      }
      .button {
        margin-top: 76px;
        background: #d5d9df;
      }
      .bg-img {
        width: 800px;
        height: 600px;
        position: absolute;
        left: 0;
        top: 0;
      }
    }
  }

  .resource-wrapper {
    width: 100%;
    height: 961px;
    overflow: hidden;
    background: url("home_11.jpg") center center no-repeat;
    .resource-panel {
      width: 1110px;
      height: 498px;
      margin: 53px auto 0;
      .title {
        margin-top: 76px;
      }
      p {
        margin-top: 22px;
        line-height: 22px;
        font-size: 16px;
      }
      .button {
        background: #d5d9df;
        margin-top: 76px;
      }
    }
    .follow-us {
      width: 606px;
      height: 318px;
      margin: 64px auto 0;
      text-align: center;
      line-height: 22px;
      font-size: 16px;
      color: #fff;
      overflow: hidden;
      > p {
        line-height: 30px;
        font-size: 30px;
      }
      .channel {
        margin-top: 76px;
        overflow: hidden;
      }
      .we-chart {
        width: 163px;
        float: left;
        margin-right: 60px;
        img {
          width: 81px;
          height: 81px;
        }
        p {
          margin-top: 14px;
        }
      }
      .zhi-hu {
        width: 174px;
        float: left;
        margin-right: 60px;
        img {
          width: 107px;
          height: 81px;
        }
        p {
          margin-top: 14px;
        }
      }
      .dou-yin {
        width: 148px;
        float: left;
        img {
          width: 81px;
          height: 81px;
        }
        p {
          margin-top: 14px;
        }
      }
      .copy-right {
        line-height: 22px;
        font-size: 16px;
        font-family: SourceHanSansCN-Normal;
        margin-top: 40px;
        color: #f8fbff;
      }
    }
  }
</style>
