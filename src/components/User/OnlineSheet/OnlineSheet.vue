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
          style="display:block;width:28px;height:60px;float: left;margin-left: 20px;margin-right: 10px;margin-top: -10px;"
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
          <el-button
            type="primary"
            size="medium"
            style="float: right;margin-top: 2px;margin-right: 16px;"
          >
            <i class="el-icon-unlock"></i>共享
          </el-button>
          <el-dropdown trigger="click" class="file-menu-item">
            <span class="el-dropdown-link">
              帮助
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>手册</el-dropdown-item>
              <el-dropdown-item>函数</el-dropdown-item>
              <el-dropdown-item>快捷键</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <el-dropdown trigger="click" class="file-menu-item">
            <span class="el-dropdown-link">
              数据
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>筛选</el-dropdown-item>
              <el-dropdown-item>排序</el-dropdown-item>
              <el-dropdown-item>校验</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <el-dropdown trigger="click" class="file-menu-item">
            <span class="el-dropdown-link">
              格式
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>数据格式</el-dropdown-item>
              <el-dropdown-item>格式刷</el-dropdown-item>
              <el-dropdown-item divided>粗体</el-dropdown-item>
              <el-dropdown-item>斜体</el-dropdown-item>
              <el-dropdown-item>下划线</el-dropdown-item>
              <el-dropdown-item divided>隐藏网格线</el-dropdown-item>
              <el-dropdown-item divided>合并单元格</el-dropdown-item>
              <el-dropdown-item divided>行高列宽</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <el-dropdown trigger="click" class="file-menu-item">
            <span class="el-dropdown-link">
              插入
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>在上方插入一行</el-dropdown-item>
              <el-dropdown-item>在下方插入一行</el-dropdown-item>
              <el-dropdown-item divided>在左侧插入一列</el-dropdown-item>
              <el-dropdown-item>在右侧插入一列</el-dropdown-item>
              <el-dropdown-item divided>函数</el-dropdown-item>
              <el-dropdown-item divided>图片</el-dropdown-item>
              <el-dropdown-item>链接</el-dropdown-item>
              <el-dropdown-item>批注</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <el-dropdown trigger="click" class="file-menu-item">
            <span class="el-dropdown-link">
              编辑
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>撤销</el-dropdown-item>
              <el-dropdown-item>重做</el-dropdown-item>
              <el-dropdown-item>剪切</el-dropdown-item>
              <el-dropdown-item>复制</el-dropdown-item>
              <el-dropdown-item>粘贴</el-dropdown-item>
              <el-dropdown-item>全选</el-dropdown-item>
              <el-dropdown-item divided>查找与替换</el-dropdown-item>
              <el-dropdown-item>删除所在行</el-dropdown-item>
              <el-dropdown-item>删除所在列</el-dropdown-item>
              <el-dropdown-item divided>清除格式</el-dropdown-item>
              <el-dropdown-item>清除内容</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <el-dropdown trigger="click" class="file-menu-item">
            <span class="el-dropdown-link">
              文件
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>新建</el-dropdown-item>
              <el-dropdown-item>重命名</el-dropdown-item>
              <el-dropdown-item>保存</el-dropdown-item>
              <el-dropdown-item divided>导入</el-dropdown-item>
              <el-dropdown-item>导出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>

          <div style="height: 40px;">&nbsp;</div>
        </div>
      </div>
      <div class="sheet-control-menu"></div>
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
.file-menu-item {
  float: right;
  margin-right: 6px;
  margin-top: 6px;
  height: 30px;
  width: 50px;
  text-align: center;
  padding-top: 4px;
  cursor: default;
}
.file-menu-item:hover {
  background: rgba(240, 240, 240, 0.5);
}
.sheet-control-menu {
  width: 100%;
  height: 30px;
  margin-top: 6px;
  border-top: 0.5px solid rgba(128, 128, 128, 0.8);
  border-bottom: 0.5px solid rgba(128, 128, 128, 0.8);
}
div::-webkit-scrollbar {
  width: 10px;
  height: 10px;
  /**/
}
div::-webkit-scrollbar-track {
  background: rgb(239, 239, 239);
  border-radius: 2px;
}
div::-webkit-scrollbar-thumb {
  background: #bfbfbf;
  border-radius: 10px;
}
div::-webkit-scrollbar-thumb:hover {
  background: #333;
}
div::-webkit-scrollbar-corner {
  background: rgb(239, 239, 239);
}
</style>
