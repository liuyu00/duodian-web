<template>
  <div class="banner">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide
        v-for="(item, index) in list"
        :key="index"
      >
        <img :src="item" />
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'banner',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.banner {
  img {
    @include wh(100%, auto);
  }
  /deep/.swiper-pagination-bullet {
    width: 16px;
    height: 16px;
    // @include wh(16px, 16px);
  }
  /deep/.swiper-pagination-bullet-active {
    background: $color-primary;
  }
}
</style>
