<template>
  <header class="header">
    <h2 class="title">
      {{ title }}
    </h2>
    <div class="desc">
      {{ desc }}
    </div>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  computed: {
    title () {
      return this.$store.state.pageData.header.title
    },
    desc () {
      return this.$store.state.pageData.header.desc
    }
  }
})
</script>

<style lang="scss" scoped>
@use './assets/scss/predefine/flex';
@use './assets/scss/var';

.header {
  @include flex.center-center(column);
  margin-bottom: 1.5rem;

  .title {
    margin-bottom: .8rem;
    color: var.$light-text-3;
    font-size: 1.6rem;
    font-weight: 700;
  }

  .desc {
    color: var.$light-text-7;
  }
}
</style>
