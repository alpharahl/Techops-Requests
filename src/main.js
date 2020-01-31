import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'

import firebase from 'firebase';
import firebaseConfig from '@/firebase.conf';
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

import VueRouter from 'vue-router';
Vue.use(VueRouter);
import router from './router';

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
