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
import { Component } from 'vue-property-decorator';
import Header from '@/components/organisms/Header.vue';

@Component({
  components: { Header },
})

export default class App extends Vue {}
</script>
<style lang="scss">
  @import '/scss/reset';
  .Container {
    padding: 1rem;
  }
</style>
