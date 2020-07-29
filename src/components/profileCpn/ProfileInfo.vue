<template>
  <div class="profile-info">
    <div class="banner"></div>
    <div class="top clearfix">
      <div class="avator">
        <!-- <img src="~assets/img/avator_big.jpg" /> -->
        <img
          :src="$store.state.userInfo.user_img?$store.state.userInfo.user_img:require('../../assets/img/avator_big.jpg')"
          class="bfs-img avatar"
        />
      </div>
      <div class="relation">
        <div class="count">
          <div class="fans">
            <span class="number">1</span>
            <span>粉丝</span>
          </div>
          <div class="split"></div>
          <div class="follow">
            <span class="number">1</span>
            <span>关注</span>
          </div>
          <div class="split"></div>
          <div class="likes">
            <span class="number">1</span>
            <span>获赞</span>
          </div>
        </div>
        <div class="edit">
          <van-button class="edit-btn" @click="$router.push('/edit')">编辑资料</van-button>
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="base">
        <span class="name">{{$store.state.userInfo.name}}</span>
        <span class="gender"></span>
        <span class="level">lv4</span>
      </div>
      <div class="desc">
        <span class="content" :class="{spread: spread}">这个人很神秘，什么都没有写</span>
        <span class="spread-btn" @click="spread=!spread">{{spread?"收起":"展开"}}</span>
      </div>
      <div class="tags" v-if="spread">
        <span>uid: {{$store.state.userInfo.id}}</span>
      </div>
    </div>
  </div>
</template>
<script>
import { Button } from 'vant';
export default {
  data () {
    return {
      spread: false
    }
  },
  components: {
    [Button.name]: Button
  }
}
</script>
<style lang='less' scoped>
.profile-info {
  font-family: PingFangSC-Regular;
  background-color: #fff;
  padding-bottom: 10px;
  .banner {
    width: 100%;
    height: 90px;
    background: url('~assets/img/bg.png');
    background-size: cover;
    background-position: center center;
  }
  .top {
    position: relative;
    padding: 0 12px;
    .avator {
      position: absolute;
      top: -5px;
      float: left;
      img {
        width: 84px;
        border-radius: 50%;
        vertical-align: middle;
      }
    }
    .relation {
      float: right;
      margin-top: 12px;
      .count {
        display: flex;
        align-items: center;
        .split {
          width: 1px;
          background-color: #e7e7e7;
          height: 20px;
        }
        .fans,
        .follow,
        .likes {
          text-align: center;
          font-size: 12px;
          display: flex;
          flex-direction: column;
          margin: 0 20px;
          color: #999;
          .number {
            color: #000;
            margin-bottom: 5px;
          }
        }
      }
      .edit {
        margin-top: 15px;
        .edit-btn {
          width: 100%;
          height: 30px;
          color: @theme-color;
          border-radius: 5px;
          border: 1px solid @theme-color;
        }
      }
    }
  }
  .bottom {
    padding: 0 12px;
    .base {
      .name {
        font-size: 18px;
        color: #212121;
        max-width: 200px;
        .no-wrap;
      }
      .level {
        background-color: #ffb37c;
        color: #fff;
        font-size: 12px;
        text-align: center;
        letter-spacing: 2px;
        margin-left: 8px;
        vertical-align: middle;
        position: relative;
        bottom: 2px;
        display: inline-block;
        transform: scale(0.8);
      }
    }
    .desc {
      font-size: 13px;
      color: #999;
      margin-top: 8px;
      display: flex;
      justify-content: space-between;
      .content {
        .no-wrap;
        max-width: 300px;
        &.spread {
          white-space: normal;
          word-break: break-all;
        }
      }
      .spread-btn {
        color: #1389bf;
      }
    }
    .tags {
      margin-top: 5px;
      font-size: 0;
      span {
        font-size: 14px;
        background-color: #f4f4f4;
        color: #505050;
        transform: scale(0.71);
        transform-origin: left;
        display: inline-block;
      }
    }
  }
}
</style>
