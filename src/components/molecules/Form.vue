<template>
  <form
    class="Form"
    @submit.prevent="emitSubmitEvent"
  >
    <slot />
  </form>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Form',
  methods: {
    emitSubmitEvent() {
      this.$emit('submit');
    },
  },
});
</script>
