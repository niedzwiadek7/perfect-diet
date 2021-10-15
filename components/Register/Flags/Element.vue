<template>
  <div class="flag-wrapper">
    <span class="icon-wrapper">
      <font-awesome-icon
        :icon="['fas', 'check']"
        class="icon"
      />
    </span>
    <span class="desc">
      {{ value }}
    </span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    value: {
      type: String,
      required: true
    }
  }
})
</script>

<style scoped>

</style>
