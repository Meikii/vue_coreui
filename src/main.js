// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'core-js/es6/promise'
import 'core-js/es6/string'
import 'core-js/es7/array'
// import cssVars from 'css-vars-ponyfill'
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App'
import router from './router'


// todo
// cssVars()

Vue.use(BootstrapVue)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data: {
      url: 'http://pm.sarmadbs.com/',
      token: '6aad0847cc2ce0f4c4cb512c98be2a0a12c307ce'
  },
  router,
  template: '<App/>',
  components: {
    App
  },
  mounted() {
  }
})
