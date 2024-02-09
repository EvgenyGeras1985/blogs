<script setup lang="ts"></script>

<template>
  <div class="intro">
    <div class="intro__media">
      <video class="intro__media-video"
             src="@/assets/video/rain.webm"
             type="video/webm"
             muted="muted"
             autoplay="autoplay"
             loop
      >
      </video>
    </div>
  </div>
</template>

<style scoped lang="scss">
  @import "assets/scss/_global.scss";

  .intro{
    position: absolute;
    width: 100%;
    height: 100vh;
    background: none;
    overflow: hidden;
    font-family: 'Bebas Neue', cursive;

    &__media{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      overflow: hidden;
    }

    &__media-video{
      position: absolute;
      top: 50%;
      left: 50%;
      min-width: 100%;
      min-height: 100%;
      transform: translate(-50%,-50%);
    }
  }

  @include breakpoint(large) {
    .intro{

      &__media{}

      &__media-video{}
    }
  }
</style>