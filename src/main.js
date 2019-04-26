import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import MintUI from 'mint-ui' // ʹ��mint-ui �����
import 'mint-ui/lib/style.css' // mint-ui�������ʽ
import 'normalize.css' // һ��С��CSS�ļ�������HTMLԪ�ص�Ĭ����ʽ���ṩ�˸��õĿ������һ���ԡ�����һ���ִ����ģ�HTML5�����ģ����������ͳ��CSS����

Vue.use(MintUI); // ���м���һ��

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
