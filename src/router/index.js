import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Chart from '@/components/Chart'
import User from '@/components/User'
import Role from '@/components/Role'
import Auth from '@/components/Auth'
import UserInfo from '@/components/UserInfo'

Vue.use(Router)


export default new Router({
  routes: [{
      path: '/',
      redirect: '/index'
    },
    {
      path: '/hello',
      name: 'hello',
      component: HelloWorld
    },
    {
      // 访问路径，带斜杆“/”则会从根目录请求
      path: '/index',
      // 使用的组件
      // component: Chart,
      // 路由的名称
      name: 'index',
      // 命名视图组件配置
      components: {
        // 默认的视图组件
        default: Chart,
        // 指定name的视图组件
        'hello': HelloWorld
      },
      // 重定向
      // redirect: '/admin/index',
      // 配置，待研究
      props: '',
      // 别名，意思是访问 home时也会路由到 index，但url上不会变
      alias: '/home',
      // 子路由
      children: [{
        path: 'user/:userId',
        name: 'user',
        component: User,
        // 子路由
        children: [{
          path: 'userInfo',
          name: 'userInfo',
          component: UserInfo
        }]
      }, {
        path: 'role',
        name: 'role',
        component: Role
      }, {
        path: 'auth',
        name: 'auth',
        component: Auth
      }],
      // 进入之前的处理，待研究
      // beforeEnter(to, from, next) {
      //   return;
      // },
      // 路由元素，待研究
      meta: {},
      // 匹配规则是否大小写敏感？(默认值：false)
      caseSensitive: false,
      //编译正则的选项，待研究
      pathToRegexpOptions: {}
    }
  ],
  mode: 'history',
  base: '/',
  linkActiveClass: 'linkActiveClass'
})
