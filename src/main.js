import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { registerMicroApps, start } from 'qiankun'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

registerMicroApps([
  {
    name: 'subproject1', // 子应用名称
    entry: '//localhost:9528/edu', // 子应用入口
    container: '#appMain', // 子应用所在容器
    activeRule: '/admin' // 子应用触发规则（路径）
  }
], {
  beforeLoad: app => {
    console.log(app.name)
  }

})
start()
