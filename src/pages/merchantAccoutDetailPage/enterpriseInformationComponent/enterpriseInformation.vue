<template>
  <div class="zyhFormInformationMainDetailPage">
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
    </header>
    <section>
      <template>
        <el-form
          :label-position="labelPosition"
          label-width="200px"
          :model="formLabelAlign"
        >
          <el-form-item label="用户名">
            <el-input v-model="formLabelAlign.username"></el-input>
          </el-form-item>
          <el-form-item label="手机号">
            <el-input v-model="formLabelAlign.telephone"></el-input>
          </el-form-item>
          <el-form-item label="居民身份证">
            <el-input v-model="formLabelAlign.identity"></el-input>
          </el-form-item>
          <el-form-item label="运营商类型">
            <el-input v-model="formLabelAlign.type"></el-input>
          </el-form-item>
          <el-form-item label="提现类型">
            <el-input v-model="formLabelAlign.withdraw_type"></el-input>
          </el-form-item>
          <el-form-item label="提现费率">
            <el-input v-model="formLabelAlign.withdraw_rate"></el-input>
          </el-form-item>
          <el-form-item label="开户银行">
            <el-input v-model="formLabelAlign.bank_name"></el-input>
          </el-form-item>
          <el-form-item label="开户名">
            <el-input v-model="formLabelAlign.bank_username"></el-input>
          </el-form-item>
          <el-form-item label="银行账号">
            <el-input v-model="formLabelAlign.bank_account"></el-input>
          </el-form-item>
        </el-form>
      </template>
    </section>
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
      labelPosition: "left",
      formLabelAlign: {}
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
          "http://www.api.sqjtjt.com/admin/api/company/" +
            this.id +
            "/?token=" +
            this.token +
            "&page=" +
            this.pagenum +
            "&row=10"
        )
        .then(res => {
          console.log(res);
          if (res.status == 200) {
            this.formLabelAlign = res.data.company;
          }
        });
    }
  }
};
</script>

<style lang="stylus" scoped></style>
