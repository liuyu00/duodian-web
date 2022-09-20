<template>
  <header class="header-bar">
    <a href="javascript:;">
      <i class="iconfont icon-dizhiguanli"></i>
      <output>送至：北京八维研修学院</output>
      <i class="iconfont icon-jiantouyou"></i>
    </a>
    <a href="javascript:;">
      <i class="iconfont icon-sousuo"></i>
    </a>
  </header>
</template>

<script>
export default {
  name: 'header-bar'
}
</script>

<style lang="scss" scoped>
.header-bar {
  @include wh(100%, 98px);
  @include flex(row, center, space-between);
  background: #fff;
  padding: 0 20px;
  box-sizing: border-box;
  a {
    color: $color-text-grey;
    font-size: 24px;
    output {
      padding: 0 10px;
    }
    i {
      font-size: 28px;
    }
  }
}
</style>
