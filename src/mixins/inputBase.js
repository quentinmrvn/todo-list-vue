export default {
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
  computed: {
    internalId() {
      return this.id === '' ? this.uid : this.id;
    },
  },
};
