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
          <el-table-column show-overflow-tooltip prop="deal_no" label="订单号">
          </el-table-column>
          <el-table-column
            show-overflow-tooltip
            prop="service"
            label="业务类型"
            :formatter="formatterService"
          >
          </el-table-column>
          <el-table-column
            show-overflow-tooltip
            prop="gateway"
            label="支付网关"
            :formatter="formatterGateway"
          >
          </el-table-column>
          <el-table-column
            show-overflow-tooltip
            prop="income"
            label="订单收入(/元)"
          >
          </el-table-column>
          <el-table-column
            show-overflow-tooltip
            prop="pay"
            label="支付金额(/元)"
          >
          </el-table-column>
          <el-table-column
            show-overflow-tooltip
            prop="refund"
            label="退款金额(/元)"
          ></el-table-column>
          <el-table-column
            show-overflow-tooltip
            prop="paid_time"
            label="支付时间"
          >
          </el-table-column>
          <el-table-column
            show-overflow-tooltip
            prop="state"
            label="状态"
            :formatter="formatterState"
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
    this.getAllOrderMes();
  },
  methods: {
    formatterService: function(row, column, cellValue) {
      var ret = ""; //你想在页面展示的值
      if (cellValue === 0) {
        ret = "无"; //根据自己的需求设定
      } else if (cellValue === 1) {
        ret = "钱包充值";
      } else if (cellValue === 2) {
        ret = "套餐购买/续费";
      } else if (cellValue === 3) {
        ret = "优惠券领取/发放";
      } else if (cellValue === 4) {
        ret = "储值卡充值";
      } else if (cellValue === 5) {
        ret = "退款";
      } else if (cellValue === 10) {
        ret = "充电";
      } else if (cellValue === 11) {
        ret = "充电";
      } else if (cellValue === 12) {
        ret = "充电";
      } else if (cellValue === 13) {
        ret = "充电";
      } else if (cellValue === 14) {
        ret = "充电";
      } else if (cellValue === 15) {
        ret = "充电";
      } else if (cellValue === 16) {
        ret = "预付费电表";
      } else if (cellValue === 20) {
        ret = "停车";
      } else if (cellValue === 21) {
        ret = "表类";
      } else if (cellValue === 22) {
        ret = "水表";
      } else if (cellValue === 30) {
        ret = "电表";
      } else if (cellValue === 31) {
        ret = "气表";
      } else if (cellValue === 32) {
        ret = "电表";
      } else if (cellValue === 33) {
        ret = "气表";
      } else if (cellValue === 40) {
        ret = "视频";
      } else if (cellValue === 50) {
        ret = "车辆监控";
      } else if (cellValue === 51) {
        ret = "车辆监控";
      } else if (cellValue === 52) {
        ret = "车辆监控";
      } else if (cellValue === 53) {
        ret = "车辆监控";
      } else {
        ret = "业务类型异常";
      }
      return ret;
    },
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
      } else if (cellValue === "heemoney") {
        ret = "洪城一卡通";
      } else if (cellValue === "aliyun") {
        ret = "阿里云";
      } else if (cellValue === "moredo") {
        ret = "盟度";
      } else if (cellValue === "pt") {
        ret = "票通";
      } else if (cellValue === "abc") {
        ret = "农行";
      } else if (cellValue === "hxb") {
        ret = "华夏银行";
      } else if (cellValue === "cardpay") {
        ret = "储值卡";
      } else if (cellValue === "sgcc") {
        ret = "国网";
      } else if (cellValue === "uniev") {
        ret = "联行";
      } else if (cellValue === "plan") {
        ret = "套餐支付";
      } else if (cellValue === "coupon") {
        ret = "优惠券支付";
      } else if (cellValue === "ums") {
        ret = "银联商务";
      } else if (cellValue === "ckej") {
        ret = "城客e家";
      } else if (cellValue === "open") {
        ret = "开放平台";
      } else if (cellValue === "oam") {
        ret = "运维调试";
      } else if (cellValue === "api") {
        ret = "内部接口";
      } else {
        ret = cellValue;
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
        ret = cellValue;
      }
      return ret;
    },
    //获取用户信息列表
    getAllOrderMes() {
      this.$axios
        .get(
          "/admin/api/payments/?token=" +
            this.token +
            "&page=" +
            this.pagenum +
            "&row=12"
        )
        .then(res => {
          if (res.status == 200) {
            this.tableData = res.data.payments;
            this.total = res.data.total || 0;
            var pn = this.pagenum;
          }
        });
    },
    //监听页码值改变
    handleCurrentChange(newPage) {
      this.pagenum = newPage;
      this.getAllOrderMes();
    }
  }
};
</script>

<style lang="stylus" scoped></style>
