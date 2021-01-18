<template>
	<div class="oneCard-right">
		<div class="UserAssets-right-top">
			<div class="user-left">
				<span class="user-word">车牌</span>
			</div>
			<div class="users-right">
				<myhead></myhead>
			</div>
		</div>
		<div class="conB">
			<div class="UserAssets-right-text">
				<div class="textBox">
					<img src="../../assets/images/search.png" class="sear-img">
					<el-input v-model="input" placeholder="请输入关键字进行查找" class="textWord" clearable></el-input>
				</div>
				<div>
					<el-button type="primary" icon="el-icon-search" @click="getUserMes">搜索</el-button>
				</div>
				<div>
					<el-button type="success" icon="el-icon-circle-plus-outline" @click="addDialogVisible = true">添加</el-button>
				</div>
			</div>
			<div class="changeMode">
				<div @click="flagF" v-if="changeList == false">
					<img src="../../assets/images/changeList.png" alt="" style="width: 35px;height: 35px;">
				</div>
				<div @click="flagT" v-show="changeList == true">
					<img src="../../assets/images/changeIcon.png" alt="" style="width: 35px;height: 35px;">
				</div>
			</div>
		</div>
		<div class="twoBox">
			<div v-if="changeList== true">
				<template>
					<el-table :data="cardList" stripe style="width: 100%">
						<el-table-column prop="uid" label="用户ID">
						</el-table-column>
						<el-table-column prop="id" label="车牌ID">
						</el-table-column>
						<el-table-column prop="plate" label="车牌号">
						</el-table-column>
						<el-table-column prop="color" label="颜色">
						</el-table-column>
						<el-table-column prop="created_time" label="绑定时间">
						</el-table-column>
						<el-table-column prop="audit" label="认证状态">
							<template slot-scope="scope">
								<div v-if="scope.row.audit == 1">
									认证中
								</div>
								<div v-else-if="scope.row.audit == 2">
									<span class="stateColor-green">已认证</span>
								</div>
								<div v-else-if="scope.row.audit == 0">
									<span>未认证</span>
								</div>
								<div v-else-if="scope.row.audit == 3">
									<span class="stateColor-red">认证失败</span>
								</div>
							</template>
						</el-table-column>
						<el-table-column prop="address" label="操作" width="200">
							<template slot-scope="scope">
								<div class="operation">
									<div>
										<img src="../../assets/images/see.png" style="width: 15;height: 11px;" />
									</div>
								</div>
							</template>
						</el-table-column>
					</el-table>
				</template>
			</div>
			<div v-else class="tubiaobox">
				<div class="imgBox" v-for="item in cardList">
					<div class="imgBoxTitle">
						<div class="imgBoxTitleL" v-if="item.audit == 2">
							已认证
						</div>
						<div class="imgBoxTitleL1" v-else>
							未认证
						</div>
						<div class="imgBoxTitleR" v-if="item.audit == 2">
							<img src="../../assets/images/Delete authenticated.png">
							<img src="../../assets/images/View certified.png">
						</div>
						<div class="imgBoxTitleR" v-else>
							<img src="../../assets/images/Delete unauthenticated.png">
							<img src="../../assets/images/View uncertified.png">
						</div>
					</div>
					<div class="imgBoxCon">
						<div class="imgBoxConW1">
							<div class="imgBoxConW2">
								{{item.plate}}
							</div>
						</div>
						<div class="imgBoxConW3">
							{{item.created_time}} 李小萌
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="UserAssets-bottom" v-if="changeList== true ">
			<div class="UserAssets-bottom-left" :data="cardList">
				<span>共{{total}}个车牌</span>
			</div>
			<div class="UserAssets-bottom-right">
				<el-pagination background :current-page.sync.number="pagenum" @current-change="handleCurrentChange" :page-size="pagesize"
				 layout="prev, pager, next" :total="total">
				</el-pagination>
			</div>
		</div>
		<div class="UserAssets-bottom" v-else>
			<div class="UserAssets-bottom-left" :data="cardList">
				<span>共{{total}}个车牌</span>
			</div>
			<div class="UserAssets-bottom-right">
				<el-pagination background :current-page.sync.number="pagenum2" @current-change="handleCurrentChange2" :page-size="pagesize"
				 layout="prev, pager, next" :total="total">
				</el-pagination>
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
				cardList: [], //卡数据
				userList: [], //这个是我新建的
				option: '',
				username: '',
				total: 1, //数据总条数
				isActive: true,
				dialogVisible: false,
				add: false,
				selected: 0, //下拉框
				pagenum: 1, //分页
				pagenum2: 1,
				token: '', //token令牌
				pagesize: 5, //每次查询条数
				type: 0,
				changeList: false,
				input: '',
				typeList: [{
						id: 0,
						type: '所有'
					},
					{
						id: 1,
						type: '手机'
					},
					{
						id: 2,
						type: '微信'
					},
					{
						id: 3,
						type: '支付宝'
					}
				]
			}
		},
		created() {
			this.token = localStorage.getItem('token')
			if (this.changeList == true) {
				this.getUserMes()
			} else if (this.changeList == false) {
				this.getCarImg()
			}


		},
		watch: {


		},
		methods: {
			handleOpen(key, keyPath) {
				console.log(key, keyPath);
				console.log(this.option)
			},
			handleClose(key, keyPath) {
				console.log(key, keyPath);
			},
			flagT() {
				this.changeList = false
				this.getCarImg()
			},
			flagF() {
				this.changeList = true
				this.getUserMes()
			},
			//获取用户卡信息列表
			getUserMes() {
				//token去掉引号
				let toKen = this.token.replace(/\"/g, "")
				// console.log(toKen)
				this.$axios.get("admin/api/user/plates?token=" + toKen + "&page=" + this.pagenum + "&row=14")
					.then(res => {

						// console.log(res.status)//打印状态码
						if (res.status == 200) {
							this.cardList = res.data.user_platess //用户列表数据
							this.total = res.data.total
							this.pagesize = 14
							console.log(this.pagesize)
						}
					})
			},
			getCarImg() {
				//token去掉引号
				let toKen = this.token.replace(/\"/g, "")
				// console.log(toKen)
				this.$axios.get("admin/api/user/plates?token=" + toKen + "&page=" + this.pagenum2 + "&row=12")
					.then(res => {
						console.log(res) //打印状态码
						if (res.status == 200) {
							this.cardList = res.data.user_platess //用户列表数据
							this.total = res.data.total
							this.pagesize = 12
							console.log(this.cardList)
						}
					})
			},
			changeIcon() {
				this.changeList = !this.changeList
				console.log(this.changeList)
			},

			//监听页码值改变
			handleCurrentChange(newPage) {

				this.pagenum = newPage
				this.getUserMes()
			},
			handleCurrentChange2(newPage) {

				this.pagenum2 = newPage
				this.getCarImg()

			},


		}
	}
</script>

<style scoped="scoped">
	.tubiaobox {
		width: 95%;
		height: 100%;
		margin: 0 auto;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: center;
		margin-top: 20px;
	}

	.imgBoxTitleL {
		background: url(../../assets/images/certified.png);
		background-size: 100% 100%;
		width: 150px;
		height: 55px;
		color: white;
		font-size: 18px;
		text-align: center;
		line-height: 40px;
	}


	.imgBoxTitleL1 {
		background: url(../../assets/images/unauthorized.png);
		background-size: 100% 100%;
		width: 150px;
		height: 55px;
		color: white;
		font-size: 18px;
		text-align: center;
		line-height: 40px;
	}


	.imgBoxCon {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-around;
	}

	.imgBoxConW1 {
		font-size: 35px;
		color: white;
		width: 230px;
		height: 60px;
		background-color: #0b9066;
		display: flex;
		align-items: center;
		border-radius: 5px;
	}

	.conB {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		width: 95%;
		margin: 0 auto;
	}

	.imgBoxConW2 {
		width: 220px;
		height: 52px;
		margin: 0 auto;
		background-color: #0b9066;
		line-height: 50px;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 5px;
		border: solid 1px white;
	}

	.imgBoxConW3 {
		font-size: 16px;
	}

	.imgBoxCon {
		display: flex;
		flex-direction: column;
		flex: 1;
		height: 150px;
	}

	.imgBoxTitleR {
		width: 75px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}

	.imgBoxTitle {
		width: 85%;
		height: 60px;
		margin: 0 auto;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	.imgBox {
		width: 350px;
		height: 210px;
		background-color: #eff2f4;
		border-radius: 10px;
		box-shadow: 1px 1px 10px 2px #cccccc;
	}

	.oneCard-right {
		display: flex;
		flex: 1;
		flex-direction: column;
		background-color: white;
		border-top-left-radius: 50px;
		border-bottom-left-radius: 50px;
	}

	.el-table td {
		padding: 0 0;
	}

	.twoBox {
		height: 700px;
	}

	.el-input__inner {
		height: 30px;
		border: none;
	}

	.tanchu {
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.el-table td div {
		margin: 0 auto;
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

	.el-dialog {
		margin-top: 30vh !important;
	}

	.stateColor-red {
		color: red;
	}

	.stateColor-green {
		color: #2ec23c;
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

	.textWord {
		width: 390px;
		height: 30px;
		border: none;
	}

	/*  .is-opened>div::nth-child(1) {
	  background-color: white !important;
	} */

	.cell {
		text-align: center;
		font-size: 15px;
		display: -webkit-box;
		overflow: hidden;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
	}

	.el-table .cell {
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

	/* 顶部按钮 */
	.el-button--primary {
		border-radius: 10px;
		height: 37px;
	}

	.el-button--success {
		border-radius: 10px;
		height: 37px;
	}

	.el-button--default {
		border-radius: 10px;
		padding: 10px 20px;
	}

	.addinput {
		border: 1px solid #1e69fe;
		border-radius: 10px;
	}

	.el-table {
		color: #908e8e;
	}

	.UserAssets-right-top {
		display: flex;
		flex-direction: row;
		width: 95%;
		margin: 20px auto;
		margin-top: 40px;
	}


	.el-col-12 {
		width: 100%;
		text-align: center;
	}

	/* 字体 */
	.vive {
		font-size: 20px;
		color: white;
		text-align: center;
		display: flex;
		flex-direction: row;
		margin: 20px 55px;

	}

	.el-submenu__title {
		font-size: 20px;
		width: 100%;
	}

	/* 按钮字体 */
	.el-button {
		font-size: 16px;
		padding: 10px 20px;
	}


	.el-menu-item {
		font-size: 16px;
		color: #dbdbdb;
	}

	.menu-op {
		display: flex;
		flex-direction: row;
		width: 100%;
		margin-left: 8%;
	}

	.menu-op div {
		padding: 0px 15px;
		width: 40px;
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

	.el-button--primary {
		color: #FFF;
		background-color: #1e69fe;
		border-color: #1e69fe;
	}

	.el-button--success {
		color: #1e69fe;
		background-color: #fff;
		border-color: #1e69fe;
	}



	.user-left {
		width: 50%;
	}

	.users-right-w {
		display: flex;
		flex-direction: row;
		align-items: center;
		width: 150px;
		justify-content: space-between;
		float: right;
	}

	.users-right {
		width: 50%;
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

	.el-menu-item.is-active {
		border-radius: 400px;
		background-color: white !important;
	}

	.el-menu-item.is-active:hover {
		background-color: #1e69fe;
	}

	.UserAssets-right-text {
		width: 650px;
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
		width: 68%;
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
		width: 40px;
	}

	.select1 option {
		text-align: center;
	}

	.sear-img {
		width: 15px;
		height: 15px;
		margin-left: 20px;
	}

	/* 第一行数据类型 */
	.el-table thead {
		color: black;
	}
</style>
