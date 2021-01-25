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
              <span>2880</span>
            </div>
          </div>
        </li>
        <li>
          <div class="top">
            <span>笔笔清</span>
          </div>
          <div class="bottom">
            <div class="p1">
              <span>5800</span>
            </div>
          </div>
        </li>
        <li>
          <div class="top">
            <span>自营</span>
          </div>
          <div class="bottom">
            <div class="p1">
              <span>7220</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="section2">
      <div class="part1">
        <div class="left">
          <span></span>
          <span>商户账号占比情况</span>
        </div>
        <div id="merchantsNumberEchart1"></div>
      </div>
      <div class="part2">
        <div class="left">
          <span></span>
          <span>排名</span>
        </div>
        <ul class="rank">
          <li>
            <div class="merchantName">
              <span>1</span>
              <span>商户名称1</span>
            </div>
            <div class="progressWrapper">
              <el-progress
                :text-inside="true"
                :stroke-width="20"
                :percentage="70"
              ></el-progress>
            </div>
          </li>
          <li>
            <div class="merchantName">
              <span>2</span>
              <span>商户名称2</span>
            </div>
            <div class="progressWrapper">
              <el-progress
                :text-inside="true"
                :stroke-width="20"
                :percentage="70"
              ></el-progress>
            </div>
          </li>
          <li>
            <div class="merchantName">
              <span>3</span>
              <span>商户名称3</span>
            </div>
            <div class="progressWrapper">
              <el-progress
                :text-inside="true"
                :stroke-width="20"
                :percentage="70"
              ></el-progress>
            </div>
          </li>
          <li>
            <div class="merchantName">
              <span>4</span>
              <span>商户名称4</span>
            </div>
            <div class="progressWrapper">
              <el-progress
                :text-inside="true"
                :stroke-width="20"
                :percentage="70"
              ></el-progress>
            </div>
          </li>
          <li>
            <div class="merchantName">
              <span>5</span>
              <span>商户名称5</span>
            </div>
            <div class="progressWrapper">
              <el-progress
                :text-inside="true"
                :stroke-width="20"
                :percentage="70"
              ></el-progress>
            </div>
          </li>
        </ul>
        <div class="paginationWrapper">
          <el-pagination
            small
            background
            current-page.sync.number="1"
            :page-size="5"
            layout="prev, pager, next"
            :total="155"
          >
          </el-pagination>
        </div>
      </div>
    </div>
    <div class="section3">
      <div class="section3Top">
        <div class="left">
          <span></span>
          <span>商户数量增长曲线</span>
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
