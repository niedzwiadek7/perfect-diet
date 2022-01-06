<template>
  <div class="wrapper-input">
    <input
      ref="input"
      class="input"
      :value="value"
      readonly
      @focus="autoSelect"
    >
    <button
      class="copy"
      :class="isCopy && 'copied'"
      @click="copyToClipboard"
    >
      {{ isCopy ? 'Skopiowano' : 'Kopiuj' }}
    </button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    value: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      isCopy: false as boolean
    }
  },
  methods: {
    autoSelect () {
      const input: HTMLInputElement = (this.$refs.input as HTMLInputElement)
      input.select()
    },
    copyToClipboard () {
      try {
        this.autoSelect()
        document.execCommand('copy')
        this.isCopy = true
      } catch (err) {
        if (process.env.NODE_ENV !== 'production') {
          console.log(err)
        }
      }
    }
  }
})
</script>

<style lang="scss" scoped>
@use './assets/scss/predefine/flex';
@use './assets/scss/predefine/text';
@use './assets/scss/var';

.wrapper-input {
  @include flex.between-center;
  .input {
    @include text.ellipsis-text;
    width: 100%;
    margin-right: 1.5em;
    font-size: 1em;
    background: transparent;
    border: none;
    &:focus {
      outline: none;
    }
  }
  .copy {
    font-size: 1.2em;
    font-weight: 600;
    color: var.$main;
    text-transform: uppercase;
    background-color: transparent;
    border: 0;
    &.copied {
      font-weight: 600;
      color: var.$light-text-7;
    }
  }
}
</style>
