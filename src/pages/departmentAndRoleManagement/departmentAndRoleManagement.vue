<template>
  <div class="zyhAsidePage">
    <aside>
      <div class="logo">
        <a href="/#/summary">
          <span><img :src="loginConfig.imgs"/></span>
        </a>
      </div>
      <nav>
        <el-row>
          <el-col :span="12">
            <el-menu
              default-active="2"
              @open="handleOpen"
              @close="handleClose"
              background-color="#1e69fe"
              text-color="#fff"
              active-text-color="white"
              unique-opened
            >
              <el-submenu
                index="1"
                class="arrowIconHidden"
                @click.native="routerLinkDepartmentManagement"
              >
                <template slot="title">
                  <img src="../../assets/images/Department of management.png" />
                  <span slot="title">部门管理</span>
                </template>
              </el-submenu>
              <!-- <el-submenu
                index="2"
                class="arrowIconHidden"
                @click.native="routerLinkRoleManagement"
              >
                <template slot="title">
                  <img src="../../assets/images/Role management.png" />
                  <span slot="title">角色管理</span>
                </template>
              </el-submenu> -->
            </el-menu>
          </el-col>
        </el-row>
      </nav>
    </aside>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import router from "../../router/departmentAndRoleManagement";
import { loginConfig } from "../../config.js";
export default {
  router,
  data() {
    return {
      loginConfig
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
      console.log(this.option);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    //路由跳转
    routerLinkDepartmentManagement() {
      this.$router.push({
        path: `/departmentAndRoleManagement/departmentManagement`
      });
    },
    //路由跳转
    routerLinkRoleManagement() {
      this.$router.push({
        path: `/departmentAndRoleManagement/roleManagement`
      });
    },
    //弹出框
    tcClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    }
  }
};
</script>

<style lang="stylus" scoped></style>
