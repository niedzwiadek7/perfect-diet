<template>
  <div
    v-if="value"
    class="wrapper-modal"
  >
    <slot
      class="modal"
      @click.stop=""
      @close="hideModal"
    />
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
@use '../../../../assets/scss/predefine/position';
@use '../../../../assets/scss/predefine/flex';
@use '../../../../assets/scss/predefine/zindex';
@use '../../../../assets/scss/var';

.wrapper-modal {
  @include position.fixed-top-left(0, 0);
  @include flex.center-center;
  width: 100vw;
  height: 100vh;
  background-color: rgba(#000, .9);
  z-index: zindex.$z-index-11;
}
</style>
