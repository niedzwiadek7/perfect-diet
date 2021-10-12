<template>
  <button class="btn" @click="$emit('click')">
    <span>
      <slot class="slot" />
    </span>
  </button>
</template>

<style lang="scss" scoped>
@use './assets/scss/var';
@use './assets/scss/effects/lighting';

// required params
// bgColor -> background color
// color -> text color

.btn {
  @include lighting.hover-focus(.2, .3s);
  padding: 15px;
  color: var(--color);
  font-weight: 300;
  background-color: var(--bgColor);
  letter-spacing: 1px;
  border: 0;
  border-radius: 30px;
  outline: none;
  cursor: pointer;
  overflow: hidden;
}
</style>
