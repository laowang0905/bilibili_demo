<template>
  <div class="home-container">
    <van-tabs v-model="active" sticky lazy-render @rendered="rendered" swipeable ref="aaa">
      <van-tab :title="item.title" v-for="item in categories" :key="item.id" >
        <van-list
          v-model="item.loading"
          :finished="item.finished"
          finished-text="没有更多了"
          @load="onLoad(item)"
          :immediate-check="false"
        >
          <ItemList :itemList="item.list" ref="itemlist"></ItemList>
        </van-list>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
import { Tab, Tabs, List } from 'vant'
import { reqCategories, reqDetail } from 'network'
import ItemList from 'components/common/itemList/ItemList'
export default {
  data () {
    return {
      categories: [],
      active: 0
    }
  },
  components: {
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
    [List.name]: List,
    ItemList
  },
  methods: {
    async getCategories () {
      const { data } = await reqCategories()
      this.categories = this.formatCate(data)
    },
    // 格式化数据
    formatCate (data) {
      return data.map((item, index) => {
        item.list = []
        item.finished = false
        item.loading = false
        item.page = 0
        item.pagesize = 10
        return item
      })
    },
    async getDetail () {
      const { data } = await reqDetail(this.currentTab._id, {
        page: this.currentTab.page,
        pagesize: this.currentTab.pagesize
      })
      if (data.length < 10) {
        this.currentTab.finished = true
      }
      this.currentTab.list = this.currentTab.list.concat(data)
      this.currentTab.loading = false
    },
    rendered () {
      this.getDetail()
    },
    // 加载更多
    onLoad (item) {
      item.page++
      this.getDetail()
    }
  },
  created () {
    this.getCategories()
  },
  computed: {
    currentTab () {
      return this.categories[this.active]
    }
  },
}
</script>
<style lang='less' scoped>
.home-container {
  box-sizing: border-box;
  height: 100%;
  padding-top: 44px;
}
</style>
<style lang="less">
.van-sticky--fixed {
  top: 44px !important;
}
// .van-tab__pane-wrapper {
//   height: 100%!important;
// }
</style>
