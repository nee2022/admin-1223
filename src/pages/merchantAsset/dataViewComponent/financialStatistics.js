import myhead from "../../../components/myhead";
export default {
  components: {
    myhead
  },
  mounted() {
    this.$nextTick(() => {
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
    });
  }
};
