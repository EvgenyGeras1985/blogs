<template>
  <div class="footer-container">
    <h3>
      Это демо версия сайта-блога
      сделана с использованием
      свободного ресурса {JSON} Placeholder
    </h3>
  </div>
</template>

<style scoped lang="scss">
  @import 'assets/scss/_global.scss';

  .footer-container{
    z-index: 30;
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 60px;
    @include flex-center;
    text-align: center;
    color: $color-primary-gray;
    font-family: 'Bebas Neue', cursive;
    background: none;
    text-shadow: 1px 1px 2px black, 0 0 1em purple, 0 0 0.2em blue;
  }
</style>