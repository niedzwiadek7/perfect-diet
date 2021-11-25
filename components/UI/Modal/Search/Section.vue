<template>
  <div
    v-if="list.length > 0"
    class="wrapper-section"
  >
    <h5 class="title">
      {{ title }}
    </h5>
    <UIModalSearchElement
      v-for="(element, n) in list"
      :key="element._id"
      :value="element"
      :is-active="activeElement === n + 1"
      :search-text="searchText"
      class="wrapper-element"
      @route="$emit('route')"
      @active="$emit('active', n + 1)"
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
    },
    activeElement: {
      type: Number,
      required: false,
      default: null
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
