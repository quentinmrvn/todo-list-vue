<template>
  <div
    :id="taskId"
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
      :name="checkBoxName"
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
    taskId: {
      type: [String, Number],
      required: true,
    },
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
    checkBoxName() {
      return `done${this.taskId}`;
    },
  },
  created() {
    this.isDone = this.alreadyDone;
  },
};
</script>

<style lang="scss">
  .Task {
    padding: 1rem;
    margin-bottom: 1rem;
    font-family: $font-base;
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
