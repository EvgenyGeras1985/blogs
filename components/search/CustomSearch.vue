<script setup lang="ts">
import {computed} from 'vue';

const props = defineProps<{
  modelValue?: string
}>();

const emit = defineEmits(["update:modelValue"]);

const searchValue = computed({
  get(){
    return props.modelValue
  },
  set(value?: string){
    emit("update:modelValue", value);
  },
});
</script>

<template>
  <form class="search">
    <input
        class="search__ipt"
        type="search"
        placeholder="введите имя автора"
        v-model="searchValue"
    />
  </form>
  <slot></slot>
</template>