<template>
  <div class="archive-container">
    <div class="no-content">
      <img src="~assets/img/noContent.png" alt />
      <p>Ta还没有投过稿~</p>
      <p>
        快去发现
        <a href>新内容</a> 吧
      </p>
    </div>
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

}
</script>
<style lang='less' scoped>
.archive-container {
  .no-content {
    background-color: #fff;
    padding-top: 100px;
    padding-bottom: 20px;
    text-align: center;
    img {
      width: 80%;
    }
    p {
      font-size: 16px;
      color: #999;
      margin: 0;
    }
    a {
      color: @theme-color;
    }
  }
  .m-footer {
    margin: 10px 0;
    line-height: 1;
    font-size: 12px;
    color: #757575;
    text-align: center;
  }
}
</style>
