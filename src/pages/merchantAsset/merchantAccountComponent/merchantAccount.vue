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
            placeholder="请输入账号、手机号在全局中进行查找"
            class="inputBlank"
            v-model="input"
            clearable
          ></el-input>
        </div>
        <div class="searchButton">
          <el-button
            type="primary"
            icon="el-icon-search"
            @click.native="searchHandler"
          >
            搜索
          </el-button>
        </div>
        <div class="addButton">
          <el-button
            icon="el-icon-circle-plus-outline"
            type="primary"
            @click="addDialogVisible = true"
          >
            添加
          </el-button>
        </div>
      </div>
    </header>
    <section>
      <template>
        <el-table :data="tableData" stripe style="width: 100%">
          <el-table-column show-overflow-tooltip prop="id" label="用户ID">
          </el-table-column>
          <el-table-column show-overflow-tooltip prop="username" label="账号">
          </el-table-column>
          <el-table-column show-overflow-tooltip prop="telephone" label="手机">
          </el-table-column>
          <el-table-column show-overflow-tooltip prop="type" label="状态">
          </el-table-column>
          <el-table-column show-overflow-tooltip prop="income" label="钱包余额">
          </el-table-column>
          <el-table-column
            show-overflow-tooltip
            prop="percent"
            label="分成比例"
          >
          </el-table-column>
          <el-table-column
            show-overflow-tooltip
            prop="date_created"
            label="注册时间"
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
                <div @click="merchantAccountDeleted(scope.row.id)">
                  <img src="../../../assets/images/delete.png" title="删除" />
                </div>
                <div @click="modifyDialogPop(scope.row)">
                  <img src="../../../assets/images/compile.png" title="修改" />
                </div>
                <div @click="merchantMessage(scope.row.id, scope.row.username)">
                  <a href="/#/merchantAccoutDetailPage/basicInformation">
                    <div class="wrapper">
                      <img
                        src="../../../assets/images/see.png"
                        title="详情"
                        height="11px"
                      />
                    </div>
                  </a>
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
      <!-- 添加商户账号 -->
      <el-dialog
        title="添加商户账号"
        :visible.sync="addDialogVisible"
        width="30%"
        @close="addDialogClosed"
      >
        <el-form :model="addForm" ref="addFormRef" label-width="80px">
          <el-form-item label="用户" prop="username">
            <el-input v-model="addForm.username"></el-input>
          </el-form-item>
          <el-form-item label="手机号" prop="telephone">
            <el-input v-model="addForm.telephone"></el-input>
          </el-form-item>
          <el-form-item label="状态" prop="type">
            <el-input v-model="addForm.type"></el-input>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="addDialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="merchantAccountAdded">
            确 定
          </el-button>
        </span>
      </el-dialog>
      <!-- 修改商户账号 -->
      <el-dialog
        title="修改商户账号"
        :visible.sync="modifyDialogVisible"
        width="30%"
      >
        <el-form :model="modifyForm" ref="modifyFormRef" label-width="80px">
          <el-form-item label="手机号" prop="telephone">
            <el-input v-model="modifyForm.telephone"></el-input>
          </el-form-item>
          <el-form-item label="状态" prop="type">
            <el-input v-model="modifyForm.type"></el-input>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="modifyDialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="merchantAccoutModified">
            确 定
          </el-button>
        </span>
      </el-dialog>
    </template>
  </div>
</template>

<script>
import myhead from "../../../components/myhead";
import Vue from "vue";
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
      selected: "所有",
      pagenum: 1,
      token: "",
      pagesize: 12,
      addDialogVisible: false,
      addForm: {
        token: localStorage.getItem("token").replace(/\"/g, ""),
        username: "",
        telephone: "",
        type: ""
      },
      modifyDialogVisible: false,
      modifyId: "",
      modifyForm: {
        token: localStorage.getItem("token").replace(/\"/g, ""),
        username: "",
        telephone: "",
        type: ""
      },
      input: ""
    };
  },

  mounted() {
    this.token = localStorage.getItem("token").replace(/\"/g, "");
    this.getMerchantAccountMes();
  },
  methods: {
    //获取用户信息列表
    getMerchantAccountMes() {
      this.$axios
        .get(
          "http://www.api.sqjtjt.com/admin/api/agents" +
            this.$route.params.pathMatch.slice(20) +
            "/?token=" +
            this.token +
            "&page=" +
            this.pagenum +
            "&row=12"
        )
        .then(res => {
          if (res.status == 200) {
            this.tableData = res.data.agentss || res.data.agents;
            this.total = res.data.total || 0;
          }
        });
    },
    //监听页码值改变
    handleCurrentChange(newPage) {
      this.pagenum = newPage;
      this.getMerchantAccountMes();
    },
    //添加对话框关闭事件
    addDialogClosed() {
      this.$refs.addFormRef.resetFields();
    },
    //增加商户账号
    merchantAccountAdded() {
      this.$axios
        .post("http://www.api.sqjtjt.com/admin/api/agent", this.addForm)
        .then(res => {
          if (res.status !== 200) {
            return this.$message.error("添加用户失败!");
          }
        })
        .then(() => {
          setTimeout(() => {
            this.$router.replace("/refresh");
          }, 888);
        })
        .then(() => {
          this.$message.success("添加用户成功!");
          this.addDialogVisible = false;
        });
    },
    //删除商户账号
    merchantAccountDeleted(id) {
      let enterState = true;
      let url = "http://www.api.sqjtjt.com/admin/api/agent/" + id;
      this.$confirm("此操作将永久删除该账号, 是否继续?", "提示", {
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
    //弹出商户账号修改对话框
    modifyDialogPop(row) {
      this.modifyId = row.id;
      this.modifyDialogVisible = true;
    },
    merchantAccoutModified() {
      let url = "http://www.api.sqjtjt.com/admin/api/agent/" + this.modifyId;
      this.$axios
        .put(url, this.modifyForm)
        .then(res => {
          if (res.status !== 200) {
            return this.$message.error("修改用户失败!");
          }
        })
        .then(() => {
          setTimeout(() => {
            this.$router.replace("/refresh");
          }, 888);
        })
        .then(() => {
          this.$message.success("修改用户成功!");
          this.addDialogVisible = false;
        });
    },

    //查找商户账号
    searchHandler() {
      let url =
        "http://www.api.sqjtjt.com/admin/api/agents" +
        "/?token=" +
        this.token +
        "&page=" +
        this.pagenum +
        "&row=12&keyword=" +
        this.input;
      this.$axios.get(url).then(res => {
        if (res.status == 200) {
          this.tableData = res.data.agentss || res.data.agents;
          this.total = res.data.total || 0;
        }
      });
    },
    merchantMessage(id, username) {
      console.log(id);
      console.log(username);
      sessionStorage.setItem("merchantId", id);
      sessionStorage.setItem("merchantName", username);
      this.$router.push({
        path: "/essentialInformation"
      });
    }
  },
  watch: {
    $route() {
      this.getMerchantAccountMes();
    }
  }
};
</script>

<style lang="stylus" scoped>
//
</style>
