<script setup lang="ts">
import type { Post } from "@/types/post.types"

const { data: posts } = await useFetch<Post[]>(
  `https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts/`,{default: () => []}
)

import { usePagination } from '@/composables/usePagination';
const { 
  currentPage, 
  paginatedItems: paginatedPosts,
  nextPage,
  goToPage,
  visiblePages 
} = usePagination(posts, 8, 5);

// обработки ошибок на макете небыло как и лоадеров, по этому не добавил
// поинтер на артикле сделал, но снизу появляется read more который выглядит как ссылка
// <a (артикл)> <a>Read more</a> </a> - не валид, так что переход оставил только по ссылке появляющийся при ховере 
</script>

<template>
  <section class="articles" aria-labelledby="articles-heading">
    <h1 id="articles-heading">Articles</h1>
    <div class="articles__grid">
      <article class="article" v-for="post in paginatedPosts" :key="post.id" :title="post.title">
        <NuxtImg 
          class="article__image" 
          :src="post.image" 
          :alt="post.title || 'Post image'"
          placeholder="/default-image.webp"
          fallback="/default-image.webp"
          width="280"
          height="280"
          loading="lazy"/>
        <h3 class="article__title">{{ post.preview }}</h3>
        <NuxtLink class="article__link" :to="`/article/${post.id}`" :aria-label="`Read more about ${post.title}`">Read more</NuxtLink>
      </article>
    </div>

    <div class="article__pagination pagination">
      <button class="pagination__page" :class="{ 'pagination__page--active': pageNumber === currentPage }"  
        v-for="pageNumber in visiblePages" :key="pageNumber"
        @click="goToPage(pageNumber)"
        >
        {{ pageNumber }}
      </button>

      <button class="pagination__next-btn" @click="nextPage" aria-label="Next articles">
        <IconsArrow aria-hidden="true"/>
      </button>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .articles{
    margin-bottom: 140px;
    @include container;

    &__grid{
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 40px 32px;
      width: 100%;
      margin-top: 59px
    }
  }

  .article{
    cursor: pointer;
    max-height: 396px;
    transition: transform 0.2s ease;

    &:hover{
      transform: translateY(-20px);

      .article__link{
        opacity: 1;
      }
    }
    
    &__image{
      height: 280px;
      width: 280px;
      object-fit: cover;
      margin-bottom: 24px;
    }

    &__title{
      line-height: 120%;
      font-weight: 400;
      font-size: 20px;
      transition: transform 0.2s ease;
      display: -webkit-box;
      line-clamp: 3;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    &__link{
      font-size: 20px;
      color: $pink-color;
      opacity: 0;
      margin-top: 12px;
    }
    
    &__pagination{
      margin-top: 50px;
    }
  }
  

  .pagination{
    display: flex;
    gap: 8px;

    &__page{
      height: 44px;
      width: 44px;
      border: none;
      border-radius: 12px;
      background-color: $gray-1-color;
      color: $black-color;
      font-size: 16px;

      &:hover:not(&--active){
        background-color: #E8E8E8;
      }

      &--active{
        color: $white-color;
        background-color: $black-color;
      }
    }

    &__next-btn{
      background: none;
      height: 44px;
      width: 44px;
      border: 1px solid #E8E8E8;
      border-radius: 12px;
      transition: background-color 0.2s ease;

      &:hover{
        background-color: #E8E8E8;
      }
    }
  }
</style>