<template>
  <header class="header-wrapper">
    <div class="header-wrapper__inner header-inner">
      <div class="header-wrapper__inner--logo header-inner__logo">
        <component :is="isTopPage ? 'h1' : 'p'">
          <nuxt-link to="/">
            <object type="image/svg+xml" data="/img/logo.svg" class="header-inner__logo--image"></object>
          </nuxt-link>
        </component>
      </div>

      <div class="header-wrapper__inner--menu header-inner__menu">
        <div
          class="header-inner__menu--g"
          @mouseover="mouseoverMenuOpen"
          @mouseleave="mouseleaveMenuOpen">
          <div id="link-wrapper-menuOpen" class="link-wrapper-menu">
            <span class="link-wrapper-menu__list link-wrapper-menu">
              <span class="link-wrapper-menu__list--item">MENU</span>
              <span class="link-wrapper-menu__list--item">MENU</span>
            </span>
          </div>
        </div>
      </div>

      <!-- <div class="glMenu">
        <div class="glMenu__scroll">
          <div class="glMenu__scroll--content">
            <nuxt-link to="#" class="menuSet__left--items">PROJECT</nuxt-link>
            <nuxt-link to="#" class="menuSet__left--items">ABOUT</nuxt-link>
            <a href="#" target="_blank">BLOG</a>
            <nuxt-link to="/#index-contact" class="menuSet__left--items">CONTACT</nuxt-link>
          </div>
        </div>
        <div class="glMenu__close">
          <div class="glMenu__close--g">CLOSE</div>
        </div>
      </div> -->
    </div>
  </header>
</template>

<script>
export default {
  computed: {
    // TOPページかどうか
    isTopPage() {
      if (this.$route.name === 'index') return true
      return false
    },
  },
  methods: {
    // for menu link
    mouseoverMenuOpen() {
      const linkWrapperMenuOpen = document.getElementById('link-wrapper-menuOpen')
      linkWrapperMenuOpen.classList.add('isHover')
    },
    mouseleaveMenuOpen() {
      const linkWrapperMenuOpen = document.getElementById('link-wrapper-menuOpen')
      linkWrapperMenuOpen.classList.remove('isHover')
    },
  },
}
</script>

<style lang="scss" scoped>
/* stylelint-disable */

.header-wrapper {
  position: fixed;
  top: 4rem; right: 4rem; left: 4rem;
}

.header-inner {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;

  &__logo {
  cursor: pointer;

    &--image {
      width: auto;
      height: 4rem;
    }
  }

  &__menu {
    font-size: 1.25vw;
  }
}
</style>