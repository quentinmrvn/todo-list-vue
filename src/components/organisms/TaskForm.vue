<template>
  <Form
    ref="form"
    class="TaskForm"
    @submit="onAddTask"
  >
    <InputField
      ref="input"
      v-model="form.title"
      class="TaskForm-input"
      placeholder="Titre de la tache"
      label="Titre de la tache"
      required
    />
    <Textarea
      v-model="form.description"
      class="TaskForm-input"
      label="Description de la tache"
      placeholder="Description de la tache"
    />
    <Button
      type="submit"
      text="Ajouter la tache"
      icon-name="plus"
    />
  </Form>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Emit } from 'vue-property-decorator';
import { uuid } from 'vue-uuid';

import Form from '../molecules/Form.vue';
import InputField from '../atoms/InputField.vue';
import Button from '../atoms/Button.vue';
import Textarea from '../atoms/Textarea.vue';

@Component({
  components: {
    Textarea, Button, InputField, Form,
  },
})

export default class TaskForm extends Vue {
  form = {
    title: '',
    description: '',
  };

  @Emit('onAddTask')
  onAddTask() {
    const task = {
      id: `task${uuid.v1()}`,
      title: this.form.title,
      description: this.form.description,
      completed: false,
    };
    this.resetForm();

    return task;
  }

  resetForm() {
    this.form.title = '';
    this.form.description = '';
  }
}
</script>

<style lang="scss">
  .TaskForm {
    display: flex;
    margin-bottom: 2rem;

    &-input {
      margin-right: 2rem;
    }
  }
</style>
