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
      v-model="taskState.completed"
      value="completed"
      :name="checkBoxName"
      class="Task-checkbox"
    >
      Terminée
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

<script lang="ts">
import Vue from 'vue';
import {
  Component, Prop, Watch, Emit,
} from 'vue-property-decorator';

import { Task as TaskInterface } from '../../interfaces/task';
import Checkbox from '../atoms/Checkbox.vue';
import Button from '../atoms/Button.vue';

@Component({
  components: { Button, Checkbox },
})

export default class Task extends Vue {
  taskState = {
    completed: false,
  };

  @Prop({ required: true }) task: TaskInterface | undefined

  created() {
    this.taskState.completed = this.task?.completed!;
  }

  get cssClasses():object {
    return {
      'Task--completed': this.taskState.completed,
    };
  }

  get checkBoxName():string {
    return `completed${this.task?.id}`;
  }

  @Emit('onRemoveTask')
  handleRemoveTask():TaskInterface {
    return this.task!;
  }

  @Watch('taskState', { deep: true })
  onStateChange(newState:TaskInterface) {
    this.$emit('onStateChange', newState.completed, this.task);
  }
}

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
