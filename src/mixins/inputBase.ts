import Vue from 'vue';

export default Vue.extend({
  props: {
    id: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: '',
    },
    value: {
      type: String,
      required: true,
    },
  },
});
