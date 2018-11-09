<template>
  <div class="login">
    <div class="login_head">
      <span class="login_head_title">京西<span class="login_head_title_dot">·</span>商家后台</span>
    </div>
    <div class="login_body">
      <div class="login_body--left"></div>
      <div class="login_body--right">
        <div class="login_body--right_head">
          <span class="login_body--right_head_title">账户登录</span>
          <span class="login_body--right_head_switch"></span>
        </div>
        <div class="login_body--right_body">
          <div class="login_body--right_body_input">
            <el-input :maxlength="30" placeholder="请输入账号"></el-input>
            <svg-icon icon-class="user" class="login_icon"></svg-icon>
          </div>

          <div class="login_body--right_body_input">
            <el-input :maxlength="30" placeholder="请输入密码"></el-input>
            <svg-icon icon-class="password" class="login_icon"></svg-icon>
          </div>

          <div class="login_body--right_body_input">
            <div class="login_body--right_body_input_code">
              <span class="login_body--right_body_input_code_title">验证码:</span>
              <el-input :maxlength="30" v-model="code" class="login_body--right_body_input--short"></el-input>
              <img :src="captchaImg" alt="验证码" class="login_body--right_body_input_img">
            </div>

          </div>

          <el-button type="danger" @click="login">登录</el-button>
        </div>
        <div class="login_body--right_foot">
          <span class="login_body--right_foot_title">没有账户？</span>
          <span class="login_body--right_foot_title">忘记密码？</span>
        </div>
      </div>
    </div>
    <div class="login_foot">
      <a class="login_foot_link">关于我们</a><a class="login_foot_link">联系我们</a><a class="login_foot_link">人才招聘</a><a class="login_foot_link">商家入驻</a><a class="login_foot_link">广告服务</a><a class="login_foot_link">友情链接</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      title: '',
      captchaImg: '/third/patchca.htm?v=' + Math.random(),
      code: ''
    }
  },
  methods: {
    login() {
      
    }
  }
}
</script>

<style lang="scss" scoped>
$padding: 0 20%;
.login {
  display: flex;
  flex-direction: column;
  background-color: #fff;
  text-align: center;
  .login_head {
    text-align: left;
    padding: $padding;
    height: 60px;
    line-height: 60px;
    .login_head_title {
      font-size: 1.7vw;
      color: #f6665b;
      font-weight: bolder;
      font-family: initial;

      .login_head_title_dot {
        font-weight: bolder;
        font-size: 1.3vw;
        margin: 0 5px;
      }
    }
  }
  .login_body {
    height: 450px;
    padding: $padding;
    background-color: #3e75ef;
    display: flex;
    align-items: center;
    .login_body--left {
      flex-grow: 2;
    }
    .login_body--right {
      margin: 20px 0;
      background-color: #fff;
      flex-basis: 350px;
      height: 350px;
      .login_body--right_head {
        height: 60px;
        line-height: 60px;
        border-bottom: 1px solid #ddd;
        .login_body--right_head_title {
          color: #e44c52;
          font-weight: bolder;
        }
        .login_body--right_head_switch {
          display: block;
          width: 7vh;
          height: 7vh;
          border-width: 7vh;
          border-color: red green blue brown;
        }
      }
    }
  }
  .login_foot {
    height: 60px;
    .login_foot_link {
      font-size: 12px;
      color: #999;
      &:not(:last-child):after {
        content: '|';
        margin: 5px 10px;
      }
    }
  }
  /deep/ .el-input__inner {
    margin: 10px 10px;
    width: 300px;
  }
  /deep/ .el-button {
    width: 300px;
    background-color: #ed484b;
  }
  .login_body--right_body_input_code {
    display: flex;
    position: relative;
  }
  /deep/ .login_body--right_body_input--short {
    width: 200px;
    margin-left: 15px;
  }
  /deep/ .login_body--right_body_input--short .el-input__inner {
    width: 200px;
    text-indent: 60px;
  }
  .login_body--right_body_input_img {
    position: absolute;
    right: 25px;
    width: 85px;
    height: 37px;
    top:10px;
  }
  .login_body--right_body_input_code_title{
    position: absolute;
    z-index: 2;
    top:20px;
    left:40px;
  }
  .login_body--right_body_input {
    position: relative;
  }
  .login_icon {
    position: absolute;
    right: 30px;
    top: 20px;
    color: #999;
  }
  .login_body--right_foot {
    width: 300px;
    display: flex;
    margin: 0 auto;
    justify-content: space-between;
    .login_body--right_foot_title {
      margin-top: 10px;
      font-size: 12px;
      color: #999;
    }
  }
}
</style>

