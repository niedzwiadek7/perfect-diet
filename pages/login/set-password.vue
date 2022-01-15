<template>
  <LoginSetPasswordForm />
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  layout: 'UnLogged',
  head () {
    return {
      title: 'Zresetuj hasło'
    }
  },
  created () {
    this.$store.commit('pageData/header/setTitle', 'Zresetuj hasło')
    this.$store.commit('pageData/header/setDesc', 'Wpisz swoje nowe hasło')
  }
})
</script>
