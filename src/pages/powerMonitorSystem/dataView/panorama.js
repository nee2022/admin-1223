import axios from "axios";
import myhead from "../../../components/myhead";

export default {
  components: {
    myhead
  },
  data() {
    return {
      data: [],
      map: {}
    };
  },
  mounted() {
    this.getMassMarksData();
    this.generateMap();
    this.addMassMarks();
  },
  methods: {
    getMassMarksData() {
      this.$axios.get(`/map/gd/chargers/5`).then(res => {
        this.data = res.data.chargers;
      });
    },
    generateMap() {
      this.map = new AMap.Map("container", {
        resizeEnable: true,
        center: [116.397428, 39.90923], //地图中心点
        zoom: 13 //地图显示的缩放级别
      });
    },
    addMassMarks() {
      // 创建样式对象
      var styleObject = {
        url: require("../../../assets/images/DCicon.png"),
        size: new AMap.Size(11, 11), // 图标大小
        anchor: new AMap.Pixel(5, 5) // 图标显示位置偏移量，基准点为图标左上角
      };

      var massMarks = new AMap.MassMarks({
        zIndex: 5, // 海量点图层叠加的顺序
        zooms: [3, 19], // 在指定地图缩放级别范围内展示海量点图层
        style: styleObject // 设置样式对象
      });
      var data = [
        {
          lnglat: [116.405285, 39.904989], // 点标记位置
          name: "beijing",
          id: 1
        },
        {
          lnglat: [226.405285, 139.904989], // 点标记位置
          name: "beijing",
          id: 2
        }
      ];

      massMarks.setData(data);

      // 将海量点添加至地图实例
      massMarks.setMap(this.map);
    }
  }
};
