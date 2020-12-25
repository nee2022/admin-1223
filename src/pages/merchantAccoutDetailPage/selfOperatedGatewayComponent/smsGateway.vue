<template>
  <div class="zyhSingleLineListMainDetailPage">
    <header>
      <div class="infoArea">
        <div class="selfProfile">
          <myhead></myhead>
        </div>
        <div class="merchantAccoutScan">
          <div class="picture"></div>
          <p>商户名</p>
          <p>(运行中)</p>
          <el-button type="primary">返回上一级页面</el-button>
          <div class="blank"></div>
          <el-button>注销按钮</el-button>
          <el-button>刷新</el-button>
        </div>
      </div>
      <div class="searchArea">
        <div class="inputFrame">
          <img src="../../../assets/images/search.png" />
          <el-input
            placeholder="请输入名称进行查找"
            class="inputBlank"
            v-model="input"
            clearable
          ></el-input>
        </div>
        <div class="searchButton">
          <el-button type="primary" icon="el-icon-search" @click="searchHandler"
            >查询</el-button
          >
        </div>
        <div class="addButton">
          <el-button
            icon="el-icon-circle-plus-outline"
            type="primary"
            @click="addDialogVisible = true"
          >
            导出
          </el-button>
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
          <el-table-column show-overflow-tooltip prop="gateway" label="网关">
          </el-table-column>
          <el-table-column show-overflow-tooltip prop="appid" label="appid">
          </el-table-column>
          <el-table-column show-overflow-tooltip prop="valid" label="是否激活">
          </el-table-column>

          <!-- <el-table-column
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
          </el-table-column> -->
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
      pagesize: 10,
      input: "",
      id: 239
    };
  },

  mounted() {
    this.token = localStorage.getItem("token").replace(/\"/g, "");
    this.getShareRecordMes();
  },
  methods: {
    //获取用户信息列表
    getShareRecordMes() {
      this.$axios
        .get(
          "http://www.api.sqjtjt.com/admin/api/agent/" +
            this.id +
            "/smsgws/?token=" +
            this.token +
            "&page=" +
            this.pagenum +
            "&row=10"
        )
        .then(res => {
          console.log(res);
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
      this.getShareRecordMes();
    },
    //查找账单
    searchHandler() {
      this.$axios
        .get(
          "http://www.api.sqjtjt.com/admin/api/agent/" +
            this.id +
            "/smsgws/?token=" +
            this.token +
            "&page=" +
            this.pagenum +
            "&row=10&keyword=" +
            this.input
        )
        .then(res => {
          console.log(res);
          if (res.status == 200) {
            this.tableData = res.data.sms_gws;
            this.total = res.data.total || 0;
            var pn = this.pagenum;
          }
        });
    }
  }
};
</script>

<style lang="stylus" scoped></style>
