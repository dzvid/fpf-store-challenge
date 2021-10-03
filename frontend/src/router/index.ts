import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

import Products from "@/views/products/Products.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    redirect: "/products",
  },
  {
    path: "/products",
    name: "Products",
    component: Products,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
