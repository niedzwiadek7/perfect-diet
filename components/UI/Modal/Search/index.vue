<template>
  <div class="wrapper-search">
    <div class="wrapper-input-section">
      <UIInput
        ref="input"
        v-model="searchText"
        type="text"
        :auto-focus="true"
        placeholder="Szukaj..."
        class="input"
        @keyup="control"
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
        :element="activeElement"
      />
    </UIModalOverlayBasic>

    <div
      v-if="searchStatus === 'WAITING'"
      class="wrapper-search-results"
    >
      <UIModalSearchSection
        v-if="searchState.toString()"
        :key="searchState[0].title"
        :title="searchState[0].title"
        :list="searchState[0].list"
        :search-text="searchText"
        class="wrapper-section"
      />
    </div>

    <div
      v-if="searchStatus === 'SEARCH_SUCCESS' && searchState.toString()"
      ref="results"
      class="wrapper-search-results"
    >
      <UIModalSearchSection
        v-for="category in searchState"
        :key="category.title"
        :title="category.title"
        :list="category.list"
        :search-text="searchText"
        :active-element="category.order === active.order ? active.number : null"
        class="wrapper-section"
        @active="n => changeActive(n, category.order)"
        @route="route"
      />
    </div>

    <UIModalSearchNoResults
      v-if="searchStatus === 'SEARCH_SUCCESS' && !searchState.toString()"
      class="error"
      @changeInput="changeInput"
    />

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
import Keyboard from '~/assets/interface/Content/Search/Keyboard'
import Element from '~/assets/interface/Content/Search/Element'

export default Vue.extend({
  data () {
    return {
      searchText: '' as string,
      showModal: false as boolean,
      active: {
        order: -1 as number,
        number: 1 as number
      }
    }
  },
  computed: {
    ...mapGetters({
      searchState: 'search/getCategories',
      searchStatus: 'search/getSearchStatus',
      limit: 'search/getLimit'
    }),
    activeElement (): (Element | null) {
      const part: number = this.searchState.findIndex((category: Category) => {
        return category.order === this.active.order
      })
      if (part === -1) {
        return null
      }
      return this.searchState[part].list[this.active.number - 1]
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
              app: this
            })
            this.active.order = -1
          })
      },
      immediate: true
    },
    showModal: {
      async handler (newValue: boolean) {
        if (!newValue) {
          await this.$store.dispatch('search/recent/add', {
            app: this,
            element: this.activeElement,
            limit: this.limit,
            phrase: this.searchText
          })
          this.autoFocus()
        }
      },
      immediate: false
    }
  },
  methods: {
    changeInput (newValue: string) {
      this.searchText = newValue
      this.autoFocus()
    },
    changeActive (number: number, order: number) {
      this.active.order = order
      this.active.number = number
    },
    control (key: Keyboard) {
      switch (key) {
        case Keyboard.UP:
          this.prev()
          break
        case Keyboard.DOWN:
          this.next()
          break
        case Keyboard.ENTER:
          this.route()
          break
      }
    },
    next () {
      if (this.active.order === -1) {
        this.active.order = this.searchState[0].order
        this.active.number = 1
      } else {
        const part: number = this.searchState.findIndex((category: Category) => {
          return category.order === this.active.order
        })
        const number = this.active.number
        if (number >= this.searchState[part].list.length) {
          if (part + 1 < this.searchState.length) {
            this.active.order = this.searchState[part + 1].order
            this.active.number = 1
          }
        } else {
          this.active.order = this.searchState[part].order
          this.active.number = number + 1
        }
      }
    },
    prev () {
      if (this.active.order === -1) {
        const lastElement: Category = this.searchState[this.searchState.length - 1]
        this.active.order = lastElement.order
        this.active.number = lastElement.list.length
      } else {
        const part: number = this.searchState.findIndex((category: Category) => {
          return category.order === this.active.order
        })
        const number = this.active.number
        if (number <= 1) {
          if (part - 1 >= 0) {
            this.active.order = this.searchState[part - 1].order
            this.active.number = this.searchState[part - 1].list.length
          }
        } else {
          this.active.order = this.searchState[part].order
          this.active.number = number - 1
        }
      }
    },
    route () {
      if (this.activeElement) {
        if (this.activeElement.link) {
          this.$store.dispatch('search/recent/add', {
            app: this,
            element: this.activeElement,
            limit: this.limit,
            phrase: this.searchText
          })
          this.$router.push(this.activeElement.link)
        } else {
          this.showModal = true
        }
      }
    },
    autoFocus () {
      const inputWrapper: HTMLDivElement = this.$refs.input.$el as HTMLDivElement
      const input: HTMLInputElement = inputWrapper.querySelector('input') as HTMLInputElement
      input.focus()
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
