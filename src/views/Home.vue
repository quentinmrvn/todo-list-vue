<template>
  <div class="Home">
    <TaskForm @onAddTask="addTask" />
    <TaskList :tasks="tasks" />
  </div>
</template>

<script>

import TaskForm from '../components/organisms/TaskForm.vue';
import TaskList from '../components/organisms/TaskList.vue';

export default {
  name: 'Home',
  components: { TaskList, TaskForm },
  data() {
    return {
      tasks: [],
    };
  },
  methods: {
    addTask(task) {
      this.tasks.push(task);
    },
  },
};
</script>
