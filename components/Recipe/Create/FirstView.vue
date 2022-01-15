<template>
  <div class="wrapper-first-view">
    <UIInputPhotoMany
      :value="value.photo"
      title="Dodaj zdjęcia potrawy"
      max-size="12"
      class="photo"
      @input="photo => update('photo', photo)"
    >
      <UIIconsRegisterPhoto slot="icon" class="icon" />
    </UIInputPhotoMany>

    <div class="input-section name">
      <h3 class="title">
        Nazwa przepisu
      </h3>
      <UIInput
        :value="value.name"
        placeholder="Podaj nazwę przepisu"
        type="text"
        class="input"
        @input="name => update('name', name)"
      />
    </div>

    <div class="input-section description">
      <h3 class="title">
        Opis
      </h3>
      <UIInputTextArea
        :value="value.description"
        :max-length="350"
        class="input"
        @input="description => update('description', description)"
      />
    </div>

    <div class="input-section category">
      <h3 class="title">
        Kategoria
      </h3>
      <UIInputSelect
        :value="value.category"
        :options="category"
        class="input"
        @input="category => update('category', category)"
      />
    </div>

    <div class="input-section difficulty">
      <h3 class="title">
        Trudność wykonania
      </h3>
      <UIInputSelect
        :value="value.difficulty"
        :options="difficulty"
        class="input"
        @input="difficulty => update('difficulty', difficulty)"
      />
    </div>

    <div class="input-section time">
      <h3 class="title">
        Czas przygotowania
        <span class="desc">
          ( w minutach )
        </span>
      </h3>
      <UIInputRange
        :value="value.time"
        :min-value="5"
        :max-value="180"
        :step="5"
        class="input"
        @input="time => update('time', time)"
      />
    </div>

    <div class="input-section serving">
      <h3 class="title">
        Ilość porcji
      </h3>
      <UIInputRange
        :value="value.serving"
        :min-value="1"
        :max-value="12"
        :step="1"
        class="input"
        @input="serving => update('serving', serving)"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import Recipe from '@/assets/interface/Recipe/Recipe'
import Difficulty from '@/assets/interface/enums/Recipe/Difficulty'
import Category from '@/assets/interface/enums/Recipe/Category'

export default Vue.extend({
  props: {
    value: {
      type: Object as PropType<Recipe>,
      required: true
    }
  },
  data () {
    return {
      difficulty: Difficulty,
      category: Category
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
@use './assets/scss/predefine/flex';
@use './assets/scss/var';

.wrapper-first-view {
  @include flex.center-center(column);
  padding: {
    top: 1em;
    bottom: 1em;
    left: 1em;
    right: 0;
  }
  * {
    width: 95%;
  }
  .photo {
    margin-bottom: 1.5em;
    .icon {
      --icon-color: #666; // FIXME powinna być przypisana wartość SCSS
    }
  }
  .input-section {
    margin-bottom: 1.5em;
    .title {
      margin-bottom: .75em;
      font-weight: 600;
      .desc {
        font-size: 0.9em;
        font-weight: 400;
        color: var.$light-text-7;
      }
    }
    .input {

    }
  }
}
</style>
