<template>
  <div
    class="InputField"
    :class="cssModifier"
  >
    <label
      v-if="label || $slots.label"
      :for="uid"
      class="InputField-label"
    >
      <slot name="label">
        {{ label }}
      </slot>
    </label>

    <input
      :id="uid"
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

<script lang="ts">
import { Component, Prop, Emit } from 'vue-property-decorator';
import mixins from 'vue-typed-mixins';
import inputBase from '../../mixins/inputBase';

@Component({
  inheritAttrs: false,
})
export default class InputField extends mixins(inputBase) {
  @Prop({ default: 'text' }) type!: string;

  @Prop({ default: '' }) cssModifier!: string;

  isFocused= false;

  get cssClasses():object {
    return {
      'InputField-input--focused': this.isFocused,
    };
  }

  @Emit('input')
  // eslint-disable-next-line class-methods-use-this
  emitInput(event:Event) {
    return (event.target as HTMLInputElement).value;
  }

  onBlur() {
    this.isFocused = false;
  }

  onFocus() {
    this.isFocused = true;
  }
}
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
