<template>
  <div class="Home">
    <InputField
      label="tutu"
      input-id="toto"
      css-classes="tata"
    />
    <InputField
      css-classes="toto"
    >
      <p slot="label">
        label test
      </p>
    </InputField>
  </div>
</template>

<script>
import InputField from '../components/atoms/InputField.vue';

export default {
  name: 'Home',
  components: { InputField },
};
</script>
