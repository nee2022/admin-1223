<template>
  <div class="zyhDepartmentManagementMainPage">
    <header>
      <div class="infoArea">
        <div class="pageName">部门管理</div>
        <div class="profile">
          <myhead></myhead>
        </div>
      </div>
    </header>
    <section>
      <div class="asidePart">
        <div class="wrapper">
          <div class="searchArea">
            <el-input
              placeholder="查找关键词"
              v-model="retrieveDepartmentInput"
              @change="retrieveDepartment"
            >
            </el-input>
            <img src="../../../assets/images/search.png" />
            <el-button
              type="primary"
              icon="el-icon-circle-plus-outline"
              @click="createDepartmentDialogVisible = true"
            >
              添加部门
            </el-button>
          </div>
          <div class="departmentListArea">
            <el-tree
              :data="tableData1"
              :props="defaultProps"
              @node-click="handleNodeClick"
            ></el-tree>
          </div>
        </div>
      </div>
      <div class="mainPart">
        <div class="wrapper">
          <div class="searchArea">
            <el-input placeholder="请输入员工用户名或工号"> </el-input>
            <img src="../../../assets/images/search.png" />
            <el-button icon="el-icon-search" @click="refresh">查询</el-button>
            <el-button
              type="primary"
              icon="el-icon-circle-plus-outline"
              @click="createStaffDialogVisible = true"
            >
              添加员工
            </el-button>
            <el-button icon="el-icon-refresh" @click="refresh">刷新</el-button>
            <!-- <el-button type="primary" icon="el-icon-circle-plus-outline"
              >分配角色</el-button
            > -->
          </div>
          <template>
            <el-table
              ref="multipleTable"
              :data="tableData2"
              tooltip-effect="dark"
              style="width: 100%"
              stripe
            >
              <el-table-column show-overflow-tooltip type="selection">
              </el-table-column>
              <el-table-column
                show-overflow-tooltip
                prop="fullname"
                label="员工名"
              >
              </el-table-column>
              <el-table-column
                show-overflow-tooltip
                prop="password"
                label="密码"
              >
              </el-table-column>
              <!-- <el-table-column show-overflow-tooltip prop="role" label="角色">
              </el-table-column> -->
              <el-table-column
                show-overflow-tooltip
                prop="telephone"
                label="手机"
              >
              </el-table-column>
              <el-table-column show-overflow-tooltip prop="email" label="邮箱">
              </el-table-column>
              <el-table-column show-overflow-tooltip prop="weixin" label="微信">
              </el-table-column>
              <el-table-column
                show-overflow-tooltip
                prop="employeed"
                label="在职情况"
              >
              </el-table-column>
              <el-table-column
                show-overflow-tooltip
                prop="address"
                label="操作"
              >
                <template slot-scope="scope">{{ scope.row.date }}</template>
              </el-table-column>
            </el-table>
          </template>
          <div class="pageNumArea">
            <div class="total" :data="tableData2">
              <span>共{{ tableData2Total }}条信息</span>
            </div>
            <el-pagination
              background
              layout="prev, pager, next"
              :total="tableData2Total"
              :current-page.sync.number="Pagenum"
              @current-change="handleCurrentChange"
            >
            </el-pagination>
          </div>
        </div>
      </div>
    </section>
    <!-- 添加部门 -->
    <el-dialog
      title="添加部门"
      :visible.sync="createDepartmentDialogVisible"
      width="30%"
      @close="createDepartmentDialogClosed"
    >
      <el-form
        :model="createDepartmentBody"
        ref="createDepartmentBodyRef"
        label-width="80px"
      >
        <el-form-item label="部门名称" prop="name">
          <el-input v-model="createDepartmentBody.name"></el-input>
        </el-form-item>
        <el-form-item label="部门主管" prop="managner">
          <el-input v-model="createDepartmentBody.manager"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="createDepartmentDialogVisible = false"
          >取 消</el-button
        >
        <el-button type="primary" @click="createDepartment">
          确 定
        </el-button>
      </span>
    </el-dialog>
    <!-- 添加员工 -->
    <el-dialog
      title="添加员工"
      :visible.sync="createStaffDialogVisible"
      width="30%"
      @close="createStaffDialogClosed"
    >
      <el-form
        :model="createStaffBody"
        ref="createStaffBodyRef"
        label-width="80px"
      >
        <el-form-item label="员工名" prop="fullname">
          <el-input v-model="createStaffBody.fullname"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="createStaffBody.password"></el-input>
        </el-form-item>
        <el-form-item label="手机" prop="telephone">
          <el-input v-model="createStaffBody.telephone"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="createStaffBody.email"></el-input>
        </el-form-item>
        <el-form-item label="微信" prop="weixin">
          <el-input v-model="createStaffBody.weixin"></el-input>
        </el-form-item>
        <el-form-item label="在职情况" prop="employeed">
          <el-input v-model="createStaffBody.employeed"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="createStaffDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="createStaff">
          确 定
        </el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import myhead from "../../../components/myhead";
import md5 from "js-md5";
export default {
  components: {
    myhead
  },
  data() {
    return {
      option: "",
      isActive: true,
      dialogVisible: false,
      selected: "所有",
      token: "",
      currentScanCodePackageId: "",
      tableData1: [],
      tableData2: [],
      tableData2Total: 0,
      Pagenum: 1,
      tableData1: [],
      defaultProps: {
        label: "name"
      },
      tableData: [],
      multipleSelection: [],
      createDepartmentDialogVisible: false,
      createDepartmentBody: {
        token: "",
        name: "",
        manager: ""
      },
      retrieveDepartmentInput: "",
      createStaffDialogVisible: false,
      createStaffBody: {
        token: "",
        fullname: "",
        telephone: "",
        email: "",
        weixin: "",
        employeed: "",
        password: ""
      }
    };
  },
  mounted() {
    this.token = localStorage.getItem("token").replace(/\"/g, "");
    this.getDepartmentManagementMes();
  },
  methods: {
    //部门搜索
    retrieveDepartment() {
      this.$axios
        .get(
          "/admin/api/departments/?token=" +
            this.token +
            "&keyword=" +
            this.retrieveDepartmentInput
        )
        .then(res => {
          if (res.status == 200) {
            this.tableData1 = res.data.departments;
            this.currentId = res.data.departments[0].id || "";
          }
        })
        .then(res => {
          this.getDepartmentsInfoMes(this.currentId);
        });
    },
    //取消添加部门
    createDepartmentDialogClosed() {
      this.$refs.createDepartmentBodyRef.resetFields();
    },
    //添加部门
    createDepartment() {
      let url = "/admin/api/department ";
      this.createDepartmentBody.token = this.token;
      this.$axios
        .post(url, this.createDepartmentBody)
        .then(res => {
          if (res.status !== 200) {
            return this.$message.error("添加部门失败!");
          }
        })
        .then(() => {
          setTimeout(() => {
            this.$router.replace("/refresh");
          }, 888);
        })
        .then(() => {
          this.$message.success("添加部门成功!");
          this.createDepartmentDialogVisible = false;
        });
    },
    //员工搜索
    retrieveDepartment() {
      this.$axios
        .get(
          "/admin/api/departments/?token=" +
            this.token +
            "&keyword=" +
            this.retrieveDepartmentInput
        )
        .then(res => {
          if (res.status == 200) {
            this.tableData1 = res.data.departments;
            this.currentId = res.data.departments[0].id || "";
          }
        })
        .then(res => {
          this.getDepartmentsInfoMes(this.currentId);
        });
    },
    //取消添加员工
    createStaffDialogClosed() {
      this.$refs.createStaffBodyRef.resetFields();
    },
    //添加员工
    createStaff() {
      let url = "/admin/api/administrator";
      this.createStaffBody.token = this.token;
      this.createStaffBody.department = this.currentId;
      this.createStaffBody.password = md5(this.createStaffBody.password);
      this.$axios
        .post(url, this.createStaffBody)
        .then(res => {
          console.log(res);
          if (res.status !== 200) {
            return this.$message.error("添加员工失败!");
          }
        })
        .then(() => {
          setTimeout(() => {
            this.$router.replace("/refresh");
          }, 888);
        })
        .then(() => {
          this.$message.success("添加员工成功!");
          this.createDepartmentDialogVisible = false;
        });
    },
    //刷新页面
    refresh() {
      this.$router.push("/refresh");
    },
    // 获取部门列表
    getDepartmentManagementMes() {
      this.$axios
        .get("/admin/api/departments/?token=" + this.token)
        .then(res => {
          if (res.status == 200) {
            this.tableData1 = res.data.departments;
            this.currentId = res.data.departments[0].id || "";
          }
        })
        .then(res => {
          this.getDepartmentsInfoMes(this.currentId);
        });
    },
    //获取部门信息
    getDepartmentsInfoMes(currentId = this.currentId) {
      this.$axios
        .get(
          "/admin/api/department/" +
            currentId +
            "/administrators/?token=" +
            this.token +
            "&page=" +
            this.Pagenum +
            "&row=12"
        )
        .then(res => {
          if (res.status == 200) {
            this.tableData2 = res.data.admins;
            this.tableData2Total = res.data.total || 0;
          }
        });
    },
    handleNodeClick(data) {
      this.getDepartmentsInfoMes(data.id);
    },
    // 监听scanCodePackage页码值改变
    handleCurrentChange(newPage) {
      this.Pagenum = newPage;
      this.getDepartmentsInfoMes();
    }
  }
};
</script>

<style lang="stylus" scoped></style>
