<template>
	<div class="tem-right">
		<div class="tem-right-top">
			<div class="top-left">
				<div class="top-left-word">直流桩</div>
			</div>

			<el-dialog :title="name" :visible.sync="dialogVisible" width="30%">
				<el-form>
					<el-form-item label="名称:">
						<el-input v-model="a" class="addinput"></el-input>
					</el-form-item>
					<el-form-item label="机号:">
						<el-input v-model="b" class="addinput"></el-input>
					</el-form-item>
					<el-form-item label="编号:">
						<el-input v-model="c" class="addinput"></el-input>
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
						<el-input v-model="msgss" @keyup.enter.native="cha" class="" placeholder="请输入直流桩信息" clearable></el-input>
					</div>
					<div class="zhandian">
						<el-button style="width: 100px" type="primary" icon="el-icon-plus" class="but but2" @click="cha">查询</el-button>
					</div>
					<div class="zhandian">
						<el-button style="width: 100px; height: 100%" icon="el-icon-plus" class="but" @click="(dialogVisible = true), names()">添加</el-button>
					</div>
				</div>
				<div class="changeList">
					<div @click="falgs" v-if="changeList == false">
						<img src="../../assets/images/changeList.png" alt="" style="width: 35px; height: 35px" />
					</div>
					<div @click="falgss" v-show="changeList == true">
						<img src="../../assets/images/changeIcon.png" alt="" style="width: 35px; height: 35px" />
					</div>
				</div>
				<div class="tus">
					<template v-if="changeList == false">
						<el-table :data="parkList" stripe style="width: 100%">
							<el-table-column prop="id" label="设备ID">
							</el-table-column>
							<el-table-column prop="name" label="名称"> </el-table-column>
							<el-table-column label="类型">
								<template slot-scope="scope">
									<div style="text-align: center !important">
										{{ typeres[scope.row.type] }}
									</div>
								</template>
							</el-table-column>
							<el-table-column prop="mac" label="机号"> </el-table-column>
							<el-table-column label="状态" prop="online">
								<template slot-scope="scope">
									<span v-if="scope.row.online == true">在线</span>
									<span v-else>离线</span>
								</template>
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
						<div class="moshi" v-for="(item, listI) in parkList" :key="listI">
							<div class="one">
								<div v-if="item.online == false" class="gg"></div>
								<div v-else-if="item.online == true" :class="
                    item.busy == true ? 'r' : item.busy == false ? 'g' : ''
                  "></div>
								<span>{{ item.mac }}</span>
								<div v-if="item.online==false">
									<img src="../../assets/images/Nosignal.png" alt="" />
								</div>
								<div v-else>
									<img src="../../assets/images/signal1.png" alt="" />
								</div>
							</div>
							<div v-if="item.ports">
								<div :title="item.address" class="jin" v-if="!item.address">
									暂无地点
								</div>
								<div :title="item.address" class="jin" v-else>
									{{ item.address }}
								</div>

								<div class="zhan" v-if="item.soc">
									{{ item.soc }}<span>%</span>
								</div>
								<div class="zhan" v-else>暂无车辆</div>
							</div>
							<div v-else>
								<div class="lixian">设备已离线</div>
							</div>
							<!-- <div class="zhan">{{ item.signal}}</div> -->

							<div class="lie">
								<div @click="dianji(listI, i.soc)" v-for="(i, index) in item.ports" :key="index">
									{{ i.port || 1 }}
								</div>
							</div>
							<!-- <div class="lie" v-else>
                <div @click="dianji(listI, i.soc)"  v-for="(i, index) in item.ports"
                  :key="index">
                  1
                </div>
              </div> -->
							<div class="ts">
								<img style="width: 19px; height: 19px" src="../../assets/images/delete9.png" alt="" />
								<img src="../../assets/images/editor9.png" alt="" />
							</div>
						</div>
					</div>
				</div>
				<div class="UserAssets-bottom aa" v-if="changeList == false">
					<div class="road-bottom-left" :data="parkList">
						<span>共{{ parkTotal }}条信息</span>
					</div>
					<div class="aRight">
						<el-pagination background :current-page="newpark" @current-change="parksNumber" :page-size="pagepark" layout="prev, pager, next"
						 :total="parkTotal" small>
						</el-pagination>
					</div>
				</div>
				<div class="UserAssets-bottom aa" v-else>
					<div class="road-bottom-left" :data="parkList">
						<span>共{{ parkTotal }}条信息</span>
					</div>
					<div class="aRight">
						<el-pagination background :current-page="newparkt" @current-change="parksNumbertt" :page-size="pagepark" layout="prev, pager, next"
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
				parkTotals: 0,
				token: "",
				pagenum: 1, //分页
				pagesize: 6,
				pagepark: 16,
				pageparks: 18,
				newpark: 1, //分页
				newparks: 1,
				newparkt: 1,
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
				typeres: ["sdf", "直流桩", "交流桩"],
				changeList: true,
			};
		},
		created() {
			this.token = localStorage.getItem("token");
			if (this.changeList == false) {
				this.getParksMesList()
			} else if (this.changeList == true) {
				this.getParksMesTu()
			}
		},
		methods: {
			dianji(q, soc) {
				this.$set(this.parkList[q], "soc", soc);
				console.log(q, soc);
			},
			falgs() {
				this.changeList = !this.changeList;
				this.getParksMesTu();
			},

			falgss() {
				this.changeList = !this.changeList;
				this.getParksMesList();
			},
			cha() {
				let toKen = this.token.replace(/\"/g, "");
				this.$axios
					.get(
						"admin/api/chargers" +
						"?token=" +
						toKen +
						"&page=1&row=14&keyword=" +
						this.msgss
					)
					.then((res) => {
						console.log(res);
						this.parkList = res.data.chargers;
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
					.delete("/admin/api/charger/" + id + "?token=" + toKen)
					.then((res) => {
						console.log(res.status);
						if (res.status == 200) {
							this.$message.success("删除直流桩成功");
							this.getParksMesList();
							//刷新用户数据
						} else {
							this.$message.error("删除直流桩失败");
						}
					});
				//删除用户提示
			},
			idd(id) {
				this.name = "修改直流桩";
				this.lest_id = id;
				console.log(this.lest_id);
			},
			add() {
				let toKen = this.token.replace(/\"/g, "");
				if (this.lest_id) {
					console.log("输出的是id");
					this.$axios
						.put(
							"/admin/api/charger/" +
							this.lest_id +
							"?token=" +
							toKen +
							"&name=" +
							this.a +
							"&type=1&mac=" +
							this.b +
							"&dev_id=" +
							this.c
						)
						.then((res) => {
							console.log(res);
							if (res.data.error == 0) {
								this.$message.success("修改成功");

								this.getParksMesList();
							} else {
								this.$message.error("修改失败");
							}
						});
					this.lest_id = ''
					this.a = "";
					this.b = "";
					this.c = "";
					this.d = "";
				} else {
					this.name = "添加直流桩";
					console.log(this.name);

					console.log("输出的是添加");

					this.$axios
						.post(
							"/admin/api/charger?token=" +
							toKen +
							"&name=" +
							this.a +
							"&mac=" +
							this.b +
							"&type=1&dev_id=" +
							this.c
						)
						.then((res) => {
							console.log(res);
							if (res.data.error == 0) {
								this.$message.success("添加成功");

								this.getParksMesList();
							} else {
								this.$message.error("添加失败");
							}
							console.log(res.data.error);
						});
					this.a = "";
					this.b = "";
					this.c = "";
					this.d = "";
				}
			},
			names() {
				this.name = "添加直流桩";
			},
			getParksMesList() {
				let toKen = this.token.replace(/\"/g, "");
				this.$axios
					.get(
						"/admin/api/chargers/1/?token=" +
						toKen +
						"&page=" +
						this.newpark +
						"&row=14"
					)
					.then((res) => {
						console.log(res);
						// console.log(res.data.users)
						// console.log(res.status)//打印状态码
						if (res.status == 200) {
							this.parkList = res.data.chargers; //用户列表数据
							this.parkTotal = res.data.total;
							this.pagepark = 14;
							//   console.log(this.parkList);
						}
					});
			},
			getParksMesTu() {
				let toKen = this.token.replace(/\"/g, "");
				this.$axios
					.get(
						"/admin/api/chargers/1/?token=" +
						toKen +
						"&attach=pdr,state,ports&page=" +
						this.newparkt +
						"&row=18"
					)
					.then((res) => {
						console.log(res);
						// console.log(res.data.users)
						// console.log(res.status)//打印状态码
						if (res.status == 200) {
							this.parkList = res.data.chargers; //用户列表数据
							this.parkTotal = res.data.total;
							this.pagepark = 18;
							//   console.log(this.parkList);
						}
					});
			},

			parksNumber(parknum) {
				this.newpark = parknum;
				this.getParksMesList();
			},
			parksNumbertt(parknum) {
				this.newparkt = parknum;
				this.getParksMesTu();
			},
		},
	};
</script>

<style scoped="scoped">
	.gg {
		background: #868686 !important;
	}

	.r {
		background: red !important;
	}

	.g {
		background: #44ca41 !important;
	}

	.lixian {
		height: 94px;
		font-size: 24px;
		font-family: PingFang SC;
		font-weight: 400;
		color: #76746f;
		display: flex;
		justify-content: center;
		align-items: center;
		border-bottom: 1px solid #d2d2d2;
	}

	.lie div {
		cursor: pointer;
		width: 26px;
		height: 26px;
		background: #bfbfbf;
		border-radius: 4px;
		text-align: center;
		line-height: 26px;
		margin-left: 5px;

	}

	.lie {
		display: flex;
		width: 100%;
	}

	.back {
		background: red !important;
	}

	.aRight {}

	.el-pagination.is-background.el-pagination--small .el-pager li {
		background: #bfbfbf !important;
	}

	.active {
		background: #54a75c !important;
	}

	.el-pagination {
		text-align: center;
	}

	.ts img {
		width: 16px;
		height: 16px;
		margin: 2px;
	}

	.ts {
		height: 42px;
		display: flex;
		justify-content: center;
		justify-content: center;
		align-items: center;
	}

	.bb {
		margin: 10px 0 0 0 !important;
		justify-content: center;
		border-bottom: 1px #d2d2d2 solid;
		height: 37px;
	}

	.zhan {
		font-size: 24px;
		font-family: Adobe Heiti Std;
		font-weight: normal;
		color: #a2a2a2;
		line-height: 26px;
		justify-content: center;
		height: 42px;
		align-items: center;
		display: flex;
	}

	.jin {
		font-size: 20px;
		font-family: PingFang SC;
		font-weight: 400;
		color: #2c2c2c;
		line-height: 32px;
		display: flex;
		justify-content: center;
		height: 42px;
		align-items: center;
	}

	.one span {
		font-size: 16px;
		font-family: PingFang SC;
		font-weight: 400;
		color: #767677;
		line-height: 28px;
	}

	.one img {
		width: 25px;
		height: 20px;
	}

	.one {
		display: flex;
		height: 27px;
		align-items: center;
		justify-content: space-around;
		height: 50px;
	}

	.one>div:nth-child(1) {
		width: 21px;
		height: 21px;
		background: #44ca41;
		border-radius: 50%;
		border: 2px solid #8e8e8e;
		box-sizing: border-box;

	}

	.moshi {
		width: 218px;
		height: 204px;
		background: #eff2f4;
		box-shadow: 0px 2px 6px 0px rgba(134, 134, 134, 0.64);
		border-radius: 10px;
		margin: 25px;
	}

	.quans {
		margin-left: -25px;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		width: 100%;
		height: 100%;
	}

	.tus {
		height: 700px;
	}

	.changeList {
		position: absolute;
		right: 53px;
		top: 115px;
		z-index: 999;
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
		justify-content: space-between;
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

	.tus>>>.el-table {
		overflow: visible !important;
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
