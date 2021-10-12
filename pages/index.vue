<template>
  <div class="wrapper">
    <MainPageHeader />
    <MainPageContent />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  head () {
    return {
      title: 'Perfect diet'
    }
  }
})
</script>

<style lang="scss" scoped>
@use './assets/scss/predefine/flex';

.wrapper {

}
</style>
