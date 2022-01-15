<template>
  <div class="wrappper-not-found">
    <UIIconsSearchNoResults
      class="icon"
    />
    <span class="info">
      Nie znaleziono poszukiwanego elementu
    </span>
    <div class="main-page">
      Przejdź do
      <NuxtLink
        to="/"
        class="link"
      >
        strony głównej
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({

})
</script>

<style lang="scss" scoped>
@use './assets/scss/predefine/flex';
@use './assets/scss/predefine/link';
@use './assets/scss/effects/animation/loadFromTop';
@use './assets/scss/var';

.wrappper-not-found {
  @include flex.center-center(column);
  @include loadFromTop.animation(-10vh, .3s);
  margin: {
    top: 20vh;
    left: auto;
    right: auto;
  }
  padding: {
    left: 10%;
    right: 10%;
  }
  width: 100%;
  .icon {
    stroke: var.$light-text-10;
  }
  .info {
    font-weight: 600;
    margin-top: 2em;
    text-align: center;
  }
  .main-page {
    margin-top: 1em;
    .link {
      @include link.reset(var.$main);
      font-weight: 600;
    }
  }
}
</style>
