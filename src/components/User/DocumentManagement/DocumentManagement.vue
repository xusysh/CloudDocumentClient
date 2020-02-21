<template>
  <div class="card" style="height: 86vh;">
    <div class="card-header">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>客户端（普通用户）</el-breadcrumb-item>
        <el-breadcrumb-item>个人中心</el-breadcrumb-item>
        <el-breadcrumb-item>文档管理</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <el-container>
      <el-aside>
        <div class="file-tree">
          <el-tree
            :data="data"
            show-checkbox
            node-key="id"
            default-expand-all
            :expand-on-click-node="false"
          >
            <span class="custom-tree-node" slot-scope="{ node, data }">
              <span>{{ node.label }}</span>
              <span>
                <i
                  class="el-icon-plus tree-node-option"
                  @click="() => append(data)"
                ></i>
                <i
                  class="el-icon-minus tree-node-option"
                  @click="() => remove(node, data)"
                ></i>
              </span>
            </span>
          </el-tree>
        </div>
      </el-aside>
      <el-container>
        <el-header style="background: none;">
          <h4 style="margin-top: 20px;">最近浏览</h4>
        </el-header>
        <el-divider>当前目录</el-divider>
        <el-main style="margin-top: -20px;">
          <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="date" label="名称" width="180">
            </el-table-column>
            <el-table-column prop="name" label="创建者" width="180">
            </el-table-column>
            <el-table-column prop="address" label="最后修改日期">
            </el-table-column>
          </el-table>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
let id = 1000;
export default {
  name: "DocumentManagement",
  data() {
    const data = [
      {
        id: 1,
        label: "一级 1",
        children: [
          {
            id: 4,
            label: "二级 1-1",
            children: [
              {
                id: 9,
                label: "三级 1-1-1"
              },
              {
                id: 10,
                label: "三级 1-1-2"
              }
            ]
          }
        ]
      },
      {
        id: 2,
        label: "一级 2",
        children: [
          {
            id: 5,
            label: "二级 2-1"
          },
          {
            id: 6,
            label: "二级 2-2"
          }
        ]
      },
      {
        id: 3,
        label: "一级 3",
        children: [
          {
            id: 7,
            label: "二级 3-1"
          },
          {
            id: 8,
            label: "二级 3-2"
          }
        ]
      }
    ];
    return {
      data: JSON.parse(JSON.stringify(data)),
      tableData: [
        {
          date: "需求文档",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "设计文档",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "前后端接口",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "设计文档2",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ]
    };
  },

  methods: {
    append(data) {
      const newChild = { id: id++, label: "testtest", children: [] };
      if (!data.children) {
        this.$set(data, "children", []);
      }
      data.children.push(newChild);
    },

    remove(node, data) {
      const parent = node.parent;
      const children = parent.data.children || parent.data;
      const index = children.findIndex(d => d.id === data.id);
      children.splice(index, 1);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.custom-tree-node {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  padding-right: 8px;
}
.tree-node-option {
  font-size: 86%;
}
.tree-node-option:hover {
  color: rgb(160, 200, 200);
}
.file-tree {
  margin-top: 20px;
  padding-right: 10px;
}
</style>
