// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import VueFire from 'vuefire'
import firebase from 'firebase'
import push from './push'

Vue.use(VueFire)

let config = {
  apiKey: "AIzaSyD5YED-zi-gqbsmQMBUM5NdI8mR8ffVzC0",
  authDomain: "vue-pwa-f0002.firebaseapp.com",
  databaseURL: "https://vue-pwa-f0002.firebaseio.com",
  projectId: "vue-pwa-f0002",
  storageBucket: "",
  messagingSenderId: "218087848846"
};
firebase.initializeApp(config);

push()

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
