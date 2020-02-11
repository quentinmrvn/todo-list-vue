<template>
  <div
    class="InputField"
    :class="cssModifier"
  >
    <label
      v-if="label || $slots.label"
      :for="internalId"
      class="InputField-label"
    >
      <slot name="label">
        {{ label }}
      </slot>
    </label>

    <input
      :id="internalId"
      :type="type"
      :class="cssClasses"
      class="InputField-input"
      :value="value"
      v-bind="$attrs"
      @input="emitInput"
      @blur="onBlur"
      @focus="onFocus"
    >
  </div>
</template>

<script>
import inputBase from '../../mixins/inputBase';

export default {
  name: 'InputField',
  mixins: [inputBase],
  inheritAttrs: false,
  props: {
    type: {
      type: String,
      default: 'text',
    },
    cssModifier: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      isFocused: false,
    };
  },
  computed: {
    cssClasses() {
      return {
        'InputField-input--focused': this.isFocused,
      };
    },
  },
  methods: {
    emitInput(event) {
      this.$emit('input', event.target.value);
    },
    onBlur() {
      this.isFocused = false;
    },
    onFocus() {
      this.isFocused = true;
    },
  },
};
</script>

<style lang="scss">
  .InputField {
    &-label {
      margin-right: 2rem;
      font-size: 1.6rem;
      color: $color-primary;
      display: block;
      margin-bottom: 1rem;
    }
    &-input {
      padding: .6rem 1rem;
      font-size: 1.4rem;
      font-family: $font-base;
      color: $color-primary;
      transition: $default-transition;
      border: none;
      border-radius: .5rem;
      box-shadow: inset 0 0 0 .1rem $color-lightgrey;
      &--focused {
        box-shadow: inset 0 0 0 .2rem $color-secondary;
      }
    }
  }
</style>
