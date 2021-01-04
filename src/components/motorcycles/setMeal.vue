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
    <div class="right-con">
      <div class="right-con-left">
        <div class="right-con-top">
          <div class="textBox">
            <img src="../../assets/images/search.png" class="sear-img" />
            <el-input
              placeholder="请输入套餐名"
              class="textWord"
              clearable
            ></el-input>
          </div>
          <div>
            <el-button type="primary" icon="el-icon-plus" class="but"
              >添加</el-button
            >
          </div>
        </div>
        <template>
          <el-table :data="tancanList" stripe style="width: 100%">
            <el-table-column prop="address" label="操作">
              <template slot-scope="scope">
                <el-switch v-model="scope.row.memo" active-color="#1e69fe">
                </el-switch>
              </template>
            </el-table-column>
            <el-table-column prop="name" label="套餐">
              <template slot-scope="scope">
                <div @click="getParksMes(scope.row.id, scope.row.name)">
                  {{ scope.row.name }}
                </div>
              </template>
            </el-table-column>
            <el-table-column prop="address" label="操作">
              <div class="operation">
                <div>
                  <el-button type="text"
                    ><img src="../../assets/images/delete.png"
                  /></el-button>
                </div>
                <div>
                  <el-button type="text"
                    ><img src="../../assets/images/compile.png"
                  /></el-button>
                </div>
              </div>
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
              :current-page="pagenum"
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
        <div class="right-top">
          <div class="blueD"></div>
          {{ topName }}
        </div>
        <div class="blueBut">
          <el-button type="primary" icon="el-icon-plus" class="but"
            >添加</el-button
          >
        </div>
        <template>
          <el-table :data="parkList" stripe style="width: 100%">
            <el-table-column prop="id" label="套餐ID"> </el-table-column>
            <el-table-column prop="type" label="套餐类型"> </el-table-column>
            <el-table-column prop="pay" label="支付金额"> </el-table-column>
            <el-table-column prop="energy" label="电量"> </el-table-column>
            <el-table-column prop="address" label="操作">
              <div class="operation">
                <div>
                  <el-button type="text"
                    ><img src="../../assets/images/delete.png"
                  /></el-button>
                </div>
                <div>
                  <el-button type="text"
                    ><img src="../../assets/images/compile.png"
                  /></el-button>
                </div>
              </div>
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
import myhead from '../myhead'

export default {
  components: { myhead },
    mutations:{
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
    };
  },
  created() {
    this.token = localStorage.getItem("token");
    this.getRoadMes();
    this.getParklist();
  },
  methods: {
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
          if (res.status == 200) {
            this.parkList = res.data.packages; //用户列表数据
            this.parkTotal = res.data.total;
          }
          this.topName = name;
        });
    },

        getParklist() {
      //token去掉引号
      let toKen = this.token.replace(/\"/g, "");
      this.$axios
        .get(
          "/admin/api/packages?token=" +
            toKen +
            "&page=" +
            this.newpark +
            "&row=16"
        )
        .then((res) => {
          console.log(res.data);
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
      this.getParksMes();
    },
  },
};
</script>

<style scoped="scoped">
.right-con-right {
  margin-top:3%;
  width: 100%;
}
.right-con-left {
  margin-top:3%;
  width: 100%;
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

.blueD {
  width: 10px;

  height: 10px;

  border-radius: 100%;

  background-color: #1e69fe;

  margin: 0px 15px;
}

.right-top {
  background-color: #edf1f5;

  width: 100%;

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
  box-shadow: 10px 10px 15px #edf1f5;
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
  width: 100%;
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
