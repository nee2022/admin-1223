<template>
	<div class="oneCard-right">
		<div class="UserAssets-right-top">
			<div class="user-left">
				<span class="user-word">用户数据</span>
			</div>
			<div class="users-right">
				<myhead></myhead>
			</div>
		</div>
		<div class="kanbanCon">
			<div class="kanbanConTab">
				<div v-for="item in tabList" style="cursor:pointer;">
					<div class="kanbanConTabW" :class="{ chooseB:item.id == isBg }" @click="changeBg(item.id)">
						{{item.name}}
					</div>
				</div>
			</div>
			<div class="kanbanConBox" v-show="flag == 1">
				<div class="kanbanConTop">
					<div class="kanbanConTopWord">
						<div class="kanbanConTopW1">用户总数</div>
						<div class="kanbanConTopW2">8564</div>
					</div>
					<div class="kanbanConTopWord">
						<div class="kanbanConTopW1">用户钱包余额总数</div>
						<div>
							<span class="kanbanConTopW3">1323</span>
							<span class="kanbanConTopW4">元</span>
						</div>
					</div>
					<div class="kanbanConTopWord">
						<div class="kanbanConTopW1">手机用户数量</div>
						<div class="kanbanConTopW2">2323</div>
					</div>
					<div class="kanbanConTopWord">
						<div class="kanbanConTopW1">微信用户数量</div>
						<div class="kanbanConTopW2">2314</div>
					</div>
					<div class="kanbanConTopWord">
						<div class="kanbanConTopW1">支付宝用户数量</div>
						<div class="kanbanConTopW2">1323</div>
					</div>
					<div class="kanbanConTopWord">
						<div class="kanbanConTopW1">实名认证用户数量</div>
						<div class="kanbanConTopW2">5323</div>
					</div>
				</div>
				<div class="kanbanBotCon">
					<div class="kanbanBotConL">
						<div class="kanbanBotConLTitle">
							<div class="blue"></div><span style="margin-left: 5px;font-size: 16px;">用户数量占比情况</span>
						</div>
						<div class="jindutiaoBox">
							<div class="jindu1">
								<div class="jindu1W">手机用户数占比</div>
								<div class="tiao">
									<el-progress :percentage="78" :stroke-width="15"></el-progress>
								</div>
							</div>
							<div class="jindu2">
								<div class="jindu1W">微信用户数占比</div>
								<div class="tiao">
									<el-progress :percentage="37" :stroke-width="15"></el-progress>
								</div>
							</div>
							<div class="jindu3">
								<div class="jindu1W">支付宝用户数占比</div>
								<div class="tiao">
									<el-progress :percentage="45" :stroke-width="15"></el-progress>
								</div>
							</div>
						</div>
					</div>
					<div class="kanbanBotConR">
						<div class="kanbanBotConLTitle">
							<div class="blue"></div>
							<span style="margin-left: 5px;font-size: 16px;">用户实名认证情况</span>
						</div>
						<div class="kanbanConRImg" id="myEcharts">
						</div>
					</div>
				</div>
				<div class="kanbanBotBot">
					<div class="zhexianTitle">
						<div class="kanbanBotBotLTitle">
							<div class="blue"></div>
							<span style="margin-left: 5px;font-size: 16px;">用户实名认证情况</span>
						</div>
						<div class="kanbanBotBotRTitle">
							<div class="chooseData1">
								<div v-for="item in date">
									<div :class="{ chooseBg:item.id == isBg2 }" @click="changeBg2(item.id)">
										{{item.name}}
									</div>
								</div>
							</div>
							<div class="chooseData2">
								<template>
									<div class="block">
										<el-date-picker v-model="value1" type="daterange" range-separator="至" start-placeholder="开始日期"
										 end-placeholder="结束日期">
										</el-date-picker>
									</div>
								</template>
							</div>
						</div>
					</div>
					<div class="zhexianBox" id="myEcharts1">
					</div>
				</div>
			</div>
			<div class="kanbanConBox" v-show="flag == 2">
				<div class="kanbanConTop2">
					<div class="kanbanConTopWord1">
						<div class="kanbanConTopW1">总量</div>
						<div class="kanbanConTopWBox">
							<div class="wordBox">
								<div class="kanbanConTopW2">8564</div>
								<div class="bluebox">总数</div>
							</div>
							<div class="wordBox">
								<div>
									<span class="kanbanConTopW3">1323</span>
									<span class="kanbanConTopW4">元</span>
								</div>
								<div class="bluebox">余额</div>
							</div>
						</div>
					</div>
					<div class="kanbanConTopWord1">
						<div class="kanbanConTopW1">鉴权卡</div>
						<div class="kanbanConTopWBox">
							<div class="wordBox">
								<div class="kanbanConTopW2">8564</div>
								<div class="bluebox">总数</div>
							</div>
							<div class="wordBox">
								<div>
									<span class="kanbanConTopW3">1323</span>
									<span class="kanbanConTopW4">元</span>
								</div>
								<div class="bluebox">余额</div>
							</div>
						</div>
					</div>
					<div class="kanbanConTopWord1">
						<div class="kanbanConTopW1">储值卡</div>
						<div class="kanbanConTopWBox">
							<div class="wordBox">
								<div class="kanbanConTopW2">8564</div>
								<div class="bluebox">总数</div>
							</div>
							<div class="wordBox">
								<div>
									<span class="kanbanConTopW3">1323</span>
									<span class="kanbanConTopW4">元</span>
								</div>
								<div class="bluebox">余额</div>
							</div>
						</div>
					</div>
					<div class="kanbanConTopWord1">
						<div class="kanbanConTopW1">离线卡</div>
						<div class="kanbanConTopWBox">
							<div class="wordBox">
								<div class="kanbanConTopW2">8564</div>
								<div class="bluebox">总数</div>
							</div>
							<div class="wordBox">
								<div>
									<span class="kanbanConTopW3">1323</span>
									<span class="kanbanConTopW4">元</span>
								</div>
								<div class="bluebox">余额</div>
							</div>
						</div>
					</div>
				</div>
				<div class="kanbanBotCon">
					<div class="kanbanBotConL1">
						<div class="kanbanBotConLTitle">
							<div class="blue"></div><span style="margin-left: 5px;font-size: 16px;">一卡通各种类占比情况</span>
						</div>
						<div class="jindutiaoBox2" id="myEcharts5">
							
						</div>
					</div>
					<div class="kanbanBotConR1">
						<div class="kanbanBotConLTitle">
							<div class="blue"></div>
							<span style="margin-left: 5px;font-size: 16px;">用户实名认证情况</span>
						</div>
						<div class="kanbanConRImg1" id="myEcharts6">
						</div>
					</div>
				</div>
				<div class="kanbanBotBot">
					<div class="zhexianTitle">
						<div class="kanbanBotBotLTitle">
							<div class="blue"></div>
							<span style="margin-left: 5px;font-size: 16px;">优惠券数量、余额增长曲线</span>
						</div>
						<div class="kanbanBotBotRTitle">
							<div class="chooseData1">
								<div v-for="item in date">
									<div :class="{ chooseBg:item.id == isBg2 }" @click="changeBg2(item.id)">
										{{item.name}}
									</div>
								</div>
							</div>
							<div class="chooseData2">
								<template>
									<div class="block">
										<el-date-picker v-model="value1" type="daterange" range-separator="至" start-placeholder="开始日期"
										 end-placeholder="结束日期">
										</el-date-picker>
									</div>
								</template>
							</div>
						</div>
					</div>
					<div class="zhexianBox" id="myEcharts4">
					</div>
				</div>
			</div>
			<div class="kanbanConBox" v-show="flag == 3">
				<div class="kanbanConTop1">
					<div class="kanbanConTopWord1">
						<div class="kanbanConTopW1">总量</div>
						<div class="kanbanConTopWBox">
							<div class="wordBox">
								<div class="kanbanConTopW2">8564</div>
								<div class="bluebox">总数</div>
							</div>
							<div class="wordBox">
								<div>
									<span class="kanbanConTopW3">1323</span>
									<span class="kanbanConTopW4">元</span>
								</div>
								<div class="bluebox">余额</div>
							</div>
						</div>
					</div>
					<div class="kanbanConTopWord1">
						<div class="kanbanConTopW1">消费</div>
						<div class="kanbanConTopWBox">
							<div class="wordBox">
								<div class="kanbanConTopW2">8564</div>
								<div class="bluebox">总数</div>
							</div>
							<div class="wordBox">
								<div>
									<span class="kanbanConTopW3">1323</span>
									<span class="kanbanConTopW4">元</span>
								</div>
								<div class="bluebox">余额</div>
							</div>
						</div>
					</div>
					<div class="kanbanConTopWord1">
						<div class="kanbanConTopW1">过期</div>
						<div class="kanbanConTopWBox">
							<div class="wordBox">
								<div class="kanbanConTopW2">8564</div>
								<div class="bluebox">总数</div>
							</div>
							<div class="wordBox">
								<div>
									<span class="kanbanConTopW3">1323</span>
									<span class="kanbanConTopW4">元</span>
								</div>
								<div class="bluebox">余额</div>
							</div>
						</div>
					</div>
				</div>
				<div class="kanbanBotBot1">
					<div class="zhexianTitle">
						<div class="kanbanBotBotLTitle">
							<div class="blue"></div>
							<span style="margin-left: 5px;font-size: 16px;">用户实名认证情况</span>
						</div>
						<div class="kanbanBotBotRTitle">
							<div class="chooseData1">
								<div v-for="item in date">
									<div :class="{ chooseBg:item.id == isBg2 }" @click="changeBg2(item.id)">
										{{item.name}}
									</div>
								</div>
							</div>
							<div class="chooseData2">
								<template>
									<div class="block">
										<el-date-picker v-model="value1" type="daterange" range-separator="至" start-placeholder="开始日期"
										 end-placeholder="结束日期">
										</el-date-picker>
									</div>
								</template>
							</div>
						</div>
					</div>
					<div class="zhexianBox" id="myEcharts2">
					</div>
				</div>
			</div>
			<div class="kanbanConBox" v-show="flag == 4">
				<div class="kanbanConTop1">
					<div class="kanbanConTopWord1">
						<div class="kanbanConTopW1">总量</div>
						<div class="kanbanConTopWBox">
							<div class="wordBox">
								<div class="kanbanConTopW2">8564</div>
								<div class="bluebox">总数</div>
							</div>
							<div class="wordBox">
								<div>
									<span class="kanbanConTopW3">1323</span>
									<span class="kanbanConTopW4">元</span>
								</div>
								<div class="bluebox">余额</div>
							</div>
						</div>
					</div>
					<div class="kanbanConTopWord1">
						<div class="kanbanConTopW1">消费</div>
						<div class="kanbanConTopWBox">
							<div class="wordBox">
								<div class="kanbanConTopW2">8564</div>
								<div class="bluebox">总数</div>
							</div>
							<div class="wordBox">
								<div>
									<span class="kanbanConTopW3">1323</span>
									<span class="kanbanConTopW4">元</span>
								</div>
								<div class="bluebox">余额</div>
							</div>
						</div>
					</div>
				</div>
				<div class="kanbanBotBot1">
					<div class="zhexianTitle">
						<div class="kanbanBotBotLTitle">
							<div class="blue"></div>
							<span style="margin-left: 5px;font-size: 16px;">套餐总数、余额增长曲线</span>
						</div>
						<div class="kanbanBotBotRTitle">
							<div class="chooseData1">
								<div v-for="item in date">
									<div :class="{ chooseBg:item.id == isBg2 }" @click="changeBg2(item.id)">
										{{item.name}}
									</div>
								</div>
							</div>
							<div class="chooseData2">
								<template>
									<div class="block">
										<el-date-picker v-model="value1" type="daterange" range-separator="至" start-placeholder="开始日期"
										 end-placeholder="结束日期">
										</el-date-picker>
									</div>
								</template>
							</div>
						</div>
					</div>
					<div class="zhexianBox" id="myEcharts3">
					</div>
				</div>
			</div>
			<div class="kanbanConBox" v-show="flag == 6">
				<div class="kanbanConTop2">
					<div class="kanbanConTopWord">
						<div class="kanbanConTopW1">无感支付总数</div>
						<div class="kanbanConTopW2">9565</div>
					</div>
					<div class="kanbanConTopWord">
						<div class="kanbanConTopW1">钱包</div>
						<div class="kanbanConTopW2">2314</div>
					</div>
					<div class="kanbanConTopWord">
						<div class="kanbanConTopW1">微信</div>
						<div class="kanbanConTopW2">1323</div>
					</div>
					<div class="kanbanConTopWord">
						<div class="kanbanConTopW1">支付宝</div>
						<div class="kanbanConTopW2">5323</div>
					</div>
				</div>
				<div class="kanbanBotCon">
					<div class="kanbanBotConL6">
						<div class="kanbanBotConLTitle">
							<div class="blue"></div><span style="margin-left: 5px;font-size: 16px;">无感支付各种类占比情况</span>
						</div>
						<div class="jindutiaoBox6">
							<div id="myEcharts7"></div>
							<div id="myEcharts8"></div>
							<div id="myEcharts9"></div>
						</div>
					</div>
				</div>
				<div class="kanbanBotBot">
					<div class="zhexianTitle">
						<div class="kanbanBotBotLTitle">
							<div class="blue"></div>
							<span style="margin-left: 5px;font-size: 16px;">优惠券数量、余额增长曲线</span>
						</div>
						<div class="kanbanBotBotRTitle">
							<div class="chooseData1">
								<div v-for="item in date">
									<div :class="{ chooseBg:item.id == isBg2 }" @click="changeBg2(item.id)">
										{{item.name}}
									</div>
								</div>
							</div>
							<div class="chooseData2">
								<template>
									<div class="block">
										<el-date-picker v-model="value1" type="daterange" range-separator="至" start-placeholder="开始日期"
										 end-placeholder="结束日期">
										</el-date-picker>
									</div>
								</template>
							</div>
						</div>
					</div>
					<div class="zhexianBox" id="myEcharts10">
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
		data() {
			return {
				tabList: [{
						name: '用户数',
						id: 1
					},
					{
						name: '一卡通',
						id: 2
					},
					{
						name: '优惠券',
						id: 3
					},
					{
						name: '套餐',
						id: 4
					},
					
					{
						name: '无感支付',
						id: 6
					}
				],
				isBg: 1,
				isBg2: 1,
				flag: 1,
				value1: '',
				date: [{
						name: '近一周',
						id: 1
					},
					{
						name: '近一月',
						id: 2
					},
					{
						name: '近一年',
						id: 3
					}
				],
			}
		},
		created() {
			this.$nextTick(() => {
				this.drawChart();
				this.drawChart1();
			});
		},
		mounted(){
			
		},
		methods: {
			changeBg(id) {
				this.isBg = id;
				this.flag = id;
				if(id==1){
					this.$nextTick(() => {
						this.drawChart();
						this.drawChart1();
					});
				}else if(id==3){
					this.$nextTick(() => {
						this.drawChart2();
					});
				}else if(id==4){
					this.$nextTick(() => {
						this.drawChart3();
					});
				}
				else if(id==2){
					this.$nextTick(() => {
						this.drawChart4();
						this.drawChart5();
						this.drawChart6();
					});
				}else if(id==6){
					this.$nextTick(() => {
						this.drawChart7();
						this.drawChart8();
						this.drawChart9();
						this.drawChart10();
					});
				}
			},
			changeBg2(id) {
				this.isBg2 = id;
			},
			drawChart1() {
				// 基于准备好的dom，初始化echarts实例
				let myChart = this.$echarts.init(document.getElementById("myEcharts1"));
				// 指定图表的配置项和数据
				var option = {
					tooltip: {
						trigger: 'axis'
					},
					color: ['#ff7200', '#00cc57', '#238ae1'],
					grid: {

					},
					legend: {
						data: ['手机用户', '微信用户', '支付宝用户'],
						orient: 'horizontal', //垂直显示
						y: 'bottom', //延Y轴居中
						x: 'center', //居右显示
						textStyle: {
							fontSize: 16
						},
						// show: true,
						// borderWidth: 2,
						// shadowColor: 'rgba(0, 0, 0, 0.5)',
						// shadowBlur: 5,
						// borderRadius: 10,
						// padding: [20, 10],

					},
					xAxis: {
						data: ['2020-10-1', '2020-9-7', '2020-7-5', '2020-9-7', '2020-9-13'],
						fontSize: 18,
					},
					yAxis: {
						type: 'value',
						name: '单位:人数'
					},
					series: [{
							name: '手机用户',
							type: 'line',
							data: [8313, 5632, 4641, 6734, 2421],
							smooth: true,
						},
						{
							name: '微信用户',
							type: 'line',
							data: [2313, 3432, 4641, 1234, 3421],
							smooth: true,
						},
						{
							name: '支付宝用户',
							type: 'line',
							data: [6413, 432, 1541, 2434, 3321],
							smooth: true,
						}
					]
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
						trigger: 'axis'
					},
					color: ['#ff7200', '#00cc57', '#238ae1'],
					grid: {
			
					},
					legend: {
						data: ['手机用户', '微信用户', '支付宝用户'],
						orient: 'horizontal', //垂直显示
						y: 'bottom', //延Y轴居中
						x: 'center', //居右显示
						itemGap: 100, //图例间隔
						textStyle: {
							fontSize: 16
						},
						// show: true,
						// borderWidth: 2,
						// shadowColor: 'rgba(0, 0, 0, 0.5)',
						// shadowBlur: 5,
						// borderRadius: 10,
						// padding: [20, 10],
			
					},
					xAxis: {
						data: ['2020-10-1', '2020-9-7', '2020-7-5', '2020-9-7', '2020-9-13'],
						fontSize: 18,
					},
					yAxis: {
						type: 'value',
						name: '单位:人数'
					},
					series: [{
							name: '手机用户',
							type: 'line',
							data: [8313, 5632, 4641, 6734, 2421],
							smooth: true,
						},
						{
							name: '微信用户',
							type: 'line',
							data: [2313, 3432, 4641, 1234, 3421],
							smooth: true,
						},
						{
							name: '支付宝用户',
							type: 'line',
							data: [6413, 432, 1541, 2434, 3321],
							smooth: true,
						}
					]
				};
				// 使用刚指定的配置项和数据显示图表。
				myChart.setOption(option);
			},
			drawChart4() {
				// 基于准备好的dom，初始化echarts实例
				let myChart = this.$echarts.init(document.getElementById("myEcharts4"));
				// 指定图表的配置项和数据
				var option = {
					tooltip: {
						trigger: 'axis'
					},
					color: ['#ff7200', '#00cc57', '#238ae1'],
					grid: {
			
					},
					legend: {
						data: ['手机用户', '微信用户', '支付宝用户'],
						orient: 'horizontal', //垂直显示
						y: 'bottom', //延Y轴居中
						x: 'center', //居右显示
						itemGap: 100, //图例间隔
						textStyle: {
							fontSize: 16
						},
						// show: true,
						// borderWidth: 2,
						// shadowColor: 'rgba(0, 0, 0, 0.5)',
						// shadowBlur: 5,
						// borderRadius: 10,
						// padding: [20, 10],
			
					},
					xAxis: {
						data: ['2020-10-1', '2020-9-7', '2020-7-5', '2020-9-7', '2020-9-13'],
						fontSize: 18,
					},
					yAxis: {
						type: 'value',
						name: '单位:人数'
					},
					series: [{
							name: '手机用户',
							type: 'line',
							data: [8313, 5632, 4641, 6734, 2421],
							smooth: true,
						},
						{
							name: '微信用户',
							type: 'line',
							data: [2313, 3432, 4641, 1234, 3421],
							smooth: true,
						},
						{
							name: '支付宝用户',
							type: 'line',
							data: [6413, 432, 1541, 2434, 3321],
							smooth: true,
						}
					]
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
						trigger: 'axis'
					},
					color: ['#ff7200', '#00cc57', '#238ae1'],
					grid: {
			
					},
					legend: {
						data: ['手机用户', '微信用户', '支付宝用户'],
						orient: 'horizontal', //垂直显示
						y: 'bottom', //延Y轴居中
						x: 'center', //居右显示
						itemGap: 100, //图例间隔
						textStyle: {
							fontSize: 16
						},
						// show: true,
						// borderWidth: 2,
						// shadowColor: 'rgba(0, 0, 0, 0.5)',
						// shadowBlur: 5,
						// borderRadius: 10,
						// padding: [20, 10],
			
					},
					xAxis: {
						data: ['2020-10-1', '2020-9-7', '2020-7-5', '2020-9-7', '2020-9-13'],
						fontSize: 18,
					},
					yAxis: {
						type: 'value',
						name: '单位:人数'
					},
					series: [{
							name: '手机用户',
							type: 'line',
							data: [8313, 5632, 4641, 6734, 2421],
							smooth: true,
						},
						{
							name: '微信用户',
							type: 'line',
							data: [2313, 3432, 4641, 1234, 3421],
							smooth: true,
						},
						{
							name: '支付宝用户',
							type: 'line',
							data: [6413, 432, 1541, 2434, 3321],
							smooth: true,
						}
					]
				};
				// 使用刚指定的配置项和数据显示图表。
				myChart.setOption(option);
			},
			drawChart() {
				// 基于准备好的dom，初始化echarts实例
				let myChart = this.$echarts.init(document.getElementById("myEcharts"));
				// 指定图表的配置项和数据
				var option = {
					tooltip: {
						trigger: 'item',
						formatter: '{a} <br/>{b}: {c} ({d}%)'
					},
					legend: {
						orient: 'horizontal',
						data: ['未实名用户', '已实名用户'],
						y: 'bottom', //延Y轴居中
						x: 'center', //居右显示
						itemGap: 120, //图例间隔
						icon: 'circle', //图例形状 circle圆形
					},
					color: ['#0000FF', '#f7f752'],
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
								value: 335,
								name: '未实名用户'
							},
							{
								value: 3310,
								name: '已实名用户'
							},
						]
					}]
				};
				// 使用刚指定的配置项和数据显示图表。
				myChart.setOption(option);
			},
			drawChart5() {
				// 基于准备好的dom，初始化echarts实例
				let myChart = this.$echarts.init(document.getElementById("myEcharts5"));
				// 指定图表的配置项和数据
				var option = {
					tooltip: {
						trigger: 'item',
						formatter: '{a} <br/>{b}: {c} ({d}%)'
					},
					legend: {
						orient: 'vertical',
						data: ['鉴权卡总数', '储值卡总数','离线卡总数'],
						y:'center',
						x: 'right', //居右显示
						itemGap: 50, //图例间隔
						icon: 'circle', //图例形状 circle圆形
					},
					color: ['#79f390', '#63bdf4','#f46465'],
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
								value: 1335,
								name: '鉴权卡总数'
							},
							{
								value: 3310,
								name: '储值卡总数'
							},
							{
								value: 2310,
								name: '离线卡总数'
							},
						]
					}]
				};
				// 使用刚指定的配置项和数据显示图表。
				myChart.setOption(option);
			},
			drawChart6() {
				// 基于准备好的dom，初始化echarts实例
				let myChart = this.$echarts.init(document.getElementById("myEcharts6"));
				// 指定图表的配置项和数据
				var option = {
					tooltip: {
						trigger: 'item',
						formatter: '{a} <br/>{b}: {c} ({d}%)'
					},
					legend: {
						orient: 'vertical',
						data: ['鉴权卡余额', '储值卡余额','离线卡余额'],
						y:'center',
						x: 'right', //居右显示
						itemGap: 50, //图例间隔
						icon: 'circle', //图例形状 circle圆形
					},
					color: ['#ff0f00', '#fe9e02','#f7f752'],
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
								value: 335,
								name: '鉴权卡余额'
							},
							{
								value: 3310,
								name: '储值卡余额'
							},
							{
								value: 2310,
								name: '离线卡余额'
							},
						]
					}]
				};
				// 使用刚指定的配置项和数据显示图表。
				myChart.setOption(option);
			},
			drawChart7() {
				// 基于准备好的dom，初始化echarts实例
				let myChart = this.$echarts.init(document.getElementById("myEcharts7"));
				// 指定图表的配置项和数据
				var option = {
					tooltip: {
						trigger: 'item',
						formatter: '{a} <br/>{b}: {c} ({d}%)'
					},
					legend: {
						orient: 'horizontal',
						data: ['总数', '钱包'],
						y:'bottom',
						x: 'center', //居右显示
						itemGap: 50, //图例间隔
						icon: 'circle', //图例形状 circle圆形
					},
					color: ['#4654f9', '#f74850'],
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
								value: 9666,
								name: '总数'
							},
							{
								value: 6710,
								name: '钱包'
							},
						]
					}]
				};
				// 使用刚指定的配置项和数据显示图表。
				myChart.setOption(option);
			},
			drawChart8() {
				// 基于准备好的dom，初始化echarts实例
				let myChart = this.$echarts.init(document.getElementById("myEcharts8"));
				// 指定图表的配置项和数据
				var option = {
					tooltip: {
						trigger: 'item',
						formatter: '{a} <br/>{b}: {c} ({d}%)'
					},
					legend: {
						orient: 'horizontal',
						data: ['总数', '支付宝'],
						y:'bottom',
						x: 'center', //居右显示
						itemGap: 50, //图例间隔
						icon: 'circle', //图例形状 circle圆形
					},
					color: ['#4654f9', '#2cdcf4'],
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
								value: 9666,
								name: '总数'
							},
							{
								value: 3310,
								name: '支付宝'
							},
						]
					}]
				};
				// 使用刚指定的配置项和数据显示图表。
				myChart.setOption(option);
			},
			drawChart9() {
				// 基于准备好的dom，初始化echarts实例
				let myChart = this.$echarts.init(document.getElementById("myEcharts9"));
				// 指定图表的配置项和数据
				var option = {
					tooltip: {
						trigger: 'item',
						formatter: '{a} <br/>{b}: {c} ({d}%)'
					},
					legend: {
						orient: 'horizontal',
						data: ['总数', '微信'],
						y:'bottom',
						x: 'center', //居右显示
						itemGap: 50, //图例间隔
						icon: 'circle', //图例形状 circle圆形
					},
					color: ['#4654f9', '#4af46e'],
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
								value: 9666,
								name: '总数'
							},
							{
								value: 2310,
								name: '微信'
							},
						]
					}]
				};
				// 使用刚指定的配置项和数据显示图表。
				myChart.setOption(option);
			},
			drawChart10() {
				// 基于准备好的dom，初始化echarts实例
				let myChart = this.$echarts.init(document.getElementById("myEcharts10"));
				// 指定图表的配置项和数据
				var option = {
					tooltip: {
						trigger: 'axis'
					},
					color: ['#ff7200', '#00cc57', '#238ae1','purple'],
					grid: {
			
					},
					legend: {
						data: ['无感支付总数', '钱包支付', '微信支付','支付宝支付'],
						orient: 'horizontal', //垂直显示
						y: 'bottom', //延Y轴居中
						x: 'center', //居右显示
						itemGap: 100, //图例间隔
						textStyle: {
							fontSize: 16
						},
						// show: true,
						// borderWidth: 2,
						// shadowColor: 'rgba(0, 0, 0, 0.5)',
						// shadowBlur: 5,
						// borderRadius: 10,
						// padding: [20, 10],
			
					},
					xAxis: {
						data: ['2020-10-1', '2020-9-7', '2020-7-5', '2020-9-7', '2020-9-13'],
						fontSize: 18,
					},
					yAxis: {
						type: 'value',
						name: '单位:人数'
					},
					series: [{
							name: '无感支付总数',
							type: 'line',
							data: [8313, 5632, 4641, 6734, 2421],
							smooth: true,
						},
						{
							name: '钱包支付',
							type: 'line',
							data: [2313, 3432, 4641, 1234, 3421],
							smooth: true,
						},
						{
							name: '微信支付',
							type: 'line',
							data: [6313, 3232, 1641, 7234, 5421],
							smooth: true,
						},
						{
							name: '支付宝支付',
							type: 'line',
							data: [6413, 432, 1541, 2434, 3321],
							smooth: true,
						}
					]
				};
				// 使用刚指定的配置项和数据显示图表。
				myChart.setOption(option);
			},
		}
	}
</script>

<style scoped="scoped">
	.zhexianBox {
		width: 100%;
		height: 90%;
	}
	

	.oneCard-right {
		display: flex;
		flex: 1;
		flex-direction: column;
		background-color: white;
		border-top-left-radius: 50px;
		border-bottom-left-radius: 50px;
	}

	.kanbanConTopWBox {
		display: flex;
		flex-direction: row;
		width: 80%;
		justify-content: space-between;
		height: 70px;
		align-items: ;
	}
	
	.kanbanConTopW1{
		font-size: 16px;
	}
	
	.bluebox{
		width: 50px;
		height: 20px;
		border-radius: 10px;
		background-color: #1e69fe;
		text-align: center;
		color: white;
	}
	
	.wordBox{
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		height: 70px;
	}



	.chooseData2 {
		width: 43%;
		height: 30px;
		border: solid 1px #0000FF;
		border-radius: 10px;
		overflow: hidden;
	}

	.zhexianTitle {
		width: 100%;
		display: flex;
		flex-direction: row;
		height: 30px;
	}

	.kanbanBotBotRTitle {
		display: flex;
		flex: 1;
		flex-direction: row;
		justify-content: space-between;
	}

	.chooseData1 {
		display: flex;
		flex-direction: row;
		width: 52%;
		border: solid 1px #0000FF;
		border-radius: 10px;
		cursor: pointer;
	}

	.chooseData1 div {
		display: flex;
		flex: 4;
		align-items: center;
		justify-content: center;
		border-radius: 10px;
	}

	.kanbanBotBot {
		width: 100%;
		height: 400px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	
	.kanbanBotBot1 {
		width: 100%;
		height: 600px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.kanbanBotConLTitle {
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.kanbanBotBotLTitle {
		display: flex;
		flex-direction: row;
		align-items: center;
		width: 50%;
	}

	.kanbanConRImg {
		width: 80%;
		margin: 0 auto;
		height: 210px;
	}
	
	.kanbanConRImg1 {
		width: 100%;
		margin: 0 auto;
		height: 210px;
	}

	.jindu1 {
		width: 100%;
		display: flex;
		flex-direction: row;
		height: 30px;
		align-items: center;
	}

	.jindu2 {
		width: 100%;
		display: flex;
		flex-direction: row;
		height: 30px;
		align-items: center;
	}

	.jindu3 {
		width: 100%;
		display: flex;
		flex-direction: row;
		height: 30px;
		align-items: center;
	}

	.jindutiaoBox>>>.el-progress-bar__outer {
		background-color: #7c8196;
	}

	.jindu1>>>.el-progress-bar__inner {
		background-color: #f7f752;
	}

	.jindu2>>>.el-progress-bar__inner {
		background-color: #79fc73;
	}

	.jindu3>>>.el-progress-bar__inner {
		background-color: #587af7;
	}

	.jindutiaoBox>>>.el-progress__text {
		margin-left: 15px;
		color: #000000;
	}

	.blue {
		width: 5px;
		height: 15px;
		background-color: #0000FF;
	}

	.tiao {
		width: 72%;

	}

	.jindu1W {
		width: 20%;
		font-size: 12px;
	}

	.kanbanBotConR {
		display: flex;
		flex: 1;
		height: 250px;
		flex-direction: column;
	}
	
	.kanbanBotConR1 {
		display: flex;
		width: 30%;
		height: 250px;
		flex-direction: column;
		margin-right:325px;
		justify-content: space-between;
	}

	.jindutiaoBox {
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 150px;
		justify-content: space-between;
	}
	
	.jindutiaoBox2 {
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 210px;
		justify-content: space-between;
	}
	
	.jindutiaoBox6{
		display: flex;
		flex-direction: row;
		width: 100%;
		height: 210px;
		justify-content: space-between;
	}
	
	.jindutiaoBox6 div{
		display: flex;
		flex: 4;
		height: 100%;
	}

	.kanbanBotConL {
		display: flex;
		width: 55%;
		height: 250px;
		flex-direction: column;
		justify-content: space-between;
	}
	
	.kanbanBotConL1 {
		display: flex;
		width: 30%;
		height: 250px;
		flex-direction: column;
		justify-content: space-between;
	}
	
	.kanbanBotConL6 {
		display: flex;
		width: 100%;
		height: 250px;
		flex-direction: column;
		justify-content: space-between;
	}
	

	.kanbanBotCon {
		display: flex;
		flex-direction: row;
		width: 100%;
		height: 250px;
		justify-content: space-between;
	}

	.kanbanConTopWord {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		width: 30%;
		
	}
	
	.kanbanConTopWord1 {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		height: 100px;
		width: 30%;
		
	}

	.kanbanConTop {
		display: flex;
		flex-direction: row;
		margin: 0 auto;
		width: 92%;
		height: 100px;
		justify-content: space-between;
		align-items: center;
	}
	
	.kanbanConTop1 {
		display: flex;
		flex-direction: row;
		margin: 0 auto;
		width: 85%;
		height: 120px;
		justify-content: space-between;
		align-items: center;
	}
	
	.kanbanConTop2{
		display: flex;
		flex-direction: row;
		margin: 0 auto;
		width: 92%;
		height: 120px;
		justify-content: space-between;
		align-items: center;
	}

	.kanbanConTopW4 {
		font-size: 12px;
		color: orange;
	}

	.kanbanConTopW2 {
		font-size: 36px;
		color: #0000FF;
		font-weight: 700;
	}

	.kanbanConTopW3 {
		font-size: 36px;
		color: orange;
		font-weight: 700;
	}

	.chooseB {
		width: 100%;
		border-bottom: solid 2px #0000FF;
		color: #0000FF;
	}

	.chooseBg {
		width: 100%;
		height: 30px;
		background-color: #2754fb;
		color: white;
	}

	.kanbanCon {
		width: 95%;
		margin: 0 auto;
		height: 700px;
		display: flex;
		flex-direction: column;
	}

	.kanbanConTabW {
		font-size: 15px;
	}

	.UserAssets-right-top {
		display: flex;
		flex-direction: row;
		width: 95%;
		margin: 20px auto;
		margin-top: 40px;
	}

	.kanbanConTab {
		display: flex;
		flex-direction: row;
		width: 500px;
		height: 30px;
		justify-content: space-between;
	}

	.user-left {
		width: 50%;
	}

	.users-right {
		width: 50%;
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
