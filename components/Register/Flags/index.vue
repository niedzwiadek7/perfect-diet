<template>
  <section class="requirement-flags">
    <header class="header-flags">
      <h5 class="header-flags-title">
        Hasło musi zawierać
      </h5>
    </header>
    <LoginFlagsElement value="Hasło nie może być puste" />
    <LoginFlagsElement value="Hasło musi mieć co najmniej 8 znaków" />
  </section>
</template>

<script>
export default {
  name: 'FlagsWrapper'
}
</script>

<style scoped>

</style>
