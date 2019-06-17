
import Vue from 'vue'
import Vuetify from'vuetify'
import App from './App'
import router from './router'
import store from './store'
import * as fb from 'firebase/app'
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
Vue.use(Vuetify, {
  iconfont: 'md'
})

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created () {
    fb.initializeApp({
      apiKey: 'AIzaSyA04OcziQ17L6V8m5ztohIrUeAjRrtvbiQ',
      authDomain: 'ads-project.firebaseapp.com',
      databaseURL: 'https://ads-project.firebaseio.com',
      projectId: 'ads-project',
      storageBucket: 'ads-projec.appspot.com',
      messagingSenderId: '352599408346'
    });
  }
});
