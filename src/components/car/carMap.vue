<template>
	<div class="tem-right" id="container">
		<div class="tem-right-top">
			<div class="top-left">
				<div class="top-left-word">充电站全景图</div>
			</div>

			<div>
				<myhead></myhead>
			</div>
		</div>
		<div class="right-con">
			<el-input class="in" prefix-icon="el-icon-search" v-model="input" placeholder="请输入内容"></el-input>
		</div>
		<!-- <div class="danxuan" >
      <div>
        <el-radio v-model="radio1" label="1" border>全部</el-radio>
      </div>
      <div>
        <el-radio @click.native="zhi" v-model="radio1" label="2" border>直流装</el-radio>
      </div>
      <div>
        <el-radio v-model="radio1" label="3" border>交流桩</el-radio>
      </div>
    </div> -->
		<div class="quans" v-show="flag"></div>
		<div class="qq" v-show="flag">
			<div class="spans">
				<span @click="dian(item.id)" v-for="(item, i) in msg" :key="i" :class="{ blueWord: select == item.id }">{{ item.name }}</span>
				<img src="../../assets/images/electricity.png" alt="" />
				<img src="../../assets/images/signal.png" alt="" />
				<img src="../../assets/images/delete22.png" alt="" />
				<img @click="close" class="shangtu" src="../../assets/images/chacha.png" alt="" />
			</div>
			<div class="zong" v-show="select == 1">
				<div class="zong_left">
					<div class="input">
						<span>名称</span>
						<el-input placeholder="无" v-model="input1" :disabled="true">
						</el-input>
					</div>
					<div class="input">
						<span>类型</span>
						<el-input placeholder="无" v-model="input2" :disabled="true">
						</el-input>
					</div>
					<div class="input">
						<span>机号</span>
						<el-input placeholder="无" v-model="input3" :disabled="true">
						</el-input>
					</div>
					<div class="input">
						<span>端口数</span>
						<el-input placeholder="无" v-model="input4" :disabled="true">
						</el-input>
					</div>
					<div class="input">
						<span>站点</span>
						<el-input placeholder="无" v-model="input5" :disabled="true">
						</el-input>
					</div>
					<div class="input">
						<span>地址</span>
						<el-input placeholder="无" v-model="input6" :disabled="true">
						</el-input>
					</div>
				</div>
				<div class="zong_right">
					<div class="but">
						<el-button v-if="shebeiMsg.online == true">设备在线</el-button>
						<el-button v-else>设备离线</el-button>
						<el-button type="primary" style="background: #2971ff">重启设备</el-button>
					</div>
					<div>
						<div class="jw">
							经纬度（
							<span> {{ lng }}</span>
							<span> {{ lat }}</span>）
							<img src="../../assets/images/compileg.png" alt="" />
						</div>
					</div>
					<div id="containes"></div>
				</div>
			</div>
			<div class="zong" v-show="select == 2">
				<div class="chong_left test test-1">
					<div class="scrollbar">
						<el-scrollbar style="height: 100%">
							<div @click="change(item.id)" v-for="(item, id) in leftList" :key="id" class="quan" :class="{ back: selectss == item.id }">
								<span>{{ item.id }}</span><span class="wen">{{ item.name }}</span><img src="../../assets/images/smallIntng.png"
								 alt="" />
							</div>
						</el-scrollbar>
					</div>
				</div>
				<div class="zhuang" v-show="selectss == 3">
					<div class="chong_zhong">
						<div class="dian">
							<div class="dian_d">
								<div>
									<img src="../../assets/images/Inthecharging.png" alt="" />
								</div>
								<div class="wenzi">
									<span>充电中...</span>
									<div class="yuan">
										<span style="color: red">￥100</span> <span>100KW/H</span>
									</div>
									<div class="jiner">
										<span>所属金额</span><span>已充电量</span>
									</div>
								</div>
							</div>
							<div class="yaa">
								<div class="ya">
									<div>380V</div>
									<div>电压</div>
								</div>
								<div class="ya">
									<div>32A</div>
									<div>电流</div>
								</div>
								<div class="ya">
									<div>380V</div>
									<div>功率</div>
								</div>
							</div>
							<div class="buttt">
								<el-button icon="el-icon-error" class="buts" type="primary">停止充电</el-button>
							</div>
						</div>
					</div>
					<div class="chong_right">
						<div class="dingdan">
							<div class="ding">订单号：<span>3423454</span></div>
							<div class="xia">
								<div class="xia_i">
									<div>开始时间：</div>
									<span>2020-11-11<span style="margin-left: 12px">13：42</span>
									</span>
								</div>
								<div class="xia_i">
									<div>支付账号：</div>
									<span>43085093404</span>
								</div>
								<div class="xia_i">
									<div>卡号</div>
									<span>230948230</span>
								</div>
								<div class="xia_i">
									<div>充电方式</div>
									<span>自动充满</span>
								</div>
								<div class="xia_i">
									<div>充电金额</div>
									<span style="color: red">￥100.00</span>
								</div>
							</div>
							<img class="imgss" src="../../assets/images/picture.png" alt="" />
						</div>
					</div>
				</div>
				<div class="zhuang zhu" v-show="selectss == 1">
					<div class="cuowu">
						<img src="../../assets/images/Thefault.png" alt="" />
						<div>设备故障，请及时处理！</div>
						<div>错误代码：678</div>
					</div>
				</div>
				<div class="zhuang zhu" v-show="selectss == 2">
					<div class="cuowu2">
						<img src="../../assets/images/free.png" alt="" />
						<div>设备空闲中...</div>
						<div class="bu2">
							<div class="bu">
								<img src="../../assets/images/Startcharging.png" alt="" />
								<span>启动充电</span>
							</div>
						</div>
					</div>
				</div>
				<div class="zhuang zhu" v-show="selectss == 4">
					<div class="cuowu2">
						<img src="../../assets/images/completed.png" alt="" />
						<div>充电已完成，请及时移除...</div>
						<div class="bu2">
							<div class="bu">
								<img src="../../assets/images/Startcharging.png" alt="" />
								<span>启动充电</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="zong las" v-show="select == 3">
				<div class="lazha">
					<span> 拉闸</span>
					<span style="color: red">（再次点击开关实现合闸）</span>
					<el-switch v-model="value" active-color="#1E69FE"> </el-switch>
				</div>
				<div class="zhuangt">
					<div class="zhuangt_left">
						<div class="wai">
							<div class="li">
								<div class="li_l">
									<span>实时电量</span>
									<div>
										<span style="font-size: 45px; color: #54a75c; font-weight: 400">12,345</span>
										<span>KWH</span>
									</div>
								</div>
								<div class="fen">
									<div>
										<span>温度</span><span class="yan">123</span><span>°C</span>
									</div>
									<div>
										<span>零线电流</span><span class="yan">1</span><span>A</span>
									</div>
								</div>
							</div>
							<div class="yus">
								<span class="yu"></span>
								<span class="yu"></span>
								<span class="yu"></span>
							</div>
						</div>
					</div>
					<div class="zhuangt_fight">
						<div class="list">
							<div class="list_span">
								<span>电相</span><span>电压/V</span><span>电流/A</span><span>功率/W</span><span>电量/kwh</span>
							</div>
							<div class="list_span">
								<span>A相</span><span>1</span><span>2</span><span>9405</span><span>930485</span>
							</div>
							<div class="list_span">
								<span>B相</span><span>120</span><span>33</span><span>023810</span><span>2930284</span>
							</div>
							<div class="list_span">
								<span>C相</span><span>02483</span><span>4594</span><span>98343</span><span>98308</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="zong lass" v-show="select == 7">
				<div>85105</div>
				<div>
					<img src="../../assets/images/heiding.png" alt="" />
					<span>{{stadion}}</span>
				</div>
				<div class="fe">
					<div></div>
					<div class="fe_ee">
						<span class="yuan_2"></span>
						<span>85105</span>
					</div>
					<div></div>
				</div>
				<div class="jian">
					<img src="../../assets/images/arrow.png" alt="" />
				</div>
				<div class="foot">取证中...</div>
			</div>
			<div class="zong lasa" v-show="select == 4">
				<div class="lasa_left">
					<img src="../../assets/images/tomgce.png" alt="" />
				</div>
				<div class="lasa_right">
					<div class="lasa_right_top">
						<span>85105</span>
						<div>结费</div>
					</div>
					<div class="lasa_right_zhong">
						<div class="zhong_wai">
							<div class="zhong_li">
								<div class="zhong_ll">A·F026</div>
							</div>
						</div>
						<div class="zhong_i">
							<div class="zhong_i_left">
								<div class="ddd">2:48:35</div>
								<div class="sss">2020-11-11 14:25</div>
							</div>
							<div class="zhong_i_right">
								<div class="dds">
									<div class="ddd">￥40</div>
									<img src="../../assets/images/imggg.png" alt="" />
								</div>
								<div class="sss">应收金额</div>
							</div>
						</div>
					</div>
					<div class="lasa_right_bottum" id="ies"></div>
					<div class="foot_map">
						<img src="../../assets/images/heiding.png" alt="" />
						<div>浙江省杭州市江干区金沙湖大道与银沙路交汇处</div>
					</div>
				</div>
			</div>
			<div class="zong lass" v-show="select == 5">
				<div>85105</div>
				<div>
					<img src="../../assets/images/heiding.png" alt="" />
					<span>杭州市江干区金沙湖大道与银沙路交汇处</span>
				</div>
				<div class="jian">
					<img class="carzhuang" src="../../assets/images/zhuangcar.png" alt="" />
				</div>
				<div class="fe">
					<div></div>
					<div class="fe_ee">
						<img class="tucar" src="../../assets/images/dicar.png" alt="" />
						<span class="yuan_2"></span>
						<span>85105</span>
					</div>
					<div></div>
				</div>
				<div class="jian">
					<img src="../../assets/images/arrow.png" alt="" />
				</div>
				<div class="foot">取证中...</div>
			</div>
			<div class="zong lasa" v-show="select == 6">
				<div class="lasa_left">
					<img src="../../assets/images/tomgce.png" alt="" />
				</div>
				<div class="lasa_right">
					<div class="">
						<div style="font-size: 24px; color: #76746f; text-align: center">
							车辆驶出中...
						</div>
						<div class="you">
							<span>A2出口</span>
							<div class="tai">抬杆</div>
						</div>
					</div>
					<div class="lasa_right_zhong">
						<div class="zhong_wai">
							<div class="zhong_li">
								<div class="zhong_ll">A·F026</div>
							</div>
						</div>
						<div class="zhong_i">
							<div class="zhong_i_left">
								<div class="ddd">2:48:35</div>
								<div class="sss">2020-11-11 14:25</div>
							</div>
							<div class="zhong_i_right">
								<div class="dds">
									<div class="ddd">￥40</div>
									<img src="../../assets/images/imggg.png" alt="" />
								</div>
								<div class="sss">应收金额</div>
							</div>
						</div>
					</div>
					<div class="lasa_right_bottum" id="iess"></div>
					<div class="foot_map">
						<img src="../../assets/images/heiding.png" alt="" />
						<div>浙江省杭州市江干区金沙湖大道与银沙路交汇处</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import myhead from "../../components/myhead";
	import axios from "axios";
	export default {
		components: {
			myhead,
		},
		data() {
			return {
				map: "",
				radio1: "1",
				value: false,
				leftList: [{
						id: 1,
						name: "故障",
					},
					{
						id: 2,
						name: "空闲",
					},
					{
						id: 3,
						name: "充电中",
					},
					{
						id: 4,
						name: "充电已完成",
					},
					{
						id: 5,
						name: "充电中",
					},
					{
						id: 7,
						name: "充电中",
					},
					{
						id: 8,
						name: "充电中",
					},
					{
						id: 9,
						name: "充电中",
					},
					{
						id: 10,
						name: "充电中",
					},
				],
				msg: [{
						id: 1,
						name: "基本信息",
					},
					{
						id: 2,
						name: "充电状态",
					},
					{
						id: 3,
						name: "电表状态",
					},
					{
						id: 7,
						name: "地磁",
					},
					{
						id: 4,
						name: "低视频桩",
					},
					{
						id: 5,
						name: "高视频桩",
					},
					{
						id: 6,
						name: "停车场",
					},
				],
				input: "",
				maplist: [],
				flag: false,
				input1: "",
				input2: "",
				input3: "",
				input4: "",
				input5: "",
				input6: "",
				select: 1,
				selectss: 1,
				token: JSON.parse(localStorage.getItem("token")),
				shebeiMsg: [],
				eMsg: [],
				lng: 1,
				lat: 1,
				stadion: '',
			};
		},
		created() {},
		methods: {
			zhi() {
				this.$axios.get(`/map/gd/chargers/1,2`).then((res) => {
					this.maplist = res.data.chargers;
				});
			},
			close() {
				this.flag = false;
			},
			change(id) {
				this.selectss = id;
			},
			dian(id) {
				this.select = id;
				console.log(this.select);
				if (this.select == 4) {
					var map = new AMap.Map("ies", {
						zoom: 14,
						center: [120.29119, 30.43048],
						resizeEnable: true,
					});
				} else if (this.select == 6) {
					var map = new AMap.Map("iess", {
						zoom: 14,
						center: [120.29119, 30.43048],
						resizeEnable: true,
					});
				}
			},
			gaode() {
				this.$axios.get(`/map/gd/chargers/1,2`).then((res) => {
					this.maplist = res.data.chargers;
					console.log(this.maplist);
					//图片样式
					var style = [{
							url: require("../../assets/images/ACS.png"),
							anchor: new AMap.Pixel(4, 4),
							size: new AMap.Size(30, 37),
						},
						{
							url: require("../../assets/images/DCicon.png"),
							anchor: new AMap.Pixel(6, 6),
							size: new AMap.Size(30, 37),
						},
					];
					//创建mark
					var mass = new AMap.MassMarks(this.maplist, {
						opacity: 0.8,
						zIndex: 111,
						cursor: "pointer",
						style: style,
					});
					let _this = this;

					var marker = new AMap.Marker({
						content: " ",
						map: _this.map
					});
					mass.on("mouseover", function(e) {
						marker.setPosition(e.data.lnglat);
						marker.setLabel({
							content: e.data.name
						});
					});
					//点击mark弹窗
					mass.on("click", function(e) {
						_this.eMsg = e.data;
						_this.lng = _this.eMsg.lnglat.lng;
						_this.lat = _this.eMsg.lnglat.lat;
						_this.flag = !_this.flag;

						AMap.plugin("AMap.Geocoder", function() {
							var geocoder = new AMap.Geocoder({
								// city 指定进行编码查询的城市，支持传入城市名、adcode 和 citycode
								city: "010",
							});

							var lnglat = [_this.lng, _this.lat];

							geocoder.getAddress(lnglat, function(status, result) {
								if (status === "complete" && result.info === "OK") {
									_this.stadion = result.regeocode.formattedAddress
								}
							});
						});
						var map = new AMap.Map("containes", {
							zoom: 14,
							center: [_this.lng, _this.lat],
							resizeEnable: true,
						});
						var marker = new AMap.Marker({
							position: new AMap.LngLat(_this.lng, _this.lat),
							icon: require("../../assets/images/hongding.png"),
						});
						map.add(marker);

						console.log(e);

						console.log(_this.eMsg.lnglat.lng);
						axios
							.get(`/admin/api/charger/${e.data.id}?token=${_this.token}`)
							.then((res) => {
								_this.shebeiMsg = res.data.charger;
								console.log(_this.shebeiMsg);
								if (_this.shebeiMsg.type === 1) {
									console.log(1);
									_this.input2 = "直流桩";
								} else {
									_this.input2 = "交流桩";
									console.log(2);
								}
								_this.input1 = _this.shebeiMsg.name;
								_this.input3 = _this.shebeiMsg.mac;
								_this.input4 = _this.shebeiMsg.port;
								_this.input5 = _this.shebeiMsg.station;
								_this.input6 = _this.shebeiMsg.address;
							});
					});

					mass.setMap(_this.map);
					//判断
					function setStyle(multiIcon) {
						console.log(this.maplist);
						if (this.maplist.style == 1) {
							mass.setStyle(style);
						} else {
							mass.setStyle(style[2]);
						}
					}
				});
			},
		},

		mounted() {
			this.map = new AMap.Map("container", {
				zoom: 4,
				center: [102.342785, 35.312316],
				resizeEnable: true,
			});
			this.gaode();
		},
	};
</script>

<style scoped="scoped">
	.quans {
		width: 100%;
		height: 100%;
		background: black;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 199;

		opacity: 0.7;
	}

	.el-radio.is-bordered {
		width: 110px;
		text-align: center;
		line-height: 40px;
		color: white;
	}

	.danxuan {
		width: 199px;
		height: 166px;
		background: #697787;
		opacity: 0.8;
		border-radius: 4px;
		position: absolute;
		top: 150px;
		right: 30px;
		z-index: 999;
		display: flex;
		align-items: center;
		justify-content: center;
		/* flex: initial; */
		flex-direction: column;
	}

	.shangtu {
		cursor: pointer;
		width: 31px;
		height: 36px;
	}

	.carzhuang {
		position: relative;
		top: -78px;
		left: -440px;
		width: 169px;
		height: 169px;
	}

	.tucar {
		position: relative;
		top: -14%;
	}

	.tai {
		width: 112px;
		height: 37px;
		border: 1px solid #1e69fe;
		border-radius: 10px;
		text-align: center;
		line-height: 37px;
		cursor: pointer;
		margin-right: -76px;
		color: #1e69fe;
		font-size: 20px;
		font-weight: 500;
	}

	.you {
		justify-content: space-around;
		margin-left: 180px;
		display: flex;
		align-items: center;

		font-size: 27px;
		font-family: PingFang SC;
		font-weight: 400;
		color: #000000;
	}

	.foot_map img {
		width: 13px;
		height: 19px;
	}

	.foot_map div {
		font-size: 20px;
		font-family: PingFang SC;
		font-weight: 400;
		color: #656565;
	}

	.foot_map {
		align-items: center;
		display: flex;
	}

	#iess {
		width: 100%;
		height: 29%;
		margin-top: 10px;
		border-radius: 10px;
	}

	#ies {
		width: 100%;
		height: 29%;
		margin-top: 10px;
		border-radius: 10px;
	}

	.dds img {
		width: 19px;
		height: 18px;
		margin-left: 4px;
	}

	.dds {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.ddd {
		font-size: 24px;
		font-weight: 400;
		color: #000000;
	}

	.sss {
		font-size: 20px;
		font-weight: 400;
		color: #909090;
	}

	.zhong_i_right {
		flex: 6;
	}

	.zhong_i_left {
		border-right: 1px #f4f4f4 solid;
		flex: 6;
	}

	.zhong_i {
		align-items: center;
		text-align: center;
		display: flex;
		height: 50%;
	}

	.zhong_ll {
		font-size: 33px;
		font-family: PingFang SC;
		font-weight: 400;
		color: #ffffff;
		line-height: 63px;
		width: 198px;
		height: 63px;
		border: 1px white solid;
		background: #0b9066;
		text-align: center;
	}

	.zhong_li {
		width: 200px;
		height: 65px;
		border: 2px #0b9066 solid;
		border-radius: 5px;
	}

	.zhong_wai {
		display: flex;
		justify-content: center;
		align-items: center;
		border-bottom: 1px#dededd solid;
		height: 50%;
		width: 95%;
		margin: 0 auto;
	}

	.lasa_right_zhong {
		width: 100%;
		height: 196px;
		background: #ffffff;
		box-shadow: 0px 1px 10px 0px rgba(9, 9, 9, 0.2);
		border-radius: 10px;
	}

	.lasa_right_top div {
		width: 112px;
		height: 37px;
		border: 1px solid #1e69fe;
		border-radius: 10px;
		text-align: center;
		line-height: 37px;
		cursor: pointer;
		margin-right: -76px;
		color: #1e69fe;
		font-size: 20px;
		font-weight: 500;
	}

	.lasa_right_top {
		height: 15%;
		display: flex;
		justify-content: space-around;
		align-items: center;
		margin-left: 160px;
	}

	.lasa_right_top span {
		font-size: 36px;
		font-weight: 400;
		color: #000000;
		line-height: 100px;
	}

	.lasa_left img {
		margin-left: 20px;
		width: 90%;
		border-radius: 10px;
	}

	.lasa_left {
		flex: 6;
	}

	.lasa_right {
		flex: 9;
	}

	.foot {
		font-size: 24px;
		font-family: PingFang SC;
		font-weight: 400;
		color: #76746f;
		line-height: 77px;
	}

	.jian {
		text-align: center;
		line-height: 55px;
		height: 67px;
		width: 100%;
		background: #b9cada;
		border: 6px white solid;
		box-sizing: border-box;
	}

	.fe_ee span:nth-child(2) {
		font-size: 34px;
		font-family: Adobe Heiti Std;
		font-weight: normal;
		color: #e3ad3b;
		line-height: 143px;
		margin-bottom: -92px;
	}

	.yuan_2 {
		margin-bottom: -30px;
		display: inline-block;
		width: 30px;
		height: 30px;
		background: red;
		border-radius: 50%;
		border: 3px #8e8e8e solid;
	}

	.fe_ee div:nth-child(2) {
		text-align: center;
	}

	.fe_ee {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.fe>div {
		flex-direction: column;
		border-right: 6px white solid;
	}

	.fe {
		display: flex;
		background: #b9cada;
		height: 156px;
		width: 100%;
		box-sizing: border-box;
	}

	.fe div:nth-child(1) {
		border-left: 6px white solid;
		flex: 3;
	}

	.fe div:nth-child(2) {
		flex: 6;
	}

	.fe div:nth-child(3) {
		flex: 3;
	}

	.lass>div:nth-child(1) {
		font-size: 36px;
		font-weight: 400;
		color: #000000;
	}

	.lass>div:nth-child(2) {
		font-size: 20px;
		font-weight: 400;
		color: #656565;
	}

	.lass {
		flex-direction: column !important;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100% !important;
	}

	.list_span {
		display: flex;
	}

	.list_span span {
		line-height: 54px;
		flex: 2;
		display: inline-block;
		width: 115px;
		text-align: center;
		height: 54px;
		border: 1px #d8d8d8 solid;
	}

	.list {
		width: 585px;
		height: 100%;
		background: #f8f8f8;
		box-shadow: 0px 1px 10px 0px rgba(9, 9, 9, 0.2);
		border-radius: 10px;
	}

	.yan {
		font-size: 20px;
		color: #000000;
		line-height: 32px;
	}

	.fen {
		font-size: 16px;
		font-family: PingFang SC;
		font-weight: 400;
		color: #8c8c8c;
		line-height: 32px;
		display: flex;
		justify-content: space-between;
		margin: 0 10px 0 10px;
	}

	.li_l {
		font-size: 16px;
		font-weight: 600;
		color: #000000;
		line-height: 32px;
		height: 70%;
		display: flex;
		justify-content: space-between;
		margin: 0 10px 0 10px;
		align-items: center;
		border-bottom: 1px #f3f3f3 solid;
	}

	.yus {
		width: 100%;
		display: flex;
		justify-content: space-around;
		align-items: center;
		height: 20%;
	}

	.yu {
		display: inline-block;
		width: 17px;
		height: 17px;
		background: #ffffff;
		border: 4px solid #c1c9d3;
		border-radius: 50%;
	}

	.zhuangt_fight {
		margin-left: 40px;
		flex: 8;
	}

	.zhuangt_left {
		flex: 4;
	}

	.zhuangt {
		margin: 80px 0 0 30px;
		flex-direction: row;
		display: flex;
	}

	.li {
		width: 340px;
		height: 156px;
		background: #ffffff;
		border: 1px solid #8c96a5;
		border-radius: 10px;
	}

	.wai {
		align-items: center;
		margin: 78px 0 0px 30;
		display: flex;
		padding-top: 10px;
		width: 378px;
		height: 207px;
		background: #f6f7fa;
		border: 3px solid #8c96a5;
		border-radius: 10px;
		flex-direction: column;
	}

	.las {
		flex-direction: column !important;
	}

	.lazha {
		font-size: 20px;
		font-weight: 400;
		color: #333333;
		line-height: 27px;
		margin-left: 41px;
	}

	.bu2 {
		justify-content: center;
		display: flex;
	}

	.bu {
		background: red;
		width: 112px;
		height: 37px;
		background: #2971ff;
		border-radius: 10px;
		text-align: center;
		line-height: 37px;
		cursor: pointer;
	}

	.cuowu,
	.cuowu2 {
		text-align: center;
	}

	.cuowu2 div:nth-child(2) {
		font-size: 24px;
		font-weight: 400;
		color: #656565;
		line-height: 100px;
	}

	.cuowu div:nth-child(3) {
		font-size: 18px;
		font-weight: 400;
		color: #656565;
	}

	.cuowu div:nth-child(2) {
		font-size: 24px;
		font-weight: 400;
		color: #ff0000;
		line-height: 100px;
	}

	.zhu {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.zhuang {
		margin: 0px -14px 0 10px;
		display: flex;
		width: 80%;
	}

	.el-scrollbar__wrap {
		overflow-x: hidden;
	}

	.back {
		background: #1e69fe !important;
	}

	.wen {
		width: 78px;
		display: inline-block;
	}

	.imgss {
		width: 100%;
	}

	.xial {
		justify-content: space-between;

		display: flex;
	}

	.xia_i {
		justify-content: space-between;
		display: flex;
	}

	.xia {
		font-size: 18px;
		font-weight: 400;
		color: #919191;
		line-height: 27px;
		margin: 34px 30px 28px 26px;
	}

	.ding {
		font-size: 18px;
		font-weight: 600;
		color: #000000;
		line-height: 27px;
		margin: 34px 0 28px 26px;
		padding-bottom: 30px;
		border-bottom: 1px dashed #d2d5d9;
		width: 86%;
	}

	.dingdan {
		widows: 370px;
		height: 360px;
		background: #ffffff;
		border: 1px solid #e4e7eb;
		box-shadow: 0px 1px 10px 0px rgba(9, 9, 9, 0.2);
		border-radius: 4px;
	}

	/* .ding::after {
  content: "";
  width: 13px;
  height: 13px;
  background: white;
  position: absolute;
  right: 5.5%;
  top: 33%;
  z-index: 999;
  border-radius: 50px;
} */
	.buttt {
		margin: 20px auto;
	}

	.buts {
		width: 110px !important;
		background: #2971ff;
	}

	.ya div:nth-of-type(2) {
		font-size: 16px;
		color: #808080;
	}

	.ya div:nth-of-type(1) {
		color: #000000;
		font-size: 20px;
	}

	.ya div {
		width: 100%;
		text-align: center;
	}

	.yaa {
		height: 70px;
		display: flex;
		background: #ffffff;
		box-shadow: 0px 1px 10px 0px rgba(9, 9, 9, 0.2);
		border-radius: 10px;
	}

	.ya {
		flex: 4;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.dian_d {
		display: flex;
	}

	.jiner {
		font-size: 18px;
		font-weight: 400;
		color: #808080;
		display: flex;
		justify-content: space-evenly;
	}

	.yuan {
		font-size: 22px;
		color: #000000;
		line-height: 40px;
		display: flex;
		justify-content: space-evenly;
	}

	.wenzi {
		width: 244px;
		text-align: center;
		line-height: 63px;
	}

	.wenzi>span {
		font-size: 24px;
		color: #000000;
	}

	.chong_right {
		flex: 1;
	}

	.chong_zhong {
		display: flex;
		justify-content: space-around;
		align-items: center;
		flex: 1;
	}

	.dian {
		display: flex;
		flex-direction: column;
	}

	.scrollbar>>>.el-scrollbar__bar.is-vertical>div {
		background: #1e69fe !important;
	}

	.scrollbar {
		margin: 0 auto;
		width: 173px;
	}

	.test-1::-webkit-scrollbar {
		/*滚动条整体样式*/
		width: 10px;
		/*高宽分别对应横竖滚动条的尺寸*/
		height: 1px;
	}

	.test-1::-webkit-scrollbar-thumb {
		/*滚动条里面小方块*/
		border-radius: 10px;
		-webkit-box-shadow: inset 0 0 5px rgba(55, 53, 222, 0.3);
		background: #1e69fe !important;
	}

	.test-1::-webkit-scrollbar-track {
		/*滚动条里面轨道*/
		-webkit-box-shadow: inset 0 0 5px rgba(55, 53, 222, 0.3);
		border-radius: 10px;
		background: #1e69fe !important;
	}

	.chong_left {
		overflow-x: hidden;
		margin-left: 20px;
		padding-top: 10px;
		box-shadow: 0px 0px 14px 5px rgba(0, 0, 0, 0.06);
	}

	.quan img {
		/* margin-left: 11px; */
	}

	.quan {
		margin-bottom: 10px;

		cursor: pointer;
		width: 123px;
		height: 35px;
		background: #d3dee6;
		border-radius: 10px;
		text-align: center;
		line-height: 35px;
		margin-left: 27px;
	}

	.blueWord {
		color: #2971ff !important;
		border-bottom: solid 1px #2971ff;
	}

	#containes {
		width: 100%;
		height: 61%;
		margin-top: 20px;
	}

	.jw {
		width: 100%;
		background: #dde8ff;
		height: 42px;
		border: 1px dashed #2971ff;
		border-radius: 10px;

		font-size: 18px;
		font-family: PingFang SC;
		font-weight: 300;
		color: #000000;
		line-height: 42px;
		text-align: center;
		font-weight: 400;
		margin-top: 20px;
	}

	.but {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	.zong {
		display: flex;
		flex-direction: row;
		margin-bottom: 61px;
		width: 94%;
	}

	.zong_left {
		flex: 1;
	}

	.zong_right {
		flex: 1;
		display: flex;
		flex-direction: column;
	}

	.input span {
		display: inline-block;
		width: 50px;
		text-align: center;
	}

	.input .el-input {
		margin-left: 10px;

		background: #eeeeee;
		border: 1px solid #7f7f7f;
	}

	.input {
		width: 100%;
		margin: 0px 30px 33px 31px;
	}

	.spans img {
		margin-right: 32px;
	}

	.spans span {
		margin-right: 32px;
		color: #ababab;
		cursor: pointer;
	}

	.spans {
		border-bottom: 1px #f0f0f0 solid;
		padding-bottom: 10px;
		display: inline-block;
		font-size: 24px;
		line-height: 32px;
		margin: 20px 0px 32px 31px;
	}

	.qq {
		position: absolute;
		top: 50%;
		left: 50%;
		background: white;
		z-index: 999;
		transform: translate(-50%, -50%);
		width: 1134px;
		height: 540px;
	}

	.in>>>.el-input__icon {
		line-height: 31px !important;
		height: 0% !important;
	}

	.in>>>.el-input__inner {
		border: 1px #1e69fe solid !important;
	}

	.el-input {
		position: relative;
		z-index: 2;
		width: 350px;
	}

	#container {
		width: 100%;
		height: 100%;
	}

	.e {
		width: 10%;
	}

	.jibenInput {
		border-radius: 4px;
		border: 1px solid #dcdfe6;
		height: 40px;
		line-height: 40px;
		outline: 0;
		padding: 0 15px;
		width: 370px;
	}

	.banInput {
		cursor: no-drop;
	}

	.blueBorder input:focus {
		border-style: solid;
		border-color: #1e69fe;
	}

	.left {
		margin: 20px 0 0 150px;
	}

	.kuang {
		width: 400px;
		height: 150px;
		border: 1px #ccc solid;
		resize: none;
		border-radius: 5px;
	}

	.inp>div:nth-child(1) {
		font-size: 20px;
		margin-right: 10px;
		width: 110px;
		text-align: center;
	}

	.inp {
		display: flex;
		margin: 23px 0 0 30px;
		align-items: center;
	}

	.zs {
		text-align: center;
	}

	.zi_1 {
		position: relative;
		top: 30%;
	}

	.zii {
		background: black;
		opacity: 0.8;
		display: block;
		border-radius: 30px;
	}

	.zi {
		height: 100%;
		font-size: 20px;
		font-family: PingFang SC;
		font-weight: 300;
		width: 100%;
		color: #ffffff;
	}

	.tu>div:nth-child(1) {
		display: flex;
		align-items: center;
		text-align: center;
		width: 150px;
		height: 150px;
		margin-right: 74px;
		background: url("../../assets/images/road.png") no-repeat;
		background-size: 100%, 100%;
	}

	.tu>div:nth-child(2) {
		width: 150px;
		height: 150px;
		margin-right: 74px;
		background: url("../../assets/images/img_30.jpg") no-repeat;
		background-size: 100%, 100%;
	}

	.tu {
		margin: 43px 61px 0 30px;
		display: flex;
	}

	.jichu {
		display: flex;
		margin-top: 30px;
		align-items: center;

		font-size: 20px;
	}

	.jichu div {
		border-radius: 50%;
		width: 15px;
		height: 15px;
		margin-right: 18px;
		background: #1e69fe;
	}

	.right-con-right {
		width: 100%;
		height: 100%;
	}

	.aa {
		margin-top: 41px !important;
	}

	.zhandian .el-button {
		padding: 0px !important;
	}

	.el-table td div {
		text-align: left;
	}

	.tem-right {
		/* height: 1217px !important; */
		display: flex;
		flex: 1;
		flex-direction: column;
		background-color: white;
		border-top-left-radius: 50px;
		border-bottom-left-radius: 50px;
	}

	.leftBox-con {
		display: flex;
		flex-direction: column;
		width: 40%;
	}

	.leftBox {
		display: flex;
		flex-direction: row;
	}

	.right-con-left {
		width: 30%;
		box-shadow: 10px 10px 15px #edf1f5;
	}

	.right-con {
		width: 95%;
		margin: 0 auto;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	.road-bottom-right {
		width: 70%;
		text-align: right;
	}

	.road-bottom-left {
		width: 30%;
	}

	.tem-right-top {
		display: flex;
		flex-direction: row;
		width: 95%;
		margin: 20px auto;
		margin-top: 36px;
		position: relative;
		z-index: 1;
	}

	.right-con-top {
		width: 600px;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		margin: 15px 0 15px 0;
	}

	.top-left-word {
		font-family: PingFangSC-Regular;
		font-size: 24px;
		font-weight: normal;
		font-stretch: normal;
		line-height: 24px;
		letter-spacing: 1px;
		color: #000000;
	}

	.top-right {
		display: flex;
		width: 125px;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}

	.top-left {
		flex: 1;
		font-size: 24px;
		font-weight: 400;
		color: #000000;
	}
</style>
