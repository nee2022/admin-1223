import Vue from "vue";
import Router from "vue-router";

import refresh from "../pages/refresh";

import dataBoard from "../pages/merchantAsset/dataViewComponent/dataBoard.vue";
import merchantAccount from "../pages/merchantAsset/merchantAccountComponent/merchantAccount.vue";
import orderRecord from "../pages/merchantAsset/financialManagementComponent/orderRecord.vue";
import shareRecord from "../pages/merchantAsset/financialManagementComponent/shareRecord.vue";
import withdrawalRecord from "../pages/merchantAsset/financialManagementComponent/withdrawalRecord.vue";

import paymentGateway from "../pages/merchantAsset/selfOperatedGatewayComponent/paymentGateway.vue";
import invoiceGateway from "../pages/merchantAsset/selfOperatedGatewayComponent/invoiceGateway.vue";
import smsGateway from "../pages/merchantAsset/selfOperatedGatewayComponent/smsGateway.vue";

import openPlatform from "../pages/merchantAsset/openPlatformComponent/openPlatform.vue";

import companyInformation from "../pages/merchantAsset/companyInformationComponent/companyInformation.vue";

Vue.use(Router);

const routes = [
  { path: "/refresh", component: refresh },

  { path: "/merchantAsset/dataBoard", component: dataBoard },

  { path: "/merchantAsset/orderRecord", component: orderRecord },
  { path: "/merchantAsset/shareRecord", component: shareRecord },
  { path: "/merchantAsset/withdrawalRecord", component: withdrawalRecord },

  { path: "/merchantAsset/paymentGateway", component: paymentGateway },
  { path: "/merchantAsset/invoiceGateway", component: invoiceGateway },
  { path: "/merchantAsset/smsGateway", component: smsGateway },

  { path: "/merchantAsset/openPlatform", component: openPlatform },

  { path: "/merchantAsset/companyInformation", component: companyInformation },

  { path: "*", component: merchantAccount }
];
const router = new Router({
  routes
});
export default router;
