import Vue from 'vue';
import Router from 'vue-router';
import store from './store';
import NProgress from 'nprogress'; // Progress 进度条
import 'nprogress/nprogress.css'; // Progress 进度条样式
import index from '@/views/index/index.vue';
import { getUserInfo } from '@/services/auth.service';
import commonApi from '@/api/common.api.js';
Vue.use(Router);

const userInfo = JSON.parse(getUserInfo());
/**
 * 重写路由的push方法
 */
const routerPush = Router.prototype.push;
const routerReplace = Router.prototype.replace;
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error => error);
};
Router.prototype.replace = function replace(location) {
  return routerReplace.call(this, location).catch(error => error);
};
const router = new Router({
  routes: [
    {
      path: '/',
      component: index,
      redirect: '/rainSearch',
      meta: { title: '水资源' },
      children: [
        {
          path: 'rainSearch',
          name: 'rainSearch',
          component: () => import('@/views/rain-search/index.vue'),
          meta: { title: '水资源' }
        }
      ]
    },
    {
      path: '/waterInfo',
      component: index,
      redirect: '/waterInfo/useWaterManage',
      meta: { title: '雨量信息' },
      children: [
        {
          path: 'useWaterManage',
          name: 'useWaterManage',
          component: () => import('@/views/water-info/use-water-manage/index.vue'),
          meta: { title: '用水管理' }
        },
        {
          path: 'useWaterSearch',
          name: 'useWaterSearch',
          component: () => import('@/views/water-info/use-water-search/index.vue'),
          meta: { title: '用水查询' }
        }
      ]
    },
    {
      path: '*',
      meta: { title: '404', hidden: true },
      component: () => import('@/views/errorPage/404')
    },
    {
      name: '401',
      path: '/401',
      meta: { title: '401', hidden: true },
      component: () => import('@/views/errorPage/401')
    }
  ]
});

/**
    * 获取用户菜单（导航栏菜单）
    */
function getUserMenus() {
  console.log(userInfo)
  return new Promise((resolve, reject) => {
    commonApi.getUserMenus(userInfo.projectId).then(res => {
      resolve(res.result);
    }).catch(() => {
      reject('401');
    });
  });
}
// 路由拦截

router.beforeEach((to, from, next) => {
  NProgress.start();
  // 有权限删除
  NProgress.done();
  next();

  // 有权限取消注释
  // if (to.name === '401' || to.name === '404') { // 暂无登录页
  //   NProgress.done();
  //   next();
  // } else {
  //   if (userInfo) {
  //     if (!userInfo.token) {
  //       NProgress.done();
  //       next();
  //     } else {
  //       if (store.state.currUserMenus.length <= 0) {
  //         Promise.all([getUserMenus()]).then(data => {
  //           const res = data[0];
  //           store.state.currUserMenus = res.children ? res.children : [];
  //           NProgress.done();
  //           next();
  //         });
  //       } else {
  //         NProgress.done();
  //         next();
  //       }
  //     }
  //   } else {
  //     next({
  //       name: '401'
  //     });
  //   }
  // }
});
export default router;
