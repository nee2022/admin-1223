<template>
  <div class="zyhSecondaryListSiteMainPage">
    <header>
      <div class="infoArea">
        <div class="pageName">社区</div>
        <div class="profile"><myhead></myhead></div>
      </div>
    </header>
    <section>
      <div class="asidePart">
        <div class="wrapper">
          <div class="searchArea">
            <div class="inputFrame">
              <img src="../../../assets/images/search.png" />
              <el-input
                placeholder="请输入指定社区"
                class="inputBlank"
                clearable
              ></el-input>
            </div>
            <div class="addButton">
              <el-button type="primary" icon="el-icon-circle-plus-outline"
                >添加</el-button
              >
            </div>
          </div>
          <el-table :data="siteTableData" stripe style="width: 100%">
            <el-table-column align="center">
              <template slot-scope="scope">
                <div
                  class="wrapper"
                  @click="getSiteInfoMes(scope.row.id)"
                  v-bind:class="{
                    toggleBackgroundcolor: currentStationId === scope.row.id
                  }"
                >
                  <div class="siteIcon">
                    <img :src="img[0]" alt="" />
                  </div>
                  <div class="siteInfo">
                    <div class="name">{{ scope.row.name }}</div>
                    <div class="address">{{ scope.row.address }}</div>
                    <div class="usageDetail">
                      <span>正常</span>
                    </div>
                  </div>
                  <div class="operation">
                    <template v-if="scope.row.id === currentStationId">
                      <div @click="xiugai(scope.row.id)">
                        <img
                          src="../../../assets/images/xiu.png"
                          title="修改"
                        />
                      </div>
                      <div @click="removeUserByID1(scope.row.id)">
                        <img
                          src="../../../assets/images/shan2.png"
                          title="删除"
                        />
                      </div>
                    </template>
                    <template v-else>
                      <span>
                        ...
                      </span>
                    </template>
                  </div>
                </div>
              </template>
            </el-table-column>
          </el-table>
          <div class="pageNumArea">
            <div class="total" :data="siteTableData">
              <span>共{{ siteTotal }}个站点</span>
            </div>
            <el-pagination
              small
              background
              :current-page.sync.number="sitePagenum"
              @current-change="handleCurrentChange"
              :page-size="sitePagesize"
              layout="prev, pager, next"
              :total="siteTotal"
              :formatter="formatType"
            >
            </el-pagination>
          </div>
        </div>
      </div>
      <div class="mainPart">
        <div class="wrapper">
          <div class="searchArea">
            <div class="inputFrame">
              <img src="../../../assets/images/search.png" />
              <el-input
                placeholder="请输入账号、手机号、昵称进行查找"
                class="inputBlank"
                clearable
              ></el-input>
            </div>
            <div class="searchButton">
              <el-button type="primary" icon="el-icon-search">搜索</el-button>
            </div>
            <div class="addButton">
              <el-button type="primary" icon="el-icon-circle-plus-outline">
                添加
              </el-button>
            </div>
          </div>
          <template>
            <el-table :data="siteInfoTableData" stripe style="width: 100%">
              <el-table-column
                show-overflow-tooltip
                prop="dev_id"
                label="设备编号"
              >
              </el-table-column>
              <el-table-column show-overflow-tooltip prop="name" label="名称">
              </el-table-column>
              <el-table-column
                show-overflow-tooltip
                prop="type"
                label="类型"
                :formatter="formatType"
              >
              </el-table-column>
              <el-table-column show-overflow-tooltip prop="mac" label="机号">
              </el-table-column>
              <el-table-column show-overflow-tooltip prop="online" label="状态"
                >在线</el-table-column
              >
              <el-table-column
                show-overflow-tooltip
                prop="address"
                label="操作"
              >
                <div class="operation">
                  <div>
                    <img src="../../../assets/images/delete.png" title="删除" />
                  </div>
                  <div>
                    <img
                      src="../../../assets/images/compile.png"
                      title="修改"
                    />
                  </div>
                  <div>
                    <img
                      src="../../../assets/images/see.png"
                      title="详情"
                      height="11px"
                    />
                  </div>
                </div>
              </el-table-column>
            </el-table>
          </template>
          <div class="pageNumArea">
            <div class="total" :data="siteInfoTableData">
              <span>共{{ siteInfoTotal }}条信息</span>
            </div>
            <el-pagination
              background
              :current-page.sync.number="siteInfoPagenum"
              @current-change="handleCurrentChange"
              :page-size="siteInfoPagesize"
              layout="prev, pager, next"
              :total="siteInfoTotal"
            >
            </el-pagination>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import myhead from "../../../components/myhead.vue";
export default {
  components: { myhead },
  data() {
    return {
      img: [
        require("../../../assets/images/comprehensive.png"),
        require("../../../assets/images/Charging pile.png"),
        require("../../../assets/images/parking.png"),
        require("../../../assets/images/Road parking.png")
      ],
      option: "",
      isActive: true,
      dialogVisible: false,
      selected: "所有",
      token: "",
      currentStationId: "",
      siteTableData: [],
      siteInfoTableData: [],
      siteTotal: 1,
      siteInfoTotal: 1,
      sitePagenum: 1,
      siteInfoPagenum: 1,
      sitePagesize: 6,
      siteInfoPagesize: 12
    };
  },

  mounted() {
    this.token = localStorage.getItem("token").replace(/\"/g, "");
    this.getSiteMes();
  },
  methods: {
    //获取用户信息列表
    getSiteMes() {
      this.$axios
        .get(
          "/admin/api/stations/1?token=" +
            this.token +
            "&page=" +
            this.sitePagenum +
            "&row=6"
        )
        .then(res => {
          if (res.status == 200) {
            this.siteTableData = res.data.stations;
            this.siteTotal = res.data.total;
            this.currentStationId = res.data.stations[0].id || "";
          }
        })
        .then(res => {
          this.getSiteInfoMes(this.currentStationId);
        });
    },
    getSiteInfoMes(stationId) {
      this.currentStationId = stationId;

      this.$axios
        .get(
          "/admin/api/station/" +
            this.currentStationId +
            "/chargers?token=" +
            this.token +
            "&page=" +
            this.siteInfoPagenum +
            "&row=12"
        )
        .then(res => {
          if (res.status == 200) {
            this.siteInfoTableData = res.data.chargers;
            this.siteInfoTotal = res.data.total || 0;
            var pn = this.pagenum;
          }
        });
    },
    // 监听页码值改变
    handleCurrentChange(newPage) {
      this.sitePagenum = newPage;
      this.getSiteMes();
    },
    /*类型格式化：cellValue为后台返回的值*/
    formatType: function(row, column, cellValue) {
      var ret = ""; //你想在页面展示的值
      if (cellValue === 1) {
        ret = "烟雾传感器"; //根据自己的需求设定
      } else if (cellValue === 2) {
        ret = "视频监控";
      } else if (cellValue === 7) {
        ret = "电表";
      }
      return ret;
    }
  }
};
</script>

<style lang="stylus" scoped></style>
