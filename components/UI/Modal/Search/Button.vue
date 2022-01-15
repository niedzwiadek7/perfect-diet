<template>
  <div class="wrapper-button">
    <slot name="icon" />
  </div>
</template>

<style lang="scss" scoped>
@use './assets/scss/predefine/flex';

.wrapper-button {
  @include flex.center-center;
  width: 2em;
  height: 1.5em;
  padding-bottom: 2px;
  background: linear-gradient(-225deg,#d5dbe4,#f8f8f8);
  border-radius: 2px;
  box-shadow: inset 0 -2px 0 0 #cdcde6,inset 0 0 1px 1px #fff,0 1px 2px 1px rgba(30,35,90,0.4);
}
</style>
