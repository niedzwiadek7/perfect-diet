<template>
  <RegisterForm />
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  layout: 'UnLogged',
  head () {
    return {
      title: 'Zarejestruj się'
    }
  },
  created () {
    this.$store.commit('pageData/header/setTitle', 'Witamy!')
    this.$store.commit('pageData/header/setDesc', 'Podaj swoje dane, by się zarejestrować')
  }
})
</script>
