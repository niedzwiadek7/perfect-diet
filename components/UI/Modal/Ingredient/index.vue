<template>
  <div class="wrapper-ingredient">
    <div class="wrapper-img-section">
      <UIModalIngredientPhoto
        :photo="element.photo"
        class="photo"
      />
      <UIModalIngredientCounter
        v-model="count"
        class="counter"
      />
    </div>
    <div
      class="content"
    >
      <h4 class="title">
        {{ element.name }}
      </h4>
      <div class="desc">
        <UIReadMore
          :text="element.description.length > 0 ? element.description : 'Brak opisu'"
          :max-length="150"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import Element from '~/assets/interface/Content/Search/Element'

export default Vue.extend({
  props: {
    element: {
      type: Object as PropType<(Element | null)>,
      required: true
    }
  },
  data () {
    return {
      count: 0 as number
    }
  }
})
</script>

<style lang="scss" scoped>
@use '../../../../assets/scss/predefine/flex';
@use '../../../../assets/scss/predefine/zindex';
@use '../../../../assets/scss/predefine/text';
@use '../../../../assets/scss/var';

.wrapper-ingredient {
  @include flex.around-center;
  flex-wrap: wrap;
  gap: 2em;
  width: 100%;
  margin-top: 3em;
  padding-bottom: 2em;
  .wrapper-img-section {
    @include flex.center-center(column);
    gap: 1em;
    .photo {

    }
    .counter {

    }
  }
  .content {
    width: 250px;
    .title {
      margin-bottom: .5em;
      font-size: 1.4em;
      font-weight: 500;
      text-align: center;
      text-transform: capitalize;
    }
    .desc {

    }
  }
}
</style>
