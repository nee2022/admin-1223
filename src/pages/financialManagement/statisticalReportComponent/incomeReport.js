import myhead from "../../../components/myhead";
// require styles
import "swiper/swiper-bundle.css";

import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  name: "carrousel",
  components: {
    myhead,
    swiper,
    swiperSlide
  },
  data() {
    return {
      swiperOption: {
        // some swiper options/callbacks
        // 所有的参数同 swiper 官方 api 参数
        // ...
      },
      tableData: [
        {
          date: "2016-05-03",
          name: 800,
          province: 1000,
          city: 6000,
          address: 688,
          zip: 200333
        },
        {
          date: "2016-05-02",
          name: 800,
          province: 1000,
          city: 6000,
          address: 688,
          zip: 200333
        },
        {
          date: "2016-05-04",
          name: 800,
          province: 1000,
          city: 6000,
          address: 688,
          zip: 200333
        },
        {
          date: "2016-05-01",
          name: 800,
          province: 1000,
          city: 6000,
          address: 688,
          zip: 200333
        },
        {
          date: "2016-05-08",
          name: 800,
          province: 1000,
          city: 6000,
          address: 688,
          zip: 200333
        },
        {
          date: "2016-05-06",
          name: 800,
          province: 1000,
          city: 6000,
          address: 688,
          zip: 200333
        },
        {
          date: "2016-05-07",
          name: 800,
          province: 1000,
          city: 6000,
          address: 688,
          zip: 200333
        },
        {
          date: "2016-05-07",
          name: 200,
          province: 3500,
          city: 4200,
          address: 500,
          zip: 6000
        },
        {
          date: "2016-05-07",
          name: 800,
          province: 1000,
          city: 6000,
          address: 688,
          zip: 200333
        },
        {
          date: "2016-05-07",
          name: 800,
          province: 1000,
          city: 6000,
          address: 688,
          zip: 200333
        }
      ],
      option: "",
      total: 1,
      isActive: true,
      dialogVisible: false,
      selected: "所有",
      pagenum: 1,
      token: "",
      pagesize: 6,
      chart: false
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  mounted() {
    // current swiper instance
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    console.log("this is current swiper instance object", this.swiper);
    // this.swiper.slideTo(3, 1000, false);
    this.token = localStorage.getItem("token").replace(/\"/g, "");
    var mySwiper = new Swiper(".swiper-container", {
      direction: "vertical", // 垂直切换选项
      loop: true, // 循环模式选项

      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination"
      },

      // 如果需要前进后退按钮
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },

      // 如果需要滚动条
      scrollbar: {
        el: ".swiper-scrollbar"
      }
    });
  },
  methods: {
    m1: function() {
      this.swiper.slideTo(0, 100, false);
    },
    m2: function() {
      this.swiper.slideTo(1, 100, false);
    },
    toggleListTable() {
      this.chart = false;
    },
    toggleChartTable() {
      this.chart = true;

      this.$nextTick(() => {
        this.drawIncomeReportEchart1();
        this.drawIncomeReportEchart2();
        this.drawIncomeReportEchart3();
        this.drawIncomeReportEchart4();
        this.drawIncomeReportEchart5();
        this.drawIncomeReportEchart6();
        this.drawIncomeReportEchart7();
      });
    },
    drawIncomeReportEchart1() {
      var data = ["分成"];
      var myChart = this.$echarts.init(
        document.getElementById("incomeReportEchart1")
      );

      // 指定图表的配置项和数据
      var option = {
        width: "86%",
        height: "64%",
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
          }
        ]
      };

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    },
    drawIncomeReportEchart2() {
      var data = ["分成"];
      var myChart = this.$echarts.init(
        document.getElementById("incomeReportEchart2")
      );

      // 指定图表的配置项和数据
      var option = {
        width: "86%",
        height: "64%",
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
          }
        ]
      };

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    },
    drawIncomeReportEchart3() {
      var data = ["分成"];
      var myChart = this.$echarts.init(
        document.getElementById("incomeReportEchart3")
      );

      // 指定图表的配置项和数据
      var option = {
        width: "86%",
        height: "64%",
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
          }
        ]
      };

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    },
    drawIncomeReportEchart4() {
      var data = ["分成"];
      var myChart = this.$echarts.init(
        document.getElementById("incomeReportEchart4")
      );

      // 指定图表的配置项和数据
      var option = {
        width: "86%",
        height: "64%",
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
          }
        ]
      };

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    },
    drawIncomeReportEchart5() {
      var data = ["分成"];
      var myChart = this.$echarts.init(
        document.getElementById("incomeReportEchart5")
      );

      // 指定图表的配置项和数据
      var option = {
        width: "86%",
        height: "64%",
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
          }
        ]
      };

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    },
    drawIncomeReportEchart6() {
      var data = ["分成"];
      var myChart = this.$echarts.init(
        document.getElementById("incomeReportEchart6")
      );

      // 指定图表的配置项和数据
      var option = {
        width: "86%",
        height: "64%",
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
          }
        ]
      };

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    },
    drawIncomeReportEchart7() {
      var data = ["优惠金额"];
      var myChart = this.$echarts.init(
        document.getElementById("incomeReportEchart7")
      );

      // 指定图表的配置项和数据
      var option = {
        width: "86%",
        height: "64%",
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
          }
        ]
      };

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    },

    handleCurrentChange(newPage) {
      this.pagenum = newPage;
    }
  }
};
