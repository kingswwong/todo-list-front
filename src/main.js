// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import '../static/css/welcome.css'
import '../static/css/animation.css'
import 'ant-design-vue/dist/antd.css'
import Antd from 'ant-design-vue'
import {post,get,patch,put,del} from './http/http'

Vue.config.productionTip = false
Vue.prototype.$post=post;
Vue.prototype.$get=get;
Vue.prototype.$patch=patch;
Vue.prototype.$put=put;
Vue.prototype.$del=del;

Vue.use(Antd)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
