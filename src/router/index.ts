import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/components/layouts/default/DefaultLayout.vue'),
    children: [
      {
        path: '/',
        component: () => import('@/pages/index.vue'),
      },

      {
        path: '/catalog',
        component: () => import('@/pages/catalog/index.vue'),
      },

      {
        path: '/wholesale',
        component: () => import('@/pages/wholesale/index.vue'),
      },

      {
        path: '/about',
        component: () => import('@/pages/about/index.vue'),
      },
    ]
  }
]

export default createRouter({
  routes: routes,
  history: createWebHistory(),
})
