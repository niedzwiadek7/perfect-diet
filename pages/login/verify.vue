<template>
  <div class="reset">
    <LoginResetForm />
  </div>
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
    this.$store.commit('pageData/header/setTitle', 'Sprawdź swój email')
    this.$store.commit('pageData/header/setDesc', 'Wysłaliśmy kod weryfikacyjny na twój email')
  }
})
</script>
