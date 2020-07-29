<template>
  <div class="tabs">
    <span v-for="(item, index) in items" :key="index" :class="{active: currentIndex==index}" @click="itemClick(index)">{{item}}</span>
  </div>
</template>
<script>
export default {
  props: {
    items: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      currentIndex: 0
    }
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index
      this.$emit("tabsChange", index)
    }
  },
}
</script>
<style lang='less' scoped>
.tabs {
  background-color: #fff;
  // font-size: 0;
  padding-left: 12px;
  height: 40px;
  color: #757575;
  margin: 2px 0;
  span {
    display: inline-block;
    line-height: 40px;
    margin-right: 30px;
    font-size: 13px;
    &.active {
      color: @theme-color;
    }
  }
}
</style>
