<template>
	<div class="oneCard-right">
		<div class="UserAssets-right-top">
			<div class="user-left">
				<span class="user-word">电单车充电</span>
			</div>
			<div class="users-right">
				<myhead></myhead>
			</div>
		</div>
		<div class="wulianBot">
			<div class="wulianBotBox">
				<div class="wulianBotBoxT">
					<div class="T_blue"></div>
					<span class="T_span">资源</span>
				</div>
				<div class="roadBot">
					<div class="firstBox">
						<div class="firstBoxLR">
							<div class="firstBoxTop">站点数量</div>
							<div class="firstBoxBot">3548</div>
						</div>
						<div class="firstBoxLR">
							<div class="firstBoxTop">设备总量</div>
							<div class="firstBoxBot">9548</div>
						</div>
					</div>
					<div class="rightBox">
						<div class="otherBoxs">
							<div>插座</div>
							<div class="otherBoxsBot">
								<div class="otherBoxsBotBox">
									<div class="otherNum">3430</div>
									<div class="otherWord green">空闲</div>
								</div>
								<div class="otherBoxsBotBox">
									<div class="otherNum">8430</div>
									<div class="otherWord blue">占用</div>
								</div>
							</div>
						</div>
						<div class="otherBoxs">
							<div>充电桩</div>
							<div class="otherBoxsBot">
								<div class="otherBoxsBotBox">
									<div class="otherNum">3430</div>
									<div class="otherWord green">空闲</div>
								</div>
								<div class="otherBoxsBotBox">
									<div class="otherNum">8430</div>
									<div class="otherWord gray">离线</div>
								</div>
							</div>
						</div>
						<div class="otherBoxs">
							<div>网关</div>
							<div class="otherBoxsBot">
								<div class="otherBoxsBotBox">
									<div class="otherNum">3430</div>
									<div class="otherWord green">空闲</div>
								</div>
								<div class="otherBoxsBotBox">
									<div class="otherNum">8430</div>
									<div class="otherWord gray">离线</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="wulianBotBox">
				<div class="wulianBotBoxT">
					<div class="T_blue"></div>
					<span class="T_span">订单数</span>
				</div>
				<div class="ziyuanBox">
					<div class="boxBoxs">
						<div class="boxWord">订单数</div>
						<div class="boxNum">3420</div>
					</div>
					<div class="boxBoxs">
						<div class="boxWord">费用</div>
						<div class="NumBox">
							<div class="boxNum1">5420</div>
							<div class="boxNum3">元</div>
						</div>
					</div>
					<div class="boxBoxs">
						<div class="boxWord">收入</div>
						<div class="NumBox">
							<div class="boxNum1">5420</div>
							<div class="boxNum3">元</div>
						</div>
					</div>
					<div class="boxBoxs">
						<div class="boxWord">退款</div>
						<div class="NumBox">
							<div class="boxNum1">5420</div>
							<div class="boxNum3">元</div>
						</div>
					</div>
					<div class="boxBoxs">
						<div class="boxWord">优惠</div>
						<div class="NumBox">
							<div class="boxNum1">5420</div>
							<div class="boxNum3">元</div>
						</div>
					</div>
				</div>
			</div>
			<div class="wulianBotBox1">
				<div class="roadTopBox">
					<div class="wulianBotBoxT">
						<div class="T_blue"></div>
						<span class="T_span">停车场排名</span>
					</div>
					<div class="roadConBox">
						<div class="jindutiaoBox" v-for="item in stationList">
							<div style="width: 2%;">{{item.id}}</div>
							<div class="tingchechangName">{{item.name}}</div>
							<div class="jindut">
								<el-progress :text-inside="true" :stroke-width="20" :percentage="item.point" :format="format" square></el-progress>
							</div>
						</div>
					</div>
					<div class="roadBotBox">
						<el-pagination background :current-page.sync.number="pagenum" @current-change="handleCurrentChange" :page-size="pagesize"
						 layout="prev, pager, next" :total="total" small>
						</el-pagination>
					</div>
				</div>
				<div class="roadTopBox">
					<div class="wulianBotBoxT">
						<div class="T_blue"></div>
						<span class="T_span">运营商排名</span>
					</div>
					<div class="roadConBox">
						<div class="jindutiaoBox" v-for="item in stationList">
							<div style="width: 2%;">{{item.id}}</div>
							<div class="tingchechangName">{{item.name}}</div>
							<div class="jindut1">
								<el-progress :text-inside="true" :stroke-width="20" :percentage="item.point" :format="format" square></el-progress>
							</div>
						</div>
					</div>
					<div class="roadBotBox">
						<el-pagination background :current-page.sync.number="pagenum" @current-change="handleCurrentChange" :page-size="pagesize"
						 layout="prev, pager, next" :total="total" small>
						</el-pagination>
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
				total:1000,
				pagenum:1,
				pagesize: 10,
				stationList:[{
					id:1,
					name:'停车场',
					point:95
				},
				{
					id:2,
					name:'迪萨',
					point:86
				},
				{
					id:3,
					name:'过热个',
					point:75
				},
				{
					id:4,
					name:'飞洒发',
					point:65
				},
				{
					id:5,
					name:'热热的',
					point:52
				},
				{
					id:6,
					name:'安哥',
					point:41
				},
				{
					id:7,
					name:'公司的',
					point:35
				},
				{
					id:8,
					name:'哇嘎',
					point:25
				},
				{
					id:9,
					name:'各大公司',
					point:17
				},
				{
					id:10,
					name:'大苏打',
					point:8
				}]
			}
		},
		methods: {
			format(percentage) {
				return percentage = '8934';
			},
			handleCurrentChange(newPage) {
				console.log(1)
			},
		},
		created() {

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

	.jindut {
		flex: 1;
	}
	
	.firstBoxLR{
		width: 50%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
	}
	
	.NumBox{
		display: flex;
		flex-direction: row;
		align-items: flex-end;
	}
	
	.jindut1{
		flex: 1;
	}
	
	.jindut1>>>.el-progress-bar__inner {
		border-radius: 5px;
		background-color: ;
		background-image: linear-gradient(93deg, 
				rgba(254, 220, 69, 1) 0%, 
				#fb7099 100%);
	}
	
	.jindut1>>>.el-progress-bar__outer {
		border-radius: 5px;
		background-color: #ddecfb;
	}

	.jindut>>>.el-progress-bar__inner {
		border-radius: 5px;
		background-color: ;
		background-image: linear-gradient(88deg,
			#3fbbfe 0%,
			#a541ff 100%);
	}

	.jindut>>>.el-progress-bar__outer {
		border-radius: 5px;
		background-color: #ddecfb;
	}

	.tingchechangName {
		width: 12%;
		text-align: center;
	}

	.roadConBox {
		width: 100%;
		height: 370px;
		display: flex;
		flex-direction: column;
	}

	.jindutiaoBox {
		width: 100%;
		height: 10%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}

	.roadBotBox {
		display: flex;
		flex: 1;
		flex-direction: row;
		justify-content: flex-end;
		align-items: center;
	}

	.boxNum {
		font-size: 30px;
		font-weight: 600;
		color: #0000FF;
	}

	.roadTopBox {
		display: flex;
		flex-direction: column;
		width: 49%;
		height: 100%;
	}

	.boxNum1 {
		font-size: 30px;
		font-weight: 600;
		color: #f8701e;
	}
	
	.boxNum3{
		color: #f8701e;
	}

	.boxBoxs {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
		height: 70px;
	}

	.ziyuanBox {
		width: 100%;
		height: 100%;
		justify-content: space-around;
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.boxBoxs {
		width: 15%;
	}

	.otherWord {
		height: 20px;
		width: 50px;
		color: white;
		border-radius: 10px;
		text-align: center;
		line-height: 20px;
	}

	.otherBoxsBot {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		width: 100%;
	}

	.otherNum {
		color: #0000FF;
		font-size: 30px;
		font-weight: 600;
	}

	.otherBoxsBotBox {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		width: 45%;
		align-items: center;
		height: 75px;
	}

	.rightBox {
		display: flex;
		flex-direction: row;
		width: 75%;
	}

	.otherBoxs {
		width: 33%;
		height: 120px;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
	}

	.firstBoxTop {
		height: 30px;
		line-height: 30px;
		color: white;
	}

	.firstBoxBot {
		font-size: 40px;
		color: white;
		font-weight: 600;
	}

	.firstBox {
		width: 320px;
		height: 130px;
		background-image: linear-gradient(88deg,
			#01e9bd 0%,
			#007cde 100%);
		display: flex;
		flex-direction: row;
		border-radius: 10px;
		align-items: center;
		justify-content: center;
	}

	.roadBot {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
	}

	.wulianBotBoxBot {
		width: 100%;
		height: 270px;
		display: flex;
		flex-direction: row;
	}

	.CwordBox {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		width: 50px;
		align-items: center;
		margin: 0 auto;
	}

	.CwordBox1 {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		width: 65px;
		align-items: center;
		margin: 0 auto;
	}

	.Cnum {
		font-size: 30px;
		color: #0000FF;
		font-weight: 600;
	}

	.quan {
		width: 15px;
		height: 15px;
		border-radius: 50%;

	}

	.green {
		background-color: #35fb3e;
	}

	.gray {
		background-color: #a0a0a0;
	}

	.blue {
		background-color: #0000FF;
	}

	.orange {
		background-color: #f8701e;
	}

	.red {
		background-color: #fb0c28;
	}

	.purple {
		background-color: #ab24f8;
	}

	.CnumBox {
		display: flex;
		flex-direction: column;
		height: 50px;
		justify-content: space-between;
	}

	.conCon {
		display: flex;
		flex: 1;
		flex-direction: row;
		align-items: center;
		justify-content: space-around;
	}

	.conRight {
		width: 30%;
		height: 100%;
	}

	.Ltitle {
		font-size: 14px;
		width: 60%;
		margin: 0 auto;
	}

	.Lnum {
		font-size: 50px;
		height: 140px;
		color: #0000FF;
		font-weight: 600;
	}

	.conLeft {
		display: flex;
		flex-direction: column;
		width: 20%;
		height: 100%;
		align-items: center;
		justify-content: space-around;
	}

	.wulianBotBoxT {
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.T_span {
		font-size: 18px;
		margin-left: 5px;
	}

	.wulianBotBox {
		width: 100%;
		height: 20%;
	}

	.wulianBotBox1 {
		width: 100%;
		height: 55%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	.T_blue {
		width: 5px;
		height: 15px;
		background-color: #0000FF;
	}

	.wulianBot {
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
