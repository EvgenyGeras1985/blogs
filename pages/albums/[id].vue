<script setup lang="ts">
  const route = useRoute();
  const {data: album} = await useFetch(`https://jsonplaceholder.typicode.com/users/${route.params.id}/albums`);
</script>

<template>
  <div class="albums">
    <ul class="albums__list">
      <li class="albums__item" v-for="({id,title}, index) in album" :key="id">
        <NuxtLink class="albums__link" :to="'/photos/' + id" rel="nofollow">
          {{title}}
        </NuxtLink>
      </li>
    </ul>
    <div class="albums__twin">
      <img src="@/assets/images/aerial-view-of-the-night-city-of-st-petersburg-peter-and-paul-picture-id1035222118.webp" alt="photo" />
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "assets/scss/_global.scss";

  .albums{
      position: absolute;
      width: 100%;
      height: 100vh;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      font-family: 'Bebas Neue', cursive;
      font-size: 18px;
      color: $color-primary-gray;
      background: none;
      text-shadow: 1px 1px 2px black, 0 0 1em black, 0 0 0.2em blue;

    &__list{
      width: 89%;
      height: 78%;
      text-align: center;
      display: grid;
      grid-gap: 2px;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: repeat(10, 1fr);
      background: none;
    }

    &__item{
      @include flex-center;
      width: 100%;
      margin: 5px;
      list-style-type: none;
      outline: 2px inset $color-primary-orange;
      border-radius: 10px;
      background: none;
      transition: 0.3s ease-in-out all;

      &:nth-child(2n+1){
        grid-column-start: 1;
        grid-column-end: 3;
      }

      &:nth-child(2n){
        grid-column-start: 2;
        grid-column-end: 4;
      }

      &:hover{
        margin: 15px;
        outline: 4px inset $color-primary-orange;
      }
    }

    &__link{
      color: $color-primary-white;
      text-decoration: none;
      text-shadow: 1px 1px 2px black, 0 0 1em black, 0 0 0.2em blue;

      &:hover{
        @include orange-hover;
      }
    }

    &__twin{
      display: none;

      & img{
        width: 100%;
        height: 100%;
      }
    }
  }

  @include breakpoint(large) {
    .albums{

      &__list{
        width: 40%;
        height: 80%;
        grid-gap: 10px;
      }

      &__twin{
        display: block;
        z-index: 10;
        background: $color-primary-white;
        width: 35%;
        height: 540px;
        outline: 2px solid black;
        background: none;
        animation: bookMove 2s;
        border-radius: 20px;

        & img{
          border-radius: 20px;
          width: 100%;
          height: 100%;
        }
      }
    }
  }
</style>