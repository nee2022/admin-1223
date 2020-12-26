<template>
	<div class="cyfss">
		<div class="UserAssets-bgcolor zhandianxinxi">
			<div class="UserAssets-left">
				<div class="UserAssets-logo">
					<router-link to="/summary">
						<img :src="loginConfig.imgs" />
					</router-link>
				</div>
				<div class="vi">
					<img @click="out" src="../assets/images/left1.png" />
				</div>
				<el-col :span="12">
					<el-menu default-active="2" class="el-menu-vertical-demo" background-color="#1e69fe" text-color="#fff"
					 active-text-color="white" unique-opened>
						<el-submenu index="1">
							<template slot="title">
								<router-link to="/shebeiBasic">
									<div class="menu-op">
										<div>
											<img src="../assets/images/shu.png" />
										</div>
										<span class="menu-word">基础信息</span>
									</div>
								</router-link>
							</template>
							<!-- <el-menu-item-group>
                <el-menu-item index="1-2">
                  <router-link to="/union">
                    <div class="menu-op">
                      <div>
                        <img src="../assets/images/all.png" />
                      </div>
                      <span class="menu-word">二维码</span>
                    </div>
                  </router-link>
                </el-menu-item>
                <el-menu-item index="1-3">
                  <router-link to="/shebe_online">
                    <div class="menu-op">
                      <div>
                        <img src="../assets/images/zai.png" />
                      </div>
                      <span class="menu-word">一码通</span>
                    </div>
                  </router-link>
                </el-menu-item>
              </el-menu-item-group> -->
						</el-submenu>
						<el-menu-item index="4">
							<router-link to="/shebeimeal">
								<div class="menu-op">
									<div>
										<img src="../assets/images/sim.png" />
									</div>
									<span class="menu-word" style="font-size: 14px">扫码套餐</span>
								</div>
							</router-link>
						</el-menu-item>
						<!-- <el-submenu index="2">
              <template slot="title">
                <div class="menu-op">
                  <div>
                    <img src="../assets/images/sim.png" />
                  </div>
                  <span class="menu-word">访问规则</span>
                </div>
              </template>
              <el-menu-item-group>
                <el-menu-item index="2-1">
                  <router-link to="/carWhite">
                    <div class="menu-op">
                      <div>
                        <img src="../assets/images/all.png" />
                      </div>
                      <span class="menu-word">车牌白名单</span>
                    </div>
                  </router-link>
                </el-menu-item>
                <el-menu-item index="2-2">
                  <router-link to="/carBlac">
                    <div class="menu-op">
                      <div>
                        <img src="../assets/images/zai.png" />
                      </div>
                      <span class="menu-word">车牌黑名单</span>
                    </div>
                  </router-link>
                </el-menu-item>
                <el-menu-item index="2-3">
                  <router-link to="/carWhite">
                    <div class="menu-op">
                      <div>
                        <img src="../assets/images/li.png" />
                      </div>
                      <span class="menu-word">用户白名单</span>
                    </div>
                  </router-link>
                </el-menu-item>
                <el-menu-item index="2-3">
                  <router-link to="/carBlac">
                    <div class="menu-op">
                      <div>
                        <img src="../assets/images/li.png" />
                      </div>
                      <span class="menu-word">用户黑名单</span>
                    </div>
                  </router-link>
                </el-menu-item> 
              </el-menu-item-group>
            </el-submenu> -->
						<el-menu-item index="4">
							<router-link to="/shebeiChargingRate">
								<div class="menu-op">
									<div>
										<img src="../assets/images/sim.png" />
									</div>
									<span class="menu-word" style="font-size: 14px">充电费率</span>
								</div>
							</router-link>
						</el-menu-item>
						<!-- <el-menu-item index="4">
              <router-link to="/stopRate">
              <div class="menu-op">
                <div>
                  <img src="../assets/images/sim.png" />
                </div>
                <span class="menu-word" style="font-size: 14px">停车费率</span>
              </div>
              </router-link>
            </el-menu-item> -->
						<el-menu-item index="4">
							<router-link to="/shebeiChargingRecord">
								<div class="menu-op">
									<div>
										<img src="../assets/images/sim.png" />
									</div>
									<span class="menu-word" style="font-size: 14px">充电记录</span>
								</div>
							</router-link>
						</el-menu-item>
						<el-submenu index="4">
							<template slot="title">
								<div class="menu-op">
									<div>
										<img src="../assets/images/sim.png" />
									</div>
									<span class="menu-word">停车记录</span>
								</div>
							</template>
							<el-menu-item-group>
								<el-menu-item index="2-1">
									<router-link to="/shebeiParkingRecords">
										<div class="menu-op">
											<div>
												<img src="../assets/images/all.png" />
											</div>
											<span class="menu-word">所有</span>
										</div>
									</router-link>
								</el-menu-item>
								<el-menu-item index="2-3">
									<router-link to="/shebeiHistory">
										<div class="menu-op">
											<div>
												<img src="../assets/images/li.png" />
											</div>
											<span class="menu-word">历史记录</span>
										</div>
									</router-link>
								</el-menu-item>
							</el-menu-item-group>
						</el-submenu>
					</el-menu>
				</el-col>
			</div>
			<router-view></router-view>
		</div>
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
			};
		},
		methods: {
			out() {
				this.$router.go(-1);
			},
		},
	};
</script>

<style lang="stylus" scoped>
	.zhandianxinxi {
		background-color: #1e69fe !important;
		height: 100% !important;
	}

	.cyfss {
		.UserAssets-bgcolor .el-table td {
			padding: 0 0;
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

		.active {
			background-color: white;
		}

		.operation {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			width: 70px;
			margin: 0 auto;
		}

		.el-table__footer-wrapper,
		.el-table__header-wrapper {
			margin-top: 10px;
			background-color: #edf1f5;
		}

		.vi img {
			cursor: pointer;
		}

		.vi {
			text-align: center;
			margin-bottom: 47px;
		}

		.textWord {
			width: 390px;
			height: 30px;
			border: none;
		}

		.UserAssets-bgcolor .cell {
			text-align: center;
			font-size: 16px;
			display: -webkit-box;
			overflow: hidden;
			-webkit-box-orient: vertical;
			-webkit-line-clamp: 1;
			font-weight: 400;
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
			// height:calc((100vh-425px)/14)
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

		.el-menu-item {
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

		.menu-word-2 {
			font-size: 15px;
			color: white;
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
			width: 650px;
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

		.el-table .cell {
			line-height: 44px;
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
		.el-table thead {
			color: black;
		}
	}
</style>
