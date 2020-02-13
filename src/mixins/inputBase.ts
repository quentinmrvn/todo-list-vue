import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import { uuid } from 'vue-uuid';

@Component
export default class inputBase extends Vue {
  @Prop({ default: '' }) label!:string;

  @Prop({ required: true }) value!:string;

  // eslint-disable-next-line class-methods-use-this
  get uid():string {
    return uuid.v1();
  }
}
