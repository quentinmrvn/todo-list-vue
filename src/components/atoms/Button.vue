<template>
  <button
    class="Button"
    :class="cssClasses"
    v-bind="$attrs"
    @click="emitClick"
  >
    {{ text }}

    <Icon
      v-if="iconName"
      :name="iconName"
      height="20"
      width="20"
      class="Button-icon"
    />
  </button>
</template>

<script>
import Icon from './Icon.vue';

export default {
  name: 'Button',
  components: { Icon },
  inheritAttrs: false,
  props: {
    text: {
      type: String,
      required: true,
    },
    iconName: {
      type: String,
      default: '',
    },
    red: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    cssClasses() {
      return {
        'Button--red': this.red,
      };
    },
  },
  methods: {
    emitClick() {
      this.$emit('click');
    },
  },
};
</script>

<style lang="scss">
    .Button {
      $el: &;

      display: flex;
      align-items: center;
      padding: 1rem 2rem;
      height: fit-content;
      border: none;
      border-radius: .5rem;
      color: $color-primary;
      background-color: $color-secondary;
      transition: $default-transition;
      font-family: $font-base;
      font-size: 1.4rem;

      &--red {
        background-color: $color-red;
        color: white;
        #{$el}-icon {
          svg {
            fill: white;
          }
        }
      }

      &:hover {
        cursor: pointer;


        #{$el}-icon {
          transform: rotate(20deg);
        }
      }

      &[disabled] {
        opacity: .5;
        pointer-events: none;
      }

      &-icon {
        display: flex;
        margin-left: 1rem;
        transition: $default-transition;

        svg {
          fill: $color-primary;
        }
      }
    }
</style>
