<script setup lang="ts">
  import {ref} from "vue";

  const items = ref([
    {
      id: 1,
      label: 'one'
    },
    {
      id: 2,
      label: 'two'
    }
  ])
  const newItem = ref("");
  const checked =ref([])
  const picked = ref()
</script>

<template>
  <div>
    <div>
      <input
          type="text"
          v-model.trim="newItem"
          @keyup.enter="items.push({id: items.length + 1, label: newItem})"
      />
    </div>
    <ul>
      <li v-for="({id,label}, index) in items" :key="id">
        {{label}}
      </li>
    </ul>
  </div>
</template>



<style scoped lang="scss">
  @import "@/assets/scss/_global.scss";
  div{
    position: absolute;
    color: white;
    z-index: 100;
    color: black;
  }
</style>