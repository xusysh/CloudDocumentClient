<template>
  <div class="homepage-hero-module">
    <div class="login-container">
      <div class="login-box">
        <h1 style="margin-top:30px;color: rgba(0, 0, 0, 0.6);">云笔记/文档管理</h1>
        <div class="form-group">
          <el-form ref="loginForm" :model="login_form" :rules="login_form">
            <el-form-item>
              <el-input v-model="login_form.name">
                <i slot="prefix" class="el-input__icon el-icon-user"></i>
              </el-input>
            </el-form-item>
            <el-form-item>
              <el-input v-model="login_form.password" type="password">
                <i slot="prefix" class="el-input__icon el-icon-key"></i>
              </el-input>
            </el-form-item>
            <el-button
              :loading="login_loading"
              type="primary"
              class="login-btn"
              icon="el-icon-switch-button"
              @click="Login('loginForm')"
            >登陆</el-button>
          </el-form>
        </div>
      </div>
    </div>

    <div class="video-container">
      <div :style="fixStyle" class="filter"></div>
      <video muted :style="fixStyle" autoplay loop class="fillWidth" v-on:canplay="canplay">
        <source src="../../assets/Noted.webm" type="video/webm" />浏览器不支持 video 标签，建议升级浏览器。
      </video>
    </div>
  </div>
</template>

<style scoped>
.login-container {
  align-items: center;
  display: -webkit-flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: 100;
  color: #fff;
}

.homepage-hero-module {
  position: relative;
  height: 96vh;
  overflow: hidden;
}
.video-container {
  position: relative;
  height: 100vh;
  overflow: hidden;
}

.video-container .poster img,
.video-container video {
  z-index: 0;
  position: absolute;
}

.video-container .filter {
  z-index: 1;
  position: absolute;
  background: rgba(0, 0, 0, 0.4);
}

.login-box {
  text-align: center;
  width: 500px;
  min-height: 200px;
  border-radius: 10px;
  /*圆角边框*/
  background: rgba(255, 255, 255, 0.8);
  /*半透明*/
  box-shadow: 2px 2px 6px #000000;
  /*内外渐变阴影*/
}

.form-group {
  width: 70%;
  margin-left: 15%;
}

.login-btn {
  width: 100%;
  height: 40px;
  margin-bottom: 30px;
}
</style>

<script>
export default {
  name: "Login",
  data() {
    return {
      vedioCanPlay: false,
      fixStyle: "",
      labelPosition: "right",
      login_loading: false,
      login_form: {
        name: "",
        password: ""
      },
      login_form_rules: {
        name: [
          { required: true, message: "请输入用户名", trigger: "blur" },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "change" },
        ]
      }
    };
  },
  methods: {
    canplay() {
      this.vedioCanPlay = true;
    },
    Login(formName) {
      this.$refs[formName].validate((valid) => {
          if (valid) {
            
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      this.login_loading = true;
      setTimeout(() => {
        this.login_loading = false;
        this.$message({
          message: "用户" + this.login_form.name + "登陆成功",
          type: "success"
        });
        this.$router.push("/user");
      }, 1000);
    }
  },
  mounted: function() {
    window.onresize = () => {
      const windowWidth = document.body.clientWidth;
      const windowHeight = document.body.clientHeight;
      const windowAspectRatio = windowHeight / windowWidth;
      let videoWidth;
      let videoHeight;
      if (windowAspectRatio < 0.5625) {
        videoWidth = windowWidth;
        videoHeight = videoWidth * 0.5625;
        this.fixStyle = {
          height: windowWidth * 0.5625 + "px",
          width: windowWidth + "px",
          "margin-bottom": (windowHeight - videoHeight) / 2 + "px",
          "margin-left": "initial"
        };
      } else {
        videoHeight = windowHeight;
        videoWidth = videoHeight / 0.5625;
        this.fixStyle = {
          height: windowHeight + "px",
          width: windowHeight / 0.5625 + "px",
          "margin-left": (windowWidth - videoWidth) / 2 + "px",
          "margin-bottom": "initial"
        };
      }
    };
    window.onresize();
  }
};
</script>
