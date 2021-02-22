import myhead from "../../../components/myhead";
// require styles

export default {
  name: "carrousel",
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
  computed: {},
  mounted() {
    // current swiper instance
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    console.log("this is current swiper instance object", this.swiper);
    // this.swiper.slideTo(3, 1000, false);
    this.token = localStorage.getItem("token").replace(/\"/g, "");
  },
  methods: {},
  handleCurrentChange(newPage) {
    this.pagenum = newPage;
  }
};
