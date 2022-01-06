<template>
  <div class="wrapper-ingredients">
    <h3 class="title">
      Składniki
    </h3>
    <ul class="list">
      <li
        v-for="ingredient in ingredients"
        :key="ingredient._id"
        class="ingredient"
      >
        <input
          :id="`ingredient${ingredient._id}`"
          v-model="addToShoppingList"
          type="checkbox"
          :value="ingredient"
          class="input-ingredient"
        >
        <label
          :for="`ingredient${ingredient._id}`"
          class="label"
        >
          <span class="wrapper-icon">
            <font-awesome-icon
              :icon="['fas', 'check']"
              class="icon"
            />
          </span>
        </label>
        <span
          class="name"
          @click="activeIngredientString = ingredient.name"
        >
          {{ ingredient | ingredientInRecipe }}
        </span>
      </li>
    </ul>
    <div
      title="Synchronizuj z listą zakupów"
      class="sync"
      @click="syncWithShoppingList()"
    >
      <font-awesome-icon
        :icon="['fas', 'sync']"
        class="icon"
      />
    </div>
    <UIModalOverlayBasic v-model="showModal">
      <UIModalIngredient
        :element="activeElement"
      />
    </UIModalOverlayBasic>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { mapGetters } from 'vuex'
import Element from '~/assets/interface/Content/Search/Element'
import IngredientInRecipe from '@/assets/interface/Recipe/IngredientInRecipe'
import { createElementFromIngredient } from '~/utils/constructors/store/search/Element'

export default Vue.extend({
  filters: {
    ingredientInRecipe: (value: IngredientInRecipe): string => {
      return `${value.quantity} ${value.unit} ${value.name}`
    }
  },
  props: {
    ingredients: {
      type: Array as PropType<Array<IngredientInRecipe>>,
      required: true
    }
  },
  data () {
    return {
      addToShoppingList: [] as Array<IngredientInRecipe>,
      showModal: false as boolean,
      activeIngredientString: '' as String
    }
  },
  computed: {
    ...mapGetters({
      activeIngredient: 'ingredient/getIngredient'
    }),
    activeElement (): Element {
      return createElementFromIngredient(this.activeIngredient)
    }
  },
  watch: {
    activeIngredientString: {
      async handler (newValue: String) {
        await this.$store.dispatch('ingredient/getIngredient', {
          app: this,
          name: newValue
        })
        this.showModal = true
      },
      immediate: false
    }
  },
  methods: {
    syncWithShoppingList () {
      this.addToShoppingList = []
    }
  }
})
</script>

<style lang="scss" scoped>
@use './assets/scss/predefine/flex';
@use './assets/scss/predefine/list';
@use './assets/scss/predefine/position';
@use './assets/scss/predefine/zindex';
@use './assets/scss/var';

.wrapper-ingredients {
  position: relative;
  padding: {
    top: .7em;
    bottom: 1em;
  }
  .title {
    font-size: 1.3em;
    color: var.$light-text-7;
    padding-bottom: .4em;
  }
  .list {
    @include list.reset;
    margin-left: .7em;
    .ingredient {
      @include flex.start-center;
      margin-bottom: .4em;
      .input-ingredient {
        display: none;
        &:checked + .label {
          .wrapper-icon {
            .icon {
              color: var.$main;
              opacity: 1;
            }
            &::after {
              opacity: 1;
            }
          }
        }
      }
      .label {
        margin-right: .8em;
        .wrapper-icon {
          @include flex.center-center;
          position: relative;
          width: 1.5em;
          height: 1.5em;
          background: rgba(var.$light-text-3, .2);
          border-radius: 50%;
          .icon {
            font-size: .7em;
            opacity: 0;
            transition: .2s ease-in-out;
            z-index: zindex.$z-index-2;
          }
          &::after {
            content: '';
            @include position.full-fill;
            background-color: lighten(var.$main, 45%);
            border-radius: 50%;
            opacity: 0;
            transition: .2s ease-in-out;
            will-change: opacity;
            z-index: zindex.$z-index-1;
          }
        }
      }
      .name {
        font-weight: 500;
        color: var.$light-text-3;
      }
    }
  }
  .sync {
    @include position.top-right(1em, 1.3em);
    cursor: pointer;
    .icon {
      color: lighten(var.$main, 10%);
      font-size: 1.5em;
      &:hover {
        color: var.$main;
      }
    }
  }
}
</style>
