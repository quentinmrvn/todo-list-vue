<template>
  <div
    :id="task.id"
    class="Task"
    :class="cssClasses"
  >
    <h2 class="Task-title">
      {{ task.title }}
    </h2>
    <p
      v-if="task.description"
      class="Task-description"
    >
      {{ task.description }}
    </p>
    <Checkbox
      v-model="state.completed"
      value="completed"
      :name="checkBoxName"
      class="Task-checkbox"
    >
      Done
    </Checkbox>
    <Button
      red
      class="Task-remove"
      text="Supprimer la tache"
      icon-name="trash-outline"
      @click="handleRemoveTask"
    />
  </div>
</template>

<script>
import Checkbox from '../atoms/Checkbox.vue';
import Button from '../atoms/Button.vue';

export default {
  name: 'Task',
  components: { Button, Checkbox },
  props: {
    task: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      state: {
        completed: false,
      },
    };
  },
  computed: {
    cssClasses() {
      return {
        'Task--completed': this.state.completed,
      };
    },
    checkBoxName() {
      return `completed${this.task.id}`;
    },
  },
  watch: {
    state: {
      handler(newState) {
        this.$emit('onStateChange', newState.completed, this.task);
      },
      deep: true,
    },
  },
  created() {
    this.state.completed = this.task.completed;
  },
  methods: {
    handleRemoveTask() {
      this.$emit('onRemoveTask', this.task);
    },
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
    &--completed {
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

    &-remove {
      margin-top: 1rem;
    }
  }
</style>
