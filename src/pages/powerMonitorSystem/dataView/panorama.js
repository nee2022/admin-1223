import myhead from "../../../components/myhead";

export default {
  components: {
    myhead
  },
  data() {
    return {
      maplist: []
    };
  },
  mounted() {
    // this.token = localStorage.getItem("token").replace(/\"/g, "");
    // this.getAllInvoiceRecordMes();

    var map = new AMap.Map("container", {
      resizeEnable: true,
      center: [116.397428, 39.90923], //地图中心点
      zoom: 13 //地图显示的缩放级别
    });
  },
  methods: {}
};
