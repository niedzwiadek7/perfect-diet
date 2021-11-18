<template>
  <div class="wrapper-search">
    <div class="wrapper-input-section">
      <UIInput
        ref="input"
        v-model="searchText"
        type="text"
        placeholder="Szukaj..."
        class="input"
      >
        <UIIconsSearch
          slot="icon"
          class="icon"
        />
      </UIInput>
      <button
        type="button"
        class="close-modal"
        @click="$emit('close')"
      >
        Zamknij
      </button>
    </div>

    <UIModalOverlayBasic
      v-model="showModal"
      class="modal"
    >
      <UIModalIngredient
        :element="element"
      />
    </UIModalOverlayBasic>

    <div
      v-if="searchStatus === 'SEARCH_SUCCESS'"
      class="wrapper-search-results"
    >
      <UIModalSearchSection
        v-for="category in searchState"
        :key="category.title"
        :title="category.title"
        :list="category.list"
        :search-text="searchText"
        class="wrapper-section"
        @enableModal="enableModal"
      />
    </div>

    <UILoading
      v-if="searchStatus === 'SEARCHING'"
      class="searching"
    />

    <UIModalSearchError
      v-else-if="searchStatus === 'ERROR'"
      class="error"
    />

    <div class="wrapper-desc-control">
      <div class="instruction">
        <UIModalSearchButton class="button">
          <UIIconsKeyEnter slot="icon" class="icon" />
        </UIModalSearchButton>
        <span class="text">
          do wyboru
        </span>
      </div>

      <div class="instruction">
        <UIModalSearchButton class="button">
          <UIIconsKeyBottom slot="icon" class="icon" />
        </UIModalSearchButton>
        <UIModalSearchButton class="button">
          <UIIconsKeyTop slot="icon" class="icon" />
        </UIModalSearchButton>
        <span class="text">
          do nawigowania
        </span>
      </div>

      <div class="instruction">
        <UIModalSearchButton class="button">
          <UIIconsKeyEsc slot="icon" class="icon" />
        </UIModalSearchButton>
        <span class="text">
          do zamknięcia
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex'
import lazyWatch from '~/utils/time/lazyWatch'
import Category from '~/assets/interface/Store/Search/Category'
import Element from '~/assets/interface/Content/Search/Element'

export default Vue.extend({
  data () {
    return {
      searchText: '' as string,
      showModal: false as boolean,
      element: null as (Element | null)
    }
  },
  computed: {
    ...mapGetters({
      searchState: 'search/getCategories',
      searchStatus: 'search/getSearchStatus'
    }),
    countResults () {
      let count: number = 0
      this.searchState.forEach((elem: Category) => {
        count += elem.list.length
      })
      return count
    }
  },
  watch: {
    searchText: {
      async handler (newValue: string) {
        await lazyWatch(newValue, 150,
          (): string => this.searchText,
          () => {
            this.$store.dispatch('search/search', {
              phrase: newValue,
              limit: 5
            })
          })
      },
      immediate: true
    }
  },
  methods: {
    enableModal (element: Element) {
      this.showModal = true
      this.element = element
    }
  }
})
</script>

<style lang="scss" scoped>
@use '../../../../assets/scss/var';
@use '../../../../assets/scss/predefine/position';
@use '../../../../assets/scss/predefine/flex';
@use '../../../../assets/scss/predefine/zindex';

.wrapper-search {
  @include flex.start-center(column);
  position: relative;
  width: 100%;
  height: 100%;
  padding: 1em;
  background: var.$lighter-background;
  .wrapper-input-section {
    @include flex.center-center;
    width: 100%;
    padding: {
      top: .5em;
      bottom: 1.5em;
    }
    gap: 1em;
    .input {
      width: 100%;
      padding: {
        bottom: 1em;
        top: .8em;
      }
      font-size: 1.2em;
      background: var.$light-text-16;
      z-index: zindex.$z-index-12;
      .icon {
        padding: 0;
        margin-left: -5px;
        transform: scale(1.2);
        --icon-color: #1FCC79; // FIXME should be scss property var.$light-text-10
      }
      &::before {
        border-color: var.$main;
        border-radius: 5px;
      }
      &::after {
        border-radius: 5px;
      }
    }
    .close-modal {
      font-size: 1.1em;
      font-weight: 600;
      color: #1FCC79;
      background: transparent;
      border: 0;
    }
  }

  .modal {
    z-index: zindex.$z-index-13;
  }

  .wrapper-search-results {
    width: 100%;
    height: 85%;
    margin-bottom: 1.5em;
    overflow: scroll;
    .wrapper-section {
      margin-bottom: 1.5em;
    }
  }

  .searching {
    --color: #1FCC79; // FIXME shuold be SCSS value var.$main;
    --size: 6px;
    margin-top: 15%;
  }

  .error {
    margin-top: 15%;
  }

  .wrapper-desc-control {
    @include position.bottom-left(0, 0);
    @include flex.around-center;
    width: 100%;
    padding: .8em 0;
    background-color: var.$light-text-16;
    .instruction {
      @include flex.center-center;
      .button {
        margin-right: .5em;
        .icon {
          --icon-color: #666; //FIXME should be SCSS property var.$light-text-6
        }
      }
      .text {
        color: var.$light-text-6;
      }
    }
  }
}
</style>
