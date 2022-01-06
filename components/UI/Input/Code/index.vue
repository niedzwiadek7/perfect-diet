<template>
  <div class="wrapper">
    <div
      v-for="n in length"
      :key="n"
      class="input-wrapper"
    >
      <input
        ref="input"
        v-model="numberArray[n - 1]"
        maxlength="1"
        type="text"
        class="input"
        @keyup.left="focusElement(n - 1)"
        @keyup.up="focusElement(n - 1)"
        @keyup.right="focusElement(n + 1)"
        @keyup.down="focusElement(n + 1)"
        @keyup="autoTab($event, n)"
        @focus="onFocus($event.target)"
      >
    </div>
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
    length: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      numberArray: [] as Array<string>
    }
  },
  methods: {
    autoTab (event: any, position: number) {
      // `-i service buttons from NumLock
      const oldValue: (string | undefined) = this.numberArray[position - 1]
      const regex = /^[0-9]$/g
      const value = String.fromCharCode(event.keyCode > 95 ? event.keyCode - 48 : event.keyCode)
      if (regex.test(value)) {
        event.target.value = value
        this.$emit('input', this.numberArray.join(''))
        this.focusElement(position + 1)
      } else {
        event.target.value = oldValue || ''
      }
    },
    onFocus (element: HTMLInputElement) {
      element.select()
    },
    focusElement (position: number) {
      // @ts-ignore
      const element = this.$refs.input?.[position - 1]
      if (element) {
        element.focus()
      }
    }
  }
})
</script>

<style lang="scss" scoped>
@use './assets/scss/effects/lighting';
@use './assets/scss/predefine/flex';
@use './assets/scss/var';

.wrapper {
  @include flex.around-center;
  width: 100%;
  .input-wrapper {
    @include flex.center-center;
    @include lighting.lighting-border-for-input(
        .3s, 2px solid var.$light-text-14, 2px solid var.$main
    );
    width: 20%;
    height: 75px;
    .input {
      width: 75%;
      text-align: center;
      color: var.$light-text-7;
      font-size: 3.5em;
      font-weight: 500;
      border: none;
      outline: none;
    }
  }
}
</style>
