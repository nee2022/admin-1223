<template>
  <div class="zyhAsidePage">
    <aside>
      <div class="logo">
        <router-link to="/summary">
          <span><img :src="loginConfig.imgs" /></span>
        </router-link>
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
                  <span>订单记录</span>
                </template>
                <router-link to="/financialManagement/allOrder">
                  <el-menu-item index="1-1">
                    <img src="../../assets/images/all.png" />
                    <span>所有订单</span>
                  </el-menu-item>
                </router-link>
                <router-link to="/financialManagement/realTimeOrder">
                  <el-menu-item index="1-2">
                    <img src="../../assets/images/shishidingdan.png" />
                    <span>实时订单</span>
                  </el-menu-item>
                </router-link>
                <router-link to="/financialManagement/refundOrder">
                  <el-menu-item index="1-3">
                    <img src="../../assets/images/tuikuandingdan.png" />
                    <span>退款订单</span>
                  </el-menu-item>
                </router-link>
              </el-submenu>
              <el-submenu index="2">
                <template slot="title">
                  <img src="../../assets/images/kaipiaojilu.png" />
                  <span>开票记录</span>
                </template>
                <router-link to="/financialManagement/allInvoiceRecord">
                  <el-menu-item index="1-1">
                    <img src="../../assets/images/all.png" />
                    <span>所有记录</span>
                  </el-menu-item>
                </router-link>
                <router-link to="/financialManagement/issuedInvoiceRecord">
                  <el-menu-item index="1-2">
                    <img src="../../assets/images/yichupiao.png" />
                    <span>已出票</span>
                  </el-menu-item>
                </router-link>
                <router-link to="/financialManagement/pendingInvoiceRecord">
                  <el-menu-item index="1-3">
                    <img src="../../assets/images/daishenhe.png" />
                    <span>待审核</span>
                  </el-menu-item>
                </router-link>
              </el-submenu>
              <el-submenu index="3">
                <template slot="title">
                  <img src="../../assets/images/jiesuanjilu.png" />
                  <span>结算记录</span>
                </template>
                <router-link to="/financialManagement/allSettlementRecord">
                  <el-menu-item index="1-1">
                    <img src="../../assets/images/all.png" />
                    <span>所有记录</span>
                  </el-menu-item>
                </router-link>
                <router-link to="/financialManagement/shareRecord">
                  <el-menu-item index="1-2">
                    <img src="../../assets/images/fenchengjilu.png" />
                    <span>分成记录</span>
                  </el-menu-item>
                </router-link>
                <router-link to="/financialManagement/transferRecord">
                  <el-menu-item index="1-3">
                    <img src="../../assets/images/zhaunzhangjilu.png" />
                    <span>转账记录</span>
                  </el-menu-item>
                </router-link>
              </el-submenu>
              <el-submenu index="4">
                <template slot="title">
                  <img src="../../assets/images/tixianjilu.png" />
                  <span>提现记录</span>
                </template>
                <router-link to="/financialManagement/allWithdrawalRecord">
                  <el-menu-item index="1-1">
                    <img src="../../assets/images/all.png" />
                    <span>所有记录</span>
                  </el-menu-item>
                </router-link>
                <router-link to="/financialManagement/pendingWithdrawalRecord">
                  <el-menu-item index="1-2">
                    <img src="../../assets/images/daitixian.png" />
                    <span>待提现</span>
                  </el-menu-item>
                </router-link>
                <router-link to="/financialManagement/issuedWithdrawalRecord">
                  <el-menu-item index="1-3">
                    <img src="../../assets/images/yitixian.png" />
                    <span>已提现</span>
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
import router from "../../router/financialManagement";
import {
		loginConfig
	} from "../../config.js";
export default {
  router,
  data() {
    return {	loginConfig};
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
