<template>
	<div class="UserAssets-bgcolor">
		<div class="UserAssets-left">
			<div class="UserAssets-logo">
				<router-link to="/summary">
					<img :src="loginConfig.imgs" />
				</router-link>
			</div>
			<div class="backImg">
				<router-link to="/usersNum">
					<img src="../assets/images/left1.png" alt="">
				</router-link>
			</div>
			<el-col :span="12">
				<el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" background-color="#1e69fe"
				 text-color="#fff" active-text-color="white" unique-opened v-model="option">
					<el-menu-item index="1">
						<template slot="title">
							<router-link to="/essentialInformation">
								<div class="menu-op">
									<div>
										<img src="../assets/images/user account.png">
									</div>
									<span class="menu-word-2">基本资料</span>
								</div>
							</router-link>
						</template>
					</el-menu-item>
					<el-submenu v-for="item in menuList" :index="item.id" :key="item.id">
						<template slot="title">
							<div class="menu-op">
								<div>
									<img :src="item.img">
								</div>
								<span class="menu-word">{{item.name}}</span>
							</div>
						</template>
						<el-menu-item-group>
							<template v-for="values in item.list">
								<el-menu-item>
									<router-link :to="values.router">
										<div class="menu-op">
											<div>
												<img :src="values.img">
											</div>
											<span class="menu-word">{{values.text}}</span>
										</div>
									</router-link>
								</el-menu-item>
							</template>
						</el-menu-item-group>
					</el-submenu>
				</el-menu>
			</el-col>
		</div>
		<router-view></router-view>
	</div>


</template>

<script>
	import {
		loginConfig
	} from "../config.js";
	export default {
		data() {
			return {
				loginConfig,
				option: '',
				menuList: [{
					name: '用户资产',
					img: require('../assets/images/coupons1.png'),
					id: '1',
					list: [{
						id: 1,
						text: '车辆',
						img:require('../assets/images/Vehicle certification.png'),
						router:'/userCar'
					}, {
						id: 2,
						text: '一卡通',
						img:require('../assets/images/One cartoon.png'),
						router:'/userCard'
					}, {
						id: 3,
						text: '套餐',
						img:require('../assets/images/The user package.png'),
						router:'/userTaocans'
					}, {
						id: 4,
						text: '优惠券',
						img:require('../assets/images/coupons.png'),
						router:'/userCoupon'
					}]
				}, {
					name: '用户账单',
					img: require('../assets/images/Non-inductive pay2.png'),
					id: '2',
					list: [{
						id: 1,
						text: '所有',
						img:require('../assets/images/all.png'),
						router:'/userBill'
					}, {
						id: 2,
						text: '充值',
						img:require('../assets/images/Prepaid phone records.png'),
						router:'/userChongzhi'
					}, {
						id: 3,
						text: '消费',
						img:require('../assets/images/Has been used.png'),
						router:'/userXiaofei'
					}, {
						id: 4,
						text: '退款',
						img:require('../assets/images/The event log.png'),
						router:'/userTuikuan'
					}]
				}, {
					name: '停车订单',
					img: require('../assets/images/Vehicle certification.png'),
					id: '3',
					list: [{
						id: 1,
						text: '所有',
						img:require('../assets/images/all.png'),
						router:'/stopOrderAll'
					}, {
						id: 2,
						text: '实时',
						img:require('../assets/images/shu.png'),
						router:'/stopOrderParking'
					}]
				}, {
					name: '发票',
					img: require('../assets/images/user account.png'),
					id: '4',
					list: [{
						id: 1,
						text: '所有',
						img:require('../assets/images/all.png'),
						router:'/invoiceAll'
					}, {
						id: 2,
						text: '已开票',
						img:require('../assets/images/site.png'),
						router:'/invoiced'
					}, {
						id: 3,
						text: '待审核',
						img:require('../assets/images/To audit.png'),
						router:'/invoicing'
					}]
				}]
			}
		},

		getText(Test) {
			console.log(Test)
		},
		created() {
			console.log(this.menuList[1].list)
		},
		methods: {
			handleOpen(key, keyPath) {
				console.log(key, keyPath);
				console.log(this.option)
			},
			handleClose(key, keyPath) {
				console.log(key, keyPath);
			},
		}
	}
</script>

<style>
	.UserAssets-bgcolor .el-table td {
		padding: 0 0;
	}

	.backImg{
		text-align: center;
		margin-bottom: 47px;
	}

	.UserAssets-bgcolor .el-input__inner {
		height: 30px;
		border: none;
	}

	.tanchu {
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.tanchu-text {
		width: 248px;
		height: 17px;
		font-family: PingFangSC-Regular;
		font-size: 16px;
		font-weight: normal;
		font-stretch: normal;
		letter-spacing: 0px;
		color: #7b7b7b;
		margin-left: 5px;
	}


	.operation {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		width: 70px;
		margin: 0 auto;
	}

	.UserAssets-bgcolor .el-table__footer-wrapper,
	.el-table__header-wrapper {
		margin-top: 10px;
		background-color: #edf1f5;
	}

	.textWord {
		width: 390px;
		height: 30px;
		border: none;
	}

	/*  .is-opened>div::nth-child(1) {
    background-color: white !important;
  } */

	.UserAssets-bgcolor .cell {
		text-align: center;
		font-size: 16px;
		display: -webkit-box;
		overflow: hidden;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
		font-weight: 400;
	}

	.UserAssets-bgcolor .el-table .cell {
		line-height: 44px;
	}

	.UserAssets-bgcolor {
		width: 100%;
		display: flex;
		flex-direction: row;
	}

	.UserAssets-right {
		display: flex;
		flex: 1;
		flex-direction: column;
		background-color: white;
		border-top-left-radius: 50px;
		border-bottom-left-radius: 50px;
	}

	/* 菜单选项卡字体颜色 */
	.menu-word {
		color: white;
	}

	/* 顶部按钮 */
	.UserAssets-bgcolor .el-button--primary {
		border-radius: 10px;
		height: 37px;
	}

	.UserAssets-bgcolor .el-button--default {
		border-radius: 10px;
		padding: 10px 20px;
	}

	.UserAssets-bgcolor .el-table {
		color: #908e8e;
	}

	.UserAssets-right-top {
		display: flex;
		flex-direction: row;
		width: 95%;
		margin: 20px auto;
		margin-top: 40px;
	}

	.UserAssets-left {
		display: flex;
		flex-direction: column;
		min-width: 200px;
		background-color: #1e69fe;
	}

	.UserAssets-logo {
		text-align: center;
		margin: 30px 0px;
	}

	.LOGO {
		width: 67px;
		height: 20px;
		font-family: MyriadPro-Regular;
		font-size: 24px;
		font-weight: normal;
		font-stretch: normal;
		line-height: 44px;
		letter-spacing: 0px;
		color: #ffffff;
	}

	.UserAssets-bgcolor .el-col-12 {
		width: 100%;
		text-align: center;
	}

	/* 字体 */
	.vive {
		font-size: 15px;
		color: white;
		text-align: center;
		display: flex;
		flex-direction: row;
		margin: 13px auto;
		width: 100%;
	}

	.UserAssets-bgcolor .el-submenu__title {
		font-size: 15px;
		width: 100%;
	}

	/* 按钮字体 */
	.UserAssets-bgcolor .el-button {
		font-size: 16px;
	}


	.UserAssets-bgcolor .el-menu-item {
		font-size: 13px;
		color: #dbdbdb;
	}

	.menu-op {
		display: flex;
		flex-direction: row;
		width: 100%;
		margin: 0 auto;
	}

	.menu-op div {
		padding: 0px 6px;
		width: 40px;
	}

	.UserAssets-bgcolor .el-submenu__title i {
		color: white;
	}

	.user-word {
		font-family: PingFangSC-Regular;
		font-size: 15px;
		color: #000000;
	}

	.user-left {
		width: 50%;
	}

	.user-right {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
	}

	.user-right {
		width: 10%;
	}

	.user-right span {
		color: #8a9199;
	}

	.user-img {
		height: 40px;
		width: 40px;
		overflow: hidden;
		border-radius: 100%;

	}

	.el-menu-item.is-active:hover {
		background-color: #1e69fe;
	}

	.UserAssets-right-text {
		width: 39%;
		margin-left: 40px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	.select1 {
		width: 200px;
		height: 34px;
		border-radius: 10px;
		border: solid 1px #1e69fe;
		font-size: 16px;
		padding: 0 2%;
		margin: 0;
	}

	.textBox {
		width: 422px;
		height: 34px;
		border-radius: 10px;
		border: solid 1px #1e69fe;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-around;
	}

	.UserAssets-bottom {
		display: flex;
		flex-direction: row;
		width: 95%;
		margin: 29px auto;

	}

	.UserAssets-bottom-left {
		width: 50%;
	}

	.UserAssets-bottom-right {
		width: 50%;
		text-align: right;
	}

	.UserAssets-bottom-left span {
		width: 137px;
		height: 18px;
		font-family: PingFangSC-Regular;
		font-size: 16px;
		font-weight: 600;
		font-stretch: normal;
		line-height: 20px;
		letter-spacing: 0px;
		color: #333333;
	}

	.set {
		width: 30px;
		margin-left: 30px;
	}

	.vive span {
		margin-left: 10px;
	}

	.set img {
		width: 17px;
		height: 17px;
	}

	.select1 option {
		text-align: center;
	}

	.sear-img {
		width: 15px;
		height: 15px;
	}

	/* 第一行数据类型 */
	.UserAssets-bgcolor .el-table thead {
		color: black;
	}
</style>
