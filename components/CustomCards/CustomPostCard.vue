<script setup lang="ts">
  import {CustomPostCard} from "~/types/CustomPostCard";
  import {CustomUsers} from "~/types/CustomUsers";

  const props = defineProps<{
    posts: CustomPostCard[],
    users: CustomUsers[]
  }>()

  // цикл for  перебирает с 0 элимента массива поэтому post[userId] = 0  при первой итерации и  undefined
</script>

<template>
  <div>
    <div class="post-cards" v-for="({id,userId,title,body}) in posts" :key="id">
      <div class="post-cards__title">
        <NuxtLink class="post-cards__links" :to="'/comments/' + id + `?id=${userId}`" rel="nofollow">
          <h2>{{title}}</h2>
        </NuxtLink>
        <p>
          <span>Автор:</span>
          <strong>
            <NuxtLink class="post-cards__links" :to="'/users/' + userId" rel="nofollow">
              {{users[userId-1].name}}
            </NuxtLink>
          </strong>
        </p>
      </div>
      <div class="post-cards__body">
        <h4>{{body}}</h4>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "../../assets/scss/global";

  .post-cards{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;

    width: 300px;
    height: 540px;
    text-align: center;
    background: none;
    border: 1px solid $color-primary-white;
    border-radius: 15px;
    box-shadow: 0 0 10px rgb(0 0 0 / 50%);
    transition: 1s;

    &__title{
      margin-bottom: 20px;
      cursor: pointer;
      color: $color-primary-gray;
      text-shadow: 1px 1px 2px black, 0 0 1em purple, 0 0 0.2em blue;

      & p{
        cursor: pointer;
        margin-top: 10px;
      }
    }

    &__body h4 {color: $color-primary-white;}

    &__links{
      text-decoration: none;
      color: $color-primary-orange;

      &:hover {color: $color-primary-purple;}
    }
  }

  @include breakpoint(large) {
    .post-cards {margin: 10px;}
  }
</style>