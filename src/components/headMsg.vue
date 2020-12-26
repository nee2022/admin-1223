<template>
<div>
      <div class="all">
    <div class="my">
      <img v-if="!pan" src="../assets/images/Road parking.png" alt="" />
      <span class="mymy">{{stationsName}}<span style="color: #4ea805"
          >(<span>运行中</span>)</span
        ></span
      >
      <span class="my3" @click="back">返回上一级页面</span>
    </div>
    <div class="right">
      <div class="right-but">
        <!-- <el-button size="mini"  icon="el-icon-refresh">默认按钮</el-button> -->
        <el-button size="mini" icon="el-icon-refresh" @click="shua">刷新</el-button>
      </div>
    </div>
  </div>
    <div class="he"></div>

</div>
</template>

<script>
export default {
  data(){
    return{
      stationsName:'',
      pan:'',
    }
  },
    created() {
    this.stationsName = this.$store.state.name
    this.pan = this.$store.state.kong
  },
  methods:{
    back(){
      this.$router.go(-1)
    },
    shua(){
     location.reload()
    },
  },

}
</script>

<style scoped>
.he{
    width: 100%;
    margin-top: 10px;
    border-bottom: 1px #BFBFBF solid;
}
.el-button {
  float: right;
}

.right-but {
  width: 14%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  float: right;
}
.right {
  width: 50%;
  display: block;
}
.all {
  display: flex;
  align-items: center;
}
.my {
  display: flex;
  align-items: center;
  width: 50%;
}
.my img {
  width: 56px;
  height: 56px;
}
.mymy {
  display: inline-block;
  font-size: 24px;
  font-weight: 400;
  color: #333333;
  line-height: 28px;
  margin: 0 13px 0 13px;
}
.my3 {
  display: inline-block;
  width: 133px;
  height: 28px;
  background: #1e69fe;
  border-radius: 5px;
  text-align: center;
  cursor: pointer;
  line-height: 28px;
  color: white;
}
</style>