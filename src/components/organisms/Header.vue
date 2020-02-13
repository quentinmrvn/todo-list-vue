<template>
  <header class="Header">
    <h1 class="Header-title">
      <img
        class="Header-titleLogo"
        src="../../assets/logo.png"
      >
      Todo list
    </h1>
  </header>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component
export default class Header extends Vue {}
</script>

<style lang="scss">
  .Header {
    padding: 1rem;
    background-color: $color-background;
    &-title {
      display: flex;
      align-items: center;
      font-size: 3rem;
      color: $color-primary;
      &Logo {
        max-height: 5rem;
        animation: logo-rotate 2s infinite;
      }
    }
  }
  @keyframes logo-rotate {
    from {
      transform: rotateY(0);
    }

    to {
      transform: rotateY(180deg);
    }
  }
</style>
