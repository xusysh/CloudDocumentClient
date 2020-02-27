<template>
  <div>
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
            <div style="float: left;margin-top: 6px;margin-left: 50px;">
              <div>
                <div class="sheet-control-icon-bg">
                  <img
                    src="../../../assets/icons/undo.svg"
                    class="sheet-control-icon"
                  />
                </div>
                <div class="sheet-control-icon-bg">
                  <img
                    src="../../../assets/icons/redo.svg"
                    class="sheet-control-icon"
                  />
                </div>
                <div class="sheet-control-icon-bg">
                  <img
                    src="../../../assets/icons/print.svg"
                    class="sheet-control-icon"
                  />
                </div>
                <div class="sheet-control-icon-bg">
                  <img
                    src="../../../assets/icons/brush.svg"
                    class="sheet-control-icon"
                  />
                </div>
                <div style="float: left;">
                  <el-divider direction="vertical"></el-divider>
                </div>
                <el-dropdown trigger="click" class="sheet-control-item-menu">
                  <span class="el-dropdown-link">
                    常规<i class="el-icon-arrow-down el-icon--right"></i>
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>常规</el-dropdown-item>
                    <el-dropdown-item>文本</el-dropdown-item>
                    <el-dropdown-item divided>数值</el-dropdown-item>
                    <el-dropdown-item>百分比</el-dropdown-item>
                    <el-dropdown-item divided>日期</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
                <el-dropdown trigger="click" class="sheet-control-item-menu">
                  <span class="el-dropdown-link">
                    微软雅黑<i class="el-icon-arrow-down el-icon--right"></i>
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>宋体</el-dropdown-item>
                    <el-dropdown-item>黑体</el-dropdown-item>
                    <el-dropdown-item>仿宋</el-dropdown-item>
                    <el-dropdown-item>楷体</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
                <el-dropdown trigger="click" class="sheet-control-item-menu">
                  <span class="el-dropdown-link">
                    10<i class="el-icon-arrow-down el-icon--right"></i>
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item v-for="num in 10" :key="num">{{
                      num + 8
                    }}</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
                <div style="float: left;">
                  <el-divider direction="vertical"></el-divider>
                </div>
                <div class="sheet-control-icon-bg">
                  <img
                    src="../../../assets/icons/bold.svg"
                    class="sheet-control-icon"
                  />
                </div>
                <div class="sheet-control-icon-bg">
                  <img
                    src="../../../assets/icons/italic.svg"
                    class="sheet-control-icon"
                  />
                </div>
                <div class="sheet-control-icon-bg">
                  <img
                    src="../../../assets/icons/underline.svg"
                    class="sheet-control-icon"
                  />
                </div>
                <div class="sheet-control-icon-bg">
                  <img
                    src="../../../assets/icons/strikethrough.svg"
                    class="sheet-control-icon"
                  />
                </div>
              </div>
            </div>
            <div style="height: 40px;">&nbsp;</div>
          </div>
        </div>

        <el-container class="cell-control-menu">
          <el-aside width="150px" class="cell-status">
            A1
          </el-aside>
          <el-main class="cell-content">cell content</el-main>
        </el-container>
      </div>
      <el-tabs tab-position="bottom" type="border-card" editable>
        <el-tab-pane label="sheet1" style="height: 462px;"
          ><div>
            <hot-table
              ref="hotTableComponent"
              :settings="hotSettings"
              licenseKey="non-commercial-and-evaluation"
            ></hot-table></div
        ></el-tab-pane>
        <el-tab-pane label="sheet2">sheet2</el-tab-pane>
        <el-tab-pane label="sheet3">sheet3</el-tab-pane>
        <el-tab-pane label="sheet4">sheet4</el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import SockJS from "sockjs-client";
import Stomp from "stompjs";
import { HotTable, HotColumn } from "@handsontable/vue";
import Handsontable from "handsontable";
import "handsontable/languages/zh-CN";
import { interval } from "rxjs";

export default {
  name: "OnlineSheet",
  data() {
    return {
      hotSettings: {
        stomp_client: null,
        websocket_endPoint: "http://localhost:9090/ws",
        topic: "/online-doc/sheet",
        addr_map: "/server/websocket",
        data: Handsontable.helper.createSpreadsheetData(26, 26),
        colHeaders: true,
        rowHeaders: true,
        height: 460,
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
    this.SockInit(this.websocket_endPoint, this.addr_map, this.topic);
    const WSMessageReceived = resp => {
      console.log("Message Recieved from Server");
      let response = JSON.parse(resp.body);
      if (response.operation == "fetch" && !this.change_lock) {
        //set data sheet
      } else if (response.operation == "save") {
        if (response.stamp == this.last_save_stamp) {
          this.change_lock = false;
        }
      }
    };
    const WSErrCallBack = error => {
      console.log("errorCallBack -> " + error);
      setTimeout(() => {
        this.SockConnect(WSMessageReceived, WSErrCallBack);
      }, 5000);
    };
    this.SockConnect(WSMessageReceived, WSErrCallBack);
  },
  components: {
    HotTable,
    HotColumn
  },
  methods: {
    SockInit(ws_server_end_point, addr_map, topic) {
      console.log("Initialize WebSocket Connection");
      let ws = new SockJS(ws_server_end_point);
      this.stomp_client = Stomp.over(ws);
    },

    SockConnect(receive_callback, error_callback) {
      const _this = this;
      this.stomp_client.connect(
        {},
        function connectedCallback(frame) {
          this.InitTimer();
          _this.stomp_client.subscribe(_this.topic, function(sdkEvent) {
            receive_callback(sdkEvent);
          });
          //_this.stompClient.reconnect_delay = 2000;
        },
        error_callback
      );
    },

    SockSend(message) {
      //    console.log("calling logout api via web socket");
      this.stomp_client.send(this.addr_map, {}, JSON.stringify(message));
    },

    SockDisconnect() {
      if (this.stomp_client !== null) {
        this.stomp_client.disconnect();
      }
      console.log("websocket disconnected");
    },
    InitTimer() {
      this.timer = interval(2000).subscribe(() => {
        /*      if (cur_time.getSeconds() % this.auto_fetch_interval == 0) {
          this.GetSheetData();
        }
        if (cur_time.getSeconds() % this.auto_save_interval == 0) {
          this.SaveSheetData();
        } */
        this.SockSend({
          operation: "fetch",
          sheet_id: 1,
          stamp: this.stamp++
        });
      });
    },
    ImportSheetData() {},
    ExportSheetData() {},
    FetchSheetData() {},
    SaveSheetData() {}
  },
  destroyed() {
    this.SockDisconnect();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
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
  width: 50px;
  height: 30px;
  text-align: center;
  padding-top: 4px;
  cursor: default;
}
.file-menu-item:hover {
  background: rgba(240, 240, 240, 0.5);
}
.sheet-control-menu {
  width: 100%;
  height: 48px;
  margin-top: 6px;
  border-top: 0.5px solid rgba(128, 128, 128, 0.8);
  border-bottom: 0.5px solid rgba(128, 128, 128, 0.8);
}
.sheet-control-icon {
  width: 20px;
  height: 30px;
}
.sheet-control-icon-bg {
  width: 36px;
  height: 32px;
  padding-left: 8px;
  float: left;
}
.sheet-control-icon-bg:hover {
  background: rgba(240, 240, 240, 0.5);
}
.sheet-control-item-menu {
  margin-right: 6px;
  padding: 0px 6px;
  height: 30px;
  text-align: center;
  padding-top: 4px;
  cursor: default;
  float: left;
}
.sheet-control-item-menu:hover {
  background: rgba(240, 240, 240, 0.5);
}
.cell-control-menu {
  width: 100%;
  height: 36px;
  margin-top: 6px;
  border-top: 0.5px solid rgba(128, 128, 128, 0.8);
  border-bottom: 0.5px solid rgba(128, 128, 128, 0.8);
  padding: 0;
}
.cell-status {
  text-align: center;
  height: 100%;
  padding-top: 2px;
  border: 0.5px solid rgba(200, 200, 200, 0.9);
  background: #f8f8f8;
}
.cell-content {
  text-align: center;
  height: 100%;
  padding: 0;
  font-size: 120%;
}
.sheet-footer {
  height: 35px;
  background: #f8f8f8;
}
.el-tabs__content {
  padding: 0px !important;
}
</style>
