<template>
  <div class="wrapper">
    <div v-if="!value" class="wrapper-no-file">
      <slot name="icon" class="icon" />
      <h4 class="header">
        {{ title }}
      </h4>
      <span class="desc"> ({{ maxSize }}) </span>
      <input
        type="file"
        accept="image/*"
        class="input"
        alt=""
        @change="loadFile($event.target.files[0])"
      >
    </div>
    <div v-else class="wrapper-with-file">
      <div class="wrapper-image">
        <img
          ref="img"
          class="img"
          src=""
          alt=""
        >
      </div>
      <div class="buttons">
        <UIButtonSimple class="reload-photo">
          <span class="desc"> Załaduj inne zdjęcie </span>
          <input
            type="file"
            accept="image/*"
            tabindex="-1"
            class="input"
            alt=""
            @change="loadFile($event.target.files[0])"
          >
        </UIButtonSimple>

        <UIButtonSimple
          class="delete-photo"
          @click="deletePhoto()"
        >
          Usuń zdjęcie
        </UIButtonSimple>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'

export default Vue.extend({
  props: {
    value: {
      type: undefined as unknown as PropType<(File | null)>, /* FIXME make concrete type prop value */
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
  methods: {
    async loadFile (file: File) {
      await this.$emit('input', file)
      const imgElement: HTMLImageElement = (this.$refs.img as HTMLImageElement)
      imgElement.src = URL.createObjectURL(file)
    },
    deletePhoto () {
      this.$emit('input', null)
    }
  }
})
</script>

<style lang="scss" scoped>
@use './assets/scss/effects/lighting';
@use './assets/scss/predefine/position';
@use './assets/scss/predefine/flex';
@use './assets/scss/predefine/zindex';
@use './assets/scss/var';

.wrapper {
  @include lighting.lighting-border-for-input(
      .3s, 2px dashed var.$light-text-14, 2px dashed var.$main
  );
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
      &:focus {
        outline: none;
      }
    }
  }
  .wrapper-with-file {
    @include flex.around-center();
    padding: 1em;
    .wrapper-image {
      .img {
        width: 120px;
        height: 120px;
        object-fit: cover;
        border-radius: 10px;
      }
    }
    .buttons {
      @include flex.around-center(column);
      .reload-photo {
        position: relative;
        width: 120px;
        margin-bottom: 1em;
        font-size: .8em;
        font-weight: 500;
        --bgColor: #1FCC79; //FIXME should be var.$main
        --color: #fff;
        .input {
          @include position.full-fill();
          opacity: 0;
          cursor: pointer;
          z-index: zindex.$z-index-5;
          &:focus {
            outline: none;
          }
        }
      }
      .delete-photo {
        width: 120px;
        font-size: .8em;
        font-weight: 500;
        --bgColor: #f00; //FIXME should be var.$exit
        --color: #fff;
      }
    }
  }
}
</style>
