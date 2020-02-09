<template>
  <div
    class="Task"
    :class="cssClasses"
  >
    <h2 class="Task-title">
      {{ title }}
    </h2>
    <p class="Task-description">
      {{ description }}
    </p>
    <Checkbox
      v-model="isDone"
      value="done"
      class="Task-checkbox"
    >
      Done
    </Checkbox>
  </div>
</template>

<script>
import Checkbox from '../atoms/Checkbox.vue';

export default {
  name: 'Task',
  components: { Checkbox },
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    alreadyDone: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isDone: false,
    };
  },
  computed: {
    cssClasses() {
      return {
        'Task--done': this.isDone,
      };
    },
  },
  created() {
    this.isDone = this.alreadyDone;
  },
};
</script>

<style lang="scss">
  .Task {
    font-family: $font-base;
    padding: 1rem;
    transition: $default-transition;
    background-color: $color-lightred;
    &--done {
      background-color: $color-background;
    }

    &-title {
      margin-bottom: .5rem;
      color: $color-primary;
      font-size: 2rem;
    }

    &-description {
      color: $color-primary;
      font-size: 1.6rem;
      margin-bottom: 1rem;
    }
  }
</style>
