
/**
 * First we will load all of this project's JavaScript dependencies which
 * include Vue and Vue Resource. This gives a great starting point for
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

/**
 * We will create a fresh Vue application instance and attach it to
 * the body of the page. From here, you may begin adding components to
 * the application, or feel free to tweak this setup for your needs.
 */
import VueRouter  from 'vue-router'
import router     from './router'
import Vue        from 'vue'
import Vuex 	  from 'vuex'
import  mutations from './mutations/mutations'
import  state     from './state'
import  courses     from './store/courses'

Vue.use(VueRouter)

Vue.use(Vuex)

const home = require('./components/home.vue')
const store = new Vuex.Store({
  state,
  mutations,
  modules:{
  	courses
  }
})
// Create and mount root instance.
// Make sure to inject the router.
// Route components will be rendered inside <router-view>.
new Vue({

  router,
  store,

  components : {
    home
  },

  data : {

  }
 
}).$mount('#app')
