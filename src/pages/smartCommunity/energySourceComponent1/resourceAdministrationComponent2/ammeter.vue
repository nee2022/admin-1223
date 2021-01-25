<template>
  <div class="zyhSingleLineListMainPage ammeter">
    <header>
      <div class="infoArea">
        <div class="pageName">电表</div>
        <div class="profile">
          <myhead></myhead>
        </div>
      </div>
      <div class="searchArea">
        <div class="inputFrame">
          <img src="../../../../assets/images/search.png" />
          <el-input
            placeholder="请输入账号、手机号、昵称进行查找"
            class="inputBlank"
            clearable
          ></el-input>
        </div>
        <div class="searchButton">
          <el-button type="primary" icon="el-icon-search">搜索</el-button>
        </div>
        <div class="toggleTable">
          <div v-if="chart" class="listButton" @click="toggleListTable">
            <img src="../../../../assets/images/listIcon.png" alt="" />
          </div>
          <div v-if="!chart" class="chartButton" @click="toggleChartTable">
            <img src="../../../../assets/images/chartIcon.png" alt="" />
          </div>
        </div>
      </div>
    </header>
    <section>
      <template v-if="!chart">
        <el-table :data="tableData" stripe style="width: 100%">
          <el-table-column show-overflow-tooltip prop="id" label="ID">
          </el-table-column>
          <el-table-column show-overflow-tooltip prop="dev_id" label="设备ID">
          </el-table-column>
          <el-table-column
            show-overflow-tooltip
            prop="enabled"
            label="工作状态"
          >
            在线
          </el-table-column>
          <el-table-column show-overflow-tooltip prop="station" label="站点">
          </el-table-column>
          <el-table-column show-overflow-tooltip prop="agent" label="所属商户">
          </el-table-column>
          <el-table-column show-overflow-tooltip prop="address" label="地址">
            浙江省杭州市金沙大道888号
          </el-table-column>
          <el-table-column
            show-overflow-tooltip
            prop="address"
            label="操作"
            width="200"
          >
            <div class="operation">
              <div>
                <img
                  src="../../../../assets/images/see.png"
                  height="11px"
                  title="详情"
                />
              </div>
            </div>
          </el-table-column>
        </el-table>
      </template>
      <template v-if="chart">
        <ul class="chartItems not-select">
          <li v-for="item in tableData" :key="item.id">
            <div class="tableItem">
              <div class="wrapper">
                <div class="signBar">
                  <span class="circle"></span>
                  <span>{{ item.id }}</span>
                  <span>
                    <img src="../../../../assets/images/signal4.png" alt="" />
                  </span>
                </div>
                <div class="meterInfo">
                  <span>实时电量</span>
                  <span>0</span>
                  <span>KWH</span>
                </div>
                <div class="parameter">
                  <p>电压<span>1</span>V</p>
                  <p>电流<span>2</span>A</p>
                  <p>功率<span>9005</span>W</p>
                </div>
              </div>
              <div class="operation">
                <div>
                  <img
                    src="../../../../assets/images/Tdelete.png"
                    title="删除"
                  />
                </div>
                <div>
                  <img
                    src="../../../../assets/images/Teditor.png"
                    title="修改"
                  />
                </div>
              </div>
            </div>
          </li>
        </ul>
      </template>
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
import ammeter from "./ammeter.js";

export default ammeter;
</script>

<style lang="stylus" scoped></style>
