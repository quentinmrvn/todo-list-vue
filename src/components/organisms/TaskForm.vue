<template>
  <Form
    ref="form"
    class="TaskForm"
    @submit="handleAddTask"
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

<script>
import Form from '../molecules/Form.vue';
import InputField from '../atoms/InputField.vue';
import Button from '../atoms/Button.vue';
import Textarea from '../atoms/Textarea.vue';

export default {
  name: 'TaskForm',
  components: {
    Textarea, Button, InputField, Form,
  },
  data() {
    return {
      form: {
        title: '',
        description: '',
      },
    };
  },
  methods: {
    handleAddTask() {
      const task = {
        title: this.form.title,
        description: this.form.description,
        completed: false,
      };
      this.$emit('onAddTask', task);
      this.resetForm();
    },
    resetForm() {
      this.form.title = '';
      this.form.description = '';
    },
  },
};
</script>

<style lang="scss">
  .TaskForm {
    display: flex;

    &-input {
      margin-right: 1rem;
    }
  }
</style>
