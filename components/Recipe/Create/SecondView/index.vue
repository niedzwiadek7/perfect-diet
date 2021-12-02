<template>
  <div class="wrapper-second-view">
    <RecipeCreateSecondViewIngredients
      class="section ingredients"
      :value="value.ingredients"
      @input="ingredients => update('ingredients', ingredients)"
    />
    <UISeparationSpacing class="spacing" />
    <RecipeCreateSecondViewSteps
      class="section steps"
      :value="value.procedure"
      @input="procedure => update('procedure', procedure)"
    />
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import Recipe from '~/assets/interface/Recipe/RecipeCreate'

export default Vue.extend({
  props: {
    value: {
      type: Object as PropType<Recipe>,
      required: true
    }
  },
  methods: {
    update (key: string, value: any) {
      this.$emit('input', { ...this.value, [key]: value })
    }
  }
})

</script>

<style lang="scss" scoped>
.wrapper-second-view {
  .section {
    margin-bottom: 2em;
  }
}
</style>
