<template>
  <div class="TaskList">
    <div class="TaskList-header">
      <h2>Liste de taches</h2>
      <Button
        class="TaskList-removeAll"
        :disabled="noTasks"
        red
        text="Supprimer toute les taches"
        icon-name="trash-outline"
        @click="removeAllTasks"
      />
    </div>
    <p
      v-if="noTasks"
      class="TaskList-none"
    >
      Il n'y a aucune tache dans votre liste
    </p>
    <Task
      v-for="task in tasks"
      :key="task.id"
      :task="task"
      @onRemoveTask="removeTask"
      @onStateChange="changeTaskState"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Task from '../molecules/Task.vue';
import Button from '../atoms/Button.vue';
import { Task as TaskInterface } from '../../interfaces/task';

export default Vue.extend({
  name: 'TaskList',
  components: { Button, Task },
  props: {
    tasks: {
      type: Array as () => TaskInterface[],
      required: true,
    },
  },
  computed: {
    noTasks():boolean {
      return this.tasks.length === 0;
    },
  },
  methods: {
    changeTaskState(completed:boolean, task:TaskInterface) {
      const taskIndex = this.tasks.indexOf(task);
      this.tasks[taskIndex].completed = completed;
    },
    removeTask(task:TaskInterface) {
      this.$emit('update:tasks', this.tasks.filter(t => t !== task));
    },
    removeAllTasks() {
      this.$emit('update:tasks', []);
    },
  },
});
</script>

<style lang="scss">
  .TaskList {
    &-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-family: $font-base;
      font-size: 2.5rem;
      color: $color-primary;
      margin-bottom: 2rem;
    }

    &-none {
      font-family: $font-base;
      font-size: 1.6rem;
      color: $color-primary;
    }
  }
</style>
