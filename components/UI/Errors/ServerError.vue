<template>
  <div class="wrapper-server-error">
    <font-awesome-icon
      :icon="['fas', 'exclamation-triangle']"
      class="icon"
    />

    <div class="info">
      <h4 class="title">
        Nieoczekiwany błąd
      </h4>

      <div class="desc">
        Wystąpił nieoczekiwany błąd serwera <br>
        Ta usługa jest obecnie niedostępna
      </div>
    </div>

    <div class="buttons">
      <UIButtonSimple
        class="try-again"
      >
        <div class="slot">
          <font-awesome-icon
            :icon="['fas', 'sync-alt']"
            class="slot-icon"
          />
          <span class="info-text">
            Spróbuj ponownie
          </span>
        </div>
      </UIButtonSimple>
    </div>

    <div class="main-page">
      Przejdź do
      <NuxtLink
        to="/"
        class="link"
      >
        strony głównej
      </NuxtLink>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use './assets/scss/predefine/flex';
@use './assets/scss/predefine/link';
@use './assets/scss/effects/animation/loadFromTop';
@use './assets/scss/var';

.wrapper-server-error {
  @include flex.center-center(column);
  @include loadFromTop.animation(-10vh, .3s);
  margin-top: 20vh;
  width: 100%;
  .icon {
    font-size: 4em;
    color: var.$error;
  }
  .info {
    @include flex.center-center(column);
    width: 100%;
    margin-top: 1em;
    .title {
      font-size: 1.5em;
      letter-spacing: 1px;
    }
    .desc {
      margin-top: .5em;
      font-size: 1.1em;
      color: var.$light-text-3;
    }
  }
  .buttons {
    @include flex.around-center;
    flex-wrap: wrap;
    gap: 1em;
    width: min(325px, 100%);
    margin-top: 1.5em;
    .try-again {
      background: var.$main;
      padding: 1em 1.5em;
      color: var.$text-on-main-light;
      .slot {
        @include flex.center-center;
        gap: .75em;
        .slot-icon {
          font-size: 1.1em;
        }
        .info-text {

        }
      }
    }
  }
  .main-page {
    margin-top: 1em;
    .link {
      @include link.reset(var.$main);
      font-weight: 600;
    }
  }
}
</style>
