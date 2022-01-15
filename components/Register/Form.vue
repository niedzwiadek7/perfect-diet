<template>
  <div class="form-wrapper">
    <main class="form">
      <UIInput
        v-model="user.fullName"
        type="email"
        placeholder="Imię i nazwisko"
        class="input user"
      >
        <UIIconsRegisterUser slot="icon" class="icon" />
      </UIInput>

      <UIInputPhoto
        v-model="user.photo"
        class="photo"
        title="Dodaj swoje zdjęcie"
        max-size="do 12MB"
      >
        <UIIconsRegisterPhoto slot="icon" class="icon" />
      </UIInputPhoto>

      <UIInputTextArea
        v-model="user.description"
        placeholder="Opisz siebie w kilku słowach"
        :max-length="500"
        class="textarea"
      />

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

      <UIInput
        v-model="user.controlPassword"
        type="password"
        placeholder="Powtórz hasło"
        class="input password"
      >
        <UIIconsLoginPassword slot="icon" class="icon" />
      </UIInput>

      <UIInputCheckBox
        v-model="user.confirmStatute"
        label="Zaakceptuj regulamin"
        class="confirm-statute"
      />

      <RegisterFlags class="flags" />

      <UIButtonSimple
        class="login-button"
        @click="register()"
      >
        <span class="caption">
          Zarejestruj się
        </span>
      </UIButtonSimple>

      <div class="option">
        Lub zarejestruj się przez
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
        Masz już konto?
        <NuxtLink class="login-link" to="/login">
          Zaloguj się
        </NuxtLink>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import RegisterData from '@/assets/interface/User/register/UserData'

export default Vue.extend({
  data () {
    return {
      user: {
        fullName: '',
        firstName: '',
        lastName: '',
        email: '',
        photo: null, // zrobic
        description: '', // zrobic
        password: '',
        controlPassword: '',
        confirmStatute: false
      } as RegisterData
    }
  },
  watch: {
    'user.fullName' (value: string) {
      const arr: Array<string> = value.split(' ')

      // find lastName
      if (arr.length > 1) {
        const lastName: (string | undefined) = arr.pop()
        if (lastName !== undefined) {
          this.user.lastName = lastName
        }
      }

      this.user.firstName = arr.join()
    }
  },
  methods: {
    register () {
      this.$router.push('/register/verify')
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
    .input, .photo {
      margin-bottom: 1.5em;
      width: min(100%, 350px);
      .icon {
        --icon-color: #666; // FIXME powinna być przypisana wartość SCSS
      }
    }
    .textarea {
      margin-bottom: 1.5em;
      width: min(100%, 350px);
    }
    .forgot-password {
      @include link.reset(var.$text);
      align-self: end;
      font-weight: 500;
    }
    .flags {
      margin-top: 2em;
    }
    .login-button {
      margin-top: 3em;
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
      .login-link {
        @include link.reset(var.$main);
        font-weight: 700;
      }
    }
  }
}
</style>
