<template>
  <div class="colorMode-wrapper">
    <div class="colorMode-wrapper__color"></div>
    <div class="colorMode-wrapper__btn mouse-link">
      <input id="toggle" v-model="isDarkMode" class="toggle-input" type='checkbox' @change="toggleColorMode" />
      <label for="toggle" class="toggle-label" />
      <div id="toggle-text" class="toggle-text">DARK</div>
    </div>
  </div>
</template>

<script>
// /* eslint-disable */
export default {
  data() {
    return {
      isDarkMode: false
    }
  },
  methods: {
    toggleColorMode() {
      if (this.isDarkMode) {
        this.$colorMode.preference = 'dark'
        const toggleText = document.getElementById('toggle-text')
        toggleText.innerHTML = 'LIGHT'
      } else {
        this.$colorMode.preference = 'light'
        const toggleText = document.getElementById('toggle-text')
        toggleText.innerHTML = 'DARK'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
// /* stylelint-disable */
.colorMode-wrapper {
  position: fixed;
  bottom: 4rem; right: 4rem;
  font-size: 1vw;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;

  @include mq() {
    font-size: 1rem;
  }

  &__color {
    width: 2rem;
    height: 2rem;
    border-radius: 1rem;
    margin-bottom: 1.5rem;
    background-color: $key-color-purple;
  }

  &__btn {

    .toggle-input {
      position: absolute;
      top: 0; left: 0;
      width: 100%;
      height: 100%;
      z-index: 99;
      opacity: 0;
      display: none;
    }

    .toggle-label {
      display: inline-block;
      width: 4rem;
      height: 2rem;
      border-radius: 2rem;
      margin-bottom: 1rem;
      background-color: $key-color-lightgray;
      transition: $transition-primary;
      // cursor: pointer;
      position: relative;

      &:after {
        content: '';
        position: absolute;
        top: 0; left: 0;
        width: 2rem;
        height: 2rem;
        border-radius: 100%;
        background-color: $key-color-white;
        transition: $transition-primary;
      }
    }

    .toggle-input:checked + .toggle-label {
      background-color: $key-color-bluegray;

      &:after {
        left: 2rem;
      }
    }

     .toggle-text {
      text-align: center;
     }

  }
}
</style>