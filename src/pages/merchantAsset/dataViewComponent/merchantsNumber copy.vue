<template>
  <div class="zyhAssetMerchantsNumberDataBoardSection">
    <div class="section1">
      <ul>
        <li>
          <div class="top">
            <span>商户总数</span>
          </div>
          <div class="bottom">
            <div class="p1">
              <span>3440</span>
            </div>
          </div>
        </li>
        <li>
          <div class="top">
            <span>商户余额</span>
          </div>
          <div class="bottom">
            <div class="p2">
              <div>
                <span>8588</span>
                <span>.21元</span>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="top">
            <span>分润账户</span>
          </div>
          <div class="bottom">
            <div class="p1">
              <span>3440</span>
            </div>
          </div>
        </li>
        <li>
          <div class="top">
            <span>笔笔清</span>
          </div>
          <div class="bottom">
            <div class="p1">
              <span>3440</span>
            </div>
          </div>
        </li>
        <li>
          <div class="top">
            <span>自营</span>
          </div>
          <div class="bottom">
            <div class="p1">
              <span>3440</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="section2">
      <div class="section2Top">
        <div class="left">
          <span></span>
          <span>认证车辆占比情况</span>
        </div>
      </div>
      <div id="merchantsNumberEchart1"></div>
    </div>
    <div class="section3">
      <div class="section3Top">
        <div class="left">
          <span></span>
          <span>商户数量增长曲线</span>
        </div>
      </div>
      <div id="merchantsNumberEchart2"></div>
      <div class="section3Bottom"></div>
    </div>
    <div class="gap2"></div>
  </div>
</template>

<script>
import merchantsNumber from "./merchantsNumber.js";

export default merchantsNumber;
</script>

<style lang="stylus" scoped></style>
