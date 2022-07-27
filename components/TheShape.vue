<template>
  <div id="shape-wrapper" class="shape-wrapper">
    <svg width="1688" height="1769" xmlns="http://www.w3.org/2000/svg" class="shape-wrapper__path shape-wrapper__path--01">
      <path d="M900.4 1490c-249.6 158.3-536.8 246-858.5 278L0 1741.8c40.8-9.7 71-2.2 234-40 163.2-37.8 290.4-74.5 427.2-163.5C864.7 1398.2 946 1193.2 717 852.7c-145.1-195.4-157-400.2-26.5-609.4C836.5 9.1 1181.2-78 1440.4 83.7c234 146.2 321.1 491 175 725.3-96 172.7-199.2 375.4-715 681z" stroke-width=".5" fill="none" fill-rule="evenodd"></path>
    </svg>
    <svg width="2145" height="2248" xmlns="http://www.w3.org/2000/svg" class="shape-wrapper__path shape-wrapper__path--02">
      <path d="M1000.7 354.3C1317.8 153 1682.9 41.6 2091.7 1l53.3 33.3c-51.9 12.3-90.2 2.8-297.5 50.9-207.3 48-369 94.7-542.9 207.8-258.5 178.1-361.9 438.7-70.8 871.4 184.4 248.4 199.4 508.7 33.7 774.6-185.6 297.7-623.7 408.4-953 202.8C17 1956.1-93.7 1517.7 91.9 1220c122-219.6 253.3-477.2 908.8-865.7z" stroke-width=".5" fill="none" fill-rule="evenodd"></path>
    </svg>
  </div>
</template>

<style lang="scss" scoped>
// /* stylelint-disable */

.shape-wrapper {
  position: fixed;
  top: 0; right: 0; bottom: 0; left: 0;
  z-index: 0;
  overflow: hidden;
  pointer-events: none;

  &__path {
    position: absolute;
    opacity: 0.2;

    &--01 {
      bottom: 50%; right: 50%;
      margin-bottom: -300px;
      margin-right: -400px;
      animation: shape01 20s infinite alternate linear;
    }

    &--02 {
      top: 50%; left: 50%;
      margin-top: -600px;
      margin-left: -475px;
      transform: rotate(15deg);
      animation: shape02 20s infinite alternate linear;
    }

    path {
      stroke: $key-color-black;
      transition: all 0.4s linear;
    }

  }
}

.shape-wrapper.isMenuOpen {
  // background-color: $key-color-darkgray;
  z-index: 99;

  path {
    stroke: $key-color-white;
  }
}


@keyframes shape01 {
  0% {
    transform: translateY(0) rotate(0deg);
  }
  100% {
    transform: translateY(20%) rotate(20deg);
  }
}

@keyframes shape02 {
  0% {
    transform: translateY(0) rotate(15deg);
  }
  100% {
    transform: translateY(-20%) rotate(25deg);
  }
}
</style>