<template>
  <div class="zyhSingleLineListMainPage">
    <header>
      <div class="infoArea">
        <div class="pageName">财务管理</div>
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
          <el-table-column show-overflow-tooltip prop="id" label="用户ID">
          </el-table-column>
          <el-table-column show-overflow-tooltip prop="dealno" label="账单号">
          </el-table-column>
          <el-table-column
            show-overflow-tooltip
            prop="account"
            label="账号"
          ></el-table-column>
          <el-table-column
            show-overflow-tooltip
            prop="amount"
            label="金额(/元)"
          >
          </el-table-column>
          <el-table-column
            show-overflow-tooltip
            prop="dev_name"
            label="关联设备"
          >
          </el-table-column>
          <el-table-column
            show-overflow-tooltip
            prop="payee_bank_account"
            label="收款账号"
          >
          </el-table-column>
          <el-table-column
            show-overflow-tooltip
            prop="paid_time"
            label="分成时间"
          >
          </el-table-column>
          <el-table-column
            show-overflow-tooltip
            prop="state"
            :formatter="formatterState"
            label="状态"
          >
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
  components: { myhead },
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
    this.getAllSettlementRecordMes();
  },
  methods: {
    formatterState: function(row, column, cellValue) {
      var ret = ""; //你想在页面展示的值
      if (cellValue === 0) {
        ret = "审核中"; //根据自己的需求设定
      } else if (cellValue === 1) {
        ret = "已结算";
      } else if (cellValue === 2) {
        ret = "审核成功";
      } else if (cellValue === 3) {
        ret = "审核失败";
      } else {
        ret = "未开发票";
      }
      return ret;
    },
    //获取用户信息列表
    getAllSettlementRecordMes() {
      this.$axios
        .get(
          "/admin/api/transfers/?token=" +
            this.token +
            "&page=" +
            this.pagenum +
            "&row=12"
        )
        .then(res => {
          if (res.status == 200) {
            this.tableData = res.data.transfer_logs;
            this.total = res.data.total || 0;
            var pn = this.pagenum;
          }
        });
    },
    //监听页码值改变
    handleCurrentChange(newPage) {
      this.pagenum = newPage;
      this.getAllSettlementRecordMes();
    }
  }
};
</script>

<style lang="stylus" scoped></style>
