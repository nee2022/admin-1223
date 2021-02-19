import myhead from "../../../components/myhead";

export default {
  components: {
    myhead
  },
  data() {
    return {};
  },
  mounted() {
    // this.token = localStorage.getItem("token").replace(/\"/g, "");
    // this.getAllInvoiceRecordMes();
    // var map = new AMap.Map("container", {
    //   zoom: 11, //级别
    //   center: [116.397428, 39.90923], //中心点坐标
    //   viewMode: "3D" //使用3D视图
    // });
    // log.success("创建地图成功");

    var map = new AMap.Map("container", {
      resizeEnable: true,
      center: [116.397428, 39.90923], //地图中心点
      zoom: 13 //地图显示的缩放级别
    });
    //构造路线导航类
    // var driving = new AMap.Driving({
    //   map: map,
    //   panel: "panel"
    // });
    // 根据起终点名称规划驾车导航路线
    // driving.search(
    //   [
    //     { keyword: "北京市地震局(公交站)", city: "北京" },
    //     { keyword: "亦庄文化园(地铁站)", city: "北京" }
    //   ],
    //   function(status, result) {
    //     // result 即是对应的驾车导航信息，相关数据结构文档请参考  https://lbs.amap.com/api/javascript-api/reference/route-search#m_DrivingResult
    //     if (status === "complete") {
    //       log.success("绘制驾车路线完成" + result);
    //       console.log(1);
    //       var a = { x: 1 };
    //       console.log(1);
    //       console.dir(a);
    //       console.dir(result);
    //     } else {
    //       log.error("获取驾车数据失败：" + result);
    //       console.dir(result);
    //     }
    //   }
    // );
  },
  methods: {}
};
