<template>
  <div class="container">
    <TheCursor />
    <TheWallPaper />
    <TheHeader />
    <main class="main-wrapper">
      <Nuxt />
    </main>
    <TheFooter />
    <TheColorMode />
  </div>
</template>

<script>
export default {
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start();

      // Adobe Fonts
      this.$adobeFonts(document);

      setTimeout(() => this.$nuxt.$loading.finish(), 500);
    });
  },
}
</script>

<style lang="scss" scoped>
/* stylelint-disable */
.container {
  position: relative;

  // lightMode
  &.lightMode {
    background-color: $color-body-background-primary;
    color: $text-color-primary;
  }

  // darkMode
  &.darkMode {
    background-color: $color-body-background-secondary;
    color: $text-color-secondary;
  }
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