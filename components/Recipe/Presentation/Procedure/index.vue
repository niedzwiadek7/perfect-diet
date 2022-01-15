<template>
  <div class="wrapper-procedure">
    <h3 class="title">
      Przygotowanie
    </h3>
    <ul class="list">
      <li
        v-for="(step, n) in procedure"
        :key="step"
        class="step"
      >
        <div class="number">
          {{ n + 1 }}
        </div>
        <div class="value">
          {{ step }}
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'

export default Vue.extend({
  props: {
    procedure: {
      type: Array as PropType<Array<String>>,
      required: true
    }
  }
})
</script>

<style lang="scss" scoped>
@use './assets/scss/predefine/flex';
@use './assets/scss/predefine/list';
@use './assets/scss/var';

.wrapper-procedure {
  padding: {
    top: .7em;
  }
  .title {
    font-size: 1.3em;
    color: var.$light-text-7;
    padding-bottom: .4em;
  }
  .list {
    @include list.reset();
    margin-left: .7em;
    .step {
      @include flex.between-start;
      margin-top: .7em;
      .number {
        @include flex.center-center;
        width: 1.8em;
        height: 1.8em;
        margin-bottom: 0.5em;
        background-color: #555;
        font-weight: 600;
        color: #fff;
        border-radius: 50%;
        user-select: none;
      }
      .value {
        margin-top: 0.2em;
        width: calc(100% - 2.5em);
        text-transform: capitalize;
      }
    }
  }
}
</style>
