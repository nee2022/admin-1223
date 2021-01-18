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
                  <img src="../../assets/images/ziyuanguanli.png" />
                  <span>社区管理</span>
                </template>
                <!-- <router-link to="/smartCommunity/communityManagementPanorama">
                  <el-menu-item index="1-1">
                    <img src="../../assets/images/quanjingtu.png" />
                    <span>全景图</span>
                  </el-menu-item>
                </router-link> -->
                <router-link to="/smartCommunity/communityManagement">
                  <el-menu-item index="1-2">
                    <img src="../../assets/images/zhandian.png" />
                    <span>社区</span>
                  </el-menu-item>
                </router-link>
              </el-submenu>
              <el-submenu index="2">
                <template slot="title">
                  <img src="../../assets/images/jiaofeidingdan.png" />
                  <span>安防</span>
                </template>
                <el-submenu index="2-1">
                  <template slot="title">
                    <img src="../../assets/images/zhandian.png" />
                    <span>资源管理</span>
                  </template>
                  <router-link to="/smartCommunity/videoSurveillance">
                    <el-menu-item index="2-1-1">
                      <img src="../../assets/images/zhandian.png" />
                      <span>视频监控</span>
                    </el-menu-item>
                  </router-link>
                  <router-link to="/smartCommunity/smokeSensor">
                    <el-menu-item index="2-1-2">
                      <img src="../../assets/images/zhandian.png" />
                      <span>烟雾传感器</span>
                    </el-menu-item>
                  </router-link>
                </el-submenu>
                <el-submenu
                  index="2-2"
                  class="arrowIconHidden"
                  @click.native="routerLinkToAlarmlog"
                >
                  <template slot="title">
                    <img src="../../assets/images/zhandian.png" />
                    <span>告警日志</span>
                  </template>
                </el-submenu>
              </el-submenu>
              <el-submenu index="3">
                <template slot="title">
                  <img src="../../assets/images/jiaofeidingdan.png" />
                  <span>能源</span>
                </template>
                <el-submenu index="3-1">
                  <template slot="title">
                    <img src="../../assets/images/zhandian.png" />
                    <span>资源管理</span>
                  </template>
                  <router-link to="/smartCommunity/ammeter">
                    <el-menu-item index="3-1-1">
                      <img src="../../assets/images/zhandian.png" />
                      <span>电表</span>
                    </el-menu-item>
                  </router-link>
                  <router-link to="/smartCommunity/waterMeter">
                    <el-menu-item index="3-1-2">
                      <img src="../../assets/images/zhandian.png" />
                      <span>水表</span>
                    </el-menu-item>
                  </router-link>
                  <router-link to="/smartCommunity/gasMeter">
                    <el-menu-item index="3-1-3">
                      <img src="../../assets/images/zhandian.png" />
                      <span>气表</span>
                    </el-menu-item>
                  </router-link>
                </el-submenu>
                <el-submenu index="3-2">
                  <template slot="title">
                    <img src="../../assets/images/zhandian.png" />
                    <span>告警日志</span>
                  </template>
                  <router-link to="/smartCommunity/meterReadingRecord">
                    <el-menu-item index="3-2-1">
                      <img src="../../assets/images/zhandian.png" />
                      <span>抄表记录</span>
                    </el-menu-item>
                  </router-link>
                  <router-link to="/smartCommunity/alarmRecord">
                    <el-menu-item index="3-2-2">
                      <img src="../../assets/images/zhandian.png" />
                      <span>告警记录</span>
                    </el-menu-item>
                  </router-link>
                </el-submenu>
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
import router from "../../router/smartCommunity";
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
    routerLinkToAlarmlog() {
      this.$router.push({ path: `/smartCommunity/alarmLog` });
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
