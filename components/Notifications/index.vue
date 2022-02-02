<template>
  <div class="wrapper-index">
    <NotificationsSection
      v-for="section in notifications"
      :key="section.title"
      :section="section"
      class="notification"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex'

export default Vue.extend({
  computed: {
    ...mapGetters({
      notifications: 'notification/getList'
    })
  }
})
</script>

<style lang="scss" scoped>
.wrapper-index {
  margin-top: 1.5em;
  .notification {
    margin: {
      left: auto;
      right: auto;
    }
    width: 90%;
  }
}
</style>
