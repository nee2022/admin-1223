<template>
  <div class="zyhAssetDataBoardMainPage">
    <header>
      <div class="infoArea">
        <div class="pageName">财务数据</div>
        <div class="profile">
          <myhead></myhead>
        </div>
      </div>
      <div class="toggleBar">
        <span
          @click="toggle(1, $event)"
          style="color:#2d6bf5;border-bottom:2px solid #2d6bf5;"
          >收入统计</span
        >
        <span @click="toggle(2, $event)">开票统计</span>
        <span @click="toggle(3, $event)">结算统计</span>
      </div>
    </header>
    <section>
      <template v-if="flag === 1">
        <IncomeStatistics></IncomeStatistics>
      </template>
      <template v-if="flag === 2">
        <FinancialStatistics></FinancialStatistics>
      </template>
    </section>
  </div>
</template>

<script>
import dataBoard from "./dataBoard.js";

export default dataBoard;
</script>

<style lang="stylus" scoped></style>
