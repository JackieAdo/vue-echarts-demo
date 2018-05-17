// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 引入echarts
import echarts from 'echarts'
// 引入主题
import frogTheme from './assets/frog-theme'
// 注册皮肤
echarts.registerTheme('frog', frogTheme)
// 将echarts绑定到Vue原型上，这样就可以直接在vue实例中使用this.echarts使用了
Vue.prototype.echarts = echarts;

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
