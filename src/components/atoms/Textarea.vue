<template>
  <div
    class="Textarea"
    :class="cssModifier"
  >
    <label
      v-if="label || $slots.label"
      :for="uid"
      class="Textarea-label"
    >
      <slot name="label">
        {{ label }}
      </slot>
    </label>

    <textarea
      :id="uid"
      :class="cssClasses"
      class="Textarea-input"
      :value="value"
      v-bind="$attrs"
      @input="emitInput"
      @blur="onBlur"
      @focus="onFocus"
    />
  </div>
</template>

<script lang="ts">
import mixins from 'vue-typed-mixins';

import inputBase from '../../mixins/inputBase';

export default mixins(inputBase).extend({
  name: 'Textarea',
  inheritAttrs: false,
  props: {
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
    cssClasses():object {
      return {
        'Textarea-input--focused': this.isFocused,
      };
    },
  },
  methods: {
    emitInput(event:Event) {
      this.$emit('input', (event.target as HTMLTextAreaElement).value);
    },
    onBlur() {
      this.isFocused = false;
    },
    onFocus() {
      this.isFocused = true;
    },
  },
});
</script>

<style lang="scss">
  .Textarea {

    &-label {
      margin-right: 2rem;
      font-size: 1.6rem;
      color: $color-primary;
      display: block;
      margin-bottom: 1rem;
    }
    &-input {
      padding: .6rem 1rem;
      min-height: 7rem;
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
