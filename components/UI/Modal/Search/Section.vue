<template>
  <div
    v-if="list.length > 0"
    class="wrapper-section"
  >
    <h5 class="title">
      {{ title }}
    </h5>
    <UIModalSearchElement
      v-for="element in elementsList"
      :key="element._id"
      :value="element"
      :is-active="false"
      :search-text="searchText"
      class="wrapper-element"
      @enableModal="e => $emit('enableModal', e)"
    />
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import Element from '~/assets/interface/Content/Search/Element'
import Types from '~/assets/interface/Content/Search/Types'
import Ingredient from '~/assets/interface/Ingredient'
import Recipe from '~/assets/interface/Recipe/Recipe'
import User from '~/assets/interface/User/User'
import {
  createElementFromUser,
  createElementFromIngredient,
  createElementFromRecipe
} from '~/utils/constructors/store/search/Element'

export default Vue.extend({
  props: {
    title: {
      type: String as () => Types,
      required: true
    },
    list: {
      type: Array as PropType<Array<(Recipe | User | Ingredient | Element)>>,
      required: true
    },
    searchText: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      elementsList: [] as Array<Element>
    }
  },
  watch: {
    list: {
      handler () {
        switch (this.title) {
          case Types.users:
            this.elementsList = []
            this.list.forEach((elem) => {
              this.elementsList.push(createElementFromUser(elem as User))
            })
            break
          case Types.recipes:
            this.elementsList = []
            this.list.forEach((elem) => {
              this.elementsList.push(createElementFromRecipe(elem as Recipe))
            })
            break
          case Types.ingredients:
            this.elementsList = []
            this.list.forEach((elem) => {
              this.elementsList.push(createElementFromIngredient(elem as Ingredient))
            })
            break
          default:
            this.elementsList = (this.list as Array<Element>)
            break
        }
      },
      deep: true,
      immediate: true
    }
  }
})
</script>

<style lang="scss" scoped>
@use './assets/scss/var';
@use './assets/scss/predefine/text';

.wrapper-section {
  .title {
    font-size: 1.3em;
    font-weight: 500;
    color: var.$main;
  }
  .wrapper-element {
    margin-top: .5em;
  }
}
</style>
