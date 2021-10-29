<template>
  <div class="wrapper-user">
    <div
      class="share"
      @click="modals.share = true"
    >
      <font-awesome-icon
        class="icon"
        :icon="['fas', 'share-alt']"
      />
    </div>
    <UIModal v-model="modals.share">
      <UIModalShare
        :link-path="getLinkPath()"
      />
    </UIModal>
    <figure class="user-image">
      <img
        class="image"
        src="https://i.imgur.com/sXBzKaD.png"
        alt=""
      >
      <figcaption class="user-full-name">
        Kaguya Shinomiya
      </figcaption>
    </figure>
    <div class="details">
      <div class="element recipes">
        <span class="count"> {{ formatNumber(32) }} </span>
        <span class="desc"> Recipes </span>
      </div>
      <div class="element following">
        <span class="count"> {{ formatNumber(782) }} </span>
        <span class="desc"> Following </span>
      </div>
      <div class="element followers">
        <span class="count"> {{ formatNumber(1287) }} </span>
        <span class="desc"> Followers </span>
      </div>
    </div>
    <UIButtonSimple
      v-if="abilityFollower"
      class="follow-button"
    >
      Follow
    </UIButtonSimple>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    abilityFollower: {
      type: Boolean,
      required: true
    }
  },
  data () {
    return {
      modals: {
        share: false as boolean
      }
    }
  },
  methods: {
    getLinkPath (): String {
      return this.$route.path
    },
    formatNumber (value: number): String {
      if (value === 0) {
        return '0'
      }
      let result: String = ''
      while (value !== 0) {
        result = `${value % 1000} ${result}`
        value = Math.floor(value / 1000)
      }
      return result
    }
  }
})
</script>

<style lang="scss" scoped>
@use '../../../assets/scss/predefine/flex';
@use '../../../assets/scss/var';

.wrapper-user {
  @include flex.center-center(column);
  margin: 1.5em 2em;
  .share {
    align-self: flex-end;
    cursor: pointer;
    margin-bottom: 1.5em;
    .icon {
      font-size: 1.7em;
      color: var.$light-text-6;
    }
    &:hover, &:focus {
      .icon {
        color: var.$main;
      }
    }
  }
  .user-image {
    @include flex.center-center(column);
    .image {
      width: 100px;
      height: 100px;
      margin-bottom: 2em;
      border-radius: 50%;
      object-fit: cover;
    }
    .user-full-name {
      margin-bottom: 2.5em;
      font-size: 1.4em;
      font-weight: 600;
      color: var.$light-text-5;
    }
  }
  .details {
    @include flex.around-center;
    width: min(100%, 400px);
    margin-bottom: 2.5em;
    .element {
      @include flex.center-center(column);
      .count {
        font-size: 1.5em;
        font-weight: 600;
        color: var.$light-text-5;
      }
      .desc {
        color: var.$light-text-7;
      }
    }
  }
  .follow-button {
    --bgColor: #1FCC79FF; // FIXME should be there SCSS property var.$main;
    --color: #fff;
    width: min(100%, 300px);
    margin-bottom: 1.2em;
  }
}
</style>
