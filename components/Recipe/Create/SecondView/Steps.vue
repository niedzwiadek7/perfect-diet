<template>
  <div class="wrapper-steps">
    <h3 class="title">
      Procedura
    </h3>

    <Draggable
      class="draggable"
      :value="value"
      handle=".moving"
      ghost-class="ghost"
      @input="v => $emit('input', v)"
    >
      <div
        v-for="(element, n) in value"
        :key="n"
        class="step"
      >
        <div class="control">
          <span class="number">
            {{ n + 1 }}
          </span>
          <div class="moving">
            <font-awesome-icon
              v-for="x in 2"
              :key="x"
              :icon="['fas', 'ellipsis-v']"
              class="icon"
            />
          </div>
          <div
            class="delete"
            @click="deleteStep(n)"
          >
            <font-awesome-icon
              :icon="['fas', 'times']"
              class="icon"
            />
          </div>
        </div>
        <UIInputTextArea
          type="text"
          :value="element"
          placeholder="Opisz kolejny krok"
          class="input"
          @input="v => input(n, v)"
        />
      </div>
    </Draggable>

    <UIButtonSimple
      class="button"
      @click="addStep()"
    >
      <font-awesome-icon
        :icon="['fas', 'plus']"
        class="icon"
      />
      <span class="desc">
        Dodaj krok
      </span>
    </UIButtonSimple>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import Draggable from 'vuedraggable'

export default Vue.extend({
  components: {
    Draggable
  },
  props: {
    value: {
      type: Array as PropType<Array<String>>,
      required: true
    }
  },
  created () {
    for (let i = 0; i < 2; i++) {
      this.addStep()
    }
  },
  methods: {
    input (n: number, value: string) {
      const array: Array<String> = this.value
      array[n] = value
      this.$emit('input', array)
    },
    addStep () {
      const array: Array<String> = this.value
      array.push('')
      this.$emit('input', array)
    },
    deleteStep (n: number) {
      const array: Array<String> = this.value
      array.splice(n, 1)
      this.$emit('input', array)
    }
  }
})
</script>

<style lang="scss" scoped>
@use './assets/scss/predefine/flex';
@use './assets/scss/var';

.wrapper-steps {
  .title {
    margin-bottom: 2em;
    font-weight: 600;
  }
  .draggable {
    width: 95%;
    margin-bottom: 2.5em;
    .ghost {
      opacity: 0;
    }
    .step {
      @include flex.center-center;
      margin-bottom: 1.5em;
      .control {
        @include flex.center-center(column);
        align-self: start;
        margin-right: .7em;
        .number {
          @include flex.center-center;
          width: 1.8em;
          height: 1.8em;
          margin-bottom: .5em;
          background-color: var.$light-text-5;
          font-weight: 600;
          color: var.$light-text-16;
          border-radius: 50%;
          user-select: none;
        }
        .moving {
          margin-bottom: .25em;
          .icon {
            margin-left: 1px;
            color: var.$light-text-7;
          }
        }
        .delete {
          cursor: pointer;
          .icon {
            font-size: 1.2em;
            color: var.$light-text-7;
          }
        }
      }
      .input {
        width: 100%;
      }
    }
  }
  .button {
    width: 100%;
    background-color: var.$light-text-16;
    color: var.$text;
    border: 2px solid var.$light-text-10;
  }
}
</style>
