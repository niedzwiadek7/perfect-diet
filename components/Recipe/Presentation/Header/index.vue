<template>
  <div class="wrapper-header">
    <h3 class="title">
      {{ recipe.name }}
    </h3>

    <div class="details">
      <span class="category">
        {{ recipe.category }}
      </span>
      <span class="time">
        {{ recipe.time }} minut
      </span>
    </div>

    <div class="author">
      <figure class="figure">
        <img
          :src="author.photo"
          alt=""
          class="img"
        >
        <figcaption
          class="full-name"
        >
          {{ fullName() }}
        </figcaption>
      </figure>
      <div class="grade">
        <RecipePresentationStars
          v-model="rate"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex'

export default Vue.extend({
  data () {
    return {
      rate: 3 as number // FIXME should be value from store
    }
  },
  computed: {
    ...mapGetters({
      recipe: 'recipe/getRecipes',
      author: 'recipe/getAuthor'
    })
  },
  methods: {
    fullName (): String {
      return `${this.author.firstName} ${this.author.lastName}`
    }
  }
})
</script>

<style lang="scss" scoped>
@use './assets/scss/var';
@use './assets/scss/predefine/flex';

.wrapper-header {
  .title {
    margin-bottom: .3em;
    font-size: 1.6em;
    color: var.$light-text-5;
    text-transform: capitalize;
  }
  .details {
    margin-bottom: 1.2em;
    font-size: 1.1em;
    color: var.$light-text-6;
    .category {
      text-transform: capitalize;
      &::after {
        content: "•";
        font-weight: 900;
        padding: 0 .3em;
        color: var.$light-text-6;
      }
    }
    .time {

    }
  }
  .author {
    @include flex.between-center;
    .figure {
      @include flex.center-center;
      .img {
        width: 35px;
        height: 35px;
        border-radius: 50%;
        object-fit: cover;
      }
      .full-name {
        margin-left: .5em;
        font-size: 1.3em;
        font-weight: 600;
        color: var.$light-text-3;
      }
    }
    .grade {
      font-size: 1.2em;
    }
  }
}
</style>
