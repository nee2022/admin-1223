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
              <el-submenu index="0">
                <template slot="title">
                  <img src="../../assets/images/ziyuanguanli.png" />
                  <span>数据视图</span>
                </template>
                <router-link to="/powerMonitorSystem/dataBoard">
                  <el-menu-item index="1-1">
                    <img src="../../assets/images/quanjingtu.png" />
                    <span>数据看板</span>
                  </el-menu-item>
                </router-link>
                <router-link to="/powerMonitorSystem/panorama">
                  <el-menu-item index="1-2">
                    <img src="../../assets/images/zhandian.png" />
                    <span>全景图</span>
                  </el-menu-item>
                </router-link>
              </el-submenu>
              <el-submenu index="1">
                <template slot="title">
                  <img src="../../assets/images/ziyuanguanli.png" />
                  <span>资源管理</span>
                </template>
                <!-- <router-link to="/powerMonitorSystem/panorama">
                  <el-menu-item index="1-1">
                    <img src="../../assets/images/quanjingtu.png" />
                    <span>全景图</span>
                  </el-menu-item>
                </router-link> -->
                <router-link to="/powerMonitorSystem/highVoltageRoom">
                  <el-menu-item index="1-2">
                    <img src="../../assets/images/zhandian.png" />
                    <span>高压房</span>
                  </el-menu-item>
                </router-link>
                <router-link to="/powerMonitorSystem/ammeter">
                  <el-menu-item index="1-2">
                    <img src="../../assets/images/zhandian.png" />
                    <span>电表</span>
                  </el-menu-item>
                </router-link>
                <router-link to="/powerMonitorSystem/camera">
                  <el-menu-item index="1-3">
                    <img src="../../assets/images/zhandian.png" />
                    <span>摄像头</span>
                  </el-menu-item>
                </router-link>
                <router-link to="/powerMonitorSystem/videoIntercom">
                  <el-menu-item index="1-4">
                    <img src="../../assets/images/zhandian.png" />
                    <span>视频对讲机</span>
                  </el-menu-item>
                </router-link>
                <router-link to="/powerMonitorSystem/temperatureSensor">
                  <el-menu-item index="1-5">
                    <img src="../../assets/images/zhandian.png" />
                    <span>温度传感器</span>
                  </el-menu-item>
                </router-link>
                <router-link to="/powerMonitorSystem/humiditySensor">
                  <el-menu-item index="1-6">
                    <img src="../../assets/images/zhandian.png" />
                    <span>湿度传感器</span>
                  </el-menu-item>
                </router-link>
              </el-submenu>
              <el-submenu index="2">
                <template slot="title">
                  <img src="../../assets/images/jiaofeidingdan.png" />
                  <span>数据采集</span>
                </template>
                <router-link to="/powerMonitorSystem/meterReadingRecord">
                  <el-menu-item index="1-1">
                    <img src="../../assets/images/all.png" />
                    <span>抄表记录</span>
                  </el-menu-item>
                </router-link>
                <router-link to="/powerMonitorSystem/alarmLog">
                  <el-menu-item index="1-2">
                    <img src="../../assets/images/shishidingdan.png" />
                    <span>告警日志</span>
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
import router from "../../router/powerMonitorSystem";
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
    routerLinkScanCodePackage() {
      this.$router.push({ path: `/smartSocket/scanCodePackage` });
    },
    //路由跳转
    routerLinkBillingRule() {
      this.$router.push({ path: `/smartSocket/billingRule` });
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
