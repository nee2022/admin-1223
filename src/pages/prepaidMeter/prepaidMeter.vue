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
                  <span>资源管理</span>
                </template>
                <!-- <router-link to="/prepaidMeter/panorama">
                  <el-menu-item index="1-1">
                    <img src="../../assets/images/quanjingtu.png" />
                    <span>全景图</span>
                  </el-menu-item>
                </router-link> -->
                <router-link to="/prepaidMeter/site">
                  <el-menu-item index="1-2">
                    <img src="../../assets/images/zhandian.png" />
                    <span>站点</span>
                  </el-menu-item>
                </router-link>
                <router-link to="/prepaidMeter/ammeter">
                  <el-menu-item index="1-3">
                    <img src="../../assets/images/all.png" />
                    <span>电表</span>
                  </el-menu-item>
                </router-link>
                <!-- <router-link to="/prepaidMeter/twoPhaseMeter">
                  <el-menu-item index="1-3">
                    <img src="../../assets/images/all.png" />
                    <span>两相表</span>
                  </el-menu-item>
                </router-link>
                <router-link to="/prepaidMeter/threePhaseMeter">
                  <el-menu-item index="1-4">
                    <img src="../../assets/images/all.png" />
                    <span>三相表</span>
                  </el-menu-item>
                </router-link> -->
              </el-submenu>
              <el-submenu index="2">
                <template slot="title">
                  <img src="../../assets/images/jiaofeidingdan.png" />
                  <span>缴费订单</span>
                </template>
                <router-link to="/prepaidMeter/allOrder">
                  <el-menu-item index="1-1">
                    <img src="../../assets/images/all.png" />
                    <span>所有</span>
                  </el-menu-item>
                </router-link>
                <router-link to="/prepaidMeter/realTimeOrder">
                  <el-menu-item index="1-2">
                    <img src="../../assets/images/shishidingdan.png" />
                    <span>实时订单</span>
                  </el-menu-item>
                </router-link>
                <router-link to="/prepaidMeter/historicalOrder">
                  <el-menu-item index="1-3">
                    <img src="../../assets/images/lishidingdan.png" />
                    <span>历史订单</span>
                  </el-menu-item>
                </router-link>
              </el-submenu>
              <!-- <el-submenu
                index="3"
                class="arrowIconHidden"
                @click.native="routerLinkScanCodePackage"
              >
                <template slot="title">
                  <img src="../../assets/images/user account.png" />
                  <span slot="title">扫码套餐</span>
                </template>
              </el-submenu>
              <el-submenu
                index="4"
                class="arrowIconHidden"
                @click.native="routerLinkBillingRule"
              >
                <template slot="title">
                  <img src="../../assets/images/user account.png" />
                  <span slot="title">计费规则</span>
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
import router from "../../router/prepaidMeter";
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
      this.$router.push({ path: `/prepaidMeter/scanCodePackage` });
    },
    //路由跳转
    routerLinkBillingRule() {
      this.$router.push({ path: `/prepaidMeter/billingRule` });
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
