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
    <TheLoader v-if="isLoaded" />
  </div>
</template>

<script>
import TheLoader from '~/components/TheLoader.vue'
export default {
  components: {
    TheLoader,
  },
  data() {
    return {
      isLoaded: true,
    }
  },
  mounted() {
    this.$nextTick(() => {
      // Adobe Fonts
      this.$adobeFonts(document)

      if (document.getElementsByTagName('html')[0].classList.contains('wf-active')) {
        this.isLoaded = false
      }

      setTimeout(() => {
        this.isLoaded = false
      }, 3000)
    })
  },
}
</script>

<style lang="scss" scoped>
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
  z-index: 3;
}

.main-wrapper {
  z-index: 2;
}

.footer-wrapper {
  z-index: 1;
}
</style>