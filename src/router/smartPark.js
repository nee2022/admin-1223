import Vue from "vue";
import Router from "vue-router";

import parkManagementPanorama from "../pages/smartPark/parkManagementComponent1/parkManagementPanorama.vue";
import park from "../pages/smartPark/parkManagementComponent1/park.vue";
import doorSecurity from "../pages/smartPark/throughManagementComponent1/resourceAdministrationComponent2/doorSecurity.vue";
import sidewalkGate from "../pages/smartPark/throughManagementComponent1/resourceAdministrationComponent2/sidewalkGate.vue";
import elevator from "../pages/smartPark/throughManagementComponent1/resourceAdministrationComponent2/elevator.vue";
import identification from "../pages/smartPark/throughManagementComponent1/passRuleComponent2/identification.vue";
import registrationNumber from "../pages/smartPark/throughManagementComponent1/passRuleComponent2/registrationNumber.vue";
import onePass from "../pages/smartPark/throughManagementComponent1/passRuleComponent2/onePass.vue";
import accessRecord from "../pages/smartPark/throughManagementComponent1/accessRecordComponent2/accessRecord.vue";
import resourceAdministrationPanorama from "../pages/smartPark/parkingManagementComponent1/resourceAdministrationComponent2/resourceAdministrationPanorama.vue";
import parkingLot from "../pages/smartPark/parkingManagementComponent1/resourceAdministrationComponent2/parkingLot.vue";
import allPassingRecord from "../pages/smartPark/parkingManagementComponent1/passingRecordComponent2/allPassingRecord.vue";
import realTimePassingRecord from "../pages/smartPark/parkingManagementComponent1/passingRecordComponent2/realTimePassingRecord.vue";
import historicalPassingRecord from "../pages/smartPark/parkingManagementComponent1/passingRecordComponent2/historicalPassingRecord.vue";
import exceptionRecord from "../pages/smartPark/parkingManagementComponent1/passingRecordComponent2/exceptionRecord.vue";
import videoSurveillance from "../pages/smartPark/securityComponent1/resourceAdministrationComponent2/videoSurveillance.vue";
import smokeSensor from "../pages/smartPark/securityComponent1/resourceAdministrationComponent2/smokeSensor.vue";
import alarmLog from "../pages/smartPark/securityComponent1/alarmLog.vue";
import ammeter from "../pages/smartPark/energySourceComponent1/resourceAdministrationComponent2/ammeter.vue";
import gasMeter from "../pages/smartPark/energySourceComponent1/resourceAdministrationComponent2/gasMeter.vue";
import waterMeter from "../pages/smartPark/energySourceComponent1/resourceAdministrationComponent2/waterMeter.vue";
import alarmRecord from "../pages/smartPark/energySourceComponent1/alarmLogComponent2/alarmRecord.vue";
import meterReadingRecord from "../pages/smartPark/energySourceComponent1/alarmLogComponent2/meterReadingRecord.vue";
import environmentPanorama from "../pages/smartPark/environmentComponent1/resourceAdministrationComponent2/environmentPanorama.vue";
import AQIsensor from "../pages/smartPark/environmentComponent1/resourceAdministrationComponent2/AQIsensor.vue";
import realTimeAQI from "../pages/smartPark/environmentComponent1/AQIcomponent2/realTimeAQI.vue";
import historicalAQI from "../pages/smartPark/environmentComponent1/AQIcomponent2/historicalAQI.vue";
import parkingCharge from "../pages/smartPark/paymentManagementComponent1/chargingRuleComponent2/parkingCharge.vue";
import propertyCost from "../pages/smartPark/paymentManagementComponent1/chargingRuleComponent2/propertyCost.vue";
import allBill from "../pages/smartPark/paymentManagementComponent1/billComponent2/allBill.vue";
import parkingBill from "../pages/smartPark/paymentManagementComponent1/billComponent2/parkingBill.vue";
import propertyBill from "../pages/smartPark/paymentManagementComponent1/billComponent2/propertyBill.vue";

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
