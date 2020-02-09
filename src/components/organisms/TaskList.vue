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
  props: {
    tasks: {
      type: Array,
      required: true,
    },
  },
};
</script>
