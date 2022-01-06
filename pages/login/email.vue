<template>
  <LoginEmailForm />
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
    this.$store.commit('pageData/header/setTitle', 'Przywracanie hasła')
    this.$store.commit('pageData/header/setDesc', 'Wpisz swój email aby odzyskać swoje hasło')
  }
})
</script>
