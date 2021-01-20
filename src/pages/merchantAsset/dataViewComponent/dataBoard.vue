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
        <span>商户数</span>
        <span>财务统计</span>
      </div>
    </header>
    <section>
      <div class="section1">
        <ul>
          <li>
            <div class="top">
              <span>收入</span>
            </div>
            <div class="bottom">
              <div class="p1">
                <span>3440</span>
                <span>笔数</span>
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
              <span>收入</span>
            </div>
            <div class="bottom">
              <div class="p1">
                <span>3440</span>
                <span>笔数</span>
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
              <span>分成</span>
            </div>
            <div class="bottom">
              <div class="p1">
                <span>1024</span>
                <span>笔数</span>
              </div>
              <div class="p2">
                <div>
                  <span>1548</span>
                  <span>.23元</span>
                </div>
                <span class="amount">金额</span>
              </div>
            </div>
          </li>
          <li>
            <div class="top">
              <span>笔笔清</span>
            </div>
            <div class="bottom">
              <div class="p1">
                <span>942</span>
                <span>笔数</span>
              </div>
              <div class="p2">
                <div>
                  <span>2492</span>
                  <span>.15元</span>
                </div>
                <span class="amount">金额</span>
              </div>
            </div>
          </li>
          <li>
            <div class="top">
              <span>提现</span>
            </div>
            <div class="bottom">
              <div class="p1">
                <span>942</span>
                <span>笔数</span>
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
        <div class="section2Top">123</div>
        <div id="section2Echart"></div>
        <div class="section2Bottom">123</div>
      </div>
      <div class="gap2"></div>
    </section>
  </div>
</template>

<script>
import dataBoard from "./dataBoard.js";

export default dataBoard;
</script>

<style lang="stylus" scoped></style>
