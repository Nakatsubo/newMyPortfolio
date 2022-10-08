<template>
  <div id="loader-wrapper" class="loader-wrapper">
    <div id="loader" class="loader-wrapper__loader"></div>
  </div>
</template>

<script>
export default {
  name: 'TheLoader',
}
</script>

<style lang="scss" scoped>
// Animation
@-webkit-keyframes loader {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
@keyframes loader {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.loader-wrapper {
  width: 100vw;
  height: 100vh;
  background-color: $color-body-background-primary;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 102;

  &__loader {
    display: block;
    width: 3rem;
    height: 3rem;
    position: absolute;
    top: 45%; left: 50%;
    transform: translate(-50%, -50%);
    z-index: 103;

    &:before,
    &:after {
      content: '';
      display: block;
      width: 100%;
      height: 100%;
      border-radius: 110%;
      margin-left: -50%;
      position: absolute;
      top: 40%; left: 50%;
    }

    &:before {
      border: 1px solid rgba(51, 51, 51, 0.15);
    }

    &:after {
      animation: loader 0.75s linear infinite;
      border: 1px solid transparent;
      border-top-color: rgba(102, 102, 102, 1);
    }
  }
}

.loader-wrapper.isLoaded {
  opacity: 0;
  visibility: hidden;
}

// dark-mode
html.dark-mode .loader-wrapper {
  background-color: $color-body-background-secondary;
}

html.dark-mode .loader-wrapper .loader-wrapper__loader::before{
  border: 1px solid rgba(255, 255, 255, 0.15);
}
</style>