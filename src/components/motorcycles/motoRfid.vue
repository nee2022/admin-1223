<template>
  <div class="tem-right">
    <div class="tem-right-top">
      <div class="top-left">
        <div class="top-left-word">刷卡套餐</div>
      </div>

      <el-dialog :title="name" :visible.sync="dialogVisible" width="30%">
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

          <el-select  v-model="value" placeholder="金额">
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
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="flag = true">确 定</el-button>
        </span>
      </el-dialog>

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

      <div class="users-right">
        <myhead></myhead>
      </div>
    </div>
    <div class="right-con">
      <div class="right-con-right">
        <div class="right-con-top">
          <div class="textBox input_right">
            <img src="../../assets/images/search.png" class="sear-img" />
            <el-input
            v-model="msgss"
            @keyup.enter.native="cha"
              class=""
              placeholder="请输入套餐信息"
              clearable
            ></el-input>
          </div>
          <div class="zhandian">
            <el-button
              style="width: 100px"
              type="primary"
              icon="el-icon-plus"
              class="but but2"
              @click="cha"
              >查询</el-button
            >
          </div>
          <div class="zhandian">
            <el-button
              style="width: 100px; height: 100%"
              icon="el-icon-plus"
              class="but"
              @click="(dialogVisible = true),names()"
              >添加</el-button
            >
          </div>
        </div>
        <template>
          <el-table :data="parkList" stripe style="width: 100%">
            <el-table-column prop="id" label="套餐ID"> </el-table-column>
            <el-table-column prop="type" label="套餐类型"> </el-table-column>
            <el-table-column prop="pay" label="支付金额"> </el-table-column>
            <el-table-column prop="energy" label="电量"> </el-table-column>
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
        <div class="UserAssets-bottom aa">
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
              small
            >
            </el-pagination>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import myhead from "../../components/myhead";
export default {
  props: ["getData"],
  components: { myhead },
  data() {
    return {
      msgss: "",
      total: 1,
      parkTotal: 0,
      token: "",
      pagenum: 1, //分页
      pagesize: 6,
      pagepark: 16,
      newpark: 1, //分页
      tableData: [],
      parkList: [],
      dialogVisible: false,
      flag: false,
      a: "",
      b: "",
      c: "",
      d: "",
      name: "",
      lest_id: "",
      staty: [
        "已支付",
        "已退款",
        "已完成",
        "退款中",
        "充电中",
        "退款失败",
        "等待开始",
        "等待结束",
        "充电完成",
      ],
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
      lest_id: "",
    };
  },
  created() {
    this.token = localStorage.getItem("token");
    this.getParksMes();
  },
  methods: {
    cha() {
      let toKen = this.token.replace(/\"/g, "");
      this.$axios
        .get(
          "admin/api/packages" + "?token=" + toKen + "&keyword=" + this.msgss
        )
        .then((res) => {
          console.log(res);
          this.parkList = res.data.packages;
          this.parkTotal = res.data.total;
        });
    },
    async removeUserByID(id) {
      console.log(id);
      let toKen = this.token.replace(/\"/g, "");
      const confirmRes = await this.$confirm(
        "此操作将永久删除该信息, 是否继续?",
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
      this.$axios
        .delete("/admin/api/package/" + id + "?token=" + toKen)
        .then((res) => {
          console.log(res.status);
          if (res.status == 200) {
            this.$message.success("删除成功");
            this.getParksMes();
            //刷新用户数据
          } else {
            this.$message.error("删除失败");
          }
        });
      //删除用户提示
    },
    idd(id) {
      this.name = "修改套餐";
      this.lest_id = id;
      console.log(this.lest_id);
    },
    id(e) {
      this.lest_id = e;
      this.name = "修改设备";
      this.value = "金额";
    },
    add() {
      if (this.value == "选项1") {
        this.value = 1;
      } else if (this.value == "选项2") {
        this.value = 2;
      } else {
        this.value = 3;
      }
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
              "&amount=" +
              this.c +
              "&source=rfid&type=" +
              this.value
          )
          .then((res) => {
            if (res.data.error == 0) {
              this.$message.success("修改成功");

              this.getParksMes();
            } else {
              this.$message.error("修改失败");
            }
          });
      } else {
        this.name = "添加套餐";
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
              "&source=rfid&type=" +
              this.value
          )
          .then((res) => {
            console.log(res);
            if (res.data.error == 0) {
              this.$message.success("添加成功");

              this.getParksMes();
            } else {
              this.$message.error("添加失败");
            }
            console.log(res.data.error);
          });
        this.a = "";
        this.b = "";
        this.c = "";
        this.d = "";
        this.value = "金额";
      }
    },
    names() {
      this.name = "添加套餐";
    },
    getParksMes() {
      let toKen = this.token.replace(/\"/g, "");
      this.$axios
        .get(
          "/admin/api/packages/?token=" +
            toKen +
            "&page=" +
            this.newpark +
            "&row=16&source=rfid"
        )
        .then((res) => {
          console.log(res);
          // console.log(res.data.users)
          // console.log(res.status)//打印状态码
          if (res.status == 200) {
            this.parkList = res.data.packages; //用户列表数据
            this.parkTotal = res.data.total;
            //   console.log(this.parkList);
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
      this.getParksMes();
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

.addinput {
  border: 1px solid #1e69fe !important;
  width: 70% !important;
}

.right-con-right {
  width: 100%;
}

.input_right {
  /* margin-left: -63px; */
  width: 65% !important;
}
.aa {
  margin-top: 41px !important;
}
.zhandian .el-button {
  padding: 0px !important;
}
.parkName {
  height: 15%;
  margin: 4%;
}
.dingwei {
  display: inline-block;
  float: left;
  margin-right: 3%;
}
.el-table td div {
  text-align: left;
}
.tem-right {
  display: flex;
  flex: 1;
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

.but {
  width: 140px;
  padding-top: -10px;
}

.parkIcon {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.parkIcon div {
  margin-right: 3%;
  text-align: center !important;
  background-color: #f2d0bd;
  height: 22px;
  width: 55px;
  line-height: 22px;
  border-radius: 5px;
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
  width: 30%;
  box-shadow: 10px 10px 15px #edf1f5;
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
  width: 70%;
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
  width: 600px;
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
