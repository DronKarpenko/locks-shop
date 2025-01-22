import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/components/layouts/default/DefaultLayout.vue'),
    children: [
      {
        path: '/',
        component: () => import('@/pages/index.vue'),
      }
    ]
  }
]

export default createRouter({
  routes: routes,
  history: createWebHistory(),
})
