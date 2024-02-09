<script setup lang="ts">
  import {ref, onMounted} from "vue";

  const runtimeConfig = useRuntimeConfig();
  const {data : posts} = await useFetch(runtimeConfig.apiBase);
  const {data : users} = await useFetch(runtimeConfig.apiUsers);

  let offsetX = 0; //сещение от левго каря
  let offsetY = 0; //сещение от верхнего каря
  const track = ref() //сслыка на  div с классом  track

  let y1:number = ref(null);
  let y2:number = ref(null);

  let touchCollection:number[] = []; // это коллекция touches
  const sens: number = 80; // чувствительность

  function prev(){
    offsetX -= 1280;
    if (offsetX < 0){
      offsetX = 30720;
    }
    track.value.style.left = -offsetX + 'px';
  }

  function next(){
    offsetX += 1280;
    if (offsetX > 30720){
      offsetX = 0;
    }
    track.value.style.left = -offsetX + 'px';
  }

  onMounted(() => {
    track.value.addEventListener("touchmove", (event) => {
      event.preventDefault();
      touchCollection.push(event.changedTouches[0].clientY);
    })
    //passive: true улучшение производительноти, связанное с пассивным прослушивателем событий

    track.value.addEventListener("touchend", (event) => {
      y1 = touchCollection[0];

      for (let item of touchCollection){
        y2 = item;
      }
        if(y2 > y1 && y2 - y1 > sens){
          offsetY += 540;
          if (offsetY > 0){
            offsetY = -53460;
          }
          track.value.style.top = offsetY + 'px';
        }
        else if(y2 < y1 && y1 - y2 > sens){
          offsetY -= 540;
          if (offsetY < -53460){
            offsetY = 0;
          }
          track.value.style.top = offsetY + 'px';
        }
      touchCollection = []; //очисти массив координат
    })
  })
</script>

<template>
  <div class="wrapper">
    <div class="wrapper__roundabout">
      <div class="wrapper__track" ref="track">
          <custom-post-card class="wrapper__item" :users="users" :posts="posts"></custom-post-card>
      </div>
    </div>
    <button  @click="prev()" class="wrapper__arrow-left">Prev</button>
    <button @click="next()" class="wrapper__arrow-right">Next</button>
  </div>
</template>

<style scoped lang="scss">
  @import "assets/scss/_global.scss";

  .wrapper{
    @include flex-center;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    animation: show 9s;
    transform: translate(-50%,-50%);

    &__roundabout{
      position: relative;
      width: 100%;
      height: 540px;
      display: flex;
      justify-content: center;
      background: none;
      overflow: hidden; // скрывает трек
    }

    &__track{
      position: absolute;
      display: flex;
      flex-direction: column;
      top: 0;
      transition: all ease 0.5s;
    }

    &__arrow-left{
      display: none;
    }

    &__arrow-right{
      display: none;
    }
  }


  @include breakpoint(large) {

    .wrapper{
      height: 760px;
      top: 200px;
      left: 0;
      transform: none;

      &__roundabout{
        width: 1280px;
        height: 760px;
      }

      &__track{
        flex-direction: row;
        left: 0;
      }

      &__item{
        display: flex;
      }

      &__arrow-left{
        display: block;
        position: absolute;
        cursor: pointer;
        top: 35%;
        left: 13%;
        width: 40px;
        height: 60px;
        border-radius: 10px 0;
        color: $color-primary-gray;
        background: none;
        outline: 1px solid $color-primary-gray;
      }

      &__arrow-right{
        z-index: 1000;
        display: block;
        position: absolute;
        cursor: pointer;
        top: 35%;
        right: 13%;
        width: 40px;
        height: 60px;
        border-radius: 10px 0;
        color: $color-primary-gray;
        background: none;
        outline: 1px solid $color-primary-gray;
      }

      &__arrow-left:hover{
        color: $color-primary-orange;
        outline: 1px solid $color-primary-orange;
      }

      &__arrow-right:hover{
        color: $color-primary-orange;
        outline: 1px solid $color-primary-orange;
      }
    }
  }
</style>