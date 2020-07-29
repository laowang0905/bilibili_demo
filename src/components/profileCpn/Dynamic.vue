<template>
  <div class="dynamic-container">
    <ul class="dynamic-list">
      <li class="dynamic-item">
        <div class="dynamic-item-head">
          <div class="avator-container">
            <img :src="$store.state.userInfo.user_img" alt class="avator" />
          </div>
          <div class="nickname-container">
            <span class="nickname">{{$store.state.userInfo.name}}</span>
            <span class="posttime">09-09</span>
          </div>
        </div>
        <div class="dynamic-item-body">
          <div
            class="content"
            :class="{extend: !extend}"
          >如果有一天我消失了 你ddddddddddddddddddddddddddddddddddd会发现吗如果有一天我消失了 你会发现吗如果有一天我消失了 你会发现吗如果有一天我消失了 你会发现吗如果有一天我消失了 你会发现吗如果有一天我消失了 你会发现吗如果有一天我消失了 你会发现吗如果有一天我消失了 你会发现吗如果有一天我消失了 你会发现吗如果有一天我消失了 你会发现吗如果有一天我消失了 你会发现吗如果有一天我消失了 你会发现吗如果有一天我消失了 你会发现吗如果有一天我消失了 你会发现吗如果有一天我消失了 你会发现吗如果有一天我消失了 你会发现吗如果有一天我消失了 你会发现吗如果有一天我消失了 你会发现吗如果有一天我消失了 你会发现吗如果有一天我消失了 你会发现吗如果有一天我消失了 你会发现吗如果有一天我消失了 你会发现吗如果有一天我消失了 你会发现吗如果有一天我消失了 你会发现吗如果有一天我消失了 你会发现吗如果有一天我消失了 你会发现吗如果有一天我消失了 你会发现吗如果有一天我消失了 你会发现吗如果有一天我消失了 你会发现吗如果有一天我消失了 你会发现吗如果有一天我消失了 你会发现吗如果有一天我消失了 你会发现吗如果有一天我消失了 你会发现吗如果有一天我消失了 你会发现吗如果有一天我消失了 你会发现吗如果有一天我消失了 你会发现吗如果有一天我消失了 你会发现吗如果有一天我消失了 你会发现吗如果有一天我消失了 你会发现吗如果有一天我消失了 你会发现吗如果有一天我消失了 你会发现吗如果有一天我消失了 你会发现吗如果有一天我消失了 你会发现吗如果有一天我消失了 你会发现吗如果有一天我消失了 你会发现吗如果有一天我消失了 你会发现吗如果有一天我消失了 你会发现吗如果有一天我消失了 你会发现吗如果有一天我消失了 你会发现吗如果有一天我消失了 你会发现吗如果有一天我消失了 你会发现吗如果有一天我消失了 你会发现吗如果有一天我消失了 你会发现吗如果有一天我消失了 你会发现吗如果有一天我消失了 你会发现吗如果有一天我消失了 你会发现吗如果有一天我消失了 你会发现吗如果有一天我消失了 你会发现吗如果有一天我消失了 你会发现吗如果有一天我消失了 你会发现吗如果有一天我消失了 你会发现吗如果有一天我消失了 你会发现吗如果有一天我消失了 你会发现吗如果有一天我消失了 你会发现吗如果有一天我消失了 你会发现吗如果有一天我消失了 你会发现吗如果有一天我消失了 你会发现吗如果有一天我消失了 你会发现吗</div>
          <span @click="extend = !extend">{{extend?"收起":"展开"}}</span>
          <div class="imgs">
            <img src="~assets/img/001.webp" alt />
          </div>
        </div>
        <div class="footer">
          <span class="share">
            <img src="~assets/img/share.png" alt /> 转发
          </span>
          <span class="comments">
            <img src="~assets/img/comments.png" alt />评论
          </span>
          <span class="likes">
            <img src="~assets/img/likes.png" alt />赞
          </span>
        </div>
      </li>
    </ul>
    <div class="end">到达动态尽头惹~</div>
    <div class="m-footer">
      <p>信息网络传播视听节目许可证：0910417</p>
      <p>网络文化经营许可证 沪网文【2019】3804-274号</p>
      <p>广播电视节目制作经营许可证：（沪）字第01248号</p>
      <p>增值电信业务经营许可证 沪B2-20100043</p>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      extend: false
    }
  },
}
</script>
<style lang='less' scoped>
.dynamic-container {
  .dynamic-list {
    background-color: #fff;
    padding: 12px;
    .dynamic-item {
      .dynamic-item-head {
        font-size: 0;
        display: flex;
        align-items: center;
        .avator-container {
          .avator {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            overflow: hidden;
            vertical-align: middle;
          }
        }
        .nickname-container {
          display: flex;
          margin-left: 10px;
          flex-direction: column;
          .nickname {
            font-size: 15px;
          }
          .posttime {
            margin-top: 5px;
            font-size: 12px;
            color: #999;
          }
        }
      }
      .dynamic-item-body {
        margin: 20px 0;
        font-size: 16px;
        .content {
          line-height: 1.4;
          word-break: break-all;
          &.extend {
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 4;
            overflow: hidden;
          }
        }
        span {
          color: #5090cc;
          margin: 10px 0;
          display: inline-block;
        }
        .imgs {
          img {
            width: 40%;
            border-radius: 4px;
          }
        }
      }
      .footer {
        display: flex;
        font-size: 13px;
        img {
          width: 22px;
          vertical-align: center;
          margin-right: 5px;
        }
        span {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    }
  }
  .end,
  .m-footer {
    font-size: 13px;
    line-height: 40px;
    color: #757575;
    text-align: center;
  }
  .m-footer {
    margin: 10px 0;
    line-height: 1;
    font-size: 12px;
  }
}
</style>
