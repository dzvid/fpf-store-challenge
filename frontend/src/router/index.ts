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
    path: '/products/edit/:editableProductId',
    name: 'products.put',
    component: () =>
      import(
        /* webpackChunkName: "edit product" */ '@/views/products/ProductForm.vue'
      ),
    props: (route) => {
      const editableProductId = Number.parseInt(
        route.params.editableProductId,
        10
      );

      if (Number.isNaN(editableProductId)) {
        return 0;
      }
      return { editableProductId };
    },
  },
  {
    path: '*',
    redirect: { name: 'products.get' },
  },
];

const router = new VueRouter({
  routes,
});

export default router;
