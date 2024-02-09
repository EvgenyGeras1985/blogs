<script setup lang="ts">
  import {ref} from "vue";
  import CustomCarusel from "~/components/carusel/CustomCarusel.vue";

  const isVisibleBlogs = ref(false);
</script>

<template>
  <div class="main">
      <div class="main__blogs" v-if="!isVisibleBlogs">
        <p @click="isVisibleBlogs = !isVisibleBlogs">
          Blogs
        </p>
      </div>
    <custom-carusel v-if="isVisibleBlogs" />
  </div>
</template>

<style scoped lang="scss">
@import 'assets/scss/_global.scss';

  //правило для анимации
  @keyframes show {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
  //---------------------

  .main {
    width: 100%;
    height: 100%;
    position: relative;

    &__blogs {
      z-index: 20;
      position: absolute;
      top: 27%;
      left: 8%;
      cursor: pointer;
      font-family: 'Francois One', sans-serif;
      font-size: 100px;
      color: $color-primary-white;
      text-shadow: 1px 1px 2px black, 0 0 1em purple, 0 0 0.2em blue;

      &:hover {
        @include orange-hover;
      }
    }
  }

  @include breakpoint(large) {

  }
</style>