<template>
	<div class="map-box">
		<div class="mapTop">
			<div class="mapTopLeft"></div>
			<div class="mapTopTitle">
				<span>{{loginConfig.deviceName}}系统监控</span>
			</div>
			<div class="mapTopRight">
				<div class="btn-fullscreen" @click="handleFullScreen">
					<el-tooltip effect="dark" :content="fullscreen ? `取消全屏`:`全屏`" placement="bottom">
						<img src="../../assets/images/conputer.png" style="width: 32px;height: 32px;" />
					</el-tooltip>
				</div>
				<router-link to="/logging">
					<img src="../../assets/images/house.png" style="width: 32px;height: 28px;" />
				</router-link>
			</div>
		</div>
		<div class="mapCon">
			<div class="mapCon-left">
				<div class="mapCon-left-top">
					<div class="mapCon-leftTitle">
						<div class="sheb">设备总量:</div>
						<div class="shebe">3587</div>
					</div>
					<div class="mapCon-leftCon">
						<div class="stateBox">
							<div class="stateB">
								<div class="stateWord">3333</div>
								<div class="stateColor g">正常</div>
							</div>
							<div class="stateB">
								<div class="stateWord">3</div>
								<div class="stateColor b">空闲</div>
							</div>
							<div class="stateB">
								<div class="stateWord">232</div>
								<div class="stateColor p">占用</div>
							</div>
						</div>
						<div class="stateBox">
							<div class="stateB">
								<div class="stateWord">10</div>
								<div class="stateColor o">告警</div>
							</div>
							<div class="stateB">
								<div class="stateWord">2</div>
								<div class="stateColor gg">离线</div>
							</div>
							<div class="stateB">
								<div class="stateWord">777</div>
								<div class="stateColor r">故障</div>
							</div>
						</div>
					</div>
				</div>
				<div class="mapCon-left-bot">
					<div class="quanTitle">
						设备类型比例
					</div>
					<div class="quan" id="myEcharts">
					</div>
					<div class="quanWord">
						<div class="heng">
							<div class="hengBox">
								<div class="hengBoxColor p"></div>
								<div class="hengWord">直流充电桩</div>
							</div>
							<div class="hengBox">
								<div class="hengBoxColor r"></div>
								<div class="hengWord">交流充电桩</div>
							</div>
						</div>
						<div class="heng">
							<div class="hengBox">
								<div class="hengBoxColor o"></div>
								<div class="hengWord">共享插座</div>
							</div>
							<div class="hengBox">
								<div class="hengBoxColor g"></div>
								<div class="hengWord">地磁</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="mapCon-right" id="container">
				<div class="mapUp">
					<div class="int">
						<input type="text" class="input-text" />
						<div class="int-img">
							<img src="../../assets/images/map-searche.png" alt="搜索" style="height: 15px;width: 15px;">
						</div>
					</div>
					<div class="mapSelect">
						<template>
							<el-select v-model="chargersStyle" placeholder="显示所有" @change="getSelect">
								<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
								</el-option>
							</el-select>
						</template>
					</div>
				</div>
				<div class="mapDownBox">
					<div class="xinhao">

					</div>
					<div class="DownChargeBox">
						<div>
							<img src="../../assets/images/dici.png" alt="">
						</div>
						<div class="DownChargeWord">
							<div>
								<span class="DownChargeWord1">设备名称</span>
								<span class="DownChargeWord2">地磁</span>
							</div>
							<div>
								<span class="DownChargeWord1">设备状态</span>
								<span class="DownChargeWord3">空闲</span>
							</div>
							<div>
								<span class="DownChargeWord1">设备机号</span>
								<span class="DownChargeWord2">1258</span>
							</div>
						</div>
					</div>
					<div>

					</div>
				</div>
			</div>
		</div>
		<div class="mapBot">
			<div class="mapBot-left test test-1">
				<div class="scrollbar">
					<template>
						<el-table :data="logData" stripe style="width: 100%">
							<el-table-column prop="date" label="日志">
							</el-table-column>
						</el-table>
					</template>
				</div>
			</div>
			<div class="mapBot-right test test-1">
				<div class="scrollbar">
					<template>
						<el-table :data="chargeData" stripe style="width: 100%">
							<el-table-column prop="type" label="设备类型">
							</el-table-column>
							<el-table-column prop="mac" label="机号">
							</el-table-column>
							<el-table-column prop="season" label="告警原因">
							</el-table-column>
							<el-table-column prop="time" label="告警时间">
							</el-table-column>
							<el-table-column label="操作">
								<template slot-scope="scope">
									<el-button size="mini" type="danger">一键消除</el-button>
								</template>
							</el-table-column>
						</el-table>
					</template>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import {
		loginConfig
	} from '../../config.js'
	export default {
		data() {
			return {
				loginConfig,
				token: '',
				total: '',
				chargersStyle: '',
				chargesData: [],
				input: '',
				options: [{
					value: '1',
					label: '显示全部'
				}, {
					value: '2',
					label: '正常'
				}, {
					value: '3',
					label: '空闲'
				}, {
					value: '4',
					label: '占用'
				}, {
					value: '5',
					label: '告警'
				}, {
					value: '6',
					label: '离线'
				}, {
					value: '7',
					label: '故障'
				}],
				logData: [{
						date: '2020-12-23   12:23:27  :  编号1545的汽车直流桩发生故障，请及时处理。'
					}, {
						date: '2020-12-23   12:23:27  :  编号1545的汽车直流桩发生故障，请及时处理。'
					}, {
						date: '2020-12-23   12:23:27  :  编号1545的汽车直流桩发生故障，请及时处理。'
					}, {
						date: '2020-12-23   12:23:27  :  编号1545的汽车直流桩发生故障，请及时处理。'
					},
					{
						date: '2020-12-23   12:23:27  :  编号1545的汽车直流桩发生故障，请及时处理。'
					},
					{
						date: '2020-12-23   12:23:27  :  编号1545的汽车直流桩发生故障，请及时处理。'
					},
					{
						date: '2020-12-23   12:23:27  :  编号1545的汽车直流桩发生故障，请及时处理。'
					}
				],
				chargeData: [{
						type: '直流充电桩',
						mac: '123',
						season: '挂掉了',
						time: '2020-12-23 12:23:27',
					}, {
						type: '直流充电桩',
						mac: '123',
						season: '饿死了',
						time: '2020-12-23 12:23:27',

					}, {
						type: '直流充电桩',
						mac: '123',
						season: '冷死了',
						time: '2020-12-23 12:23:27',

					}, {
						type: '直流充电桩',
						mac: '123',
						season: '很好',
						time: '2020-12-23 12:23:27',

					},
					{
						type: '直流充电桩',
						mac: '123',
						season: '一台顶两台',
						time: '2020-12-23 12:23:27',

					}
				],
				chargeType: [{
					id: 1,
					img: require('../../assets/images/dici.png')
				}],
			};
		},
		mounted() {
			this.token = localStorage.getItem('token')
			this.drawChart();
			this.getChargesMes()
		},
		methods: {
			//全屏事件
			handleFullScreen() {
				let element = document.documentElement;
				if (this.fullscreen) {
					if (document.exitFullscreen) {
						document.exitFullscreen();
					} else if (document.webkitCancelFullScreen) {
						document.webkitCancelFullScreen();
					} else if (document.mozCancelFullScreen) {
						document.mozCancelFullScreen();
					} else if (document.msExitFullscreen) {
						document.msExitFullscreen();
					}
				} else {
					if (element.requestFullscreen) {
						element.requestFullscreen();
					} else if (element.webkitRequestFullScreen) {
						element.webkitRequestFullScreen();
					} else if (element.mozRequestFullScreen) {
						element.mozRequestFullScreen();
					} else if (element.msRequestFullscreen) {
						// IE11
						element.msRequestFullscreen();
					}
				}
				this.fullscreen = !this.fullscreen;
			},
			drawChart() {
				// 基于准备好的dom，初始化echarts实例
				let myChart = this.$echarts.init(document.getElementById("myEcharts"));
				// 指定图表的配置项和数据
				let option = {
					tooltip: {
						trigger: 'item',
						formatter: '{a} <br/>{b}: {c} ({d}%)'
					},
					color: ['purple', 'red', 'orange', 'green'],
					series: [{
						name: '访问来源',
						type: 'pie',
						radius: ['50%', '70%'],
						center: ['50%', '50%'], //图的位置，距离左跟上的位置
						itemStyle: {
							normal: {
								label: {
									show: true,
									formatter: " {d}% \n {b} "
								}
							}
						},
						avoidLabelOverlap: false,
						label: {
							show: false,
							position: 'center'
						},
						emphasis: {
							label: {
								show: true,
								fontSize: '15',
								fontWeight: 'bold'
							}
						},
						labelLine: {
							lineStyle: {
								color: '#235894'
							}
						},
						data: [{
								value: 335,
								name: '直流充电桩'
							},
							{
								value: 310,
								name: '交流充电桩'
							},
							{
								value: 135,
								name: '共享插座'
							},
							{
								value: 148,
								name: '地磁'
							}
						]
					}]
				};
				// 使用刚指定的配置项和数据显示图表。
				myChart.setOption(option);
			},
			getSelect() {
				console.log(this.chargersStyle)
			},
			//总设备信息
			getChargesMes() {
				//token去掉引号
				let toKen = this.token.replace(/\"/g, "")
				// console.log(toKen)
				this.$axios.get("/map/gd/chargers/1").then((res) => {
					this.chargesData = res.data.chargers;
					// console.log(this.chargesData);
					var map = new AMap.Map("container", {
						zoom: 4,
						center: [102.342785, 35.312316],
						resizeEnable: true,
					});
					map.setMapStyle('amap://styles/480d493609c85fa5fd0dc85a15df6013');
					var style = [{
							url: require("../../assets/images/red.png"),
							anchor: new AMap.Pixel(6, 6),
							size: new AMap.Size(12, 12),
						},
						{
							url: require("../../assets/images/green.png"),
							anchor: new AMap.Pixel(4, 4),
							size: new AMap.Size(12, 12),
						},
						{
							url: require("../../assets/images/orange.png"),
							anchor: new AMap.Pixel(3, 3),
							size: new AMap.Size(12, 12),
						},
					];
					var mass = new AMap.MassMarks(this.chargesData, {
						opacity: 0.8,
						zIndex: 111,
						cursor: "pointer",
						style: style,
					});
					var marker = new AMap.Marker({
						content: " ",
						map: map
					});
					mass.on("mouseover", function(e) {
						marker.setPosition(e.data.lnglat);
						marker.setLabel({
							content: e.data.name
						});
					});

					mass.setMap(map);

					function setStyle(multiIcon) {
						if (multiIcon) {
							mass.setStyle(style[0]);
						} else {
							mass.setStyle(style[1]);
						}
					}
					let _this = this;
					AMap.event.addListener(marker, "click", function() {
						_this.flag = !_this.flag;
						console.log(_this.flag);
					});
				});
			}
		},
	}
</script>

<style scoped="scoped">
	.test {
		height: 200px;
		overflow: auto;
		float: left;
		margin: 5px;
		border: none;
	}

	.DownChargeWord1 {
		color: #afb0b0;
		font-size: 16px;
	}

	.DownChargeWord2 {
		color: white;
		font-size: 18px;
	}

	.DownChargeWord3 {
		color: #5248f9;
		font-size: 18px;
	}

	.xinhao {
		width: 95%;
		margin: 0 auto;
		height: 50px;
	}

	.DownChargeBox {
		display: flex;
		flex-direction: row;
		width: 90%;
		margin: 0 auto;

	}

	.DownChargeWord div {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	.DownChargeWord {
		display: flex;
		flex-direction: column;
		width: 150px;
		justify-content: space-between;
		margin-left: 30px;
	}

	.mapDownBox {
		display: flex;
		position: relative;
		flex-direction: column;
		left: 960px;
		top: 230px;
		z-index: 998;
		width: 500px;
		height: 300px;
		border-radius: 10px;
		border: solid 2px #5248f9;
		background-color: #302e56;
	}

	.input-text {
		display: flex;
		flex: 1;
		border-top-left-radius: 20px;
		border-bottom-left-radius: 20px;
		background-color: #3f3c70;
		border: none;
	}

	.int-img {
		width: 50px;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #5248f9;
		border-radius: 20px;
	}

	.mapSelect>>>.el-input__icon {
		height: 100%;
		width: 30px;
		text-align: center;

		line-height: 25px;
	}

	.mapSelect>>>.el-input__inner {
		background-color: #5248f9;
		background-image: none;
		border-radius: 40px;
		border: 1px solid #5248f9;
		color: #fcf8f8;
		height: 30px;
		line-height: 30px;
		width: 110px;
		text-align: center;
	}

	.mapUp {
		width: 90%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		position: relative;
		top: 20px;
		left: 5%;
		z-index: 999;
	}

	.int {
		display: flex;
		flex-direction: row;

		background-color: #3f3c70;
		border-radius: 20px;
	}

	.mapBot-right>>>.el-table tbody tr:hover>td {
		background-color: #202052;
	}

	.mapBot-left>>>.el-table tbody tr:hover>td {
		background-color: #202052;
	}

	.scrollbar {
		height: 250px;
		margin: 0 auto;
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
		background: #272678;
	}

	.test-1::-webkit-scrollbar-track {
		/*滚动条里面轨道*/
		-webkit-box-shadow: inset 0 0 5px rgba(55, 53, 222, 0.3);
		border-radius: 10px;
		background: #1b1c41;
	}

	/* 分界线 */
	.map-box {
		width: 100%;
		height: 100vh;
		background-color: #0f132f;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.el-button--danger {
		color: #FFF;
		background-color: #ff0000;
		border-color: #ff0000;
	}

	.mapBot-right>>>.el-table {
		background-color: #20214a;
	}

	.mapBot-left>>>.el-table {
		background-color: #20214a;
	}

	.mapBot-right>>>.el-table td {
		text-align: center;
		border-bottom: 1px solid #135071;
	}

	.mapBot-right>>>.el-table tr:hover {
		background-color: #202052;
	}

	.mapBot-right>>>.el-table tr {
		background-color: #202052 !important;
	}

	.mapBot-right>>>.el-table--striped .el-table__body tr.el-table__row--striped td {
		background: #313177;
	}

	.mapBot-right>>>.el-table th {
		text-align: center !important;
	}

	.mapBot-left>>>.el-table td {
		border-bottom: 1px solid #135071;
	}

	.mapBot-left>>>.el-table th,
	.el-table tr {
		background-color: #20214a;
	}

	.mapBot-right>>>.el-table th,
	.el-table tr {
		background-color: #20214a;
	}

	.mapBot-left>>>.el-table--striped .el-table__body tr.el-table__row--striped td {
		background: #313177;
	}

	.mapBot-left>>>.el-table th.is-leaf {
		border-bottom: 1px solid #135071;
	}

	.mapBot-right>>>.el-table th.is-leaf {
		border-bottom: 1px solid #135071;
	}

	.mapBot-left>>>.el-table tr {
		background-color: #202052 !important;
	}

	.mapBot-left>>>.el-table th>.cell {
		text-align: center !important;
		color: #49face;
		font-size: 18px;
	}

	.mapBot-left>>>.cell {
		color: #a8acc4;
	}

	.mapBot-right>>>.cell {
		color: #a8acc4;
	}

	.mapBot-right>>>.el-table th>.cell {
		text-align: center !important;
		color: #49face;
		font-size: 16px;
	}

	.hengWord {
		color: #aeacac;
		width: 80px;
	}

	.hengBoxColor {
		height: 12px;
		width: 12px;
		border-radius: 50%;
	}

	.hengBox {
		display: flex;
		flex-direction: row;
		width: 100px;
		justify-content: space-between;
		align-items: center;
	}

	.heng {
		display: flex;
		flex-direction: row;
		width: 80%;
		margin: 0 auto;
		justify-content: space-between;
		padding: 8px 0px;
	}

	.mapCon-leftTitle {
		height: 50px;
		width: 80%;
		display: flex;
		flex-direction: row;
		margin: 12px auto;
	}

	.quanTitle {
		width: 150px;
		height: 40px;
		border: solid 2px #0a637a;
		border-radius: 13px;
		line-height: 40px;
		text-align: center;
		color: #4efaf8;
		font-size: 16px;
		font-family: MicrosoftYaHei-Bold;
	}

	.quan {
		width: 90%;
		margin: 0 auto;
		height: 160px;
	}

	.quanWord {
		width: 90%;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
	}

	.p {
		background-color: #bc00d8;
	}

	.g {
		background-color: #0cc52a;
	}

	.b {
		background-color: #5248f9;
	}

	.o {
		background-color: #fa602a;
	}

	.gg {
		background-color: #8c8c8c;
	}

	.r {
		background-color: #e1081c;
	}

	.stateColor {
		width: 65px;
		height: 25px;
		color: white;
		text-align: center;
		border-radius: 10px;
		line-height: 25px;
	}


	.stateWord {
		color: #4cf6f4;
		font-size: 20px;
		text-align: center;
	}

	.stateBox {
		display: flex;
		flex-direction: row;
		padding: 10px 0px;
		justify-content: space-between;
	}

	.stateB {
		display: flex;
		flex-direction: column;
		height: 50px;
		justify-content: space-between;

	}

	.mapCon-leftCon {
		width: 80%;
		margin: 0 auto;
	}

	.mapBot-left {
		width: 49%;
		height: 230px;
		background-color: #202052;
		border-style: solid;
		border: solid 2px #0a637a;
		border-image-slice: 1;
		border-radius: 10px;
	}

	.mapBot-right {
		width: 49%;
		height: 230px;
		background-color: #202052;
		border-style: solid;
		border: solid 2px #0a637a;
		border-image-slice: 1;
		border-radius: 10px;
	}

	.sheb {
		color: white;
		font-size: 18px;
		line-height: 50px;
	}

	.shebe {
		color: red;
		font-size: 36px;
		width: 150px;
		text-align: center;
	}

	.mapTop {
		width: 98%;
		margin: 0 auto;
		display: flex;
		flex-direction: row;
	}

	.mapCon-left {
		width: 365px;
		height: 580px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.mapCon-right {
		width: 79%;
		height: 580px;
		background-color: #202052;
		border: solid 2px #0a637a;
		border-image-slice: 1;
		border-radius: 10px;
	}

	.mapBot {
		width: 98%;
		height: 230px;
		margin: 0 auto;
		margin-top: 20px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	.mapCon {
		width: 98%;
		margin: 0 auto;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		margin-top: 20px;
	}

	.mapTopLeft {
		width: 10%;
		height: 50px;
	}

	.mapCon-left-top {
		width: 360px;
		height: 260px;
		background-color: #202052;
		border-style: solid;
		border: solid 2px #0a637a;
		border-image-slice: 1;
		border-radius: 10px;
	}

	.mapCon-left-bot {
		width: 360px;
		height: 285px;
		background-color: #202052;
		border-style: solid;
		border: solid 2px #0a637a;
		border-image-slice: 1;
		border-radius: 10px;
		display: flex;
		flex-direction: column;
	}

	.mapTopRight {
		width: 10%;
		height: 50px;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: flex-end;
	}

	.mapTopTitle {
		display: flex;
		flex: 1;
		background: url(../../assets/images/titleImg.png) center no-repeat;
		height: 60px;
	}

	.mapTopTitle span {
		text-align: center;
		font-size: 30px;
		color: #4efaf8;
		width: 100%;
		line-height: 70px;
	}
</style>
