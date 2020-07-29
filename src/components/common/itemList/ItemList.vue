<template>
  <div class="itemlist-container">
    <Item v-for="(item, index) in itemList" :key="index" :item="item"></Item>
  </div>
</template>
<script>
import Item from './Item'
export default {
  data() {
    return {
      offsetTop: 0
    }
  },
  props: {
    itemList: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    Item
  }
}
</script>
<style lang='less' scoped>
  .itemlist-container {
    padding-top: 10px;
    background-color: #fff;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
</style>
