// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '@/LandingPage.vue'
import Login from '@/views/Auth/Login.vue'
import Register from '@/views/Auth/Register.vue'

const routes = [
  {
    path: '/',
    name: 'landing-page',
    component: LandingPage
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router