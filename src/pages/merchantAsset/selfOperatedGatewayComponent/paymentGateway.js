import myhead from "../../../components/myhead.vue";
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
      pagesize: 12,
      addDialogVisible: false,
      addForm: {
        token: localStorage.getItem("token").replace(/\"/g, ""),
        name: "",
        appid: "",
        gateway: ""
      },
      modifyDialogVisible: false,
      modifyId: "",
      modifyForm: {
        token: localStorage.getItem("token").replace(/\"/g, ""),
        name: "",
        appid: "",
        gateway: ""
      },
      input: "",
      chart: true,
      value: true
    };
  },

  mounted() {
    this.token = localStorage.getItem("token").replace(/\"/g, "");
    this.getPaymentGatewayMes();
  },
  methods: {
    paymentGateway(gateway) {
      if (gateway === "wechat") {
        return "../../../assets/images/WECHAT.png";
      } else if (gateway === "alipay") {
        return "../../../assets/images/alipay.png";
      } else if (gateway === "heemoney") {
        return "../../../assets/images/Payment-l gateway.png";
      } else if (gateway === "cash") {
        return "../../../assets/images/China Construction Bank.png";
      }
      return "../../../assets/images/WECHAT.png";
    },
    toggleListTable() {
      this.pagesize = 12;
      this.getPaymentGatewayMes();
      this.chart = false;
    },
    toggleChartTable() {
      this.pagesize = 12;
      this.getPaymentGatewayMes();
      this.chart = true;
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
        ret = "储值卡支付";
      } else if (cellValue === "aliyun") {
        ret = "阿里云";
      } else if (cellValue === "moredo") {
        ret = "盟度";
      } else if (cellValue === "pt") {
        ret = "票通";
      } else {
        ret = "网关异常";
      }
      return ret;
    },
    //获取用户信息列表
    getPaymentGatewayMes() {
      this.$axios
        .get(
          "/admin/api/paygws/?token=" +
            this.token +
            "&page=" +
            this.pagenum +
            "&row=12"
        )
        .then(res => {
          if (res.status == 200) {
            this.tableData = res.data.paygws;
            this.total = res.data.total || 0;
            var pn = this.pagenum;
          }
        });
    },
    //监听页码值改变
    handleCurrentChange(newPage) {
      this.pagenum = newPage;
      this.getPaymentGatewayMes();
    },
    /*布尔值格式化：cellValue为后台返回的值*/
    formatBoolean: function(row, column, cellValue) {
      var ret = ""; //你想在页面展示的值
      if (cellValue) {
        ret = "是"; //根据自己的需求设定
      } else {
        ret = "否";
      }
      return ret;
    },
    //添加对话框关闭事件
    addDialogClosed() {
      this.$refs.addFormRef.resetFields();
    },
    //增加网关
    paymentGatewayAdded() {
      this.$axios
        .post("/admin/api/paygw", this.addForm)
        .then(res => {
          if (res.status !== 200) {
            return this.$message.error("添加网关失败!");
          }
        })
        .then(() => {
          setTimeout(() => {
            this.$router.replace("/refresh");
          }, 888);
        })
        .then(() => {
          this.$message.success("添加网关成功!");
          this.addDialogVisible = false;
        });
    },
    //删除网关
    paymentGatewayDeleted(id) {
      let enterState = true;
      let url = "/admin/api/paygw/" + id;
      this.$confirm("此操作将永久删除该网关, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$axios.delete(url, {
            params: {
              token: this.token
            }
          });
        })
        .then(() => {
          setTimeout(() => {
            this.$router.replace("/refresh");
          }, 888);
        })
        .then(() => {
          this.$message({
            type: "success",
            message: "删除成功!"
          });
        })
        .catch(() => {
          if (enterState || false) {
            this.$message({
              type: "info",
              message: "已取消删除"
            });
          } else {
            this.$message({
              type: "info",
              message: "删除失败"
            });
          }
        });
    },
    //修改网关对话框
    modifyDialogPop(row) {
      this.modifyId = row.id;
      this.modifyDialogVisible = true;
    },
    paymentGatewayModified() {
      let url = "/admin/api/paygw/" + this.modifyId;
      this.$axios
        .put(url, this.modifyForm)
        .then(res => {
          if (res.status !== 200) {
            return this.$message.error("修改网关失败!");
          }
        })
        .then(() => {
          setTimeout(() => {
            this.$router.replace("/refresh");
          }, 888);
        })
        .then(() => {
          this.$message.success("修改网关成功!");
          this.addDialogVisible = false;
        });
    },

    //查找网关
    searchHandler() {
      this.$axios
        .get(
          "/admin/api/paygws/?token=" +
            this.token +
            "&page=" +
            this.pagenum +
            "&row=12&keyword=" +
            this.input
        )
        .then(res => {
          if (res.status == 200) {
            this.tableData = res.data.paygws;
            this.total = res.data.total || 0;
          }
        });
    }
  }
};
