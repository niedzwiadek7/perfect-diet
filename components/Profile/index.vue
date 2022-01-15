<template>
  <div class="wrapper-profile">
    <ProfileUser
      class="profile"
      :ability-follower="abilityFollower"
    />
    <UISeparationSpacing
      class="spacing"
    />
    <ProfileRecipes
      :allow-liked="allowLiked"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      abilityFollower: true as boolean,
      allowLiked: true as boolean
    }
  }
})
</script>

<style lang="scss" scoped>
.wrapper-profile {
  .profile {

  }
  .spacing {
    --height: 4px;
    --color: #ddd; // FIXME should be SCSS property var.$light-text-14
  }
}
</style>
