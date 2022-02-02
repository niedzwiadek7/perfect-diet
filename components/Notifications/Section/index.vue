<template>
  <section class="wrapper-section">
    <h2 class="title">
      {{ section.title }}
    </h2>
    <NotificationsSectionElement
      v-for="element in section.notifications"
      :key="element._id"
      :notification="element"
      class="element"
    />
  </section>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import Section from '~/assets/interface/Notification/Section'

export default Vue.extend({
  props: {
    section: {
      type: Object as PropType<Section>,
      required: true
    }
  }
})
</script>

<style lang="scss" scoped>
@use './assets/scss/var';

.wrapper-section {
  padding-bottom: .5em;
  .title {
    padding-bottom: 1em;
    font-size: 1.4em;
    font-weight: 600;
    color: var.$light-text-3;
  }
  .element {
    padding-bottom: 1em;
  }
}
</style>
