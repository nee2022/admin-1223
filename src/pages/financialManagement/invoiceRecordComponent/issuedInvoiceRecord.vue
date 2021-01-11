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
          <el-table-column show-overflow-tooltip prop="id" label="发票ID">
          </el-table-column>
          <el-table-column show-overflow-tooltip prop="dealno" label="发票单号">
          </el-table-column>
          <el-table-column
            show-overflow-tooltip
            prop="type"
            :formatter="formatterType"
            label="类型"
          >
          </el-table-column>
          <el-table-column
            show-overflow-tooltip
            prop="amount"
            label="金额(/元)"
          >
          </el-table-column>
          <el-table-column show-overflow-tooltip prop="rate" label="税点(%)">
          </el-table-column>
          <el-table-column show-overflow-tooltip prop="license" label="税号">
          </el-table-column>
          <el-table-column
            show-overflow-tooltip
            prop="created_time"
            label="创建时间"
          ></el-table-column>
          <el-table-column
            show-overflow-tooltip
            prop="delivery_state"
            :formatter="formatterDeliveryState"
            label="运单状态"
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
    this.getIssuedInvoiceRecordMesMes();
  },
  methods: {
    formatterType: function(row, column, cellValue) {
      var ret = ""; //你想在页面展示的值
      if (cellValue === 0) {
        ret = "普通发票"; //根据自己的需求设定
      } else if (cellValue === 1) {
        ret = "增值税发票";
      } else if (cellValue === 2) {
        ret = "增值税专用发票";
      } else if (cellValue === 3) {
        ret = "红票";
      } else {
        ret = "未开发票";
      }
      return ret;
    },
    formatterDeliveryState: function(row, column, cellValue) {
      var ret = ""; //你想在页面展示的值
      if (cellValue === 0) {
        ret = "等待发件"; //根据自己的需求设定
      } else if (cellValue === 1) {
        ret = "已收件";
      } else if (cellValue === 2) {
        ret = "运输中";
      } else if (cellValue === 3) {
        ret = "已投递";
      } else if (cellValue === 4) {
        ret = "已取件";
      } else {
        ret = "等待受理";
      }
      return ret;
    },
    //获取用户信息列表
    getIssuedInvoiceRecordMesMes() {
      this.$axios
        .get(
          "/admin/api/receipts/state/3?token=" +
            this.token +
            "&page=" +
            this.pagenum +
            "&row=12"
        )
        .then(res => {
          if (res.status == 200) {
            this.tableData = res.data.receipts;
            this.total = res.data.total || 0;
            var pn = this.pagenum;
          }
        });
    },
    //监听页码值改变
    handleCurrentChange(newPage) {
      this.pagenum = newPage;
      this.getIssuedInvoiceRecordMesMes();
    }
  }
};
</script>

<style lang="stylus" scoped></style>
