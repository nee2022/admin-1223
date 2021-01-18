<template>
	<div>
		<div class="tem-right-top">
			<div class="users-right">
				<div class="users-right-w">
					<div>
						<img src="../assets/images/help.png" />
					</div>
					<div>
						<img src="../assets/images/set up.png" />
					</div>
					<div class="user-img" @click="change">
						<img src="../assets/images/Head portrait.png" style="height: 40px;width: 40px;" />
					</div>
					<div>
						<span>{{ admin.fullname }}</span>
					</div>
					<!-- <div class="changeList">
						<div @click="flag" v-if="changeList == false">
							<img src="../assets/images/changeList.png" alt="" style="width: 35px;height: 35px;">
						</div>
						<div @click="flags" v-show="changeList == true">
							<img src="../assets/images/changeIcon.png" alt="" style="width: 35px;height: 35px;">
						</div>
					</div> -->
				</div>
			</div>
		</div>

		<div v-if="falg">
			<div class="hei"></div>
			<div class="aside">
				<div class="head">
					<span :class="{ co: falgss }" @click="chan">账号</span>
					<span :class="{ co: falgs }" @click="xian">产品</span>
					<img @click="change" class="img1" src="../assets/images/cancel.png" />
				</div>
				<div :class="{ display: falgs }">
					<div class="zhanghu">
						<span>我的账户</span>
						<a href="/#/centre">
							<span class="e" style="color: #1e69fe">个人中心</span>
						</a>
					</div>
					<div class="touxian">
						<img src="../assets/images/timgr.png" alt="" />
						<div class="nicheng">
							<span>昵称：<span>{{ admin.fullname }}</span></span>
							<div>个人实名认证</div>
						</div>
					</div>
					<div class="cont">
						<div class="one">
							<div>账号：</div>
							<span>{{ admin.username }}</span>
						</div>
						<div class="one">
							<div>手机号：</div>
							<span>{{ admin.telephone }}</span>
						</div>
						<div class="one">
							<div>余额：</div>
							<span>￥<span>{{ admin.creator }}</span></span>
							<span class="chong">充值</span>
						</div>
					</div>
					<!-- <div class="one">
          <div>收入：</div>
          <span>￥<span>0</span></span> <span class="chong">提现</span
          ><span style="color: #ff6000; margin-left: 10%">收入明细</span>
        </div> -->
				</div>

				<div :class="{ display: falgss }">
					<div class="zhanghu">
						<span>常用产品</span>
						<a href="/#/centre">
							<span style="color: #1e69fe">用户中心</span>
						</a>
					</div>
					<div>
						<div class="ping">平台管理</div>
						<div class="zi">
							<a href="/#/usersNum">
								<span>会员资产</span>
							</a>
							<a href="/#/merchantAsset/agent">
								<span>商户资产</span>
							</a>
							<a href="/#/financialManagement/allOrder">
								<span>财务管理</span>
							</a>
							<a href="/#/departmentManagement/departmentManagement">
								<span>人力资源</span>
							</a>
							<a href="/#/Pcoupon">
								<span>促销优惠</span>
							</a>
							<a href="/#/Logging"> <span>系统运维</span></a>
							<a href="/#/union">
								<span>物联中心</span>
							</a>

							<!-- <span>客户服务</span> -->
						</div>
					</div>
					<div>
						<div class="ping">智慧充电</div>
						<div class="zi">
							<a href="/#/carAll">
								<span>汽车充电</span>
							</a>
							<a href="/#/motoAll">
								<span>电单车充电</span>
							</a>
						</div>
					</div>
					<div>
						<div class="ping">智慧停车</div>
						<div class="zi">
							<a href="/#/road">
								<span>道路停车</span>
							</a>
							<a href="/#/parkingChang">
								<span>停车场</span>
							</a>
						</div>
					</div>
					<div>
						<div class="ping">智慧充电</div>
						<div class="zi">
							<a href="/#/prepaidMeter/site">
								<span>预付费电表</span>
							</a>
							<a href="/#/smartSocket/site">
								<span>智能插座</span>
							</a>
						</div>
					</div>
					<!-- <div>
            <div class="ping">智慧用电</div>
            <div class="zi">
              
              <span>预付费电表</span></div>
          </div> -->
					<!-- <div>
            <div class="ping">智慧出行</div>
            <div class="zi"><span>共享汽车</span><span>共享单车</span></div>
          </div> -->
					<!-- <div>
            <div class="ping">智慧城市</div>
            <div class="zi"><span>智慧社区</span><span>智慧园区</span></div>
          </div> -->
				</div>
				<div class="foot" @click="out">退出登录</div>
			</div>
		</div>
	</div>
</template>
<script>
	import axios from "axios";
	export default {
		data() {
			return {
				falg: false,
				admin: JSON.parse(localStorage.getItem("admin")),
				msg: [],
				falgss: true,
				falgs: false,
				changeList:true,
			};
		},
		mounted() {
			this.changeList = this.$store.state.tubiao;
			console.log(this.admin);
		},
		methods: {
			
			chan() {
				this.falgss = true;
				this.falgs = false;
			},
			flag(){
				this.changeList =true
				this.$store.commit("changeTu", {
				changeList:this.changeList
				});
			},
			flags(){
				this.changeList = !this.changeList
				this.$store.commit("changeTu", {
				changeList:this.changeList
				});
			},
			xian() {
				this.falgs = true;
				this.falgss = false;
			},
			out() {
				localStorage.setItem("token", "");
				localStorage.setItem("admin", "");
				window.document.cookie = "userName" + "= ";
				window.document.cookie = "pas" + "= ";
				this.$router.push({
					path: "/"
				});
			},
			change() {
				this.falg = !this.falg;
			}
		}
	};
</script>
<style scoped>
	.zi {
		width: 100%;
		margin: 0 0 0 35px;
		line-height: 30px;
	}

	.changeList {
		position: absolute;
		top: 100px;
		right: 40px;
	}

	.zi span {
		display: inline-block;
		width: 79px;
		height: 20px;
		color: #1e69fe;

		cursor: pointer;
	}

	.ping {
		width: 100px;
		height: 19px;
		font-size: 20px;
		font-family: PingFang SC;
		font-weight: 400;
		color: #7a7a7a;
		line-height: 28px;
		margin: 15px 0 21px 35px;
	}

	.col {
		color: #b9b9b9 !important;
	}

	.co {
		color: white !important;
	}

	.display {
		display: none;
	}

	.touxian {
		margin-left: 29px;
	}

	.hei {
		position: fixed;
		top: 0px;
		right: 0;
		width: 100%;
		height: 100%;
		background: #000;
		opacity: 0.7;
		z-index: 111;
	}

	.foot {
		position: absolute;
		bottom: 66px;
		left: 39%;
		width: 134px;
		height: 53px;
		background: #d2d2d2;
		border-radius: 10px;
		cursor: pointer;
		text-align: center;
		line-height: 55px;
	}

	.chong {
		display: inline-block;
		width: 51px;
		height: 24px;
		text-align: center;
		border: 1px solid #1e69fe;
		border-radius: 9px;
		line-height: 22px;
	}

	.one {
		margin: 3% 0 3% 30px;
	}

	.one>span {
		font-size: 20px;
		font-family: PingFang SC;
		font-weight: 400;
		color: #1e69fe;
		margin-right: 5%;
	}

	.one>div {
		width: 90px;
		font-size: 20px;
		font-family: PingFang SC;
		font-weight: 300;
		color: #000000;
		float: left;
		line-height: 28px;
	}

	.nicheng div {
		width: 100px;
		position: relative;
		bottom: -11px;
		left: 1%;
		padding: 1%;
		background: #e9f6ed;
		font-size: 16px;
		font-family: PingFang SC;
		font-weight: 300;
		color: #49b51a;
		line-height: 28px;
		margin-top: 5%;
	}

	.sear-img {
		width: 15px;
		height: 15px;
		border-radius: 100%;
	}

	.nicheng span {
		display: inline-block;
		font-size: 24px;
		font-family: PingFang SC;
		font-weight: 400;
		color: #000000;
		line-height: 28px;
	}

	.nicheng {
		display: flex;
		display: inline-block;
	}

	.zhanghu {
		display: flex;
		justify-content: space-between;
		width: 100%;
		margin: 44px 0 33px 0;
	}

	.zhanghu span:nth-child(1) {
		width: 81px;
		height: 20px;
		font-size: 20px;
		font-family: PingFang SC;
		font-weight: 400;
		color: #000000;
		line-height: 28px;
		margin: 0 25px 0 36px;
	}

	.head span {
		display: inline-block;
		margin: 5% 3% 3% 35px;
		width: 58px;
		height: 19px;
		font-size: 20px;
		font-family: "PingFang SC";
		font-weight: 400;
		color: #b9b9b9;
		line-height: 28px;
		cursor: pointer;
	}

	.head {
		width: 100%;
		height: 83px;
		background: #1e69fe;
		/* text-align: center; */
		border-radius: 20px 0px 0px 0px;
	}

	.img1 {
		position: absolute;
		right: 20px;
		top: 26px;
	}

	.aside {
		position: fixed;
		right: 0;
		top: 0;
		width: 25%;
		height: 100%;
		background: white;
		z-index: 999;
		border-radius: 20px 0px 0px 20px;
		background: white;
	}

	.users-right-w {
		display: flex;
		flex-direction: row;
		align-items: center;
		width: 150px;
		justify-content: space-between;
		float: right;
	}
</style>
