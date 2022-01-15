<template>
  <div class="wrapper-recipe">
    <UISlider
      :child-length="recipe.photo.length"
      class="slider"
    >
      <div
        v-for="photo in recipe.photo"
        :key="photo"
        class="wrapper-img"
      >
        <img
          :src="photo"
          alt=""
          class="img"
        >
      </div>
    </UISlider>

    <div class="content">
      <RecipePresentationHeader class="header" />
      <UISeparationSpacing class="spacing" />
      <div class="desc">
        <h3 class="title">
          Opis
        </h3>
        <div class="desc-value">
          {{ recipe.description }}
        </div>
      </div>
      <UISeparationSpacing class="spacing" />
      <RecipePresentationIngredients
        :ingredients="recipe.ingredients"
        class="ingredients"
      />
      <UISeparationSpacing class="spacing" />
      <RecipePresentationProcedure
        :procedure="recipe.procedure"
        class="procedure"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex'

export default Vue.extend({
  async fetch (): Promise<void> {
    const { store, app } = this.$nuxt.context
    await store.dispatch('recipe/getAuthor', {
      app,
      id: this.recipe.author
    })
  },
  computed: {
    ...mapGetters({
      recipe: 'recipe/getRecipes'
    })
  }
})
</script>

<style lang="scss" scoped>
@use './assets/scss/predefine/position';
@use './assets/scss/predefine/flex';
@use './assets/scss/predefine/zindex';
@use './assets/scss/var';

.wrapper-recipe {
  .slider {
    @include position.sticky-top-left(0, 0);
    .tns-item {
      width: 100%;
      height: 40vh;
      .img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }

  .content {
    position: relative;
    top: -2em;
    padding: 0 2em;
    background: var.$light-background;
    border-top-left-radius: 1.5em;
    border-top-right-radius: 1.5em;
    z-index: zindex.$z-index-3;
    .header {
      padding: {
        top: 2em;
        bottom: 1.5em;
      }
    }
    .spacing {
      --height: 1px;
      --color: #bbb; //FIXME shoul be SCSS property var.$light-text-11
    }
    .desc {
      padding: {
        top: .7em;
        bottom: 1em;
      }
      .title {
        font-size: 1.3em;
        color: var.$light-text-7;
        padding-bottom: .4em;
      }
      .desc-value {
        color: var.$light-text-3;
      }
    }
  }
}
</style>
