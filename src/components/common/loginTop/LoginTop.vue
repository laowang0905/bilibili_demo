<template>
  <div class="login-top-container">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center">{{title}}</slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>
<style lang='less' scoped>
.login-top-container {
  width: 100%;
  height: 44px;
  background-color: #fff;
  display: flex;
  text-align: center;
  font-size: 16px;
  box-shadow: -1px 0 2px #eee;
  .left,
  .right {
    display: flex;
    align-items: center;
    width: 100px;
  }
  .center {
    position: relative;
    flex: 1;
    line-height: 44px;
    text-align: center;
  }
}
</style>
