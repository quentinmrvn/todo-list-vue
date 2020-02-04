<template>
  <div
    id="app"
    class="App"
  >
    <Header />
    <div class="Container">
      <router-view />
    </div>
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
  .Container {
    padding: 1rem;
  }
</style>
