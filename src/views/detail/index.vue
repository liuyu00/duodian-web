<template>
  <div>
    <banner :list="detailInfo.images" />
    <div class="detail-info">
      <header>
        <span class="price">¥ <b>{{detailInfo.price / 100}}</b></span>
        <p>累计销售{{1239012}}份</p>
      </header>
    </div>
    <card title="购买记录">
      dskasklda
    </card>
    <card title="商品评价">
      dskasklda
    </card>
    <card title="猜你喜欢">
      dskasklda
    </card>
    <card title="商品详情">
      <div class="detail" v-html="detailInfo.detail"></div>
    </card>
  </div>
</template>

<script>
import Banner from './components/Banner.vue'

export default {
  name: 'detail',
  data () {
    return {
      detailInfo: {}
    }
  },
  components: {
    Banner
  },
  created () {
    this.fetchProductDetail()
  },
  methods: {
    async fetchProductDetail () {
      const id = this.$route.params.id
      const res = await this.$api.product.detail(id)
      this.detailInfo = res.data
      console.log(res)
    }
  }
}
</script>

<style lang="scss" scoped>
.detail {
  /deep/img {
    display: block;
    width: 100%;
  }
}
</style>
