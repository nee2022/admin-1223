import Vue from "vue";
import Router from "vue-router";

// import panorama from "../pages/smartSocket/siteManagementComponent/panorama";
import site from "../pages/smartSocket/siteManagementComponent/site.vue";

import socket from "../pages/smartSocket/resourceAdministrationComponent/socket.vue";

import allOrder from "../pages/smartSocket/paymentOrderComponent/allOrder.vue";
import historicalOrder from "../pages/smartSocket/paymentOrderComponent/historicalOrder.vue";
import realTimeOrder from "../pages/smartSocket/paymentOrderComponent/realTimeOrder.vue";

import billingRule from "../pages/smartSocket/billingRuleComponent/billingRule.vue";

import scanCodePackage from "../pages/smartSocket/scanCodePackageComponent/scanCodePackage.vue";

Vue.use(Router);

const routes = [
  { path: "/smartSocket/site", component: site },
  // { path: "/smartSocket/panorama", component: panorama },

  { path: "/smartSocket/socket", component: socket },

  { path: "/smartSocket/allOrder", component: allOrder },
  { path: "/smartSocket/historicalOrder", component: historicalOrder },
  { path: "/smartSocket/realTimeOrder", component: realTimeOrder },

  { path: "/smartSocket/billingRule", component: billingRule },

  { path: "/smartSocket/scanCodePackage", component: scanCodePackage },

  { path: "*", component: site }
];
const router = new Router({
  routes
});
export default router;
