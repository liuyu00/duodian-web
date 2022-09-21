<template>
  <div class="product-list">
    <router-link
      v-for="(item, index) in list"
      :key="index"
      :to="`/detail/${item.id}`"
      tag="dl"
      class="product-item"
    >
      <dt><img :src="item.img" /></dt>
      <dd>
        <header>
          <h2 class="title">{{item.name}}</h2>
          <p>累计销售{{1239012}}份 / 以拼{{12318293}}份</p>
          <tags :list="['自营', '京东']" />
        </header>
        <footer>
          <p>
            <span class="price">¥ <b>{{item.price | formatPrice}}</b></span>
            <s>¥ {{item.price | formatPrice}}</s>
          </p>
        </footer>
      </dd>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'product-list',
  props: {
    list: Array
  },
  filters: {
    formatPrice (price) {
      return price / 100
    },
    fromatCount () {}
  }
}
</script>

<style lang="scss" scoped>
.product-list {
  .product-item {
    @include flex(row);
    @include border-1px(bottom, $color-border);
    padding: 30px;
    font-size: 24px;
    background: #fff;
    dt {
      @include wh(240px, 240px);
      margin-right: 30px;
      img {
        @include wh(240px, 240px)
      }
    }
    dd {
      @include flex(column, flex-start, space-between);
      flex: 1;
      height: 240px;
      header {
        .title {
          @include ellipsis(2);
          color: #111111;
          font-size: 32px;
          line-height: 1.5;
        }
        p {
          color: #999999;
        }
      }
      footer {
        p {
          .price {
            color: $color-primary;
            b {
              font-size: 36px;
            }
          }
        }
      }
    }
  }
}
</style>
