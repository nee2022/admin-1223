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
          <el-table-column show-overflow-tooltip prop="id" label="订单ID">
          </el-table-column>
          <el-table-column show-overflow-tooltip prop="dealno" label="订单号">
          </el-table-column>
          <el-table-column
            show-overflow-tooltip
            prop="gateway"
            label="退款网关"
            :formatter="formatterGateway"
          >
          </el-table-column>
          <el-table-column
            show-overflow-tooltip
            prop="refund"
            label="退款金额(/元)"
          >
          </el-table-column>
          <el-table-column
            show-overflow-tooltip
            prop="amount"
            label="账单金额(/元)"
          >
          </el-table-column>
          <el-table-column
            show-overflow-tooltip
            prop="created_time"
            label="提交时间"
          >
          </el-table-column>
          <el-table-column
            show-overflow-tooltip
            prop="refund_time"
            label="退款时间"
          >
          </el-table-column>
          <el-table-column
            show-overflow-tooltip
            prop="cause"
            label="退款原因"
          ></el-table-column>
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
    this.getRefundOrderMes();
  },
  methods: {
    formatterGateway: function(row, column, cellValue) {
      var ret = ""; //你想在页面展示的值
      if (cellValue === 0) {
        ret = "已支付"; //根据自己的需求设定
      } else if (cellValue === "gateway") {
        ret = "支付网关取值";
      } else if (cellValue === "cash") {
        ret = "现金支付";
      } else if (cellValue === "wechat") {
        ret = "微信支付";
      } else if (cellValue === "alipay") {
        ret = "支付宝支付";
      } else if (cellValue === "userpay") {
        ret = "钱包支付";
      } else if (cellValue === "cardpay") {
        ret = "储值卡支付";
      } else if (cellValue === "ums") {
        ret = "银联商务";
      } else if (cellValue === "ckej") {
        ret = "城客e家";
      } else if (cellValue === "heemoney") {
        ret = "洪城一卡通";
      } else if (cellValue === "") {
        ret = "待支付";
      } else {
        ret = "异常网关";
      }
      return ret;
    },
    formatterState: function(row, column, cellValue) {
      var ret = ""; //你想在页面展示的值
      if (cellValue === 0) {
        ret = "已支付"; //根据自己的需求设定
      } else if (cellValue === 1) {
        ret = "已退款";
      } else if (cellValue === 2) {
        ret = "已完成";
      } else if (cellValue === 3) {
        ret = "退款中";
      } else if (cellValue === 4) {
        ret = "充电中";
      } else if (cellValue === 5) {
        ret = "退款失败";
      } else if (cellValue === 6) {
        ret = "等待开始";
      } else if (cellValue === 7) {
        ret = "等待结束";
      } else if (cellValue === 8) {
        ret = "充电完成";
      } else {
        ret = "异常状态";
      }
      return ret;
    },
    //获取用户信息列表
    getRefundOrderMes() {
      this.$axios
        .get(
          "/admin/api/refunds/?token=" +
            this.token +
            "&page=" +
            this.pagenum +
            "&row=12"
        )
        .then(res => {
          if (res.status == 200) {
            this.tableData = res.data.refunds;
            this.total = res.data.total || 0;
            var pn = this.pagenum;
          }
        });
    },
    //监听页码值改变
    handleCurrentChange(newPage) {
      this.pagenum = newPage;
      this.getRefundOrderMes();
    }
  }
};
</script>

<style lang="stylus" scoped></style>
