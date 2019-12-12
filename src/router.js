import Vue from 'vue';
import Router from 'vue-router';
import NProgress from 'nprogress'; // Progress 进度条
import 'nprogress/nprogress.css'; // Progress 进度条样式
import Home from '@/views/home/home.vue'
Vue.use(Router);
/**
 * 重写路由的push方法
 */
const routerPush = Router.prototype.push
const routerReplace = Router.prototype.replace
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error => error)
}
Router.prototype.replace = function replace(location) {
  return routerReplace.call(this, location).catch(error => error)
}
const router = new Router({
  routes: [
    {
      path: '/',
      component: Home,
      redirect: '/rainSearch',
      meta: { title: '雨量查询' },
      children: [
        {
          path: 'rainSearch',
          name: 'rainSearch',
          component: () => import('@/views/rain-search/index.vue'),
          meta: { title: '雨量查询' }
        }
      ]
    },
    {
      path: '/waterInfo',
      component: Home,
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

// 路由拦截

router.beforeEach((to, from, next) => {
  NProgress.start();
  // 有权限删除
  NProgress.done();
  next();

  // 有权限取消注释
  // if (to.name === '401') { // 暂无登录页
  //   NProgress.done();
  //   next();
  // } else {
  //   if (JSON.parse(getUserInfo())) {
  //     if (!JSON.parse(getUserInfo()).token) {
  //       NProgress.done();
  //       next()
  //     } else {
  //       if (store.state.currUserMenus.length <= 0) {
  //         Promise.all([getUserMenus()]).then(data => {
  //           const res = data[0]
  //           store.state.currUserMenus = res.result.children ? res.result.children : [];
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
