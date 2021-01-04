<template>
  <div class="zyhSingleLineListMainPage">
    <header>
      <div class="infoArea">
        <div class="pageName">车辆</div>
        <div class="profile">
          <myhead></myhead>
        </div>
      </div>
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
      </div>
    </header>
    <section>
      <template>
        <el-table :data="tableData" stripe style="width: 100%">
          <el-table-column show-overflow-tooltip prop="id" label="VIN码">
            LS5A3AJC2JD002169
          </el-table-column>
          <el-table-column show-overflow-tooltip prop="dev_id" label="车牌号">
            苏CD31757
          </el-table-column>
          <el-table-column show-overflow-tooltip prop="dev_id" label="所属机构">
            南昌大鹏汽车销售有限公司
          </el-table-column>
          <el-table-column
            show-overflow-tooltip
            prop="enabled"
            label="定位时间"
          >
            2020-12-29 14:10:08
          </el-table-column>
          <el-table-column
            show-overflow-tooltip
            prop="station"
            label="定位位置"
          >
            南昌八一广场附近
          </el-table-column>
          <el-table-column show-overflow-tooltip prop="agent" label="车辆状态">
            熄火
          </el-table-column>
          <el-table-column
            show-overflow-tooltip
            prop="address"
            label="充电状态"
          >
            停车充电
          </el-table-column>
          <el-table-column show-overflow-tooltip prop="address" label="车速">
            0
          </el-table-column>
          <el-table-column
            show-overflow-tooltip
            prop="address"
            label="累计里程"
          >
            10329.70
          </el-table-column>
          <el-table-column
            show-overflow-tooltip
            prop="address"
            label="燃料类型"
          >
            纯电动
          </el-table-column>
          <el-table-column show-overflow-tooltip prop="address" label="品牌">
            长城牌
          </el-table-column>
          <el-table-column show-overflow-tooltip prop="address" label="型号">
            SC7004CABEV WL1008CJNB
          </el-table-column>
          <el-table-column
            show-overflow-tooltip
            prop="address"
            label="操作"
            width="200"
          >
            <div class="operation">
              <div>
                <img
                  src="../../../assets/images/see.png"
                  height="11px"
                  title="详情"
                />
              </div>
            </div>
          </el-table-column>
        </el-table>
      </template>
    </section>
    <footer>
      <div class="total" :data="tableData">
        <span>共{{ total }}条信息</span>
      </div>
      <el-pagination
        background
        :current-page.sync.number="pagenum"
        @current-change="handleCurrentChange"
        :page-size="pagesize"
        layout="prev, pager, next"
        :total="total"
      >
      </el-pagination>
    </footer>
  </div>
</template>

<script>
import myhead from "../../../components/myhead";

export default {
  components: {
    myhead
  },
  data() {
    return {
      tableData: [],
      option: "",
      total: 1,
      isActive: true,
      dialogVisible: false,
      selected: "所有",
      pagenum: 1,
      token: "",
      pagesize: 12
    };
  },

  mounted() {
    this.token = localStorage.getItem("token").replace(/\"/g, "");
    this.getAllInvoiceRecordMes();
  },
  methods: {
    //获取用户信息列表
    getAllInvoiceRecordMes() {
      this.$axios
        .get(
          "/admin/api/chargers/1/?token=" +
            this.token +
            "&page=" +
            this.pagenum +
            "&row=12"
        )
        .then(res => {
          if (res.status == 200) {
            this.tableData = res.data.chargers;
            this.total = res.data.total || 0;
            var pn = this.pagenum;
          }
        });
    },
    //监听页码值改变
    handleCurrentChange(newPage) {
      this.pagenum = newPage;
      this.getAllInvoiceRecordMes();
    }
  }
};
</script>

<style lang="stylus" scoped></style>
