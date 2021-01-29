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
        <div class="toggleTable">
          <div v-if="chart" class="listButton" @click="toggleListTable">
            <img src="../../../assets/images/listIcon.png" alt="" />
          </div>
          <div v-if="!chart" class="chartButton" @click="toggleChartTable">
            <img src="../../../assets/images/chartIcon.png" alt="" />
          </div>
        </div>
      </div>
      <div class="section2">
        <template v-if="!chart">
          <div class="el-table-wrapper">
            <el-table :data="tableData" style="width: 100%">
              <el-table-column prop="date" label="日期"> </el-table-column>
              <el-table-column prop="address" label="订单总数">
              </el-table-column>
              <el-table-column prop="name" label="订单金额"> </el-table-column>
              <el-table-column prop="city" label="收入金额"> </el-table-column>
              <el-table-column prop="province" label="充值金额">
              </el-table-column>
              <el-table-column label="收入金额分布">
                <el-table-column prop="address" label="支付宝收入" width="120">
                </el-table-column>
                <el-table-column prop="name" label="微信收入" width="120">
                </el-table-column>
              </el-table-column>
              <el-table-column label="支出金额分布">
                <el-table-column prop="address" label="退款金额" width="120">
                </el-table-column>
                <el-table-column prop="name" label="消费金额" width="120">
                </el-table-column>
              </el-table-column>
              <el-table-column prop="name" label="优惠金额"> </el-table-column>
            </el-table>
          </div>
        </template>
        <template v-if="chart">
          <ul class="chartItems not-select">
            <li>
              <div class="echartWrapper">
                <div id="incomeReportEchart1"></div>
                <div class="echartBar"><span>订单总数</span></div>
              </div>
            </li>
            <li>
              <div class="echartWrapper">
                <div id="incomeReportEchart2"></div>
                <div class="echartBar"><span>订单金额</span></div>
              </div>
            </li>
            <li>
              <div class="echartWrapper">
                <div id="incomeReportEchart3"></div>
                <div class="echartBar"><span>收入金额</span></div>
              </div>
            </li>
            <li>
              <div class="echartWrapper">
                <div id="incomeReportEchart4"></div>
                <div class="echartBar"><span>充值金额</span></div>
              </div>
            </li>
            <li>
              <div class="echartWrapper">
                <div id="incomeReportEchart5"></div>
                <div class="echartBar"><span>收入金额增长趋势</span></div>
              </div>
            </li>
            <li>
              <div class="echartWrapper">
                <div id="incomeReportEchart6"></div>
                <div class="echartBar"><span>支出金额增长趋势</span></div>
              </div>
            </li>
          </ul>
        </template>
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
import incomeReport from "./incomeReport.js";

export default incomeReport;
</script>

<style lang="stylus" scoped></style>
