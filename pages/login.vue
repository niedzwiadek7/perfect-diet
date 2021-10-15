<template>
  <div class="wrapper">
    <LoginHeader />
    <LoginForm />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  head () {
    return {
      title: 'Zaloguj się'
    }
  }
})
</script>

<style lang="scss" scoped>
.wrapper {
  margin: 2rem;
}
</style>
