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
      pagesize: 18,
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
      this.pagesize = 18;
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
              if (i === 0) {
                this.tableData[i].styleId = i + 1;
              } else {
                this.tableData[i].styleId = i;
              }
              this.tableData[i].floorArray = [1, 2, 3, 4, 5, 6, 7];
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
