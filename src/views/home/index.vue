<template>
  <div>
    <header-bar />
    <banner :list="banner" />
    <quick-menu :list="mall_nav" />
    <div ref="content">
      <tab-bar
        class="tab"
        ref="tabbar"
        :tabs="hot_nav"
        @change="navchange"
      />
      <product-list :list="products" />
    </div>
    <!-- <banner />
    <tody />
    <menu />
    <product-list /> -->
  </div>
</template>

<script>
import HeaderBar from './components/HeaderBar.vue'
import Banner from './components/Banner.vue'
import QuickMenu from './components/QuickMenu.vue'
import scroll from '@/mixins/scroll'
export default {
  name: 'home',
  mixins: [scroll],
  data () {
    return {
      banner: [],
      mall_nav: [],
      hot_nav: [],
      products: [],
      fetchProductParams: {
        page: 1,
        page_size: 10,
        classid: 1
      }
    }
  },
  components: {
    HeaderBar,
    Banner,
    QuickMenu
  },
  watch: {
    fetchProductParams: {
      handler: 'fetchProductList',
      deep: true,
      immediate: true
    }
  },
  created () {
    this.initHomeData()
  },
  scrollBottom () {
    this.fetchProductParams.page += 1
  },
  methods: {
    initHomeData () {
      this.$api.home.base().then(res => {
        this.banner = res.data.data.banner
        this.mall_nav = res.data.data.mall_nav
        this.hot_nav = res.data.data.hot_nav
        console.log(res)
      })
    },
    async fetchProductList () {
      const res = await this.$api.product.list(this.fetchProductParams)
      if (this.fetchProductParams.page === 1) {
        this.products = res.data.data
      } else {
        this.products = this.products.concat(res.data.data)
      }
    },
    navchange (index, item) {
      this.fetchProductParams.classid = item.id
      this.fetchProductParams.page = 1
      const top = this.$refs.content.offsetTop
      const scrollTop = document.querySelector('html').scrollTop
      if (scrollTop > top) {
        window.scrollTo(0, this.$refs.content.offsetTop)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.tab {
  position: sticky;
  top: 0;
  z-index: 10;
}
</style>
