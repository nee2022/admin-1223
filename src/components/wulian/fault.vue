<template>
  <div class="tem-right">
    <div class="tem-right-top">
      <div class="top-left">
        <div class="top-left-word">
          物联设备
        </div>
      </div>

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
            @keyup.enter.native="cha"
              v-model="abc"
              class=""
              placeholder="请输入设备信息"
              clearable
            ></el-input>
          </div>
          <div class="zhandian">
            <el-button
              @click="cha"
              style="width: 100px"
              type="primary"
              icon="el-icon-plus"
              class="but but2"
              >查询</el-button
            >
          </div>
          <!-- <div class="zhandian">
            <el-button
            
              style="width: 100px; height: 100%"
              icon="el-icon-plus"
              class="but"
              >添加</el-button
            >
          </div> -->
        </div>
        <template>
          <el-table :data="parkList" stripe style="width: 100%">
            <el-table-column prop="dev_id" label="设备编号"> </el-table-column>
            <el-table-column prop="name" label="名称"> </el-table-column>
            <el-table-column prop="type" label="类型"> </el-table-column>
            <el-table-column prop="mac" label="机号"> </el-table-column>
            <el-table-column label="状态" prop="online">
              <template slot-scope="scope">
                <span v-if="scope.row.online == true">在线</span>
                <span v-else>离线</span>
              </template>
            </el-table-column>
            <!-- <el-table-column prop="address" label="操作" width="200">
              <div class="operation">
                <div>
                  <el-button type="text"
                    ><img src="../assets/images/delete.png"
                  /></el-button>
                </div>
                <div>
                  <el-button type="text"
                    ><img src="../assets/images/compile.png"
                  /></el-button>
                </div>
              </div>
            </el-table-column> -->
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
      total: 1,
      parkTotal: 0,
      token: "",
      pagenum: 1, //分页
      pagesize: 6,
      pagepark: 16,
      newpark: 1, //分页
      tableData: [],
      parkList: [],
      abc:'',
    };
  },
  created() {
    this.token = localStorage.getItem("token");
    this.getParksMes();
  },

  methods: {
     cha(){
          let toKen = this.token.replace(/\"/g, "");
      console.log(this.station_msg);
      this.$axios
        .get(
          "admin/api/chargers" +
            "?token=" +
            toKen +
           "&page=" +
            this.newpark +
            "&row=16"+
            "&keyword="+
            this.abc
        )
        .then((res) => {
          console.log(res);
          this.parkList = res.data.chargers;
          this.parkTotal = res.data.total;
        });
  },
    getParksMes() {
      let toKen = this.token.replace(/\"/g, "");
      this.$axios
        .get(
          "admin/api/chargers?token=" +
            toKen +
            "&page=" +
            this.newpark +
            "&row=16&error=1"
        )
        .then((res) => {
          console.log(res);
          this.parkList = res.data.chargers;
          this.parkTotal = res.data.total;
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
.UserAssets-bgcolor .el-button--primary{
  background: #1e69fe;
}
.el-select{
 border: 1px solid #1e69fe
 !important;
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
