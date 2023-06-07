
import { createRouter, createWebHistory } from "vue-router";
import routes from "./routerList";

const router = createRouter({
  history: createWebHistory(), //history模式使用HTML5模式
  routes,
});

router.beforeEach((to, from, next) => {
  let _login = localStorage.getItem("loginName");
  if (to.path == "/login") {
    next();
  }
  if (!_login) {
    next({path: "/login"});
  } else {
    if(to.matched.length===0){
      next('/error')
    }
    next();
  }
});

export default router;