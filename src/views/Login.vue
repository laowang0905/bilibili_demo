<template>
  <div class="login-container">
    <LoginTop title="登录bilibili" style="margin-bottom: 10px"></LoginTop>
    <van-form @submit.native.prevent="login">
      <LoginText
        placeholder="请输入用户名"
        text="用户名"
        :value="loginData.username"
        @textChange="handleUsernameChange"
        :rules="rules.username"
        style="margin-bottom: 5px;"
      ></LoginText>
      <LoginText
        placeholder="请输入密码"
        text="密码"
        :value="loginData.password"
        type="password"
        @textChange="handlePasswordChange"
        :rules="rules.password"
      ></LoginText>
      <div class="btn-box">
        <van-button
          color="#FB7299"
          class="submit-btn"
          native-type="submit"
          :disabled="!rulesTest"
        >登录</van-button>
        <van-button color="#FB7299" class="submit-btn" @click="$router.push('/register')">注册</van-button>
      </div>
    </van-form>
  </div>
</template>
<script>
import LoginTop from 'components/common/loginTop/LoginTop.vue'
import LoginText from 'components/common/loginText/LoginText.vue'
import { Form, Button, Toast } from 'vant'
import { reqLogin } from 'network'

export default {
  data () {
    return {
      loginData: {
        username: '',
        password: ''
      },
      rules: {
        // 至少一个数字
        username: /^\d+$/,
        // 至少一位数字或字母
        password: /^\w+$/
      }
    }
  },
  methods: {
    // 处理username子组件修改父组件username
    handleUsernameChange (val) {
      this.loginData.username = val
    },
    handlePasswordChange (val) {
      this.loginData.password = val
    },
    async login () {
      if (this.rulesTest) {
        const { data } = await reqLogin(this.loginData)
        console.log(data);
        data.code == 302 && Toast(data.msg)
        if (data.code == 200) {
          Toast(data.msg)
          localStorage.id = data.id
          localStorage.token = data.token
          this.$router.replace('/')
        }
      }
    }
  },
  computed: {
    rulesTest () {
      // console.log(this.rules.name(this.loginData.name) && this.rules.username.test(this.loginData.username) && this.rules.password.test(this.loginData.password));
      return this.rules.username.test(this.loginData.username) && this.rules.password.test(this.loginData.password)
    }
  },
  components: {
    LoginTop,
    LoginText,
    [Form.name]: Form,
    [Button.name]: Button,
    [Toast.name]: Toast
  }
}
</script>
<style lang='less' scoped>
.btn-box {
  display: flex;
  .submit-btn {
    flex: 1;
    margin: 20px 10px;
    border-radius: 8px;
  }
}

.login-top-right {
  display: block;
}
</style>
