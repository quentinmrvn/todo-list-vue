<template>
  <div id="app" class="App">
    <Header/>
    <router-view/>
  </div>
</template>
<script>
import Header from '@/components/header/Header.vue';

export default {
  components: { Header },
};
</script>
