<template>
  <div class="page">
    <keep-alive>
    <router-view></router-view>
    </keep-alive>
    <nav class="footer-nav">
      <router-link
        v-for="(item, index) in tabs"
        :key="index"
        :to="item.path"
        active-class="active"
      >
        <img :src="item.icon" class="icon" />
        <img :src="item.select_icon" class="select-icon" />
        <span>{{item.text}}</span>
      </router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'tab-main',
  data () {
    return {
      tabs: [
        {
          path: '/home',
          text: '首页',
          icon: require('@/assets/image/home.png'),
          select_icon: require('@/assets/image/home-select.png')
        },
        {
          path: '/classify',
          text: '分类',
          icon: require('@/assets/image/classify.png'),
          select_icon: require('@/assets/image/classify-select.png')
        },
        {
          path: '/car',
          text: '购物车',
          icon: require('@/assets/image/car.png'),
          select_icon: require('@/assets/image/car-select.png')
        },
        {
          path: '/mine',
          text: '我的',
          icon: require('@/assets/image/mine.png'),
          select_icon: require('@/assets/image/mine-select.png')
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.page {
  min-height: 100vh;
  background: #F8F8F8;
}
.footer-nav {
  @include flex(row, center, center);
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  background: #fff;
  a {
    @include flex(column, center, center);
    flex: 1;
    font-size: 14px;
    padding-bottom: 3px;
    padding-top: 7px;
    color: $color-grey;
    .icon {
      @include wh(52px, 52px);
    }
    .select-icon {
      display: none;
    }
    &.active {
      color: $color-primary;
      .icon {
        @include wh(52px, 52px);
        display: none;
      }
      .select-icon {
        @include wh(52px, 52px);
        display: block;
      }
    }
  }
}
</style>
