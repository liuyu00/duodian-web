<template>
  <div>
    <label v-for="(item, index) in list" :key="index">{{item}}</label>
  </div>
</template>

<script>
export default {
  name: 'Tags',
  props: {
    list: Array
  }
}
</script>

<style lang="scss" scoped>

</style>
