import Vue from 'vue'
import Router from 'vue-router'
import Login from '../component/login.vue'
import Index from '../component/index.vue'

Vue.use(Router)
export default new Router({
  routes: [{
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/index',
    name: 'Index',
    component: Index
  }

  ]
})
