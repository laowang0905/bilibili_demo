<template>
  <div class="profile-container">
    <ProfileInfo></ProfileInfo>
    <Tabs :items="items" @tabsChange="tabsChange"></Tabs>
    <Dynamic v-if="tabsIndex == 0"></Dynamic>
    <Archive v-else-if="tabsIndex == 1"></Archive>
    <Album v-else></Album>
  </div>
</template>
<script>
// import { Button } from 'vant';
import NavBar from 'components/common/navbar/NavBar'
import ProfileInfo from 'components/profileCpn/ProfileInfo'
import Tabs from 'components/profileCpn/Tabs'
import Dynamic from 'components/profileCpn/Dynamic'
import Archive from 'components/profileCpn/Archive'
import Album from 'components/profileCpn/Album'

export default {
  data () {
    return {
      items: ['动态', '视频', '相簿'],
      tabsIndex: 0
    }
  },
  methods: {
    tabsChange (index) {
      this.tabsIndex = index
      console.log(index);

    }
  },
  components: {
    NavBar,
    // [Button.name]: Button,
    ProfileInfo,
    Tabs,
    Dynamic,
    Archive,
    Album
  }
}
</script>
<style lang='less' scoped>
.profile-container {
  font-family: PingFangSC-Regular;
  height: 100%;
  box-sizing: border-box;
  padding-top: 44px;
}
</style>
