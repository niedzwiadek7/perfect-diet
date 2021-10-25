<template>
  <div class="wrapper">
    <UIInputCode
      v-model="code"
      class="code"
      :length="4"
    />
    <div v-if="!isTimeEnded" class="expires-time">
      kod wygaśnie za: <span class="time"> {{ timeFormat }} </span>
    </div>
    <div v-else class="expires-time">
      twój kod właśnie wygasł
    </div>
    <UIButtonSimple
      v-if="!isTimeEnded"
      class="next-step"
      @click="checkCode()"
    >
      Zweryfikuj
    </UIButtonSimple>
    <UIButtonSimple class="send-again">
      Wyślij ponownie
    </UIButtonSimple>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { minutesFormat } from '@/utils/format/time'

export default Vue.extend({
  data () {
    return {
      code: '' as String,
      time: 0 as number
    }
  },
  computed: {
    isTimeEnded () {
      return this.$data.time === 0
    },
    timeFormat () {
      return minutesFormat(this.$data.time)
    }
  },
  created () {
    this.time = 500
    this.calcTime()
  },
  methods: {
    calcTime () {
      this.time = this.time - 1
      if (this.time > 0) {
        setTimeout(() => this.calcTime(), 1000)
      }
    },
    checkCode () {
      this.$router.push('/')
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
    margin-top: 5em;
    font-weight: 500;
    .time {
      margin-left: .2em;
      font-size: 1.1em;
      color: var.$error;
      letter-spacing: 1px;
    }
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
