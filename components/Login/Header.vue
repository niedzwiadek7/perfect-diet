<template>
  <header class="header">
    <h2 class="title">
      Witaj ponownie!
    </h2>
    <div class="desc">
      Podaj swoje dane, by się zalogować
    </div>
  </header>
</template>

<style lang="scss" scoped>
@use './assets/scss/predefine/flex';
@use './assets/scss/var';

.header {
  @include flex.center-center(column);
  margin-bottom: 1.5rem;
  .title {
    margin-bottom: .8rem;
    color: var.$light-text-3;
    font-size: 1.6rem;
    font-weight: 700;
  }
  .desc {
    color: var.$light-text-7;
  }
}
</style>
