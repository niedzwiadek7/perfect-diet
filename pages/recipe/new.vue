<template>
  <div class="wrapper-create">
    <header class="top">
      <div class="control">
        <font-awesome-icon
          :icon="['fas', 'chevron-left']"
          class="icon"
          @click="switchPage(-1)"
        />
        <font-awesome-icon
          :icon="['fas', 'chevron-right']"
          class="icon"
          @click="switchPage(1)"
        />
      </div>
      <div class="page">
        <span class="actual">
          {{ active }}
        </span>
        <span class="break">
          /
        </span>
        <span class="count">
          2
        </span>
      </div>
    </header>
    <main>
      <section>
        <RecipeCreateFirstView
          v-if="active === 1"
          v-model="recipe"
          class="first-view"
        />
        <RecipeCreateSecondView
          v-if="active === 2"
          v-model="recipe"
          class="second-view"
        />
      </section>
    </main>
    <footer class="footer">
      <div class="first">
        <UIButtonSimple
          class="button"
          @click="showModal = true"
        >
          Utwórz przepis
        </UIButtonSimple>
      </div>
    </footer>
    <UIModalOverlayBasic
      v-model="showModal"
    >
      <RecipeCreateSuccessModal
        @hide="showModal = false"
      />
    </UIModalOverlayBasic>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Recipe from '@/assets/interface/Recipe/RecipeCreate'
import Difficulty from '@/assets/interface/enums/Recipe/Difficulty'
import Category from '@/assets/interface/enums/Recipe/Category'
import IngredientInRecipe from '@/assets/interface/Recipe/IngredientInRecipe'

export default Vue.extend({
  layout: 'UserMenu',
  data () {
    return {
      recipe: {
        name: '' as string,
        description: '' as string,
        photo: [] as Array<File>,
        time: 10 as number,
        difficulty: Difficulty.EASY as Difficulty,
        serving: 1 as number,
        category: Category.breakfast as Category,
        ingredients: [] as Array<IngredientInRecipe>,
        procedure: [] as Array<string>
      } as Recipe,
      active: 1 as number,
      showModal: false
    }
  },
  head () {
    return {
      title: 'Nowy przepis'
    }
  },
  watch: {
    showModal: {
      handler (newValue: boolean) {
        if (!newValue) {
          this.$router.push('przepis')
        }
      }
    }
  },
  methods: {
    switchPage (n: number) {
      let activeHelp = this.active
      activeHelp += n
      if (activeHelp === 1 || activeHelp === 2) {
        this.active = activeHelp
      }
    }
  }
})
</script>

<style lang="scss" scoped>
@use './assets/scss/predefine/flex';
@use './assets/scss/var';

.wrapper-create {
  @include flex.between-center(column);
  gap: 1em;
  padding-top: 2em;
  height: calc(100vh - 6em);
  .top {
    @include flex.between-center;
    width: 90%;
    .control {
      cursor: pointer;
      .icon {
        font-size: 1.4em;
        margin-right: .6em;
        user-select: none;
      }
    }
    .page {
      font-size: 1.1em;
      font-weight: 500;
      color: var.$light-text-7;
      .actual {
        font-size: 1.2em;
        font-weight: 700;
        color: var.$light-text-3;
      }
    }
  }
  main {
    width: 85%;
    height: calc(100vh - 18em);
    overflow: scroll;
    .first-view {

    }
    .second-view {

    }
  }
  .footer {
    width: 90%;
    .first {
      .button {
        width: 100%;
        background-color: var.$main;
        color: var.$text-on-main-light;
      }
    }
  }
}
</style>
