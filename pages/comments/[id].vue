<script setup lang="ts">
  const route = useRoute();
  const {data: comments} = useFetch(`https://jsonplaceholder.typicode.com/posts/${route.params.id}/comments`);
  const {data : user} = await useFetch(`https://jsonplaceholder.typicode.com/users?id=${route.query.id}`);
</script>

<template>
  <div class="blog">
    <div class="blog__title">
      <h2>
        Комментарии к посту
      </h2>
      <h3>Автора поста : {{ user[0].name }}</h3>
    </div>
    <ul class="blog__comments" >
        <li
            class="blog__item"
            v-for="{body, email, id} in comments"
            :key="id"
        >
          {{body}}
          <h6>{{email}}</h6>
        </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
  @import "assets/scss/_global.scss";

  .blog {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left:0;
    padding-top: 80px;
    color: $color-primary-white;

    &__title{
      text-align: center;
      color: $color-primary-orange;
      text-shadow: 1px 1px 2px black, 0 0 1em purple, 0 0 0.2em blue;
    }

      &__comments{
        margin: auto;
        width: 90%;
        min-height: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        font-size: 16px;
        text-align: center;

        & h6 {
          margin: 10px;
          color: $color-primary-orange;
          text-shadow: 1px 1px 2px black, 0 0 1em purple, 0 0 0.2em blue;
        }
      }

      &__item{
        list-style-type: none;
        margin: 10px;
        padding: 2px;
        border-radius: 15px;
        box-shadow: 0px -5px 10px 5px rgb(0 0 0 / 50%);
      }
    }
  @include breakpoint(large) {
    .blog{
      &__title{
        margin-bottom: 100px;
      }
      &__comments{
        width: 50%;
      }
    }
  }
</style>