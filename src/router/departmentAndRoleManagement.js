import Vue from "vue";
import Router from "vue-router";

import refresh from "../pages/refresh";
import roleManagement from "../pages/departmentAndRoleManagement/roleManagementComponent/roleManagement";

import departmentManagement from "../pages/departmentAndRoleManagement/departmentManagementComponent/departmentManagement";

Vue.use(Router);

const routes = [
  { path: "/refresh", component: refresh },
  {
    path: "/departmentAndRoleManagement/roleManagement",
    component: roleManagement
  },

  {
    path: "/departmentAndRoleManagement/departmentManagement",
    component: departmentManagement
  },

  { path: "*", component: departmentManagement }
];
const router = new Router({
  routes
});
export default router;
