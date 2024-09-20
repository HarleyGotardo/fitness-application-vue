// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '@/LandingPage.vue'
import Login from '@/views/Auth/Login.vue'
import Register from '@/views/Auth/Register.vue'
import AuthenticatedLayout from '@/components/AuthenticatedLayout.vue'
import Dashboard from '@/views/Auth/App/Dashboard.vue'
import Exercises from '@/views/Auth/App/Exercises.vue'
import Nutrition from '@/views/Auth/App/Nutrition.vue'
import Progress from '@/views/Auth/App/Progress.vue'
import { supabase } from '@/lib/supabaseClient'

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
  },
  {
    path: '/application',
    component: AuthenticatedLayout,
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: Dashboard
      },
      {
        path: 'exercises',
        name: 'Exercises',
        component: Exercises
      },
      {
        path: 'nutrition',
        name: 'Nutrition',
        component: Nutrition
      },
      {
        path: 'progress',
        name: 'Progress',
        component: Progress
      }
    ],
    meta: { requiresAuth: true }
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router