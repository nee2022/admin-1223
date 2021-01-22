<template>
  <div class="zyhIncomeReportMainPage">
    <header>
      <div class="infoArea">
        <div class="pageName">收入报表</div>
        <div class="profile">
          <myhead></myhead>
        </div>
      </div>
      <div class="functionArea">
        <div class="tableModeBar">
          <span>日</span>
          <span>周</span>
          <span>月</span>
          <span>季</span>
          <span>年</span>
        </div>
        <div class="searchButton">
          <el-button type="primary" icon="el-icon-search">查询</el-button>
        </div>
        <div class="searchButton">
          <el-button type="primary" icon="el-icon-search">导出</el-button>
        </div>
        <div class="searchButton">
          <el-button type="primary" icon="el-icon-search">打印</el-button>
        </div>
        <div class="toggleTable">
          <div v-if="chart" class="listButton" @click="toggleListTable">
            <img src="../../../assets/images/listIcon.png" alt="" />
          </div>
          <div v-if="!chart" class="chartButton" @click="toggleChartTable">
            <img src="../../../assets/images/chartIcon.png" alt="" />
          </div>
        </div>
      </div>
    </header>
    <section>
      <template v-if="!chart">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="date" label="日期" width="150">
          </el-table-column>
          <el-table-column label="配送信息">
            <el-table-column prop="name" label="姓名" width="120">
            </el-table-column>
            <el-table-column label="地址">
              <el-table-column prop="province" label="省份" width="120">
              </el-table-column>
              <el-table-column prop="city" label="市区" width="120">
              </el-table-column>
              <el-table-column prop="address" label="地址" width="300">
              </el-table-column>
              <el-table-column prop="zip" label="邮编" width="120">
              </el-table-column>
            </el-table-column>
          </el-table-column>
        </el-table>
      </template>
      <template v-if="chart">图表形式</template>
    </section>
    <footer>
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
import incomeReport from "./incomeReport.js";

export default incomeReport;
</script>

<style lang="stylus" scoped></style>
