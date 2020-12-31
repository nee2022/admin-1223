import Vue from "vue";
import Router from "vue-router";

import communityManagementPanorama from "../pages/smartCommunity/communityManagementComponent1/communityManagementPanorama";
import community from "../pages/smartCommunity/communityManagementComponent1/community";
import videoSurveillance from "../pages/smartCommunity/securityComponent1/resourceAdministrationComponent2/videoSurveillance";
import smokeSensor from "../pages/smartCommunity/securityComponent1/resourceAdministrationComponent2/smokeSensor";
import alarmLog from "../pages/smartCommunity/securityComponent1/alarmLog";
import ammeter from "../pages/smartCommunity/energySourceComponent1/resourceAdministrationComponent2/ammeter";
import gasMeter from "../pages/smartCommunity/energySourceComponent1/resourceAdministrationComponent2/gasMeter";
import waterMeter from "../pages/smartCommunity/energySourceComponent1/resourceAdministrationComponent2/waterMeter";
import alarmRecord from "../pages/smartCommunity/energySourceComponent1/alarmLogComponent2/alarmRecord";
import meterReadingRecord from "../pages/smartCommunity/energySourceComponent1/alarmLogComponent2/meterReadingRecord";

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
