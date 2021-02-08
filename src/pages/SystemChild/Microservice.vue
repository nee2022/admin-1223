<template>
	<div class="wei-box">
		<div class="weiTop">
			<div class="weiTopLeft"></div>
			<div class="weiTopTitle">
				<span>{{loginConfig.deviceName}}微服务监控</span>
			</div>
			<div class="weiTopRight">
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
		<div class="weiCon">
			<div class="weiConLeft">
				<div class="weiConLeftT">
					<div class="cTitle">
						<span class="TitleWord">总进程数:</span>
						<span class="TitleNum">1232</span>
					</div>
					<div class="cTitle">
						<div class="TitleImg g"></div>
						<span class="TitleWord">正常进程:</span>
						<span class="TitleNum">1123</span>
					</div>
					<div class="cTitle">
						<div class="TitleImg o"></div>
						<span class="TitleWord">堵塞进程:</span>
						<span class="TitleNum">12</span>
					</div>
					<div class="cTitle">
						<div class="TitleImg r"></div>
						<span class="TitleWord">宕机进程:</span>
						<span class="TitleNum">42</span>
					</div>
				</div>
				<div class="weiConLeftB">
					<div class="smollBox" v-for="item in 30">
						<div class="smollBoxTitle">
							<span class="smollWord">进程名称</span>
							<div class="cen">
								<div class="TitleImg1 g"></div>
							</div>
						</div>
						<div class="smollBoxCon">
							<div class="quanBox">
								<div class="tt">
									<el-progress type="circle" :percentage="40" :width="60" :format="format" color="#0bfb33" :stroke-width="8"></el-progress>
								</div>
								<div>
									<span class="fon">32459</span>
								</div>
								<div class="fonBox">
									<span>TPS</span>
								</div>
							</div>
							<div class="quanBox">
								<div class="tt">
									<el-progress type="circle" :percentage="68" :width="60" :format="format1" color="#0b43fb" :stroke-width="8"></el-progress>
								</div>
								<div>
									<span class="fon">29</span>
								</div>
								<div class="fonBox">
									<span>队列</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="weiConRight">
				<div class="weiConRightT">
					同步程序进程详情
				</div>
				<div class="jdtBox">
					<div class="jdtTOP">
						<div class="jindutiao1">
							<el-progress :text-inside="true" :stroke-width="17" :percentage="70" color="#0b43fb"></el-progress>
						</div>
						<div class="baifenbi">70%</div>
						<div class="baifenbi1">cpu占用率</div>
					</div>
					<div class="jdtTOP">
						<div class="jindutiao2">
							<el-progress :text-inside="true" :stroke-width="17" :percentage="33" color="#0bfb33"></el-progress>
						</div>
						<div class="baifenbi">33%</div>
						<div class="baifenbi1">内存占用率</div>
					</div>
				</div>
				<div class="rightTitle">
					<div class="rightTitleB">
						<div class="rightTitleW1">TPS:</div>
						<div class="rightTitleW2">32459</div>
					</div>
					<div class="rightTitleB">
						<div class="rightTitleW1">队列:</div>
						<div class="rightTitleW2">23</div>
					</div>
					<div class="rightTitleB">
						<div class="rightTitleW1">并发:</div>
						<div class="rightTitleW2">55</div>
					</div>
				</div>
				<div class="zhexiantuB">
					<div class="zhexiantuT">
						<div class="zhexianWord">30天TPS数据变化图</div>
						<div class="zhexianSelect">
							<template>
								<el-select v-model="value" placeholder="请选择">
									<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
									</el-option>
								</el-select>
							</template>
						</div>
					</div>
					<div class="zhexianImg" id="myEcharts">
					</div>
					<div class="zhexianBox">
						<div class="zhexianBoxLeft">
							<div class="zhexianBoxTop">
								进程时长
							</div>
							<div class="zhexianBoxBot">
								<span>78 : 59 : 24</span>
							</div>
						</div>
						<div class="zhexianBoxLeft">
							<div class="zhexianBoxTop">
								运行路径
							</div>
							<div class="zhexianBoxBot">
								<span class="zhexianW">saodasdhi/sadasd/asd</span>
							</div>
						</div>
					</div>
				</div>
				<div class="zhexianUnder">
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
				options: [{
					value: '1',
					label: '一月'
				}, {
					value: '2',
					label: '二月'
				}, {
					value: '3',
					label: '三月'
				}, {
					value: '4',
					label: '四月'
				}, {
					value: '5',
					label: '五月'
				}],
				value: '',
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
			}
		},
		mounted() {
			this.drawChart()
		},
		methods: {
			format(percentage) {
				return `${percentage}%
cpu占用率`;
			},
			format1(percentage) {
				return `${percentage}%
内存占用率`;
			},
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
					grid: {
						right: "3%"
					},
					tooltip: {
						trigger: "axis",
						backgroundColor: "rgba(38, 9, 195, 1)",
						padding: [5, 15]
					},
					xAxis: [{
						type: "category",
						boundaryGap: false,
						axisTick: {
							//y轴刻度线
							show: false
						},
						axisLine: {
							lineStyle: {
								color: "rgba(255, 255,255, 1)", //x轴边框颜色
								width: 1
							}
						},
						axisLabel: {
							margin: 20,
							textStyle: {
								fontSize: 14
							}
						},
						data: [
							"1",
							"2",
							"3",
							"4",
							"5",
							"6",
							"7",
							"8",
							"9"
						]
					}],
					yAxis: [{
						//Y轴线的样式和单位
						type: "value",
						axisTick: {
							show: false
						},
						axisLine: {
							lineStyle: {
								color: "#ffffff", //y轴边框颜色
								width: 0
							}
						},
						axisLabel: {
							margin: 20,
							interval: "auto",
							formatter: "{value}",
							textStyle: {
								fontSize: 14
							}
						},
						splitLine: {
							lineStyle: {
								color: "rgba(255, 255, 255, 1)",
								type: "dotted" //折线图表格行边框样式
							}
						},
					}],
					series: [{
						name: "TPS数据",
						type: "line",
						smooth: true,
						symbol: "circle",
						symbolSize: 5,
						showSymbol: false,
						lineStyle: {
							normal: {
								width: 2, //波形图波浪的边框
								borderWidth: 4,
								color: "rgba(38, 9, 195, 1)"
							}
						},
						areaStyle: {
							normal: {
								//渐变色
								color: this.$echarts.graphic.LinearGradient(
									38, 9, 195, 1[{
										//波形图渐变色样式
										offset: 0,
										color: "rgba(255,255,255,0.1)"
									}, {
										offset: 0.8,
										color: "rgba(38, 9, 195, 1"
									}],
									false
								)
							}
						},
						itemStyle: {
							normal: {
								color: "rgba(38, 9, 195, 1)"
							}
						},
						data: [1000, 6000, 2232, 4523, 1290, 1230, 5553, 2314, 2214]
					}, ]
				};
				// 使用刚指定的配置项和数据显示图表。
				myChart.setOption(option);
			},
		}
	}
</script>

<style scoped="scoped">
	.test {
		height: 180px;
		overflow: auto;
		float: left;
		margin: 5px;
		border: none;
	}

	.wei-box {
		width: 100%;
		height: 100vh;
		background-color: #0f132f;
		display: flex;
		flex-direction: column;
	}

	.zhexianUnder {
		width: 92%;
		margin: 0 auto;
		margin-top: 20px;
	}

	.mapBot-left>>>.el-table tbody tr:hover>td {
		background-color: #202052;
	}

	.mapBot-left {
		width: 100%;
		height: 180px;
		background-color: #202052;
		border-style: solid;
		border: solid 2px #0a637a;
		border-image-slice: 1;
		border-radius: 10px;
	}

	.scrollbar {
		height: 180px;
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

	.mapBot-left>>>.el-table td {
		border-bottom: 1px solid #135071;
	}

	.mapBot-left>>>.el-table th,
	.el-table tr {
		background-color: #20214a;
	}

	.mapBot-left>>>.el-table {
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

	.zhexianW {
		font-size: 14px !important;
		color: white !important;
	}

	.zhexianBoxTop {
		color: white;
		border-bottom: solid 1px #0f132f;
		padding: 5px 10px;
	}

	.zhexianBoxBot {
		text-align: center;
		height: 50px;
		line-height: 50px;
		white-space: pre;
	}

	.zhexianBoxBot span {
		color: #0b43fb;
		font-size: 30px;
	}

	.zhexianBoxLeft {
		width: 48%;
		height: 80px;
		background-color: #262674;
		border-radius: 10px;
	}

	.zhexianBox {
		display: flex;
		flex-direction: row;
		width: 92%;
		margin: 0 auto;
		justify-content: space-between;
	}

	.tt>>>svg path:first-child {
		stroke: #0f132f;
	}

	.tt>>>.el-progress__text {
		transform: scale(0.7);
		top: 30%;
	}

	.zhexianSelect {
		display: flex;

		margin-left: 60%;
	}

	.zhexianImg {
		width: 92%;
		height: 240px;
		margin: 0 auto;
	}

	.zhexianWord {
		width: 50%;
		color: #bcb8b8;
		font-size: 14px;
	}

	.zhexianSelect>>>.el-input__icon {
		height: 100%;
		width: 30px;
		text-align: center;
		line-height: 25px;
	}

	.zhexianSelect>>>.el-input__inner {
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

	.baifenbi {
		color: white;
		font-size: 30px;
	}

	.zhexiantuT {
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.rightTitleW1 {
		width: 30%;
		color: white;
		font-size: 16px;
		display: flex;
		justify-content: center;
		line-height: 30px;
	}

	.rightTitleW2 {
		color: #00FF00;
		font-size: 30px;
		width: 50%;
		text-align: center;
		display: flex;
		justify-content: center;
		line-height: 50px;
	}

	.zhexiantuB {
		display: flex;
		flex-direction: column;
		width: 92%;
		margin: 0 auto;
	}

	.baifenbi1 {
		color: #838686;
		font-size: 16px;
	}

	.rightTitle {
		display: flex;
		flex-direction: row;
		width: 92%;
		margin: 20px auto;
		background-color: #262674;
		border-radius: 5px;
		padding: 5px 0px;
	}

	.rightTitleB {
		display: flex;
		flex-direction: row;
		flex: 4;
		border-right: solid 1px #0f132f;
	}

	.jdtTOP {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}

	.jdtBox {
		width: 92%;
		margin: 0 auto;
	}

	.jindutiao1 {
		width: 70%;
		margin: 20px 0px;
		border: 14px solid #262674;
		border-radius: 50px;
	}

	.jindutiao2 {
		width: 70%;
		border: 14px solid #262674;
		border-radius: 50px;
	}

	.weiConRightT {
		color: #4efaf8;
		padding: 8px 0px;
		font-size: 16px;
		font-weight: 600;
		width: 100%;
		height: 25px;
		text-align: center;
		border-bottom: solid 1px #0f132f;
	}

	.quanBox {
		display: flex;
		flex-direction: column;
		width: 50%;
		align-items: center;
		justify-content: space-between;
		height: 110px;
	}

	.tt {
		white-space: pre;
	}

	.fonBox {
		width: 50%;
		background-color: #3d3df8;
		border-radius: 40px;
		text-align: center;
	}

	.fonBox span {
		color: white;
	}

	.fon {
		color: #00FF00;
	}

	.tt>>>.el-progress__text {
		font-size: 20px;
	}

	.smollWord {
		font-size: 15px;
		width: 66%;
		text-align: right;
		color: #4efaf8;
	}

	.smollBoxCon {
		display: flex;
		flex-direction: row;

	}

	.cen {
		display: flex;
		flex: 1;
	}

	.p {
		background-color: #bc00d8;
	}

	.g {
		background-color: #00FF00;
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

	.weiCon {
		width: 98%;
		display: flex;
		margin: 0 auto;
		height: 100%;
		justify-content: space-between;
		flex-direction: row;
		align-items: center;
	}

	.smollBox {
		display: flex;
		flex-direction: column;
		width: 180px;
		height: 148px;
		background-color: #2f2b71;
		border-radius: 10px;
	}

	.smollBoxTitle {
		display: flex;
		flex-direction: row;
		margin: 5px 0px;
		align-items: center;
		border-bottom: solid 1px #202052;
	}

	.jindutiao1>>>.el-progress-bar__outer {
		background-color: #202052;
	}

	.jindutiao2>>>.el-progress-bar__outer {
		background-color: #202052;
	}

	.weiConLeftB {
		width: 100%;
		height: 100%;
		background-color: #202052;
		border-radius: 5px;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-around;
		align-items: center;
	}

	.TitleImg {
		width: 15px;
		height: 15px;
		border-radius: 50%;
	}

	.TitleImg1 {
		width: 12px;
		height: 12px;
		border-radius: 50%;
		margin: 0 auto;
	}

	.weiConLeftT {
		width: 75%;
		height: 60px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	.TitleNum {
		width: 55px;
		text-align: right;
		font-size: 20px;
		color: white;
		font-weight: 600;
	}

	.cTitle {
		display: flex;
		flex-direction: row;
		align-items: center;

	}

	.weiConLeft {
		width: 60%;
		height: 850px;
		display: flex;
		flex-direction: column;
	}

	.weiConRight {
		width: 38%;
		height: 850px;
		display: flex;
		flex-direction: column;
		background-color: #202052;
		border-style: solid;
		border-width: 2px;
		border-image-source: linear-gradient(0deg,
			#6717cd 0%,
			#2871fa 100%);
		border-image-slice: 1;
		border-radius: 10px;
	}

	.TitleWord {
		font-size: 16px;
		color: white;
		margin-left: 10px;
	}

	.weiTop {
		width: 98%;
		margin: 0 auto;
		display: flex;
		flex-direction: row;
	}

	.weiTopLeft {
		width: 10%;
		height: 50px;
	}

	.weiTopRight {
		width: 10%;
		height: 50px;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: flex-end;
	}

	.weiTopTitle {
		display: flex;
		flex: 1;
		background: url(../../assets/images/titleImg.png) center no-repeat;
		height: 60px;
	}

	.weiTopTitle span {
		text-align: center;
		font-size: 30px;
		color: #4efaf8;
		width: 100%;
		line-height: 70px;
	}

	.el-progress-bar__outer {
		background-color: #202052;
	}
</style>
