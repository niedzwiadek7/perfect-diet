<template>
  <div class="wrapper-Counter">
    <div class="wrapper-meter">
      <div
        class="minus-symbol"
        @click="$emit('input', value - 1)"
      >
        -
      </div>
      <input
        :value="value"
        type="number"
        class="input-count"
        readonly
      >
      <div
        class="plus-symbol"
        @click="$emit('input', value + 1)"
      >
        +
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    value: {
      type: Number,
      required: true
    }
  },
  watch: {
    value: {
      handler (newValue: number) {
        if (newValue < 0) {
          this.$emit('input', 0)
        }
      }
    }
  }
})
</script>

<style lang="scss" scoped>
@use './assets/scss/predefine/flex';
@use './assets/scss/var';

.wrapper-meter {
  @include flex.center-center;
  gap: 1.5em;
  .minus-symbol {
    font-size: 1.5em;
    font-weight: 700;
    cursor: pointer;
    user-select: none;
  }
  .input-count {
    --moz-appearance: textfield;
    width: 100%;
    background: transparent;
    text-align: center;
    border: none;
    border-bottom: 2px solid var.$main;
    outline: none;
  }
  .input-count::-webkit-outer-spin-button,
  .input-count::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  .plus-symbol {
    font-size: 1.5em;
    font-weight: 700;
    cursor: pointer;
    user-select: none;
  }
}
</style>
