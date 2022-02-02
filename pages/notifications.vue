<template>
  <client-only>
    <div
      v-if="$fetchState.pending"
      class="full-fill"
    >
      <UILoading
        class="loading"
      />
    </div>

    <div
      v-else-if="$fetchState.error"
    >
      <UIErrorsNotFound
        v-if="$fetchState.error.response.status === 404"
        class="not-found"
      />
      <UIErrorsServerError
        v-else
        class="server-error"
      />
    </div>

    <Notifications
      v-else
    />
  </client-only>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  layout: 'UserMenu',
  async fetch (): Promise<void> {
    const { store, app } = this.$nuxt.context
    await store.dispatch('notification/getNotifications', {
      app
    })
  }
})
</script>

<style lang="scss" scoped>
@use './assets/scss/predefine/flex';
@use './assets/scss/predefine/position';
@use './assets/scss/var';

.full-fill {
  @include position.full-fill;
  @include flex.center-center;
  width: 100vw;
  height: 100vh;
  .loading {
    --color: #1FCC79; // FIXME should be SCSS property var.$main
    --size: 8px;
  }
}
</style>
