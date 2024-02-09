<script setup lang="ts">
    const route = useRoute();
    const { data } = useAsyncData('photos', () => $fetch(`https://jsonplaceholder.typicode.com/albums/${route.params.id}/photos`))
</script>

<template>
  <div class="photos">
    <ul class="photos__list">
      <li  class="photos__item" v-for="({id, url}, index) in data" :key="id">
        <img class="photos__image" :src="url" alt="photo" />
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/scss/_global.scss';

  .photos {
    position: relative;
    width: 100%;
    height: 100%;
    padding-top: 100px;
    overflow: hidden;

    &__list{
      display: grid;
      grid-gap: 10px;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: repeat(5, 1fr);
      width: 100%;
      height: 100%;
    }

    &__item{
      list-style-type: none;
      width: 120px;
      height: 120px;
    }

    &__image{
      width: 100%;
      height:100%;
    }
  }

@include breakpoint(large) {
  .photos {

    &__list{
      grid-template-columns: repeat(10, 1fr);
      grid-template-rows: repeat(5, 1fr);
    }
  }
}
</style>