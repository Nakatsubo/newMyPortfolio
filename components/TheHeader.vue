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

      <div id="glMenu" class="glMenu">
        <div class="glMenu__scroll">
          <div class="glMenu__scroll--content glMenu-wrapper">
            <ul class="glMenu-wrapper__list">
              <li class="glMenu-wrapper__list--item">
                <nuxt-link to="#">PROJECT</nuxt-link>
              </li>
              <li class="glMenu-wrapper__list--item">
                <nuxt-link to="#">ABOUT</nuxt-link>
              </li>
              <li class="glMenu-wrapper__list--item">
                <a href="#" target="_blank">BLOG</a>
              </li>
              <li class="glMenu-wrapper__list--item">
                <nuxt-link to="/#index-contact">CONTACT</nuxt-link>
              </li>
            </ul>
          </div>
        </div>
        <div id="link-wrapper-menuClose" class="glMenu__close">
          <div class="glMenu__close--g">CLOSE</div>
        </div>
      </div>

    </div>
  </header>
</template>

<script>
import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// if (process.client) {
//   gsap.registerPlugin(ScrollTrigger)
// }
// gsap.config({
//   nullTargetWarn: false,
// });

/* eslint-disable */
export default {
  name: 'TheHeader',
  computed: {
    // TOPページかどうか
    isTopPage() {
      if (this.$route.name === 'index') return true
      return false
    },
  },
  mounted() {
    this.$setFillHeight()
    let viewWindowWidth = window.innerWidth
    window.addEventListener('resize', () => {
      if (viewWindowWidth === window.innerWidth) return
      viewWindowWidth = window.innerWidth
      this.$setFillHeight()
    })
    this.glMenu()
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
    // Global menu
    glMenu() {
      const glMenu = document.getElementById('glMenu')
      const linkWrapperMenuOpen = document.getElementById('link-wrapper-menuOpen')
      const linkWrapperMenuClose = document.getElementById('link-wrapper-menuClose')
      const shapeWrapper = document.getElementById('shape-wrapper')

      linkWrapperMenuOpen.addEventListener('click', function() {
        gsap.timeline()
          .killTweensOf(glMenu)
          .killTweensOf(linkWrapperMenuClose)
          .set(glMenu, {
            display: 'block',
            x: '-100%'
          })
          .to(glMenu, 0.5, {
            x: '0%',
            ease: 'Power3.easeIn',
            onComplete: function() {
              gsap.timeline()
                .killTweensOf(linkWrapperMenuClose)
                .to(linkWrapperMenuClose, 0.3, {
                  opacity: 1,
                  ease: 'Power3.easeOut'
                })
              }
          })
        // this.$bodyScrollPrevent(true)
        shapeWrapper.classList.add('isMenuOpen')
      })
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
  z-index: 99;

    &--image {
      width: auto;
      height: 4rem;
    }
  }

  &__menu {
    font-size: 1.25vw;
  }
}

// Global menu
.glMenu {
  display: none;
  position: fixed;
  top: 0; left: 0;
  width: 100%;
  height: 100%;
  min-height: calc(var(--vh, 1vh) * 100);
  background-color: $key-color-darkgray;
  &__scroll {
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    &--content {
      position: relative;
      width: 100%;
      height: 100%;
      min-height: 100%;
    }
  }
  &__close {
    position: absolute;
    width: 48px;
    height: 48px;
    top: 0;
    right: 0;
    opacity: 0;
  }
}
</style>