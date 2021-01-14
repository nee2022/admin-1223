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
      pagesize: 12,
      chart: true
    };
  },

  mounted() {
    this.token = localStorage.getItem("token").replace(/\"/g, "");
    this.getAllInvoiceRecordMes();
  },
  methods: {
    toggleListTable() {
      this.pagesize = 12;
      this.getAllInvoiceRecordMes();
      this.chart = false;
    },
    toggleChartTable() {
      this.pagesize = 12;
      this.getAllInvoiceRecordMes();
      this.chart = true;
    },
    //获取用户信息列表
    getAllInvoiceRecordMes(resolve, reject) {
      this.$axios
        .get(
          "/admin/api/chargers/1/?token=" +
            this.token +
            "&page=" +
            this.pagenum +
            "&row=" +
            this.pagesize
        )
        .then(res => {
          if (res.status == 200) {
            this.tableData = res.data.chargers;
            for (let i = 0; i < this.tableData.length; i++) {
              this.tableData[i].styleId = i;
            }
            this.total = res.data.total || 0;
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
