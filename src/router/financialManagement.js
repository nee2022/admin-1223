import Vue from "vue";
import Router from "vue-router";

import dataBoard from "../pages/financialManagement/dataViewComponent/dataBoard.vue";

import allOrder from "../pages/financialManagement/orderFormComponent/allOrder";
import realTimeOrder from "../pages/financialManagement/orderFormComponent/realTimeOrder";
import refundOrder from "../pages/financialManagement/orderFormComponent/refundOrder";

import allInvoiceRecord from "../pages/financialManagement/invoiceRecordComponent/allInvoiceRecord";
import issuedInvoiceRecord from "../pages/financialManagement/invoiceRecordComponent/issuedInvoiceRecord";
import pendingInvoiceRecord from "../pages/financialManagement/invoiceRecordComponent/pendingInvoiceRecord";

import allSettlementRecord from "../pages/financialManagement/settlementRecordComponent/allSettlementRecord";
import transferRecord from "../pages/financialManagement/settlementRecordComponent/transferRecord";
import shareRecord from "../pages/financialManagement/settlementRecordComponent/shareRecord";

import allWithdrawalRecord from "../pages/financialManagement/withdrawalRecordComponent/allWithdrawalRecord";
import pendingWithdrawalRecord from "../pages/financialManagement/withdrawalRecordComponent/pendingWithdrawalRecord";
import issuedWithdrawalRecord from "../pages/financialManagement/withdrawalRecordComponent/issuedWithdrawalRecord";

import incomeReport from "../pages/financialManagement/statisticalReportComponent/incomeReport.vue";
import settlementReport from "../pages/financialManagement/statisticalReportComponent/settlementReport.vue";

Vue.use(Router);

const routes = [
  { path: "/financialManagement/dataBoard", component: dataBoard },

  { path: "/financialManagement/allOrder", component: allOrder },
  { path: "/financialManagement/realTimeOrder", component: realTimeOrder },
  { path: "/financialManagement/refundOrder", component: refundOrder },

  {
    path: "/financialManagement/allInvoiceRecord",
    component: allInvoiceRecord
  },
  {
    path: "/financialManagement/issuedInvoiceRecord",
    component: issuedInvoiceRecord
  },
  {
    path: "/financialManagement/pendingInvoiceRecord",
    component: pendingInvoiceRecord
  },

  {
    path: "/financialManagement/allSettlementRecord",
    component: allSettlementRecord
  },
  { path: "/financialManagement/transferRecord", component: transferRecord },
  { path: "/financialManagement/shareRecord", component: shareRecord },

  {
    path: "/financialManagement/allWithdrawalRecord",
    component: allWithdrawalRecord
  },
  {
    path: "/financialManagement/pendingWithdrawalRecord",
    component: pendingWithdrawalRecord
  },
  {
    path: "/financialManagement/issuedWithdrawalRecord",
    component: issuedWithdrawalRecord
  },
  {
    path: "/financialManagement/incomeReport",
    component: incomeReport
  },
  {
    path: "/financialManagement/settlementReport",
    component: settlementReport
  },

  { path: "*", component: allOrder }
];
const router = new Router({
  routes
});
export default router;
