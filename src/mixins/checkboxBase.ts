import Vue from 'vue';

export default Vue.extend({
  model: {
    prop: 'modelValue',
    event: 'change',
  },
  props: {
    modelValue: {
      type: [Array as () => (boolean|string)[], Boolean, String],
      default: false,
    },
    trueValue: {
      type: [Boolean, String],
      default: true,
    },
    falseValue: {
      type: [Boolean, String],
      default: false,
    },
    value: {
      type: String,
      required: true,
    },
  },
  computed: {
    shouldBeChecked():boolean {
      if (this.modelValue instanceof Array) {
        return this.modelValue.includes(this.value);
      }
      return this.modelValue === this.trueValue;
    },
  },
  methods: {
    handleChange(event: Event) {
      const isChecked = (event.target as HTMLInputElement).checked;

      if (Array.isArray(this.modelValue)) {
        const newValue = [...this.modelValue];

        if (isChecked) {
          newValue.push(this.value);
        } else {
          newValue.splice(newValue.indexOf(this.value), 1);
        }

        this.$emit('change', newValue);
      } else {
        this.$emit('change', isChecked ? this.trueValue : this.falseValue);
      }
    },
  },
});
