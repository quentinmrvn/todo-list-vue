<template>
  <label
    class="Checkbox"
  >
    <slot>
      {{ label }}
    </slot>
    <Icon
      v-if="shouldBeChecked"
      name="checkmark"
      color="#41B882"
      width="25"
      height="25"
      class="Checkbox-icon"
    />
    <input
      type="checkbox"
      v-bind="$attrs"
      class="Checkbox-input"
      :checked="shouldBeChecked"
      @change.stop="handleChange"
    >
  </label>
</template>

<script lang="ts">
import mixins from 'vue-typed-mixins';
import checkboxBase from '../../mixins/checkboxBase';
import inputBase from '../../mixins/inputBase';
import Icon from './Icon.vue';

export default mixins(checkboxBase, inputBase).extend({
  name: 'Checkbox',
  components: { Icon },
  inheritAttrs: false,
});
</script>

<style lang="scss">
  .Checkbox {
    padding-left: 1.7rem;
    position: relative;
    font-size: 1.6rem;
    color: $color-primary;
    cursor: pointer;

    &:before {
      content: '';
      position: absolute;
      height: 1rem;
      width: 1rem;
      border: .1rem solid $color-primary;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
    }

    &-input {
      visibility: hidden;
    }

    &-icon {
      left: -5px;
      position: absolute;
      top: 60%;
      transform: translateY(-60%);
    }
  }
</style>
