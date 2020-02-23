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
      <el-aside style="height: 600px;overflow-y: auto;">
        <el-button
          type="primary"
          icon="el-icon-plus"
          style="width: 80%;margin-left: 10%;margin-top: 20px;"
          >新建</el-button
        >
        <div style="text-align: center;margin-top: 16px;">
          <el-progress type="circle" :percentage="25"></el-progress>
          <div>存储文档使用：12/48</div>
        </div>
        <el-menu class="el-menu-vertical-demo">
          <el-menu-item index="1">
            <i class="el-icon-share"></i>
            <span slot="title">与我共享</span>
          </el-menu-item>
          <el-menu-item index="2">
            <i class="el-icon-setting"></i>
            <span slot="title">收藏</span>
          </el-menu-item>
        </el-menu>

        <div class="file-tree">
          <el-tree
            :data="data"
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
        <el-header style="background: none;height: fit-content;">
          <h4 style="margin-top: 20px;">最近浏览</h4>
        </el-header>
        <div class="recent-file-block">
          <el-card class="box-card" shadow="hover">
            <img
              src="../../../assets/icons/excel.svg"
              style="display:block;width:20px;height:40px;float: left;margin-top: -6px;margin-right: 6px;"
            />
            <div class="recent-file-name">
              资产负债表.xlsx
            </div>
          </el-card>
          <el-card class="box-card" shadow="hover">
            <img
              src="../../../assets/icons/word.svg"
              style="display:block;width:20px;height:40px;float: left;margin-top: -6px;margin-right: 6px;"
            />
            <div class="recent-file-name">
              微服务平台需求设计.docx
            </div>
          </el-card>
          <el-card class="box-card" shadow="hover">
            <img
              src="../../../assets/icons/excel.svg"
              style="display:block;width:20px;height:40px;float: left;margin-top: -6px;margin-right: 6px;"
            />
            <div class="recent-file-name">
              金科部情况汇总.xlsx
            </div>
          </el-card>
          <el-card class="box-card" shadow="hover">
            <img
              src="../../../assets/icons/word.svg"
              style="display:block;width:20px;height:40px;float: left;margin-top: -6px;margin-right: 6px;"
            />
            <div class="recent-file-name">
              总结报告.docx
            </div>
          </el-card>
        </div>
        <el-main>
          <el-table :data="tableData" class="cur-dir-file-table" height="420">
            <el-table-column prop="date" label="名称"></el-table-column>
            <el-table-column prop="name" label="创建者"></el-table-column>
            <el-table-column
              prop="address"
              label="最后修改日期"
            ></el-table-column>
            <el-table-column label="操作" width="120px">
              <template slot-scope="scope">
                <el-button size="mini" circle icon="el-icon-edit"></el-button>
                <el-button
                  size="mini"
                  type="danger"
                  circle
                  icon="el-icon-delete"
                ></el-button>
              </template>
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
        id: 0,
        label: "我的文档",
        children: [
          {
            id: 1,
            label: "项目1文档",
            children: [
              {
                id: 2,
                label: "微服务1",
                children: [
                  {
                    id: 5,
                    label: "需求分析"
                  }
                ]
              },
              {
                id: 3,
                label: "微服务2",
                children: [
                  {
                    id: 6,
                    label: "需求分析"
                  },
                  {
                    id: 10,
                    label: "详细设计"
                  }
                ]
              }
            ]
          },
          {
            id: 4,
            label: "其他文档",
            children: [
              {
                id: 8,
                label: "部门通知"
              }
            ]
          }
        ]
      }
    ];
    return {
      data: JSON.parse(JSON.stringify(data)),
      tableData: [
        {
          date: "xx微服务需求分析",
          name: "admin",
          address: "2020-02-22 19:47:14"
        },
        {
          date: "xx微服务详细设计",
          name: "admin",
          address: "2020-02-22 19:47:14"
        },
        {
          date: "金科部xx统计2020.02",
          name: "admin",
          address: "2020-02-22 19:47:14"
        },
        {
          date: "前后端接口",
          name: "郭靖宇",
          address: "2020-02-22 19:47:14"
        },
        {
          date: "设计文档2",
          name: "xusysh",
          address: "2020-02-22 19:47:14"
        },
        {
          date: "simple_bot.py",
          name: "xusysh",
          address: "2020-02-22 19:47:14"
        },
        {
          date: "run.sh",
          name: "xusysh",
          address: "2020-02-22 19:47:14"
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
  margin-top: 10px;
  padding-left: 20px;
  padding-right: 10px;
}
.box-card {
  width: 200px;
  float: left;
  margin-right: 20px;
  cursor: pointer;
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}
.recent-file-block {
  margin-left: 40px;
  margin-top: 16px;
  margin-bottom: 10px;
}
.cur-dir-file-table {
  width: 100%;
  border-top: 1px solid grey;
  padding-top: 16px;
}
.recent-file-name {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  -webkit-line-clamp: 1;
}
</style>
