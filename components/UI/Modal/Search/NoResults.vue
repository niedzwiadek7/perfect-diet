<template>
  <div class="wrapper-no-results">
    <UIIconsSearchNoResults
      class="icon"
    />

    <div class="info">
      <h4 class="title">
        Nie znaleziono wyników
      </h4>

      <div class="desc">
        Spróbuj wyszukać inną frazę
        <ul class="list">
          <li
            v-for="element in anotherSearch"
            :key="element"
            class="element"
            @click="$emit('changeInput', element)"
          >
            {{ element }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      anotherSearch: [
        'bułka',
        'jajko',
        'szarlotka'
      ]
    }
  }
})
</script>

<style lang="scss" scoped>
@use './assets/scss/predefine/flex';
@use './assets/scss/var';

.wrapper-no-results {
  @include flex.center-center(column);
  width: 100%;

  .icon {
    stroke: var.$light-text-10;
    margin-bottom: 3em;
  }

  .info {
    @include flex.center-center(column);
    width: 100%;

    .title {
      font-size: 1.2em;
      letter-spacing: 1px;
      font-weight: 500;
    }

    .desc {
      margin-top: 2em;
      font-size: 1em;
      color: var.$light-text-7;
      .list {
        margin-top: 1em;
        .element {
          font-size: 1.3em;
          font-weight: 500;
          color: var.$main;
          text-transform: capitalize;
          list-style-type: "» ";
          &::marker {
            color: var.$text;
          }
        }
      }
    }
  }
}
</style>
