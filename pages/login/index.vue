<template>
  <LoginForm />
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  layout: 'UnLogged',
  head () {
    return {
      title: 'Zaloguj się'
    }
  },
  created () {
    this.$store.commit('pageData/header/setTitle', 'Witaj ponownie!')
    this.$store.commit('pageData/header/setDesc', 'Podaj swoje dane, by się zalogować')
  }
})
</script>
