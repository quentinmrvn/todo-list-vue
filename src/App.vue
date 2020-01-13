<template>
  <div id="app" class="App">
    <Header/>
    <router-view/>
  </div>
</template>
<script>
import Header from '@/components/organisms/Header.vue';

export default {
  components: { Header },
};
</script>
<style lang="scss">
  @import '/scss/reset';
</style>
