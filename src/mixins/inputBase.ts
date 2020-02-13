import Vue from 'vue';
import { uuid } from 'vue-uuid';

export default Vue.extend({
  props: {
    label: {
      type: String,
      default: '',
    },
    value: {
      type: String,
      required: true,
    },
  },
  computed: {
    uid():string {
      return uuid.v1();
    },
  },
});
