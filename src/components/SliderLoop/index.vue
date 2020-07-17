<template>
  <div class="swiper-container" id="mySwiper" ref="banner">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(b) in Banner" :key="b.id">
        <img :src="b.imgUrl" />
      </div>
      <!-- <div class="swiper-slide">
              <img src="./images/banner2.jpg" />
            </div>
            <div class="swiper-slide">
              <img src="./images/banner3.jpg" />
            </div>
            <div class="swiper-slide">
              <img src="./images/banner4.jpg" />
      </div>-->
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
export default {
  name: '',
  props: ['Banner'],
  watch: {
    Banner: {
      handler() {
        this.$nextTick(() => {
          new Swiper(this.$refs.banner, {
            // direction: 'vertical', // 垂直切换选项
            loop: true, // 循环模式选项

            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination'
            },

            // 如果需要前进后退按钮
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev'
            }

            // 如果需要滚动条
            // scrollbar: {
            //   el: '.swiper-scrollbar'
            // }
          })
        })
      },
      immediate: true
    }
  }
}
</script>

<style lang="less" scoped>
</style>
