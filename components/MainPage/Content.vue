<template>
  <section class="content">
    <h3 class="title">
      Zacznij gotować
    </h3>
    <div class="desc">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, eum?
    </div>
    <NuxtLink to="/login" class="link">
      <UIButtonSimple class="link-button">
        Rozpocznij
      </UIButtonSimple>
    </NuxtLink>
  </section>
</template>

<style lang="scss" scoped>
@use './assets/scss/predefine/flex';
@use './assets/scss/var';

.content {
  @include flex.center-center(column);
  padding: 20px;
  .title {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 2rem;
  }
  .desc {
    width: 300px;
    color: var.$light-text-7;
    text-align: center;
    margin-bottom: 5rem;
  }
  .link {
    width: min(100%, 250px);
    --bgColor: #1FCC79; // #8E44AD; // FIXME przekazywany parametr powinien być var.$main
    --color: white;
    .link-button {
      width: 100%;
    }
  }
}
</style>
