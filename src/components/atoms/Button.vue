<template>
  <button
    class="Button"
    v-bind="$attrs"
    @click="emitClick"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  name: 'Button',
  inheritAttrs: false,
  props: {
    text: {
      type: String,
      required: true,
    },
  },
  methods: {
    emitClick() {
      this.$emit('click');
    },
  },
};
</script>

<style lang="scss">
    .Button {
      padding: 1rem 2rem;
      border: none;
      border-radius: .5rem;
      color: $color-primary;
      background-color: $color-secondary;
      transition: $default-transition;
      font-family: $font-base;
      font-size: 1.4rem;

      &:hover {
        cursor: pointer;
        background-color: $color-primary;
        color: $color-secondary;
      }

      &[disabled] {
        opacity: .5;
        color: $color-primary;
        background-color: $color-secondary;
      }
    }
</style>
