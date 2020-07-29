<template>
  <div class="edit-container">
    <div class="m-space-detail">
      <table class="info-card">
        <tr>
          <td>头像</td>
          <td>
            <van-uploader :after-read="afterRead" />
            <img
              :src="userInfo.user_img?userInfo.user_img:require('../assets/img/avator.jpg')"
              class="bfs-img avatar"
            />
          </td>
        </tr>
        <tr>
          <td>昵称</td>
          <td>{{userInfo.name}}</td>
        </tr>
        <tr>
          <td>UID</td>
          <td>{{userInfo.id}}</td>
        </tr>
        <tr>
          <td>性别</td>
          <td>{{userInfo.gender?userInfo.gender:'保密'}}</td>
        </tr>
        <tr>
          <td>出生日期</td>
          <td></td>
        </tr>
        <tr>
          <td>个性签名</td>
          <td>{{userInfo.desc}}</td>
        </tr>
      </table>
      <div class="op-card">
        <a class="item">退出登录</a>
        <a class="item" @click="$router.push('/profile')">返回空间</a>
      </div>
    </div>
  </div>
</template>
<script>
import { Uploader } from 'vant'
import { reqUpload, reqUpdate } from 'network'

export default {
  data () {
    return {

    }
  },
  computed: {
    userInfo () {
      return this.$store.state.userInfo
    }
  },
  components: {
    [Uploader.name]: Uploader
  },
  methods: {
    async update () {
      const { data } = await reqUpdate(localStorage.id, this.userInfo)
      console.log(data);

    },
    async afterRead (file) {
      const formData = new FormData()
      formData.append('file', file.file)
      const { data } = await reqUpload(formData)
      this.userInfo.user_img = data.url
      this.update()
    }
  }
}
</script>
<style lang='less' scoped>
.edit-container {
  padding-top: 44px;
  font-size: 15px;
  .info-card {
    background-color: #fff;
    margin: 10px 0 20px 0;
    width: 100%;
    color: #505050;
    border-collapse: collapse;
    tr {
      border-bottom: 1px solid #eee;
      td:nth-child(1) {
        padding: 10px 0 10px 12px;
      }
      td:nth-child(2) {
        text-align: right;
        padding: 10px 12px 10px 0;
        color: #999;
      }
      td {
        .avatar {
          width: 46px;
          height: 46px;
          border-radius: 50%;
          overflow: hidden;
          vertical-align: middle;
        }
      }
    }
  }
  .op-card {
    .item {
      display: block;
      background-color: #fff;
      text-align: center;
      padding: 10px 0;
      font-size: 14px;
      color: #505050;
    }
    .item:nth-child(2) {
      margin-top: 1px;
    }
  }
}
</style>
<style lang="less">
.van-uploader__upload {
  width: 50px;
  height: 50px;
  position: relative;
  right: -48px;
  top: 8px;
  opacity: 0;
}
</style>
