import Vue from "vue";
import Router from "vue-router";

import panorama from "../pages/powerMonitorSystem/dataView/panorama.vue";
import dataBoard from "../pages/powerMonitorSystem/dataView/dataBoard.vue";
import highVoltageRoom from "../pages/powerMonitorSystem/resourceAdministrationComponent/highVoltageRoom.vue";
import ammeter from "../pages/powerMonitorSystem/resourceAdministrationComponent/ammeter.vue";
import camera from "../pages/powerMonitorSystem/resourceAdministrationComponent/camera.vue";
import videoIntercom from "../pages/powerMonitorSystem/resourceAdministrationComponent/videoIntercom.vue";
import temperatureSensor from "../pages/powerMonitorSystem/resourceAdministrationComponent/temperatureSensor.vue";
import humiditySensor from "../pages/powerMonitorSystem/resourceAdministrationComponent/humiditySensor.vue";

import meterReadingRecord from "../pages/powerMonitorSystem/dataCollectionComponent/meterReadingRecord.vue";
import alarmLog from "../pages/powerMonitorSystem/dataCollectionComponent/alarmLog.vue";

Vue.use(Router);
const routes = [
  { path: "/powerMonitorSystem/panorama", component: panorama },
  { path: "/powerMonitorSystem/dataBoard", component: dataBoard },
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
