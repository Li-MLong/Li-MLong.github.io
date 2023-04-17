import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/login",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/Login"),
  },
  {
    path: "/stereograph",
    name: "stereograph",
    component: () =>
      import(/* webpackChunkName: "Stereograph" */ "../views/Stereograph"),
  },
  {
    path: "/mymap",
    name: "mymap",
    component: () =>
      import(/* webpackChunkName: "MyMap" */ "../views/MyMap"),
  },
  {
    path: "/404",
    name: "404",
    component: () =>
      import(/* webpackChunkName: "404" */ "../views/404"),
  },
  {
    path: "/:catchAll(.*)",
    redirect: "/404",
  },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;