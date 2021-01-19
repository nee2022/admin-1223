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
                  <img src="../../assets/images/Business accounts.png" />
                  <span>数据视图</span>
                </template>
                <router-link to="/merchantAsset/dataBoard">
                  <el-menu-item index="1-1">
                    <img src="../../assets/images/all.png" />
                    <span>数据看板</span>
                  </el-menu-item>
                </router-link>
              </el-submenu>
              <el-submenu index="1">
                <template slot="title">
                  <img src="../../assets/images/Business accounts.png" />
                  <span>商户账号</span>
                </template>
                <router-link to="/merchantAsset/agent">
                  <el-menu-item index="1-1">
                    <img src="../../assets/images/all.png" />
                    <span>所有账号</span>
                  </el-menu-item>
                </router-link>
                <router-link to="/merchantAsset/agent/type/1">
                  <el-menu-item index="1-2">
                    <img src="../../assets/images/FenRun account.png" />
                    <span>分润账号</span>
                  </el-menu-item>
                </router-link>
                <router-link to="/merchantAsset/agent/type/2">
                  <el-menu-item index="1-3">
                    <img src="../../assets/images/Proprietary account.png" />
                    <span>自营账号</span>
                  </el-menu-item>
                </router-link>
                <router-link to="/merchantAsset/agent/type/3">
                  <el-menu-item index="1-4">
                    <img src="../../assets/images/Escrow account.png" />
                    <span>托管账号</span>
                  </el-menu-item>
                </router-link>
              </el-submenu>
              <el-submenu index="2">
                <template slot="title">
                  <img src="../../assets/images/The financial management.png" />
                  <span>财务管理</span>
                </template>
                <router-link to="/merchantAsset/orderRecord">
                  <el-menu-item index="1-1">
                    <img src="../../assets/images/dingdanjilu.png" />
                    <span>订单记录</span>
                  </el-menu-item>
                </router-link>
                <router-link to="/merchantAsset/shareRecord">
                  <el-menu-item index="1-2">
                    <img src="../../assets/images/fenchengjilu.png" />
                    <span>分成记录</span>
                  </el-menu-item>
                </router-link>
                <router-link to="/merchantAsset/withdrawalRecord">
                  <el-menu-item index="1-3">
                    <img src="../../assets/images/tixianjilu.png" />
                    <span>提现记录</span>
                  </el-menu-item>
                </router-link>
              </el-submenu>
              <el-submenu index="3">
                <template slot="title">
                  <img src="../../assets/images/Application gateways.png" />
                  <span>应用网关</span>
                </template>
                <router-link to="/merchantAsset/paymentGateway">
                  <el-menu-item index="1-1">
                    <img src="../../assets/images/Payment gateway.png" />
                    <span>支付网关</span>
                  </el-menu-item>
                </router-link>
                <router-link to="/merchantAsset/invoiceGateway">
                  <el-menu-item index="1-2">
                    <img src="../../assets/images/Invoice gateway.png" />
                    <span>发票网关</span>
                  </el-menu-item>
                </router-link>
                <router-link to="/merchantAsset/smsGateway">
                  <el-menu-item index="1-3">
                    <img src="../../assets/images/SMS gateway.png" />
                    <span>短信网关</span>
                  </el-menu-item>
                </router-link>
              </el-submenu>
              <el-submenu
                index="4"
                class="arrowIconHidden"
                @click.native="routerLinkCompanyInformation"
              >
                <template slot="title">
                  <img src="../../assets/images/Your company information.png" />
                  <span slot="title">公司信息</span>
                </template>
              </el-submenu>
              <el-submenu
                index="5"
                class="arrowIconHidden"
                @click.native="routerLinkOpenPlatform"
              >
                <template slot="title">
                  <img src="../../assets/images/Open platform.png" />
                  <span slot="title">开放平台</span>
                </template>
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
import router from "../../router/merchantAsset";
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
    routerLinkOpenPlatform() {
      console.log(location.href);
      this.$router.push({ path: `/merchantAsset/openPlatform` });
      console.log(location.href);
    },
    routerLinkCompanyInformation() {
      this.$router.push({ path: `/merchantAsset/companyInformation` });
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

<style lang="stylus" scoped>
// @import "../../assets/css/zyhAsidePage.styl"
</style>
