<template>
  <div class="header-container">
    <div class="header-container__nav">
      <ul class="header-container__list">
        <li class="header-container__item">
          <NuxtLink class="header-container__link" to="/" rel="nofollow">Главная</NuxtLink>
        </li>
        <li>
          <NuxtLink class="header-container__link" to="/about" rel="nofollow">О сайте</NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">
  @import 'assets/scss/_global.scss';

  @keyframes show {
    from {
      opacity:0;
    }

    to {
      opacity:1;
    }
  }

  .header-container {
    z-index: 50;
    position: fixed;
    width: 100%;
    height: 70px;
    @include flex-center;
    background: none;
    animation: show 5s;

    &__nav {width: 100%;}

    &__list{
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      list-style-type: none;
    }

    &__link{
      padding: 10px;
      font-size: 18px;
      font-weight: 600;
      border-radius: 15px;
      text-decoration: none;
      color: $color-primary-gray;
      text-shadow: 1px 1px 2px black, 0 0 1em purple, 0 0 0.2em blue;

      &:hover {@include orange-hover;}
    }
  }

  @include breakpoint(large) {
    .header-container{

      &__nav {width: 400px;}
    }
  }
</style>