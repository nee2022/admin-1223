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
                <router-link to="/smartSocket/panorama">
                  <el-menu-item index="1-1">
                    <img src="../../assets/images/quanjingtu.png" />
                    <span>全景图</span>
                  </el-menu-item>
                </router-link>
                <router-link to="/smartSocket/site">
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
                    <img src="../../assets/images/zhandian.png" />
                    <span>门禁</span>
                  </el-menu-item>
                  <el-menu-item index="2-1-2">人行道闸</el-menu-item>
                  <el-menu-item index="2-1-3">电梯</el-menu-item>
                </el-submenu>
                <el-submenu index="2-2">
                  <template slot="title">通行规则</template>
                  <el-menu-item index="2-2-1">账号</el-menu-item>
                  <el-menu-item index="2-2-2">车牌</el-menu-item>
                  <el-menu-item index="2-2-1">一卡通</el-menu-item>
                </el-submenu>
              </el-submenu>
              <el-submenu index="3">
                <template slot="title">
                  <img src="../../assets/images/jiaofeidingdan.png" />
                  <span>停车管理</span>
                </template>
                <el-submenu index="3-1">
                  <template slot="title">资源管理</template>
                  <el-menu-item index="3-1-1">全景图</el-menu-item>
                  <el-menu-item index="3-1-2">停车场</el-menu-item>
                </el-submenu>
                <el-submenu index="3-2">
                  <template slot="title">过车记录</template>
                  <el-menu-item index="3-2-1">所有记录</el-menu-item>
                  <el-menu-item index="3-2-2">实时停车</el-menu-item>
                  <el-menu-item index="3-2-1">历史记录</el-menu-item>
                  <el-menu-item index="3-2-1">异常记录</el-menu-item>
                </el-submenu>
              </el-submenu>
              <el-submenu index="4">
                <template slot="title">
                  <img src="../../assets/images/jiaofeidingdan.png" />
                  <span>安防</span>
                </template>
                <el-submenu index="4-1">
                  <template slot="title">资源管理</template>
                  <el-menu-item index="4-1-1">视频监控</el-menu-item>
                  <el-menu-item index="4-1-2">烟雾传感器</el-menu-item>
                </el-submenu>
                <el-submenu index="4-2">
                  <template slot="title">告警日志</template>
                </el-submenu>
              </el-submenu>
              <el-submenu index="5">
                <template slot="title">
                  <img src="../../assets/images/jiaofeidingdan.png" />
                  <span>能源</span>
                </template>
                <el-submenu index="5-1">
                  <template slot="title">资源管理</template>
                  <el-menu-item index="5-1-1">电表</el-menu-item>
                  <el-menu-item index="5-1-2">水表</el-menu-item>
                  <el-menu-item index="5-1-3">气表</el-menu-item>
                </el-submenu>
                <el-submenu index="5-2">
                  <template slot="title">告警日志</template>
                  <el-menu-item index="5-2-1">抄表记录</el-menu-item>
                  <el-menu-item index="5-2-2">告警记录</el-menu-item>
                </el-submenu>
              </el-submenu>
              <el-submenu index="6">
                <template slot="title">
                  <img src="../../assets/images/jiaofeidingdan.png" />
                  <span>环境</span>
                </template>
                <el-submenu index="6-1">
                  <template slot="title">资源管理</template>
                  <el-menu-item index="6-1-1">全景图</el-menu-item>
                  <el-menu-item index="6-1-2">API传感器</el-menu-item>
                </el-submenu>
                <el-submenu index="6-2">
                  <template slot="title">AQI记录</template>
                  <el-menu-item index="6-2-1">实时AQI</el-menu-item>
                  <el-menu-item index="6-2-2">历史AQI</el-menu-item>
                </el-submenu>
              </el-submenu>
              <el-submenu index="7">
                <template slot="title">
                  <img src="../../assets/images/jiaofeidingdan.png" />
                  <span>缴费管理</span>
                </template>
                <el-submenu index="7-1">
                  <template slot="title">收费规则</template>
                  <el-menu-item index="7-1-1">停车费</el-menu-item>
                  <el-menu-item index="7-1-2">物业费</el-menu-item>
                </el-submenu>
                <el-submenu index="7-2">
                  <template slot="title">账单</template>
                  <el-menu-item index="7-2-1">所有账单</el-menu-item>
                  <el-menu-item index="7-2-2">物业账单</el-menu-item>
                  <el-menu-item index="7-2-3">停车账单</el-menu-item>
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
