import Vue from "vue";
import Router from "vue-router";

import communityManagementPanorama from "../pages/smartCommunity/communityManagementComponent1/communityManagementPanorama.vue";
import community from "../pages/smartCommunity/communityManagementComponent1/community.vue";
import videoSurveillance from "../pages/smartCommunity/securityComponent1/resourceAdministrationComponent2/videoSurveillance.vue";
import smokeSensor from "../pages/smartCommunity/securityComponent1/resourceAdministrationComponent2/smokeSensor.vue";
import alarmLog from "../pages/smartCommunity/securityComponent1/alarmLog.vue";
import ammeter from "../pages/smartCommunity/energySourceComponent1/resourceAdministrationComponent2/ammeter.vue";
import gasMeter from "../pages/smartCommunity/energySourceComponent1/resourceAdministrationComponent2/gasMeter.vue";
import waterMeter from "../pages/smartCommunity/energySourceComponent1/resourceAdministrationComponent2/waterMeter.vue";
import alarmRecord from "../pages/smartCommunity/energySourceComponent1/alarmLogComponent2/alarmRecord.vue";
import meterReadingRecord from "../pages/smartCommunity/energySourceComponent1/alarmLogComponent2/meterReadingRecord.vue";

Vue.use(Router);
const routes = [
  // { path: "/prepaidMeter/panorama", component: panorama },
  {
    path: "/smartCommunity/communityManagementPanorama",
    component: communityManagementPanorama
  },
  {
    path: "/smartCommunity/communityManagement",
    component: community
  },
  { path: "/smartCommunity/videoSurveillance", component: videoSurveillance },
  { path: "/smartCommunity/smokeSensor", component: smokeSensor },
  { path: "/smartCommunity/alarmLog", component: alarmLog },
  { path: "/smartCommunity/ammeter", component: ammeter },
  { path: "/smartCommunity/gasMeter", component: gasMeter },
  { path: "/smartCommunity/waterMeter", component: waterMeter },
  { path: "/smartCommunity/alarmRecord", component: alarmRecord },
  { path: "/smartCommunity/meterReadingRecord", component: meterReadingRecord },
  { path: "*", component: community }
];
const router = new Router({
  routes
});
export default router;
