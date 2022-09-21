<template>
  <div class="classify-page">
    <div class="search-wrap">
      <a href="javascript:;" class="search-bar">搜索校园超市商品</a>
    </div>
    <div class="main">
      <tab-bar
        class="left-menu"
        tab-name="categoryName"
        layout="column"
        :tabs="leftMenu"
        @change="leftNavChange"
      />
      <div class="right-main">
        <tab-bar
          class="right-menu"
          tab-name="categoryName"
          :tabs="rightMenu"
          @change="rightNavChange"
        />
        <product-list class="product-list" :list="products" />
      </div>
    </div>
  </div>
</template>

<script>
import scroll from '@/mixins/scroll'
export default {
  name: 'classify',
  mixins: [scroll],
  data () {
    return {
      leftMenu: [],
      rightMenu: [],
      products: [],
      fetchProductParams: {
        page: 1,
        page_size: 10,
        category_id: 1
      }
    }
  },
  watch: {
    fetchProductParams: {
      handler: 'fetchProductList',
      deep: true,
      immediate: true
    }
  },
  created () {
    this.fetchcategory()
  },
  scrollBottom () {
    this.fetchProductParams.page += 1
  },
  methods: {
    async fetchcategory () {
      const res = await this.$api.product.category()
      this.leftMenu = res.data
      this.rightMenu = [{
        categoryId: res.data[0].categoryId,
        categoryName: '全部'
      }].concat(res.data[0].children)
      console.log(res)
    },
    async fetchProductList () {
      const res = await this.$api.product.list(this.fetchProductParams)
      if (this.fetchProductParams.page === 1) {
        this.products = res.data
      } else {
        this.products = this.products.concat(res.data)
      }
    },
    leftNavChange (index, item) {
      this.fetchProductParams.category_id = item.categoryId
      this.fetchProductParams.page = 1
      this.rightMenu = [{
        categoryId: item.categoryId,
        categoryName: '全部'
      }].concat(item.children)
    },
    rightNavChange (index, item) {
      this.fetchProductParams.category_id = item.categoryId
      this.fetchProductParams.page = 1
    }
  }
}
</script>

<style lang="scss" scoped>
.classify-page {
  @include flex(column);
  background: #fff;
  .search-wrap {
    background: #fff;
    position: sticky;
    top: 0;
    z-index: 100;
    overflow: hidden;
    padding: 17px 30px;
    margin: 0;
  }
  .search-bar {
    @include wh(auto, 64px);
    background: #F6F6F6;
    border-radius: 64px;
    color: #D1D1D1;
    line-height: 64px;
    font-size: 24px;
    padding-left: 40px;
  }
  .main {
    @include flex(row);
    width: 100%;
    flex: 1;
    padding-bottom: 86px;
    .left-menu {
      background: #FAFAFA;
      flex-shrink: 0;
      position: fixed;
      top: 98px;
      /deep/nav {
        a {
          color: #999999;
          font-size: 24px;
          display: block;
          width: 100%;
          padding: 0;
          &.active {
            background: #fff;
            color: #333;
          }
        }
      }
    }
    .right-menu {
      height: 55px;
      line-height: 55px;
      flex-shrink: 0;
      position: fixed;
      top: 98px;
      right: 0;
      left: 178px;
      z-index: 100;
      overflow: auto;
      width: auto;
    }
    .right-main {
      width: 100%;
      margin-left: 172px;
      flex: 1;
      position: relative;
      /deep/nav {
        @include flex(row, flex-start, flex-start);
        @include border-1px(bottom, #E9E9E9);
        height: 55px;
        line-height: 55px;
        a {
          color: #999999;
          font-size: 24px;
          display: block;
          line-height: 55px;
          &.active {
            color: #333;
          }
        }
      }
    }
  }
  .product-list {
    overflow: auto;
    padding-top: 50px;
    /deep/.product-item {
      dt {
        @include wh(186px, 186px);
        img {
          @include wh(186px, 186px);
        }
      }
      dd {
        // @include wh(auto, 186px);
        height: 186px;
        flex: 1;
        overflow: hidden;
        .title {
          @include ellipsis(1);
          font-size: 28px;
          width: 100%;
        }
      }
    }
  }
}
</style>
