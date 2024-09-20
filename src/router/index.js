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
import NotFound from '@/views/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'landing-page',
    component: LandingPage,
    meta: { requiresUnauth: true }
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: { requiresUnauth: true }
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
    meta: { requiresUnauth: true }
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
      },
      {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: Dashboard
      }
    ],
    meta: { requiresAuth: true }
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const user = localStorage.getItem('user');
  if (to.matched.some(record => record.meta.requiresAuth) && !user) {
    next({ name: 'login' });
  } else if (to.matched.some(record => record.meta.requiresUnauth) && user) {
    next({ name: 'NotFound' });
  } else {
    next();
  }
})

export default router