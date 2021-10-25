<template>
  <div class="wrapper-form">
    <UIInput
      v-model="email"
      type="email"
      placeholder="Podaj swój email"
      class="input"
    >
      <UIIconsLoginEmail slot="icon" class="icon" />
    </UIInput>
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
      email: '' as String
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
  margin-top: 3.5em;
  .input {
    width: min(325px, 100%);
    .icon {
      --icon-color: #666; // FIXME powinna być przypisana wartość SCSS
    }
  }
  .button {
    --bgColor: #1FCC79; // FIXME powinna być przypisana wartość SCSS var.$main
    --color: #fff;
    width: min(325px, 100%);
    margin-top: 2em;
  }
}
</style>
