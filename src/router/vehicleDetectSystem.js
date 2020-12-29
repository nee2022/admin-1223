import Vue from "vue";
import Router from "vue-router";

import panorama from "../pages/vehicleDetectSystem/resourceAdministrationComponent/panorama";
import vehicle from "../pages/vehicleDetectSystem/resourceAdministrationComponent/vehicle";

import trackPlayback from "../pages/vehicleDetectSystem/vehicleMonitorComponent/trackPlayback";
import extremeValueMonitor from "../pages/vehicleDetectSystem/vehicleMonitorComponent/extremeValueMonitor";
import errorAlarm from "../pages/vehicleDetectSystem/vehicleMonitorComponent/errorAlarm";

Vue.use(Router);

const routes = [
  { path: "/vehicleDetectSystem/panorama", component: panorama },
  { path: "/vehicleDetectSystem/vehicle", component: vehicle },

  { path: "/vehicleDetectSystem/trackPlayback", component: trackPlayback },
  {
    path: "/vehicleDetectSystem/extremeValueMonitor",
    component: extremeValueMonitor
  },
  {
    path: "/vehicleDetectSystem/errorAlarm",
    component: errorAlarm
  },

  { path: "*", component: vehicle }
];
const router = new Router({
  routes
});
export default router;
