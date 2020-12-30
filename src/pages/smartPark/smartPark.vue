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
                <router-link to="/smartPark/park/parkManagementPanorama">
                  <el-menu-item index="1-1">
                    <img src="../../assets/images/quanjingtu.png" />
                    <span>全景图</span>
                  </el-menu-item>
                </router-link>
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
                  <el-menu-item index="2-1-1">
                    <router-link to="/smartPark/doorSecurity">
                      <img src="../../assets/images/zhandian.png" />
                      <span>门禁</span>
                    </router-link>
                  </el-menu-item>
                  <el-menu-item index="2-1-2">
                    <router-link to="/smartPark/sidewalkGate">
                      <img src="../../assets/images/zhandian.png" />
                      <span>人行道闸</span>
                    </router-link>
                  </el-menu-item>
                  <el-menu-item index="2-1-3">
                    <router-link to="/smartPark/elevator">
                      <img src="../../assets/images/zhandian.png" />
                      <span>电梯</span>
                    </router-link>
                  </el-menu-item>
                </el-submenu>
                <el-submenu index="2-2">
                  <template slot="title">
                    <img src="../../assets/images/zhandian.png" />
                    <span>通行规则</span>
                  </template>
                  <el-menu-item index="2-2-1">
                    <router-link to="/smartPark/identification">
                      <img src="../../assets/images/zhandian.png" />
                      <span>账号</span>
                    </router-link>
                  </el-menu-item>
                  <el-menu-item index="2-2-2">
                    <router-link to="/smartPark/registrationNumber">
                      <img src="../../assets/images/zhandian.png" />
                      <span>车牌</span>
                    </router-link>
                  </el-menu-item>
                  <el-menu-item index="2-2-3">
                    <router-link to="/smartPark/onePass">
                      <img src="../../assets/images/zhandian.png" />
                      <span>一卡通</span>
                    </router-link>
                  </el-menu-item>
                </el-submenu>
                <el-submenu index="2-3" class="arrowIconHidden">
                  <template slot="title">
                    <router-link to="/smartPark/accessRecord">
                      <img src="../../assets/images/zhandian.png" />
                      <span>出入记录</span>
                    </router-link>
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
                  <el-menu-item index="3-1-1">
                    <router-link to="/smartPark/resourceAdministrationPanorama">
                      <img src="../../assets/images/zhandian.png" />
                      <span>全景图</span>
                    </router-link>
                  </el-menu-item>
                  <el-menu-item index="3-1-2">
                    <router-link to="/smartPark/parkingLot">
                      <img src="../../assets/images/zhandian.png" />
                      <span>停车场</span>
                    </router-link>
                  </el-menu-item>
                </el-submenu>
                <el-submenu index="3-2">
                  <template slot="title">
                    <img src="../../assets/images/zhandian.png" />
                    <span>过车记录</span>
                  </template>
                  <el-menu-item index="3-2-1">
                    <router-link to="/smartPark/allPassingRecord">
                      <img src="../../assets/images/zhandian.png" />
                      <span>所有记录</span>
                    </router-link>
                  </el-menu-item>
                  <el-menu-item index="3-2-2">
                    <router-link to="/smartPark/realTimePassingRecord">
                      <img src="../../assets/images/zhandian.png" />
                      <span>实时停车</span>
                    </router-link>
                  </el-menu-item>
                  <el-menu-item index="3-2-3">
                    <router-link to="/smartPark/historicalPassingRecord">
                      <img src="../../assets/images/zhandian.png" />
                      <span>历史记录</span>
                    </router-link>
                  </el-menu-item>
                  <el-menu-item index="3-2-4">
                    <router-link to="/smartPark/exceptionRecord">
                      <img src="../../assets/images/zhandian.png" />
                      <span>异常记录</span>
                    </router-link>
                  </el-menu-item>
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
                  <el-menu-item index="4-1-1">
                    <router-link to="/smartPark/videoSurveillance">
                      <img src="../../assets/images/zhandian.png" />
                      <span>视频监控</span>
                    </router-link>
                  </el-menu-item>
                  <el-menu-item index="4-1-2">
                    <router-link to="/smartPark/smokeSensor">
                      <img src="../../assets/images/zhandian.png" />
                      <span>烟雾传感器</span>
                    </router-link>
                  </el-menu-item>
                </el-submenu>
                <el-submenu index="4-2" class="arrowIconHidden">
                  <template slot="title">
                    <router-link to="/smartPark/alarmLog">
                      <img src="../../assets/images/zhandian.png" />
                      <span>告警日志</span>
                    </router-link>
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
                  <el-menu-item index="5-1-1">
                    <router-link to="/smartPark/ammeter">
                      <img src="../../assets/images/zhandian.png" />
                      <span>电表</span>
                    </router-link>
                  </el-menu-item>
                  <el-menu-item index="5-1-2">
                    <router-link to="/smartPark/waterMeter">
                      <img src="../../assets/images/zhandian.png" />
                      <span>水表</span>
                    </router-link>
                  </el-menu-item>
                  <el-menu-item index="5-1-3">
                    <router-link to="/smartPark/gasMeter">
                      <img src="../../assets/images/zhandian.png" />
                      <span>气表</span>
                    </router-link>
                  </el-menu-item>
                </el-submenu>
                <el-submenu index="5-2">
                  <template slot="title">
                    <img src="../../assets/images/zhandian.png" />
                    <span>告警日志</span>
                  </template>
                  <el-menu-item index="5-2-1">
                    <router-link to="/smartPark/meterReadingRecord">
                      <img src="../../assets/images/zhandian.png" />
                      <span>抄表记录</span>
                    </router-link>
                  </el-menu-item>
                  <el-menu-item index="5-2-2">
                    <router-link to="/smartPark/alarmRecord">
                      <img src="../../assets/images/zhandian.png" />
                      <span>告警记录</span>
                    </router-link>
                  </el-menu-item>
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
                  <el-menu-item index="6-1-1">
                    <router-link to="/smartPark/environmentPanorama">
                      <img src="../../assets/images/zhandian.png" />
                      <span>全景图</span>
                    </router-link>
                  </el-menu-item>
                  <el-menu-item index="6-1-2">
                    <router-link to="/smartPark/AQIsensor">
                      <img src="../../assets/images/zhandian.png" />
                      <span>AQI传感器</span>
                    </router-link>
                  </el-menu-item>
                </el-submenu>
                <el-submenu index="6-2">
                  <template slot="title">
                    <img src="../../assets/images/zhandian.png" />
                    <span>AQI记录</span>
                  </template>
                  <el-menu-item index="6-2-1">
                    <router-link to="/smartPark/realTimeAQI">
                      <img src="../../assets/images/zhandian.png" />
                      <span>实时AQI</span>
                    </router-link>
                  </el-menu-item>
                  <el-menu-item index="6-2-2">
                    <router-link to="/smartPark/historicalAQI">
                      <img src="../../assets/images/zhandian.png" />
                      <span>历史AQI</span>
                    </router-link>
                  </el-menu-item>
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
                  <el-menu-item index="7-1-1">
                    <router-link to="/smartPark/parkingCharge">
                      <img src="../../assets/images/zhandian.png" />
                      <span>停车费</span>
                    </router-link>
                  </el-menu-item>
                  <el-menu-item index="7-1-2">
                    <router-link to="/smartPark/propertyCost">
                      <img src="../../assets/images/zhandian.png" />
                      <span>物业费</span>
                    </router-link>
                  </el-menu-item>
                </el-submenu>
                <el-submenu index="7-2">
                  <template slot="title">
                    <img src="../../assets/images/zhandian.png" />
                    <span>账单</span>
                  </template>
                  <el-menu-item index="7-2-1">
                    <router-link to="/smartPark/allBill">
                      <img src="../../assets/images/zhandian.png" />
                      <span>所有账单</span>
                    </router-link>
                  </el-menu-item>
                  <el-menu-item index="7-2-2">
                    <router-link to="/smartPark/parkingBill">
                      <img src="../../assets/images/zhandian.png" />
                      <span>物业账单</span>
                    </router-link>
                  </el-menu-item>
                  <el-menu-item index="7-2-3">
                    <router-link to="/smartPark/propertyBill">
                      <img src="../../assets/images/zhandian.png" />
                      <span>停车账单</span>
                    </router-link>
                  </el-menu-item>
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
