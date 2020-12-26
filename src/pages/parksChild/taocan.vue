<template>
	<div class="tem-right">
		<div class="tem-right-top">
			<div class="top-left">
				<div class="top-left-word">
					预付费套餐
				</div>
			</div>
			<div class="users-right">
				<myhead></myhead>
			</div>
		</div>
		<div class="right-con">
			<div class="right-con-left">
				<div class="right-con-top">
					<div class="textBox">
						<img src="../../assets/images/search.png" class="sear-img">
						<el-input placeholder="请输入关键字" class="textWord" clearable v-model="input1" clearable @keyup.enter.native="getRoadMes"></el-input>
					</div>
					<div>
						<el-button type="primary" icon="el-icon-plus" class="but"  @click="addDialogVisible1 = true">添加</el-button>
					</div>
				</div>
				<template>
					<el-table :data="tableData" stripe style="width:100%">
						<el-table-column prop="id" label="编号">
						</el-table-column>
						<el-table-column prop="name" label="规则">
							<template slot-scope="scope">
								<div @click="getParksMes(scope.row.id,scope.row.name)">
									{{scope.row.name}}
								</div>
							</template>
						</el-table-column>
						<el-table-column prop="address" label="操作">
							<template slot-scope="scope">
								<div class="operation">
									<div>
										<button type="text" @click="removeUserByID1(scope.row.id)"><img src="../../assets/images/delete.png" /></button>
									</div>
									<div>
										<button type="text" @click="showEditDialog1(scope.row.id)"><img src="../../assets/images/compile.png" /></button>
									</div>
								</div>
							</template>
						</el-table-column>
					</el-table>
				</template>
				<div class="UserAssets-bottom">
					<div class="road-bottom-left" :data="tableData">
						<span>共{{total}}条信息</span>
					</div>
					<div class="road-bottom-right">
						<el-pagination background :current-page.sync.number="pagenum" @current-change="handleCurrentChange" :page-size="pagesize"
						 layout="prev, pager, next" :total="total" small :pager-count='5'>
						</el-pagination>
					</div>
				</div>
			</div>
			<div class="right-con-right">
				<div class="titleG">
					<div class="right-top">
						<div class="blueD"></div>
						{{topName}}
					</div>
					<div class="blueBut">
						<el-button type="primary" icon="el-icon-plus" class="but" @click="addDialogVisible = true">添加</el-button>
					</div>
				</div>
				<div>
					<template>
						<el-table :data="parkList" stripe style="width:100%">
							<el-table-column prop="id" label="套餐ID">
							</el-table-column>
							<el-table-column prop="name" label="泊位">
							</el-table-column>
							<el-table-column prop="address" label="地址">
							</el-table-column>
							<el-table-column prop="mac" label="机号">
							</el-table-column>
							<el-table-column prop="address" label="操作">
								<template slot-scope="scope">
								<div class="operation">
									<div>
										<el-button type="text" @click="removeUserByID(scope.row.id)"><img src="../../assets/images/delete.png" /></el-button>
									</div>
									<div>
										<el-button type="text" @click="showEditDialog(scope.row.id)"><img src="../../assets/images/compile.png" /></el-button>
									</div>
								</div>
								</template>
							</el-table-column>
						</el-table>
					</template>
				</div>
				<div class="UserAssets-bottom">
					<div class="road-bottom-left" :data="parkList">
						<span>共{{parkTotal}}条信息</span>
					</div>
					<div class="road-bottom-right">
						<el-pagination background :current-page.sync.number="newpark" @current-change="parksNumber" :page-size="pagepark"
						 layout="prev, pager, next" :total="parkTotal">
						</el-pagination>
					</div>
				</div>
			</div>
		</div>
		
		<!-- 添加规则 -->
		<el-dialog title="添加设备" :visible.sync="addDialogVisible" width="30%" @close="addDialogClosed">
			<el-form :model="addForm" :rules="addFormRules" ref="addFormRef" label-width="80px">
				<el-form-item label="标题" prop="name">
					<el-input v-model="addForm.name" class="addinput"></el-input>
				</el-form-item>
				<el-form-item label="价格" prop="price">
					<el-input v-model="addForm.price" class="addinput"></el-input>
				</el-form-item>
				<el-form-item label="开始时间" prop="start_time">
					<el-input v-model="addForm.start_time" class="addinput"></el-input>
				</el-form-item>
				<el-form-item label="结束时间" prop="end_time">
					<el-input v-model="addForm.end_time" class="addinput"></el-input>
				</el-form-item>
			</el-form>
			<span slot="footer" class="dialog-footer">
				<el-button @click="addDialogVisible = false">取 消</el-button>
				<el-button type="primary" @click="chargersUser">确 定</el-button>
			</span>
		</el-dialog>
		<!-- 修改规则 -->
		<el-dialog title="修改设备" :visible.sync="editDialogVisible" width="30%" @close="editDialogClosed">
			<el-form :model="editForm" :rules="editFormRules" ref="editFormRef" label-width="80px">
				<el-form-item label="ID" prop="name">
					<el-input v-model="editForm.name" class="addinput"></el-input>
				</el-form-item>
				<el-form-item label="价格" prop="price">
					<el-input v-model="editForm.price" class="addinput"></el-input>
				</el-form-item>
				<el-form-item label="开始时间" prop="start_time">
					<el-input v-model="editForm.start_time" class="addinput"></el-input>
				</el-form-item>
				<el-form-item label="结束时间" prop="end_time">
					<el-input v-model="editForm.end_time" class="addinput" disabled></el-input>
				</el-form-item>
			</el-form>
			<span slot="footer" class="dialog-footer">
				<el-button @click="editDialogVisible = false">取 消</el-button>
				<el-button type="primary" @click="editChargerInfo">确 定</el-button>
			</span>
		</el-dialog>
		<!-- 添加规则 -->
		<el-dialog title="添加设备" :visible.sync="addDialogVisible1" width="30%" @close="addDialogClosed1">
			<el-form :model="addForm1" :rules="addFormRules1" ref="addFormRef1" label-width="80px">
				<el-form-item label="套餐名称" prop="name">
					<el-input v-model="addForm1.name" class="addinput"></el-input>
				</el-form-item>
			</el-form>
			<span slot="footer" class="dialog-footer">
				<el-button @click="addDialogVisible1 = false">取 消</el-button>
				<el-button type="primary" @click="chargersUser1">确 定</el-button>
			</span>
		</el-dialog>
		<!-- 修改规则 -->
		<el-dialog title="修改设备" :visible.sync="editDialogVisible1" width="30%" @close="editDialogClosed1">
			<el-form :model="editForm1" :rules="editFormRules1" ref="editFormRef1" label-width="80px">
				<el-form-item label="套餐名称" prop="name">
					<el-input v-model="editForm1.name" class="addinput"></el-input>
				</el-form-item>
			</el-form>
			<span slot="footer" class="dialog-footer">
				<el-button @click="editDialogVisible1 = false">取 消</el-button>
				<el-button type="primary" @click="editChargerInfo1">确 定</el-button>
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
				total: 1,
				parkTotal: 0,
				token: '',
				pagenum: 1, //分页
				pagesize: 12,
				pagepark: 14,
				isActive:0,
				newpark: 1, //分页
				tableData: [],
				parkList: [],
				input1:'',
				input2:'',
				tcID: '',
				value: true,
				topName: '',
				isType: false,
				leftType: '',
				getFristID:'',//页面初次加载时，根据左边第一个id查右边的数据
				editForm: {},
				editForm1: {},
				getName:'',
				addDialogVisible: false,
				addDialogVisible1: false,
				editDialogVisible: false, //控制修改设备对话框显示隐藏
				editDialogVisible1: false, //控制修改设备对话框显示隐藏
				addForm: {
					token: localStorage.getItem('token').replace(/\"/g, ""),
					name: '',
					price:'',
					start_time: '',
					end_time: '',
				}, //添加设备添加数据
				addForm1: {
					token: localStorage.getItem('token').replace(/\"/g, ""),
					name: '',
				}, //添加设备添加数据
				//修改设备表单数据
				editFormRules: {
					name: [{
						required: true,
						message: '请输入标题',
						trigger: 'blur'
					}, {
						min: 3,
						max: 50,
						message: '标题的长度在3~50个字符之间',
						trigger: 'blur'
					}],
					price: [{
						required: true,
						message: '请输入价格',
						trigger: 'blur'
					}, {
						min: 3,
						max: 10,
						message: '请输入正确的价格',
						trigger: 'blur'
					}],
					start_time: [{
						required: true,
						message: '请输入开始时间，例如：002230 00:22:30',
						trigger: 'blur'
					}, {
						min: 3,
						max: 10,
						message: '请输入正确的时间',
						trigger: 'blur'
					}],
				},
				editFormRules1: {
					name: [{
						required: true,
						message: '请输入规则套餐名称',
						trigger: 'blur'
					}, {
						min: 1,
						max: 50,
						message: '规则套餐名称的长度在3~50个字符之间',
						trigger: 'blur'
					}]
				},
				//添加表单的验证规则
				addFormRules: {
					name: [{
						required: true,
						message: '请输入规则标题',
						trigger: 'blur'
					}, {
						min: 3,
						max: 50,
						message: '规则套餐标题的长度在3~50个字符之间',
						trigger: 'blur'
					}],
					price: [{
						required: true,
						message: '请输入价格',
						trigger: 'blur'
					}, {
						min: 3,
						max: 20,
						message: '请输入正确的价格',
						trigger: 'blur'
					}],
					start_time: [{
						required: true,
						message: '请输入开始时间',
						trigger: 'blur'
					}, {
						min: 3,
						max:20,
						message: '时间的长度在3~10个字符之间',
						trigger: 'blur'
					}],
					end_time: [{
						required: true,
						message: '请输入结束时间',
						trugger: 'blur'
					}, {
						trigger: 'blur'
					}]
				},
				addFormRules1: {
					name: [{
						required: true,
						message: '请输入规则套餐名',
						trigger: 'blur'
					}, {
						min: 3,
						max: 50,
						message: '长度在3~50个字符之间',
						trigger: 'blur'
					}],
				},
			}
		},
		created() {
			this.token = localStorage.getItem('token')
			this.getRoadMes()
			setTimeout(() => {
				this.getParksMe()
			}, 500);
		},
		methods: {
			//左边列表总信息
			getRoadMes() {
				//token去掉引号
				let toKen = this.token.replace(/\"/g, "")
				// console.log(toKen)
				this.$axios.get("/admin/api/package/groups?token=" + toKen + "&page=" + this.pagenum + "&row=14&keyword=" + this.input1)
					.then(res => {
						console.log(res.data)
						// console.log(res.data.users)
						// console.log(res.status)//打印状态码
						if (res.status == 200) {
							this.tableData = res.data.package_groups //用户列表数据
							this.total = res.data.total
							this.getFristID=this.tableData[0].id
							// console.log(this.tableData)
							this.topName = this.tableData[0].name
						}
					})
			},
			//根据左边点击id查询右边信息
			getParksMes(id, name) {
				this.leftType = id
				this.getFristID = id
				//token去掉引号
				let toKen = this.token.replace(/\"/g, "")
				// console.log(toKen)
				this.$axios.get("admin/api/package/group/" + id + "/packages?token=" + toKen + "&page=" + this.newpark +
						"&row=14")
					.then(res => {
						console.log(res.data.packages)
						// console.log(res.status)//打印状态码
						if (res.status == 200) {
							this.parkList = res.data.packages //用户列表数据
							this.parkTotal = res.data.total
							this.isType = true
							// console.log(this.parkList)
						}
						this.topName = name
					})
			},
			//右边列表总信息
			getParksMe() {
				//token去掉引号
				let toKen = this.token.replace(/\"/g, "")
				// console.log(toKen) /admin/api/lot_rate/group/{group}/lot_rates
				this.$axios.get("admin/api/package/group/" + this.getFristID + "/packages?token=" + toKen + "&page=" + this.newpark + "&row=14")
					.then(res => {
						console.log(res.data)
						// console.log(res.status)//打印状态码
						if (res.status == 200) {
							this.parkList = res.data.packages //用户列表数据
							this.parkTotal = res.data.total
						}
					})
			},
			//点击确认按钮，添加新设备
			chargersUser() {
				let toKen = this.token.replace(/\"/g, "")
				this.$refs.addFormRef.validate(valid => {
					if (!valid) {
						return this.$message.error("请输入正确的信息")
					} else {
						this.$axios.post("/admin/api/package?token="+this.addForm.token+"&name=" + this.addForm.name + "&price="+ this.addForm.price + "&start_time="+ this.addForm.start_time + "&end_time=" + this.addForm.end_time + "&group=" + this.getFristID)
							.then(res => {
								if (res.status !== 200) {
									return this.$message.error('添加数据失败!')
								}
								this.$message.success('添加数据成功!')
								this.addDialogVisible = false
								console.log(this.addForm)
								console.log(res)
								//刷新用户列表
								setTimeout(() => {
									this.getParksMe()
								}, 1000);
							})
					} //若表单正则验证未通过，则不允许添加
				})
				//如果验证通过，则发起添加用户请求
			},
			chargersUser1() {
				let toKen = this.token.replace(/\"/g, "")
				this.$refs.addFormRef1.validate(valid => {
					if (!valid) {
						return this.$message.error("请输入正确的信息")
					} else {
						this.$axios.post("/admin/api/package/group", this.addForm1)
							.then(res => {
								if (res.status !== 200) {
									return this.$message.error('添加数据失败!')
								}
								this.$message.success('添加数据成功!')
								this.addDialogVisible1 = false
								setTimeout(() => {
									this.getRoadMes()
								}, 1000);
							})
					} //若表单正则验证未通过，则不允许添加
				})
				//如果验证通过，则发起添加用户请求
			},
			
			//根据ID删除泊位
			async removeUserByID(id) {
				console.log(id)
				let toKen = this.token.replace(/\"/g, "")
				const confirmRes = await this.$confirm('此操作将永久删除该泊位, 是否继续?', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).catch(err => err)
				// console.log(confirmRes)
				if (confirmRes !== 'confirm') {
					return this.$message.info('已取消删除')
				}
				this.$axios.delete("/admin/api/package/" + id + "?token=" + toKen)
					.then(res => {
						console.log(res.status)
						if (res.status == 200) {
							this.$message.success('删除数据成功')
							setTimeout(() => {
								this.getParksMe() //刷新规则数据
							}, 1000);
						} else {
							this.$message.error('删除数据失败')
						}
					})
				//删除设备提示
			},
			async removeUserByID1(id) {
				console.log(id)
				let toKen = this.token.replace(/\"/g, "")
				const confirmRes1 = await this.$confirm('此操作将永久删除该用户, 是否继续?', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).catch(err => err)
				// console.log(confirmRes)
				if (confirmRes1 !== 'confirm') {
					return this.$message.info('已取消删除')
				}
				this.$axios.delete("/admin/api/package/group/" + id + "?token=" + toKen)
					.then(res => {
						console.log(res)
						if (res.status == 200) {
							this.$message.success('删除数据成功')
							setTimeout(() => {
								this.getRoadMes() //刷新设备数据
							}, 1000);
						} else {
							this.$message.error('删除数据失败')
						}
					})
				//删除设备提示
			},
			
			showEditDialog(id) {
				this.editDialogVisible = true
				//token去掉引号
				let toKen = this.token.replace(/\"/g, "")
				// console.log(toKen)
				this.$axios.get("/admin/api/package/" + id + "?token=" + toKen) //根据id点击修改的id查询设备信息
					.then(res => {
						//console.log(res.status)
						if (res.status == 200) {
							this.editForm = res.data.package
						}
					})
			},
			showEditDialog1(id) {
				this.editDialogVisible1 = true
				//token去掉引号
				let toKen = this.token.replace(/\"/g, "")
				// console.log(toKen)
				this.$axios.get("/admin/api/package/group/" + id + "?token=" + toKen) //根据id点击修改的id查询设备信息
					.then(res => {
						//console.log(res.status)
						if (res.status == 200) {
							this.editForm1 = res.data.package_group
						}
					})
			},
			
			//提交修改后的设备信息
			editChargerInfo() {
				let toKen = this.token.replace(/\"/g, "")
				this.$refs.editFormRef.validate(valid => {
					if (!valid) {
						return this.$message.error("请输入正确的信息")
					} else {
						if (confirm("确认修改吗?")) {
							this.$axios.put("/admin/api/package/" + this.editForm.id, {
									token: toKen,
									name: this.editForm.name,
									price: this.editForm.price,
									start_time: this.editForm.start_time,
									end_time: this.editForm.end_time
								})
								.then(res => {
									if (res.status !== 200) {
										return this.$message.error('设备修改失败!')
									}
									this.$message.success('设备修改成功!')
									this.addDialogVisible = false
									//刷新设备列表
									setTimeout(() => {
										this.getParksMe()
									}, 1000);
									//关闭对话框
									this.editDialogVisible = false
								})
						}
			
					} //若表单正则验证未通过，则不允许添加
				})
				//如果验证通过，则发起添加修改设备请求
			},
			//提交修改后的设备信息
			editChargerInfo1() {
				let toKen = this.token.replace(/\"/g, "")
				this.$refs.editFormRef1.validate(valid => {
					if (!valid) {
						return this.$message.error("请输入正确的信息")
					} else {
						if (confirm("确认修改吗?")) {
							this.$axios.put("/admin/api/package/group/" + this.editForm1.id, {
									token: toKen,
									name: this.editForm1.name,
								})
								.then(res => {
									if (res.status !== 200) {
										return this.$message.error('设备站点失败!')
									}
									this.$message.success('设备站点成功!')
									this.addDialogVisible1 = false
									console.log(this.editForm1)
									//刷新设备列表
									setTimeout(() => {
										this.getRoadMes() //刷新设备数据
									}, 1000);
									//关闭对话框
									this.editDialogVisible1 = false
								})
						}
			
					} //若表单正则验证未通过，则不允许添加
				})
				//如果验证通过，则发起添加修改设备请求
			},
			//添加设备对话框关闭事件
			addDialogClosed1() {
				this.$refs.addFormRef1.resetFields()
			},
			addDialogClosed() {
				this.$refs.addFormRef.resetFields()
			},
			//修改设备对话框关闭事件
			editDialogClosed() {
				this.$refs.editFormRef.resetFields()
			},
			editDialogClosed1() {
				this.$refs.editFormRef1.resetFields()
			},
			
			//点击改变背景色
			changeBg(id){
				this.isActive=id;
				console.log(this.isActive)
			},
			handleCurrentChange(newPage) {
				//console.log(newPage)
				this.pagenum = newPage
				this.getRoadMes()
			},
			parksNumber(parknum) {
				this.newpark = parknum
				if (this.isType) {
					this.getParksMes(this.leftType)
				} else {
					this.getParksMe()
				}
			}
		}

	}
</script>

<style scoped="scoped">
	.tem-right {
		display: flex;
		flex: 1;
		width: 80%;
		flex-direction: column;
		background-color: white;
		border-top-left-radius: 50px;
		border-bottom-left-radius: 50px;
	}

	.parkIcon-word {
		width: 38px;
		height: 13px;
		font-family: PingFangSC-Regular;
		font-size: 13px;
		font-weight: normal;
		font-stretch: normal;
		line-height: 20px;
		letter-spacing: 0px;
		color: #5f6062;
	}

	.titleG {
		display: flex;
		flex-direction: row;
		width: 100%;
		justify-content: space-between;
		align-items: center;
	}

	.BGactive{
		background-color: #bed3ff;
	}
	.parkIcon {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	.parkIcon div {
		background-color: #f2d0bd;
		height: 22px;
		width: 55px;
		line-height: 22px;
		border-radius: 5px;
	}
	
	.textBox .el-input{
		border: none;
	}
	
	.el-input {
	    border: solid 1px #007DDB;
		border-radius: 10px;
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


	.leftBox-con {
		display: flex;
		flex-direction: column;
		width: 40%;
	}

	.leftBox {
		display: flex;
		flex-direction: row;
	}

	.right-con-left {
		width: 26%;
		box-shadow: 1px 1px 20px 10px #edf1f5;
		height: 800px;
		border-radius: 10px;
	}


	.right-con-right {
		width: 70%;

	}

	.parkimg {
		margin: 13px 20px;
	}

	.parkimg img {
		width: 78px;
		height: 78px;
	}

	.el-table .cell {
		line-height: 33px;
	}

	.right-con {
		width: 95%;
		margin: 0 auto;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	.road-bottom-right {
		width: 65%;
		text-align: right;
	}

	.road-bottom-left {
		width: 30%;
	}

	.tem-right-top {
		display: flex;
		flex-direction: row;
		width: 95%;
		margin: 20px auto;
		margin-top: 36px;
	}
	
	.el-table td div {
		margin: 0 auto;
	}

	.right-con-top {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		margin-top: 15px;
	}

	.blueD {
		width: 10px;
		height: 10px;
		border-radius: 100%;
		background-color: #1e69fe;
		margin: 0px 15px;
	}

	.top-right {
		display: flex;
		width: 125px;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}

	.top-left {
		flex: 1;
	}

	.textBox {
		width: 60%;
	}

	.right-top {
		background-color: #edf1f5;
		width: 90%;
		height: 55px;
		font-size: 24px;
		line-height: 55px;
		border-radius: 10px;
		display: flex;
		flex-direction: row;
		align-items: center;
		color: #1e69fe;
	}

	.blueBut {
		margin: 15px 0;
	}

	.sear-img {
		width: 15px;
		height: 15px;
		margin-left: 10px;
	}

	.top-left-word {
		font-family: PingFangSC-Regular;
		font-size: 24px;
		font-weight: normal;
		font-stretch: normal;
		line-height: 24px;
		letter-spacing: 1px;
		color: #000000;
	}
</style>
