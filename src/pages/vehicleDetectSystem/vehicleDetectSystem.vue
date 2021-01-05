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
              <el-submenu index="1">
                <template slot="title">
                  <img src="../../assets/images/dingdanjilu.png" />
                  <span>资源管理</span>
                </template>
                <!-- <router-link to="/vehicleDetectSystem/panorama">
                  <el-menu-item index="1-1">
                    <img src="../../assets/images/all.png" />
                    <span>全景图</span>
                  </el-menu-item>
                </router-link> -->
                <router-link to="/vehicleDetectSystem/vehicle">
                  <el-menu-item index="1-2">
                    <img src="../../assets/images/shishidingdan.png" />
                    <span>车辆</span>
                  </el-menu-item>
                </router-link>
              </el-submenu>
              <el-submenu index="2">
                <template slot="title">
                  <img src="../../assets/images/kaipiaojilu.png" />
                  <span>车辆检测</span>
                </template>
                <router-link to="/vehicleDetectSystem/trackPlayback">
                  <el-menu-item index="1-1">
                    <img src="../../assets/images/all.png" />
                    <span>轨迹回放</span>
                  </el-menu-item>
                </router-link>
                <router-link to="/vehicleDetectSystem/extremeValueMonitor">
                  <el-menu-item index="1-2">
                    <img src="../../assets/images/yichupiao.png" />
                    <span>极值监控</span>
                  </el-menu-item>
                </router-link>
                <router-link to="/vehicleDetectSystem/errorAlarm">
                  <el-menu-item index="1-3">
                    <img src="../../assets/images/daishenhe.png" />
                    <span>故障报警</span>
                  </el-menu-item>
                </router-link>
              </el-submenu>
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
import router from "../../router/vehicleDetectSystem";
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
