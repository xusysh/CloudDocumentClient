<template>
  <div class="card" style="height: 86vh;">
    <div class="card-header">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>客户端（普通用户）</el-breadcrumb-item>
        <el-breadcrumb-item>在线协作</el-breadcrumb-item>
        <el-breadcrumb-item>在线表格</el-breadcrumb-item>
      </el-breadcrumb>
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

export default {
  name: "OnlineSheet",
  data() {
    return {
      hotSettings: {
        data: Handsontable.helper.createSpreadsheetData(26, 26),
        colHeaders: true,
        rowHeaders: true,
        height: 600,
        contextMenu: {
          items: {
            row_above: {
              name: "在上方插入一行"
            },
            row_below: {
              name: "在下方插入一行"
            },
            separator: Handsontable.plugins.ContextMenu.SEPARATOR,
            clear_custom: {
              name: "清空所有单元格",
              callback: function() {
                this.clear();
              }
            }
          }
        }
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
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
