<template>
  <div class="card" style="height: 86vh;">
    <div class="card-header">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>客户端（普通用户）</el-breadcrumb-item>
        <el-breadcrumb-item>云笔记</el-breadcrumb-item>
        <el-breadcrumb-item>我的笔记</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <el-container>
      <el-aside width>
        <div class="card-body">
          <el-card shadow="hover" body-style="padding:0px" style="width: 300px;">
            <div slot="header" class="clearfix">
              <el-input
                style="width: 200px;"
                placeholder="搜索我的笔记"
                prefix-icon="el-icon-search"
                v-model="note_search_content"
              />
              <el-button
                circle
                type="primary"
                size="medium"
                icon="el-icon-plus"
                style="margin-left: 10px;"
              ></el-button>
            </div>
            <div class="note-info-list" v-loading="note_info_list_loading">
              <div
                v-for="(note, index) in cur_page_note_list"
                :key="index"
                class="note-info-box"
                @click="CheckNoteInfoDetail(index)"
                :style="{ background: note_info_box_bg[index] }"
                @mouseover="MouseOverNoteInfoBox(index)"
                @mouseleave="MouseLeaveNoteInfoBox(index)"
              >
                <div class="note-info-title" v-if="note!=undefined">
                  <i class="el-icon-notebook-2"></i>
                  <span>{{note.file_name}}</span>
                </div>
                <div class="note-info-content" v-if="note!=undefined">
                  {{FetchHtmlContent(note.file_content)}}
                  <br />
                </div>
                <div
                  class="note-info-footer"
                  v-if="note!=undefined"
                >{{GetNoteLastModifiedTime(note.last_modified_time.$date)}}</div>
              </div>
            </div>
            <div style="text-align:center">
              <el-pagination
                @current-change="CurrentPageChanged"
                :current-page="cur_page"
                style="margin: 10px 0px;"
                small
                background
                layout="prev, pager, next"
                :page-size="4"
                :total="200"
              ></el-pagination>
            </div>
          </el-card>
        </div>
      </el-aside>

      <el-main>
        <el-card shadow="hover" style="width: 850px">
          <div slot="header" class="clearfix">
            <div style="float: left;width: 95vh;padding-left: 10vh;">
              <div style="text-align: center;">
                <div v-if="!edit_note_title">
                  <el-tooltip content="点击以编辑标题">
                    <span class="note-title" @click="EditNoteTitle()">
                      {{
                      note_title
                      }}
                    </span>
                  </el-tooltip>
                </div>
                <div v-if="edit_note_title">
                  <el-input style="width: 400px;" placeholder="输入标题" v-model="note_title" />
                  <i
                    class="el-icon-circle-check"
                    style="cursor: pointer;font-size: 180%;margin-left: 10px;margin-right: 6px;"
                    @click="ConfirmEditNoteTitle()"
                  ></i>
                  <i
                    class="el-icon-circle-close"
                    style="cursor: pointer;font-size: 180%;"
                    @click="CancelEditNoteTitle()"
                  ></i>
                </div>
              </div>
            </div>
            <div style="font-size: 180%;float: right;padding-right: 10px;cursor: pointer;">
              <el-tooltip content="保存">
                <i class="el-icon-upload"></i>
              </el-tooltip>
            </div>
          </div>
          <div>
            <ckeditor :editor="editor" v-model="editor_data" :config="editor_config"></ckeditor>
          </div>
        </el-card>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import "@ckeditor/ckeditor5-build-classic/build/translations/zh-cn";
import Moment from "moment";

export default {
  name: "NoteManagement",
  data() {
    return {
      note_search_content: "",
      note_info_list: new Array(4),
      cur_page_note_list: [],
      note_info_list_loading: false,
      cur_page: 1,
      note_title: "笔记1",
      note_title_bak: "",
      edit_note_title: false,
      note_info_box_bg: new Array(4).fill("none"),
      editor: ClassicEditor,
      editor_data:
        "<h4>2020.02.20待办</h4><ol><li>常州公积金查询子账户明细</li><li>江苏特色业务风险整改</li><li>宝应社保故障</li><li>南京农民工代发优化</li></ol><p><strong>备忘</strong></p><ul><li>xxxxx</li><li>xxxxxxxxxx</li></ul>",
      editor_config: {
        language: "zh-cn"
      }
    };
  },
  mounted() {
    this.user_info = this.$store.state.userInfo;
    this.GetAllNote();
  },
  methods: {
    CheckNoteInfoDetail(index) {
      for (let i = 0; i < this.note_info_box_bg.length; i++) {
        if (i == index) this.$set(this.note_info_box_bg, i, "#eaf0fb");
        else this.$set(this.note_info_box_bg, i, "none");
      }
    },
    MouseOverNoteInfoBox(index) {
      if (this.note_info_box_bg[index] != "#eaf0fb")
        this.$set(this.note_info_box_bg, index, "#f0f0f0");
    },
    MouseLeaveNoteInfoBox(index) {
      if (this.note_info_box_bg[index] != "#eaf0fb")
        this.$set(this.note_info_box_bg, index, "none");
    },
    EditNoteTitle() {
      this.edit_note_title = true;
      this.note_title_bak = this.note_title;
    },
    ConfirmEditNoteTitle() {
      this.edit_note_title = false;
    },
    CancelEditNoteTitle() {
      this.edit_note_title = false;
      this.note_title = this.note_title_bak;
    },
    GetAllNote() {
      let user_id = this.user_info.id;
      this.note_info_list_loading = true;
      this.$axios
        .post("http://106.54.236.110:8000/note/all", {
          user_id: user_id
        })
        .then(resp => {
          let response = resp.data;
          this.note_info_list_loading = false;
          if (resp.data.status != 200) {
            this.$message({
              message: "获取笔记内容失败：" + resp.data.msg,
              type: "error"
            });
            return;
          }
          this.note_info_list = JSON.parse(response.data);
          this.CurrentPageChanged(0);
          console.log(this.note_info_list);
        })
        .catch(err => {
          this.login_loading = false;
          this.$message({
            message: "获取笔记内容失败：服务器连接异常",
            type: "error"
          });
        });
    },
    CurrentPageChanged(page_index) {
      this.GetPageNoteList(page_index);
    },
    GetPageNoteList(page_index) {
      if (this.note_info_list != undefined) {
        let start = (page_index - 1) * 4 - 1;
        let end =
          this.note_info_list.length - start < 4
            ? this.note_info_list.length - start
            : 4;
        this.cur_page_note_list = this.note_info_list.slice(start, end);
      } else this.cur_page_note_list = [];
    },
    GetNoteLastModifiedTime(date_time_span) {
      let date = new Date(date_time_span);
      return Moment(date).format("YYYY-MM-DD HH:mm:ss");
    },
    /* 去除富文本中的html标签 */
    FetchHtmlContent(richText) {
      /* *、+限定符都是贪婪的，因为它们会尽可能多的匹配文字，只有在它们的后面加上一个?就可以实现非贪婪或最小匹配。*/
      let content = richText.replace(/<[^>]+>/g, "");
      /* 去除&amp;nbsp; */
      content = content.replace(/&amp;nbsp;/gi, "");
      /* 去除空格 */
      content = content.replace(/\s/gi, "");
      return content;
    }
  }
};
</script>

<style>
.note-info-box {
  padding: 12px 20px;
  border-bottom: 0.5px solid rgba(128, 128, 128, 0.8);
}

.note-info-title {
  font-size: medium;
}

.note-info-content {
  margin: 10px 20px;
  color: gray;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}

.note-info-footer {
  color: gray;
  font-size: small;
}

.note-title {
  font-size: 160%;
  font-weight: 600;
}

.ck-editor__editable {
  min-height: 416px;
  max-height: 416px;
}
</style>
