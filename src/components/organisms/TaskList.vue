<template>
  <div class="TaskList">
    <Task
      v-for="task in tasks"
      :key="task.id"
      :task-id="task.id"
      :title="task.title"
      :description="task.description"
      :already-done="task.done"
    />
  </div>
</template>

<script>
import Task from '../molecules/Task.vue';

export default {
  name: 'TaskList',
  components: { Task },
  data() {
    return {
      tasks: [
        {
          id: 1,
          title: 'Task 1',
          description: 'What you have to do',
          done: false,
        },
        {
          id: 2,
          title: 'Task 2',
          description: 'What you have to do',
          done: true,
        },
      ],
    };
  },
};
</script>
