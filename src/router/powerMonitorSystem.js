import Vue from "vue";
import Router from "vue-router";

import panorama from "../pages/powerMonitorSystem/resourceAdministrationComponent/panorama";
import highVoltageRoom from "../pages/powerMonitorSystem/resourceAdministrationComponent/highVoltageRoom";
import ammeter from "../pages/powerMonitorSystem/resourceAdministrationComponent/ammeter";
import camera from "../pages/powerMonitorSystem/resourceAdministrationComponent/camera";
import videoIntercom from "../pages/powerMonitorSystem/resourceAdministrationComponent/videoIntercom";
import temperatureSensor from "../pages/powerMonitorSystem/resourceAdministrationComponent/temperatureSensor";
import humiditySensor from "../pages/powerMonitorSystem/resourceAdministrationComponent/humiditySensor";

import meterReadingRecord from "../pages/powerMonitorSystem/dataCollectionComponent/meterReadingRecord";
import alarmLog from "../pages/powerMonitorSystem/dataCollectionComponent/alarmLog";

Vue.use(Router);

const routes = [
  { path: "/powerMonitorSystem/panorama", component: panorama },
  { path: "/powerMonitorSystem/highVoltageRoom", component: highVoltageRoom },
  { path: "/powerMonitorSystem/ammeter", component: ammeter },
  { path: "/powerMonitorSystem/camera", component: camera },
  { path: "/powerMonitorSystem/videoIntercom", component: videoIntercom },
  { path: "/powerMonitorSystem/humiditySensor", component: humiditySensor },
  {
    path: "/powerMonitorSystem/temperatureSensor",
    component: temperatureSensor
  },

  {
    path: "/powerMonitorSystem/meterReadingRecord",
    component: meterReadingRecord
  },
  { path: "/powerMonitorSystem/alarmLog", component: alarmLog },

  { path: "*", component: highVoltageRoom }
];
const router = new Router({
  routes
});
export default router;
