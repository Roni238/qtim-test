import { ref, computed, type Ref } from 'vue';

export function usePagination<T>(
  items: Ref<T[]>,
  itemsPerPage: number = 8,
  maxVisiblePages: number = 5
) {
  const currentPage = ref(1)

  const totalPages = computed(() => {
    return Math.ceil(items.value.length / itemsPerPage)
  })

  const paginatedItems = computed(() => {
    const startIndex = (currentPage.value - 1) * itemsPerPage
    return items.value.slice(startIndex, startIndex + itemsPerPage)
  })

  const nextPage = () => {
    if (currentPage.value < totalPages.value) {
      currentPage.value++
    }
  }

  //на артиклах не понял появистя пред кнопка при пагинации или её и не должно быть, на всякий пусть будет метод
  const prevPage = () => {
    if (currentPage.value > 1) {
      currentPage.value--
    }
  }

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages.value) {
      currentPage.value = page;
    }
  }

  const visiblePages = computed(() => {
    const halfVisible = Math.floor(maxVisiblePages / 2)

    let startPage = Math.max(1, currentPage.value - halfVisible)
    let endPage = Math.min(totalPages.value, startPage + maxVisiblePages - 1)

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1)
    }

    const pages = []
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i)
    }

    return pages
  })

  return {
    currentPage,
    totalPages,
    paginatedItems,
    nextPage,
    prevPage,
    goToPage,
    visiblePages,
  };
}