<template>
  <div class="wrapper-many">
    <div
      v-if="value.length === 0"
      class="wrapper-no-file"
    >
      <slot name="icon" class="icon" />
      <h4 class="header">
        {{ title }}
      </h4>
      <span class="desc"> (do {{ maxSize }}MB) </span>
      <input
        type="file"
        accept="image/*"
        class="input"
        alt=""
        multiple
        @change="loadFile($event.target.files)"
      >
    </div>
    <div
      v-else
      class="wrapper-with-file"
    >
      <ul class="photo-list">
        <li
          v-for="(element, n) in URLFiles"
          :key="n"
          class="photo"
          @click="deletePhoto(n)"
        >
          <img
            :src="element"
            alt=""
            class="img"
          >
        </li>
      </ul>
      <label class="input-label">
        <input
          type="file"
          accept="image/*"
          class="input"
          alt=""
          multiple
          @change="loadFile($event.target.files)"
        >
        <UIButtonSimple
          class="add-more"
        >
          Dodaj więcej
        </UIButtonSimple>
      </label>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'

export default Vue.extend({
  props: {
    value: {
      type: Array as PropType<Array<File>>,
      required: false,
      default () {
        return null
      }
    },
    title: {
      type: String,
      required: true
    },
    maxSize: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      URLFiles: [] as Array<String>
    }
  },
  methods: {
    loadFile (files: Array<File>) {
      Array.prototype.forEach.call(files, async (file) => {
        const array = this.value
        array.push(file)
        await this.$emit('input', array)
        this.URLFiles.push(URL.createObjectURL(file))
      })
    },
    deletePhoto (n: number) {
      const array = this.value
      array.splice(n, 1)
      this.$emit('input', array)
      this.URLFiles.splice(n, 1)
    }
  }
})
</script>

<style lang="scss" scoped>
@use '../../../../assets/scss/effects/lighting';
@use '../../../../assets/scss/predefine/position';
@use '../../../../assets/scss/predefine/flex';
@use '../../../../assets/scss/predefine/zindex';
@use '../../../../assets/scss/var';

.wrapper-many {
  @include lighting.lighting-border-for-input(
      .3s, 2px dashed var.$light-text-14, 2px dashed var.$main
  );
  position: relative;
  .wrapper-no-file {
    @include flex.center-center(column);
    padding: 1em;
    .icon {
      margin-bottom: 14px;
    }
    .header {
      margin-bottom: 8px;
      font-size: 1.2em;
      color: var.$light-text-6;
    }
    .desc {
      font-size: .9em;
      color: var.$light-text-10;
    }
    .input {
      @include position.full-fill();
      opacity: 0;
      cursor: pointer;
      z-index: zindex.$z-index-5;
      outline: none;
    }
  }
  .wrapper-with-file {
    @include flex.center-center(column);
    padding: 1.5em;
    .photo-list {
      @include flex.center-center;
      gap: 10px;
      flex-wrap: wrap;
      margin-bottom: 1.5em;
      list-style: none;
      .photo {
        width: 80px;
        height: 80px;
        .img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 10px;
        }
      }
    }
    .input-label {
      position: relative;
      width: 90%;
      .add-more {
        position: relative;
        width: 100%;
        background-color: var.$main;
        color: var.$text-on-main-light;
      }
      .input {
        @include position.full-fill();
        opacity: 0;
        cursor: pointer;
        z-index: zindex.$z-index-5;
        outline: none;
      }
    }
  }
}
</style>
