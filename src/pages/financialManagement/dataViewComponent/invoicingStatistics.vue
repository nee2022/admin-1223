<template>
  <div class="zyhInvoicingStatisticsDataBoardSection">
    <div class="section1">
      <ul>
        <li>
          <div class="top">
            <span>总量</span>
          </div>
          <div class="bottom">
            <div class="p1">
              <span>3440</span>
              <span>总数</span>
            </div>
            <div class="p2">
              <div>
                <span>8588</span>
                <span>.21元</span>
              </div>
              <span class="amount">金额</span>
            </div>
          </div>
        </li>
        <li>
          <div class="top">
            <span>出票</span>
          </div>
          <div class="bottom">
            <div class="p1">
              <span>942</span>
              <span>总数</span>
            </div>
            <div class="p2">
              <div class="noBorder">
                <span>2492</span>
                <span>.15元</span>
              </div>
              <span class="amount">金额</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="section2">
      <div class="section2Top">
        <div class="left">
          <span></span>
          <span>开票统计总数、金额增长去向</span>
        </div>
        <div class="medial">
          <div class="medialWrapper">
            <span class="currentActive">近一周</span>
            <span>近一月</span>
            <span>近一年</span>
          </div>
        </div>
        <div class="right">
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
      </div>
      <div id="invoicingStatisticsEchart1"></div>
      <div class="section2Bottom"></div>
    </div>
    <div class="gap2"></div>
  </div>
</template>

<script>
import invoicingStatistics from "./invoicingStatistics.js";

export default invoicingStatistics;
</script>

<style lang="stylus" scoped></style>
