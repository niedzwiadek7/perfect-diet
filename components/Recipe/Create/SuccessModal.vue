<template>
  <figure class="wrapper-success-modal">
    <img
      :src="require('~/assets/images/CreateRecipe/success.png')"
      alt=""
      class="image"
    >
    <figcaption class="description">
      <h3 class="title">
        Pomyślnie utworzono
      </h3>
      <div class="text">
        Przepis został dodany pomyślnie,
        zamknij to okno, by go zobaczyć
      </div>
      <UIButtonSimple
        class="button"
        @click="$emit('hide')"
      >
        Zobacz przepis
      </UIButtonSimple>
    </figcaption>
  </figure>
</template>

<style lang="scss" scoped>
@use './assets/scss/predefine/flex';
@use './assets/scss/var';

.wrapper-success-modal {
  @include flex.center-center(column);
  .image {
    width: 60%;
    height: auto;
    margin: {
      top: 2em;
      bottom: 3em;
    }
  }
  .description {
    @include flex.center-center(column);
    text-align: center;
    .title {
      font-size: 1.5em;
      font-weight: 600;
      color: var.$light-text-5;
      margin-bottom: 1em;
    }
    .text {
      width: 85%;
      font-size: 1.1em;
      margin-bottom: 1.5em;
    }
    .button {
      width: 75%;
      background-color: var.$main;
      color: var.$text-on-main-light;
    }
  }
}
</style>
