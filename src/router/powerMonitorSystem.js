import Vue from "vue";
import Router from "vue-router";

import highVoltageRoom from "../pages/powerMonitorSystem/resourceAdministrationComponent/highVoltageRoom";
import meterReadRecord from "../pages/powerMonitorSystem/dataCollectionComponent/meterReadRecord";

const routes = [
  { path: "/powerMonitorSystem/highVoltageRoom", component: highVoltageRoom },

  { path: "/powerMonitorSystem/meterReadRecord", component: meterReadRecord },
  { path: "*", component: highVoltageRoom }
];
const router = new Router({
  routes
});
export default router;
