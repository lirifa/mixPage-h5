import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import MintUI from 'mint-ui' // 使用mint-ui 组件库
import 'mint-ui/lib/style.css' // mint-ui组件库样式
import 'normalize.css' // 一个小的CSS文件，它在HTML元素的默认样式中提供了更好的跨浏览器一致性。这是一个现代化的，HTML5就绪的，可以替代传统的CSS重置

Vue.use(MintUI); // 还有加这一行

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
