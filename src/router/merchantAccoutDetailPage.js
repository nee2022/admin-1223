import Vue from "vue";
import Router from "vue-router";

import refresh from "../pages/refresh";

import basicInformation from "../pages/merchantAccoutDetailPage/basicInformationComponent/basicInformation";
import enterpriseInformation from "../pages/merchantAccoutDetailPage/enterpriseInformationComponent/enterpriseInformation";

import shareRecord from "../pages/merchantAccoutDetailPage/settlementRecordComponent/shareDetail";
import transferDetail from "../pages/merchantAccoutDetailPage/settlementRecordComponent/transferDetail";
import withdrawDetail from "../pages/merchantAccoutDetailPage/settlementRecordComponent/withdrawDetail";

import invoiceGateway from "../pages/merchantAccoutDetailPage/selfOperatedGatewayComponent/invoiceGateway";
import paymentGateway from "../pages/merchantAccoutDetailPage/selfOperatedGatewayComponent/paymentGateway";
import smsGateway from "../pages/merchantAccoutDetailPage/selfOperatedGatewayComponent/smsGateway";

Vue.use(Router);

const routes = [
  { path: "/refresh", component: refresh },

  {
    path: "/merchantAccoutDetailPage/basicInformation",
    component: basicInformation
  },
  {
    path: "/merchantAccoutDetailPage/enterpriseInformation",
    component: enterpriseInformation
  },
  {
    path: "/merchantAccoutDetailPage/shareRecord",
    component: shareRecord
  },
  {
    path: "/merchantAccoutDetailPage/transferDetail",
    component: transferDetail
  },
  {
    path: "/merchantAccoutDetailPage/withdrawDetail ",
    component: withdrawDetail
  },
  {
    path: "/merchantAccoutDetailPage/invoiceGateway",
    component: invoiceGateway
  },
  {
    path: "/merchantAccoutDetailPage/paymentGateway",
    component: paymentGateway
  },
  {
    path: "/merchantAccoutDetailPage/smsGateway",
    component: smsGateway
  },

  { path: "*", component: basicInformation }
];
const router = new Router({
  routes
});
export default router;
