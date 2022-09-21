<template>
  <div class="card-wrap">
    <header>
      <h2 class="title">{{title}}</h2>
    </header>
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'card',
  props: {
    title: String
  }
}
</script>

<style lang="scss" scoped>
.card-wrap {
  background: #fff;
  header {
    @include wh(100%, 79px);
    padding: 0 30px;
    line-height: 79px;
    box-sizing: border-box;
    .title {
      font-size: 26px;
      color: #333;
    }
  }
}
</style>
