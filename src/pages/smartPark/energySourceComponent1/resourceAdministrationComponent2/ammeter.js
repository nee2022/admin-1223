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
          "/admin/api/chargers/1/?token=" +
            this.token +
            "&page=" +
            this.pagenum +
            "&row=12"
        )
        .then(res => {
          if (res.status == 200) {
            this.tableData = res.data.chargers;
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
