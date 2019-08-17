import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login'
import NotFound from './views/NotFound'
import Board from './components/Board'
import Card from './components/Card'
import store from './store'

Vue.use(Router)

const requireAuth = (to, from, next) => {
  const loginPath = `/login?rPath=${encodeURIComponent(to.path)}`
  store.getters.isAuth ? next() : next(loginPath)
}

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      beforeEnter: requireAuth
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/board/:bid',
      component: Board,
      beforeEnter: requireAuth,
      children: [
        {
          path: 'card/:cid',
          component: Card,
          beforeEnter: requireAuth
        }
      ]
    },
    {
      path: '*',
      component: NotFound
    }
  ]
})
