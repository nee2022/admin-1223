<template>
  <div class="zyhSecondaryListScanCodePackageMainPage">
    <header>
      <div class="infoArea">
        <div class="pageName">预付费电表</div>
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
                placeholder="请输入套餐"
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
          <template>
            <el-table
              :data="scanCodePackageTableData"
              stripe
              style="width: 100%"
              @row-click="scanCodePackageRowClick"
            >
              <el-table-column show-overflow-tooltip prop="" label="操作"
                >123</el-table-column
              >
              <el-table-column
                show-overflow-tooltip
                prop="name"
                label="套餐"
              ></el-table-column>
              <el-table-column
                show-overflow-tooltip
                prop="address"
                label="操作"
                width="150px"
              >
                <div class="operation">
                  <div>
                    <img src="../../../assets/images/delete.png" />
                  </div>
                  <div>
                    <el-button type="text" @click="dialogVisible = true">
                      <img src="../../../assets/images/compile.png" />
                    </el-button>
                  </div>
                </div>
              </el-table-column>
            </el-table>
          </template>
          <div class="pageNumArea">
            <div class="total" :data="scanCodePackageTableData">
              <span>共{{ scanCodePackageTotal }}条信息</span>
            </div>
            <el-pagination
              background
              :current-page.sync.number="scanCodePackagePagenum"
              @current-change="scanCodePackageHandleCurrentChange"
              :page-size="scanCodePackagePagesize"
              layout="prev, pager, next"
              :total="scanCodePackageTotal"
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
              <el-button type="primary" icon="el-icon-circle-plus-outline"
                >添加</el-button
              >
            </div>
          </div>
          <template>
            <el-table
              :data="scanCodePackageInfoTableData"
              stripe
              style="width: 100%"
            >
              <el-table-column
                show-overflow-tooltip
                prop="id"
                label="套餐ID"
                width="130"
              >
              </el-table-column>
              <el-table-column
                show-overflow-tooltip
                prop="name"
                label="套餐名字"
                width="180"
              >
              </el-table-column>
              <el-table-column
                show-overflow-tooltip
                prop="memo"
                label="套餐信息"
                width="180"
              >
              </el-table-column>
              <el-table-column
                show-overflow-tooltip
                prop="online"
                label="状态"
                width="180"
              ></el-table-column>
              <el-table-column
                show-overflow-tooltip
                prop="address"
                label="操作"
                width="200"
              >
                <div class="operation">
                  <div>
                    <img src="../../../assets/images/delete.png" />
                  </div>
                  <div>
                    <el-button type="text" @click="dialogVisible = true"
                      ><img src="../../../assets/images/compile.png"
                    /></el-button>
                  </div>
                </div>
              </el-table-column>
            </el-table>
          </template>
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
      currentScanCodePackageId: "",
      scanCodePackageTableData: [],
      scanCodePackageInfoTableData: [],
      scanCodePackageTotal: 1,
      scanCodePackagePagenum: 1,
      scanCodePackagePagesize: 6
    };
  },

  mounted() {
    this.token = localStorage.getItem("token").replace(/\"/g, "");
    this.getScanCodePackageMes();
  },
  methods: {
    scanCodePackageRowClick(row, event, column) {
      this.getScanCodePackageInfoMes(row.id);
    },
    //获取用户信息列表
    getScanCodePackageMes() {
      this.$axios
        .get(
          "/admin/api/package/groups/?token=" +
            this.token +
            "&page=" +
            this.scanCodePackagePagenum +
            "&row=6"
        )
        .then(res => {
          if (res.status == 200) {
            this.scanCodePackageTableData = res.data.package_groups;
            this.scanCodePackageTotal = res.data.total;
            this.currenScanCodePackageId = res.data.package_groups[0].id || "";
            console.log("id");
            console.log(this.currenScanCodePackageId);
            var pn = this.scanCodePackagePagenum;
            console.log("DATA1");
            console.log(res);
            console.log(this.scanCodePackageInfoTableData);
          }
        })
        .then(res => {
          this.getScanCodePackageInfoMes(this.currenScanCodePackageId);
        });
    },
    getScanCodePackageInfoMes(scanCodePackageId) {
      this.$axios
        .get(
          "/admin/api/package/group/" +
            scanCodePackageId +
            "/?token=" +
            this.token +
            "&page=" +
            this.scanCodePackageInfoPagenum +
            "&row=12"
        )
        .then(res => {
          if (res.status == 200) {
            this.scanCodePackageInfoTableData = [res.data.package_group];
            console.log("DATA2");
            console.log(res);
            console.log(this.scanCodePackageInfoTableData[0].name);
          }
        });
    },

    // 监听scanCodePackage页码值改变
    scanCodePackageHandleCurrentChange(newPage) {
      this.scanCodePackagePagenum = newPage;
      this.getScanCodePackageMes();
      console.log("scanCodePackagePagenum");
    }
  }
};
</script>

<style lang="stylus" scoped></style>
