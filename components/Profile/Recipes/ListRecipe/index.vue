<template>
  <ul
    v-if="!isEmpty"
    class="wrapper-list-recipe"
  >
    <li
      v-for="element in list"
      :key="element._id"
      class="element-wrapper"
    >
      <ProfileRecipesListRecipeElement
        class="element"
        :recipe="element"
        :option="option"
      />
    </li>
  </ul>
  <div
    v-else
    class="wrapper-no-recipes"
  >
    <UIIconsNoFound class="no-found-icon" />
    <h4 class="title">
      {{
        option === 'Przepisy' ?
          'Nie dodałeś jeszcze żadnego przepisu' :
          'Brak wyników'
      }}
    </h4>
    <div class="add-new-recipe">
      <span class="text">
        {{
          option === 'Przepisy' ?
            'Utwórz nowy przepis jednym kliknięciem' :
            'Polub innych użytkowników, by znaleźć coś dla siebie w tej kategorii'
        }}
      </span>
      <NuxtLink
        :to="option === 'Przepisy' ? `recipes/new` : `user/list`"
      >
        <UIButtonSimple
          class="button"
        >
          {{
            option === 'Przepisy' ?
              'Dodaj' :
              'Polub'
          }}
        </UIButtonSimple>
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { mapGetters, mapState } from 'vuex'
import Recipe from '@/assets/interface/Recipe/Recipe'
import { CategoryRecipes } from '@/assets/interface/Content/User/Profile'

export default Vue.extend({
  props: {
    option: {
      type: String as PropType<CategoryRecipes>,
      required: true
    }
  },
  computed: {
    ...mapState('user/recipes', {
      list: (state: any): Array<Recipe> => state.list
      // FIXME find correct type to state
    }),
    ...mapGetters({
      isEmpty: 'user/recipes/isEmpty'
    })
  }
})
</script>

<style lang="scss" scoped>
@use './assets/scss/predefine/list';
@use './assets/scss/predefine/flex';

.wrapper-list-recipe {
  @include list.reset;
  @include flex.around-center;
  flex-wrap: wrap;
  gap: 1em;
  padding: 2em;
  .element-wrapper {
    // FIXME resolve problem with resizing
    flex-basis: 160px;
    padding-bottom: 1.3em;
    .element {
    }
  }
}
.wrapper-no-recipes {
  @include flex.center-center(column);
  width: 100%;
  margin-top: 1.5em;
  padding: 2em;
  .no-found-icon {
    width: 75%;
    height: auto;
  }
  .title {
    text-align: center;
    margin-top: .8em;
    font-size: 1.5em;
    font-weight: 600;
  }
  .add-new-recipe {
    @include flex.center-center(column);
    margin-top: 1.2em;
    .text {
      text-align: center;
      font-size: 1.05em;
    }
    .button {
      margin-top: .8em;
      padding: {
        left: 5em;
        right: 5em;
      }
      --bgColor: #1FCC79; // FIXME powinna być przypisana wartość SCSS var.$main
      --color: #fff;
    }
  }
}
</style>
