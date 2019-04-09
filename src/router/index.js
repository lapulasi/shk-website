import Vue from 'vue'
import Router from 'vue-router'
import home from 'components/home/home'
import studyCenter from 'components/studyCenter/studyCenter'
import videoCourse from 'components/videoCourse/videoCourse'
import teachingAid from 'components/teachingAid/teachingAid'
import article from 'components/article/article'
import broadcast from 'components/liveBroadcast/liveBroadcast'

Vue.use(Router);

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: home
  },
  {
    path: '/BSR-center',
    component: studyCenter,
    redirect: '/BSR-center/video',
    children: [
      /*{
        path: '',
        component: videoCourse
      },*/
      {
        path: 'video',
        component: videoCourse
      },
      {
        path: 'teaching',
        component: teachingAid
      },
      {
        path: 'article',
        component: article
      },
      {
        path: 'broadcast',
        component: broadcast
      }
    ]
  }
]

export default new Router({
  mode: 'history',  //去掉url中的#，需要后台配合配置
  routes,
  linkActiveClass: 'active'
})
