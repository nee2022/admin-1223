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
                  <span>园区管理</span>
                </template>
                <!-- <router-link to="/smartPark/park/panorama">
                  <el-menu-item index="1-1">
                    <img src="../../assets/images/quanjingtu.png" />
                    <span>全景图</span>
                  </el-menu-item>
                </router-link> -->
                <router-link to="/smartPark/park">
                  <el-menu-item index="1-2">
                    <img src="../../assets/images/zhandian.png" />
                    <span>园区</span>
                  </el-menu-item>
                </router-link>
              </el-submenu>
              <el-submenu index="2">
                <template slot="title">
                  <img src="../../assets/images/jiaofeidingdan.png" />
                  <span>通行管理</span>
                </template>
                <el-submenu index="2-1">
                  <template slot="title">
                    <img src="../../assets/images/zhandian.png" />
                    <span>资源管理</span>
                  </template>
                  <router-link to="/smartPark/doorSecurity">
                    <el-menu-item index="2-1-1">
                      <img src="../../assets/images/zhandian.png" />
                      <span>门禁</span>
                    </el-menu-item>
                  </router-link>
                  <router-link to="/smartPark/sidewalkGate">
                    <el-menu-item index="2-1-2">
                      <img src="../../assets/images/zhandian.png" />
                      <span>人行道闸</span>
                    </el-menu-item>
                  </router-link>
                  <router-link to="/smartPark/elevator">
                    <el-menu-item index="2-1-3">
                      <img src="../../assets/images/zhandian.png" />
                      <span>电梯</span>
                    </el-menu-item>
                  </router-link>
                </el-submenu>
                <el-submenu index="2-2">
                  <template slot="title">
                    <img src="../../assets/images/zhandian.png" />
                    <span>通行规则</span>
                  </template>
                  <router-link to="/smartPark/identification">
                    <el-menu-item index="2-2-1">
                      <img src="../../assets/images/zhandian.png" />
                      <span>账号</span>
                    </el-menu-item>
                  </router-link>
                  <router-link to="/smartPark/registrationNumber">
                    <el-menu-item index="2-2-2">
                      <img src="../../assets/images/zhandian.png" />
                      <span>车牌</span>
                    </el-menu-item>
                  </router-link>
                  <router-link to="/smartPark/onePass">
                    <el-menu-item index="2-2-3">
                      <img src="../../assets/images/zhandian.png" />
                      <span>一卡通</span>
                    </el-menu-item>
                  </router-link>
                </el-submenu>
                <el-submenu
                  index="2-3"
                  class="arrowIconHidden"
                  @click.native="routerLinkToAccessRecord"
                >
                  <template slot="title">
                    <img src="../../assets/images/zhandian.png" />
                    <span>出入记录</span>
                  </template>
                </el-submenu>
              </el-submenu>
              <el-submenu index="3">
                <template slot="title">
                  <img src="../../assets/images/jiaofeidingdan.png" />
                  <span>停车管理</span>
                </template>
                <el-submenu index="3-1">
                  <template slot="title">
                    <img src="../../assets/images/zhandian.png" />
                    <span>资源管理</span>
                  </template>
                  <!-- <el-menu-item index="3-1-1">
                    <router-link to="/smartPark/resourceAdministrationPanorama">
                      <img src="../../assets/images/zhandian.png" />
                      <span>全景图</span>
                    </router-link>
                  </el-menu-item> -->
                  <router-link to="/smartPark/parkingLot">
                    <el-menu-item index="3-1-2">
                      <img src="../../assets/images/zhandian.png" />
                      <span>停车场</span>
                    </el-menu-item>
                  </router-link>
                </el-submenu>
                <el-submenu index="3-2">
                  <template slot="title">
                    <img src="../../assets/images/zhandian.png" />
                    <span>过车记录</span>
                  </template>
                  <router-link to="/smartPark/allPassingRecord">
                    <el-menu-item index="3-2-1">
                      <img src="../../assets/images/zhandian.png" />
                      <span>所有记录</span>
                    </el-menu-item>
                  </router-link>
                  <router-link to="/smartPark/realTimePassingRecord">
                    <el-menu-item index="3-2-2">
                      <img src="../../assets/images/zhandian.png" />
                      <span>实时停车</span>
                    </el-menu-item>
                  </router-link>
                  <router-link to="/smartPark/historicalPassingRecord">
                    <el-menu-item index="3-2-3">
                      <img src="../../assets/images/zhandian.png" />
                      <span>历史记录</span>
                    </el-menu-item>
                  </router-link>
                  <router-link to="/smartPark/exceptionRecord">
                    <el-menu-item index="3-2-4">
                      <img src="../../assets/images/zhandian.png" />
                      <span>异常记录</span>
                    </el-menu-item>
                  </router-link>
                </el-submenu>
              </el-submenu>
              <el-submenu index="4">
                <template slot="title">
                  <img src="../../assets/images/jiaofeidingdan.png" />
                  <span>安防</span>
                </template>
                <el-submenu index="4-1">
                  <template slot="title">
                    <img src="../../assets/images/zhandian.png" />
                    <span>资源管理</span>
                  </template>
                  <router-link to="/smartPark/videoSurveillance">
                    <el-menu-item index="4-1-1">
                      <img src="../../assets/images/zhandian.png" />
                      <span>视频监控</span>
                    </el-menu-item>
                  </router-link>
                  <router-link to="/smartPark/smokeSensor">
                    <el-menu-item index="4-1-2">
                      <img src="../../assets/images/zhandian.png" />
                      <span>烟雾传感器</span>
                    </el-menu-item>
                  </router-link>
                </el-submenu>
                <el-submenu
                  index="4-2"
                  class="arrowIconHidden"
                  @click.native="routerLinkToAlarmlog"
                >
                  <template slot="title">
                    <img src="../../assets/images/zhandian.png" />
                    <span>告警日志</span>
                  </template>
                </el-submenu>
              </el-submenu>
              <el-submenu index="5">
                <template slot="title">
                  <img src="../../assets/images/jiaofeidingdan.png" />
                  <span>能源</span>
                </template>
                <el-submenu index="5-1">
                  <template slot="title">
                    <img src="../../assets/images/zhandian.png" />
                    <span>资源管理</span>
                  </template>
                  <router-link to="/smartPark/ammeter">
                    <el-menu-item index="5-1-1">
                      <img src="../../assets/images/zhandian.png" />
                      <span>电表</span>
                    </el-menu-item>
                  </router-link>
                  <router-link to="/smartPark/waterMeter">
                    <el-menu-item index="5-1-2">
                      <img src="../../assets/images/zhandian.png" />
                      <span>水表</span>
                    </el-menu-item>
                  </router-link>
                  <router-link to="/smartPark/gasMeter">
                    <el-menu-item index="5-1-3">
                      <img src="../../assets/images/zhandian.png" />
                      <span>气表</span>
                    </el-menu-item>
                  </router-link>
                </el-submenu>
                <el-submenu index="5-2">
                  <template slot="title">
                    <img src="../../assets/images/zhandian.png" />
                    <span>告警日志</span>
                  </template>
                  <router-link to="/smartPark/meterReadingRecord">
                    <el-menu-item index="5-2-1">
                      <img src="../../assets/images/zhandian.png" />
                      <span>抄表记录</span>
                    </el-menu-item>
                  </router-link>
                  <router-link to="/smartPark/alarmRecord">
                    <el-menu-item index="5-2-2">
                      <img src="../../assets/images/zhandian.png" />
                      <span>告警记录</span>
                    </el-menu-item>
                  </router-link>
                </el-submenu>
              </el-submenu>
              <el-submenu index="6">
                <template slot="title">
                  <img src="../../assets/images/jiaofeidingdan.png" />
                  <span>环境</span>
                </template>
                <el-submenu index="6-1">
                  <template slot="title"
                    ><img src="../../assets/images/zhandian.png" />
                    <span>资源管理</span>
                  </template>
                  <!-- <el-menu-item index="6-1-1">
                    <router-link to="/smartPark/environmentPanorama">
                      <img src="../../assets/images/zhandian.png" />
                      <span>全景图</span>
                    </router-link>
                  </el-menu-item> -->
                  <router-link to="/smartPark/AQIsensor">
                    <el-menu-item index="6-1-2">
                      <img src="../../assets/images/zhandian.png" />
                      <span>AQI传感器</span>
                    </el-menu-item>
                  </router-link>
                </el-submenu>
                <el-submenu index="6-2">
                  <template slot="title">
                    <img src="../../assets/images/zhandian.png" />
                    <span>AQI记录</span>
                  </template>
                  <router-link to="/smartPark/realTimeAQI">
                    <el-menu-item index="6-2-1">
                      <img src="../../assets/images/zhandian.png" />
                      <span>实时AQI</span>
                    </el-menu-item>
                  </router-link>
                  <router-link to="/smartPark/historicalAQI">
                    <el-menu-item index="6-2-2">
                      <img src="../../assets/images/zhandian.png" />
                      <span>历史AQI</span>
                    </el-menu-item>
                  </router-link>
                </el-submenu>
              </el-submenu>
              <el-submenu index="7">
                <template slot="title">
                  <img src="../../assets/images/jiaofeidingdan.png" />
                  <span>缴费管理</span>
                </template>
                <el-submenu index="7-1">
                  <template slot="title">
                    <img src="../../assets/images/zhandian.png" />
                    <span>收费规则</span>
                  </template>
                  <router-link to="/smartPark/parkingCharge">
                    <el-menu-item index="7-1-1">
                      <img src="../../assets/images/zhandian.png" />
                      <span>停车费</span>
                    </el-menu-item>
                  </router-link>
                  <router-link to="/smartPark/propertyCost">
                    <el-menu-item index="7-1-2">
                      <img src="../../assets/images/zhandian.png" />
                      <span>物业费</span>
                    </el-menu-item>
                  </router-link>
                </el-submenu>
                <el-submenu index="7-2">
                  <template slot="title">
                    <img src="../../assets/images/zhandian.png" />
                    <span>账单</span>
                  </template>
                  <router-link to="/smartPark/allBill">
                    <el-menu-item index="7-2-1">
                      <img src="../../assets/images/zhandian.png" />
                      <span>所有账单</span>
                    </el-menu-item>
                  </router-link>
                  <router-link to="/smartPark/parkingBill">
                    <el-menu-item index="7-2-2">
                      <img src="../../assets/images/zhandian.png" />
                      <span>物业账单</span>
                    </el-menu-item>
                  </router-link>
                  <router-link to="/smartPark/propertyBill">
                    <el-menu-item index="7-2-3">
                      <img src="../../assets/images/zhandian.png" />
                      <span>停车账单</span>
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
import router from "../../router/smartPark";
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
      this.$router.push({ path: `/smartPark/alarmLog` });
    },
    routerLinkToAccessRecord() {
      this.$router.push({ path: `/smartPark/accessRecord` });
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
