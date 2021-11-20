<template>
  <div
    class="wrapper-element"
    :class="isActive && 'active'"
    @click="route()"
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
        <HighlightText
          :queries="[ searchText ]"
          :highlight-style="lightingClass"
        >
          {{ value.name }}
        </HighlightText>
      </div>
      <div class="desc">
        <HighlightText
          :queries="[ searchText ]"
          :highlight-style="lightingClass"
        >
          {{ value.description }}
        </HighlightText>
      </div>
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
import { mapGetters } from 'vuex'
import Element from '~/assets/interface/Content/Search/Element'
import Types from '~/assets/interface/Content/Search/Types'

export default Vue.extend({
  components: {
    // https://github.com/AlbertLucianto/vue-text-highlight
    HighlightText: async () => await require('vue-text-highlight')
  },
  props: {
    value: {
      type: Object as PropType<Element>,
      required: true
    },
    isActive: {
      type: Boolean,
      required: true
    },
    searchText: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      title: this.value.name,
      activeLighting: {
        background: 'transparent',
        color: 'white',
        textDecoration: 'underline'
      },
      unActiveLighting: {
        background: 'transparent',
        color: '#1FCC79'
      }
    }
  },
  computed: {
    ...mapGetters({
      limit: 'search/getLimit'
    }),
    lightingClass () {
      return this.isActive
        ? this.$data.activeLighting
        : this.$data.unActiveLighting
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
    },
    route () {
      this.$store.dispatch('search/recent/add', {
        app: this,
        element: this.value,
        limit: this.limit
      })
      if (this.value.link) {
        this.$router.push(this.value.link)
      } else {
        this.$emit('enableModal', this.value)
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
      font-weight: 500;
      text-transform: capitalize;
    }
    .desc {
      @include text.ellipsis-text;
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
