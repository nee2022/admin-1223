<template>
  <div class="zyhIncomeStatisticsDataBoardSection">
    <div class="section1">
      <ul>
        <li>
          <div class="top">
            <span>收入</span>
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
            <span>充值</span>
          </div>
          <div class="bottom">
            <div class="p1">
              <span>9956</span>
              <span>钱包充值</span>
            </div>
            <div class="p1">
              <span>4595</span>
              <span>一卡通充值</span>
            </div>
            <div class="p1 borderRightRelative">
              <span class="borderRight">1525</span>
              <span>套餐充值</span>
            </div>
          </div>
        </li>
        <li>
          <div class="top">
            <span>消费</span>
          </div>
          <div class="bottom">
            <div class="p1">
              <span>2536</span>
              <span>汽车充电</span>
            </div>
            <div class="p1">
              <span>4595</span>
              <span>电单车充电</span>
            </div>
            <div class="p1">
              <span>1525</span>
              <span>路边停车</span>
            </div>
            <div class="p1">
              <span>1525</span>
              <span>停车场</span>
            </div>
            <div class="p1">
              <span>1525</span>
              <span>充电宝</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="section2">
      <div class="part1">
        <div class="left">
          <span></span>
          <span>充值占比情况</span>
        </div>
        <div id="incomeStatisticsEchart1"></div>
      </div>
      <div class="part2">
        <div class="left">
          <span></span>
          <span>消费占比情况</span>
        </div>
        <div id="incomeStatisticsEchart2"></div>
      </div>
    </div>
    <div class="section3">
      <div class="section3Top">
        <div class="left">
          <span></span>
          <span>收入统计增长曲线</span>
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
      <div id="incomeStatisticsEchart3"></div>
      <div class="section3Bottom"></div>
    </div>
    <div class="gap2"></div>
  </div>
</template>

<script>
import incomeStatistics from "./incomeStatistics.js";

export default incomeStatistics;
</script>

<style lang="stylus" scoped></style>
