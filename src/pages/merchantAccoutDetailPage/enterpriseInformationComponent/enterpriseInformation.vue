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
          <el-form-item label="名称">
            <el-input v-model="formLabelAlign.name"></el-input>
          </el-form-item>
          <el-form-item label="组织机构代码">
            <el-input v-model="formLabelAlign.license"></el-input>
          </el-form-item>
          <el-form-item label="法人">
            <el-input v-model="formLabelAlign.corpration"></el-input>
          </el-form-item>
          <el-form-item label="地址">
            <el-input v-model="formLabelAlign.address"></el-input>
          </el-form-item>
          <el-form-item label="电话">
            <el-input v-model="formLabelAlign.telephone"></el-input>
          </el-form-item>
          <el-form-item label="联系人">
            <el-input v-model="formLabelAlign.contact"></el-input>
          </el-form-item>
          <el-form-item label="邮箱">
            <el-input v-model="formLabelAlign.email"></el-input>
          </el-form-item>
          <el-form-item label="公司网站">
            <el-input v-model="formLabelAlign.website"></el-input>
          </el-form-item>
          <el-form-item label="公司简介">
            <el-input v-model="formLabelAlign.brief"></el-input>
          </el-form-item>
          <el-form-item label="成立时间">
            <el-input v-model="formLabelAlign.founded_time"></el-input>
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
    this.getEnterpriseInformationMes();
  },
  methods: {
    //获取用户信息列表
    getEnterpriseInformationMes() {
      this.$axios
        .get(
          "http://www.api.sqjtjt.com/admin/api/agent/" +
            this.id +
            "/companies/?token=" +
            this.token +
            "&page=" +
            this.pagenum +
            "&row=10"
        )
        .then(res => {
          console.log("res");
          console.log(res);
          console.log("res");
          if (res.status == 200) {
            this.formLabelAlign = res.data.companies;
          }
        });
    }
  }
};
</script>

<style lang="stylus" scoped></style>
