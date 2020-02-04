<template>
  <eva-icon
    :name="name"
    :animation="animation"
    :fill="color"
    :height="height"
    :width="height"
  />
</template>

<script>
// Go on https://antonreshetov.github.io/vue-eva-icons/ to see all availables icons
export default {
  name: 'Icon',
  props: {
    name: {
      type: String,
      required: true,
    },
    animation: {
      type: String,
      default: '',
      // zoom, pulse, shake, flip
    },
    color: {
      type: String,
      default: '#000',
      // HEX or color name
    },
    height: {
      type: String,
      default: '15',
    },
    width: {
      type: String,
      default: '15',
    },
  },
};
</script>
