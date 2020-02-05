<template>
  <div class="Home">
    <Checkbox
      v-model="checkedBox"
      check-value="toto"
      label="toto"
      @change="checkChange"
    />
    <Checkbox
      v-model="checkedBox"
      check-value="titi"
      label="titi"
      @change="checkChange"
    />
    <Checkbox
      v-model="checkedBox"
      check-value="tutu"
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
