<template>
  <div class="lds-ring">
    <div />
    <div />
    <div />
    <div />
  </div>
</template>

<style lang="scss" scoped>
// required properties
// color -> colorElement
// size -> weigthElement

@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.lds-ring {
  position: relative;
  width: calc(var(--size) * 10);
  height: calc(var(--size) * 10);
  div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: calc(var(--size) * 8);
    height: calc(var(--size) * 8);
    margin: var(--size);
    border: var(--size) solid var(--color);
    border-radius: 50%;
    border-color: var(--color) transparent transparent transparent;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    &:nth-child(1) {
      animation-delay: -0.45s;
    }
    &:nth-child(2) {
      animation-delay: -0.3s;
    }
    &:nth-child(3) {
      animation-delay: -0.15s;
    }
  }
}

</style>
