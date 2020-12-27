<template>
  <div class="zyhFormInformationMainDetailPage">
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
          <el-button v-if="merchantValid" @click="validDialogVisible = true"
            >注销按钮</el-button
          >
          <el-button v-if="!merchantValid" @click="validDialogVisible = true"
            >激活按钮</el-button
          >
          <el-button icon="el-icon-refresh" @click="refresh">刷新</el-button>
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
    <el-dialog
      title="提示"
      :visible.sync="validDialogVisible"
      width="30%"
      :before-close="handleClose"
    >
      <span v-if="merchantValid">
        注销该商户账号
      </span>
      <span v-if="!merchantValid">
        激活该商户账号
      </span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="validDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="closeDialogAndPutValid"
          >确 定</el-button
        >
      </span>
    </el-dialog>
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
      validDialogVisible: false,
      selected: "所有",
      pagenum: 1,
      token: "",
      pagesize: 10,
      input: "",
      labelPosition: "left",
      formLabelAlign: {},
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
    this.getBasicInformation();
  },
  methods: {
    //获取用户信息列表
    getBasicInformation() {
      this.$axios
        .get(
          "http://www.api.sqjtjt.com/admin/api/agent/" +
            this.merchantId +
            "/?token=" +
            this.token +
            "&page=" +
            this.pagenum +
            "&row=10"
        )
        .then(res => {
          if (res.status == 200) {
            this.formLabelAlign = res.data.agents;
          }
        });
    },
    //刷新页面
    refresh() {
      this.$router.push("/refresh");
    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    closeDialogAndPutValid() {
      this.validDialogVisible = false;
      let url = "http://www.api.sqjtjt.com/admin/api/agent/" + this.merchantId;
      this.$axios
        .put(url, {
          token: this.token,
          valid: !this.merchantValid
        })
        .then(res => {
          if (res.status !== 200) {
            return this.$message.error("操作失败!");
          }
        })
        .then(() => {
          sessionStorage.setItem("merchantValid", !this.merchantValid);
          setTimeout(() => {
            this.$router.replace("/refresh");
          }, 888);
        })
        .then(() => {
          this.$message.success("操作成功!");
          this.addDialogVisible = false;
        });
    }
  }
};
</script>

<style lang="stylus" scoped></style>
