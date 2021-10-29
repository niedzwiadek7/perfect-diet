<template>
  <div class="wrapper-modal-share">
    <div class="wrapper-media">
      <h3 class="title">
        Udostępnij
      </h3>
      <div class="media">
        <div class="social facebook">
          <div class="icon-wrapper">
            <font-awesome-icon
              class="icon"
              :icon="['fab', 'facebook-f']"
            />
          </div>
          <span class="social-sign">
            Facebook
          </span>
        </div>
        <div class="social twitter">
          <div class="icon-wrapper">
            <font-awesome-icon
              class="icon"
              :icon="['fab', 'twitter']"
            />
          </div>
          <span class="social-sign">
            Twitter
          </span>
        </div>
        <div class="social mail">
          <div class="icon-wrapper">
            <font-awesome-icon
              class="icon"
              :icon="['fas', 'envelope']"
            />
          </div>
          <span class="social-sign">
            Poczta
          </span>
        </div>
      </div>
    </div>
    <div class="link">
      <UIInputLink
        :value="linkPath"
        class="input-link"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    linkPath: {
      type: String,
      required: true
    }
  }
})
</script>

<style lang="scss" scoped>
@use '../../../assets/scss/predefine/flex';
@use '../../../assets/scss/var';

.wrapper-modal-share {
  .wrapper-media {
    .title {
      margin-bottom: 1em;
      font-weight: 500;
    }
    .media {
      @include flex.start-center;
      padding-left: .5em;
      .social {
        @include flex.center-center(column);
        margin-right: 1.4em;
        cursor: pointer;
        .icon-wrapper {
          @include flex.center-center;
          width: 55px;
          height: 55px;
          margin-bottom: .5em;
          background-color: var(--icon-bg-color);
          border-radius: 50%;
          .icon {
            font-size: 25px;
            color: #fff;
          }
        }
        .social-sign {
          font-weight: 500;
        }
        &.facebook {
          --icon-bg-color: rgb(59, 89, 152);
        }
        &.twitter {
          --icon-bg-color: rgb(29, 161, 242);
        }
        &.mail {
          --icon-bg-color: rgb(136, 136, 136);
        }
      }
    }
  }
  .link {
    margin-top: 2em;
    background-color: var.$light-text-16;
    border: 1px solid var.$light-text-10;
    padding: .5em 1em;
    .input-link {

    }
  }
}
</style>
