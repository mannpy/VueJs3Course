import { createRouter, createWebHistory } from 'vue-router'
import Tasks from '../views/Tasks.vue'

const routes = [
  {
    path: '/', name: 'Tasks', component: Tasks
  },
  {
    path: '/task/:id',
    name: 'Task',
    component: () => import(/* webpackChunkName: "task" */ '../views/Task.vue')
  },
  {
    path: '/new',
    name: 'NewTask',
    component: () => import(/* webpackChunkName: "new" */ '../views/New.vue')
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: () => import(/* webpackChunkName: "not-found" */ '../views/NotFound.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: 'active',
  linkActiveExactClass: 'active'
})

export default router
