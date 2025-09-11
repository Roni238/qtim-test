<template>
    <div>
        {{ post }}
    </div>
</template>
<script setup lang="ts">
import type { Post } from "@/types/post.types"

const route = useRoute()
const { data: post, pending, error } = await useFetch<Post>(
  `https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts/${route.params.id}`
)

</script>
<style lang="scss" scoped>
    
</style>