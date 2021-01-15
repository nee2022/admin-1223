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
                <!-- <router-link to="/smartSocket/panorama">
                  <el-menu-item index="1-1">
                    <img src="../../assets/images/quanjingtu.png" />
                    <span>全景图</span>
                  </el-menu-item>
                </router-link> -->
                <router-link to="/smartSocket/site">
                  <el-menu-item index="1-2">
                    <img src="../../assets/images/zhandian.png" />
                    <span>站点</span>
                  </el-menu-item>
                </router-link>
                <router-link to="/smartSocket/socket">
                  <el-menu-item index="1-3">
                    <img src="../../assets/images/zhandian.png" />
                    <span>插座</span>
                  </el-menu-item>
                </router-link>
              </el-submenu>
              <el-submenu index="2">
                <template slot="title">
                  <img src="../../assets/images/jiaofeidingdan.png" />
                  <span>缴费订单</span>
                </template>
                <router-link to="/smartSocket/allOrder">
                  <el-menu-item index="1-1">
                    <img src="../../assets/images/all.png" />
                    <span>所有</span>
                  </el-menu-item>
                </router-link>
                <router-link to="/smartSocket/realTimeOrder">
                  <el-menu-item index="1-2">
                    <img src="../../assets/images/shishidingdan.png" />
                    <span>实时订单</span>
                  </el-menu-item>
                </router-link>
                <router-link to="/smartSocket/historicalOrder">
                  <el-menu-item index="1-3">
                    <img src="../../assets/images/lishidingdan.png" />
                    <span>历史订单</span>
                  </el-menu-item>
                </router-link>
              </el-submenu>
              <!-- <el-submenu index="3" class="arrowIconHidden" @click.native="routerLinkScanCodePackage">
                <template slot="title">
                  <img src="../../assets/images/user account.png" />
                  <span slot="title">扫码套餐</span>
                </template>
              </el-submenu>
              <el-submenu index="4" class="arrowIconHidden" @click.native="routerLinkBillingRule">
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
import router from "../../router/smartSocket";
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
