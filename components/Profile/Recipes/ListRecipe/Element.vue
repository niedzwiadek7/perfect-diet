<template>
  <NuxtLink
    :to="`/recipe/${recipe._id}`"
    class="wrapper-element"
  >
    <div class="img-wrapper">
      <img
        class="img"
        :src="recipe.photo[0]"
        alt=""
      >
    </div>
    <h4 class="title">
      {{ recipe.name }}
    </h4>
    <div class="data">
      <span v-if="option === 'Przepisy'" class="element category">
        <!-- FIXME should be use CategoryRecipes enum -->
        {{ recipe.category }}
      </span>
      <span v-else class="element author">
        {{ recipe.author }}
      </span>
      <span class="element time">
        {{ formatTime(recipe.time) }}
      </span>
    </div>
  </NuxtLink>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import Recipe from '@/assets/interface/Recipe/Recipe'
import { CategoryRecipes } from '@/assets/interface/Content/User/Profile'

export default Vue.extend({
  props: {
    recipe: {
      type: Object as PropType<Recipe>,
      required: true
    },
    option: {
      type: String as PropType<CategoryRecipes>,
      required: true
    }
  },
  methods: {
    formatTime (time: Number): String {
      if (time > 15) { return '< 15 min' }
      if (time > 30) { return '15 - 30 min' }
      if (time > 60) { return '30 - 60 min' }
      return '> 60 min'
    }
  }
})
</script>

<style lang="scss" scoped>
@use './assets/scss/predefine/position';
@use './assets/scss/predefine/flex';
@use './assets/scss/predefine/link';
@use './assets/scss/predefine/text';
@use './assets/scss/var';

// FIXME resolve problem with width (160px)

.wrapper-element {
  @include link.reset(var.$text);
  .img-wrapper {
    @include flex.center-center;
    width: 160px;
    height: 160px;
    .img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 10px;
    }
  }
  .title {
    @include text.ellipsis-text;
    width: 160px;
    padding: 0;
    margin-top: 1em;
    font-size: 1.1em;
    font-weight: 600;
    color: var.$light-text-3;
  }
  .data {
    margin-top: .6em;
    font-size: .9em;
    color: var.$light-text-7;
    .element {
      position: relative;
      text-transform: capitalize;
      &::after {
        content: "•";
        font-weight: 900;
        padding: 0 .3em;
        color: var.$light-text-7;
      }
      &:last-child {
        &::after {
          display: none;
        }
      }
    }
  }
}
</style>
