<template>
  <button
    class="Button"
    :class="cssClasses"
    v-bind="$attrs"
    @click="onClick"
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

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import Icon from './Icon.vue';

@Component({
  components: { Icon },
  inheritAttrs: false,
})
export default class Button extends Vue {
  @Prop({ required: true }) text!:string;

  @Prop({ default: '' }) iconName!:string;

  @Prop({ default: false }) red!:boolean;

  get cssClasses():object {
    return {
      'Button--red': this.red,
    };
  }

  onClick() {
    this.$emit('click');
  }
}
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
