import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    // name: 'Home',
    component: () => import('../views/FrontLayout.vue'),
    children: [
      {
        path: 'home',
        name: 'Home',
        component: () => import('../views/Front/HomeView.vue'),
      }],
  },
  {
    path: '/login',
    component: () => import('../views/Front/LoginView.vue'),
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('../views/DashboardLayout.vue'),
    children: [
      {
        path: 'products',
        name: 'AdminProducts',
        component: () => import('../views/Dashboard/AdminProducts.vue'),
      },
      {
        path: 'orders',
        name: 'AdminOrders',
        component: () => import('../views/Dashboard/AdminOrders.vue'),
      },
      {
        path: 'Coupons',
        name: 'AdminCoupons',
        component: () => import('../views/Dashboard/AdminCoupons.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  linkExactActiveClass: 'active',
  routes,
});

export default router;
