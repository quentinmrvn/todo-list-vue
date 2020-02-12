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
<script lang="ts">
import Vue from 'vue';
import Header from '@/components/organisms/Header.vue';

export default Vue.extend({
  components: { Header },
});
</script>
<style lang="scss">
  @import '/scss/reset';
  .Container {
    padding: 1rem;
  }
</style>
