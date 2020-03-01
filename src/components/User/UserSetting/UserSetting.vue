<template>
  <div class="card" style="height: 86vh;">
    <div class="card-header">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>客户端（普通用户）</el-breadcrumb-item>
        <el-breadcrumb-item>个人中心</el-breadcrumb-item>
        <el-breadcrumb-item>用户设置</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <el-container>
      <el-aside width="560px">
        <el-card
          shadow="hover"
          style="width: 500px;margin-left: 20px;margin-top: 20px;"
        >
          <div slot="header" class="clearfix">
            个人资料管理
          </div>
          <el-row class="el-row">
            <el-col :span="3" class="el-col">&nbsp;</el-col>
            <el-col :span="12">
              <el-upload
                class="upload-demo"
                drag
                action="https://jsonplaceholder.typicode.com/posts/"
                multiple
              >
                <i class="el-icon-upload"></i>
                <div class="el-upload__text">
                  将头像拖到此处，或<em>点击上传</em>
                </div>
              </el-upload>
              <!--el-upload
                class="avatar-uploader"
                action="#"
                :show-file-list="false"
                :before-upload="storeImg"
              >
                <img v-if="userAvaster" :src="userAvaster" class="avatar" />
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload-->
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24">&nbsp;</el-col>
          </el-row>
          <el-row>
            <el-col :span="2">&nbsp;</el-col>
            <el-col :span="20" style="margin-bottom: -16px;">
              <el-form
                :model="nameForm"
                label-position="left"
                status-icon
                :rules="rules"
                ref="nameForm"
                label-width="100px"
                class="demo-nameForm"
              >
                <el-form-item label="昵称" prop="petName">
                  <el-input
                    v-model="nameForm.petName"
                    :placeholder="userName"
                  ></el-input>
                </el-form-item>
                <el-form-item label="新密码" prop="pass">
                  <el-input
                    type="password"
                    v-model="ruleForm.pass"
                    autocomplete="off"
                  ></el-input>
                </el-form-item>
                <el-form-item label="确认密码" prop="checkPass">
                  <el-input
                    type="password"
                    v-model="ruleForm.checkPass"
                    autocomplete="off"
                  ></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="submitForm('ruleForm')"
                    >提交</el-button
                  >
                  <el-button @click="resetForm('ruleForm')">重置</el-button>
                </el-form-item>
                <!--el-form-item>
                  <el-button type="primary" @click="submitForm('nameForm')"
                    >提交</el-button
                  >
                  <el-button @click="resetForm('nameForm')">重置</el-button>
                </el-form-item-->
              </el-form>
            </el-col>
          </el-row>
          <!--el-row>
            <el-col :span="2">&nbsp;</el-col>
            <el-col :span="20">
              <el-form
                :model="ruleForm"
                label-position="left"
                status-icon
                :rules="rules"
                ref="ruleForm"
                label-width="100px"
                class="demo-ruleForm"
              >
                <el-form-item label="新密码" prop="pass">
                  <el-input
                    type="password"
                    v-model="ruleForm.pass"
                    autocomplete="off"
                  ></el-input>
                </el-form-item>
                <el-form-item label="确认密码" prop="checkPass">
                  <el-input
                    type="password"
                    v-model="ruleForm.checkPass"
                    autocomplete="off"
                  ></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="submitForm('ruleForm')"
                    >提交</el-button
                  >
                  <el-button @click="resetForm('ruleForm')">重置</el-button>
                </el-form-item>
              </el-form>
            </el-col>
          </el-row-->
        </el-card>
      </el-aside>

      <el-main>
        <el-card shadow="hover" style="width: 640px;">
          <div id="myChart" style="width: 600px;height: 260px;"></div>
          <div id="myChart2" style="width: 600px;height: 260px;"></div>
        </el-card>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "UserSetting",
  data() {
    var checkPetName = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("昵称不能为空"));
      }
      setTimeout(() => {
        if (value.length <= 4) {
          callback(new Error("昵称不能短于4位"));
        } else {
          callback();
        }
      }, 1000);
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      user_info: null,
      nameForm: {
        petName: ""
      },
      ruleForm: {
        pass: "",
        checkPass: ""
      },
      rules: {
        pass: [{ validator: validatePass, trigger: "change" }],
        checkPass: [{ validator: validatePass2, trigger: "change" }],
        petName: [{ validator: checkPetName, trigger: "change" }]
      }
    };
  },
  computed: {
    ...mapState(["userAvaster", "userName", "password"])
  },
  mounted() {
    this.user_info = this.$store.state.userInfo;
    this.DrawLine();
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$axios
            .post("/userInfo/changeInfo", {
              name: this.userName,
              password: this.ruleForm.pass
            })
            .then(function(resp) {
              alert("submit!");
            })
            .catch(function(resp) {
              console.debug(resp);
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    storeImg(file) {
      let that = this;
      if (file) {
        let url = null;
        if (window.createObjectURL !== undefined) {
          // basic
          url = window.createObjectURL(file);
        } else if (window.URL !== undefined) {
          // mozilla(firefox)
          url = window.URL.createObjectURL(file);
        } else if (window.webkitURL !== undefined) {
          // webkit or chrome
          url = window.webkitURL.createObjectURL(file);
        }
        this.$axios
          .post("http://106.54.236.110:8000/userInfo/changeImg", {
            id: this.user_info.id,
            imgUrl: url
          })
          .then(function(resp) {
            that.$store.dispatch("upLoadImg", url);
          })
          .catch(function(resp) {
            console.debug(resp);
          });
      }
      return false;
    },
    DrawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("myChart"));
      let myChart2 = this.$echarts.init(document.getElementById("myChart2"));

      // 绘制图表
      myChart.setOption({
        title: {
          text: "笔记更新频度统计"
        },
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: ["单日更新数"]
        },
        toolbox: {
          show: true,
          feature: {
            dataZoom: {
              yAxisIndex: "none"
            },
            dataView: { readOnly: false },
            magicType: { type: ["line", "bar"] },
            restore: {},
            saveAsImage: {}
          }
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            name: "单日更新数",
            type: "line",
            data: [2, 8, 10, 4, 2, 8, 6],
            markPoint: {
              data: [
                { type: "max", name: "最大值" },
                { type: "min", name: "最小值" }
              ]
            },
            markLine: {
              data: [{ type: "average", name: "平均值" }]
            }
          }
        ]
      });

      myChart2.setOption({
        title: {
          text: "我的笔记内容"
        },
        tooltip: {},
        radar: {
          // shape: 'circle',
          radius: 80, //大小
          name: {
            textStyle: {
              color: "#fff",
              backgroundColor: "#999",
              borderRadius: 3,
              padding: [3, 5]
            }
          },
          indicator: [
            { name: "Web前端", max: 20 },
            { name: "Web后端", max: 20 },
            { name: "设计模式", max: 20 },
            { name: "操作系统", max: 20 },
            { name: "编译原理", max: 20 },
            { name: "离散数学", max: 20 }
          ]
        },
        series: [
          {
            name: "笔记相关知识点",
            type: "radar",
            // areaStyle: {normal: {}},
            data: [
              {
                value: [6, 16, 10, 14, 8, 4]
              }
            ]
          }
        ]
      });
    }
  }
};
</script>

<style>
.avatar-uploader {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  width: 180px;
}

.avatar-uploader:hover {
  border-color: #409eff;
}

.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}

.avatar {
  width: 178px;
  height: 178px;
  display: block;
}

.el-col {
  border-radius: 4px;
}
</style>
