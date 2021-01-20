import myhead from "../../../components/myhead";
import FinancialStatistics from "./financialStatistics.vue";
import MerchantsNumber from "./merchantsNumber.vue";
export default {
  components: {
    myhead,
    FinancialStatistics,
    MerchantsNumber
  },
  data() {
    return {
      flag: 1
    };
  },

  methods: {
    toggle(flag, event) {
      for (let i = 0; i < event.target.parentNode.childNodes.length; i++) {
        if (event.target.parentNode.childNodes[i].style) {
          event.target.parentNode.childNodes[i].removeAttribute("style");
        }
      }
      event.target.setAttribute(
        "style",
        "color:#2d6bf5;" + "border-bottom:2px solid #2d6bf5;"
      );
      this.flag = flag;
      switch (flag) {
        case 1:
          this.$nextTick(() => {
            this.drawEchart2();
          });
          break;
        case 2:
          this.$nextTick(() => {
            this.drawEchart2();
          });
          break;
        default:
          this.$nextTick(() => {
            this.drawEchart2();
          });
      }
    },
    drawEchart2() {
      var data = ["笔数", "金额"];
      var myChart = this.$echarts.init(
        document.getElementById("section2Echart")
      );

      // 指定图表的配置项和数据
      var option = {
        xAxis: {
          type: "category",
          data: [
            "2020-12-10",
            "2020-12-11",
            "2020-12-12",
            "2020-12-13",
            "2020-12-14",
            "2020-12-15",
            "2020-12-16"
          ]
        },
        yAxis: {
          type: "value"
        },
        legend: {
          orient: "horizontal",
          y: "bottom", //延Y轴居中
          x: "center", //居右
          data: data.legendData,
          itemGap: 100, //图例间隔
          textStyle: {
            fontSize: 16
          }
        },
        series: [
          {
            name: "金额",
            data: [3800, 4200, 5900, 3600, 4000, 5100, 5700],
            type: "line",
            smooth: true,
            symbol: "circle",
            symbolSize: 10,

            lineStyle: {
              color: "#4f4cdf",
              width: 2,
              type: "solid"
            },
            itemStyle: {
              color: "#81f15f"
            }
          },
          {
            name: "笔数",
            data: [2900, 3600, 3800, 4900, 4500, 5200, 5600],
            type: "line",
            smooth: true,
            symbol: "circle",
            symbolSize: 10,

            lineStyle: {
              color: "#fcfa88",
              width: 2,
              type: "solid"
            },
            itemStyle: {
              color: "#2c6af5"
            }
          }
        ]
      };

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.drawEchart2();
    });
  }
};
