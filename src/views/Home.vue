<template>
  <div class="Home">
    <TaskForm @onAddTask="addTask" />
    <TaskList :tasks.sync="tasks" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import { Task as TaskInterface } from '../interfaces/task';
import TaskForm from '../components/organisms/TaskForm.vue';
import TaskList from '../components/organisms/TaskList.vue';

export default Vue.extend({
  name: 'Home',
  components: { TaskList, TaskForm },
  data() {
    return {
      tasks: [] as TaskInterface[],
    };
  },
  methods: {
    addTask(task:TaskInterface) {
      this.tasks.push(task);
    },
  },
});
</script>
