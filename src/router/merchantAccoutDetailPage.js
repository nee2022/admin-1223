import Vue from "vue";
import Router from "vue-router";

import refresh from "../pages/refresh";

import basicInformation from "../pages/merchantAccoutDetailPage/basicInformationComponent/basicInformation";
import shareRecord from "../pages/merchantAccoutDetailPage/settlementRecordComponent/shareDetail";
import transferDetail from "../pages/merchantAccoutDetailPage/settlementRecordComponent/transferDetail";

const routes = [
  { path: "/refresh", component: refresh },

  {
    path: "/merchantAccoutDetailPage/basicInformation",
    component: basicInformation
  },
  {
    path: "/merchantAccoutDetailPage/shareRecord",
    component: shareRecord
  },
  {
    path: "/merchantAccoutDetailPage/transferDetail",
    component: transferDetail
  },

  { path: "*", component: basicInformation }
];
const router = new Router({
  routes
});
export default router;
