import Vue from "vue";
import Router from "vue-router";

import parkManagementPanorama from "../pages/smartPark/parkManagementComponent1/parkManagementPanorama";
import park from "../pages/smartPark/parkManagementComponent1/park";
import doorSecurity from "../pages/smartPark/throughManagementComponent1/resourceAdministrationComponent2/doorSecurity";
import sidewalkGate from "../pages/smartPark/throughManagementComponent1/resourceAdministrationComponent2/sidewalkGate";
import elevator from "../pages/smartPark/throughManagementComponent1/resourceAdministrationComponent2/elevator";
import identification from "../pages/smartPark/throughManagementComponent1/passRuleComponent2/identification";
import registrationNumber from "../pages/smartPark/throughManagementComponent1/passRuleComponent2/registrationNumber";
import onePass from "../pages/smartPark/throughManagementComponent1/passRuleComponent2/onePass";
import accessRecord from "../pages/smartPark/throughManagementComponent1/accessRecordComponent2/accessRecord";
import resourceAdministrationPanorama from "../pages/smartPark/parkingManagementComponent1/resourceAdministrationComponent2/resourceAdministrationPanorama";
import parkingLot from "../pages/smartPark/parkingManagementComponent1/resourceAdministrationComponent2/parkingLot";
import allPassingRecord from "../pages/smartPark/parkingManagementComponent1/passingRecordComponent2/allPassingRecord";
import realTimePassingRecord from "../pages/smartPark/parkingManagementComponent1/passingRecordComponent2/realTimePassingRecord";
import historicalPassingRecord from "../pages/smartPark/parkingManagementComponent1/passingRecordComponent2/historicalPassingRecord";
import exceptionRecord from "../pages/smartPark/parkingManagementComponent1/passingRecordComponent2/exceptionRecord";
import videoSurveillance from "../pages/smartPark/securityComponent1/resourceAdministrationComponent2/videoSurveillance";
import smokeSensor from "../pages/smartPark/securityComponent1/resourceAdministrationComponent2/smokeSensor";
import alarmLog from "../pages/smartPark/securityComponent1/alarmLog";
import ammeter from "../pages/smartPark/energySourceComponent1/resourceAdministrationComponent2/ammeter";
import gasMeter from "../pages/smartPark/energySourceComponent1/resourceAdministrationComponent2/gasMeter";
import waterMeter from "../pages/smartPark/energySourceComponent1/resourceAdministrationComponent2/waterMeter";
import alarmRecord from "../pages/smartPark/energySourceComponent1/alarmLogComponent2/alarmRecord";
import meterReadingRecord from "../pages/smartPark/energySourceComponent1/alarmLogComponent2/meterReadingRecord";
import environmentPanorama from "../pages/smartPark/environmentComponent1/resourceAdministrationComponent2/environmentPanorama";
import AQIsensor from "../pages/smartPark/environmentComponent1/resourceAdministrationComponent2/AQIsensor";
import realTimeAQI from "../pages/smartPark/environmentComponent1/AQIcomponent2/realTimeAQI";
import historicalAQI from "../pages/smartPark/environmentComponent1/AQIcomponent2/historicalAQI";
import parkingCharge from "../pages/smartPark/paymentManagementComponent1/chargingRuleComponent2/parkingCharge";
import propertyCost from "../pages/smartPark/paymentManagementComponent1/chargingRuleComponent2/propertyCost";
import allBill from "../pages/smartPark/paymentManagementComponent1/billComponent2/allBill";
import parkingBill from "../pages/smartPark/paymentManagementComponent1/billComponent2/parkingBill";
import propertyBill from "../pages/smartPark/paymentManagementComponent1/billComponent2/propertyBill";

Vue.use(Router);

const routes = [
  {
    path: "/smartPark/park/parkManagementPanorama",
    component: parkManagementPanorama
  },
  { path: "/smartPark/park", component: park },
  { path: "/smartPark/doorSecurity", component: doorSecurity },
  { path: "/smartPark/sidewalkGate", component: sidewalkGate },
  { path: "/smartPark/elevator", component: elevator },
  { path: "/smartPark/identification", component: identification },
  { path: "/smartPark/registrationNumber", component: registrationNumber },
  { path: "/smartPark/onePass", component: onePass },
  { path: "/smartPark/accessRecord", component: accessRecord },
  {
    path: "/smartPark/resourceAdministrationPanorama",
    component: resourceAdministrationPanorama
  },
  { path: "/smartPark/parkingLot", component: parkingLot },
  { path: "/smartPark/allPassingRecord", component: allPassingRecord },
  {
    path: "/smartPark/realTimePassingRecord",
    component: realTimePassingRecord
  },
  {
    path: "/smartPark/historicalPassingRecord",
    component: historicalPassingRecord
  },
  { path: "/smartPark/exceptionRecord", component: exceptionRecord },
  { path: "/smartPark/videoSurveillance", component: videoSurveillance },
  { path: "/smartPark/smokeSensor", component: smokeSensor },
  { path: "/smartPark/alarmLog", component: alarmLog },
  { path: "/smartPark/ammeter", component: ammeter },
  { path: "/smartPark/gasMeter", component: gasMeter },
  { path: "/smartPark/waterMeter", component: waterMeter },
  { path: "/smartPark/alarmRecord", component: alarmRecord },
  { path: "/smartPark/meterReadingRecord", component: meterReadingRecord },
  { path: "/smartPark/environmentPanorama", component: environmentPanorama },
  { path: "/smartPark/AQIsensor", component: AQIsensor },
  { path: "/smartPark/realTimeAQI", component: realTimeAQI },
  { path: "/smartPark/historicalAQI", component: historicalAQI },
  { path: "/smartPark/parkingCharge", component: parkingCharge },
  { path: "/smartPark/propertyCost", component: propertyCost },
  { path: "/smartPark/allBill", component: allBill },
  { path: "/smartPark/parkingBill", component: parkingBill },
  { path: "/smartPark/propertyBill", component: propertyBill },

  { path: "*", component: park }
];
const router = new Router({
  routes
});
export default router;
