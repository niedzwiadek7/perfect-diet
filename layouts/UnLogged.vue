<template>
  <div class="wrapper-layout">
    <div class="wrapper-components">
      <LayoutUnLoggedHeader class="component-header" />
      <Nuxt class="component-form" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use './assets/scss/predefine/flex';

.wrapper-layout {
  @include flex.center-center(column);
  min-height: 80vh;
  margin: 2rem;

  .wrapper-components {
    width: min(100%, 400px);
    .component-header {
      margin-bottom: 3rem;
    }
    .component-form {
      width: 100%;
    }
  }
}

@media (min-width: 440px) {
  .wrapper {
    .wrapper-components {
      padding: {
        left: 20px;
        right: 20px;
      };
    }
  }
}
</style>
