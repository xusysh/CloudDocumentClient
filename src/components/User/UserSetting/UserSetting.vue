<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item>客户端（普通用户）</el-breadcrumb-item>
      <el-breadcrumb-item>个人中心</el-breadcrumb-item>
      <el-breadcrumb-item>用户设置</el-breadcrumb-item>
    </el-breadcrumb>

    <h1>账号设置</h1>

    <el-row class="el-row">
      <el-col :span="6" class="el-col"></el-col>
      <el-col :span="6">
        <h3>修改头像</h3>
        <el-upload
          class="avatar-uploader"
          action="#"
          :show-file-list="false"
          :before-upload="storeImg"
        >
          <img v-if="userAvaster" :src="userAvaster" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-col>
    </el-row>

    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="昵称" prop="petName">
        <el-input v-model="ruleForm.petName" :placeholder="userName"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass">
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
      ruleForm: {
        pass: "",
        checkPass: "",
        petName: ""
      },
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        petName: [{ validator: checkPetName, trigger: "blur" }]
      }
    };
  },
  computed: {
    ...mapState(["userAvaster", "userName", "password"])
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$axios
            .post("", {
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
          .post("", {
            name: this.userName,
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
