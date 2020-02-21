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
            <div class="note-info-list">
              <div
                v-for="(note, index) in note_list"
                :key="index"
                class="note-info-box"
                @click="CheckNoteInfoDetail(index)"
                :style="{ background: note_info_box_bg[index] }"
                @mouseover="MouseOverNoteInfoBox(index)"
                @mouseleave="MouseLeaveNoteInfoBox(index)"
              >
                <div class="note-info-title">
                  <i class="el-icon-notebook-2"></i>
                  <span>标题</span>
                </div>
                <div class="note-info-content">
                  aasdasasdasdasdsad
                  <br />asasd
                </div>
                <div class="note-info-footer">2020-02-20 18:26:48</div>
              </div>
            </div>
            <el-pagination
              style="margin: 10px 0px;"
              small
              background
              layout="prev, pager, next"
              :page-size="4"
              :total="104"
            ></el-pagination>
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
                    <span class="note-title" @click="EditNoteTitle()">{{ note_title }}</span>
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
            <ckeditor :editor="editor" v-model="editorData" :config="editorConfig"></ckeditor>
          </div>
        </el-card>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import "@ckeditor/ckeditor5-build-classic/build/translations/zh-cn";
export default {
  name: "NoteManagement",
  data() {
    return {
      note_search_content: "",
      note_list: new Array(4),
      note_title: "笔记1",
      note_title_bak: "",
      edit_note_title: false,
      note_info_box_bg: new Array(4).fill("none"),
      editor: ClassicEditor,
      editorData: "<p>Content of the editor.</p>",
      editorConfig: {
        language: "zh-cn"
      }
    };
  },
  mounted() {},
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
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
