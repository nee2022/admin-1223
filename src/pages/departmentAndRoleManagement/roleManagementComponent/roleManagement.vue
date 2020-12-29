<template>
  <div class="zyhRoleManagementMainPage">
    <header>
      <div class="infoArea">
        <div class="pageName">角色管理</div>
        <div class="profile">
          <myhead></myhead>
        </div>
      </div>
      <div class="searchArea">
        <el-input placeholder="请输入角色名"> </el-input>
        <img src="../../../assets/images/search.png" />
        <el-button type="primary" icon="el-icon-circle-plus-outline"
          >搜索</el-button
        >
        <el-button type="primary" icon="el-icon-circle-plus-outline"
          >重置</el-button
        >
        <el-button type="primary" icon="el-icon-circle-plus-outline"
          >添加</el-button
        >
      </div>
    </header>
    <section>
      <div class="asidePart">
        <ul class="wrapper">
          <li>
            <inline-block class="customerServiceIconImage"></inline-block>
            <div class="roleInfo">
              <p>客服</p>
              <p>2020-11-11 13:23</p>
              <p>
                以客户为导向的全方位助理；市场活动的支持团队；企业文化形象代言人
              </p>
            </div>
            <inline-block class="alterIcon">alt</inline-block>
            <inline-block class="deleteIcon">del</inline-block>
          </li>
          <li>
            <inline-block class="customerServiceIconImage"></inline-block>
            <div class="roleInfo">
              <p>客服</p>
              <p>2020-11-11 13:23</p>
              <p>
                以客户为导向的全方位助理；市场活动的支持团队；企业文化形象代言人
              </p>
            </div>
            <inline-block class="alterIcon">alt</inline-block>
            <inline-block class="deleteIcon">del</inline-block>
          </li>
          <li>
            <inline-block class="customerServiceIconImage"></inline-block>
            <div class="roleInfo">
              <p>客服</p>
              <p>2020-11-11 13:23</p>
              <p>
                以客户为导向的全方位助理；市场活动的支持团队；企业文化形象代言人
              </p>
            </div>
            <inline-block class="alterIcon">alt</inline-block>
            <inline-block class="deleteIcon">del</inline-block>
          </li>
          <li>
            <inline-block class="customerServiceIconImage"></inline-block>
            <div class="roleInfo">
              <p>客服</p>
              <p>2020-11-11 13:23</p>
              <p>
                以客户为导向的全方位助理；市场活动的支持团队；企业文化形象代言人
              </p>
            </div>
            <inline-block class="alterIcon">alt</inline-block>
            <inline-block class="deleteIcon">del</inline-block>
          </li>
          <li>
            <inline-block class="customerServiceIconImage"></inline-block>
            <div class="roleInfo">
              <p>客服</p>
              <p>2020-11-11 13:23</p>
              <p>
                以客户为导向的全方位助理；市场活动的支持团队；企业文化形象代言人
              </p>
            </div>
            <inline-block class="alterIcon">alt</inline-block>
            <inline-block class="deleteIcon">del</inline-block>
          </li>
          <li>
            <inline-block class="customerServiceIconImage"></inline-block>
            <div class="roleInfo">
              <p>客服</p>
              <p>2020-11-11 13:23</p>
              <p>
                以客户为导向的全方位助理；市场活动的支持团队；企业文化形象代言人
              </p>
            </div>
            <inline-block class="alterIcon">alt</inline-block>
            <inline-block class="deleteIcon">del</inline-block>
          </li>
          <li>
            <inline-block class="customerServiceIconImage"></inline-block>
            <div class="roleInfo">
              <p>客服</p>
              <p>2020-11-11 13:23</p>
              <p>
                以客户为导向的全方位助理；市场活动的支持团队；企业文化形象代言人
              </p>
            </div>
            <inline-block class="alterIcon">alt</inline-block>
            <inline-block class="deleteIcon">del</inline-block>
          </li>
          <li>
            <inline-block class="customerServiceIconImage"></inline-block>
            <div class="roleInfo">
              <p>客服</p>
              <p>2020-11-11 13:23</p>
              <p>
                以客户为导向的全方位助理；市场活动的支持团队；企业文化形象代言人
              </p>
            </div>
            <inline-block class="alterIcon">alt</inline-block>
            <inline-block class="deleteIcon">del</inline-block>
          </li>
          <li>
            <inline-block class="customerServiceIconImage"></inline-block>
            <div class="roleInfo">
              <p>客服</p>
              <p>2020-11-11 13:23</p>
              <p>
                以客户为导向的全方位助理；市场活动的支持团队；企业文化形象代言人
              </p>
            </div>
            <inline-block class="alterIcon">alt</inline-block>
            <inline-block class="deleteIcon">del</inline-block>
          </li>
          <li>
            <inline-block class="customerServiceIconImage"></inline-block>
            <div class="roleInfo">
              <p>客服</p>
              <p>2020-11-11 13:23</p>
              <p>
                以客户为导向的全方位助理；市场活动的支持团队；企业文化形象代言人
              </p>
            </div>
            <inline-block class="alterIcon">alt</inline-block>
            <inline-block class="deleteIcon">del</inline-block>
          </li>
        </ul>
      </div>
      <div class="mainPart">
        <div class="wrapper">
          <template>
            <el-table
              :data="tableData"
              style="width: 100%"
              row-key="id"
              stripe
              :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
              default-expand-all
            >
              <el-table-column
                show-overflow-tooltip
                prop="date"
                label="权限菜单"
                width="330px"
              >
                <template slot-scope="scope">
                  {{ scope.row.name || 123 }}
                </template>
              </el-table-column>
              <el-table-column show-overflow-tooltip prop="" label="查看">
                <template slot-scope="scope">
                  <img :src="scope.row.src" alt="" />
                  <label for="">
                    <img src="../../../assets/images/lockIcon.png" alt="" />
                  </label>
                </template>
              </el-table-column>
              <el-table-column show-overflow-tooltip prop="" label="删除">
              </el-table-column>
              <el-table-column show-overflow-tooltip prop="" label="编辑">
              </el-table-column>
              <el-table-column show-overflow-tooltip prop="" label="添加">
              </el-table-column>
            </el-table>
          </template>
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
      scanCodePackageTotal: 1,
      scanCodePackagePagenum: 1,
      scanCodePackagePagesize: 6,
      // 树状列表数据
      tableData: [
        {
          id: 2,
          date: "2016-05-04",
          name: "王小虎子0",
          address: "上海 1517 弄",
          src: "../../../assets/images/lockIcon.png",
          children: [
            {
              id: 31,
              date: "2020-05-01",
              name: "王小虎子1",
              address: "上海 0001 弄",
              src: "../../../assets/images/lockIcon.png",

              children: [
                {
                  id: 331,
                  date: "2020-05-32",
                  name: "王小虎子2",
                  address: "上海 0002  弄",
                  src: "../../../assets/images/lockIcon.png",

                  children: [
                    {
                      id: 330,
                      date: "2020-05-32",
                      name: "王小虎子3",
                      address: "上海 0002  弄",
                      src: "../../../assets/images/lockIcon.png"
                    },
                    {
                      id: 332,
                      date: "2020-05-32",
                      name: "王小虎子3",
                      address: "上海 0003 弄",
                      src: "../../../assets/images/lockIcon.png"
                    }
                  ]
                },
                {
                  id: 333,
                  date: "2020-05-32",
                  name: "王小虎子2",
                  address: "上海 0003 弄",
                  src: "../../../assets/images/lockIcon.png",
                  children: [
                    {
                      id: 334,
                      date: "2020-05-32",
                      name: "王小虎子3",
                      address: "上海 0002  弄",
                      src: "../../../assets/images/lockIcon.png"
                    },
                    {
                      id: 33,
                      date: "2020-05-32",
                      name: "王小虎子3",
                      address: "上海 0003 弄",
                      src: "../../../assets/images/lockIcon.png"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: 2,
          date: "2016-05-04",
          name: "王小虎子0",
          address: "上海 1517 弄",
          src: "../../../assets/images/lockIcon.png",
          children: [
            {
              id: 31,
              date: "2020-05-01",
              name: "王小虎子1",
              address: "上海 0001 弄",
              src: "../../../assets/images/lockIcon.png",

              children: [
                {
                  id: 33,
                  date: "2020-05-32",
                  name: "王小虎子2",
                  address: "上海 0002  弄",
                  src: "../../../assets/images/lockIcon.png",

                  children: [
                    {
                      id: 33,
                      date: "2020-05-32",
                      name: "王小虎子3",
                      address: "上海 0002  弄",
                      src: "../../../assets/images/lockIcon.png"
                    },
                    {
                      id: 33,
                      date: "2020-05-32",
                      name: "王小虎子3",
                      address: "上海 0003 弄",
                      src: "../../../assets/images/lockIcon.png"
                    }
                  ]
                },
                {
                  id: 33,
                  date: "2020-05-32",
                  name: "王小虎子2",
                  address: "上海 0003 弄",
                  src: "../../../assets/images/lockIcon.png",
                  children: [
                    {
                      id: 33,
                      date: "2020-05-32",
                      name: "王小虎子3",
                      address: "上海 0002  弄",
                      src: "../../../assets/images/lockIcon.png"
                    },
                    {
                      id: 33,
                      date: "2020-05-32",
                      name: "王小虎子3",
                      address: "上海 0003 弄",
                      src: "../../../assets/images/lockIcon.png"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: 2,
          date: "2016-05-04",
          name: "王小虎子0",
          address: "上海 1517 弄",
          src: "../../../assets/images/lockIcon.png",
          children: [
            {
              id: 31,
              date: "2020-05-01",
              name: "王小虎子1",
              address: "上海 0001 弄",
              src: "../../../assets/images/lockIcon.png",

              children: [
                {
                  id: 33,
                  date: "2020-05-32",
                  name: "王小虎子2",
                  address: "上海 0002  弄",
                  src: "../../../assets/images/lockIcon.png",

                  children: [
                    {
                      id: 33,
                      date: "2020-05-32",
                      name: "王小虎子3",
                      address: "上海 0002  弄",
                      src: "../../../assets/images/lockIcon.png"
                    },
                    {
                      id: 33,
                      date: "2020-05-32",
                      name: "王小虎子3",
                      address: "上海 0003 弄",
                      src: "../../../assets/images/lockIcon.png"
                    }
                  ]
                },
                {
                  id: 33,
                  date: "2020-05-32",
                  name: "王小虎子2",
                  address: "上海 0003 弄",
                  src: "../../../assets/images/lockIcon.png",
                  children: [
                    {
                      id: 33,
                      date: "2020-05-32",
                      name: "王小虎子3",
                      address: "上海 0002  弄",
                      src: "../../../assets/images/lockIcon.png"
                    },
                    {
                      id: 33,
                      date: "2020-05-32",
                      name: "王小虎子3",
                      address: "上海 0003 弄",
                      src: "../../../assets/images/lockIcon.png"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    };
  },

  mounted() {
    this.token = localStorage.getItem("token").replace(/\"/g, "");
    console.log("XXXXXX");
    // this.getRoleManagementJSON();
    console.log("YYYYY");
    this.getRoleManagementMes();
  },
  methods: {
    //树状列表事件
    // load(tree, treeNode, resolve) {
    //   setTimeout(() => {
    //     resolve([
    //       {
    //         id: 31,
    //         date: "2016-05-01",
    //         name: "王小虎子",
    //         address: "上海 1519 弄"
    //       },
    //       {
    //         id: 32,
    //         date: "2016-05-01",
    //         name: "王小虎子",
    //         address: "上海 1519 弄"
    //       }
    //     ]);
    //   }, 1000);
    // },
    //tree列表点击事件
    handleNodeClick() {
      console.log(1);
    },
    //复选框列表点击事件
    // toggleSelection(rows) {
    //   if (rows) {
    //     rows.forEach(row => {
    //       this.$refs.multipleTable.toggleRowSelection(row);
    //     });
    //   } else {
    //     this.$refs.multipleTable.clearSelection();
    //   }
    // },
    // handleSelectionChange(val) {
    //   this.multipleSelection = val;
    // },

    //获取用户信息列表
    getRoleManagementMes() {
      this.$axios
        .get("/admin/api/roles/?token=" + this.token + "&page=1")
        .then(res => {
          if (res.status == 200) {
            this.tableData1 = res.data.roles;
            console.log(res.data.roles);
          }
        });
    },
    //获取权限菜单的JSON文件

    getRoleManagementJSON() {
      console.log("JSON");
      this.$axios.get("/assets/json/roleManagement.json").then(res => {
        console.log(res);
        console.log(11111);
        if (res.status == 200) {
          console.log(res);
        }
      });
    }
  }
};
</script>

<style lang="stylus" scoped></style>
