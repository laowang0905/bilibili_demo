<template>
  <div id="app">
    <NavBar v-show="$route.meta.isShow"></NavBar>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import { reqUserInfo } from 'network'
export default {
  name: 'app',
  created () {
    this.$store.dispatch('getUserInfo')
  },
  components: {
    NavBar
  }
}
</script>

<style lang="less">
@import 'assets/css/base.less';
</style>
