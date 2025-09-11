<template>
  <div>
    <Header />
    <main class="main">
      <slot /> 
    </main>
    <Footer/>
  </div>
</template>

<style lang="scss" soped>
.main{
  margin-block: 120px 80px;
}
</style>