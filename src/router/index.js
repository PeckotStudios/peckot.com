import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    // {
    //   path: '/signin',
    //   name: 'signin',
    //   component: () => import('../views/SignInView.vue'),
    //   beforeEnter: (to, from, next) => {
    //     if ((() => {
    //       const user = localStorage.getItem('_user')
    //       return user ? JSON.parse(user) : null
    //     })()) next('/')
    //     else next()
    //   }
    // },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
      //beforeEnter: (to, from, next) => next('/'),
    },
  ]
})

export default router
