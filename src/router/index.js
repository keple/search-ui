import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home')
  },
  {
    path : '/profile',
    name : 'Profile',
    component : () => import('@/views/Profile')
  },
  {
    path : '/info',
    name : 'Info',
    component : () => import('@/views/Info')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
