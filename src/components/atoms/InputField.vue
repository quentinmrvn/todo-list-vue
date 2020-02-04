<template>
  <div
    class="InputField"
    :class="cssModifier"
  >
    <label
      v-if="label || $slots.label"
      :for="internalInputId"
      class="InputField-label"
    >
      <slot name="label">
        {{ label }}
      </slot>
    </label>

    <input
      :id="internalInputId"
      :type="type"
      :class="cssClasses"
      class="InputField-input"
      v-bind="$attrs"
      @input="emitInput"
      @blur="onBlur"
      @focus="onFocus"
    >
  </div>
</template>

<script>
export default {
  name: 'InputField',
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      default: '',
    },
    value: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: 'text',
    },
    cssModifier: {
      type: String,
      default: '',
    },
    inputId: {
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
    internalInputId() {
      return this.inputId === '' ? this.uid : this.inputId;
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
