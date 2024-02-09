<script setup lang="ts">
  import {CustomUsers} from "~/types/CustomUsers";

  const runtimeConfig = useRuntimeConfig();
  const {data: albums} = await useFetch(runtimeConfig.apiAlbums);

  const props = defineProps<{
    user: CustomUsers
  }>()
</script>

<template>
  <div class="user-card">
    <h2>Данные пользователя</h2>
    <div class="user-card__data">
        <div class="user-card__name">
          {{user.name}}
        </div>
        <div class="user-card__username">
          {{user.username}}
        </div>
        <div class="user-card__email">
          {{user.email}}
        </div>
        <div class="user-card__phone">
          {{user.phone}}
        </div>
        <div class="user-card__website">
          {{user.website}}
        </div>
        <div class="user-card__city">
          {{user.address.city}}
        </div>
        <div>
          <NuxtLink class="user-card__link" :to="'/albums/' + user.id">Альбомы {{user.name}}</NuxtLink>
        </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "assets/scss/_global.scss";

  .user-card{
    position: absolute;
    width: 55%;
    height: 450px;
    border-radius: 15px;
    font-family: 'Bebas Neue', cursive;
    color: $color-primary-gray;
    outline: 1px solid $color-primary-gray;
    background: rgb(1, 1, 1,0.5);
    text-shadow: 7px 7px 5px black, 0 0 1em purple, 0 0 0.2em blue;

    & h2 {margin: 20px;}

    &__data{
      font-size: 18px;
      width: 100%;
      height: 100%;

      & div {margin: 20px;}
    }

    &__link{
      text-decoration: none;
      color: $color-primary-gray;
      text-shadow: 1px 1px 2px black, 0 0 1em purple, 0 0 0.2em blue;

      &:hover {@include orange-hover;}
    }
  }
  @include breakpoint(large) {
    .user-card {width: 35%;}
  }
</style>