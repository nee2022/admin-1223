<template>
  <div class="tem-right">
    <div class="tem-right-top">
      <div class="top-left">
        <div class="top-left-word">预付费套餐</div>
      </div>
      <div class="users-right">
        <myhead></myhead>
      </div>
    </div>
    <!--套餐弹出框 -->
    <el-dialog :title="name" :visible.sync="stations" width="30%">
      <el-form>
        <el-form-item label="套餐名字:">
          <el-input v-model="a" class="addinput"></el-input>
        </el-form-item>
        <el-form-item label="支付金额:">
          <el-input v-model="b" class="addinput"></el-input>
        </el-form-item>
        <el-form-item label="金额:">
          <el-input v-model="c" class="addinput"></el-input>
        </el-form-item>

        <el-form-item label="类型:">
          <el-select v-model="value" placeholder="时间">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="stations = false">取 消</el-button>
        <el-button type="primary" @click="fauge = true">确 定</el-button>
      </span>
    </el-dialog>
    <!--套餐确认框 -->
    <el-dialog title="提示" :visible.sync="fauge" width="30%">
      <span>确定修改或者添加？</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="fauge = false">取 消</el-button>
        <el-button
          type="primary"
          @click="(fauge = false), (stations = false), taocanAdd()"
          >确 定</el-button
        >
      </span>
    </el-dialog>

    <!--活动弹出框 -->
    <el-dialog :title="name" :visible.sync="dialogVisible" width="30%">
      <el-form>
        <el-form-item label="活动名字:">
          <el-input v-model="a" class="addinput"></el-input>
        </el-form-item>
        <el-form-item label="描述:">
          <el-input v-model="b" class="addinput"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="flag = true">确 定</el-button>
      </span>
    </el-dialog>
    <!--活动确认框 -->
    <el-dialog title="提示" :visible.sync="flag" width="30%">
      <span>确定修改或者添加？</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="flag = false">取 消</el-button>
        <el-button
          type="primary"
          @click="(flag = false), (dialogVisible = false), add()"
          >确 定</el-button
        >
      </span>
    </el-dialog>

    <div class="right-con">
      <div class="right-con-left">
        <div class="right-con-top">
          <div class="textBox">
            <img src="../../assets/images/search.png" class="sear-img" />
            <el-input
              @keyup.enter.native="cha"
              v-model="station_msg"
              placeholder="请输入套餐名"
              class="textWord"
              clearable
            ></el-input>
          </div>
          <div>
            <el-button
              type="primary"
              icon="el-icon-plus"
              class="but"
              @click="(dialogVisible = true), names()"
              >添加</el-button
            >
          </div>
        </div>
        <template>
          <el-table :data="tancanList" stripe style="width: 100%">
            <el-table-column prop="id" label="套餐ID"> </el-table-column>
            <el-table-column prop="name" label="套餐">
              <template slot-scope="scope">
                <div @click="getParksMes(scope.row.id, scope.row.name)">
                  {{ scope.row.name }}
                </div>
              </template>
            </el-table-column>
            <el-table-column prop="address" label="操作">
              <template slot-scope="scope">
                <div class="operation">
                  <div>
                    <el-button type="text" @click="removeUserByID(scope.row.id)"
                      ><img src="../../assets/images/delete.png"
                    /></el-button>
                  </div>
                  <div>
                    <el-button
                      type="text"
                      @click="(dialogVisible = true), ids(scope.row.id)"
                      ><img src="../../assets/images/compile.png"
                    /></el-button>
                  </div>
                </div>
              </template>
            </el-table-column>
          </el-table>
        </template>
        <div class="UserAssets-bottom">
          <div class="road-bottom-left" :data="tancanList">
            <span>共{{ total }}条信息</span>
          </div>
          <div class="road-bottom-right">
            <el-pagination
              background
              :current-page.sync.number="pagenum"
              @current-change="handleCurrentChange"
              :page-size="pagesize"
              layout="prev, pager, next"
              :total="total"
              small
            >
            </el-pagination>
          </div>
        </div>
      </div>
      <div class="right-con-right">
        <div class="titleG">
          <div class="right-top">
            <div class="blueD"></div>
            {{ topName }}
          </div>
          <div class="blueBut">
            <el-button
              type="primary"
              icon="el-icon-plus"
              class="but"
              @click="(stations = true), namess()"
              >添加</el-button
            >
          </div>
        </div>
        <div>
          <template>
            <el-table :data="parkList" stripe style="width: 100%">
              <el-table-column prop="id" label="套餐ID"> </el-table-column>
              <el-table-column prop="pay" label="支付金额"> </el-table-column>
              <el-table-column prop="amount" label="金额"> </el-table-column>
              <el-table-column prop="mac" label="机号"> </el-table-column>
              <el-table-column prop="address" label="操作">
                <template slot-scope="scope">
                  <div class="operation">
                    <div>
                      <el-button
                        type="text"
                        @click="removetapcanByID(scope.row.id)"
                        ><img src="../../assets/images/delete.png"
                      /></el-button>
                    </div>
                    <div>
                      <el-button
                        type="text"
                        @click="(stations = true), id(scope.row.id)"
                        ><img src="../../assets/images/compile.png"
                      /></el-button>
                    </div>
                  </div>
                </template>
              </el-table-column>
            </el-table>
          </template>
        </div>
        <div class="UserAssets-bottom">
          <div class="road-bottom-left" :data="parkList">
            <span>共{{ parkTotal }}条信息</span>
          </div>
          <div class="road-bottom-right">
            <el-pagination
              background
              :current-page.sync.number="newpark"
              @current-change="parksNumber"
              :page-size="pagepark"
              layout="prev, pager, next"
              :total="parkTotal"
            >
            </el-pagination>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import myhead from "../../components/myhead.vue";
export default {
  components: {
    myhead,
  },
  data() {
    return {
      total: 1,
      parkTotal: 0,
      token: "",
      pagenum: 1, //分页
      pagesize: 6,
      pagepark: 16,
      newpark: 1, //分页
      tancanList: [],
      parkList: [],
      tcID: "",
      value: true,
      topName: "套餐列表",
      isType: false,
      leftType: "",
      dialogVisible: false,
      flag: false,
      stations: false,
      fauge: false,
      a: "",
      b: "",
      c: "",
      d: "",
      name: "",
      huodongid: "",
      station_msg: "",
      options: [
        {
          value: "选项1",
          label: "金额",
        },
        {
          value: "选项2",
          label: "电能",
        },
        {
          value: "选项3",
          label: "时间",
        },
      ],
      value: "",
      huodongId: "",
      lest_id: "",
    };
  },
  created() {
    this.token = localStorage.getItem("token");
    this.getRoadMes();
    this.getParksMe();
  },
  methods: {
    namess() {
      this.name = "添加套餐";
    },
    taocanAdd() {
      if (this.value == "选项1") {
        this.value = 1;
      } else if (this.value == "选项2") {
        this.value = 2;
      } else {
        this.value = 3;
      }
      console.log(this.lest_id);
      console.log(this.value);
      let toKen = this.token.replace(/\"/g, "");
      if (this.lest_id) {
        console.log("输出的是id");
        this.$axios
          .put(
            "/admin/api/package/" +
              this.lest_id +
              "?token=" +
              toKen +
              "&name=" +
              this.a +
              "&pay=" +
              this.b +
              "&energy=" +
              this.c +
              "&type=" +
              this.value
          )
          .then((res) => {
            if (res.data.error == 0) {
              this.$message.success("修改套餐成功");
              setTimeout(() => {
                this.getParksMe();
              }, 1000);
            } else {
              this.$message.error("修改套餐失败");
            }
          });
        this.lest_id = "";
        this.a = "";
        this.b = "";
        this.c = "";
        this.d = "";
        this.value = "时间";
      } else {
        this.name = "添加活动";
        console.log(this.name);

        console.log("输出的是添加");

        this.$axios
          .post(
            "/admin/api/package?token=" +
              toKen +
              "&name=" +
              this.a +
              "&pay=" +
              this.b +
              "&amount=" +
              this.c +
              "&type=" +
              this.value +
              "&station=1&group=" +
              this.huodongId
          )
          .then((res) => {
            console.log(res);
            if (res.data.error == 0) {
              this.$message.success("添加套餐成功");
              this.getParksMe();
            } else {
              this.$message.error("添加套餐失败");
            }
            console.log(res.data.error);
          });
        this.a = "";
        this.b = "";
        this.c = "";
        this.d = "";
        this.value = "时间";
      }
    },

    cha() {
      let toKen = this.token.replace(/\"/g, "");
      this.$axios
        .get(
          "/admin/api/package/groups" +
            "?token=" +
            toKen +
            "&keyword=" +
            this.station_msg
        )
        .then((res) => {
          this.station_msg = "";
          console.log(res);
          this.tancanList = res.data.package_groups;
          this.total = res.data.total;
        });
    },
    async removetapcanByID(id) {
      console.log(id);
      let toKen = this.token.replace(/\"/g, "");
      const confirmRes = await this.$confirm(
        "此操作将永久删除该套餐, 是否继续?",
        "提示",
        {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
        }
      ).catch((err) => err);
      if (confirmRes !== "confirm") {
        return this.$message.info("已取消删除");
      }
      this.$axios
        .delete("/admin/api/package/" + id + "?token=" + toKen)
        .then((res) => {
          console.log(res);
          if (res.status == 200) {
            this.$message.success("删除成功");
            setTimeout(() => {
              this.getParksMe();
            }, 1000);
            //刷新用户数据
          } else {
            this.$message.error("删除失败");
          }
        });

      //删除用户提示
    },
    async removeUserByID(id) {
      console.log(id);
      let toKen = this.token.replace(/\"/g, "");
      const confirmRes = await this.$confirm(
        "此操作将永久删除该活动, 是否继续?",
        "提示",
        {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
        }
      ).catch((err) => err);
      if (confirmRes !== "confirm") {
        return this.$message.info("已取消删除");
      }
      this.$axios
        .delete("/admin/api/package/group/" + id + "?token=" + toKen)
        .then((res) => {
          console.log(res);
          if (res.status == 200) {
            this.$message.success("删除成功");
            setTimeout(() => {
              this.getRoadMes();
            }, 1000);
            //刷新用户数据
          } else {
            this.$message.error("删除失败");
          }
        });

      //删除用户提示
    },
    names() {
      this.name = "添加活动";
    },
    ids(id) {
      this.huodongid = id;
      this.name = "修改活动";
    },
    id(id) {
      this.lest_id = id;
      this.name = "修改套餐";
    },
    add() {
      console.log(this.value);
      let toKen = this.token.replace(/\"/g, "");
      if (this.huodongid) {
        console.log("输出的是id");
        this.$axios
          .put(
            "/admin/api/package/group/" +
              this.huodongid +
              "?token=" +
              toKen +
              "&name=" +
              this.a +
              "&memo=" +
              this.b
          )
          .then((res) => {
            if (res.data.error == 0) {
              this.$message.success("修改活动成功");
              setTimeout(() => {
                this.getRoadMes();
              }, 1000);
            } else {
              this.$message.error("修改活动失败");
            }
          });
        this.a = "";
        this.b = "";
      } else {
        this.name = "添加设备";
        console.log("输出的是添加");
        this.$axios
          .post(
            "/admin/api/package/group?token=" +
              toKen +
              "&name=" +
              this.a +
              "&memo=" +
              this.b
          )
          .then((res) => {
            if (res.data.error == 0) {
              this.$message.success("添加活动成功");
            } else {
              this.$message.error("添加活动失败");
            }
            setTimeout(() => {
              this.getRoadMes();
            }, 1000);
          });
        this.a = "";
        this.b = "";
        this.c = "";
        this.d = "";
      }
    },
    getRoadMes() {
      let toKen = this.token.replace(/\"/g, "");
      this.$axios
        .get(
          "/admin/api/package/groups?token=" +
            toKen +
            "&page=" +
            this.pagenum +
            "&row=16"
        )
        .then((res) => {
          console.log(res.data.package_groups);
          this.tancanList = res.data.package_groups;
          this.total = res.data.total;
        });
    },
    getParksMes(id, name) {
      //token去掉引号
      this.huodongId = id;
      let toKen = this.token.replace(/\"/g, "");
      console.log(id);
      this.$axios
        .get(
          "/admin/api/package/group/" +
            id +
            "/packages?token=" +
            toKen +
            "&page=" +
            this.newpark +
            "&row=16"
        )
        .then((res) => {
          console.log(res.data);
          // console.log(res.data.users)
          // console.log(res.status)//打印状态码
          if (res.status == 200) {
            this.parkList = res.data.packages; //用户列表数据
            this.parkTotal = res.data.total;
            // console.log(this.parkList)
            this.isType = true;
          }
          this.topName = name;
        });
    },
    //右边列表总信息
    getParksMe() {
      //token去掉引号
      let toKen = this.token.replace(/\"/g, "");
      // console.log(toKen)
      this.$axios
        .get(
          "/admin/api/package/group/2" +
            "/packages?token=" +
            toKen +
            "&page=" +
            this.newpark +
            "&row=14"
        )
        .then((res) => {
          console.log(res.data);
          // console.log(res.status)//打印状态码
          if (res.status == 200) {
            this.parkList = res.data.packages; //用户列表数据
            this.parkTotal = res.data.total;
          }
        });
    },
    handleCurrentChange(newPage) {
      //console.log(newPage)
      this.pagenum = newPage;
      this.getRoadMes();
    },
    parksNumber(parknum) {
      this.newpark = parknum;
      if (this.isType) {
        this.getParksMes(this.leftType);
      } else {
        this.getParksMe();
      }
    },
  },
};
</script>

<style scoped="scoped">
.el-dialog .el-input {
  border: 1px #1e69fe solid;
  width: 74%;
}
.UserAssets-bgcolor .el-button--primary {
  background: #1e69fe;
}
.el-select {
  border: 1px solid #1e69fe !important;
  width: 33%;
}
.el-table td div {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.el-form >>> .el-form-item__label {
  width: 96px !important;
  text-align: center;
}
.tem-right {
  display: flex;
  flex: 1;
  width: 80%;
  flex-direction: column;
  background-color: white;
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;
}

.titleG {
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
}

.parkIcon-word {
  width: 38px;
  height: 13px;
  font-family: PingFangSC-Regular;
  font-size: 13px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 20px;
  letter-spacing: 0px;
  color: #5f6062;
}

.blueD {
  width: 10px;
  height: 10px;
  border-radius: 100%;
  background-color: #1e69fe;
  margin: 0px 15px;
}

.right-top {
  background-color: #edf1f5;
  width: 90%;
  height: 55px;
  font-size: 24px;
  line-height: 55px;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #1e69fe;
}

.blueBut {
  margin: 15px 0;
}

.parkIcon {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.parkIcon div {
  background-color: #f2d0bd;
  height: 22px;
  width: 55px;
  line-height: 22px;
  border-radius: 5px;
}

.users-right-w {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 150px;
  justify-content: space-between;
  float: right;
}

.users-right {
  width: 50%;
}

.leftBox-con {
  display: flex;
  flex-direction: column;
  width: 40%;
}

.leftBox {
  display: flex;
  flex-direction: row;
}

.right-con-left {
  width: 26%;
  box-shadow: 1px 1px 20px 10px #edf1f5;
  height: 800px;
  border-radius: 10px;
}

.right-con-right {
  width: 70%;
}

.parkimg {
  margin: 13px 20px;
}

.parkimg img {
  width: 78px;
  height: 78px;
}

.el-table .cell {
  line-height: 33px;
}

.right-con {
  width: 95%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.road-bottom-right {
  width: 65%;
  text-align: right;
}

.road-bottom-left {
  width: 30%;
}

.tem-right-top {
  display: flex;
  flex-direction: row;
  width: 95%;
  margin: 20px auto;
  margin-top: 36px;
}

.right-con-top {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 15px;
}

.top-right {
  display: flex;
  width: 125px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.top-left {
  flex: 1;
}

.blueD {
  width: 10px;
  height: 10px;
  border-radius: 100%;
  background-color: #1e69fe;
  margin: 0px 15px;
}

.right-top {
  background-color: #edf1f5;
  width: 90%;
  height: 55px;
  font-size: 24px;
  line-height: 55px;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #1e69fe;
}

.blueBut {
  margin: 15px 0;
}

.textBox {
  width: 60%;
}

.sear-img {
  width: 15px;
  height: 15px;
  margin-left: 10px;
}

.top-left-word {
  font-family: PingFangSC-Regular;
  font-size: 24px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 24px;
  letter-spacing: 1px;
  color: #000000;
}
</style>
