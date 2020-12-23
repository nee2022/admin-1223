import Vue from "vue";
import Router from "vue-router";

import UserAssets from "../pages/UserAssets";

import merchantAccount from "../pages/merchantAsset/merchantAccountComponent/merchantAccount";
import orderRecord from "../pages/merchantAsset/financialManagementComponent/orderRecord";
import shareRecord from "../pages/merchantAsset/financialManagementComponent/shareRecord";
import withdrawalRecord from "../pages/merchantAsset/financialManagementComponent/withdrawalRecord";

import paymentGateway from "../pages/merchantAsset/selfOperatedGatewayComponent/paymentGateway";
import invoiceGateway from "../pages/merchantAsset/selfOperatedGatewayComponent/invoiceGateway";
import smsGateway from "../pages/merchantAsset/selfOperatedGatewayComponent/smsGateway";

import openPlatform from "../pages/merchantAsset/openPlatformComponent/openPlatform";

import companyInformation from "../pages/merchantAsset/companyInformationComponent/companyInformation";

Vue.use(Router);

const routes = [
  { path: "/UserAssets", component: UserAssets },

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
