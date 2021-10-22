<template>
  <div class="wrapper">
    <textarea
      ref="textarea"
      rows="3"
      :placeholder="placeholder"
      :maxlength="maxLength"
      class="textarea-type-text"
      @input="change($event.target.value)"
    />
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
    placeholder: {
      type: String,
      required: false,
      default () {
        return ''
      }
    },
    maxLength: {
      type: Number,
      required: false,
      default () {
        return -1
      }
    }
  },
  methods: {
    resize () {
      const textArea: HTMLTextAreaElement = this.$refs.textarea as HTMLTextAreaElement
      textArea.style.height = 'auto'
      textArea.style.height = `${textArea.scrollHeight}px`
    },
    change (value: string) {
      this.$emit('input', value)
      this.resize()
    }
  }
})
</script>

<style lang='scss' scoped>
@use './assets/scss/effects/lighting';
@use './assets/scss/predefine/flex';
@use './assets/scss/var';

.wrapper {
  @include flex.center-center;
  @include lighting.lighting-border-for-input(
      .3s, 2px solid var.$light-text-14, 2px solid var.$main
  );
  padding: {
    left: 1.5em;
    top: 1em;
    bottom: 1.3em;
    right: 1.5em;
  }
  background-color: transparent;
  .textarea-type-text {
    box-sizing: content-box;
    width: 100%;
    text-align: justify;
    font-size: 1em;
    line-height: 1.2;
    background: transparent;
    border: none;
    resize: none;
    overflow: hidden;
    &:focus {
      outline: none;
    }
  }
}
</style>
