//можно добавить лоадер и отображать блок по условию и не использовать "?."
<template>
    <article class="article-page">
      <h1 class="article-page__title"> {{ post?.title }} </h1>
      <NuxtImg 
          class="article-page__image"
          :src="post?.image" 
          :alt="post?.title || 'Post image'"
          placeholder="/default-image.webp"
          fallback="/default-image.webp"
          width="1216"
          height="700"
          loading="lazy"/>

          <div class="article-page__text">
            <p class="article-page__about">About</p>

            <h4 class="article-page__discription">{{ post?.description }}</h4>
          </div>
    </article>
</template>

<script setup lang="ts">
import type { Post } from "@/types/post.types"

const route = useRoute()
const { data: post } = await useFetch<Post>(
  `https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts/${route.params.id}`
)

</script>

<style lang="scss" scoped>
  .article-page{
    @include container;

    &__title{
      margin-bottom: 33px;
    }
    //можно было отступ сделать но на макете 2 блока 33 и 44 отступы, хз зачем но пусть будет так
    &__image{
      margin-block: 40px 80px;
      max-width: 100%;
    }

    &__discription{
      margin-top: 32px;
      max-width: 695px;
    }
  }
</style>