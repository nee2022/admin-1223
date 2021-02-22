<template>
  <div class="zyhIncomeReportMainPage">
    <header>
      <div class="infoArea">
        <div class="pageName">收入报表</div>
        <div class="profile">
          <myhead></myhead>
        </div>
      </div>
    </header>
    <section>
      <div class="section1">
        <div class="dateToggleBar">
          <span class="currentActive">日</span>
          <span>周</span>
          <span>月</span>
          <span>季</span>
          <span>年</span>
        </div>
        <div class="dateSelectBar">
          <template>
            <div class="block">
              <span class="demonstration"></span>
              <el-date-picker
                type="daterange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
              >
              </el-date-picker>
            </div>
          </template>
        </div>

        <div class="searchButton">
          <el-button type="primary" icon="el-icon-search">查询</el-button>
        </div>
        <div class="searchButton">
          <el-button type="primary">导出</el-button>
        </div>
        <div class="searchButton">
          <el-button type="primary">打印</el-button>
        </div>
      </div>
      <div class="section2">
        <template v-if="!chart">
          <div class="el-table-wrapper">
            <el-table :data="tableData" style="width: 100%">
              <el-table-column prop="date" label="日期"> </el-table-column>
              <el-table-column prop="address" label="商户"> </el-table-column>
              <el-table-column prop="name" label="订单总数"> </el-table-column>
              <el-table-column prop="city" label="订单金额"> </el-table-column>
              <el-table-column prop="province" label="分成金额">
              </el-table-column>
              <el-table-column label="结算金额分布">
                <el-table-column prop="address" label="笔笔清金额" width="120">
                </el-table-column>
                <el-table-column prop="name" label="转账金额" width="120">
                </el-table-column>
              </el-table-column>
              <el-table-column prop="name" label="钱包分成"> </el-table-column>
              <el-table-column prop="name" label="图表"> </el-table-column>
            </el-table>
          </div>
        </template>
        <template v-if="chart"></template>
      </div>
    </section>
    <footer v-if="!chart">
      <div class="total" :data="tableData">
        <span>共{{ total }}条信息</span>
      </div>
      <el-pagination
        background
        :current-page.sync.number="pagenum"
        @current-change="handleCurrentChange"
        :page-size="pagesize"
        layout="prev, pager, next"
        :total="total"
      >
      </el-pagination>
    </footer>
  </div>
</template>

<script>
import settlementReport from "./settlementReport.js";

export default settlementReport;
</script>

<style lang="stylus" scoped></style>
