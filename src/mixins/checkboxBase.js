export default {
  model: {},
  props: {
    id: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: '',
    },
  },
  methods: {
    handleChange(event) {
      this.$emit('change', event.target.value);
    },
  },
  computed: {
    checkboxInternalId() {
      return this.id === '' ? this.uid : this.id;
    },
  },
};
