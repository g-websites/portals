import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/portals/demo1//', name: 'home', component: () => import('../views/Home.vue') },
  { path: '/portals/demo1//products', name: 'products', component: () => import('../views/Products.vue') },
  { path: '/portals/demo1//product/:id', name: 'product-detail', component: () => import('../views/ProductDetail.vue'), props: true },
  { path: '/portals/demo1//about', name: 'about', component: () => import('../views/About.vue') },
  { path: '/portals/demo1//contact', name: 'contact', component: () => import('../views/Contact.vue') },
  { path: '/portals/demo1//:pathMatch(.*)*', redirect: '/' },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
