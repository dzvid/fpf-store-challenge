import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

import Products from '@/views/products/Products.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect: '/products',
  },
  {
    path: '/products',
    name: 'products.get',
    component: Products,
  },
  {
    path: '/products/create',
    name: 'products.post',
    component: () =>
      import(
        /* webpackChunkName: "create product" */ '@/views/products/ProductForm.vue'
      ),
  },
  {
    path: '*',
    redirect: { name: '/products' },
  },
];

const router = new VueRouter({
  routes,
});

export default router;
