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
            this.drawMerchantsNumberEchart1();
            this.drawMerchantsNumberEchart2();
          });
          break;
        case 2:
          this.$nextTick(() => {
            this.drawFinancialStatisticsEchart1();
          });
          break;
        default:
          this.$nextTick(() => {
            this.drawMerchantsNumberEchart1();
            this.drawMerchantsNumberEchart2();
          });
      }
    },
    drawMerchantsNumberEchart1() {
      var myChart = this.$echarts.init(
        document.getElementById("merchantsNumberEchart1")
      );
      var option = {
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          icon: "circle",
          itemGap: 50,
          right: 10,
          top: "middle",
          data: ["分润账号", "笔笔清", "自营"]
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: ["50%", "70%"],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: "center"
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "30",
                fontWeight: "bold"
              }
            },
            labelLine: {
              show: false
            },
            data: [
              { value: 2880, name: "分润账号" },
              { value: 5800, name: "笔笔清" },
              { value: 7220, name: "自营" }
            ]
          }
        ],
        color: ["#f1a13a", "#99ec9b", "#78bcf0", "#fbf673", "#eb3624"]
      };
      myChart.setOption(option);
    },
    drawMerchantsNumberEchart2() {
      var data = ["商户总数", "分润账号", "笔笔清", "自营"];
      var myChart = this.$echarts.init(
        document.getElementById("merchantsNumberEchart2")
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
            name: "商户总数",
            data: [3800, 4200, 5900, 3600, 4000, 5100, 5700],
            type: "line",
            smooth: true,
            symbol: "circle",
            symbolSize: 10,

            lineStyle: {
              color: "green",
              width: 2,
              type: "solid"
            },
            itemStyle: {
              color: "green"
            }
          },
          {
            name: "分润账号",
            data: [1000, 3000, 5500, 4900, 4600, 5000, 3800],
            type: "line",
            smooth: true,
            symbol: "circle",
            symbolSize: 10,

            lineStyle: {
              color: "yellow",
              width: 2,
              type: "solid"
            },
            itemStyle: {
              color: "yellow"
            }
          },
          {
            name: "笔笔清",
            data: [2300, 3000, 3200, 4300, 4000, 5500, 6000],
            type: "line",
            smooth: true,
            symbol: "circle",
            symbolSize: 10,

            lineStyle: {
              color: "red",
              width: 2,
              type: "solid"
            },
            itemStyle: {
              color: "red"
            }
          },
          {
            name: "自营",
            data: [2900, 2200, 3000, 3800, 3500, 4000, 5200],
            type: "line",
            smooth: true,
            symbol: "circle",
            symbolSize: 10,

            lineStyle: {
              color: "blue",
              width: 2,
              type: "solid"
            },
            itemStyle: {
              color: "blue"
            }
          }
        ]
      };

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    },
    drawFinancialStatisticsEchart1() {
      var data = ["笔数", "金额"];
      var myChart = this.$echarts.init(
        document.getElementById("financialStatisticsEchart1")
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
              color: "red",
              width: 2,
              type: "solid"
            },
            itemStyle: {
              color: "red"
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
              color: "green",
              width: 2,
              type: "solid"
            },
            itemStyle: {
              color: "green"
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
      this.drawMerchantsNumberEchart1();
      this.drawMerchantsNumberEchart2();
    });
  }
};
