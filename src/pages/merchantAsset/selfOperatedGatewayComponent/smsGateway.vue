<template>
  <div class="zyhSingleLineListMainPage">
    <header>
      <div class="infoArea">
        <div class="pageName">商户资产</div>
        <div class="profile"><myhead></myhead></div>
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
        <div class="addButton">
          <el-button type="primary" icon="el-icon-circle-plus-outline"
            >添加</el-button
          >
        </div>
      </div>
    </header>
    <section>
      <template>
        <el-table :data="tableData" stripe style="width: 100%">
          <el-table-column show-overflow-tooltip prop="id" label="ID">
          </el-table-column>
          <el-table-column show-overflow-tooltip prop="name" label="名称">
          </el-table-column>
          <el-table-column show-overflow-tooltip prop="appid" label="appid">
          </el-table-column>
          <el-table-column show-overflow-tooltip prop="gateway" label="网关">
          </el-table-column>
          <el-table-column
            show-overflow-tooltip
            prop="valid"
            label="是否激活"
            :formatter="formatBoolean"
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
                <img src="../../../assets/images/delete.png" title="删除" />
              </div>
              <div>
                <img src="../../../assets/images/compile.png" title="修改" />
              </div>
              <div>
                <img
                  src="../../../assets/images/see.png"
                  title="详情"
                  height="11px"
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
      pagesize: 12
    };
  },

  mounted() {
    this.token = localStorage.getItem("token");
    this.getSmsGatewayMes();
  },
  methods: {
    //获取用户信息列表
    getSmsGatewayMes() {
      this.$axios
        .get(
          "http://www.api.sqjtjt.com/admin/api/smsgws/?token=" +
            JSON.parse(this.token) +
            "&page=" +
            this.pagenum +
            "&row=14"
        )
        .then(res => {
          if (res.status == 200) {
            this.tableData = res.data.sms_gws;
            this.total = res.data.total || 0;
            var pn = this.pagenum;
          }
        });
    },
    //监听页码值改变
    handleCurrentChange(newPage) {
      this.pagenum = newPage;
      this.getSmsGatewayMes();
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
    }
  }
};
</script>

<style lang="stylus" scoped></style>
