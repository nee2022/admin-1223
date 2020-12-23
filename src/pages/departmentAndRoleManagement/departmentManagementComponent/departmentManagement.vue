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
            <el-input placeholder="查找关键词"> </el-input>
            <img src="../../../assets/images/search.png" />
            <el-button type="primary" icon="el-icon-circle-plus-outline"
              >添加部门</el-button
            >
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
            <el-button type="primary" icon="el-icon-circle-plus-outline"
              >查询</el-button
            >
            <el-button type="primary" icon="el-icon-circle-plus-outline"
              >添加</el-button
            >
            <el-button type="primary" icon="el-icon-circle-plus-outline"
              >刷新</el-button
            >
            <el-button type="primary" icon="el-icon-circle-plus-outline"
              >分配角色</el-button
            >
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
              <el-table-column show-overflow-tooltip prop="role" label="角色">
              </el-table-column>
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
      tableData: [
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-08",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-06",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        }
      ],
      multipleSelection: []
    };
  },

  mounted() {
    this.token = localStorage.getItem("token");
    this.getDepartmentManagementMes();
  },
  methods: {
    // 获取用户信息列表
    getDepartmentManagementMes() {
      this.$axios
        .get(
          "http://www.api.sqjtjt.com/admin/api/departments/?token=" +
            JSON.parse(this.token)
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
    getDepartmentsInfoMes(currentId = this.currentId) {
      this.$axios
        .get(
          "http://www.api.sqjtjt.com/admin/api/department/" +
            currentId +
            "/administrators/?token=" +
            JSON.parse(this.token) +
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
