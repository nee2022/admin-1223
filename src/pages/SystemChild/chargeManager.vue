<template>
	<div class="chargeBox">
		<div class="mapTop">
			<div class="mapTopLeft"></div>
			<div class="mapTopTitle">
				<span>{{loginConfig.deviceName}}设备监控</span>
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
				<div class="chargeCon-left-top">
					<div class="leftTitle">
						<div class="leftTitleL">CPU占用率</div>
						<div class="leftTitleR">
							<span class="hexin">核心数:</span>
							<span class="hexinNum">9</span>
						</div>
					</div>
					<div class="cpuJindu" v-for="item in jidu">
						<div class="cpuID">#{{item.id}}</div>
						<div class="cpuJD"><el-progress :percentage="item.num" :stroke-width="12"></el-progress></div>
					</div>
				</div>
				<div class="chargeCon-left-bot">
					<div class="neicun">内存占用率</div>
					<div class="neicunImg">
						<div class="neicun-img">
							<el-progress type="circle" :percentage="80" :width="100" :stroke-width="12" color="red"></el-progress>
							<span>RAM</span>
						</div>
						<div class="neicun-img">
							<el-progress type="circle" :percentage="30" :width="100" :stroke-width="12" color="#1fff3f"></el-progress>
							<span>SWAP</span>
						</div>
					</div>
				</div>
			</div>
			<div class="mapCon-con">
				<div class="chargeCon-con-top">
					<div class="chargeTitle">
						<div class="cTitle">
							<span class="TitleWord">系统总数:</span>
							<span class="TitleNum">7</span>
						</div>
						<div class="cTitle">
							<div class="TitleImg g"></div>
							<span class="TitleWord">在线:</span>
							<span class="TitleNum">4</span>
						</div>
						<div class="cTitle">
							<div class="TitleImg gg"></div>
							<span class="TitleWord">离线</span>
							<span class="TitleNum">2</span>
						</div>
						<div class="cTitle">
							<div class="TitleImg o"></div>
							<span class="TitleWord">告警:</span>
							<span class="TitleNum">1</span>
						</div>
						<div class="cTitle">
							<div class="TitleImg r"></div>
							<span class="TitleWord">故障:</span>
							<span class="TitleNum">0</span>
						</div>
					</div>
					<div class="serverBox">
						<div class="serverB" v-for="item in 8">
							<div class="serverTop">
								<div class="smollTbox">
									<div class="cloudBox">
										<img src="../../assets/images/cloud.png" />
									</div>
									<div class="jd">
										<div class="jdt"><el-progress :text-inside="true" :stroke-width="15" :percentage="70"></el-progress></div>
										<div class="jdWord">CPU</div>
									</div>
									<div class="jd">
										<div class="jdt"><el-progress :text-inside="true" :stroke-width="15" :percentage="30"></el-progress></div>
										<div class="jdWord">内存</div>
									</div>
									<div class="jd">
										<div class="jdt"><el-progress :text-inside="true" :stroke-width="15" :percentage="40"></el-progress></div>
										<div class="jdWord">硬盘</div>
									</div>
								</div>
							</div>
							<div class="serverBot">
									<span class="TitleWord">ecs-15135</span>
									<div class="TitleImg1 g"></div>
							</div>
						</div>
					</div>
				</div>
				<div class="chargeCon-con-bot">
					<div class="con-bot-left">
						<div class="con-bot-leftT">
							磁盘
						</div>
						<div class="cipanB">
							<div class="cipanBox">
								<div>
									<img src="../../assets/images/cipan.png" style="height: 40px;width: 40px;"/>
								</div>
								<div class="cipanR">
									<div class="cipanRTop">
										<div class="cipanW">路径:asdasdad</div>
										<div class="cipanW">已用:90%</div>
									</div>
									<div class="cipanRCon">
										<el-progress :text-inside="true" :stroke-width="20" :percentage="90"></el-progress>
									</div>
									<div class="cipanW">
										大小:32G
									</div>
								</div>
							</div>
							<div class="cipanBox">
								<div>
									<img src="../../assets/images/cipan.png" style="height: 40px;width: 40px;"/>
								</div>
								<div class="cipanR">
									<div class="cipanRTop">
										<div class="cipanW">路径:asdasdad</div>
										<div class="cipanW">已用:7%</div>
									</div>
									<div class="cipanRCon">
										<el-progress :text-inside="true" :stroke-width="20" :percentage="7"></el-progress>
									</div>
									<div class="cipanW">
										大小:32G
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="con-bot-right">
						<div class="con-bot-leftT">
							网络
						</div>
						<div class="mapBot-right test test-1 net">
							<div class="scrollbar1">
								<template>
									<el-table :data="cpuData" stripe style="width: 100%">
										<el-table-column prop="name" label="名称">
										</el-table-column>
										<el-table-column prop="tx" label="发包(TX)">
										</el-table-column>
										<el-table-column prop="rx" label="收包(RX)">
										</el-table-column>
									</el-table>
								</template>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="mapCon-right">
				<div class="chargeCon-right-top">
					<div class="con-bot-leftT">
						用户
					</div>
					<div class="mapBot-right test test-1 user">
						<div class="scrollbar1">
							<template>
								<el-table :data="usersData" stripe style="width: 100%">
									<el-table-column prop="id" width="50">
										<template slot-scope="scope">
											<div>#{{scope.row.id}}</div>
										</template>
									</el-table-column>
									<el-table-column prop="name" label="名称">
									</el-table-column>
									<el-table-column prop="IP" label="IP">
									</el-table-column>
								</el-table>
							</template>
						</div>
					</div>
				</div>
				<div class="chargeCon-right-bot">
					<div class="zhexian">
						系统载荷
					</div>
					<div class="zhexianImg" id="myEcharts">
					</div>
				</div>
			</div>
		</div>
		<div class="chargeBot">
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
				<div class="scrollbar1">
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
				cpuData:[{
					name:'#1 123213',tx:'1445G',rx:'1232G'
				},
				{
					name:'#2 123213',tx:'245G',rx:'532G'
				},
				{
					name:'#3 123213',tx:'1345G',rx:'1222G'
				}],
				usersData:[{
					name:'sdadsad',IP:'24123113',id:1
				},
				{
					name:'sdadsad',IP:'24123113',id:2
				},
				{
					name:'sdadsad',IP:'24123113',id:3
				},
				{
					name:'sdadsad',IP:'24123113',id:4
				},
				{
					name:'sdadsad',IP:'24123113',id:5
				},
				{
					name:'sdadsad',IP:'24123113',id:6
				},
				{
					name:'sdadsad',IP:'24123113',id:7
				},
				{
					name:'sdadsad',IP:'24123113',id:8
				}],
				jidu: [{
						num: 20,
						id:1
					},
					{
						num: 10,
						id:2
					},
					{
						num: 70,
						id:3
					},
					{
						num: 50,
						id:4
					},
					{
						num: 20,
						id:5
					},
					{
						num: 90,
						id:6
					},
					{
						num: 30,
						id:7
					},
					{
						num: 10,
						id:8
					},
					{
						num: 50,
						id:9
					}
				],
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
			};
		},
		mounted(){
			this.drawChart()
		},
		methods:{
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
								color: "#4466f7", //x轴边框颜色
								width: 1
							}
						},
						axisLabel: {
							margin: 15,
							textStyle: {
								fontSize: 12
							}
						},
						data: [
							"1min",
							"5min",
							"10min",
							"15min",
							"20min",
							"25min"
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
								color: "#4466f7", //y轴边框颜色
								width: 1
							}
						},
						axisLabel: {
							margin: 10,
							interval: "auto",
							formatter: "{value}",
							textStyle: {
								fontSize: 14
							}
						},
						splitLine: {
							lineStyle: {
								color: "#4466f7",
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
								borderWidth: 3,
								color: "rgba(195, 99, 144, 1)"
							}
						},
						areaStyle: {
							normal: {
								//渐变色
								color: this.$echarts.graphic.LinearGradient(
									38, 9, 195, 1[{
										//波形图渐变色样式
										offset: 0.5,
										color: "rgba(195, 99, 144, 1)"
									}, {
										offset: 0.8,
										color: "rgba(38, 9, 195, 1)"
									}],
									false
								)
							}
						},
						itemStyle: {
							normal: {
								color: "rgba(195, 99, 144, 1)"
							}
						},
						data: [0.2, 1, 0.5, 1.7, 1.1, 0.6]
					}, ]
				};
				// 使用刚指定的配置项和数据显示图表。
				myChart.setOption(option);
			},
		}
	}
</script>

<style scoped="scoped">
	.mapTop {
		width: 98%;
		margin: 0 auto;
		display: flex;
		flex-direction: row;
	}
	
	.zhexianImg {
		width: 85%;
		height: 190px;
		margin: 0 auto;
		margin-top: -20px;
	}
	
	.user>>>.el-table td{
		padding: 5px 0;
	}
	
	.user>>>.el-table th{
		padding: 5px 0;
	}
	
	.net>>>.el-table td{
		padding: 5px 0;
	}
	
	.net>>>.el-table th{
		padding: 5px 0;
	}
	
	.net {
		width: 99% !important;
		height: 100px !important;
		border-radius: 10px;
		border: none !important;
	}
	
	.user{
		width: 99% !important;
		height: 250px !important;
		border-radius: 10px;
		border: none !important;
	}
	
	.cpuID{
		width: 20%;
		float: left;
		text-align: center;
		color: white;
	}
	
	.cpuJD{
		width: 80%;
		float: right;
	}
	
	.cipanB{
		width: 90%;
		margin: 0 auto;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
	}
	
	.cipanW{
		color: #dcf1f8;
		font-size: 12px;
	}
	
	.cipanRTop{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
	
	.cipanR{
		width: 70%;
		display: flex;
		flex-direction: column;
	}
	
	.cipanBox{
		width: 50%;
		display: flex;
		flex-direction: row;
		height: 100px;
		align-items: center;
		justify-content: space-around;
	}
	
	.con-bot-leftT{
		width: 100%;
		font-size:18px;
		color: white;
		font-weight: 500;
		text-align: center;
		padding: 10px 0;
	}
	
	.zhexian{
		width: 80%;
		font-size:18px;
		color: #77dafb;
		font-weight: 500;
		padding: 10px 0;
		margin: 0 auto;
	}
	
	.jd{
		width: 90%;
		margin: 0 auto;
		position: relative;
		top: -10px;
	}
	
	.jdt{
		width: 65%;
		float: left;
	}
	
	.cloudBox{
		position: relative;
		top: -20px;
	}
	
	.jdWord{
		float: left;
		width: 30%;
		margin-left: 5px;
		color: #e4e4e8;
		font-size: 12px;
		height: 20px;
		line-height: 20px;
	}
	
	.smollTbox{
		width: 130px;
		height: 90px;
		background-color: #35359e;
		margin: 0 auto;
		border-radius: 10px;
	}
	
	.serverBot{
		width: 130px;
		height: 30px;
		background-color: #2b2d6a;
		margin: 0 auto;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
		border-radius: 10px;
	}
	
	.serverBox{
		display: flex;
		flex-direction: row;
		width: 92%;
		height: 340px;
		margin: 0 auto;
		flex-wrap: wrap;
		align-items: center;
		
	}
	
	.serverB{
		width: 180px;
		height: 160px;
		background-color: #202052;
		border-radius: 10px;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		margin: 0px 18px;
	}
	
	.cipanRCon>>>.el-progress-bar__outer {
		background-color: #272678;
	}
	
	.cipanRCon>>>.el-progress-bar__inner {
		background-color: #4466f7;
	}
	
	.jdt>>>.el-progress-bar__outer {
		background-color: #272678;
	}
	
	.jdt>>>.el-progress-bar__inner {
		background-color: #0cf82d;
	}

	.neicun-img>>>svg path:first-child {
		stroke: #272756;
	}

	.neicun-img>>>.el-progress__text {
		font-size: 20px !important;
		top: 40px;
	}

	.TitleNum {
		width: 55px;
		text-align: center;
		font-size: 20px;
		color: white;
		font-weight: 600;
	}

	.TitleWord {
		font-size: 16px;
		color: white;
		margin-left: 10px;
	}

	.cTitle {
		display: flex;
		flex-direction: row;
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
	}

	.neicun {
		font-size: 18px;
		color: white;
		font-weight: 600;
		width: 90%;
		margin: 10px auto;
	}

	.neicun-img span {
		font-size: 16px;
		color: #8c8e8c;
	}

	.neicun-img {
		width: 50%;
		height: 200px;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
	}

	.neicunImg {
		width: 90%;
		margin: 0 auto;
		display: flex;
		flex-direction: row;
	}

	.cpuJindu {
		width: 92%;
		padding: 10px 12px;
	}

	.hexinNum {
		font-size: 22px;
		color: #00FF00;
	}

	.hexin {
		color: white;
		font-size: 12px;
	}

	.cpuJindu>>>.el-progress-bar__inner {
		background-color: #4466f7;
	}

	.cpuJindu>>>.el-progress-bar__outer {
		background-color: #1a1a39;
	}

	.leftTitle {
		width: 95%;
		display: flex;
		flex-direction: row;
		background-color: #2d2d64;
		border-radius: 10px;
		height: 55px;
		margin: 15px auto;
	}

	.leftTitleL {
		width: 70%;
		display: flex;
		align-items: center;
		margin-left: 15px;
		font-size: 20px;
		color: white;
		font-weight: 500;
	}

	.leftTitleR {
		display: flex;
		flex: 1;
		align-items: center;
		justify-content: space-around;
	}

	.chargeTitle {
		width: 60%;
		height: 60px;
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

	.mapBot-right>>>.el-table tbody tr:hover>td {
		background-color: #202052;
	}

	.mapBot-left>>>.el-table tbody tr:hover>td {
		background-color: #202052;
	}

	.el-button--danger {
		color: #FFF;
		background-color: #ff0000;
		border-color: #ff0000;
	}

	.chargeBot {
		width: 98%;
		height: 230px;
		margin: 0 auto;
		margin-top: 20px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
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

	.test {
		height: 200px;
		overflow: auto;
		float: left;
		margin: 5px;
		border: none;
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

	.scrollbar {
		height: 250px;
		margin: 0 auto;
	}
	
	.scrollbar1 {
		height: 100px;
		margin: 0 auto;
	}
	
	.scrollbar2{
		height:250px;
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

	.con-bot-left {
		width: 49%;
		height: 160px;
		background-color: #202052;
		border-style: solid;
		border: solid 2px #0a637a;
		border-image-slice: 1;
		border-radius: 10px;
	}

	.con-bot-right {
		width: 49%;
		height: 160px;
		background-color: #202052;
		border-style: solid;
		border: solid 2px #0a637a;
		border-image-slice: 1;
		border-radius: 10px;
	}

	.chargeCon-left-top {
		width: 300px;
		height: 300px;
		background-color: #202052;
		border-style: solid;
		border: solid 2px #0a637a;
		border-image-slice: 1;
		border-radius: 10px;
	}

	.chargeCon-left-bot {
		width: 300px;
		height: 245px;
		background-color: #202052;
		border-style: solid;
		border: solid 2px #0a637a;
		border-image-slice: 1;
		border-radius: 10px;
		display: flex;
		flex-direction: column;
	}

	.chargeCon-right-top {
		width: 350px;
		height: 300px;
		background-color: #202052;
		border-style: solid;
		border: solid 2px #0a637a;
		border-image-slice: 1;
		border-radius: 10px;
	}

	.chargeCon-right-bot {
		width: 350px;
		height: 245px;
		background-color: #202052;
		border-style: solid;
		border: solid 2px #0a637a;
		border-image-slice: 1;
		border-radius: 10px;
		display: flex;
		flex-direction: column;
	}

	.mapCon-left {
		width: 300px;
		height: 580px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.mapCon-con {
		width: 63%;
		height: 580px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.chargeCon-con-bot {
		width: 100%;
		height: 160px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	.chargeCon-con-top {
		width: 100%;
		height: 400px;
		background-color: #101c37;
		border: solid 2px #0a637a;
		border-radius: 10px;
	}

	.mapCon-right {
		width: 350px;
		height: 580px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.mapTopLeft {
		width: 10%;
		height: 50px;
	}

	.chargeBox {
		width: 100%;
		height: 100vh;
		background-color: #0f132f;
		display: flex;
		flex-direction: column;
		justify-content: center;
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
