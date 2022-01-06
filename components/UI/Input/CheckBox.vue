<template>
  <div class="wrapper-input">
    <input
      id="input"
      class="checkbox"
      type="checkbox"
      @change="$emit('input', !value)"
    >
    <label
      for="input"
      class="label"
    >
      <span class="icon-wrapper">
        <font-awesome-icon
          :icon="['fas', 'check']"
          class="icon"
        />
      </span>
      <span class="desc"> {{ label }} </span>
    </label>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    value: {
      type: Boolean,
      required: true
    },
    label: {
      type: String,
      required: true
    }
  }
})
</script>

<style lang="scss" scoped>
@use './assets/scss/var';
@use './assets/scss/predefine/position';
@use './assets/scss/predefine/flex';
@use './assets/scss/predefine/zindex';
@use './assets/scss/effects/lighting';

.wrapper-input {
  @include flex.center-center();
  .checkbox {
    opacity: 0;
    width: 0;
    height: 0;
  }
  .label {
    @include flex.center-center;
    .icon-wrapper {
      @include flex.center-center;
      width: 1.5em;
      height: 1.5em;
      border: 2px solid var.$light-text-14;
      border-radius: 50%;
      transition: .3s ease-in-out;
      will-change: border-color;
      .icon {
        color: var.$light-text-7;
        font-size: .7em;
        opacity: 0;
        transition: .3s ease-in-out;
      }
    }
    .desc {
      color: var.$light-text-3;
      margin-left: 10px;
    }
  }
  .checkbox:focus + .label, .label:hover {
    .icon-wrapper {
      border-color: lighten(var.$main, 15%);
      .icon {
        color: var.$main;
      }
      &::after {
        opacity: 1;
      }
    }
  }
  .checkbox:checked + .label {
    .icon-wrapper {
      .icon {
        opacity: 1;
      }
    }
  }
}
</style>
