<template>
  <div class="wrapper-steps">
    <h3 class="title">
      Składniki
    </h3>

    <Draggable
      class="draggable"
      :value="value"
      handle=".moving"
      ghost-class="ghost"
      @input="v => $emit('input', v)"
    >
      <div
        v-for="(element, n) in value"
        :key="n"
        class="step"
      >
        <div class="control">
          <div class="moving">
            <font-awesome-icon
              v-for="x in 2"
              :key="x"
              :icon="['fas', 'ellipsis-v']"
              class="icon"
            />
          </div>
          <div
            class="delete"
            @click="deleteStep(n)"
          >
            <font-awesome-icon
              :icon="['fas', 'times']"
              class="icon"
            />
          </div>
        </div>
        <div class="input">
          <UIInput
            type="text"
            :value="element.name"
            placeholder="Wpisz składnik"
            class="input-input"
            @input="v => inputName(n, v)"
          />
          <div class="details">
            <UIInputCounter
              :value="element.quantity"
              class="quantity"
              @input="v => inputQuantity(n, v)"
            />
            <UIInputSelect
              :value="element.unit"
              :options="unit"
              class="unit"
              @input="v => inputUnit(n, v)"
            />
          </div>
        </div>
      </div>
    </Draggable>

    <UIButtonSimple
      class="button"
      @click="addIngredient()"
    >
      <font-awesome-icon
        :icon="['fas', 'plus']"
        class="icon"
      />
      <span class="desc">
        Dodaj krok
      </span>
    </UIButtonSimple>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import Draggable from 'vuedraggable'
import Ingredient from '@/assets/interface/Recipe/IngredientInRecipe'
import Unit from '@/assets/interface/enums/Recipe/Unit'

export default Vue.extend({
  components: {
    Draggable
  },
  props: {
    value: {
      type: Array as PropType<Array<Ingredient>>,
      required: true
    }
  },
  data () {
    return {
      unit: Unit,
      IngredientSchema: {
        name: '',
        quantity: 1,
        unit: Unit.kg
      } as Ingredient
    }
  },
  created () {
    if (this.value.length === 0) {
      for (let i = 0; i < 2; i++) {
        this.addIngredient()
      }
    }
  },
  methods: {
    inputName (n: number, value: string) {
      const array: Array<Ingredient> = this.value
      array[n].name = value
      this.$emit('input', array)
    },
    inputQuantity (n: number, value: number) {
      const array: Array<Ingredient> = this.value
      array[n].quantity = value
      this.$emit('input', array)
    },
    inputUnit (n: number, value: Unit) {
      const array: Array<Ingredient> = this.value
      array[n].unit = value
      this.$emit('input', array)
    },
    addIngredient () {
      const array: Array<Ingredient> = this.value
      array.push({ ...this.IngredientSchema })
      this.$emit('input', array)
    },
    deleteStep (n: number) {
      const array: Array<Ingredient> = this.value
      array.splice(n, 1)
      this.$emit('input', array)
    }
  }
})
</script>

<style lang="scss" scoped>
@use './assets/scss/predefine/flex';
@use './assets/scss/var';

.wrapper-steps {
  .title {
    margin-bottom: 1.5em;
    font-weight: 600;
  }
  .draggable {
    width: 95%;
    margin-bottom: 2.5em;
    .ghost {
      opacity: 0;
    }
    .step {
      @include flex.center-center;
      margin-bottom: 1.5em;
      .control {
        @include flex.center-center(column);
        width: 2em;
        align-self: start;
        margin: {
          right: .7em;
          top: .3em;
        }
        .moving {
          margin-bottom: .5em;
          .icon {
            margin-left: 1px;
            color: var.$light-text-7;
          }
        }
        .delete {
          cursor: pointer;
          .icon {
            font-size: 1.2em;
            color: var.$light-text-7;
          }
        }
      }
      .input {
        .input-input {
          margin-bottom: .25em;
        }
        .details {
          @include flex.around-center;
          .quantity {
            width: 40%;
          }
          .unit {
            width: 50%;
          }
        }
      }
    }
  }
  .button {
    width: 100%;
    background-color: var.$light-text-16;
    color: var.$text;
    border: 2px solid var.$light-text-10;
  }
}
</style>
