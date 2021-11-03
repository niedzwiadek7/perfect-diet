<template>
  <div class="wrapper">
    <h5
      v-if="title !== ''"
      class="title"
    >
      {{ title }}
    </h5>
    <div class="wrapper-input">
      <select
        class="wrapper-section"
        @change="$emit('input', $event.target.value)"
      >
        <option
          v-for="option in options"
          :key="option"
          :value="option"
          class="wrapper-option"
        >
          {{ option }}
        </option>
      </select>
      <span class="custom-arrow">
        <font-awesome-icon
          :icon="['fas', 'chevron-down']"
          class="icon"
        />
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'

export default Vue.extend({
  props: {
    value: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: false,
      default: ''
    },
    options: {
      type: Array as PropType<Array<String>>,
      required: true
    }
  }
})
</script>

<style lang="scss" scoped>
@use './assets/scss/predefine/position';
@use './assets/scss/predefine/text';
@use './assets/scss/var';

.wrapper {
  .title {
    margin-bottom: .5em;
    color: var.$main;
    font-size: 1em;
    font-weight: 600;
    text-align: left;
  }
  .wrapper-input {
    position: relative;
    appearance: none;
    .wrapper-section {
      @include text.ellipsis-text;
      width: 100%;
      background: var.$light-text-16;
      border: 0;
      border-bottom: 2px solid var.$main;
      outline: none;
      text-transform: capitalize;
      .wrapper-option {
      }
    }
    .custom-arrow {
      @include position.top-right(0 ,0);
      width: 20px;
      height: 100%;
      background-color: var.$light-text-16;
      border-bottom: 2px solid var.$main;
      .icon {
        color: var.$main;
      }
    }
  }
}
</style>
