<template>
  <NuxtLink class="link" :to="link">
    <slot name="icon" />
    <div class="title">
      {{ value }}
    </div>
  </NuxtLink>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    link: {
      type: String,
      required: true
    },
    value: {
      type: String,
      required: true
    }
  }
})
</script>

<style lang="scss" scoped>
@use './assets/scss/predefine/flex';
@use './assets/scss/predefine/link';
@use './assets/scss/var';

.link {
  @include flex.center-center(column);
  @include link.reset(var.$light-text-7);
  font-size: 1.4em;
  .title {
    display: none;
    padding-top: .5em;
  }
  .icon {

  }
  &.nuxt-link-active {
    color: var.$main;
  }
}

@media (min-width: 576px) {
  .link {
    font-size: 1.1em;
    .title {
      display: block;
    }
  }
}
</style>
