<template>
  <div class="form-wrapper">
    <main class="form">
      <UIInput
        v-model="user.email"
        type="email"
        placeholder="Email lub numer telefonu"
        class="input login"
      >
        <UIIconsLoginEmail slot="icon" class="icon" />
      </UIInput>
      <UIInput
        v-model="user.password"
        type="password"
        placeholder="Hasło"
        class="input password"
      >
        <UIIconsLoginPassword slot="icon" class="icon" />
      </UIInput>

      <NuxtLink to="/login/email" class="forgot-password">
        Zapomniałeś hasła?
      </NuxtLink>

      <UIButtonSimple class="login-button">
        <span class="caption">
          Zaloguj się
        </span>
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
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import LoginData from '@/assets/interface/User/login/LoginData';

export default Vue.extend({
  data () {
    return {
      user: {
        email: '',
        password: ''
      } as LoginData
    }
  }
})
</script>

<style lang="scss" scoped>
@use './assets/scss/var';
@use './assets/scss/predefine/flex';
@use './assets/scss/predefine/link';

.form-wrapper {
  .form {
    @include flex.center-center(column);
    .input {
      margin-bottom: 1.5em;
      width: min(100%, 350px);
      .icon {
        --icon-color: #666; // FIXME powinna być przypisana wartość SCSS
      }
    }
    .forgot-password {
      @include link.reset(var.$text);
      align-self: end;
      font-weight: 500;
    }
    .login-button {
      margin-top: 5em;
      width: min(100%, 350px);
      --bgColor: #1FCC79; // FIXME powinna być przypisana wartość SCSS
      --color: #fff;
    }
    .option {
      margin-top: 2em;
      color: var.$light-text-10;
      font-size: .9em;
    }
    .login-google-button {
      margin-top: 2em;
      width: min(100%, 350px);
      --bgColor: #FF5842; // FIXME powinna być przypisana wartość SCSS
      --color: #fff;
      .wrapper {
        .google-icon {
          margin-right: .5em;
        }
      }
    }
    .no-account {
      margin-top: 2em;
      font-weight: 500;
      .register-link {
        @include link.reset(var.$main);
        font-weight: 700;
      }
    }
  }
}
</style>
