<template>
  <footer class="footer-wrapper">
    <p class="footer-wrapper__copyright">
      <small>&copy; YUSUKE NAKATSUBO</small>
    </p>
  </footer>
</template>

<style lang="scss" scoped>
.footer-wrapper {
  position: fixed;
  bottom: 4rem;
  left: 50%;
  transform: translateX(-50%);

  @include mq() {
    bottom: 3.6rem;
  }

  &__copyright {
    font-size: max(1vw, 1rem);

    @include mq() {
      font-size: 1rem;
    }
  }

}
</style>