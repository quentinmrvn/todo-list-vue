<template>
  <div class="InputField" :class="cssModifier">
    <label
      :for="name"
      class="InputField-label"
      v-if="label"
    >
      {{ label }}
    </label>

    <input @input="emitInput"
           @blur="onBlur"
           @focus="onFocus"
           :type="type"
           :placeholder="placeholder"
           :id="name"
           :name="name"
           :class="cssClasses"
           class="InputField-input"
    />
  </div>
</template>

<script>
export default {
  name: 'InputField',
  data() {
    return {
      isFocused: false,
    };
  },
  props: {
    label: {
      type: String,
      default: '',
    },
    value: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'text',
    },
    cssModifier: {
      type: String,
      default: '',
    },
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
