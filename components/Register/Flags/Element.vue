<template>
  <div class="flag-wrapper" :class="{ checked }">
    <span class="icon-wrapper">
      <font-awesome-icon
        :icon="['fas', 'check']"
        class="icon"
      />
    </span>
    <span class="desc">
      {{ value }}
    </span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    value: {
      type: String,
      required: true
    },
    checked: {
      type: Boolean,
      required: true
    }
  }
})
</script>

<style lang="scss" scoped>
@use './assets/scss/var';
@use './assets/scss/predefine/flex';
@use './assets/scss/predefine/position';
@use './assets/scss/predefine/zindex';

.flag-wrapper {
  @include flex.start-center;
  .icon-wrapper {
    @include flex.center-center;
    position: relative;
    width: 1.5em;
    height: 1.5em;
    background-color: var.$light-text-14;
    border-radius: 50%;
    .icon {
      color:  var.$light-text-7;
      font-size: .7em;
      z-index: zindex.$z-index-2;
    }
    &::after {
      content: '';
      @include position.full-fill;
      background-color: lighten(var.$main, 45%);
      border-radius: 50%;
      opacity: 0;
      transition: .3s ease-in-out;
      will-change: opacity;
      z-index: zindex.$z-index-1;
    }
  }
  .desc {
    width: calc(100% - 1.5em - 15px);
    margin-left: 15px;
    color: var.$light-text-7;
    font-weight: 500;
  }
  &.checked {
    .icon-wrapper {
      .icon {
        color: var.$main;
      }
      &::after {
        opacity: 1;
      }
    }
    .desc {
      color: var.$text;
    }
  }
}
</style>
