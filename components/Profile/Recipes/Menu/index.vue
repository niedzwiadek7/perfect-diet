<template>
  <form class="wrapper-form">
    <div
      v-for="(option, n) in possibleOptions"
      :key="option"
      class="wrapper-option"
      :class="ischecked(option) && 'checked-option'"
    >
      <input
        :id="option"
        type="radio"
        name="option"
        class="input"
        :checked="n === 0"
        @change="$emit('input', option)"
      >
      <label
        :for="option"
        class="label"
      >
        {{ option }}
      </label>
    </div>
  </form>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { CategoryRecipes } from '@/assets/interface/Content/User/Profile'

export default Vue.extend({
  props: {
    value: {
      type: String as PropType<CategoryRecipes>,
      required: true
    }
  },
  data () {
    return {
      possibleOptions: CategoryRecipes
    }
  },
  methods: {
    ischecked (value: CategoryRecipes): boolean {
      return value === this.value
    }
  }
})
</script>

<style lang="scss" scoped>
@use './assets/scss/predefine/position';
@use './assets/scss/predefine/flex';
@use './assets/scss/var';

.wrapper-form {
  display: flex;
  flex-wrap: nowrap;
  .wrapper-option {
    position: relative;
    width: 100%;
    padding: 1.4em 0;
    border-bottom: 1px solid var.$light-text-14;
    .input {
      width: 0;
      height: 0;
      visibility: hidden;
    }
    .label {
      @include position.full-fill;
      @include flex.center-center;
      font-size: 1.3em;
      font-weight: 600;
      color: var.$light-text-7;
    }
    &::after {
      content: '';
      @include position.bottom-left(-1px, 0);
      width: 100%;
      border-bottom: 3px solid var.$main;
      transform: scale(0);
      transition: .2s ease-in-out;
      will-change: transition;
    }
    &.checked-option {
      .label {
        color: var.$light-text-3;
      }
      &::after {
        transform: scale(1);
      }
    }
  }
}
</style>
