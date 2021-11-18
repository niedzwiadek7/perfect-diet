<template>
  <div class="wrapper-counter">
    <UIInputCounter
      :value="value"
      class="counter"
      @input="v => $emit('input', v)"
    />
    <UIButtonSimple
      class="button"
    >
      <font-awesome-icon
        :icon="['fas', 'shopping-cart']"
        class="icon"
      />
      <span class="text">
        Lista zakupów
      </span>
    </UIButtonSimple>
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
  }
})
</script>

<style lang="scss" scoped>
@use './assets/scss/predefine/flex';
@use './assets/scss/var';

.wrapper-counter {
  @include flex.center-center(column);
  gap: 1em;
  .counter {
    width: 150px;
  }
  .button {
    padding: 1em 1.5em;
    background-color: var.$main;
    color: var.$text-on-main-light;
    .icon {
      margin-right: 1em;
    }
    .text {

    }
  }
}
</style>
