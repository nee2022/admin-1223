<template>
	<div class="oneCard-right">
		<div class="UserAssets-right-top">
			<div class="user-left">
				<span class="user-word">物联中心</span>
			</div>
			<div class="users-right">
				<myhead></myhead>
			</div>
		</div>
		<div class="wulianBot">
			<div class="wulianBotBox">
				<div class="wulianBotBoxT">
					<div class="T_blue"></div>
					<span class="T_span">设备</span>
				</div>
				<div class="wulianBotBoxBot">
					<div class="conLeft">
						<div class="Ltitle">总数</div>
						<div class="Lnum">8523</div>
					</div>
					<div class="conCon">
						<div class="CnumBox">
							<div class="Cnum">7425</div>
							<div class="CwordBox">
								<div class="quan green"></div>
								<div>在线</div>
							</div>
						</div>
						<div class="CnumBox">
							<div class="Cnum">798</div>
							<div class="CwordBox">
								<div class="quan gray"></div>
								<div>离线</div>
							</div>
						</div>
						<div class="CnumBox">
							<div class="Cnum">423</div>
							<div class="CwordBox">
								<div class="quan orange"></div>
								<div>告警</div>
							</div>
						</div>
						<div class="CnumBox">
							<div class="Cnum">215</div>
							<div class="CwordBox">
								<div class="quan red"></div>
								<div>故障</div>
							</div>
						</div>
					</div>
					<div class="conRight" id="myEcharts1">	
					</div>
				</div>
			</div>
			<div class="wulianBotBox">
				<div class="wulianBotBoxT">
					<div class="T_blue"></div>
					<span class="T_span">SIM卡</span>
				</div>
				<div class="wulianBotBoxBot">
					<div class="conLeft">
						<div class="Ltitle">总数</div>
						<div class="Lnum">8523</div>
					</div>
					<div class="conCon">
						<div class="CnumBox">
							<div class="Cnum">7425</div>
							<div class="CwordBox">
								<div class="quan green"></div>
								<div>在线</div>
							</div>
						</div>
						<div class="CnumBox">
							<div class="Cnum">798</div>
							<div class="CwordBox">
								<div class="quan gray"></div>
								<div>离线</div>
							</div>
						</div>
					</div>
					<div class="conRight" id="myEcharts2">	
					</div>
				</div>
			</div>
			<div class="wulianBotBox">
				<div class="wulianBotBoxT">
					<div class="T_blue"></div>
					<span class="T_span">设备</span>
				</div>
				<div class="wulianBotBoxBot">
					<div class="conLeft">
						<div class="Ltitle">总数</div>
						<div class="Lnum">8523</div>
					</div>
					<div class="conCon">
						<div class="CnumBox">
							<div class="Cnum">7425</div>
							<div class="CwordBox1">
								<div class="quan purple"></div>
								<div>已绑定</div>
							</div>
						</div>
						<div class="CnumBox">
							<div class="Cnum">798</div>
							<div class="CwordBox1">
								<div class="quan red"></div>
								<div>未绑定</div>
							</div>
						</div>
					</div>
					<div class="conRight" id="myEcharts3">	
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import myhead from '../../components/myhead.vue'
	export default {
		components: {
			myhead
		},
		data(){
			return{
				
			}
		},
		methods:{
			drawChart1() {
				// 基于准备好的dom，初始化echarts实例
				let myChart = this.$echarts.init(document.getElementById("myEcharts1"));
				// 指定图表的配置项和数据
				var option = {
					tooltip: {
						trigger: 'item',
						formatter: '{a} <br/>{b}: {c} ({d}%)'
					},
					legend: {
						orient: 'vertical',
						data: ['在线', '离线','告警','故障'],
						y: 'center',
						x: 'right', //居右显示
						itemGap: 20, //图例间隔
						icon: 'circle', //图例形状 circle圆形
					},
					color: ['#35fb3e', '#a0a0a0', '#f8701e', '#fb0c28'],
					series: [{
						name: '访问来源',
						type: 'pie',
						radius: ['50%', '70%'],
						avoidLabelOverlap: false,
						label: {
							show: false,
							position: 'center'
						},
						emphasis: {
							label: {
								show: true,
								fontSize: '16',
								fontWeight: 'bold'
							}
						},
						labelLine: {
							show: false
						},
						data: [{
								value: 7425,
								name: '在线'
							},
							{
								value: 798,
								name: '离线'
							},
							{
								value: 423,
								name: '告警'
							},
							{
								value: 215,
								name: '故障'
							},
						]
					}]
				};
				// 使用刚指定的配置项和数据显示图表。
				myChart.setOption(option);
			},
		drawChart2() {
				// 基于准备好的dom，初始化echarts实例
				let myChart = this.$echarts.init(document.getElementById("myEcharts2"));
				// 指定图表的配置项和数据
				var option = {
					tooltip: {
						trigger: 'item',
						formatter: '{a} <br/>{b}: {c} ({d}%)'
					},
					legend: {
						orient: 'vertical',
						data: ['在线', '离线'],
						y: 'center',
						x: 'right', //居右显示
						itemGap: 20, //图例间隔
						icon: 'circle', //图例形状 circle圆形
					},
					color: ['#35fb3e', '#a0a0a0'],
					series: [{
						name: '访问来源',
						type: 'pie',
						radius: ['50%', '70%'],
						avoidLabelOverlap: false,
						label: {
							show: false,
							position: 'center'
						},
						emphasis: {
							label: {
								show: true,
								fontSize: '16',
								fontWeight: 'bold'
							}
						},
						labelLine: {
							show: false
						},
						data: [{
								value: 7425,
								name: '在线'
							},
							{
								value: 798,
								name: '离线'
							},
						]
					}]
				};
				// 使用刚指定的配置项和数据显示图表。
				myChart.setOption(option);
			},
		drawChart3() {
				// 基于准备好的dom，初始化echarts实例
				let myChart = this.$echarts.init(document.getElementById("myEcharts3"));
				// 指定图表的配置项和数据
				var option = {
					tooltip: {
						trigger: 'item',
						formatter: '{a} <br/>{b}: {c} ({d}%)'
					},
					legend: {
						orient: 'vertical',
						data: ['已绑定', '未绑定'],
						y: 'center',
						x: 'right', //居右显示
						itemGap: 20, //图例间隔
						icon: 'circle', //图例形状 circle圆形
					},
					color: ['#ab24f8','#fb0c28'],
					series: [{
						name: '访问来源',
						type: 'pie',
						radius: ['50%', '70%'],
						avoidLabelOverlap: false,
						label: {
							show: false,
							position: 'center'
						},
						emphasis: {
							label: {
								show: true,
								fontSize: '16',
								fontWeight: 'bold'
							}
						},
						labelLine: {
							show: false
						},
						data: [{
								value: 7425,
								name: '已绑定'
							},
							{
								value: 1595,
								name: '未绑定'
							},
						]
					}]
				};
				// 使用刚指定的配置项和数据显示图表。
				myChart.setOption(option);
			},
		},
		created(){
			this.$nextTick(() => {
				this.drawChart1();
				this.drawChart2();
				this.drawChart3();
			});
		},
	}
</script>

<style scoped="scoped">
	.oneCard-right {
		display: flex;
		flex: 1;
		flex-direction: column;
		background-color: white;
		border-top-left-radius: 50px;
		border-bottom-left-radius: 50px;
	}
	.wulianBotBoxBot{
		width: 100%;
		height:270px;
		display: flex;
		flex-direction: row;
	}
	
	.CwordBox{
		display: flex;
		flex-direction: row;
		justify-content:space-between;
		width: 50px;
		align-items: center;
		margin: 0 auto;
	}
	
	.CwordBox1{
		display: flex;
		flex-direction: row;
		justify-content:space-between;
		width: 65px;
		align-items: center;
		margin: 0 auto;
	}
	
	.Cnum{
		font-size: 30px;
		color: #0000FF;
		font-weight: 600;
	}
	
	.quan{
		width: 15px;
		height: 15px;
		border-radius: 50%;
		
	}
	
	.green{
		background-color: #35fb3e;
	}
	
	.gray{
		background-color: #a0a0a0;
	}
	
	.orange{
		background-color: #f8701e;
	}
	
	.red{
		background-color: #fb0c28;
	}
	
	.purple{
		background-color: #ab24f8;
	}
	
	.CnumBox{
		display: flex;
		flex-direction: column;
		height: 50px;
		justify-content: space-between;
	}
	
	.conCon{
		display: flex;
		flex:1;
		flex-direction: row;
		align-items: center;
		justify-content: space-around;
	}
	
	.conRight{
		width: 30%;
		height: 100%;
	}
	
	.Ltitle{
		font-size: 14px;
		width: 60%;
		margin: 0 auto;
	}
	
	.Lnum{
		font-size: 50px;
		height: 140px;
		color:#0000FF;
		font-weight: 600;
	}
	
	.conLeft{
		display: flex;
		flex-direction: column;
		width:20%;
		height: 100%;
		align-items: center;
		justify-content: space-around;
	}
	
	.wulianBotBoxT{
		display: flex;
		flex-direction: row;
		align-items: center;
		
	}
	
	.T_span{
		font-size: 18px;
		margin-left: 5px;
	}
	
	.wulianBotBox{
		width: 100%;
		height: 32%;
	}
	
	.T_blue{
		width: 5px;
		height: 15px;
		background-color: #0000FF;
	}
	
	.wulianBot{
		width: 95%;
		margin: 0 auto;
		height: 85%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	
	.UserAssets-right-top {
		display: flex;
		flex-direction: row;
		width: 95%;
		margin: 20px auto;
		margin-top: 40px;
	}
	
	.user-left {
		flex: 1;
	}
	
	.users-right {
		width: 150px;
	}
	
	.user-word {
		width: 47px;
		height: 23px;
		font-family: PingFangSC-Regular;
		font-size: 24px;
		font-weight: normal;
		font-stretch: normal;
		line-height: 24px;
		letter-spacing: 1px;
		color: #000000;
	}
</style>
