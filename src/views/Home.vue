<template>
  <div class="Home">
    <TaskForm @onAddTask="addTask" />
    <TaskList :tasks.sync="tasks" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

import { Task as TaskInterface } from '../interfaces/task';
import TaskForm from '../components/organisms/TaskForm.vue';
import TaskList from '../components/organisms/TaskList.vue';

@Component({
  components: { TaskList, TaskForm },
})

export default class Home extends Vue {
  tasks = [] as TaskInterface[];

  addTask(task:TaskInterface) {
    this.tasks.push(task);
  }
}
</script>
