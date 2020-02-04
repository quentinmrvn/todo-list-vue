<template>
  <form
    class="Form"
    @submit.prevent="emitSubmitEvent"
  >
    <slot />
  </form>
</template>

<script>
export default {
  name: 'Form',
  methods: {
    emitSubmitEvent() {
      this.$emit('submit');
    },
  },
};
</script>
