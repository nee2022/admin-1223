<template>
  <div class="zyhSingleLineListMainPage">
    <header>
      <div class="infoArea">
        <div class="pageName">故障报警</div>
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
          <el-table-column show-overflow-tooltip prop="id" label="ID">
          </el-table-column>
          <el-table-column show-overflow-tooltip prop="errmsg" label="VIN码">
            LS5A3AJC9JD002752
          </el-table-column>
          <el-table-column show-overflow-tooltip prop="id" label="车牌号">
            苏CD33778
          </el-table-column>
          <el-table-column show-overflow-tooltip prop="id" label="定位时间">
            2020-12-29 14:10:01
          </el-table-column>
          <el-table-column show-overflow-tooltip prop="id" label="定位位置">
            江苏省徐州市睢宁县庆安镇睢宁新路美公路养护有限公司前徐社区 附近
          </el-table-column>
          <el-table-column show-overflow-tooltip prop="id" label="车辆状态">
            熄火
          </el-table-column>
          <el-table-column show-overflow-tooltip prop="id" label="充电状态">
            停车充电
          </el-table-column>
          <el-table-column show-overflow-tooltip prop="id" label="燃料类型">
            纯电动
          </el-table-column>
          <el-table-column show-overflow-tooltip prop="id" label="品牌">
            长城牌
          </el-table-column>
          <el-table-column show-overflow-tooltip prop="id" label="型号">
            SC7003AHBEV
          </el-table-column>
          <el-table-column show-overflow-tooltip prop="id" label="详细信息">
            电压过低
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
          "/admin/api/operator/logs/?token=" +
            this.token +
            "&page=" +
            this.pagenum +
            "&row=12&dt=20200924"
        )
        .then(res => {
          if (res.status == 200) {
            this.tableData = res.data.logs;
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
