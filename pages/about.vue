<script setup lang="ts">
  import list from "@/about.json";
</script>

<template>
  <div class="about">
    <ul class="about__container">
      <li class="about__item" v-for="({id, description}, index) in list" :key="id">
        {{description}}
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
@import "assets/scss/_global.scss";

  .about{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    @include flex-center;
    flex-direction: column;
    font-family: 'Bebas Neue', cursive;
    padding-top: 80px;
    color: $color-primary-gray;
    background: none;
    text-shadow: 7px 7px 5px black, 0 0 1em purple, 0 0 0.2em blue;


    &__container{
      width: 80%;
      height: 80%;
    }

    &__item{
      list-style-type: none;
    }
  }

  @include breakpoint(large) {
    .about{

      &__item{
        font-size: 25px;
        margin :20px;
      }
    }
  }
</style>