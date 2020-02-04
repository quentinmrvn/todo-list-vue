<template>
  <div
    class="Textarea"
    :class="cssModifier"
  >
    <label
      v-if="label || $slots.label"
      :for="internalTextareaId"
      class="Textarea-label"
    >
      <slot name="label">
        {{ label }}
      </slot>
    </label>

    <textarea
      :id="internalTextareaId"
      :class="cssClasses"
      class="Textarea-input"
      v-bind="$attrs"
      @input="emitInput"
      @blur="onBlur"
      @focus="onFocus"
    />
  </div>
</template>

<script>
export default {
  name: 'Textarea',
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
    textareaId: {
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
        'Textarea-input--focused': this.isFocused,
      };
    },
    internalTextareaId() {
      return this.textareaId === '' ? this.uid : this.textareaId;
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
  .Textarea {
    display: flex;

    &-label {
      margin-right: 2rem;
      font-size: 1.6rem;
      color: $color-primary;
    }
    &-input {
      padding: .6rem 1rem;
      min-height: 14rem;
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
