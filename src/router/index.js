import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

import AuthLayout from "@/auth/authLayout.vue"

const routes = [
  {
    path: '/',
    name: 'Login',
    component: AuthLayout,
  },
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router