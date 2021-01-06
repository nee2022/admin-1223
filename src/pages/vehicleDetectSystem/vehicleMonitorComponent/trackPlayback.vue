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
            placeholder="请输入车牌号进行查找"
          ></el-input>
        </div>
        <template>
          <div class="block">
            <el-date-picker
              v-model="value"
              type="datetimerange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
            >
            </el-date-picker>
          </div>
        </template>
        <div class="searchButton">
          <el-button
            type="primary"
            icon="el-icon-search"
            @click.native="searchHandler"
          >
            查找
          </el-button>
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
      pagesize: 12,
      pickerOptions: {
        shortcuts: [
          {
            text: "最近一周",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近一个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近三个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit("pick", [start, end]);
            }
          }
        ]
      }
    };
  },
  computed: {
    value() {
      let start = new Date();
      let end = new Date();
      start.setTime(start.getTime() - 3600 * 1000);
      return [start, end];
    }
  },
  mounted() {
    this.token = localStorage.getItem("token").replace(/\"/g, "");
    this.getAllInvoiceRecordMes();
    var map = new AMap.Map("container");
    AMap.plugin(["AMap.Driving"], function() {
      var drivingOption = {
        policy: AMap.DrivingPolicy.LEAST_TIME,
        map: map
      };
      var driving = new AMap.Driving(drivingOption); //构造驾车导航类
      //根据起终点坐标规划驾车路线
      driving.search(
        [
          { keyword: "北京站", city: "010" },
          { keyword: "北京大学", city: "010" }
        ],
        function(status, result) {
          button.onclick = function() {
            driving.searchOnAMAP({
              origin: result.origin,
              destination: result.destination
            });
          };
        }
      );
    });
    map.addControl(new AMap.ToolBar());

    var button = document.getElementById("callApp");
    if (AMap.UA.mobile) {
      document.getElementsByClassName("info")[0].style.display = "none";
      button.style.fontSize = "16px";
    } else {
      button.style.marginRight = "10px";
    }
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
