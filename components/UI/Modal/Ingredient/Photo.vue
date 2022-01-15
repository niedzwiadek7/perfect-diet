<template>
  <div class="wrapper-img">
    <div class="container-img">
      <img
        :src="photo || require('~/assets/images/NoPhoto/Ingredient.jpg')"
        alt=""
        class="image"
      >
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'

export default Vue.extend({
  props: {
    photo: {
      type: undefined as unknown as PropType<(File | undefined)>, /* FIXME make concrete type prop value */
      required: false,
      default () {
        return undefined
      }
    }
  }
})
</script>

<style lang="scss" scoped>
@use './assets/scss/predefine/flex';

.wrapper-img {
  @include flex.center-center;
  margin: {
    left: auto;
    right: auto;
  }
  width: 9em;
  height: 9em;
  background: linear-gradient(0deg, rgba(169,169,169,1) 0%, rgba(254,254,254,1) 63%);
  border-radius: 50%;
  .container-img {
    @include flex.center-center;
    width: 8em;
    height: 8em;
    border-radius: 50%;
    .image {
      width: 8em;
      height: 8em;
      border-radius: 50%;
      object-fit: cover;
    }
  }
}
</style>
