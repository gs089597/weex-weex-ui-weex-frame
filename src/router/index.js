// import Vue from 'vue'
import VueRouter from 'vue-router'
import map from './map'
Vue.use(VueRouter)

let router = new VueRouter({
  // mode: 'history',
  saveScrollPosition: true,
  scrollBehavior: () => ({
    y: 0
  }),
  routes: map
})

Vue.$router = router

export default router
