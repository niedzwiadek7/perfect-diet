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
      class="wrapper-element"
    >
      <div slot="desc" class="wrapper-desc">
        {{ element.description }}
      </div>
    </UIModalSearchElement>
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
      type: Array as PropType<Array<(Recipe | User | Ingredient)>>,
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
        }
      },
      deep: true
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
    .wrapper-desc {
      @include text.ellipsis-text;
    }
  }
}
</style>
