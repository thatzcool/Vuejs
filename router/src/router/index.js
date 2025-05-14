import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({   //라우터 구성객체 생성 
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView     
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
       path :'/user/info/' ,
       name:'user',
       component: () => import('../views/UserInfo.vue')
    },
    {
       path :'/:user/:id' ,
       name:'user',
       component: () => import('../views/UserView.vue')
    },
     {
       path :'/user/:id/profile' ,
       name:'user',
       component: () => import('../views/UserInfo.vue')
    },
  ]
})

export default router
