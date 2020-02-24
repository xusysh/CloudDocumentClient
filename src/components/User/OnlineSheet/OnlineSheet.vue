<template>
  <div class="card" style="height: 86vh;">
    <div class="card-header">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>客户端（普通用户）</el-breadcrumb-item>
        <el-breadcrumb-item>在线协作</el-breadcrumb-item>
        <el-breadcrumb-item>在线表格</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="online-file-menu">
      <div class="file-control-menu;">
        <img
          src="../../../assets/icons/excel.svg"
          style="display:block;width:28px;height:60px;float: left;margin-left: 10px;margin-right: 10px;margin-top: -10px;"
        />
        <div style="margin-top: 6px;">
          <span style="font-size: 160%;font-weight: 500;float: left;"
            >文件名</span
          >
          <div
            style="font-size: 150%;float: left;margin-top: 2px;margin-left: 10px;"
          >
            <el-tooltip effect="dark" content="收藏">
              <i class="el-icon-star-off"></i>
            </el-tooltip>
            <el-tooltip effect="dark" content="移动">
              <i class="el-icon-folder-opened"></i>
            </el-tooltip>
          </div>
          <div style="height: 40px;">&nbsp;</div>
        </div>
      </div>
      <div class="sheet-control-menu">
        qwe
      </div>
    </div>
    <div>
      <hot-table
        ref="hotTableComponent"
        :settings="hotSettings"
        licenseKey="non-commercial-and-evaluation"
      ></hot-table>
    </div>
  </div>
</template>

<script>
import { HotTable, HotColumn } from "@handsontable/vue";
import Handsontable from "handsontable";
import "handsontable/languages/zh-CN";

export default {
  name: "OnlineSheet",
  data() {
    return {
      hotSettings: {
        data: Handsontable.helper.createSpreadsheetData(26, 26),
        colHeaders: true,
        rowHeaders: true,
        height: 480,
        language: "zh-CN", //声明用中文的语言包
        contextMenu: [
          "row_above",
          "row_below",
          "col_left",
          "col_right",
          "---------",
          "remove_row",
          "remove_col",
          "---------",
          "alignment",
          "copy",
          "cut",
          "mergeCells"
        ],
        dropdownMenu: true
      }
    };
  },
  mounted() {
    //  this.$refs.hotTableComponent.hotInstance.loadData([["new", "data"]]);
  },
  components: {
    HotTable,
    HotColumn
  },
  methods: {
    ImportSheetData() {},
    ExportSheetData() {}
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.online-file-menu {
  width: 100%;
}
.file-control-menu {
  width: 100%;
}
.sheet-control-menu {
  width: 100%;
  margin-top: 6px;
  border-top: 0.5px solid rgba(128, 128, 128, 0.8);
  border-bottom: 0.5px solid rgba(128, 128, 128, 0.8);
}
</style>
