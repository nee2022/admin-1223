<template>
	<div class="UserAssets-right">
		<div class="UserAssets-right-top">
			<div class="user-left">
				<span class="user-word">车牌白名单</span>
			</div>
			<div class="users-right">
				<myhead></myhead>
			</div>
		</div>
		<div class="UserAssets-right-text">
			<div class="textBox">
				<img src="../../assets/images/search.png" class="sear-img">
				<input type="text" v-model="input" placeholder="请输入关键字进行查找" class="textWord" />
			</div>
			<div>
				<el-button type="primary" icon="el-icon-search" @click="getUserMes">搜索</el-button>
			</div>
			<div>
				<el-button type="success" icon="el-icon-circle-plus-outline">添加</el-button>
			</div>
		</div>
		<div>
			<template>
				<el-table :data="tableData" stripe style="width: 100%">
					<el-table-column prop="id" label="车牌ID" width="130">
					</el-table-column>
					<el-table-column prop="plate" label="车牌" width="180">
					</el-table-column>
					<el-table-column prop="color" label="车辆颜色">
					</el-table-column>
					<el-table-column prop="expired" label="到期时间">
					</el-table-column>
					<el-table-column prop="station" label="站点">
					</el-table-column>
					<el-table-column prop="contact" label="联系人">
						<!-- <template slot-scope="scope">
								<div v-if="scope.row.state == 0" >
									审核中
								</div>
								<div v-else-if="scope.row.state == 1" class="stateColor-green">
									<span class="stateColor-green">审核通过</span>
								</div>
								<div v-else>
									<span class="stateColor-red">审核失败</span>
								</div>
							</template> -->
					</el-table-column>
					<el-table-column prop="address" label="操作">
							<div>
								<img src="../../assets/images/see.png" />
							</div>
					</el-table-column>
				</el-table>
			</template>
		</div>
		<div class="UserAssets-bottom">
			<div class="UserAssets-bottom-left" :data="tableData">
				<span>共{{total}}条信息</span>
			</div>
			<div class="UserAssets-bottom-right">
				<el-pagination background :current-page.sync.number="pagenum" @current-change="handleCurrentChange" :page-size="pagesize"
				 layout="prev, pager, next" :total="total">
				</el-pagination>
			</div>
		</div>
	</div>

</template>

<script>
	import myhead from '../../components/myhead.vue'
	export default {
		components:{
			myhead
		},
		data() {
			return {
				tableData: [], //用户数据
				userList: [], //这个是我新建的
				option: '',
				username: '',
				total: 1, //数据总条数
				isActive: true,
				dialogVisible: false,
				add: false,
				selected: 0, //下拉框
				pagenum: 1, //分页
				token: '', //token令牌
				pagesize: 14, //每次查询条数
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
			this.getUserMes()
		},
		methods: {
			handleOpen(key, keyPath) {
				console.log(key, keyPath);
				console.log(this.option)
			},
			handleClose(key, keyPath) {
				console.log(key, keyPath);
			},
			//获取手机用户信息列表
			getUserMes() {
				//token去掉引号
				let toKen = this.token.replace(/\"/g, "")
				// console.log(toKen)
				this.$axios.get("/admin/api/plates/3?token=" + toKen + "&page=" + this.pagenum + "&row=14")
					.then(res => {
						console.log(res.data.plates)
						// console.log(res.status)//打印状态码
						if (res.status == 200) {
							this.tableData = res.data.plates //用户列表数据
							this.total = res.data.total
							// console.log(this.tableData)
							var pn = this.pagenum
							console.log(res.data)
						}
					})
			},
			async removeUserByID(id) {
				let toKen = this.token.replace(/\"/g, "")
				const confirmRes = await this.$confirm('此操作将永久删除该用户, 是否继续?', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).catch(err => err)
				// console.log(confirmRes)
				if (confirmRes !== 'confirm') {
					return this.$message.info('已取消删除')
				}
				this.$axios.delete("/admin/api/user/" + id + "?token=" + toKen)
					.then(res => {
						console.log(res.status)
						if (res.status == 200) {
							this.$message.success('删除用户成功')
							this.getUserMes() //刷新用户数据
						} else {
							this.$message.error('删除用户失败')
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
				this.pagenum = newPage
				this.getUserMes()
			},

		}
	}
</script>

<style scoped="scoped">
	.el-table td {
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

	.el-dialog {
		margin-top: 30vh !important;
	}
	
	.stateColor-red{
		color: red;
	}
	
	.stateColor-green{
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
    background-color:#1e69fe;
    border-color: #1e69fe;
}

	.el-button--success {
    color: #1e69fe;
    background-color:#fff;
    border-color: #1e69fe;
}



	.user-left {
		width: 50%;
	}

	.users-right-w{
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
