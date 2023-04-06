import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home";
import Cookie from "js-cookie";

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
  }
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;