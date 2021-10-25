<template>
  <div class="wrapper">
    <UIInputCode
      v-model="code"
      class="code"
      :length="4"
    />
    <div class="expires-time">
      Kod wygaśnie za: <span class="time"> 03:12 </span>
    </div>
    <UIButtonSimple class="next-step">
      Następny krok
    </UIButtonSimple>
    <UIButtonSimple class="send-again">
      Wyślij ponownie
    </UIButtonSimple>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      code: '' as String
    }
  }
})
</script>

<style lang="scss" scoped>
@use './assets/scss/predefine/flex';
@use './assets/scss/var';

.wrapper {
  @include flex.center-center(column);
  margin-top: 1em;
  width: min(400px, 100%);
  .code {

  }
  .expires-time {
    margin-top: 3em;
  }
  .next-step {
    --bgColor: #1FCC79; // FIXME powinna być przypisana wartość SCSS var.$main
    --color: #fff;
    width: min(350px, 100%);
    margin-top: 2.5em;
  }
  .send-again {
    --bgColor: transparent;
    --color: #777; // FIXME powinna być przypisana wartość SCSS var.$light-text-7
    width: min(350px, 100%);
    margin-top: 1.5em;
    border: 2px solid var.$light-text-7;
  }
}
</style>
