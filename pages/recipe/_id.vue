<template>
  <client-only>
    <div
      v-if="$fetchState.pending"
      class="full-fill"
    >
      <UILoading
        class="loading"
      />
    </div>

    <div
      v-else-if="$fetchState.error"
    >
      {{ $fetchState.error.response.status }}
      Nie znaleziono
    </div>

    <RecipePresentation
      v-else
    />
  </client-only>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex'

export default Vue.extend({
  layout: 'UserMenu',
  async fetch (): Promise<void> {
    const { store, app, params } = this.$nuxt.context
    await store.dispatch('recipe/getRecipe', {
      app,
      id: params.id
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
@use './assets/scss/predefine/flex';
@use './assets/scss/predefine/position';
@use './assets/scss/var';

.full-fill {
  @include position.full-fill;
  @include flex.center-center;
  width: 100vw;
  height: 100vh;
  .loading {
    --color: #1FCC79; // FIXME should be SCSS property var.$main
    --size: 8px;
  }
}
</style>
