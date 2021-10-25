<template>
  <div class="wrapper-form">
    <UIInput
      v-model="password"
      type="password"
      placeholder="Podaj nowe hasło"
      class="input"
    >
      <UIIconsLoginPassword slot="icon" class="icon" />
    </UIInput>
    <RegisterFlags class="flags" />
    <UIButtonSimple
      class="button"
      @click="sendEmail()"
    >
      Wyślij kod weryfikacyjny
    </UIButtonSimple>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      password: '' as String
    }
  },
  methods: {
    sendEmail () {
      this.$router.push('/login/verify')
    }
  }
})
</script>

<style lang="scss" scoped>
@use './assets/scss/predefine/flex';

.wrapper-form {
  @include flex.center-center(column);
  width: min(400px, 100%);
  padding: {
    left: 1em;
    right: 1em;
  }
  margin-top: 2em;
  .input {
    width: min(325px, 100%);
    .icon {
      --icon-color: #666; // FIXME powinna być przypisana wartość SCSS
    }
  }
  .flags {
    margin-top: 2em;
  }
  .button {
    --bgColor: #1FCC79; // FIXME powinna być przypisana wartość SCSS var.$main
    --color: #fff;
    width: min(325px, 100%);
    margin-top: 3em;
  }
}
</style>
