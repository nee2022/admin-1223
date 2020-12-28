<template>
  <div class="zyhSingleLineListMainDetailPage">
    <header>
      <div class="infoArea">
        <div class="selfProfile">
          <myhead></myhead>
        </div>
        <div class="merchantAccoutScan">
          <div class="picture">
            <img src="../../../assets/images/merchantAvatar.svg" alt="" />
          </div>
          <p>{{ this.merchantName }}</p>

          <p v-if="merchantValid" class="validAccount">(运行中)</p>
          <p v-if="!merchantValid" class="invalidAccount">(已停用)</p>
          <!-- <el-button type="primary">返回上一级页面</el-button> -->
          <div class="blank"></div>
          <!-- <el-button v-if="merchantValid" @click="validDialogVisible = true"
            >注销按钮</el-button
          >
          <el-button v-if="!merchantValid" @click="validDialogVisible = true"
            >激活按钮</el-button
          > -->
          <el-button icon="el-icon-refresh" @click="refresh">刷新</el-button>
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

          <el-table-column
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
      pagesize: 10,
      input: "",
      id: 239,
      merchantName: "",
      merchantId: 0,
      merchantValid: false
    };
  },

  mounted() {
    this.token = localStorage.getItem("token").replace(/\"/g, "");
    this.merchantId = sessionStorage.getItem("merchantId");
    this.merchantName = sessionStorage.getItem("merchantName");
    let storageMerchantValid = sessionStorage.getItem("merchantValid");
    if (storageMerchantValid === "true") {
      this.merchantValid = true;
    }
    this.getShareRecordMes();
  },
  methods: {
    //刷新页面
    refresh() {
      this.$router.push("/refresh");
    },
    //获取用户信息列表
    getShareRecordMes() {
      this.$axios
        .get(
          "/admin/api/agent/" +
            this.id +
            "/smsgws/?token=" +
            this.token +
            "&page=" +
            this.pagenum +
            "&row=10"
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
      this.getShareRecordMes();
    },
    //查找账单
    searchHandler() {
      this.$axios
        .get(
          "/admin/api/agent/" +
            this.id +
            "/smsgws/?token=" +
            this.token +
            "&page=" +
            this.pagenum +
            "&row=10&keyword=" +
            this.input
        )
        .then(res => {
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
