<template>
  <div class="card" style="height: 86vh;">
    <div class="card-header">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>客户端（普通用户）</el-breadcrumb-item>
        <el-breadcrumb-item>云笔记</el-breadcrumb-item>
        <el-breadcrumb-item>我的笔记</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
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
        <div class="note-list">
          <div v-for="note in note_list" class="note-info-box">
            <div class="note-title">
              <i class="el-icon-notebook-2"></i>
              <span>标题</span>
            </div>
            <div class="note-content">
              aasddssssssssssssssssssssssssssssssss
            </div>
            <div class="note-footer">
              2020-02-20 18:26:48
            </div>
          </div>
        </div>
        <el-pagination
          style="margin: 10px 0px;"
          small
          background
          layout="prev, pager, next"
          :page-size="4"
          :total="104"
        >
        </el-pagination>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "NoteManagement",
  data() {
    return {
      note_search_content: "",
      note_list: new Array(4)
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.note-info-box {
  padding: 12px 20px;
  border-bottom: 0.5px solid rgba(128, 128, 128, 0.8);
}
.note-list {
}
.note-title {
  font-size: medium;
}
.note-content {
  margin: 10px 20px;
  color: gray;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.note-footer {
  color: gray;
  font-size: small;
}
</style>
