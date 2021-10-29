<template>
  <div
    class="exit"
    @click="$emit('click')"
  />
</template>

<style lang="scss" scoped>
@use './assets/scss/predefine/position';
@use './assets/scss/var';

// required props
// size -> define size of element
// color -> define color of element

@mixin pseudo-element() {
  content: '';
  display: block;
  width: 100%;
  border-top: var(--border-size) solid var(--color);
}

.exit {
  --border-size: calc(var(--size) / 9);
  position: relative;
  width: var(--size);
  height: var(--size);
  &::before {
    @include pseudo-element;
    @include position.top-left(calc(50% - ( var(--border-size) / 2) ) ,0);
    transform: rotate(45deg);
  }
  &::after {
    @include pseudo-element;
    @include position.top-left(calc(50% - ( var(--border-size) / 2) ) ,0);
    transform: rotate(-45deg);
  }
  &:hover {
    &::before, &::after {
      border-color: var.$exit;
    }
  }
}
</style>
