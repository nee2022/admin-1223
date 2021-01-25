import myhead from "../../../components/myhead";
import IncomeStatistics from "./incomeStatistics.vue";
import InvoicingStatistics from "./invoicingStatistics.vue";
import SettlementStatistics from "./settlementStatistics.vue";
export default {
  components: {
    myhead,
    IncomeStatistics,
    InvoicingStatistics,
    SettlementStatistics
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
            this.drawIncomeStatisticsEchart1();
            this.drawIncomeStatisticsEchart2();
            this.drawIncomeStatisticsEchart3();
          });
          break;
        case 2:
          this.$nextTick(() => {
            this.drawInvoicingStatisticsEchart1();
          });
        case 3:
          this.$nextTick(() => {
            this.drawSettlementStatisticsEchart1();
          });
          break;
        default:
          this.$nextTick(() => {
            alert("返回首页");
          });
      }
    },
    drawIncomeStatisticsEchart1() {
      var myChart = this.$echarts.init(
        document.getElementById("incomeStatisticsEchart1")
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
          right: 120,
          top: "middle",
          data: ["钱包充值", "一卡通充值", "套餐充值"]
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
              { value: 2880, name: "钱包充值" },
              { value: 5800, name: "一卡通充值" },
              { value: 7220, name: "套餐充值" }
            ]
          }
        ],
        color: ["#fbf673", "#eb3624", "#f1a13a", "#99ec9b", "#78bcf0"]
      };
      myChart.setOption(option);
    },
    drawIncomeStatisticsEchart2() {
      var myChart = this.$echarts.init(
        document.getElementById("incomeStatisticsEchart2")
      );
      var option = {
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          icon: "circle",
          itemGap: 15,
          right: 120,
          top: "middle",
          data: ["汽车充电", "电单车充电", "路边停车", "停车场", "充电宝"]
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
              { value: 2880, name: "汽车充电" },
              { value: 5800, name: "电单车充电" },
              { value: 7220, name: "路边停车" },
              { value: 2880, name: "停车场" },
              { value: 5800, name: "充电宝" }
            ]
          }
        ],
        color: ["#f1a13a", "#99ec9b", "#78bcf0", "#fbf673", "#eb3624"]
      };
      myChart.setOption(option);
    },
    drawIncomeStatisticsEchart3() {
      var data = ["收入", "充值", "消费"];
      var myChart = this.$echarts.init(
        document.getElementById("incomeStatisticsEchart3")
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
            name: "收入",
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
            name: "充值",
            data: [1000, 3000, 5500, 4900, 4600, 5000, 3800],
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
          },
          {
            name: "消费",
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
          }
        ]
      };

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    },
    drawInvoicingStatisticsEchart1() {
      var data = ["总量", "出票"];
      var myChart = this.$echarts.init(
        document.getElementById("invoicingStatisticsEchart1")
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
            name: "总量",
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
            name: "出票",
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
    },
    drawSettlementStatisticsEchart1() {
      var data = ["分成", "笔笔清", "提现"];
      var myChart = this.$echarts.init(
        document.getElementById("settlementStatisticsEchart1")
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
            name: "分成",
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
            name: "笔笔清",
            data: [1000, 3000, 5500, 4900, 4600, 5000, 3800],
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
          },
          {
            name: "提现",
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
          }
        ]
      };

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.drawIncomeStatisticsEchart1();
      this.drawIncomeStatisticsEchart2();
      this.drawIncomeStatisticsEchart3();
    });
  }
};
