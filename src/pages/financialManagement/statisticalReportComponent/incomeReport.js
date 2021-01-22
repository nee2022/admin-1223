import myhead from "../../../components/myhead";

export default {
  components: {
    myhead
  },
  data() {
    return {
      tableData: [
        {
          date: "2016-05-03",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-08",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-06",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        }
      ],
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
    // getAllInvoiceRecordMes(resolve, reject) {
    //   this.$axios
    //     .get(
    //       "/admin/api/chargers/1/?token=" +
    //         this.token +
    //         "&page=" +
    //         this.pagenum +
    //         "&row=" +
    //         this.pagesize
    //     )
    //     .then(res => {
    //       if (res.status == 200) {
    //         this.tableData = res.data.chargers;
    //         this.total = res.data.total || 0;
    //       }
    //     });
    // },
    //监听页码值改变
    handleCurrentChange(newPage) {
      this.pagenum = newPage;
      this.getAllInvoiceRecordMes();
    }
  }
};
