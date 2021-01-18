<template>
	<div class="jiben">
		<div class="jiben-right-top">
			<div class="myhead1">
				<div class="jiben-left">
					<span class="user-word">基本资料</span>
				</div>
				<div class="jiben-right">
					<myhead></myhead>
				</div>
			</div>
			<div class="myhead2">
				<div class="myhead2-left">
					<img src="../../assets/images/timgr.png" style="width: 53px;height: 53px;" />
					<span class="jiben-nameWord">{{jibenUsername}}</span>
					<span class="jiben-green">(运行中)</span>
					<div class="myhead2-but-box">
						<div class="myhead2-but" @click="back">返回上一级页面</div>
					</div>
				</div>
				<div class="myhead2-right">
					<div class="myhead2-right-box">
						<el-button icon="el-icon-refresh" @click="shua">刷新</el-button>
					</div>
				</div>
			</div>
		</div>
		<div class="jiben-right-con">
			<div class="userMes">
				<div class="title-box">
					<div class="blue-dian"></div>
					<span class="jiben-right-conWord">基本信息</span>
				</div>
				<div class="con-con">
					<div class="con-con-box">
						<span>头像:</span>
						<div>
							<img src="../../assets/images/timgr.png" alt="用户头像">
						</div>
					</div>
					<div class="con-con-box">
						<span>性别:</span>
						<div>
							<span class="sex" v-if="editForm.sex == 0">未知</span>
							<span class="sex" v-if="editForm.sex == 1">男(不可更改)</span>
							<span class="sex" v-if="editForm.sex == 2">女(不可更改)</span>
						</div>
					</div>
					<div class="con-con-box">
						<span>用户ID:</span>
						<div>
							<input type="text" v-model="inputUserID" disabled="disabled" class="jibenInput banInput">
						</div>
					</div>
					<div class="con-con-box">
						<span>用户账号:</span>
						<div>
							<input type="text" v-model="editForm.username" class="jibenInput">
						</div>
					</div>
					<div class="con-con-box">
						<span>手机号:</span>
						<div>
							<input type="text" v-model="editForm.telephone" class="jibenInput ">
						</div>
					</div>
					<!-- <div class="con-con-box">
						<span>密码:</span>
						<div>
							<input type="text" v-model="editForm.password" class="jibenInput">
						</div>
					</div> -->
				</div>
			</div>
			<div class="userMes">
				<div class="title-box">
					<div class="blue-dian"></div>
					<span class="jiben-right-conWord">账号信息</span>
				</div>
				<div class="con-con1">
					<div class="con-con-box">
						<span>钱包余额:</span>
						<div><input type="text" v-model="editForm.amount" disabled="disabled" class="jibenInput banInput"></div>
					</div>
					<div class="con-con-box">
						<span>可用状态:</span>
						<div>
							<el-switch v-model="editForm.valid" active-color="#1e69fe" inactive-color="#ccc">
							</el-switch>
						</div>
					</div>
					<div class="con-con-box">
						<span>积分:</span>
						<div>
							<input type="text" v-model="editForm.score" disabled="disabled" class="jibenInput banInput">
						</div>
					</div>
					<div class="con-con-box">
						<span>注册时间:</span>
						<div>
							<input type="text" v-model="editForm.date_created" disabled="disabled" class="jibenInput banInput">
						</div>
					</div>
				</div>
			</div>
			<div class="userMes">
				<div class="title-box">
					<div class="blue-dian"></div>
					<span class="jiben-right-conWord">联系信息</span>
				</div>
				<div class="con-con2">
					<div class="con-con-box">
						<span>国家/地区</span>
						<div><input type="text" v-model="editForm.country" disabled="disabled" class="jibenInput banInput"></div>
					</div>
					<div class="con-con-box">
						<span>所在地区:</span>
						<div class="twoInput">
							<input type="text" v-model="editForm.province" class="jibenInput two" placeholder="例如:省">
							<input type="text" v-model="editForm.city" class="jibenInput two" placeholder="例如:市">
						</div>
					</div>
					<div class="con-con-box">
						<span>街道地址:</span>
						<div>
							<input type="text" v-model="editForm.address" class="jibenInput">
						</div>
					</div>
				</div>
			</div>
		</div>
		<div style="width: 50%;">
			<div class="con-bottom">
				<div class="but1" @click="reset">
					重置
				</div>
				<div class="but2" @click="getEditForm">
					保存
				</div>
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
				inputUserID: '',
				inputScore: '',
				inputAmount: '',
				country: '',
				inputFax: '',
				editForm:{
					username: '',
					telephone:'',
					// password:'',
					province:'',
					city:'',
					valid:'',//可用状态
					address:''
				}
			}
		},
		created() {
			this.token = localStorage.getItem('token')
			this.inputUserID = sessionStorage.getItem('id')
			this.jibenUsername = sessionStorage.getItem('username')
			this.getUserMe()
		},
		mounted() {

		},
		methods: {
			//获取用户信息列表
			getUserMe() {
				//token去掉引号
				let toKen = this.token.replace(/\"/g, "")
				// console.log(toKen)
				this.$axios.get("admin/api/user/" + this.inputUserID + "?token=" + toKen)
					.then(res => {
						// console.log(res.data)
						console.log(res)
						if (res.status == 200) {
							this.editForm=res.data.user //用户列表数据
							console.log(this.editForm.username)
					
						}
					})
			},
			getEditForm(){
				let toKen = this.token.replace(/\"/g, "")
				this.$axios.put("admin/api/user/" + this.inputUserID,{
					token:toKen,
					username:this.editForm.username,
					telephone:this.editForm.telephone,
					province:this.editForm.province,
					city:this.editForm.city,
					valid:this.editForm.valid,//可用状态
					address:this.editForm.address
				})
				.then(res => {
					console.log(res)
					if(res.data.error !== 0){
						return this.$message.error('数据保存失败')
					}
					this.$message.success('数据保存成功')
					this.getUserMe()
				})
			},
			reset(){
				this.getUserMe()//表单重置
			},
			shua(){
				this.$router.go(0); //刷新
			},
			back() {
				this.$router.go(-1); //返回上一层
			},
		}
	}
</script>

<style scoped="scoped">
	.jiben {
		width: 100%;
		height: 1400px;
		background-color: white;
		border-top-left-radius: 50px;
		border-bottom-left-radius: 50px;
	}

	.con-bottom {
		width: 250px;
		margin: 0 auto;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	.but1 {
		width: 100px;
		height: 35px;
		border-radius: 5px;
		border: solid 1px #ccc;
		color: #635e5e;
		line-height: 35px;
		text-align: center;
		cursor: pointer;
	}

	.but2 {
		width: 100px;
		height: 35px;
		border-radius: 5px;
		color: white;
		line-height: 35px;
		text-align: center;
		background-color: #1e69fe;
		cursor: pointer;
	}

	.two {
		width: 150px !important;
	}

	.twoInput {
		width: 800px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	.title-box {
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.sex {
		width: 200px !important;
	}

	.con-con .div el-input {
		margin-left: 50px !important;
	}

	.con-con1 {
		display: flex;
		flex-direction: column;
		height: 200px;
		justify-content: space-between;
		margin-top: 30px;
	}

	.con-con2 {
		display: flex;
		flex-direction: column;
		height: 250px;
		justify-content: space-between;
		margin-top: 30px;
	}

	.con-con {
		display: flex;
		flex-direction: column;
		height: 450px;
		justify-content: space-between;
		margin-top: 30px;
	}

	.banInput {
		cursor: no-drop;
	}

	.jibenInput {
		border-radius: 4px;
		border: 1px solid #DCDFE6;
		height: 40px;
		line-height: 40px;
		outline: 0;
		padding: 0 15px;
		width: 100%;
	}

	.con-con-box input:focus {
		border-style: solid;
		border-color: #1e69fe;
	}

	.con-con-box {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}

	.con-con-box div {
		width: 400px;
	}

	.con-con span {
		font-family: PingFangSC-Regular;
		font-size: 15px;
		font-weight: normal;
		font-stretch: normal;
		line-height: 24px;
		letter-spacing: 1px;
		color: #000000;
		width: 120px;
		text-align: right;
	}

	.con-con1 span {
		font-family: PingFangSC-Regular;
		font-size: 15px;
		font-weight: normal;
		font-stretch: normal;
		line-height: 24px;
		letter-spacing: 1px;
		color: #000000;
		width: 120px;
		text-align: right;
	}

	.con-con2 span {
		font-family: PingFangSC-Regular;
		font-size: 15px;
		font-weight: normal;
		font-stretch: normal;
		line-height: 24px;
		letter-spacing: 1px;
		color: #000000;
		width: 120px;
		text-align: right;
	}

	.userMes {
		display: flex;
		flex-direction: column;
		width: 35%;
	}

	.blue-dian {
		width: 16px;
		height: 16px;
		background-color: #1e69fe;
		border-radius: 100%;
	}

	.jiben-right-conWord {
		font-family: PingFangSC-Regular;
		font-size: 20px;
		font-weight: normal;
		font-stretch: normal;
		line-height: 24px;
		letter-spacing: 1px;
		color: #000000;
		margin-left: 15px;
	}

	.jiben-right-con {
		display: flex;
		flex-direction: column;
		width: 95%;
		margin: 30px auto;
		justify-content: space-between;
		height: 1100px;
	}

	.el-button--default {
		border-radius: 10px;
		padding: 10px 20px;
	}

	.jiben-green {
		font-family: PingFangSC-Regular;
		font-size: 16px;
		font-weight: normal;
		font-stretch: normal;
		line-height: 32px;
		letter-spacing: 0px;
		color: #4ea805;
		margin-left: 10px;
	}

	.myhead2-right-box {
		display: block;
		float: right;
	}

	.myhead2-but-box {
		width: 200px;
	}

	.myhead2-but {
		width: 135px;
		height: 30px;
		background-color: #1e69fe;
		margin: 0 auto;
		color: white;
		line-height: 30px;
		text-align: center;
		border-radius: 5px;
		font-size: 12px;
		cursor: pointer;
	}

	.jiben-nameWord {
		font-family: PingFangSC-Regular;
		font-size: 24px;
		font-weight: normal;
		font-stretch: normal;
		line-height: 20px;
		letter-spacing: 0px;
		color: #000000;
		margin-left: 10px;
		overflow:hidden;
		text-overflow:ellipsis;
		white-space:nowrap;
		height: 30px;
		width: 200px;
		text-align: center;
		line-height: 30px;
	}

	.jiben-right-top {
		display: flex;
		flex-direction: column;
		width: 95%;
		margin: 20px auto;
		margin-top: 35px;
	}

	.jiben-left {
		width: 50%;

	}

	.myhead2-right {
		display: block;
		width: 50%;
		line-height: 53px;
	}

	.myhead2-left {
		width: 50%;
		display: flex;
		flex-direction: row;
		align-items: center;
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

	.jiben-right {
		width: 50%;
	}

	.myhead1 {
		display: flex;
		flex-direction: row;
	}

	.myhead2 {
		display: flex;
		flex-direction: row;
		padding-top: 10px;
	}
</style>
