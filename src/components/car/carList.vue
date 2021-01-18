<template>
  <div class="oneCard-right">
    <div class="UserAssets-right-top">
      <div class="user-left">
        <span class="user-word">用户统计</span>
      </div>
      <div class="users-right">
        <myhead></myhead>
      </div>
    </div>
    <div class="conB">
      <div class="UserAssets-right-text">
        <div class="date">
          <div v-for="item in dateList">
            <span
              :class="{ chooseB: item.id == isBg }"
              @click="changeBg(item.id)"
              >{{ item.name }}</span
            >
          </div>
        </div>
        <div class="dateSel">
          <template>
            <div class="block">
              <el-date-picker
                v-model="value1"
                type="daterange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
              >
              </el-date-picker>
            </div>
          </template>
        </div>

        <div class="inputs">
          <el-input
            prefix-icon="el-icon-search"
            placeholder="请输入信息进行查找"
            v-model="input2"
            class="textWord"
            @keyup.enter.native="getRoadChargers"
            clearable
          >
          </el-input>
        </div>

        <div>
          <el-button type="primary" icon="el-icon-search" @click="getUserMes"
            >查询</el-button
          >
        </div>
        <div class="whiteBut">
          <img
            src="../../assets/images/export.png"
            style="width: 14px; height: 14px"
          />
          导出
        </div>
        <div class="whiteBut">
          <img
            src="../../assets/images/print.png"
            style="width: 14px; height: 14px"
          />
          打印
        </div>
      </div>
      <div class="changeMode">
        <div @click="flagT" v-if="changeList == false">
          <img
            src="../../assets/images/Icon button.png"
            alt=""
            style="width: 35px; height: 35px"
          />
        </div>
        <div @click="flagF" v-show="changeList == true">
          <img
            src="../../assets/images/Icon button.png"
            alt=""
            style="width: 35px; height: 35px"
          />
        </div>
      </div>
    </div>
    <div style="height: 700px">
      <div v-if="changeList == true" style="height: 680px">
        <table class="tableClass">
          <tr class="firstTr">
            <td class="td1">日期</td>
            <td class="td2">商户名</td>
            <td class="td2">站点</td>
            <td class="td2">订单数</td>
            <td class="td3">金额</td>
            <td class="td6">收入</td>
            <td class="td6">退款</td>
            <td class="td6">优惠</td>
          </tr>
          <tr class="dataTable" v-for="item in 10">
            <td class="dateColor">2020-01-06</td>
            <td>1369</td>
            <td>759723</td>
            <td>测试点1</td>
            <td>1321</td>
            <td>6252</td>
            <td>42621</td>
            <td>23</td>
          </tr>
        </table>
      </div>
      <div v-show="changeList == false" class="tubiaobox">
        <div class="tub1">
          <div class="tubBox">
            <div class="tubBoxTitleBox">
              <div class="tubBoxTitle">
                <div class="tubBoxTitleW">用户总增长趋势</div>
                <div @click="veryBig(1)">
                  <img src="../../assets/layui/images/face/26.gif" />
                </div>
              </div>
            </div>
            <div class="tubBoxConBox" id="myEcharts"></div>
            <div class="zhezhao" v-show="big"></div>
            <div class="hezi" v-show="big">
              <div class="tubBoxTitleBox">
                <div class="tubBoxTitle">
                  <div class="tubBoxTitleW">{{ name }}</div>
                  <div @click="xiaoshi">
                    <img
                      class="tututututu"
                      src="../../assets/images/chacha.png"
                    />
                  </div>
                </div>
              </div>
              <div class="heziss"></div>
            </div>
          </div>

          <div class="tubBox">
            <div class="tubBoxTitleBox">
              <div class="tubBoxTitle">
                <div class="tubBoxTitleW">用户活跃度增长趋势</div>
                <div @click="veryBig(2)">
                  <img src="../../assets/layui/images/face/26.gif" />
                </div>
              </div>
            </div>
            <div class="tubBoxConBox" id="myEcharts1"></div>
          </div>
          <div class="tubBox">
            <div class="tubBoxTitleBox">
              <div class="tubBoxTitle">
                <div class="tubBoxTitleW">钱包余额增长趋势</div>
                <div @click="veryBig(3)">
                  <img src="../../assets/layui/images/face/26.gif" />
                </div>
              </div>
            </div>
            <div class="tubBoxConBox" id="myEcharts2"></div>
          </div>
        </div>
        <div class="tub1">
          <div class="tubBox">
            <div class="tubBoxTitleBox">
              <div class="tubBoxTitle">
                <div class="tubBoxTitleW">积分增长趋势</div>
                <div @click="veryBig(4)">
                  <img src="../../assets/layui/images/face/26.gif" />
                </div>
              </div>
            </div>
            <div class="tubBoxConBox" id="myEcharts3"></div>
          </div>
          <div class="tubBox">
            <div class="tubBoxTitleBox">
              <div class="tubBoxTitle">
                <div class="tubBoxTitleW">用户分布增长趋势</div>
                <div @click="veryBig6(1)">
                  <img src="../../assets/layui/images/face/26.gif" />
                </div>
              </div>
            </div>
            <div class="tubBoxConBox" id="myEcharts4"></div>
          </div>
          <div class="tubBox">
            <div class="tubBoxTitleBox">
              <div class="tubBoxTitle">
                <div class="tubBoxTitleW">认证用户增长趋势</div>
                <div @click="veryBig6(2)">
                  <img src="../../assets/layui/images/face/26.gif" />
                </div>
              </div>
            </div>
            <div class="tubBoxConBox" id="myEcharts5"></div>
            <div class="zhezhao" v-show="big1"></div>
            <div class="hezi" v-show="big1">
              <div class="tubBoxTitleBox">
                <div class="tubBoxTitle">
                  <div class="tubBoxTitleW">{{ name }}</div>
                  <div @click="xiaoshi">
                    <img
                      class="tututututu"
                      src="../../assets/images/chacha.png"
                    />
                  </div>
                </div>
              </div>
              <div class="heziss2"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="UserAssets-bottom" v-if="changeList == true">
      <div class="UserAssets-bottom-left" :data="cardList">
        <span>共{{ total }}张卡</span>
      </div>
      <div class="UserAssets-bottom-right">
        <el-pagination
          background
          :current-page.sync.number="pagenum"
          @current-change="handleCurrentChange"
          :page-size="pagesize"
          layout="prev, pager, next"
          :total="total"
        >
        </el-pagination>
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
      name: "4",
      shuju1: [5313, 1432, 4641, 2234, 3421],
      shuju2: [6413, 432, 1541, 2434, 3321],
      shuju3: [1313, 1432, 4641, 2434, 3421],
      shuju4: [2132, 1231, 4354, 4532, 7654],
      shuju5: [2313, 3432, 4641, 1234, 3421],
      shuju6: [6413, 432, 1541, 2434, 3321],
      shuju7: [2313, 3432, 4641, 1234, 3421],
      shuju8: [6413, 432, 1541, 2434, 3321],
      big: false,
      big1: false,
      input2: "",
      cardList: [], //卡数据
      dayList: [],
      numList: [],
      userList: [
        {
          day: "2021-01-07",
          num: 1000,
        },
        {
          day: "2021-01-08",
          num: 3484,
        },
        {
          day: "2021-01-09",
          num: 1823,
        },
        {
          day: "2021-01-10",
          num: 5942,
        },
        {
          day: "2021-01-11",
          num: 2313,
        },
      ], //这个是我新建的

      option: "",
      dateList: [
        {
          name: "日",
          id: 1,
        },
        {
          name: "周",
          id: 2,
        },
        {
          name: "月",
          id: 3,
        },
        {
          name: "季",
          id: 4,
        },
        {
          name: "年",
          id: 5,
        },
      ],
      username: "",
      total: 1, //数据总条数
      isActive: true,
      isBg: 1,
      dialogVisible: false,
      addDialogVisible: false,
      add: false,
      changeList: false,
      selected: 0, //下拉框
      pagenum: 1, //分页
      pagenum2: 1, //分页
      token: "", //token令牌
      pagesize: 7, //每次查询条数
      type: 0,
      input: "",
      value1: "",
      value: true,
      typeList: [
        {
          id: 0,
          type: "所有",
        },
        {
          id: 1,
          type: "手机",
        },
        {
          id: 2,
          type: "微信",
        },
        {
          id: 3,
          type: "支付宝",
        },
      ],
    };
  },
  created() {
    this.token = localStorage.getItem("token");
    this.getUserMes();
    this.send();
    this.$nextTick(() => {
      this.drawChart();
      this.drawChart1();
      this.drawChart2();
      this.drawChart3();
      this.drawChart4();
      this.drawChart5();
    });
  },
  mounted() {},
  methods: {
    veryBig6(w) {
      var hezi = document.getElementsByClassName("heziss2")[0];
      var hezi3 = document.getElementsByClassName("tubBoxConBox");
      this.big1 = true;
      if (w == 1) {
        this.name = "用户分布增长趋势";
        hezi.id = "myEcharts4";
        hezi3[4].id = "ee";
        this.$nextTick(() => {
          this.drawChart4();
        });
      } else {
        this.name = "认证用户增长趋势";
        hezi.id = "myEcharts5";
        hezi3[5].id = "ee";
        this.$nextTick(() => {
          this.drawChart5();
        });
      }
    },
    xiaoshi() {
      this.big = false;
      this.big1 = false;
    },
    veryBig(e) {
      var hezi = document.getElementsByClassName("heziss")[0];
      var hezi3 = document.getElementsByClassName("tubBoxConBox");
      if (e == 1) {
        this.name = "用户总增长趋势";
        hezi.id = "myEcharts";
        hezi3[0].id = "ee";
        this.big = true;
        this.$nextTick(() => {
          this.drawChart();
        });
      } else if (e == 2) {
        this.name = "用户活跃度增长趋势";
        hezi.id = "myEcharts1";
        hezi3[1].id = "ee";
        this.big = true;
        this.$nextTick(() => {
          this.drawChart1();
        });
      } else if (e == 3) {
        this.name = "钱包余额增长趋势";

        hezi.id = "myEcharts2";
        hezi3[2].id = "ee";
        this.big = true;
        this.$nextTick(() => {
          this.drawChart2();
        });
      } else if (e == 4) {
        this.name = "积分增长趋势";

        hezi.id = "myEcharts3";
        hezi3[3].id = "ee";
        this.big = true;
        this.$nextTick(() => {
          this.drawChart3();
        });
      }
    },
    send() {
      this.userList.forEach((day) => {
        this.dayList.push(day.day);
      });
      this.userList.forEach((num) => {
        this.numList.push(num.num);
      });
      console.log(this.numList);
    },
    drawChart() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("myEcharts"));
      // 指定图表的配置项和数据
      var option = {
        tooltip: {
          trigger: "axis",
        },
        color: ["#ff7200"],
        grid: {},
        legend: {
          data: ["用户总数"],
          orient: "horizontal", //垂直显示
          y: "bottom", //延Y轴居中
          x: "center", //居右显示
          textStyle: {
            fontSize: 16,
          },
          // show: true,
          // borderWidth: 2,
          // shadowColor: 'rgba(0, 0, 0, 0.5)',
          // shadowBlur: 5,
          // borderRadius: 10,
          // padding: [20, 10],
        },
        xAxis: {
          data: this.dayList,
          fontSize: 18,
        },
        yAxis: {
          type: "value",
          name: "单位:人数",
        },
        series: [
          {
            name: "用户总数",
            type: "line",
            data: this.shuju1,
            smooth: true,
          },
        ],
      };
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    },
    drawChart1() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("myEcharts1"));
      // 指定图表的配置项和数据
      var option = {
        tooltip: {
          trigger: "axis",
        },
        color: ["#00cc57"],
        grid: {},
        legend: {
          data: ["用户活跃度"],
          orient: "horizontal", //垂直显示
          y: "bottom", //延Y轴居中
          x: "center", //居右显示
          textStyle: {
            fontSize: 16,
          },
          // show: true,
          // borderWidth: 2,
          // shadowColor: 'rgba(0, 0, 0, 0.5)',
          // shadowBlur: 5,
          // borderRadius: 10,
          // padding: [20, 10],
        },
        xAxis: {
          data: this.dayList,
          fontSize: 18,
        },
        yAxis: {
          type: "value",
          name: "单位:人数",
        },
        series: [
          {
            name: "用户活跃度",
            type: "line",
            data: this.shuju2,
            smooth: true,
          },
        ],
      };
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    },
    drawChart2() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("myEcharts2"));
      // 指定图表的配置项和数据
      var option = {
        tooltip: {
          trigger: "axis",
        },
        color: ["red"],
        grid: {},
        legend: {
          data: ["钱包余额"],
          orient: "horizontal", //垂直显示
          y: "bottom", //延Y轴居中
          x: "center", //居右显示
          textStyle: {
            fontSize: 16,
          },
          // show: true,
          // borderWidth: 2,
          // shadowColor: 'rgba(0, 0, 0, 0.5)',
          // shadowBlur: 5,
          // borderRadius: 10,
          // padding: [20, 10],
        },
        xAxis: {
          data: this.dayList,
          fontSize: 18,
        },
        yAxis: {
          type: "value",
          name: "单位:人数",
        },
        series: [
          {
            name: "钱包余额",
            type: "line",
            data: [1313, 1432, 4641, 2434, 3421],
            smooth: true,
          },
        ],
      };
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    },
    drawChart3() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("myEcharts3"));
      // 指定图表的配置项和数据
      var option = {
        tooltip: {
          trigger: "axis",
        },
        color: ["purple"],
        grid: {},
        legend: {
          data: ["积分"],
          orient: "horizontal", //垂直显示
          y: "bottom", //延Y轴居中
          x: "center", //居右显示
          textStyle: {
            fontSize: 12,
          },
          // show: true,
          // borderWidth: 2,
          // shadowColor: 'rgba(0, 0, 0, 0.5)',
          // shadowBlur: 5,
          // borderRadius: 10,
          // padding: [20, 10],
        },
        xAxis: {
          data: this.dayList,
          fontSize: 18,
        },
        yAxis: {
          type: "value",
          name: "单位:人数",
        },
        series: [
          {
            name: "积分",
            type: "line",
            data: [2132, 1231, 4354, 4532, 7654],
            smooth: true,
          },
        ],
      };
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    },
    drawChart4() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("myEcharts4"));
      // 指定图表的配置项和数据
      var option = {
        tooltip: {
          trigger: "axis",
        },
        color: ["#ff7200", "#00cc57", "#238ae1"],
        grid: {},
        legend: {
          data: ["手机用户", "微信用户", "支付宝用户"],
          orient: "horizontal", //垂直显示
          y: "bottom", //延Y轴居中
          x: "center", //居右显示
          textStyle: {
            fontSize: 12,
          },
          // show: true,
          // borderWidth: 2,
          // shadowColor: 'rgba(0, 0, 0, 0.5)',
          // shadowBlur: 5,
          // borderRadius: 10,
          // padding: [20, 10],
        },
        xAxis: {
          data: this.dayList,
          fontSize: 18,
        },
        yAxis: {
          type: "value",
          name: "单位:人数",
        },
        series: [
          {
            name: "手机用户",
            type: "line",
            data: this.numList,
            smooth: true,
          },
          {
            name: "微信用户",
            type: "line",
            data: [56756, 3432, 567, 567, 56756],
            smooth: true,
          },
          {
            name: "支付宝用户",
            type: "line",
            data: [657, 567567, 567, 567567, 335621],
            smooth: true,
          },
        ],
      };
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    },
    drawChart5() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("myEcharts5"));
      // 指定图表的配置项和数据
      var option = {
        tooltip: {
          trigger: "axis",
        },
        color: ["#ff7200", "#00cc57", "#238ae1"],
        grid: {},
        legend: {
          data: ["手机用户", "微信用户", "支付宝用户"],
          orient: "horizontal", //垂直显示
          y: "bottom", //延Y轴居中
          x: "center", //居右显示
          textStyle: {
            fontSize: 12,
          },
          // show: true,
          // borderWidth: 2,
          // shadowColor: 'rgba(0, 0, 0, 0.5)',
          // shadowBlur: 5,
          // borderRadius: 10,
          // padding: [20, 10],
        },
        xAxis: {
          data: this.dayList,
          fontSize: 18,
          // width:300,
        },
        yAxis: {
          type: "value",
          name: "单位:人数",
        },
        series: [
          {
            name: "手机用户",
            type: "line",
            data: this.numList,
            smooth: true,
          },
          {
            name: "微信用户",
            type: "line",
            data: this.shuju7,
            smooth: true,
          },
          {
            name: "支付宝用户",
            type: "line",
            data: this.shuju8,
            smooth: true,
          },
        ],
      };
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    },
    userMssage(id, operator_name) {
      console.log(id);
      sessionStorage.setItem("id", id);
      sessionStorage.setItem("username", operator_name);
      this.$router.push({
        path: "/oneCardjiben",
      });
    },
    flagF() {
      this.changeList = false;
      this.$nextTick(() => {
        this.drawChart();
      });
    },
    flagT() {
      this.changeList = true;
      this.getUserMes();
    },
    //获取用户卡信息列表
    getUserMes() {
      //token去掉引号
      let toKen = this.token.replace(/\"/g, "");
      //console.log(toKen)
      this.$axios
        .get(
          "admin/api/cards/?token=" +
            toKen +
            "&page=" +
            this.pagenum +
            "&row=14"
        )
        .then((res) => {
          console.log(res);
          // console.log(res.status)//打印状态码
          if (res.status == 200) {
            this.cardList = res.data.cards; //用户列表数据
            this.total = res.data.total;
            console.log(this.cardList);
            this.pagesize = 14;
          }
        });
    },
    changeIcon() {
      this.changeList = !this.changeList;
      console.log(this.changeList);
    },

    changeBg(id) {
      this.isBg = id;
    },

    //监听页码值改变
    handleCurrentChange(newPage) {
      this.pagenum = newPage;
      this.getUserMes();
    },
  },
};
</script>

<style scoped="scoped">
.heziss2 {
  width: 1700px;
  height: 80%;
}
.tututututu {
  cursor: pointer;
  width: 40px;
}
.heziss {
  width: 1700px;
  height: 80%;
}
.zhezhao {
  width: 100%;
  height: 100%;
  position: fixed;
  background: #000;
  z-index: 888;
  top: 0;
  left: 0;
  opacity: 0.6;
}
.hezi {
  width: 1700px;
  height: 80%;
  position: absolute;
  left: 55%;
  top: 50%;
  background: white;
  z-index: 999;
  transform: translate(-50%, -50%);
}
.oneCard-right {
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: white;
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;
}

.tubBoxTitle {
  width: 90%;
  height: 71px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.tubBoxConBox {
  width: 100%;
  height: 80%;
}

.tubBoxTitleBox {
  width: 100%;
  background-color: #f3f6fb;
}

.tubBoxTitleW {
  font-size: 18px;
}

.bgTuli {
  height: 100px;
  width: 130px;
  box-shadow: ;
  position: absolute;
  box-shadow: 0px 0px 10px 5px #cccccc;
  top: center;
  right: 0;
  border-radius: 10px;
}

.tbodyBox {
  display: flex;
  flex-direction: row;
}

.tbodyBox div {
  display: flex;
  flex: 4;
  justify-content: center;
  border-bottom: solid 1px #a9b4cb;
  border-left: solid 1px #a9b4cb;
  border-right: solid 1px #a9b4cb;
  height: 56px;
  align-items: center;
}

.dateColor {
  background-color: #d1e0fe;
  font-size: 16px;
  color: #7c7c7c;
}

.dataTable td {
  font-size: 16px;
  text-align: center;
  color: #7c7c7c;
  border: solid 1px #a9b4cb;
}

.tBox {
  text-align: center;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100%;
}

.tbox2 {
  flex: 6;
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid 1px #a9b4cb;
}

.tBox1 {
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 50%;
  align-items: center;
  border-bottom: solid 1px #a9b4cb;
}

.tBox1 div {
  display: flex;
  flex: 4;
  height: 100%;
  align-items: center;
  justify-content: center;
  border-bottom: solid 1px #a9b4cb;
  border-left: solid 1px #a9b4cb;
  border-right: solid 1px #a9b4cb;
}

.tableClass {
  width: 95%;
  height: 100%;
  margin: 0 auto;
  margin-top: 20px;
}
.firstTr td {
  width: 10%;
}
.td1 {
  height: 100px;
  background-color: #518bfe;
  text-align: center;
  font-size: 20px;
  color: white;
  border: solid 1px #a9b4cb;
}

.td2 {
  background-color: #518bfe;
  text-align: center;
  font-size: 20px;
  color: white;
  border: solid 1px #a9b4cb;
}

.td3 {
  text-align: center;
  background-color: #518bfe;
  font-size: 20px;
  color: white;
  border: solid 1px #a9b4cb;
}

.td6 {
  background-color: #518bfe;
  text-align: center;
  font-size: 20px;
  color: white;
  border: solid 1px #a9b4cb;
}

.whiteBut {
  width: 95px;
  height: 37px;
  border: solid 1px #1e69fe;
  border-radius: 10px;
  text-align: center;
  line-height: 37px;
  font-size: 16px;
  cursor: pointer;
}

.imgBoxBotM {
  display: flex;
  flex-direction: column;
  height: 60px;
  justify-content: space-between;
  color: white;
  align-items: center;
}

.money {
  font-size: 22px;
}

.chongzhi {
  width: 50px;
  height: 18px;
  border: solid 1px white;
  border-radius: 9px;
  text-align: center;
  line-height: 18px;
}

.netWord {
  margin-left: 30px;
  height: 65px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.netWord1 {
  font-size: 18px;
  color: white;
}

.netWord2 {
  font-size: 28px;
  color: white;
}

.imgBoxConL {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.netImg {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #71b7f2;
  text-align: center;
  line-height: 50px;
}

.netImg1 {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #eb9494;
  text-align: center;
  line-height: 50px;
}

.netImg2 {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #8ea4be;
  text-align: center;
  line-height: 50px;
}

.netImg3 {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #c0c0c0;
  text-align: center;
  line-height: 50px;
}

.imgWord {
  color: #dedede;
  font-size: 13px;
}

.seeBox {
  width: 35px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.imgBoxCon {
  width: 90%;
  height: 90px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.imgBoxBotW {
  width: 90%;
  height: 30px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.imgBoxBot {
  width: 100%;
  height: 30px;

  border-top: dashed 1px #dedede;
}

.tubiaobox {
  width: 90%;
  height: 750px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 20px;
  align-items: center;
}

.tub1 {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 370px;
  justify-content: space-between;
  align-items: center;
}

.tubBox {
  width: 30%;
  height: 94%;
  border-radius: 10px;
  overflow: hidden;
  border: solid 1px #1e69fe;
  box-shadow: 0 0 10px 5px #e8e9ea;
}

.tub {
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-left: -90px;
  align-items: center;
}

.imgBoxTop {
  width: 95%;
  margin: 0 auto;
  height: 30px;
  display: flex;
  flex-direction: column;
  text-align: right;
  align-items: flex-end;
  justify-content: flex-end;
}

.imgBoxB {
  width: 450px;
  height: 160px;
  background: linear-gradient(to right, #479ae8, #3a6cd6);
  border-radius: 20px;
  box-shadow: 1px 1px 10px 2px #cccccc;
  margin: 20px 30px;
}

.imgBoxR {
  width: 450px;
  height: 160px;
  background: linear-gradient(to right, #e06e6e, #e44a4a);
  border-radius: 20px;
  box-shadow: 1px 1px 10px 2px #cccccc;
  margin: 20px 30px;
}

.imgBoxG {
  width: 450px;
  height: 160px;
  background: linear-gradient(to right, #6781a2, #567193);
  border-radius: 20px;
  box-shadow: 1px 1px 10px 2px #cccccc;
  margin: 20px 30px;
}

.date {
  width: 350px;
  height: 40px;
  display: flex;
  flex-direction: row;
  border-radius: 10px;
  border: solid 1px #1e69fe;
}

.date span {
  display: block;
  width: 100%;
  height: 100%;
  text-align: center;
  line-height: 40px;
  border-radius: 10px;
  color: #1e69fe;
  font-size: 16px;
}

.date div {
  width: 20%;
  height: 40px;
  text-align: center;
  cursor: pointer;
}

.imgBoxOff {
  width: 450px;
  height: 160px;
  background: linear-gradient(to right, #567193, #567193);
  border-radius: 20px;
  box-shadow: 1px 1px 10px 2px #cccccc;
  margin: 20px 30px;
}

.chooseB {
  background-color: #1e69fe;
  color: white !important;
}

.conB {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 95%;
  margin: 0 auto;
}

.el-table td {
  padding: 0 0;
}

.dateSel >>> .el-input__inner {
  height: 40px;
  border-radius: 5px;
  border: solid 1px #1e69fe;
}

.el-table td div {
  margin: 0 auto;
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

.el-dialog {
  margin-top: 30vh !important;
}

.stateColor-red {
  color: red;
}

.stateColor-green {
  color: #2ec23c;
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
  width: 200px;
  height: 30px;
  border: none;
}

/*  .is-opened>div::nth-child(1) {
	  background-color: white !important;
	} */

.cell {
  text-align: center;
  font-size: 15px;
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
}

.el-table .cell {
  line-height: 44px;
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

/* 顶部按钮 */
.el-button--primary {
  border-radius: 10px;
  height: 37px;
}

.el-button--success {
  border-radius: 10px;
  height: 37px;
}

.el-button--default {
  border-radius: 10px;
  padding: 10px 20px;
}

.addinput {
  border: 1px solid #1e69fe;
  border-radius: 10px;
}

.el-table {
  color: #908e8e;
}

.UserAssets-right-top {
  display: flex;
  flex-direction: row;
  width: 95%;
  margin: 20px auto;
  margin-top: 40px;
}

.el-col-12 {
  width: 100%;
  text-align: center;
}

/* 字体 */
.vive {
  font-size: 20px;
  color: white;
  text-align: center;
  display: flex;
  flex-direction: row;
  margin: 20px 55px;
}

.el-submenu__title {
  font-size: 20px;
  width: 100%;
}

/* 按钮字体 */
.el-button {
  font-size: 16px;
  padding: 10px 20px;
}

.el-menu-item {
  font-size: 16px;
  color: #dbdbdb;
}

.el-button--primary {
  color: #fff;
  background-color: #1e69fe;
  border-color: #1e69fe;
}

.el-button--success {
  color: #1e69fe;
  background-color: #fff;
  border-color: #1e69fe;
}

.user-left {
  width: 50%;
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

.user-right span {
  color: #8a9199;
}

.user-img {
  height: 40px;
  width: 40px;
  overflow: hidden;
  border-radius: 100%;
}

.el-menu-item.is-active {
  border-radius: 400px;
  background-color: white !important;
}

.el-menu-item.is-active:hover {
  background-color: #1e69fe;
}

.UserAssets-right-text {
  width: 1500px;
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
  width: 68%;
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

.set {
  width: 40px;
}

.select1 option {
  text-align: center;
}

.sear-img {
  width: 15px;
  height: 15px;
  margin-left: 20px;
}

/* 第一行数据类型 */
.el-table thead {
  color: black;
}
.block >>> .el-input__inner {
  height: 42px !important;
  border: 1px solid #dcdfe6;
}
.textWord >>> .el-input__inner {
  height: 40px;
  /* width: 14% !important; */
  border-radius: 5px;
  border: solid 1px #1e69fe;
  border: 1px solid #dcdfe6;
  width: 200px !important;
}
</style>