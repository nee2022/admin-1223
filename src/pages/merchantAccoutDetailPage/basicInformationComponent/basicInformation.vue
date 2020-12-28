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
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="用户名">
          <el-input v-model="form.username" disabled></el-input>
        </el-form-item>
        <el-form-item label="手机号">
          <el-input v-model="form.telephone"></el-input>
        </el-form-item>
        <el-form-item label="居民身份证">
          <el-input v-model="form.identity" disabled></el-input>
        </el-form-item>
        <el-form-item label="运营商类型">
          <el-select v-model="form.type" placeholder="请设置运营商类型">
            <el-option label="合伙人" :value="1"></el-option>
            <el-option label="自营型" :value="2"></el-option>
            <el-option label="托管型" :value="3"></el-option>
            <el-option label="影子账号" :value="255"></el-option>
            <el-option label="其他账号" :value="0"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="提现类型">
          <el-select v-model="form.withdraw_type" placeholder="请设置提现类型">
            <el-option label="提现类型1" :value="1"></el-option>
            <el-option label="提现类型2" :value="2"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="提现费率">
          <el-input v-model="form.withdraw_rate"></el-input>
        </el-form-item>
        <el-form-item label="开户银行">
          <el-input v-model="form.bank_name"></el-input>
        </el-form-item>
        <el-form-item label="开户名">
          <el-input v-model="form.bank_username"></el-input>
        </el-form-item>
        <el-form-item label="银行账号">
          <el-input v-model="form.bank_account" disabled></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">保存</el-button>
          <el-button @click="refresh">取消</el-button>
        </el-form-item>
      </el-form>
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
      merchantValid: false,
      form: {},
      readonly: true
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
    //修改商户信息
    onSubmit() {
      this.form.token = this.token;
      let url = "/admin/api/agent/" + this.merchantId;
      this.$axios
        .put(url, this.form)
        .then(res => {
          if (res.status !== 200) {
            return this.$message.error("修改商户失败!");
          }
        })
        .then(() => {
          setTimeout(() => {
            this.$router.replace("/refresh");
          }, 888);
        })
        .then(() => {
          this.$message.success("修改商户成功!");
          this.addDialogVisible = false;
        });
    },
    //获取商户信息列表
    getBasicInformation() {
      this.$axios
        .get(
          "/admin/api/agent/" +
            this.merchantId +
            "/?token=" +
            this.token +
            "&page=" +
            this.pagenum +
            "&row=10"
        )
        .then(res => {
          if (res.status == 200) {
            // this.formLabelAlign = res.data.agents;
            this.form = res.data.agents;
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
      let url = "/admin/api/agent/" + this.merchantId;
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
