<template>
  <header class="image-wrapper">
    <img
      :src="require('~/assets/images/MainPage/wallpaper.png')"
      alt=""
      class="image"
    >
  </header>
</template>

<style lang="scss" scoped>
.image-wrapper {
  margin: {
    top: 20px;
    bottom: 2rem;
  }
  width: 100%;
  height: 50vh;
  overflow: hidden;
  .image {
    position: relative;
    left: -15%;
    width: 130%;
    height: 100%;
    object-fit: contain;
  }
}
</style>
