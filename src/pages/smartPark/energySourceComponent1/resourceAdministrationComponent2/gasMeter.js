import myhead from "../../../../components/myhead";

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
      chart: false
    };
  },

  mounted() {
    this.token = localStorage.getItem("token").replace(/\"/g, "");
    this.getAllInvoiceRecordMes();
  },
  methods: {
    toggleListTable() {
      this.chart = false;
      this.pagesize = 12;
      this.getAllInvoiceRecordMes();
    },
    toggleChartTable() {
      this.chart = true;
      this.pagesize = 16;
      this.getAllInvoiceRecordMes();
    },
    //获取用户信息列表
    getAllInvoiceRecordMes() {
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
            console.log(this.tableData);
            this.tableData = res.data.chargers;
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
