<template>
  <div>
    Search
    <br />
    query:{{keyword}} params:{{keyword1}}
  </div>
</template>

<script>
export default {
  name: 'Search',
  props: ['keyword', 'keyword1']
}
</script>


<style lang="less" scoped>
</style>