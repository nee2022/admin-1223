<template>
  <div class="zyhAssetFinancialStatisticsDataBoardMainPage">
    <header>
      <div class="infoArea">
        <div class="pageName">商户资产</div>
        <div class="profile">
          <myhead></myhead>
        </div>
      </div>
      <div class="toggleBar">
        <span @click="toggle(1)">商户数</span>
        <span @click="toggle(2)">财务统计</span>
      </div>
    </header>
    <template v-if="flag === 1">
      <FinancialStatistics></FinancialStatistics>
    </template>
    <template v-if="flag === 2">
      <div>
        123
      </div>
    </template>
  </div>
</template>

<script>
import dataBoard from "./dataBoard.js";

export default dataBoard;
</script>

<style lang="stylus" scoped></style>
