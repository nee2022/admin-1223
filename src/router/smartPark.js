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

  { path: "*", component: park }
];
const router = new Router({
  routes
});
export default router;
