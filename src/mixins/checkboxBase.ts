import Vue from 'vue';
import { Component, Prop, Model } from 'vue-property-decorator';

@Component
export default class checkboxBase extends Vue {
  @Model('change', { type: Boolean }) readonly modelValue!: boolean|string[];

  @Prop({ default: true }) trueValue!: boolean|string;

  @Prop({ default: false }) falseValue!: boolean|string;

  @Prop({ required: true }) value!: string;

  get shouldBeChecked():boolean {
    if (this.modelValue instanceof Array) {
      return this.modelValue.includes(this.value);
    }
    return this.modelValue === this.trueValue;
  }

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
  }
}
