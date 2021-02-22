import axios from "axios";
import myhead from "../../../components/myhead";

export default {
  components: {
    myhead
  },
  data() {
    return {
      chargers: []
    };
  },
  mounted() {
    this.$axios.get(`/map/gd/chargers/8,9`).then(res => {
      this.chargers = res.data.chargers;

      var map = new AMap.Map("container", {
        zoom: 4,
        center: [0, 0]
      });
      var style = [];

      style[8] = {
        url: require("../../../assets/images/ACS.png"),
        anchor: new AMap.Pixel(6, 6),
        size: new AMap.Size(50, 50)
      };
      style[9] = {
        url: require("../../../assets/images/DCicon.png"),
        anchor: new AMap.Pixel(6, 6),
        size: new AMap.Size(50, 50)
      };
      // console.log(style);
      // console.log(this.chargers);
      var mass = new AMap.MassMarks(this.chargers, {
        opacity: 0.8,
        zIndex: 111,
        cursor: "pointer",
        style: style
      });

      var marker = new AMap.Marker({ content: " ", map: map });

      mass.on("mouseover", function(e) {
        marker.setPosition(e.data.lnglat);
        marker.setLabel({ content: e.data.name });
      });

      mass.setMap(map);
    });
  }
};
