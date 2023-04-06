import router from ".";
import Cookie from "js-cookie";

router.beforeEach((to, from, next) => {
  let token = Cookie.get("token") || null;

  if (to.path !== "/login") {
    if (!token || token !== "13849141247") {
      next("/login");
    } else {
      next();
    }
  } else {
    if (!token) {
      next();
    } else {
      next("/");
    }
  }
});