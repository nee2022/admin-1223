<template>
  <div class="zyhDataBoardMainPage">
    <header>
      <div class="infoArea">
        <div class="pageName">商户资产</div>
        <div class="profile">
          <myhead></myhead>
        </div>
      </div>
      <div class="toggleBar">
        <span
          @click="toggle(1, $event)"
          style="color:#2d6bf5;border-bottom:2px solid #2d6bf5;"
          >商户数</span
        >
        <span @click="toggle(2, $event)">财务统计</span>
      </div>
    </header>
    <section>
      <template v-if="flag === 1">
        <MerchantsNumber></MerchantsNumber>
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
