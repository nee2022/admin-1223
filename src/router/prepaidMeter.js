import Vue from "vue";
import Router from "vue-router";

// import panorama from "../pages/prepaidMeter/paymentOrderComponent/panorama";
import site from "../pages/prepaidMeter/siteManagementComponent/site.vue";
import ammeter from "../pages/prepaidMeter/resourceAdministrationComponent/ammeter.vue";

import allOrder from "../pages/prepaidMeter/paymentOrderComponent/allOrder.vue";
import historicalOrder from "../pages/prepaidMeter/paymentOrderComponent/historicalOrder.vue";
import realTimeOrder from "../pages/prepaidMeter/paymentOrderComponent/realTimeOrder";

import billingRule from "../pages/prepaidMeter/billingRuleComponent/billingRule.vue";

import scanCodePackage from "../pages/prepaidMeter/scanCodePackageComponent/scanCodePackage.vue";

Vue.use(Router);

const routes = [
  // { path: "/prepaidMeter/panorama", component: panorama },
  { path: "/prepaidMeter/site", component: site },

  { path: "/prepaidMeter/ammeter", component: ammeter },

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
