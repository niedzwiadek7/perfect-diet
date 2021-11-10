<template>
  <div
    class="wrapper-element"
    :class="isActive && 'active'"
  >
    <div class="photo">
      <img
        v-if="value.photo"
        class="img"
        :src="value.photo"
        alt=""
      >
      <font-awesome-icon
        v-else
        class="icon"
        :icon="pickIcon()"
      />
    </div>
    <div class="content">
      <div class="title">
        {{ value.name }}
      </div>
      <slot name="desc" />
    </div>
    <div class="active-sign">
      <font-awesome-icon
        :icon="['fas', 'level-down-alt']"
        class="icon"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import Element from '~/assets/interface/Content/Search/Element'
import Types from '~/assets/interface/Content/Search/Types'

export default Vue.extend({
  props: {
    value: {
      type: Object as PropType<Element>,
      required: true
    },
    isActive: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    pickIcon (): Array<string> {
      switch (this.value.type) {
        case Types.users:
          return ['fas', 'user']
        case Types.recipes:
          return ['fas', 'feather']
        case Types.ingredients:
          return ['fas', 'flask']
      }
    }
  }
})
</script>

<style lang="scss" scoped>
@use './assets/scss/predefine/text';
@use './assets/scss/predefine/flex';
@use './assets/scss/var';

.wrapper-element {
  @include flex.center-center;
  gap: 1em;
  width: 100%;
  padding: 1em 1em .6em;
  background-color: var.$light-text-16;
  border-radius: .5em;
  box-shadow: -12px 11px 24px -30px black;
  .photo {
    @include flex.center-center;
    width: 4.5em;
    height: 4em;
    .img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: .5em;
    }
    .icon {
      font-size: 2.5em;
      color: var.$light-text-5;
    }
  }
  .content {
    width: calc(100% - 6.5em);
    .title {
      @include text.ellipsis-text;
      font-size: 1.3em;
      text-transform: capitalize;
    }
  }
  .active-sign {
    display: none;
    margin-right: 1em;
    .icon {
      font-size: 1.3em;
      transform: rotate(90deg);
    }
  }
  &.active {
    background-color: var.$main;
    color: var.$text-on-main-light;
    .photo {
      .icon {
        color: var.$text-on-main-light;
      }
    }
    .active-sign {
      display: block;
    }
  }
}
</style>
