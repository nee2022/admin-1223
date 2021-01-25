<template>
  <div class="zyhSingleLineListMainPage smsGateway">
    <header>
      <div class="infoArea">
        <div class="pageName">商户资产</div>
        <div class="profile"><myhead></myhead></div>
      </div>
      <div class="searchArea">
        <div class="inputFrame">
          <img src="../../../assets/images/search.png" />
          <el-input
            placeholder="请输入名称进行查找"
            class="inputBlank"
            v-model="input"
            clearable
          ></el-input>
        </div>
        <div class="searchButton" @click="searchHandler">
          <el-button type="primary" icon="el-icon-search">搜索</el-button>
        </div>
        <div class="addButton">
          <el-button
            type="primary"
            icon="el-icon-circle-plus-outline"
            @click="addDialogVisible = true"
          >
            添加
          </el-button>
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
    </header>
    <section>
      <template v-if="!chart">
        <el-table :data="tableData" stripe style="width: 100%">
          <el-table-column show-overflow-tooltip prop="id" label="ID">
          </el-table-column>
          <el-table-column show-overflow-tooltip prop="name" label="名称">
          </el-table-column>
          <el-table-column show-overflow-tooltip prop="appid" label="appid">
          </el-table-column>
          <el-table-column
            show-overflow-tooltip
            prop="gateway"
            label="网关"
            :formatter="formatterGateway"
          >
          </el-table-column>
          <el-table-column
            show-overflow-tooltip
            prop="valid"
            label="是否激活"
            :formatter="formatBoolean"
          >
          </el-table-column>
          <el-table-column
            show-overflow-tooltip
            prop="address"
            label="操作"
            width="200"
          >
            <template slot-scope="scope">
              <div class="operation">
                <div @click="smsGatewayDeleted(scope.row.id)">
                  <img src="../../../assets/images/delete.png" title="删除" />
                </div>
                <div @click="modifyDialogPop(scope.row)">
                  <img src="../../../assets/images/compile.png" title="修改" />
                </div>
                <div>
                  <img
                    src="../../../assets/images/see.png"
                    title="详情"
                    height="11px"
                  />
                </div>
              </div>
            </template>
          </el-table-column>
        </el-table>
      </template>
      <template v-if="chart">
        <ul class="chartItems not-select">
          <li v-for="item in tableData" :key="item.id">
            <div class="tableItem">
              <div class="topBar">
                <img src="" alt="" />
                <el-switch
                  v-model="value"
                  active-color="#13ce66"
                  inactive-color="#ff4949"
                >
                </el-switch>
              </div>
              <div class="info">{{ item.name }}</div>
              <div class="operation">
                <div>
                  <img src="../../../assets/images/Tdelete.png" title="删除" />
                </div>
                <div>
                  <img src="../../../assets/images/Teditor.png" title="修改" />
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
      <template>
        <!-- 添加网关 -->
        <el-dialog
          title="添加短信网关"
          :visible.sync="addDialogVisible"
          width="30%"
          @close="addDialogClosed"
        >
          <el-form :model="addForm" ref="addFormRef" label-width="80px">
            <el-form-item label="名称" prop="name">
              <el-input v-model="addForm.name"></el-input>
            </el-form-item>
            <el-form-item label="appid" prop="appid">
              <el-input v-model="addForm.appid"></el-input>
            </el-form-item>
            <el-form-item label="网关" prop="gateway">
              <el-input v-model="addForm.gateway"></el-input>
            </el-form-item>
          </el-form>
          <span slot="footer" class="dialog-footer">
            <el-button @click="addDialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="smsGatewayAdded">
              确 定
            </el-button>
          </span>
        </el-dialog>
        <!-- 修改网关 -->
        <el-dialog
          title="修改支付网关"
          :visible.sync="modifyDialogVisible"
          width="30%"
        >
          <el-form :model="modifyForm" ref="modifyFormRef" label-width="80px">
            <el-form-item label="名称" prop="name">
              <el-input v-model="modifyForm.name"></el-input>
            </el-form-item>
            <el-form-item label="appid" prop="appid">
              <el-input v-model="modifyForm.appid"></el-input>
            </el-form-item>
            <el-form-item label="网关" prop="gateway">
              <el-input v-model="modifyForm.gateway"></el-input>
            </el-form-item>
          </el-form>
          <span slot="footer" class="dialog-footer">
            <el-button @click="modifyDialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="smsGatewayModified">
              确 定
            </el-button>
          </span>
        </el-dialog>
      </template>
    </footer>
  </div>
</template>

<script>
import smsGateway from "./smsGateway";
export default smsGateway;
</script>

<style lang="stylus" scoped></style>
