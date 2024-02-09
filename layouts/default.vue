<script setup lang="ts">
  import CustomHeader from "~/components/hedaer/CustomHeader.vue";
  import CustomFooter from "~/components/footer/CustomFooter.vue";
</script>

<template>
  <div class="layout-default">
    <main-page></main-page>
    <custom-header></custom-header>
    <slot />
    <custom-footer></custom-footer>
  </div>
</template>

<style scoped lang="scss">

  .layout-default {
    width: 100%;
    height: 100vh;
  }
</style>

