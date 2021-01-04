<template>
  <div class="tem-right">
    <!-- 设备添加框 -->

    <div class="aaa">
      <el-dialog :title="name" :visible.sync="dialogVisible" width="30%">
        <el-form>
          <el-form-item label="名字:">
            <el-input v-model="a" class="addinput"></el-input>
          </el-form-item>
          <el-form-item label="机号:">
            <el-input v-model="b" class="addinput"></el-input>
          </el-form-item>
          <el-form-item label="编号:">
            <el-input v-model="c" class="addinput"></el-input>
          </el-form-item>
          <el-form-item label="类型:">
            <el-select v-model="value" placeholder="电摩慢充桩">
              <el-option
                @click.native="ee"
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
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="flag = true">确 定</el-button>
        </span>
      </el-dialog>
      <!-- 站点添加框 -->

      <el-dialog :title="name" :visible.sync="stations" width="30%">
        <el-form>
          <el-form-item label="名字:">
            <el-input v-model="a" class="addinput"></el-input>
          </el-form-item>
          <el-form-item label="安装地址:">
            <el-input v-model="b" class="addinput"></el-input>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="stations = false">取 消</el-button>
          <el-button type="primary" @click="fauge = true">确 定</el-button>
        </span>
      </el-dialog>
    </div>
    <!-- 站点确认 -->
    <el-dialog title="提示" :visible.sync="fauge" width="30%">
      <span>确定修改或者添加？</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="fauge = false">取 消</el-button>
        <el-button
          type="primary"
          @click="(fauge = false), (stations = false), station()"
          >确 定</el-button
        >
      </span>
    </el-dialog>
    <!-- 设备确认 -->
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
    <div class="tem-right-top">
      <div class="top-left">
        <div class="top-left-word">站点</div>
      </div>
      <div class="users-right">
        <myhead></myhead>
      </div>
    </div>
    <div class="right-con">
      <div class="right-con-left">
        <div class="right-con-top">
          <div class="textBox">
            <img src="../../assets/images/search.png" class="sear-img" />
            <el-input
              v-model="station_msg"
              placeholder="请输入站点名"
              class="textWord"
              clearable
              @keyup.enter.native="station_cha"
            ></el-input>
          </div>
          <div class="but-weizhi1">
            <el-button
              @click="(stations = true), na()"
              type="primary"
              icon="el-icon-plus"
              >添加</el-button
            >
          </div>
        </div>
        <template>
          <el-table :data="tableData" stripe style="width: 100%">
            <el-table-column>
              <template slot-scope="scope">
                <div class="leftBox">
                  <div class="parkimg">
                    <img :src="img[scope.row.type]" />
                  </div>
                  <div class="leftBox-con" @click="getParksMes(scope.row.id)">
                    <div class="parkName">
                      {{ scope.row.name }}
                    </div>
                    <div class="parkAddress">
                      <div v-if="scope.row.address == ''">地址未配置</div>
                      <div v-else>{{ scope.row.address }}</div>
                    </div>
                    <div class="parkIcon">
                      <div>
                        <span class="parkIcon-word">停车场</span>
                      </div>
                      <div>
                        <span class="parkIcon-word">充电桩</span>
                      </div>
                      <div>
                        <span class="parkIcon-word">金额</span>
                      </div>
                    </div>
                  </div>
                  <div class="caozuo">
                    <div class="leftBox-right">...</div>
                    <div class="dian_imgs">
                      <img
                        @click="(stations = true), xiugai(scope.row.id)"
                        src="../../assets/images/xiu.png"
                        alt=""
                      />
                      <img src="../../assets/images/ding.png" alt="" />
                      <img
                        @click="
                          removeUserByID(scope.row.id), delete_ids(scope.row.id)
                        "
                        src="../../assets/images/shan2.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </template>
            </el-table-column>
          </el-table>
        </template>
        <div class="UserAssets-bottom">
          <div class="road-bottom-left" :data="tableData">
            <span>共{{ total }}条信息</span>
          </div>
          <div class="road-bottom-right">
            <el-pagination
              background
              :current-page="pagenum"
              @current-change="handleCurrentChange"
              :page-size="pagesize"
              layout="prev, pager, next"
              :total="total"
              small
              :pager-count="5"
            >
            </el-pagination>
          </div>
        </div>
      </div>
      <div class="right-con-right">
        <div class="sousuo">
          <div class="textBox-right">
            <img src="../../assets/images/search.png" class="sear-img" />
            <el-input
              @keyup.enter.native="chargers_cha"
              v-model="chargers_msg"
              placeholder="请输入设备信息进行查找"
              class="textWord"
              clearable
            ></el-input>
          </div>
          <div class="but-weizhi">
            <el-button
              @click="chargers_cha"
              type="primary"
              icon="el-icon-search"
              >搜索</el-button
            >
          </div>
          <div>
            <el-button
              type="success"
              icon="el-icon-circle-plus-outline"
              @click="(dialogVisible = true), names()"
              >添加</el-button
            >
          </div>
        </div>
        <template>
          <el-table :data="parkList" stripe style="width: 100%">
            <el-table-column prop="dev_id" label="设备编号"> </el-table-column>
            <el-table-column prop="name" label="名称"> </el-table-column>
            <el-table-column label="类型">
              <template slot-scope="scope">
                <div style="text-align: center !important">
                  {{ typeres[scope.row.type] }}
                </div>
              </template>
            </el-table-column>
            <el-table-column prop="mac" label="机号"> </el-table-column>
            <el-table-column label="状态" prop="online">
              <template slot-scope="scope">
                <span v-if="scope.row.online == true">在线</span>
                <span v-else>离线</span>
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
                      @click="(dialogVisible = true), id(scope.row.id)"
                      ><img src="../../assets/images/compile.png"
                    /></el-button>
                  </div>
                </div>
              </template>
            </el-table-column>
          </el-table>
        </template>
        <div class="UserAssets-bottom">
          <div class="road-bottom-left" :data="parkList">
            <span>共{{ parkTotal }}条信息</span>
          </div>
          <div class="road-bottom-right">
            <el-pagination
              background
              :current-page="newpark"
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
      a: "",
      b: "",
      c: "",
      d: "",
      name: "",
      fauge: false,
      stations: false,
      img_flage: false,
      dialogVisible: false,
      flag: false,
      total: 1,
      parkTotal: 0,
      token: "",
      pagenum: 1, //分页
      pagesize: 6,
      pagepark: 20,
      newpark: 1, //分页
      tableData: [],
      parkList: [],
      newpark2: 1,
      isType: false,
      leftType: "",
      lest_id: "",
      img: [
        require("../../assets/images/comprehensive.png"),
        require("../../assets/images/Charging pile.png"),
        require("../../assets/images/parking.png"),
        require("../../assets/images/Road parking.png"),
        require("../../assets/images/comprehensive.png"),
        require("../../assets/images/comprehensive.png"),
        require("../../assets/images/comprehensive.png"),
        require("../../assets/images/comprehensive.png"),
        require("../../assets/images/comprehensive.png"),
        require("../../assets/images/comprehensive.png"),
      ],
      typeres: ["sdf", "直流桩", "交流桩", "电摩快充桩", "电摩慢充桩"],
      station_ids: "",
      station_msg: "",
      delete_id: "",
      chargers_msg: "",
      options: [
        {
          value: "选项1",
          label: "电摩快充桩",
        },
        {
          value: "选项2",
          label: "电摩慢充桩",
        },
      ],
      value: "",
    };
  },
  created() {
    this.token = localStorage.getItem("token");
    this.getRoadMes();
    this.getRoadChargers();
  },
  methods: {
    ee() {
      console.log(this.value);
    },
    chargers_cha() {
      console.log(232);
      let toKen = this.token.replace(/\"/g, "");
      this.$axios
        .get(
          "admin/api/chargers" +
            "?token=" +
            toKen +
            "&page=1&row=14&keyword=" +
            this.chargers_msg
        )
        .then((res) => {
          console.log(res);
          this.parkList = res.data.chargers;
          this.parkTotal = res.data.total;
        });
    },
    station_cha() {
      let toKen = this.token.replace(/\"/g, "");
      console.log(this.station_msg);
      this.$axios
        .get(
          "admin/api/stations" +
            "?token=" +
            toKen +
            "&keyword=" +
            this.station_msg
        )
        .then((res) => {
          console.log(res);
          this.tableData = res.data.stations;
          this.total = res.data.total;
        });
    },
    delete_ids(id) {
      this.delete_id = id;
    },
    xiugai(station_id) {
      this.station_ids = station_id;
      this.name = "修改站点";
    },
    na() {
      this.name = "添加站点";
      this.value = "电摩慢充桩";
    },
    id(e) {
      this.lest_id = e;
      this.name = "修改设备";
      this.value = "电摩慢充桩";
    },
    names() {
      this.name = "添加设备";
    },
    station() {
      let toKen = this.token.replace(/\"/g, "");
      if (this.station_ids) {
        console.log("输出的是修改");
        this.$axios
          .put(
            "/admin/api/station/" +
              this.station_ids +
              "?token=" +
              toKen +
              "&name=" +
              this.a +
              "&address=" +
              this.b +
              "&type=4"
          )
          .then((res) => {
            console.log(res);
            if (res.data.error == 0) {
              this.$message.success("修改站点成功");
              this.getRoadMes();
            } else {
              this.$message.success("修改站点失败");
            }
          });
      } else {
        this.name = "添加设备";
        console.log(this.name);

        console.log("输出的是添加");

        this.$axios
          .post(
            "/admin/api/station?token=" +
              toKen +
              "&name=" +
              this.a +
              "&address=" +
              this.b +
              "&type=4"
          )
          .then((res) => {
            if (res.data.error == 0) {
              this.$message.success("添加站点成功");

              this.getRoadMes();
            } else {
              this.$message.success("添加站点失败");
            }
          });
      }
    },
    add() {
      if (this.value == "选项1") {
        this.value = 3;
      } else {
        this.value = 4;
      }
      console.log(this.value);
      let toKen = this.token.replace(/\"/g, "");
      if (this.lest_id) {
        console.log("输出的是id");
        this.$axios
          .put(
            "/admin/api/charger/" +
              this.lest_id +
              "?token=" +
              toKen +
              "&name=" +
              this.a +
              "&mac=" +
              this.b +
              "&dev_id=" +
              this.c +
              "&type=" +
              this.value
          )
          .then((res) => {
            if (res.data.error == 0) {
              this.$message.success("修改成功");

              this.getRoadChargers();
            } else {
              this.$message.success("修改失败");
            }
          });
      } else {
        this.name = "添加设备";
        console.log(this.name);

        console.log("输出的是添加");

        this.$axios
          .post(
            "/admin/api/charger?token=" +
              toKen +
              "&name=" +
              this.a +
              "&mac=" +
              this.b +
              "&dev_id=" +
              this.c +
              "&type=" +
              this.value
          )
          .then((res) => {
            if (res.data.error == 0) {
              this.$message.success("添加成功");

              this.getRoadChargers();
            } else {
              this.$message.success("添加失败");
            }
            console.log(res.data.error);
          });
        this.a = "";
        this.b = "";
        this.c = "";
        this.d = "";
        this.value = "电摩慢充桩";
      }
    },
    async removeUserByID(id) {
      console.log(id);
      let toKen = this.token.replace(/\"/g, "");
      const confirmRes = await this.$confirm(
        "此操作将永久删除该用户, 是否继续?",
        "提示",
        {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
        }
      ).catch((err) => err);
      console.log(confirmRes);
      if (confirmRes !== "confirm") {
        return this.$message.info("已取消删除");
      }
      if (this.delete_id) {
        console.log("删除的是站点");
        this.$axios
          .delete("/admin/api/station/" + this.delete_id + "?token=" + toKen)
          .then((res) => {
            console.log(res.status);
            if (res.status == 200) {
              this.$message.success("删除站点成功");
              this.getRoadChargers();
              //刷新用户数据
            } else {
              this.$message.error("删除站点失败");
            }
          });
        this.delete_id = "";
      } else {
        console.log("删除的是设备");
        this.$axios
          .delete("/admin/api/charger/" + id + "?token=" + toKen)
          .then((res) => {
            console.log(res.status);
            if (res.status == 200) {
              this.$message.success("删除设备成功");
              this.getRoadChargers();
              //刷新用户数据
            } else {
              this.$message.error("删除设备用户失败");
            }
          });
      }
      //删除用户提示
    },
    getRoadMes() {
      let toKen = this.token.replace(/\"/g, "");
      this.$axios
        .get(
          "/admin/api/stations/4?token=" +
            toKen +
            "&page=" +
            this.pagenum +
            "&row=6"
        )
        .then((res) => {
          if (res.status == 200) {
            this.tableData = res.data.stations;
            this.total = res.data.total;
          }
        });
    },
    getParksMes(id) {
      //token去掉引号
      this.leftType = id;
      let toKen = this.token.replace(/\"/g, "");
      this.$axios
        .get(
          "admin/api/station/" +
            id +
            "/chargers?token=" +
            toKen +
            "&page=" +
            this.newpark +
            "&row=14"
        )
        .then((res) => {
          //console.log(id)
          // console.log(res.status)//打印状态码
          if (res.status == 200) {
            this.parkList = res.data.chargers; //用户列表数据
            this.parkTotal = res.data.total;
            //console.log(this.parkList)
            this.isType = true;
          }
        });
    },
    getRoadChargers() {
      //token去掉引号
      let toKen = this.token.replace(/\"/g, "");
      // console.log(toKen)
      this.$axios
        .get(
          "/admin/api/ebs?token=" + toKen + "&page=" + this.newpark + "&row=14"
        )
        .then((res) => {
          console.log(res.data);
          // console.log(res.data.users)
          // console.log(res.status)//打印状态码
          if (res.status == 200) {
            this.parkList = res.data.chargers; //用户列表数据
            this.parkTotal = res.data.total;
            // console.log(this.tableData)
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
        this.getParksMes(this.leftType); //通过id查询右边数据
      } else {
        this.getRoadChargers(); //页面加载查询总数据
      }
      // this.getParksMes()
      // this.getRoadChargers()
    },
  },
};
</script>

<style scoped="scoped">
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
.dian_imgs {
  display: none;
  cursor: pointer;
}
.caozuo:hover .leftBox-right {
  display: none;
}

.caozuo:hover .dian_imgs {
  display: block;
}

.dian_imgs img {
  padding: 3px;
  width: 15px;
  height: 15px;
  background: #0c52de;
  border-radius: 50%;
}

.dian_imgs {
  position: absolute;
  top: 0;
  right: 0;
  margin: -5px 10px 0 0;
}
.leftBox-right {
  width: 28px;
  height: 37px;
  margin: -5px 0 0 20px;
  cursor: pointer;
}
.aaa .el-input {
  width: 70% !important;
}
.addinput {
  border: 1px solid#1e69fe !important;
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

.sousuo {
  display: flex;
  flex-direction: row;
}

.parkIcon {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-align: center;
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
  width: 45%;
  text-align: left;
  line-height: 35px;
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

.but-weizhi1 {
  margin-left: 10px;
}

.right-con-right {
  width: 68%;
}

.el-button--success {
  margin-left: 20px;
  border-radius: 10px;
  height: 37px;
  color: #1e69fe;
  background-color: #fff;
  border-color: #1e69fe;
}

.parkimg {
  margin: 13px 20px;
}

.parkimg img {
  width: 78px;
  height: 78px;
}

.el-table .cell {
  line-height: 44px;
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

.textBox-right {
  width: 70%;
  height: 34px;
  border-radius: 10px;
  border: solid 1px #1e69fe;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: distribute;
}

.right-con-top {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 15px;
}

.but-weizhi {
  margin-left: 20px;
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
