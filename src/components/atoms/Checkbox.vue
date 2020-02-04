<template>
  <label :for="checkboxInternalId">
    <slot name="label">
      {{ label }}
    </slot>
    <input
      :id="checkboxInternalId"
      type="checkbox"
      v-bind="$attrs"
      @change.stop="handleChange"
    >
  </label>
</template>

<script>
import checkboxBase from '../../mixins/checkboxBase';

export default {
  name: 'Checkbox',
  mixins: [checkboxBase],
  inheritAttrs: false,
};
</script>
