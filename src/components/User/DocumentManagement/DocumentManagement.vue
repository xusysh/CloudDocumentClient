<template>
  <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item>客户端（普通用户）</el-breadcrumb-item>
    <el-breadcrumb-item>个人中心</el-breadcrumb-item>
    <el-breadcrumb-item>文档管理</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
export default {
  name: "DocumentManagement",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
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
