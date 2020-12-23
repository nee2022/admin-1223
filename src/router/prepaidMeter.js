import Vue from "vue";
import Router from "vue-router";

// import panorama from "../pages/prepaidMeter/paymentOrderComponent/panorama";
import site from "../pages/prepaidMeter/siteManagementComponent/site";

import allOrder from "../pages/prepaidMeter/paymentOrderComponent/allOrder";
import historicalOrder from "../pages/prepaidMeter/paymentOrderComponent/historicalOrder";
import realTimeOrder from "../pages/prepaidMeter/paymentOrderComponent/realTimeOrder";

import billingRule from "../pages/prepaidMeter/billingRuleComponent/billingRule";

import scanCodePackage from "../pages/prepaidMeter/scanCodePackageComponent/scanCodePackage";

Vue.use(Router);

const routes = [
  // { path: "/prepaidMeter/panorama", component: panorama },
  { path: "/prepaidMeter/site", component: site },

  { path: "/prepaidMeter/allOrder", component: allOrder },
  { path: "/prepaidMeter/historicalOrder", component: historicalOrder },
  { path: "/prepaidMeter/realTimeOrder", component: realTimeOrder },

  { path: "/prepaidMeter/billingRule", component: billingRule },

  { path: "/prepaidMeter/scanCodePackage", component: scanCodePackage },

  { path: "*", component: site }
];
const router = new Router({
  routes
});
export default router;
