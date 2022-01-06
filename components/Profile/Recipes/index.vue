<template>
  <div class="wrapper-recipes">
    <ProfileRecipesMenu
      v-model="chooseOption"
      class="menu"
    />
    <div class="select-category-wrapper">
      <UIInputSelect
        v-if="chooseOption === 'Polubione'"
        v-model="chooseCategory"
        :options="Category"
        title="Kategoria"
        class="select-category"
      />
    </div>
    <transition name="fade">
      <ProfileRecipesListRecipe
        v-if="loaded"
        class="list"
        :option="chooseOption"
      />
    </transition>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { CategoryRecipes } from '@/assets/interface/Content/User/Profile'
import Category from '@/assets/interface/enums/Recipe/Category'

export default Vue.extend({
  props: {
    allowLiked: {
      type: Boolean,
      required: true
    }
  },
  data () {
    return {
      Category,
      chooseOption: CategoryRecipes.recipes as CategoryRecipes,
      chooseCategory: Category.breakfast as Category,
      loaded: false as boolean,
      animationTime: 300 as number
    }
  },
  watch: {
    chooseOption: {
      handler (newValue: CategoryRecipes) {
        switch (newValue) {
          case CategoryRecipes.recipes:
            this.changeRecipes(this.getRecipes())
            break
          case CategoryRecipes.liked:
            this.changeRecipes(this.getLikedRecipes())
            break
        }
      },
      immediate: true
    },
    chooseCategory: {
      handler () {
        this.changeRecipes(this.getLikedRecipes())
      }
    }
  },
  methods: {
    async changeRecipes (callback: Promise<void>) {
      this.loaded = false
      await callback
      setTimeout(() => {
        this.loaded = true
      }, this.animationTime)
    },
    async getRecipes () {
      await this.$store.dispatch('user/recipes/getRecipes', {
        app: this
      })
    },
    async getLikedRecipes () {
      await this.$store.dispatch('user/recipes/getLikedRecipes', {
        app: this,
        category: this.chooseCategory
      })
    }
  }
})
</script>

<style lang="scss" scoped>
@use './assets/scss/predefine/position';
@use './assets/scss/predefine/flex';
@use './assets/scss/effects/vue/fade';

.wrapper-recipes {
  @include fade.fade(.9, .15s);
  position: relative;
  margin-top: .4em;
  .menu {

  }
  .select-category-wrapper {
    @include flex.center-center;
    width: 100%;
    margin: {
      top: 2em;
      bottom: 1em;
    }
    .select-category {
      width: 175px;
    }
  }
  .list {

  }
}
</style>
