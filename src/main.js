// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from '../src/store/store'
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
Vue.config.productionTip = false
Vue.use(Vuetify);

new Vue({
  el: '#app',
  router,
  store,
  vuetify: new Vuetify(),
  components: { App },
  template: '<App/>'
})
