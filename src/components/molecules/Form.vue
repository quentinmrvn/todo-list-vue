<template>
  <form
    class="Form"
    @submit.prevent="onSubmit"
  >
    <slot />
  </form>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component
export default class From extends Vue {
  onSubmit() {
    this.$emit('submit');
  }
}
</script>
