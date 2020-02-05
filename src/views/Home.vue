<template>
  <div class="Home">
    <Checkbox
      v-model="isChecked"
      value="toto"
      label="toto"
      @change="checkChange"
    />
    <Checkbox
      v-model="checkedBox"
      value="titi"
      label="titi"
      @change="checkChange"
    />
    <Checkbox
      v-model="checkedBox"
      value="tutu"
      label="tutu"
      @change="checkChange"
    />
  </div>
</template>

<script>
import Checkbox from '../components/atoms/Checkbox.vue';

export default {
  name: 'Home',
  components: { Checkbox },
  data() {
    return {
      checkedBox: [],
      isChecked: false,
    };
  },
  methods: {
    checkChange(checked) {
      console.log(checked);
      console.log(this.checkedBox);
    },
  },
};
</script>
