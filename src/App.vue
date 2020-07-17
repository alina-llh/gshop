<template>
  <div class="outer">
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from '@/components/Footer'
import Header from '@/components/Header'
export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  mounted(){
    this.getCategoryList()
  },
  methods:{
    getCategoryList(){
      this.$store.dispatch("getCategoryList")
    }
  }
}
</script>

<style lang="less" scoped>
</style>
