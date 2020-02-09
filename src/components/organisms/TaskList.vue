<template>
  <div class="TaskList">
    <Button
      v-if="isRemoveAllButton"
      red
      class="TaskList-removeAll"
      text="Supprimer toute les taches"
      icon-name="trash-outline"
      @click="removeAllTasks"
    />
    <Task
      v-for="task in tasks"
      :key="task.id"
      :task="task"
      @onRemoveTask="removeTask"
      @onStateChange="changeTaskState"
    />
  </div>
</template>

<script>
import Task from '../molecules/Task.vue';
import Button from '../atoms/Button.vue';

export default {
  name: 'TaskList',
  components: { Button, Task },
  props: {
    tasks: {
      type: Array,
      required: true,
    },
  },
  computed: {
    isRemoveAllButton() {
      return this.tasks.length > 1;
    },
  },
  methods: {
    changeTaskState(completed, task) {
      const taskIndex = this.tasks.indexOf(task);
      this.tasks[taskIndex].completed = completed;
    },
    removeTask(task) {
      const taskIndex = this.tasks.indexOf(task);
      this.tasks.splice(taskIndex, 1);
    },
    removeAllTasks() {
      this.tasks = [];
    },
  },
};
</script>

<style lang="scss">
  .TaskList {
    &-removeAll {
      margin-bottom: 2rem;
      margin-left: auto;
    }
  }
</style>
