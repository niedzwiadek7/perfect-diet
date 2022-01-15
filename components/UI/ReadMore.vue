<template>
  <span
    v-if="isMaxCharacters"
    class="wrapper-read-more"
  >
    <span class="text">
      {{
        !isExpanded ?
          shortText(text, maxLength) :
          text
      }}
    </span>

    <span
      class="show-more"
      @click="isExpanded = !isExpanded"
    >
      {{
        isExpanded ?
          'Zobacz mniej' :
          'Zobacz więcej'
      }}
    </span>
  </span>
  <span v-else class="wrapper-text">
    {{ text }}
  </span>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    text: {
      type: String,
      required: true
    },
    maxLength: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      isExpanded: false as boolean
    }
  },
  computed: {
    isMaxCharacters (): boolean {
      return this.$props.text.length > this.maxLength
    }
  },
  methods: {
    shortText (text: String, maxLength: number): String {
      return `${text.slice(0, maxLength)}...`
    }
  }
})
</script>

<style lang="scss" scoped>
@use './assets/scss/var';

.wrapper-read-more {
  .text {

  }
  .show-more, .show-less {
    margin-left: .5em;
    font-weight: 600;
    color: var.$light-text-5;
  }
}

.wrapper-text {

}
</style>
