<template>
  <nav class="wrapper-menu">
    <ul class="list-menu">
      <li class="element-wrapper">
        <LayoutUserMenuElement
          link="/"
          value="Profil"
          class="wrapper"
        >
          <font-awesome-icon
            slot="icon"
            class="icon"
            :icon="['fas', 'user']"
          />
        </LayoutUserMenuElement>
      </li>

      <li class="element-wrapper">
        <LayoutUserMenuElement
          link="/recipe/new"
          value="Dodaj nowy"
          class="wrapper"
        >
          <font-awesome-icon
            slot="icon"
            class="icon"
            :icon="['fas', 'pencil-alt']"
          />
        </LayoutUserMenuElement>
      </li>

      <li class="element-wrapper">
        <LayoutUserMenuElement
          link="/menu"
          value="Twoje menu"
          class="wrapper"
        >
          <font-awesome-icon
            slot="icon"
            class="icon"
            :icon="['fas', 'hamburger']"
          />
        </LayoutUserMenuElement>
      </li>

      <li
        class="element-wrapper"
        @click="showSearch = true"
      >
        <LayoutUserMenuElement
          link="#"
          value="Wyszukaj"
          class="wrapper"
        >
          <font-awesome-icon
            slot="icon"
            class="icon"
            :icon="['fas', 'search']"
          />
        </LayoutUserMenuElement>
      </li>

      <UIModalOverlayDefault
        v-model="showSearch"
      >
        <UIModalSearch />
      </UIModalOverlayDefault>

      <li class="element-wrapper">
        <LayoutUserMenuElement
          link="/notifications"
          value="Powiadomienia"
          class="wrapper"
        >
          <font-awesome-icon
            slot="icon"
            class="icon"
            :icon="['fas', 'bell']"
          />
        </LayoutUserMenuElement>
      </li>

      <li class="element-wrapper">
        <LayoutUserMenuElement
          link="/shopping-list"
          value="Lista zakupów"
          class="wrapper"
        >
          <font-awesome-icon
            slot="icon"
            class="icon"
            :icon="['fas', 'shopping-cart']"
          />
        </LayoutUserMenuElement>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      showSearch: false as boolean
    }
  }
})
</script>

<style lang="scss" scoped>
@use './assets/scss/predefine/position';
@use './assets/scss/predefine/flex';
@use './assets/scss/predefine/zindex';
@use './assets/scss/predefine/list';
@use './assets/scss/var';

.wrapper-menu {
  @include position.fixed-bottom-left(0, 0);
  background-color: var.$light-text-16;
  width: 100%;
  padding: {
    bottom: 1em;
    top: 1em;
  }
  z-index: zindex.$z-index-10;
  .list-menu {
    @include flex.around-center;
    @include list.reset;
    .element-wrapper {
      .wrapper {
        .icon {
          font-size: 1.5em;
        }
      }
    }
  }
}
</style>
