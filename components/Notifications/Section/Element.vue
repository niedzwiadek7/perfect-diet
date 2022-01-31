<template>
  <NuxtLink
    :to="generateLinkToRedirect()"
    class="wrapper-section-element"
  >
    <div class="photo">
      <div v-if="numberOfInitiators === 1" class="one-photo">
        <img
          src="https://filing.pl/wp-content/uploads/2014/06/filing_images_ddad50a54790.png"
          alt=""
          class="image"
        >
      </div>
      <div v-else class="twice-photo">
        <img
          src="https://bi.im-g.pl/im/50/2c/17/z24300624V,Usmiechnieta.jpg"
          alt=""
          class="image1"
        >
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1CO_L8GNDM-pN0yqSh3kEcMzpzTxrrOk8oA&usqp=CAU"
          alt=""
          class="image2"
        >
      </div>
    </div>
    <div class="value">
      <span class="user">
        {{ convertUser(notification.initiator[0]) }}
      </span>
      {{ moreThanOne ? (moreThanTwo ? ',' : 'i') : '' }}
      <div class="user">
        {{ moreThanOne ? `${convertUser(notification.initiator[1])}` : '' }}
      </div>
      {{ moreThanTwo ? 'i' : '' }}
      {{ moreThanTwo ? `i ${numberOfInitiators - 2} innych użytkowników` : '' }}
      <div class="info">
        {{ value }}
      </div>
    </div>
    <div class="right-banner">
      <img
        v-if="notification.type !== 'follow'"
        src="https://smukee.pl/wp-content/uploads/2021/01/pbrazy-5629-scaled.jpg"
        alt=""
        class="image"
      >
    </div>
  </NuxtLink>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import Notification from '~/assets/interface/Notification/Notification'
import User from '~/assets/interface/User/User'
import Type from '~/assets/interface/enums/Notification/Type'

export default Vue.extend({
  props: {
    notification: {
      type: Object as PropType<Notification>,
      required: true
    }
  },
  data () {
    return {
      value: '' as string,
      numberOfInitiators: this.notification.initiator.length as number,
      moreThanOne: this.notification.initiator.length > 1 as boolean,
      moreThanTwo: this.notification.initiator.length > 2 as boolean
    }
  },
  created () {
    switch (this.notification.type) {
      case Type.LIKE:
        this.value = `${this.moreThanOne ? (this.moreThanTwo ? 'oceniło' : 'ocenili') : 'ocenił(a)'} twój przepis`
        break
      case Type.FOLLOW:
        this.value = `${this.moreThanOne ? (this.moreThanTwo ? 'obserwują' : 'obserwują') : 'obserwuje'} twój profil`
        break
      case Type.COMMENT:
        this.value = `${this.moreThanOne ? (this.moreThanTwo ? 'skomentowało' : 'skomentowali') : 'skomentował(a)'} twój przepis`
        break
    }
  },
  methods: {
    convertUser (user: (User | string)): string {
      user = user as User
      return `${user.firstName} ${user.lastName}`
    },
    generateLinkToRedirect (): string {
      if (this.notification.type === Type.FOLLOW) {
        const lastInitiator: User = this.notification.initiator[0] as User
        return `/user/${lastInitiator._id}`
      }
      return `/recipe/${this.notification?.recipeID}`
    }
  }
})
</script>

<style lang="scss" scoped>
@use './assets/scss/predefine/flex';
@use './assets/scss/predefine/position';
@use './assets/scss/predefine/image';
@use './assets/scss/predefine/link';
@use './assets/scss/var';

$image-wrapper-size: 65px;

.wrapper-section-element {
  @include flex.start-center;
  @include link.reset(var.$text);
  width: 100%;
  .photo {
    margin-right: 1.5em;
    .one-photo {
      @include flex.center-center;
      width: $image-wrapper-size;
      height: $image-wrapper-size;
      .image {
        @include image.image-square(calc(#{$image-wrapper-size} * .85));
        border-radius: 50%;
      }
    }
    .twice-photo {
      position: relative;
      width: $image-wrapper-size;
      height: calc(#{$image-wrapper-size} * 1.2);
      .image1 {
        @include position.top-right(0, 0);
        @include image.image-square(calc(#{$image-wrapper-size} * .85));
        border-radius: 50%;
      }
      .image2 {
        @include position.bottom-left(0, 0);
        @include image.image-square(calc(#{$image-wrapper-size} * .85));
        box-sizing: content-box;
        border-radius: 50%;
        border: 2px solid var.$light-background;
      }
    }
  }
  .value {
    width: 100%;
    font-size: 1.25em;
    color: var.$light-text-6;
    .user {
      font-weight: 600;
      color: var.$light-text-3;
    }
    .info {
      font-size: .8em;
    }
  }
  .right-banner {
    @include flex.center-center;
    .image {
      @include image.image-square(calc(#{$image-wrapper-size} * .9));
      border-radius: 10px;
    }
  }
}
</style>
