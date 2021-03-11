// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from '../src/store/store'
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import VueI18n from 'vue-i18n';

Vue.config.productionTip = false
Vue.use(Vuetify);
Vue.use(VueI18n)

const messages = {
  en: {
    message: {
      hello: 'hello world'
    }
  },
  fr: {
    message: {
      hello: 'Bonjour monde'
    }
  }
}

const i18n = new VueI18n({
  locale: 'fr',
  messages
})

new Vue({
  el: '#app',
  router,
  store,
  i18n,
  vuetify: new Vuetify(),
  components: { App },
  template: '<App/>'
})
