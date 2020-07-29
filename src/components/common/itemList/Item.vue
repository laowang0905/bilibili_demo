<template>
  <div class="item-container">
    <div class="card">
      <img :src="item.img" onload class="pic" />
      <!-- <div class="count">
        <span>
          <i class="iconfont icon_shipin_bofangshu"></i> 29.9万
        </span>
        <span>
          <i class="iconfont icon_shipin_danmushu"></i> 1000
        </span>
      </div> -->
    </div>
    <p class="title">{{item.id}}</p>
  </div>
</template>
<script>
export default {
  props: {
    item: {
      type: Object,
      default () {
        return {}
      }
    }
  }
}
</script>
<style lang='less' scoped>
.item-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 0;
  width: 47%;
  border: 1px solid #ccc;
  border-radius: 3px;
  margin-bottom: 10px;
  .card {
    img {
      width: 100%;
      min-height: 114px;
    }
  }
  .title {
    font-size: 12px;
    color: #212121;
    .no-wrap;
    margin-left: 10px;
  }
}
</style>
