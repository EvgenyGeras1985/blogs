<script setup lang="ts">
  import CustomUserPage from "~/components/CustomCards/CustomUserCard.vue";
  const route = useRoute();
  const {data: user} = await useFetch(`https://jsonplaceholder.typicode.com/users/${route.params.id}`);
</script>

<template>
  <div class="user-page">
    <custom-user-page :user="user"></custom-user-page>
  </div>
</template>

<style scoped lang="scss">
  @import "assets/scss/_global.scss";

  .user-page{
    position: relative;
    @include flex-center;
    width: 100%;
    height: 100%;
    background: none;
  }

  @include breakpoint(large) {

  }
</style>