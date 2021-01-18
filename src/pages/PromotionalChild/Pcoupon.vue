<template>
	<div class="oneCard-right">
		<div class="UserAssets-right-top">
			<div class="user-left">
				<span class="user-word">优惠券</span>
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
				<div @click="flagT" v-if="changeList == false">
					<img src="../../assets/images/changeList.png" alt="" style="width: 35px;height: 35px;">
				</div>
				<div @click="flagF" v-show="changeList == true">
					<img src="../../assets/images/changeIcon.png" alt="" style="width: 35px;height: 35px;">
				</div>
			</div>
		</div>
		<div style="height: 700px;">
			<div v-if="changeList == true">
				<template>
					<el-table :data="menuList" stripe style="width: 100%">
						<el-table-column prop="id" label="ID" width="130">
						</el-table-column>
						<el-table-column prop="name" label="名称" width="180">
						</el-table-column>
						<!-- <el-table-column prop="state" label="状态">
					</el-table-column> -->
						<el-table-column prop="state" label="状态">
							<template slot-scope="scope">
								<div v-if="scope.row.state == 2">
									过期
								</div>
								<div v-else-if="scope.row.state == 0">
									有效
								</div>
								<div v-else-if="scope.row.state == 1">
									已用
								</div>
							</template>
						</el-table-column>
						<el-table-column prop="amount" label="面值">
						</el-table-column>
						<el-table-column prop="account" label="用户">
						</el-table-column>
						<el-table-column prop="avail_from,avail_to" label="有效期" width="200">
							<template slot-scope="scope">
								{{scope.row.avail_from}}至{{scope.row.avail_to}}
							</template>
						</el-table-column>
						<!-- <el-table-column prop="update_time" label="使用时间">
					</el-table-column> -->
						<el-table-column prop="address" label="操作" width="200">
							<template slot-scope="scope">
								<div class="operation">
									<div>
										<img src="../../assets/images/see.png" />
									</div>
								</div>
							</template>
						</el-table-column>
					</el-table>
				</template>
			</div>
			<div v-else class="tubiaoBox">
				<div class="tubiaoBg" v-for="item in menuList" :class="item.state == 0?'Pbg1':item.state == 2?'Pbg2':item.state == 1?'Pbg3':item.state == 3?'Pbg2':''">
					<div class="tubiaoBgTop">
						<div class="tubiaoBgTopTitle">
							<img src="../../assets/images/Pdelete.png" alt="">
							<img src="../../assets/images/Peditor.png" alt="">
						</div>
					</div>
					<div class="tubiaoBgCon">
						<div class="moneyBox">
							<div class="moneyW1">￥</div>
							<div class="moneyW2">{{item.pay}}</div>
						</div>
						<div class="moneyW3">
							({{item.name}})
						</div>
					</div>
					<div class="tubiaoBgBot">
						<div class="moneyW4">
							有效期:{{item.avail_from}}至{{item.avail_to}}
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="UserAssets-bottom" v-if="changeList == true ">
			<div class="UserAssets-bottom-left" :data="menuList">
				<span>共{{total}}张券</span>
			</div>
			<div class="UserAssets-bottom-right">
				<el-pagination background :current-page.sync.number="pagenum" @current-change="handleCurrentChange" :page-size="pagesize"
				 layout="prev, pager, next" :total="total">
				</el-pagination>
			</div>
		</div>
		<div class="UserAssets-bottom" v-else>
			<div class="UserAssets-bottom-left" :data="menuList">
				<span>共{{total}}张券</span>
			</div>
			<div class="UserAssets-bottom-right">
				<el-pagination background :current-page.sync.number="pagenum2" @current-change="handleCurrentChange2" :page-size="pagesize"
				 layout="prev, pager, next" :total="total">
				</el-pagination>
			</div>
		</div>
		<!-- 删除弹出框 -->
		<el-dialog title="提示" :visible.sync="dialogVisible" width="30%" class="tanchu">
			<img src="../../assets/images/Exclamation mark.png" />
			<span class="tanchu-text">此操作将永久删除用户，是否继续？</span>
			<span slot="footer" class="dialog-footer">
				<el-button @click="dialogVisible = false">取 消</el-button>
				<el-button type="primary" @click="dialogVisible = false">确 定</el-button>
			</span>
		</el-dialog>
		<!-- 查看弹出层 -->
		<el-dialog title="用户详情" :visible.sync="add" width="30%" class="tanchu">
			<img src="../../assets/images/Exclamation mark.png" />
			<span class="tanchu-text">1</span>
			<span slot="footer" class="dialog-footer">
				<el-button @click="add = false">取 消</el-button>
				<el-button type="primary" @click="add = false">确 定</el-button>
			</span>
		</el-dialog>
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
				menuList: [], //卡数据
				userList: [], //这个是我新建的
				option: '',
				username: '',
				total: 1, //数据总条数
				isActive: true,
				dialogVisible: false,
				add: false,
				selected: 0, //下拉框
				pagenum: 1, //分页
				pagenum2: 1, //分页
				token: '', //token令牌
				pagesize: 14, //每次查询条数
				changeList: false,
				type: 0,
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
				this.getImg()
			}
		},
		methods: {
			handleOpen(key, keyPath) {
				console.log(key, keyPath);
				console.log(this.option)
			},
			handleClose(key, keyPath) {
				console.log(key, keyPath);
			},
			//获取用户卡信息列表
			getUserMes() {
				//token去掉引号
				let toKen = this.token.replace(/\"/g, "")
				// console.log(toKen)
				this.$axios.get("/admin/api/user/plans?token=" + toKen + "&page=" + this.pagenum +
						"&row=14")
					.then(res => {
						console.log(res.data)
						console.log(res.data.user_plans)
						// console.log(res.status)//打印状态码
						if (res.status == 200) {
							this.menuList = res.data.user_plans //用户列表数据
							this.total = res.data.total
							this.pagesize = 14
						}
					})
			},
			getImg() {
				//token去掉引号
				let toKen = this.token.replace(/\"/g, "")
				// console.log(toKen)
				this.$axios.get("/admin/api/user/plans?token=" + toKen + "&page=" + this.pagenum2 +
						"&row=15")
					.then(res => {
						console.log(res.data)
						console.log(res.data.user_plans)
						// console.log(res.status)//打印状态码
						if (res.status == 200) {
							this.menuList = res.data.user_plans //用户列表数据
							this.total = res.data.total
							this.pagesize = 15
							console.log(this.menuList)
						}
					})
			},
			async removeUserByID(id) {
				let toKen = this.token.replace(/\"/g, "")
				const confirmRes = await this.$confirm('此操作将永久删除该套餐, 是否继续?', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).catch(err => err)
				// console.log(confirmRes)
				if (confirmRes !== 'confirm') {
					return this.$message.info('已取消删除')
				}
				this.$axios.delete("/admin/api/plan/" + id, {
						token: toKen
					})
					.then(res => {
						console.log(res.status)
						if (res.status == 200) {
							this.$message.success('删除套餐成功')
							this.getUserMes() //刷新用户数据
						} else {
							this.$message.error('删除套餐失败')
						}
					})
				//删除用户提示
			},
			//弹出框-删除
			// tcClose(done) {
			// 	this.$confirm('确认删除吗？')
			// 		.then(_ => {
			// 			done();
			// 		})
			// 		.catch(_ => {});
			// },
			//监听页码值改变
			handleCurrentChange(newPage) {
				//console.log(newPage)
				this.pagenum = newPage;
				this.getUserMes();
			},
			handleCurrentChange2(newPage) {
				//console.log(newPage)
				this.pagenum2 = newPage;
				this.getImg()
			},
			flagF() {
				this.changeList = false
				this.getImg()
			},
			flagT() {
				this.changeList = true
				this.getUserMes()
			},

		}
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

	.el-table td {
		padding: 0 0;
	}
	
	.tubiaoBgBot{
		height: 30px;
		width: 95%;
		margin: 0 auto;
		margin-top: 10px;
	}
	
	.moneyBox{
		display: flex;
		flex-direction: row;
		width: 95%;
		margin: 0 auto;
		height: 100px;
		text-align: center;
		justify-content: center;
	}
	
	.tubiaoBgTop{
		width: 90%;
		margin: 0 auto;
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
	}
	
	.moneyW1{
		font-size:32px;
		color: white;
		display: flex;
		flex-direction: row;
		align-items: flex-end;
	}
	
	.moneyW2{
		font-size: 100px;
		color: white;
	}
	
	.moneyW3{
		font-size: 16px;
		color: white;
		text-align: center;
	}
	
	.moneyW4{
		font-size: 12px;
		color: white;
		text-align: center;
	}
	
	.tubiaoBgTopTitle{
		width: 50px;
		height: 40px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
	
	.tubiaoBg{
		width: 190px;
		height: 210px;
		display: flex;
		flex-direction: column;
		margin: 20px 65px 10px 65px;
	}
	
	.Pbg1{
		background: url(../../assets/images/Obg.png);
		background-size: 100% 100%;
	}
	
	.Pbg2{
		background: url(../../assets/images/Gbg.png);
		background-size: 100% 100%;
	}
	
	.Pbg3{
		background: url(../../assets/images/Gbbg.png);
		background-size: 100% 100%;
	}

	.el-input__inner {
		height: 30px;
		border: none;
	}

	.el-table td div {
		margin: 0 auto;
	}

	.tanchu {
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.conB {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		width: 95%;
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
	
	.tubiaoBox{
		width: 95%;
		height: 100%;
		margin: 0 auto;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
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
