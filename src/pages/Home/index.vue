<template>
  <div>
    <TypeNav></TypeNav>
    <ListContainer></ListContainer>
    <Recommend></Recommend>
    <Rank></Rank>
    <Like></Like>
    <Floor v-for="(floor, index) in CateFloor" :key="index" :floor="floor"></Floor>
    <Brand></Brand>
  </div>
</template>

<script>
import ListContainer from './ListContainer'
import Recommend from './Recommend'
import Rank from './Rank'
import Like from './Like'
import Floor from './Floor'
import Brand from './Brand'
import {mapState} from "vuex"
export default {
  name: 'Home',
  components: {
    ListContainer,
    Recommend,
    Rank,
    Like,
    Floor,
    Brand
  },
  mounted() {
    this.getFloor()
  },
  methods: {
    getFloor() {
      this.$store.dispatch('getFloor')
    }
  },
  computed: {
    ...mapState({
      CateFloor: state => state.home.CateFloor
    })
  },
}
</script>

<style lang="less" scoped>
</style>
