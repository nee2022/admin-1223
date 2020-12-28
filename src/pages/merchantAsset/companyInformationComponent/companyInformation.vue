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
            v-model="input"
            clearable
          ></el-input>
        </div>
        <div class="searchButton">
          <el-button type="primary" icon="el-icon-search" @click="searchHandler"
            >搜索</el-button
          >
        </div>
        <div class="addButton">
          <el-button
            type="primary"
            icon="el-icon-circle-plus-outline"
            @click="addDialogVisible = true"
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
          <el-table-column show-overflow-tooltip prop="name" label="企业名称">
          </el-table-column>
          <el-table-column
            show-overflow-tooltip
            prop="telephone"
            label="手机号"
          >
          </el-table-column>
          <el-table-column show-overflow-tooltip prop="contact" label="联系人">
          </el-table-column>
          <el-table-column show-overflow-tooltip prop="city" label="所属城市">
          </el-table-column>
          <el-table-column
            show-overflow-tooltip
            prop="created_time"
            label="开始时间"
          >
          </el-table-column>
          <el-table-column
            show-overflow-tooltip
            prop="address"
            label="操作"
            width="200"
          >
            <template slot-scope="scope">
              <div class="operation">
                <div>
                  <img
                    src="../../../assets/images/delete.png"
                    title="删除"
                    @click="companyDeleted(scope.row.id)"
                  />
                </div>
                <div>
                  <img
                    src="../../../assets/images/compile.png"
                    title="修改"
                    @click="modifyDialogPop(scope.row)"
                  />
                </div>
                <div>
                  <img
                    src="../../../assets/images/see.png"
                    title="详情"
                    height="11px"
                  />
                </div>
              </div>
            </template>
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
    <template>
      <!-- 添加网关 -->
      <el-dialog
        title="添加支付网关"
        :visible.sync="addDialogVisible"
        width="30%"
        @close="addDialogClosed"
      >
        <el-form :model="addForm" ref="addFormRef" label-width="80px">
          <el-form-item label="企业名称" prop="name">
            <el-input v-model="addForm.name"></el-input>
          </el-form-item>
          <el-form-item label="手机号" prop="telephone">
            <el-input v-model="addForm.telephone"></el-input>
          </el-form-item>
          <el-form-item label="联系人" prop="contact">
            <el-input v-model="addForm.contact"></el-input>
          </el-form-item>
          <el-form-item label="所属城市" prop="city">
            <el-input v-model="addForm.city"></el-input>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="addDialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="companyAdded">
            确 定
          </el-button>
        </span>
      </el-dialog>
      <!-- 修改网关 -->
      <el-dialog
        title="修改公司信息"
        :visible.sync="modifyDialogVisible"
        width="30%"
      >
        <el-form :model="modifyForm" ref="modifyFormRef" label-width="80px">
          <el-form-item label="企业名称" prop="name">
            <el-input v-model="modifyForm.name"></el-input>
          </el-form-item>
          <el-form-item label="手机号" prop="telephone">
            <el-input v-model="modifyForm.telephone"></el-input>
          </el-form-item>
          <el-form-item label="联系人" prop="contact">
            <el-input v-model="modifyForm.contact"></el-input>
          </el-form-item>
          <el-form-item label="所属城市" prop="city">
            <el-input v-model="modifyForm.city"></el-input>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="modifyDialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="companyModified">
            确 定
          </el-button>
        </span>
      </el-dialog>
    </template>
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
      addDialogVisible: false,
      addForm: {
        token: localStorage.getItem("token").replace(/\"/g, ""),
        name: "",
        contact: "",
        city: ""
      },
      modifyDialogVisible: false,
      modifyId: "",
      modifyForm: {
        token: localStorage.getItem("token").replace(/\"/g, ""),
        name: "",
        contact: "",
        city: ""
      },
      input: ""
    };
  },

  mounted() {
    this.token = localStorage.getItem("token").replace(/\"/g, "");
    this.getCompanyInformationMes();
  },
  methods: {
    //获取用户信息列表
    getCompanyInformationMes() {
      this.$axios
        .get(
          "/admin/api/companies/?token=" +
            this.token +
            "&page=" +
            this.pagenum +
            "&row=12"
        )
        .then(res => {
          if (res.status == 200) {
            this.tableData = res.data.companies;
            this.total = res.data.total || 0;
            var pn = this.pagenum;
          }
        });
    },
    //监听页码值改变
    handleCurrentChange(newPage) {
      this.pagenum = newPage;
      this.getCompanyInformationMes();
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
    },
    //添加对话框关闭事件
    addDialogClosed() {
      this.$refs.addFormRef.resetFields();
    },
    //增加公司
    companyAdded() {
      this.$axios
        .post("/admin/api/company", this.addForm)
        .then(res => {
          if (res.status !== 200) {
            return this.$message.error("添加公司失败!");
          }
        })
        .then(() => {
          setTimeout(() => {
            this.$router.replace("/refresh");
          }, 888);
        })
        .then(() => {
          this.$message.success("添加公司成功!");
          this.addDialogVisible = false;
        });
    },
    //删除公司
    companyDeleted(id) {
      let enterState = true;
      let url = "/admin/api/company/" + id;
      this.$confirm("此操作将永久删除该公司信息, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$axios.delete(url, {
            params: {
              token: this.token
            }
          });
        })
        .then(() => {
          setTimeout(() => {
            this.$router.replace("/refresh");
          }, 888);
        })
        .then(() => {
          this.$message({
            type: "success",
            message: "删除成功!"
          });
        })
        .catch(() => {
          if (enterState || false) {
            this.$message({
              type: "info",
              message: "已取消删除"
            });
          } else {
            this.$message({
              type: "info",
              message: "删除失败"
            });
          }
        });
    },
    //修改公司信息
    modifyDialogPop(row) {
      this.modifyId = row.id;
      this.modifyDialogVisible = true;
    },
    companyModified() {
      let url = "/admin/api/company/" + this.modifyId;
      this.$axios
        .put(url, this.modifyForm)
        .then(res => {
          if (res.status !== 200) {
            return this.$message.error("修改公司信息失败!");
          }
        })
        .then(() => {
          setTimeout(() => {
            this.$router.replace("/refresh");
          }, 888);
        })
        .then(() => {
          this.$message.success("修改公司信息成功!");
          this.addDialogVisible = false;
        });
    },

    //查找公司
    searchHandler() {
      this.$axios
        .get(
          "/admin/api/companies/?token=" +
            this.token +
            "&page=" +
            this.pagenum +
            "&row=12&keyword=" +
            this.input
        )
        .then(res => {
          if (res.status == 200) {
            this.tableData = res.data.companies;
            this.total = res.data.total || 0;
            var pn = this.pagenum;
          }
        });
    }
  }
};
</script>

<style lang="stylus" scoped></style>
