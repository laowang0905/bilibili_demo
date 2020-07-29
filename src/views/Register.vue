<template>
  <div class="register-container">
    <LoginTop title="注册bilibili">
      <template v-slot:right>
        <span class="login-top-right" @click="$router.replace('/login')">切换到登录</span>
      </template>
    </LoginTop>
    <van-form @submit.native.prevent="register">
      <LoginText
        placeholder="请输入姓名"
        text="姓名"
        :value="registerData.name"
        style="margin: 15px 0;"
        @textChange="handleNameChange"
        :rules="rules.name"
      ></LoginText>
      <LoginText
        placeholder="请输入用户名"
        text="用户名"
        :value="registerData.username"
        @textChange="handleUsernameChange"
        :rules="rules.username"
        style="margin-bottom: 5px;"
      ></LoginText>
      <LoginText
        placeholder="请输入密码"
        text="密码"
        :value="registerData.password"
        type="password"
        @textChange="handlePasswordChange"
        :rules="rules.password"
      ></LoginText>
      <van-button color="#FB7299" class="submit-btn" native-type="submit" :disabled="!rulesTest">提交</van-button>
    </van-form>
  </div>
</template>
<script>
import LoginTop from 'components/common/loginTop/LoginTop.vue'
import LoginText from 'components/common/loginText/LoginText.vue'
import { Form, Button, Toast } from 'vant'
import { reqRegister } from 'network'

export default {
  data () {
    return {
      registerData: {
        name: '',
        username: '',
        password: ''
      },
      rules: {
        name: function (val) {
          return val.length > 3 && val.length < 9
        },
        username: /^\d+$/,
        password: /^\w+$/
      },
      isAccess: false
    }
  },
  methods: {
    // 处理username子组件修改父组件username
    handleNameChange (val) {
      this.registerData.name = val
    },
    handleUsernameChange (val) {
      this.registerData.username = val
    },
    handlePasswordChange (val) {
      this.registerData.password = val
    },
    async register () {
      if (this.rulesTest) {
        const { data } = await reqRegister(this.registerData)
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
      // console.log(this.rules.name(this.registerData.name) && this.rules.username.test(this.registerData.username) && this.rules.password.test(this.registerData.password));
      return this.rules.name(this.registerData.name) && this.rules.username.test(this.registerData.username) && this.rules.password.test(this.registerData.password)
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
.submit-btn {
  margin-top: 20px;
  width: 100%;
  border-radius: 20px;
}
.login-top-right {
  display: block;
}
</style>
