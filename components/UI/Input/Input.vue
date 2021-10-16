<template>
  <div class="wrapper">
    <slot name="icon" class="icon" />
    <input
      :type="type !== 'password' ? type : (show ? 'text' : type)"
      class="input-type-text"
      :placeholder="placeholder"
      :value="value"
      @input="change($event.target.value)"
    >
    <div v-if="type === 'password'" class="show-password" :class="{ hidden: show }" @click="toggleShow()">
      <font-awesome-icon
        :icon="['far', 'eye']"
      />
    </div>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'

export default Vue.extend({
  props: {
    value: {
      type: String,
      required: true
    },
    type: {
      type: String,
      validator: val => ['text', 'email', 'password'].includes(val),
      required: true
    },
    placeholder: {
      type: String,
      required: false,
      default () {
        return ''
      }
    }
  },
  data () {
    return {
      show: false as Boolean
    }
  },
  methods: {
    change (value: string) {
      this.$emit('input', value)
    },
    toggleShow () {
      this.show = !this.show
    }
  }
})
</script>

<style lang='scss' scoped>
@use './assets/scss/predefine/position';
@use './assets/scss/predefine/flex';
@use './assets/scss/var';

.wrapper {
  @include flex.center-center;
  gap: 1em;
  position: relative;
  padding: {
    left: 1.5em;
    top: .5em;
    bottom: .8em;
    right: 1.5em;
  }
  background-color: transparent;
  .input-type-text {
    width: 100%;
    font-size: 1em;
    background: transparent;
    border: none;
    &:focus {
      outline: none;
    }
  }
  .show-password {
    position: relative;
    cursor: pointer;
    color: var.$light-text-7;
    font-size: 15px;
    background-color: transparent;
    &::after {
      content: '';
      @include position.top-left(15%, 15%);
      width: 120%;
      border-top: 2px solid var.$light-text-7;
      border-bottom: 2px solid var.$light-text-16;
      transform-origin: top left;
      transform: scale(0) rotate(45deg);
      transition: .3s ease-in-out;
      will-change: transform;
    }
    &.hidden::after {
      transform: scale(1) rotate(45deg);
    }
  }
  &::before {
    content: '';
    @include position.bottom-left(0, 0);
    width: 100%;
    height: 100%;
    border: 2px solid var.$light-text-14;
    border-radius: 20px;
    z-index: -1;
  }

  &::after {
    content: '';
    @include position.bottom-left(0, 0);
    width: 100%;
    height: 100%;
    border: 2px solid var.$main;
    border-radius: 20px;
    transition: .3s ease-in-out;
    opacity: 0;
    z-index: -1;
  }

  &:focus-within {
    &::after {
      opacity: 1;
    }
  }
}
</style>
