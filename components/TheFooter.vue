<template>
  <footer class="footer-wrapper">
    <p class="footer-wrapper__copyright">
      <small>&copy; YUSUKE NAKATSUBO</small>
    </p>
  </footer>
</template>

<style lang="scss" scoped>

.footer-wrapper {
  width: 100%;
  height: auto;
  padding: 4rem;
  text-align: center;
  position: fixed;
  bottom: 0; left: 0;

  @include mq() {
    padding: 3.6rem 2.4rem;
  }

  &__copyright {
    font-size: max(1vw, 1rem);
    font-weight: 500;
    letter-spacing: 0.08rem;
    opacity: 0.4;

    @include mq() {
      font-size: 1rem;
    }
  }

}

html.dark-mode .footer-wrapper__copyright {
  opacity: 0.8;
}

</style>