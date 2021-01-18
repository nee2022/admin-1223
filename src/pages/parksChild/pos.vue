<template>
	<div class="oneCard-right">
		<div class="UserAssets-right-top">
			<div class="user-left">
				<span class="user-word">POS机</span>
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
					<el-button type="primary" icon="el-icon-search" @click="search">搜索</el-button>
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
					<el-table :data="tableData" stripe style="width: 100%">
						<el-table-column prop="id" label="设备ID" width="130">
						</el-table-column>
						<el-table-column prop="name" label="设备名称" width="180">
						</el-table-column>
						<el-table-column prop="state" label="状态">
						</el-table-column>
						<el-table-column prop="dev_id" label="编号">
						</el-table-column>
						<el-table-column prop="mac" label="设备机号">
						</el-table-column>
						<el-table-column prop="address" label="操作" width="200">
							<template slot-scope="scope">
								<div class="operation">
									<div>
										<button type="text" @click="removeUserByID(scope.row.id)"><img src="../../assets/images/delete.png" /></button>
									</div>
									<div>
										<button type="text" @click="showEditDialog(scope.row.id)"><img src="../../assets/images/compile.png" /></button>
									</div>
								</div>
							</template>
						</el-table-column>
					</el-table>
				</template>
			</div>
			<div class="tubiao" v-else>
				<div class="tubiaoBox" v-for="item in tableData">
					<div class="tubiaoBoxTop">
						<div :class="item.online == false?'offline':item.online == true?'online':''"></div>
						<div class="xinhao">
							<img src="../../assets/images/No signal.png" alt="">
						</div>
					</div>
					<div class="tubiaoBoxCon">
						<div class="posWord1">{{item.name}}</div>
						<div class="posWord2">{{item.mac}}</div>
						<div class="posWord3" v-if="item.online == false">设备已离线</div>
					</div>
					<div class="tubiaoBoxBot">
						<div class="tubiaoBoxBotImg">
							<img src="../../assets/images/Tdelete.png" style="width: 20px;height: 20px;" @click="removeUserByID(item.id)">
							<img src="../../assets/images/Teditor.png" style="width: 18px;height: 18px;"@click="showEditDialog(item.id)">
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="UserAssets-bottom" v-if="changeList == true">
			<div class="UserAssets-bottom-left" :data="tableData">
				<span>共{{total}}台机器</span>
			</div>
			<div class="UserAssets-bottom-right">
				<el-pagination background :current-page.sync.number="pagenum" @current-change="handleCurrentChange" :page-size="pagesize"
				 layout="prev, pager, next" :total="total">
				</el-pagination>
			</div>
		</div>
		<div class="UserAssets-bottom" v-else>
			<div class="UserAssets-bottom-left" :data="tableData">
				<span>共{{total}}台机器</span>
			</div>
			<div class="UserAssets-bottom-right">
				<el-pagination background :current-page.sync.number="pagenum2" @current-change="handleCurrentChange2" :page-size="pagesize"
				 layout="prev, pager, next" :total="total">
				</el-pagination>
			</div>
		</div>
		<!-- 添加设备 -->
		<el-dialog title="添加设备" :visible.sync="addDialogVisible" width="30%" @close="addDialogClosed">
			<el-form :model="addForm" :rules="addFormRules" ref="addFormRef" label-width="80px">
				<el-form-item label="设备名称" prop="name">
					<el-input v-model="addForm.name" class="addinput"></el-input>
				</el-form-item>
				<el-form-item label="编号" prop="dev_id">
					<el-input v-model="addForm.dev_id" class="addinput"></el-input>
				</el-form-item>
				<el-form-item label="设备机号" prop="mac">
					<el-input v-model="addForm.mac" class="addinput"></el-input>
				</el-form-item>
			</el-form>
			<span slot="footer" class="dialog-footer">
				<el-button @click="addDialogVisible = false">取 消</el-button>
				<el-button type="primary" @click="chargersUser">确 定</el-button>
			</span>
		</el-dialog>
		<!-- 修改设备 -->
		<el-dialog title="修改设备" :visible.sync="editDialogVisible" width="30%" @close="editDialogClosed">
			<el-form :model="editForm" ref="editFormRef" label-width="80px">
				<el-form-item label="设备名称" prop="name">
					<el-input v-model="editForm.name" class="addinput"></el-input>
				</el-form-item>
				<el-form-item label="编号" prop="dev_id">
					<el-input v-model="editForm.dev_id" class="addinput"></el-input>
				</el-form-item>
				<el-form-item label="设备机号" prop="mac">
					<el-input v-model="editForm.mac" class="addinput"></el-input>
				</el-form-item>
			</el-form>
			<span slot="footer" class="dialog-footer">
				<el-button @click="editDialogVisible = false">取 消</el-button>
				<el-button type="primary" @click="editChargerInfo">确 定</el-button>
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
				tableData: [], //卡数据
				userList: [], //这个是我新建的
				option: '',
				username: '',
				total: 1, //数据总条数
				isActive: true,
				dialogVisible: false,
				add: false,
				changeList: false,
				selected: 0, //下拉框
				pagenum: 1, //分页
				pagenum2: 1, //分页
				token: '', //token令牌
				editForm: {},
				addDialogVisible: false,
				editDialogVisible: false, //控制修改设备对话框显示隐藏
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
				],
				addForm: {
					token: localStorage.getItem('token').replace(/\"/g, ""),
					name: '',
					dev_id: '',
					mac: '',
					type: 17
				}, //添加设备添加数据
				addFormRules: {
					name: [{
						required: true,
						message: '请输入信息',
						trigger: 'blur'
					}, {
						min: 1,
						max: 10,
						message: '请输入正确的信息',
						trigger: 'blur'
					}],
					dev_id: [{
						required: true,
						message: '请输入信息',
						trigger: 'blur'
					}, {
						min: 1,
						max: 10,
						message: '请输入正确的信息',
						trigger: 'blur'
					}],
					mac: [{
						required: true,
						message: '请输入信息',
						trugger: 'blur'
					}, {
						min: 1,
						max: 10,
						message: '请输入正确的信息',
						trigger: 'blur'
					}]
				},
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
			flagF() {
				this.changeList = false
				this.getImg()
			},
			flagT() {
				this.changeList = true
				this.getUserMes()
			},
			//获取用户卡信息列表
			getUserMes() {
				//token去掉引号
				let toKen = this.token.replace(/\"/g, "")
				//console.log(toKen)
				this.$axios.get("admin/api/chargers/17?token=" + toKen + "&page=" + this.pagenum + "&row=14&keyword=" + this.input)
					.then(res => {
						console.log(res.data)
						// console.log(res.status)//打印状态码
						if (res.status == 200) {
							this.tableData = res.data.chargers //用户列表数据
							this.total = res.data.total
							console.log(this.tableData)
							this.pagesize = 14

						}
					})
			},
			getImg() {
				//token去掉引号
				let toKen = this.token.replace(/\"/g, "")
				//console.log(toKen)
				this.$axios.get("admin/api/chargers/17?token=" + toKen + "&page=" + this.pagenum + "&row=15&keyword=" + this.input)
					.then(res => {
						console.log(res.data)
						// console.log(res.status)//打印状态码
						if (res.status == 200) {
							this.tableData = res.data.chargers //用户列表数据
							this.total = res.data.total
							console.log(this.tableData)
							this.pagesize = 15

						}
					})
			},
			async removeUserByID(id) {
				let toKen = this.token.replace(/\"/g, "")
				const confirmRes = await this.$confirm('此操作将永久删除该数据, 是否继续?', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).catch(err => err)
				// console.log(confirmRes)
				if (confirmRes !== 'confirm') {
					return this.$message.info('已取消删除')
				}
				this.$axios.delete("/admin/api/charger/" + id + "?token=" + toKen)
					.then(res => {
						console.log(res.status)
						if (res.status == 200) {
							this.$message.success('删除成功')
							this.getUserMes() //刷新用户数据
						} else {
							this.$message.error('删除失败')
						}
					})
				//删除用户提示
			},
			//添加机器
			chargersUser() {
				let toKen = this.token.replace(/\"/g, "")
				this.$refs.addFormRef.validate(valid => {
					if (!valid) {
						return this.$message.error("请输入正确的信息")
					} else {
						this.$axios.post("/admin/api/charger", this.addForm)
							.then(res => {
								if (res.status !== 200) {
									return this.$message.error('添加失败!')
								}
								this.$message.success('添加成功!')
								this.addDialogVisible = false
								console.log(this.addForm)
								console.log(res)
								//刷新用户列表
								this.getUserMes()
							})
					} //若表单正则验证未通过，则不允许添加
				})
				//如果验证通过，则发起添加用户请求
			},
			//点击修改，将选择的id查询到的数据渲染到修改文本框
			showEditDialog(id) {
				this.editDialogVisible = true
				//token去掉引号
				let toKen = this.token.replace(/\"/g, "")
				// console.log(toKen)
				this.$axios.get("admin/api/charger/" + id + "?token=" + toKen) //根据id点击修改的id查询设备信息
					.then(res => {
						//console.log(res.status)
						if (res.status == 200) {
							this.editForm = res.data.charger
							console.log(res.data.charger)
						}
					})
			},
			editChargerInfo() {
				let toKen = this.token.replace(/\"/g, "")
				this.$refs.editFormRef.validate(valid => {
					if (!valid) {
						return this.$message.error("请输入正确的信息")
					} else {
						if (confirm("确认修改吗?")) {
							this.$axios.put("admin/api/charger/" + this.editForm.id, {
									token: toKen,
									name: this.editForm.name,
									dev_id: this.editForm.dev_id,
									mac: this.editForm.mac
								})
								.then(res => {
									if (res.status !== 200) {
										return this.$message.error('修改失败!')
									}
									this.$message.success('修改成功!')
									this.addDialogVisible = false
									console.log(this.editForm)
									//刷新设备列表
									this.getUserMes()
									//关闭对话框
									this.editDialogVisible = false
								})
						}

					} //若表单正则验证未通过，则不允许添加
				})
				//如果验证通过，则发起添加修改设备请求
			},
			
			search(){
				if (this.changeList = true) {
					this.getUserMes()
				} else if (this.changeList = false) {
					this.getImg()
				}
			},
			//监听页码值改变
			handleCurrentChange(newPage) {
				//console.log(newPage)
				this.pagenum = newPage
				this.getUserMes()
			},
			handleCurrentChange2(newPage) {

				this.pagenum2 = newPage
				this.getImg()

			},
			//添加套餐对话框关闭事件
			addDialogClosed() {
				this.$refs.addFormRef.resetFields()
			},

			//修改设备对话框关闭事件
			editDialogClosed() {
				this.$refs.editFormRef.resetFields()
			}
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
	
	.tubiaoBoxBotImg{
		height: 50px;
		width: 50px;
		display: flex;
		margin: 0 auto;
		justify-content: space-between;
		align-items: flex-end;
	}
	
	.tubiaoBoxTop{
		width: 90%;
		height: 50px;
		margin: 0 auto;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
	
	.posWord1{
		font-size: 22px;
		font-weight: 500;
	}
	
	.posWord2{
		font-size: 15px;
		color: #8b8b8b;
		font-weight: 600;
	}
	.posWord3{
		font-size: 22px;
		color: #8b8b8b;
	}
	
	.offline{
		width: 28px;
		height: 28px;
		border-radius: 14px;
		border: solid 3px #8e8e8e;
		background-color: #b5b5b5;
		box-sizing: border-box;
	}
	
	.online{
		width: 28px;
		height: 28px;
		border-radius: 14px;
		border: solid 3px #8e8e8e;
		background-color: #44ca41;
		box-sizing: border-box;
	}

	.tubiaoBox {
		width: 300px;
		height: 200px;
		background-color: #007DDB;
		margin: 20px 11px 10px 11px;
		border-radius: 10px;
		background-color: #eff2f4;
		box-shadow: 0px 2px 6px 0px rgba(134, 134, 134, 0.64);
	}

	.el-table td {
		padding: 0 0;
	}

	.el-input__inner {
		height: 30px;
		border: none;
	}

	.tubiao {
		width: 95%;
		margin: 0 auto;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
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
	
	.tubiaoBoxCon{
		width: 90%;
		height: 90px;
		margin:0 auto;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
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
