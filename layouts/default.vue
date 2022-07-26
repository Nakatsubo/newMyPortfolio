<template>
  <div class="container">
    <!-- <TheShape /> -->
    <TheHeader />
    <main class="main-wrapper">
      <Nuxt />
    </main>
    <TheFooter />
  </div>
</template>

<style lang="scss" scoped>
/* stylelint-disable */
.container {
  position: relative;
}

.main-wrapper {
  z-index: 2;
}
</style>