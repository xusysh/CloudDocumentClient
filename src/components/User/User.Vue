<template>
  <el-container style="height: 100vh; border: 1px solid #eee">
    <el-aside width="240px" style="background-color:#545c64">
      <div class="avatar-block">
        <el-avatar
          :size="100"
          src="../../assets/default_avatar.jpg"
        ></el-avatar>
        <h3 style="color: rgb(240, 240, 240);">用户名</h3>
      </div>
      <el-menu
        router
        :default-openeds="['1', '2', '3']"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-submenu index="1">
          <template slot="title"
            ><i class="el-icon-message"></i>个人中心
          </template>
          <el-menu-item index="/user/document-management">文档管理</el-menu-item>
          <el-menu-item index="1-2">用户设置</el-menu-item>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title"><i class="el-icon-menu"></i>云笔记</template>
          <el-menu-item index="/user/note-management">我的笔记</el-menu-item>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title"><i class="el-icon-menu"></i>云协作</template>
          <el-menu-item index="3-1">云表格</el-menu-item>
          <el-menu-item index="3-2">云文档</el-menu-item>
        </el-submenu>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header style="font-size: 12px;">
        <el-input
          style="width: 240px;"
          placeholder="输入搜索内容"
          prefix-icon="el-icon-search"
          v-model="input_search"
        >
        </el-input>
        <div style="float: right;margin-top: 2px;">
          <el-tooltip effect="dark" content="设置">
            <i
              class="el-icon-setting"
              style="font-size: 180%;margin-right: 16px;"
            ></i>
          </el-tooltip>
          <el-tooltip class="item" effect="dark" content="帮助">
            <i
              class="el-icon-question"
              style="font-size: 180%;margin-right: 16px;"
            ></i>
          </el-tooltip>
          <el-tooltip class="item" effect="dark" content="下载客户端">
            <i class="el-icon-download" style="font-size: 180%;"></i>
          </el-tooltip>
        </div>
      </el-header>
      <el-main>
        <div class="sub-pages">
         
        <router-view />  
        </div>
  
      </el-main>
    </el-container>
  </el-container>
</template>

<style>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}

.avatar-block {
  text-align: center;
  margin-top: 40px;
  margin-bottom: 20px;
}

.sub-pages {
  width: 100vh;
  overflow: hidden;
}

</style>

<script>
export default {
  name: "User",
  data() {
    return {
      input_search: ""
    };
  }
};
</script>
