<template>
  <label :for="internalId">
    <slot name="label">
      {{ label }}
    </slot>
    <input
      :id="internalId"
      type="checkbox"
      v-bind="$attrs"
      :checked="shouldBeChecked"
      @change.stop="handleChange"
    >
  </label>
</template>

<script>
import checkboxBase from '../../mixins/checkboxBase';
import inputBase from '../../mixins/inputBase';

export default {
  name: 'Checkbox',
  mixins: [checkboxBase, inputBase],
  inheritAttrs: false,
};
</script>
