<template>
  <div>
    <LayoutsHeader />
    <main class="main">
      <slot /> 
    </main>
    <LazyLayoutsFooter/>
  </div>
</template>

<style lang="scss" soped>
.main{
  margin-block: 120px 80px;
}
</style>