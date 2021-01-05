<template>
  <div class="zyhTrackPlaybackPage">
    <div id="container"></div>
    <div class="pageInfoLayer">
      <div class="infoArea">
        <div class="pageName">轨迹回放</div>
        <div class="profile">
          <myhead></myhead>
        </div>
      </div>
      <div class="searchArea">
        <div class="inputFrame">
          <el-input
            class="in"
            prefix-icon="el-icon-search"
            v-model="input"
            placeholder="请输入内容"
          ></el-input>
        </div>
      </div>
    </div>
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
    this.getAllInvoiceRecordMes();
    var map = new AMap.Map("container", {
      resizeEnable: true, //是否监控地图容器尺寸变化
      zoom: 11, //初始化地图层级
      center: [116.397428, 39.90923] //初始化地图中心点
    });
  },
  methods: {
    //获取用户信息列表
    getAllInvoiceRecordMes() {
      this.$axios
        .get(
          "/admin/api/operator/logs/?token=" +
            this.token +
            "&page=" +
            this.pagenum +
            "&row=12&dt=20200924"
        )
        .then(res => {
          if (res.status == 200) {
            this.tableData = res.data.logs;
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
</script>

<style lang="stylus" scoped></style>
