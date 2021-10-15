<template>
  <main class="form">
    <UIInput
      v-model="login"
      type="email"
      placeholder="Email lub numer telefonu"
      class="input login"
      style="margin-bottom: 10px;"
    >
      <UIIconsLoginEmail slot="icon" style="--icon-color: #666" />
    </UIInput>
    <UIInput
      v-model="password"
      type="password"
      placeholder="Hasło"
      class="input password"
    >
      <UIIconsLoginPassword slot="icon" style="--icon-color: #666" />
    </UIInput>

    <span class="forgot-password">
      Zapomniałeś hasła?
    </span>

    <UIButtonSimple class="login-button">
      Zaloguj się
    </UIButtonSimple>

    <div class="option">
      Lub zaloguj się przez
    </div>

    <UIButtonSimple class="login-google-button">
      <span class="wrapper">
        <font-awesome-icon
          :icon="['fab', 'google']"
          class="google-icon"
        />
        <span class="caption"> Google </span>
      </span>
    </UIButtonSimple>

    <div class="no-account">
      Nie masz konta?
      <NuxtLink class="register-link" to="/register">
        Zarejestruj się
      </NuxtLink>
    </div>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      login: '' as String,
      password: '' as String
    }
  }
})
</script>

<style scoped>

</style>
