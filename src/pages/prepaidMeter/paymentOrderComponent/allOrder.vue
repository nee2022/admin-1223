<template>
  <div class="zyhSingleLineListMainPage">
    <header>
      <div class="infoArea">
        <div class="pageName">预付费电表</div>
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
      </div>
    </header>
    <section>
      <template>
        <el-table :data="tableData" stripe style="width: 100%">
          <el-table-column show-overflow-tooltip prop="id" label="订单ID">
          </el-table-column>
          <el-table-column show-overflow-tooltip prop="deal_no" label="订单号">
          </el-table-column>
          <el-table-column
            show-overflow-tooltip
            prop="gateway"
            label="支付网关"
          >
          </el-table-column>
          <el-table-column show-overflow-tooltip prop="income" label="订单收入">
          </el-table-column>
          <el-table-column show-overflow-tooltip prop="pay" label="支付金额">
          </el-table-column>
          <el-table-column
            show-overflow-tooltip
            prop="refund"
            label="退款金额"
          ></el-table-column>
          <el-table-column
            show-overflow-tooltip
            prop="paid_time"
            label="支付时间"
          ></el-table-column>
          <el-table-column
            show-overflow-tooltip
            prop="state"
            label="状态"
          ></el-table-column>
          <el-table-column
            show-overflow-tooltip
            prop="address"
            label="操作"
            width="200"
          >
            <template slot-scope="scope">
              <div class="operation">
                <div @click="refundDialogPop(scope.row)">
                  <img
                    src="../../../assets/images/refund.png"
                    title="退款"
                    class="refundIcon"
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
      <!-- 账单退款 -->
      <el-dialog
        title="账单退款"
        :visible.sync="refundDialogVisible"
        width="30%"
        @close="refundDialogVisible"
      >
        <el-form :model="refundForm" ref="addFormRef" label-width="80px">
          <el-form-item label="金额" prop="amount">
            <el-input v-model="refundForm.amount"></el-input>
          </el-form-item>
          <el-form-item label="网关" prop="gateway">
            <el-input v-model="refundForm.gateway"></el-input>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="refundDialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="refund">
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
      pagesize: 12,
      refundDialogVisible: false,
      refundId: "",
      refundForm: {
        token: localStorage.getItem("token").replace(/\"/g, ""),
        amount: "",
        gateway: ""
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
    this.getOrderRecordMes();
  },
  methods: {
    //获取用户信息列表
    getOrderRecordMes() {
      this.$axios
        .get(
          "/admin/api/payments/?token=" +
            this.token +
            "&page=" +
            this.pagenum +
            "&row=12"
        )
        .then(res => {
          if (res.status == 200) {
            this.tableData = res.data.payments;
            this.total = res.data.total || 0;
            var pn = this.pagenum;
          }
        });
    },
    //监听页码值改变
    handleCurrentChange(newPage) {
      this.pagenum = newPage;
      this.getOrderRecordMes();
    },
    //添加对话框关闭事件
    refundDialogClosed() {
      this.$refs.addFormRef.resetFields();
    },
    //弹出商户账号修改对话框
    refundDialogPop(row) {
      this.refundId = row.id;
      this.refundDialogVisible = true;
    },
    //账单退款
    refund(id) {
      this.$axios
        .post("/admin/api/payment/" + this.refundId + "/refund", this.addForm)
        .then(res => {
          if (res.status !== 200) {
            return this.$message.error("退款失败!");
          }
        })
        .then(() => {
          setTimeout(() => {
            this.$router.replace("/refresh");
          }, 888);
        })
        .then(() => {
          this.$message.success("退款成功!");
          this.addDialogVisible = false;
        });
    },
    //删除商户账号
    merchantAccountDeleted(id) {
      let enterState = true;
      let url = "/admin/api/agent/" + id;
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
      let url = "/admin/api/agent/" + this.modifyId;
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
        "/admin/api/agents" +
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
    }
  }
};
</script>

<style lang="stylus" scoped></style>>
