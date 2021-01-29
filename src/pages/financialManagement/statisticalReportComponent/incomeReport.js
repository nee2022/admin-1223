import myhead from "../../../components/myhead";

export default {
  components: {
    myhead
  },
  data() {
    return {
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

  mounted() {
    this.token = localStorage.getItem("token").replace(/\"/g, "");
  },
  methods: {
    toggleListTable() {
      this.chart = false;
    },
    toggleChartTable() {
      this.chart = true;

      this.$nextTick(() => {
        this.drawIncomeReportEchart1();
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

    handleCurrentChange(newPage) {
      this.pagenum = newPage;
    }
  }
};
