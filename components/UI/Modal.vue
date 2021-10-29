<template>
  <div
    v-if="value"
    class="wrapper-modal"
    @click="hideModal"
  >
    <div
      class="wrapper-slot"
      @click.stop=""
    >
      <slot class="modal" />
      <UIExit
        class="exit"
        @click="hideModal"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    value: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    hideModal () {
      this.$emit('input', false)
    }
  }
})
</script>

<style lang="scss" scoped>
@use './assets/scss/predefine/position';
@use './assets/scss/predefine/flex';
@use './assets/scss/predefine/zindex';
@use './assets/scss/var';

.wrapper-modal {
  @include position.fixed-top-left(0, 0);
  @include flex.center-center;
  width: 100vw;
  height: 100vh;
  background-color: rgba(#000, .9);
  z-index: zindex.$z-index-11;
  .wrapper-slot {
    position: relative;
    background-color: var.$light-text-14;
    border-radius: 10px;
    width: 80%;
    padding: 2em;
    .exit {
      @include position.top-right(2em, 2em);
      --color: #333; // FIXME shoul be SCSS property var.$light-text-3;
      --size: 1.5em;
    }
  }
}
</style>
