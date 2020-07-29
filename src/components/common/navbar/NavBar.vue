<template>
  <div class="navbar-container">
    <LoginTop>
      <template v-slot:left>
        <img src="~assets/img/navbar_logo.png" class="navbar-logo" @click="$router.push('/')" />
      </template>
      <template v-slot:center>
        <van-icon class="search-icon" name="search" color="#ccc" @click="$router.push('/search')" />
      </template>
      <template v-slot:right>
        <img class="user-avator" :src="$store.state.userInfo.user_img" @click="$router.push('/profile')" />
        <van-button size="mini" color="#FB7299" style="margin-left: 10px;">下载app</van-button>
      </template>
    </LoginTop>
  </div>
</template>
<script>
import LoginTop from 'components/common/loginTop/LoginTop'
import { Icon, Button } from 'vant';
export default {
  components: {
    LoginTop,
    [Icon.name]: Icon,
    [Button.name]: Button
  }
}
</script>
<style lang='less' scoped>
.navbar-container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  .navbar-logo {
    box-sizing: border-box;
    padding: 5px;
    height: 100%;
    vertical-align: middle;
  }
  .user-avator {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    vertical-align: middle;
  }
  // .download {
  //   width: 70px;
  //   height: 40px;
  // }
  .search-icon {
    width: 24px;
    height: 24px;
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY((-50%));
    &::before {
      font-size: 24px;
    }
  }
}
</style>
