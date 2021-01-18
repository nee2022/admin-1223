<template>
	<div class="tem-right">
		<div class="tem-right-top">
			<div class="top-left">
				<div class="top-left-word">一码通</div>
			</div>

			<el-dialog :title="name" :visible.sync="dialogVisible" width="30%">
				<el-form>
					<el-form-item label="数量:">
						<el-input v-model="a" class="addinput"></el-input>
					</el-form-item>
					<el-form-item label="长度:">
						<el-input v-model="b" class="addinput"></el-input>
					</el-form-item>
				</el-form>
				<span slot="footer" class="dialog-footer">
					<el-button @click="dialogVisible = false">取 消</el-button>
					<el-button type="primary" @click="flag = true">确 定</el-button>
				</span>
			</el-dialog>

			<!-- 设备确认 -->
			<el-dialog title="提示" :visible.sync="flag" width="30%">
				<span>确定修改或者添加？</span>
				<span slot="footer" class="dialog-footer">
					<el-button @click="flag = false">取 消</el-button>
					<el-button type="primary" @click="(flag = false), (dialogVisible = false), add()">确 定</el-button>
				</span>
			</el-dialog>

			<div class="users-right">
				<myhead></myhead>
			</div>
		</div>
		<div class="right-con">
			<div class="right-con-right">
				<div class="right-con-top">
					<div class="textBox input_right">
						<img src="../../assets/images/search.png" class="sear-img" />
						<el-input v-model="msgss" @keyup.enter.native="cha" class="" placeholder="请输入一码通信息" clearable></el-input>
					</div>
					<div class="zhandian">
						<el-button style="width: 100px" type="primary" icon="el-icon-plus" class="but but2" @click="cha">查询</el-button>
					</div>
					<div class="zhandian">
						<el-button style="width: 100px; height: 100%" icon="el-icon-plus" class="but" @click="(dialogVisible = true), names()">添加</el-button>
					</div>
					<div class="changeList">
						<div @click="falgs" v-if="changeList == true">
							<img src="../../assets/images/changeList.png" alt="" style="width: 35px; height: 35px" />
						</div>
						<div @click="falgss" v-show="changeList == false">
							<img src="../../assets/images/changeIcon.png" alt="" style="width: 35px; height: 35px" />
						</div>
					</div>
				</div>
				<div class="tus">
					<template v-if="changeList == false">
						<el-table :data="parkList" stripe style="width: 100%">
							<el-table-column prop="id" label="ID"> </el-table-column>
							<el-table-column prop="code" label="代码"> </el-table-column>
							<el-table-column prop="station" label="站点ID"> </el-table-column>
							<el-table-column prop="charger" label="设备 ID">
							</el-table-column>
							<el-table-column prop="gun" label="端口ID"> </el-table-column>
							<el-table-column prop="url" label="二维码显示URL">
							</el-table-column>
							<el-table-column prop="expired" label="过期时间">
							</el-table-column>
							<el-table-column prop="address" label="操作" width="200">
								<template slot-scope="scope">
									<div class="operation">
										<div>
											<el-button type="text"><img @click="removeUserByID(scope.row.id)" src="../../assets/images/delete.png" /></el-button>
										</div>
										<div>
											<el-button type="text" @click="(dialogVisible = true), idd(scope.row.id)"><img src="../../assets/images/compile.png" /></el-button>
										</div>
									</div>
								</template>
							</el-table-column>
						</el-table>
					</template>
					<div v-else class="quans">
						<div class="moshi" v-for="item in parkList" :key="item.id">
							<div class="moshiss">{{ item.id }}</div>
							<div class="one">
								<img src="../../assets/images/img_16.jpg" alt="" />
							</div>
							<div class="moshis">{{ item.code }}</div>
							<div class="tow">
								<div class="tows">{{ item.dev_name || '未绑定'}}</div>
								<img src="../../assets/images/shanchu.png" alt="" />
							</div>
						</div>
					</div>
				</div>
				<div class="UserAssets-bottom aa" v-if="changeList == false">
					<div class="road-bottom-left" :data="parkList">
						<span>共{{ parkTotal }}条信息</span>
					</div>
					<div class="road-bottom-right">
						<el-pagination background :current-page="newpark" @current-change="parksNumber" :page-size="pagepark" layout="prev, pager, next"
						 :total="parkTotal" small>
						</el-pagination>
					</div>
				</div>
				<div class="UserAssets-bottom aa" v-else>
					<div class="road-bottom-left" :data="parkList">
						<span>共{{ parkTotal }}条信息</span>
					</div>
					<div class="road-bottom-right">
						<el-pagination background :current-page="newparks" @current-change="parksNumbers" :page-size="pagepark" layout="prev, pager, next"
						 :total="parkTotal" small>
						</el-pagination>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import myhead from "../../components/myhead";
	export default {
		props: ["getData"],
		components: {
			myhead
		},
		data() {
			return {
				msgss: "",
				total: 1,
				parkTotal: 0,
				token: "",
				pagenum: 1, //分页
				pagesize: 6,
				pagepark: 16,
				newpark: 1, //分页
				newparks: 1,
				tableData: [],
				parkList: [],
				dialogVisible: false,
				flag: false,
				a: "",
				b: "",
				c: "",
				d: "",
				name: "",
				lest_id: "",
				changeList: false,
			};
		},
		created() {
			this.token = localStorage.getItem("token");
			this.getParksMesList();
		},
		// watch: {
		//   "$store.state.tubiao": function (newv, oldv) {
		//     this.changeList = this.$store.state.tubiao;
		//     console.log(newv);
		//   },
		// },
		methods: {
			falgs() {
				this.changeList = !this.changeList;
				this.getParksMesList();

			},

			falgss() {
				this.changeList = !this.changeList;
				this.getParksMesTu();

			},
			cha() {
				let toKen = this.token.replace(/\"/g, "");
				this.$axios
					.get(
						"/admin/api/qrs" +
						"?token=" +
						toKen +
						"&keyword=" +
						this.msgss +
						"&page=1&row=14"
					)
					.then((res) => {
						this.msgss = "";
						console.log(res);
						this.parkList = res.data.qrcodes;
						this.parkTotal = res.data.total;
					});
			},
			async removeUserByID(id) {
				console.log(id);
				let toKen = this.token.replace(/\"/g, "");
				const confirmRes = await this.$confirm(
					"此操作将永久删除该信息, 是否继续?",
					"提示", {
						confirmButtonText: "确定",
						cancelButtonText: "取消",
						type: "warning",
					}
				).catch((err) => err);
				console.log(confirmRes);
				if (confirmRes !== "confirm") {
					return this.$message.info("已取消删除");
				}
				this.$axios
					.delete("/admin/api/qr/" + id + "?token=" + toKen)
					.then((res) => {
						console.log(res.status);
						if (res.status == 200) {
							this.$message.success("删除信息成功");
							this.getParksMesList();
							//刷新用户数据
						} else {
							this.$message.error("删除信息失败");
						}
					});
				//删除用户提示
			},
			idd(id) {
				this.name = "修改一码通";
				this.lest_id = id;
				console.log(this.lest_id);
			},
			add() {
				let toKen = this.token.replace(/\"/g, "");
				if (this.lest_id) {
					console.log("输出的是id");
					this.$axios
						.put(
							"/admin/api/qr/" +
							this.lest_id +
							"?token=" +
							toKen +
							"&count=" +
							this.a +
							"&type=1&legnth=" +
							this.b
						)
						.then((res) => {
							console.log(res);
							if (res.data.error == 0) {
								this.$message.success("修改成功");
								this.getParksMesList();
							} else {
								this.$message.success("修改失败");
							}
						});
					this.lest_id = "";
				} else {
					this.name = "添加一码通";
					console.log(this.name);

					console.log("输出的是添加");

					this.$axios
						.post(
							"/admin/api/qrs?token=" +
							toKen +
							"&count=" +
							this.a +
							"&type=1&legnth=" +
							this.b
						)
						.then((res) => {
							console.log(res);
							if (res.data.error == 0) {
								this.$message.success("添加成功");
								this.getParksMesList();
							} else {
								this.$message.success("添加失败");
							}
							console.log(res.data.error);
						});
				}
			},
			names() {
				this.name = "添加一码通";
				this.a = "";
				this.b = "";
				this.c = "";
				this.d = "";
			},
			getParksMesList() {
				let toKen = this.token.replace(/\"/g, "");
				this.$axios
					.get(
						"/admin/api/qrs/used/1/?token=" +
						toKen +
						"&page=" +
						this.newpark +
						"&row=12"
					)
					.then((res) => {
						console.log(res);
						// console.log(res.data.users)
						// console.log(res.status)//打印状态码
						if (res.status == 200) {
							this.parkList = res.data.qrcodes; //用户列表数据
							this.parkTotal = res.data.total;
							this.pagepark = 12;
							//   console.log(this.parkList);
						}
					});
			},
			getParksMesTu() {
				let toKen = this.token.replace(/\"/g, "");
				this.$axios
					.get(
						"/admin/api/qrs/used/1/?token=" +
						toKen +
						"&page=" +
						this.newparks +
						"&row=8"
					)
					.then((res) => {
						console.log(res);
						// console.log(res.data.users)
						// console.log(res.status)//打印状态码
						if (res.status == 200) {
							this.parkList = res.data.qrcodes; //用户列表数据
							this.parkTotal = res.data.total;
							this.pagepark = 8;
							//   console.log(this.parkList);
						}
					});
			},
			handleCurrentChange(newPage) {
				//console.log(newPage)
				this.pagenum = newPage;
				this.getRoadMes();
			},
			parksNumber(parknum) {
				this.newpark = parknum;
				this.getParksMesList();
			},
			parksNumbers(parknum) {
				this.newparks = parknum;
				this.getParksMesTu();
			},
		},
	};
</script>

<style scoped="scoped">
	.changeList {
		position: absolute;
		right: 53px;
		top: 115px;
	}

	.tus {
		height: 700px;
	}

	.tow {
		display: flex;
		justify-content: center;
		align-items: center;
		justify-content: space-between;
		height: 100%;
	}

	.quans {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		width: 100%;
		align-items: center;
		height: 100%;

	}

	.tows {
		font-size: 18px;
		font-weight: 400;
		color: #333333;
		flex: 7;
	}

	.tow img {
		width: 12px;
		height: 12px;
		margin-right: 10px;
	}

	.one img {
		width: 241px;
	}

	.moshis {
		font-size: 11px;
		font-family: PingFang SC;
		font-weight: 400;
		color: #818181;
		border-bottom: 1px dashed #bfbfbf;
	}

	.moshiss {
		font-size: 15px;
		font-family: PingFang SC;
		font-weight: 600;
		color: #857373;
		line-height: 36px;
	}

	/* .moshi::after {
  content: '';
  width:10px;
  height: 10px;
  background: red;
} */
	.moshi {
		margin: 20px 60px;
		box-shadow: 0px 1px 10px 0px rgba(9, 9, 9, 0.2);
		border-radius: 10px;
		width: 280px;
		height: 330px;
		display: flex;
		flex-direction: column;
		text-align: center;
	}

	.UserAssets-bgcolor .el-button--primary {
		background: #1e69fe;
	}

	.el-select {
		border: 1px solid #1e69fe !important;
		width: 33%;
	}

	.el-table td div {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.tus>>>.el-table {
		overflow: visible !important;
	}

	.el-form>>>.el-form-item__label {
		width: 96px !important;
		text-align: center;
	}

	.addinput {
		border: 1px solid #1e69fe !important;
		width: 70% !important;
	}

	.right-con-right {
		width: 100%;
	}

	.input_right {
		/* margin-left: -63px; */
		width: 65% !important;
	}

	.aa {
		margin-top: 41px !important;
	}

	.zhandian .el-button {
		padding: 0px !important;
	}

	.parkName {
		height: 15%;
		margin: 4%;
	}

	.dingwei {
		display: inline-block;
		float: left;
		margin-right: 3%;
	}

	.el-table td div {
		text-align: left;
	}

	.tem-right {
		display: flex;
		flex: 1;
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

	.but {
		width: 140px;
		padding-top: -10px;
	}

	.parkIcon {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	.parkIcon div {
		margin-right: 3%;
		text-align: center !important;
		background-color: #f2d0bd;
		height: 22px;
		width: 55px;
		line-height: 22px;
		border-radius: 5px;
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
		width: 30%;
		box-shadow: 10px 10px 15px #edf1f5;
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
		width: 70%;
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

	.right-con-top {
		width: 600px;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		margin-top: 15px;
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
