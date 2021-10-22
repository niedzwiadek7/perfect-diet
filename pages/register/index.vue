<template>
  <div class="wrapper">
    <div class="wrapper-components">
      <RegisterHeader class="component-header" />
      <RegisterForm class="component-form" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  head () {
    return {
      title: 'Zarejestruj się'
    }
  }
})
</script>

<style lang="scss" scoped>
@use './assets/scss/predefine/flex';

.wrapper {
  @include flex.center-center(column);
  margin: 2rem;

  .wrapper-components {
    width: min(100%, 400px);
    .component-header {
      margin-bottom: 3rem;
    }
    .component-form {
      width: 100%;
    }
  }
}

@media (min-width: 440px) {
  .wrapper {
    .wrapper-components {
      padding: {
        left: 20px;
        right: 20px;
      };
    }
  }
}
</style>
