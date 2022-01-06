<template>
  <div class="wrapper-images">
    <client-only>
      <VueTinySlider
        v-bind="tinySliderOptions"
        class="slider"
      >
        <slot />
      </VueTinySlider>
    </client-only>
    <div class="control">
      <button class="control-button prev">
        <font-awesome-icon
          :icon="['fas', 'chevron-left']"
          class="icon"
        />
      </button>
      <button class="control-button next">
        <font-awesome-icon
          :icon="['fas', 'chevron-right']"
          class="icon"
        />
      </button>
    </div>
    <div class="slides-wrapper">
      <div class="slides">
        <button
          v-for="n in childLength"
          :key="n"
          class="slide"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    childLength: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      tinySliderOptions: {
        mouseDrag: true,
        swipeAngle: 45,
        loop: true,
        items: 1,
        autoplay: true,
        controlsContainer: '.control',
        navContainer: '.slides',
        autoplayTimeout: 5000,
        autoplayButtonOutput: false
      },
      play: true
    }
  },
  head () {
    return {
      link: [
        {
          rel: 'stylesheet',
          href:
            'https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.1/tiny-slider.css'
        }
      ]
    }
  }
})
</script>

<style lang="scss" scoped>
@use '../../assets/scss/predefine/position';
@use '../../assets/scss/predefine/flex';
@use '../../assets/scss/predefine/zindex';
@use '../../assets/scss/var';

.wrapper-images {
  position: relative;
  overflow: hidden;
  .slider {

  }
  .control {
    .control-button {
      width: 3em;
      height: 100%;
      color: #fff;
      border: 0;
      cursor: pointer;
      opacity: 0;
      transition: .3s ease-in-out;
      will-change: opacity;
      &.prev {
        @include position.top-left(0, 0);
        background: linear-gradient(90deg, rgba(#000, .5), rgba(#000, 0));
        z-index: zindex.$z-index-3;
      }
      &.next {
        @include position.top-right(0, 0);
        background: linear-gradient(90deg, rgba(#000, 0), rgba(#000, .5));
        z-index: zindex.$z-index-3;
      }
      .icon {
        font-size: 2em;
      }
      &:hover {
        opacity: .9;
      }
    }
  }
  .slides-wrapper {
    @include position.bottom-left(1em, 0);
    @include flex.center-center;
    width: 100%;
    transform: translateY(3em);
    transition: .2s ease-in-out;
    will-change: opacity;
    z-index: zindex.$z-index-3;
    .slides {
      .slide {
        margin-left: .8em;
        padding: .3em;
        background: transparent;
        border: 2px solid var.$main;
        border-radius: 50%;
        cursor: pointer;
        outline: none;
        transform: scale(1);
        transition: .2s ease-in-out;
        will-change: transform;
        &.tns-nav-active {
          background: var.$main;
        }
        &:hover, &:focus {
          transform: scale(1.3);
        }
      }
    }
  }
  &:hover {
    .slides-wrapper {
      transform: translateY(0);
    }
  }
}

</style>
