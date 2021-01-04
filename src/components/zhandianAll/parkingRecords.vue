<template>
  <div class="tem-right">
    <div class="tem-right-top">
      <div class="top-left">
        <div class="top-left-word">停车记录</div>
      </div>

      <el-dialog :title="name" :visible.sync="dialogVisible" width="30%">
        <el-form>
          <el-form-item label="车牌:">
            <el-input v-model="a" class="addinput"></el-input>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="(flag = true)"
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
        <headMsg></headMsg>

        <div class="right-con-top">
          <div class="textBox input_right">
            <img src="../../assets/images/search.png" class="sear-img" />
            <el-input
              v-model="msgss"
              @keyup.enter.native="cha"
              class="in"
              placeholder="请输入信息查询"
            ></el-input>
          </div>
          <div class="zhandian">
            <el-button
              style="width: 100px"
              type="primary"
              icon="el-icon-search"
              class="but but2"
              >查询</el-button
            >
          </div>
          <div class="zhandian">
            <el-button
              style="width: 100px"
              type="primary"
              icon="el-icon-refresh"
              class="but but2"
              >重置</el-button
            >
          </div>
          <div class="zhandian">
            <el-button
              style="width: 100px"
              type="primary"
              icon="el-icon-plus"
              class="but but2"
             
              >添加</el-button
            >
          </div>
        </div>
        <template>
          <el-table :data="parkList" stripe style="width: 100%">
            <el-table-column prop="id" label="ID"> </el-table-column>
            <el-table-column prop="dealno" label="订单号"> </el-table-column>
            <el-table-column label="订单类型">
              <template slot-scope="scope">
                <div style="text-align: center !important">
                  {{ types[scope.row.type] }}
                </div>
              </template>
            </el-table-column>
            <el-table-column prop="enter_time" label="驶入时间">
            </el-table-column>
            <el-table-column prop="leave_time	" label="驶出时间"> </el-table-column>
            <el-table-column prop="address" label="操作" width="200">
              <template>
                <div class="operation">
                  <div>
                    <el-button type="text"
                      ><img src="../../assets/images/delete.png"
                    /></el-button>
                  </div>
                  <!-- <div>
                    <el-button type="text"
                      ><img src="../../assets/images/compile.png"
                    /></el-button>
                  </div> -->
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
import headMsg from "../../components/headMsg";
export default {
  props: ["getData"],
  components: { myhead, headMsg },
  data() {
    return {
      value: "",
      a: "",
      b: "",
      c: "",
      d: "",
      name: "",
      dialogVisible: false,
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
      stationsId: "",
      types: ["系统", "管理员", "运营商", "用户", "收费员", "抓拍机", "地磁", "高位视频", "低位视频", "巡检车", "合作方"],
    };
  },
  created() {
    this.stationsId = this.$store.state.id;
    this.stationsName = this.$store.state.name;
    this.token = localStorage.getItem("token");
    this.getParksMes();
  },
  methods: {
    add() {
      let toKen = this.token.replace(/\"/g, "");
      this.$axios
        .post(
          `/admin/api/plate?token=${toKen}&type=2&plate=${this.a}&station=${this.stationsId}`
        )
        .then((res) => {
          console.log(res);
          // console.log(res.data.users)
          // console.log(res.status)//打印状态码
          if (res.status == 200) {
            this.getParksMes();
          }
          this.dialogVisible = false;
        });
    },
    getParksMes() {
      let toKen = this.token.replace(/\"/g, "");
      this.$axios
        .get(
          `admin/api/station/${this.stationsId}/pdrs?token=${toKen}&page=${this.newpark}&row=8`
        )
        .then((res) => {
          console.log(res);
          // console.log(res.data.users)
          // console.log(res.status)//打印状态码
          if (res.status == 200) {
            this.parkList = res.data.pdrs; //用户列表数据
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
.el-table >>> .cell {
  text-align: center !important;
}
.el-table td >>> .el-table th.is-leaf {
  text-align: center !important;
}
.in >>> .el-input__inner {
  height: 18px !important;
  border: none !important;
}
.el-form >>> .el-form-item__label {
  width: 96px !important;
  text-align: center;
}

.addinput {
  border: 1px solid #dcdfe6 !important;
  width: 70% !important;
}
.UserAssets-bgcolor .el-button--primary {
  margin: 0 10px 0 10px;
  background: #1e69fe;
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
  margin: 0 auto;
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
  margin: 15px 0 15px 0;
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
.UserAssets-bgcolor .el-table td {
  padding: 0 0;
}

.el-input__inner {
  height: 30px;
  border: none;
}

.tanchu {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.tanchu-text {
  width: 248px;
  height: 17px;
  font-family: PingFangSC-Regular;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 0px;
  color: #7b7b7b;
  margin-left: 5px;
}

.active {
  background-color: white;
}

.operation {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 70px;
  margin: 0 auto;
}

.el-table__footer-wrapper,
.el-table__header-wrapper {
  margin-top: 10px;
  background-color: #edf1f5;
}

.textWord {
  width: 390px;
  height: 30px;
  border: none;
}

.UserAssets-bgcolor .cell {
  text-align: center;
  font-size: 16px;
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  font-weight: 400;
}

.UserAssets-bgcolor {
  width: 100%;
  display: flex;
  flex-direction: row;
}

.UserAssets-right {
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: white;
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;
}

/* 菜单选项卡字体颜色 */
.menu-word {
  color: white;
}

/* 顶部按钮 */
.UserAssets-bgcolor .el-button--primary {
  border-radius: 10px;
  height: 37px;
}

.UserAssets-bgcolor .el-button--default {
  border-radius: 10px;
  padding: 10px 20px;
}

.UserAssets-bgcolor .el-table {
  color: #908e8e;
}

.UserAssets-right-top {
  display: flex;
  flex-direction: row;
  width: 95%;
  margin: 20px auto;
  margin-top: 40px;
}

.UserAssets-left {
  display: flex;
  flex-direction: column;
  min-width: 200px;
  background-color: #1e69fe;
}

.UserAssets-logo {
  text-align: center;
  margin: 30px 0px;
}

.LOGO {
  width: 67px;
  height: 20px;
  font-family: MyriadPro-Regular;
  font-size: 24px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 44px;
  letter-spacing: 0px;
  color: #ffffff;
}

.UserAssets-bgcolor .el-col-12 {
  width: 100%;
  text-align: center;
}

/* 字体 */
.vive {
  font-size: 15px;
  color: white;
  text-align: center;
  display: flex;
  flex-direction: row;
  margin: 13px auto;
  width: 100%;
}

.UserAssets-bgcolor .el-submenu__title {
  font-size: 15px;
  width: 100%;
}

/* 按钮字体 */
.UserAssets-bgcolor .el-button {
  font-size: 16px;
}

.el-menu-item {
  font-size: 13px;
  color: #dbdbdb;
}

.menu-op {
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: 0 auto;
}

.menu-op div {
  padding: 0px 6px;
  width: 40px;
}

.user-word {
  font-family: PingFangSC-Regular;
  font-size: 15px;
  color: #000000;
}

.user-left {
  width: 50%;
}

.user-right {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}

.user-right {
  width: 10%;
}

.menu-word-2 {
  font-size: 15px;
  color: white;
}

.user-right span {
  color: #8a9199;
}

.user-img {
  height: 40px;
  width: 40px;
  overflow: hidden;
  border-radius: 100%;
}

.el-menu-item.is-active:hover {
  background-color: #1e69fe;
}

.UserAssets-right-text {
  width: 650px;
  margin-left: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.select1 {
  width: 200px;
  height: 34px;
  border-radius: 10px;
  border: solid 1px #1e69fe;
  font-size: 16px;
  padding: 0 2%;
  margin: 0;
}

.textBox {
  height: 34px;
  border-radius: 10px;
  border: solid 1px #1e69fe;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
}

.UserAssets-bottom {
  display: flex;
  flex-direction: row;
  width: 95%;
  margin: 29px auto;
}

.UserAssets-bottom-left {
  width: 50%;
}

.UserAssets-bottom-right {
  width: 50%;
  text-align: right;
}

.UserAssets-bottom-left span {
  width: 137px;
  height: 18px;
  font-family: PingFangSC-Regular;
  font-size: 16px;
  font-weight: 600;
  font-stretch: normal;
  line-height: 20px;
  letter-spacing: 0px;
  color: #333333;
}

.el-table .cell {
  line-height: 44px;
}

.set {
  width: 30px;
  margin-left: 30px;
}

.vive span {
  margin-left: 10px;
}

.set img {
  width: 17px;
  height: 17px;
}

.select1 option {
  text-align: center;
}

.sear-img {
  width: 15px;
  height: 15px;
}

/* 第一行数据类型 */
.el-table thead {
  color: black;
}
</style>
