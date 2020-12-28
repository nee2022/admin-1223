<template>
  <div class="zyhSingleLineListMainPage">
    <header>
      <div class="infoArea">
        <div class="pageName">财务管理</div>
        <div class="profile">
          <myhead></myhead>
        </div>
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
          <el-table-column show-overflow-tooltip prop="dealno" label="提现单号">
          </el-table-column>
          <el-table-column
            show-overflow-tooltip
            prop="name"
            label="申请人"
          ></el-table-column>
          <el-table-column show-overflow-tooltip prop="state" label="状态">
          </el-table-column>
          <el-table-column show-overflow-tooltip prop="amount" label="金额">
          </el-table-column>
          <el-table-column
            show-overflow-tooltip
            prop="submit_time"
            label="提交时间"
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
                <img src="../../../assets/images/delete.png" />
              </div>
              <div>
                <el-button type="text" @click="dialogVisible = true"
                  ><img src="../../../assets/images/compile.png"
                /></el-button>
              </div>
              <div>
                <img src="../../../assets/images/top-up.png" />
              </div>
              <div>
                <img src="../../../assets/images/Prepaid phone password.png" />
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
    this.getWithdrawalRecordMes();
  },
  methods: {
    //获取用户信息列表
    getWithdrawalRecordMes() {
      this.$axios
        .get(
          "/admin/api/withdraws/?token=" +
            JSON.parse(this.token) +
            "&page=" +
            this.pagenum +
            "&row=12"
        )
        .then(res => {
          if (res.status == 200) {
            this.tableData = res.data.withdraw_logs;
            this.total = res.data.total || 0;
            var pn = this.pagenum;
          }
        });
    },
    //监听页码值改变
    handleCurrentChange(newPage) {
      this.pagenum = newPage;
      this.getWithdrawalRecordMes();
    }
  }
};
</script>

<style lang="stylus" scoped></style>
