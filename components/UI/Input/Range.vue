<template>
  <div
    class="wrapper-range"
    :style="`--range-percentage: ${rangePercentage}%`"
  >
    <div class="wrapper-numbers">
      <div class="start">
        {{ minValue }}
      </div>
      <div class="actual">
        {{ value }}
      </div>
      <div class="end">
        {{ maxValue }}
      </div>
    </div>

    <input
      ref="range"
      type="range"
      :value="value"
      :min="minValue"
      :max="maxValue"
      :step="step"
      @input="change($event.target.value)"
    >
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    value: {
      type: Number,
      required: true
    },
    minValue: {
      type: Number,
      required: true
    },
    maxValue: {
      type: Number,
      required: true
    },
    step: {
      type: Number,
      required: false,
      default () {
        return 1
      }
    }
  },
  data () {
    return {
      rangePercentage: (this.value - this.minValue) / (this.maxValue - this.minValue) * 100
    }
  },
  methods: {
    change (value: string) {
      this.rangePercentage = (parseInt(value) - this.minValue) / (this.maxValue - this.minValue) * 100
      this.$emit('input', parseInt(value))
    }
  }
})
</script>

<style lang="scss" scoped>
@use './assets/scss/var';
@use './assets/scss/predefine/position';
@use './assets/scss/predefine/flex';

.wrapper-range {
  .wrapper-numbers {
    @include flex.between-center;
    position: relative;
    margin-bottom: .4em;
    padding: 0 .5em;
    .start, .end, .actual {
      font-size: 1.2em;
      font-weight: 600;
      color: var.$light-text-3;
    }
    .actual {
      color: var.$main;
    }
  }
  input {
    -webkit-appearance: none;
    width: 100%;
    height: .7em;
    background: linear-gradient(
        90deg,
        var.$main var(--range-percentage),
        #ddd var(--range-percentage)
    );
    border-radius: 5px;
    outline: none;
    border: none;

    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      width: 1.4em;
      height: 1.4em;
      border-radius: 50%;
      background: var.$main;
      cursor: pointer;
    }
  }
}
</style>
