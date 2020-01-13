<template>
  <header class="Header">
    <h1 class="Header-title">
      <img class="Header-titleLogo" src="../../assets/logo.png"/>
      Todo list
    </h1>
  </header>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style lang="scss">
  .Header {
    padding: 1rem;
    &-title {
      color: $color-primary;
      font-size: 3rem;
      display: flex;
      align-items: center;
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
