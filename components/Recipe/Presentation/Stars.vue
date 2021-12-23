<template>
  <div
    ref="main"
    class="wrapper-stars"
    :class="!readonly && `wrapper-stars-editable`"
  >
    <input
      id="rating-5"
      type="radio"
      name="rating"
      class="star-input"
      :checked="callValue(5)"
      @click="emitValue(5)"
    >
    <label for="rating-5" class="star">
      <font-awesome-icon
        :icon="['fas', 'star']"
        class="icon"
      />
    </label>
    <input
      id="rating-4"
      type="radio"
      name="rating"
      class="star-input"
      :checked="callValue(4)"
      @click="emitValue(4)"
    >
    <label for="rating-4" class="star">
      <font-awesome-icon
        :icon="['fas', 'star']"
        class="icon"
      />
    </label>
    <input
      id="rating-3"
      type="radio"
      name="rating"
      class="star-input"
      :checked="callValue(3)"
      @click="emitValue(3)"
    >
    <label for="rating-3" class="star">
      <font-awesome-icon
        :icon="['fas', 'star']"
        class="icon"
      />
    </label>
    <input
      id="rating-2"
      type="radio"
      name="rating"
      class="star-input"
      :checked="callValue(2)"
      @click="emitValue(2)"
    >
    <label for="rating-2" class="star">
      <font-awesome-icon
        :icon="['fas', 'star']"
        class="icon"
      />
    </label>
    <input
      id="rating-1"
      type="radio"
      name="rating"
      class="star-input"
      :checked="callValue(1)"
      @click="emitValue(1)"
    >
    <label for="rating-1" class="star">
      <font-awesome-icon
        :icon="['fas', 'star']"
        class="icon"
      />
    </label>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    value: {
      type: Number,
      required: true
    },
    readonly: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data () {
    return {
      maxStars: 5 as number
    }
  },
  mounted () {
    if (this.readonly) {
      const main: HTMLDivElement = (this.$refs.main as HTMLDivElement)
      // find all stars
      const allStars: NodeListOf<HTMLInputElement> = main.querySelectorAll('.star-input[type=radio]')

      // find unchecked stars
      const unCheckedStars: Array<HTMLInputElement> = [].filter.call(allStars, (elem: HTMLInputElement) => {
        return !elem.checked
      })

      // disable unchecked stars
      unCheckedStars.forEach((elem: HTMLInputElement) => {
        elem.setAttribute('disabled', 'true')
      })
    }
  },
  methods: {
    emitValue (n: number) {
      if (!this.readonly) {
        this.$emit('input', this.value === n ? 0 : n)
      }
    },
    callValue (n: number): boolean {
      return this.value === n
    }
  }
})
</script>

<style lang="scss" scoped>
@use '../../../assets/scss/predefine/flex';
@use '../../../assets/scss/var';

.wrapper-stars {
  @include flex.center-center(row-reverse);
  gap: .2em;
  .star {
    color: var.$light-text-7;
  }

  .star-input {
    display: none;
    &:checked {
      // lighting actual grade
      ~ .star,
      ~ .star ~ .star {
        color: var.$main;
      }
    }
  }

  &.wrapper-stars-editable {
    .star {
      cursor: pointer;
    }

    .star-input {
      // lighting new grade
      &:not(:checked) {
        ~ .star:hover,
        ~ .star:hover ~ .star {
          color: darken(var.$main, 10%);
        }
      }

      // lighting disable grade
      &:checked {
        + .star:hover,
        + .star:hover ~ .star {
          color: mix(rgba(var.$exit, 20%), var.$main);
        }
      }
    }
  }
}
</style>
