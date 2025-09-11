<template>
  <div>
    <Header />
    <main class="main">
      <slot /> 
    </main>
  </div>
</template>

<style lang="scss" soped>
.main{
  margin-top: 120px;
}
</style>