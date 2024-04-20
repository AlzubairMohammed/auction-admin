import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { useAppStore } from "@/stores/index";
import appSetting from "@/app-setting";

import HomeView from "../views/index.vue";

const routes: RouteRecordRaw[] = [
  // dashboard
  { path: "/", name: "home", component: HomeView },
  // authentication
  {
    path: "/auth/boxed-signin",
    name: "boxed-signin",
    component: () =>
      import(
        /* webpackChunkName: "auth-boxed-signin" */ "../views/auth/boxed-signin.vue"
      ),
    meta: { layout: "auth" },
  },
  {
    path: "/auth/boxed-signup",
    name: "boxed-signup",
    component: () =>
      import(
        /* webpackChunkName: "auth-boxed-signup" */ "../views/auth/boxed-signup.vue"
      ),
    meta: { layout: "auth" },
  },
  {
    path: "/auth/boxed-lockscreen",
    name: "boxed-lockscreen",
    component: () =>
      import(
        /* webpackChunkName: "auth-boxed-lockscreen" */ "../views/auth/boxed-lockscreen.vue"
      ),
    meta: { layout: "auth" },
  },
  {
    path: "/auth/boxed-password-reset",
    name: "boxed-password-reset",
    component: () =>
      import(
        /* webpackChunkName: "auth-boxed-password-reset" */ "../views/auth/boxed-password-reset.vue"
      ),
    meta: { layout: "auth" },
  },
  {
    path: "/auth/cover-login",
    name: "cover-login",
    component: () =>
      import(
        /* webpackChunkName: "auth-cover-login" */ "../views/auth/cover-login.vue"
      ),
    meta: { layout: "auth" },
  },
  {
    path: "/auth/cover-register",
    name: "cover-register",
    component: () =>
      import(
        /* webpackChunkName: "auth-cover-register" */ "../views/auth/cover-register.vue"
      ),
    meta: { layout: "auth" },
  },
  {
    path: "/auth/cover-lockscreen",
    name: "cover-lockscreen",
    component: () =>
      import(
        /* webpackChunkName: "auth-cover-lockscreen" */ "../views/auth/cover-lockscreen.vue"
      ),
    meta: { layout: "auth" },
  },
  {
    path: "/auth/cover-password-reset",
    name: "cover-password-reset",
    component: () =>
      import(
        /* webpackChunkName: "auth-cover-password-reset" */ "../views/auth/cover-password-reset.vue"
      ),
    meta: { layout: "auth" },
  },
  // New adding
  {
    path: "/evaluations/comparisons",
    name: "comparisons",
    component: () =>
      import(
        /* webpackChunkName: "evaluations-comparisons" */ "../views/evaluations/comparisons.vue"
      ),
    meta: { layout: "app" },
  },

  // New scan
  {
    path: "/scans",
    name: "scan",
    component: () =>
      import(
        /* webpackChunkName: "evaluations-scan" */ "../views/scans/scans.vue"
      ),
    meta: { layout: "app" },
  },

];

const router = createRouter({
  history: createWebHistory(),
  linkExactActiveClass: "active",
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { left: 0, top: 0 };
    }
  },
});

router.beforeEach((to, from, next) => {
  const store = useAppStore();

  if (to?.meta?.layout == "auth") {
    store.setMainLayout("auth");
  } else {
    store.setMainLayout("app");
  }
  next(true);
});
router.afterEach((to, from, next) => {
  appSetting.changeAnimation();
});
export default router;
