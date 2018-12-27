<template>
  <div class="app">
      <v-header :headerIsShow="headerIsShow" v-on:goTop="goOnTop" v-on:navIndexEvent="getHeaderIndex"></v-header>
    <sideBar v-on:goTop="goOnTop"></sideBar>
    <router-view ref="home" v-on:scrollEvent="getScrollParam"></router-view>
  </div>
</template>

<script>
  import header from 'components/header/header.vue'
  import sideBar from 'components/sideBar/sideBar.vue'
  export default {
    name: 'App',
    data() {
        return {
            currentIndex: 0,
          headerIsShow: true
        }
    },
    methods: {
      getHeaderIndex(index) {
//          this.currentIndex = index;
          this.$refs.home._scrollElement(index)
      },
      getScrollParam(data) {
        this.headerIsShow = data;
      },
      goOnTop(data) {
        console.log('goOnTop==='+data);
        this.headerIsShow = true;
        if(data !== 6) {
          this.$refs.home._scrollTop();
        }

      }
    },
    components:{
      'v-header': header,
      sideBar
    }
  }
</script>

<style scopted lang="scss" rel="stylesheet/scss">

</style>
