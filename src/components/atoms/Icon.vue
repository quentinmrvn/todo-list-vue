<template>
  <eva-icon
    :name="name"
    :animation="animation"
    :fill="color"
    :height="height"
    :width="height"
  />
</template>

<script lang="ts">
// Go on https://antonreshetov.github.io/vue-eva-icons/ to see all available icons

import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component
export default class Icon extends Vue {
  @Prop({ required: true }) name!:string;

  @Prop({ default: '' }) animation!:string;

  // zoom, pulse, shake, flip
  @Prop({ default: '#000' }) color!:string;

  // HEX or color name
  @Prop({ default: '15' }) height!:string;

  @Prop({ default: '15' }) width!:string;
}
</script>
