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
  padding: 0 4rem 4rem;
  text-align: center;
  position: fixed;
  bottom: 0; left: 0;

  @include mq() {
    padding: 0 2.4rem 3.6rem;
  }

  &__copyright {
    font-size: max(1vw, 1rem);

    @include mq() {
      font-size: 1rem;
    }
  }

}

</style>