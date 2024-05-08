import { createRouter, createWebHistory } from 'vue-router';
import { useAppStore } from '@/stores/index';
import appSetting from '@/app-setting';

import HomeView from '../views/index.vue';

const routes = [
 // dashboard
 { path: '/', name: 'home', component: HomeView },
 // New scan
 {
  path: '/scans/:id?',
  name: 'scan',
  component: () => import(/* webpackChunkName: "evaluations-scan" */ '../views/scans/scans.vue'),
  meta: { layout: 'app' },
 },
 {
  path: '/auctions/list-page',
  name: 'auctions-list',
  component: () => import(/* webpackChunkName: "list-page" */ '../views/auctions/list-page.vue'),
  meta: { layout: 'app' },
 },
 {
  path: '/auctions/add-page',
  name: 'auctions/add-page',
  component: () => import(/* webpackChunkName: "add-page */ '../views/auctions/add-page.vue'),
  meta: { layout: 'app' },
 },
 {
  path: '/realestates/add-page/:id?',
  name: 'realestates/add-page',
  component: () => import(/* webpackChunkName: "evaluations-scan" */ '../views/realestates/add-page.vue'),
  meta: { layout: 'app' },
 },
 {
  path: '/realestates/list-page',
  name: 'realestates/list-page',
  component: () => import(/* webpackChunkName: "evaluations-scan" */ '../views/realestates/list-page.vue'),
  meta: { layout: 'app' },
 },
 {
  path: '/realestates/preview-page/:id',
  name: 'realestates/preview-page',
  component: () => import(/* webpackChunkName: "preview-page */ '../views/realestates/preview-page.vue'),
  meta: { layout: 'app' },
 },
 {
  path: '/evaluations/comparisons/:id?',
  name: 'comparisons',
  component: () => import(/* webpackChunkName: "evaluations-comparisons" */ '../views/evaluations/comparisons.vue'),
  meta: { layout: 'app' },
 },
 {
  path: '/evaluations/cost',
  name: 'evaluations/cost',
  component: () => import(/* webpackChunkName: "evaluations-scan" */ '../views/evaluations/cost-page.vue'),
  meta: { layout: 'app' },
 },
 {
  path: '/evaluations/direct-capitlization',
  name: 'evaluations/direct-capitlization',
  component: () => import(/* webpackChunkName: "evaluations-scan" */ '../views/evaluations/direct-capitlization.vue'),
  meta: { layout: 'app' },
 },
 {
  path: '/auctions/preview-page/:id',
  name: 'auctions/preview-page',
  component: () => import(/* webpackChunkName: "preview-page */ '../views/auctions/preview-page.vue'),
  meta: { layout: 'app' },
 },
 {
  path: '/auctions/edit-page/:id',
  name: 'auctions/edit-page',
  component: () => import(/* webpackChunkName: "edit-page */ '../views/auctions/edit-page.vue'),
  meta: { layout: 'app' },
 },
];

const router = createRouter({
 history: createWebHistory(),
 linkExactActiveClass: 'active',
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

 if (to?.meta?.layout == 'auth') {
  store.setMainLayout('auth');
 } else {
  store.setMainLayout('app');
 }
 next(true);
});
router.afterEach((to, from, next) => {
 appSetting.changeAnimation();
});
export default router;
