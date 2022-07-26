<template>
  <div class="container">
    <TheShape />
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

.header-wrapper {
  z-index: 2;
}

.main-wrapper {
  z-index: 1;
}

.footer-wrapper {
  z-index: 1;
}
</style>