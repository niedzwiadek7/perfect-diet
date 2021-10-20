<template>
  <section class="requirement-flags">
    <header class="header-flags">
      <h4 class="header-flags-title">
        Hasło musi zawierać
      </h4>
    </header>
    <section class="section-flags">
      <RegisterFlagsElement
        class="flag"
        value="Hasło nie może być puste"
        :checked="true"
      />
      <RegisterFlagsElement
        class="flag"
        value="Hasło musi mieć co najmniej 8 znaków"
        :checked="false"
      />
    </section>
  </section>
</template>

<script>
export default {
  name: 'FlagsWrapper'
}
</script>

<style lang="scss" scoped>
@use './assets/scss/var';

.requirement-flags {
  .header-flags {
    margin-bottom: 1em;
    .header-flags-title {
      font-size: 1.2em;
      color: var.$light-text-3;
    }
  }
  .section-flags {
    .flag {
      margin-bottom: 1.2em;
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}
</style>
