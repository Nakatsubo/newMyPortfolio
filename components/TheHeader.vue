<template>
  <header id="header-wrapper" class="header-wrapper">
    <div class="header-wrapper__inner header-inner">
      <div class="header-wrapper__inner--logo header-inner__logo">
        <component :is="isTopPage ? 'h1' : 'p'">
          <nuxt-link to="/">
            <svg xmlns="http://www.w3.org/2000/svg" class="header-inner__logo--image" viewBox="0 0 50 50">
              <title>YUSUKE NAKATSUBO</title>
              <path d="M14.919,50 4.839,37.5 4.839,50z"/>
              <path d="M14.919,3.125L4.839,0c0,1.983,0,7.324,0,9.375l30.242,37.5L45.161,50c0-1.983,0-7.324,0-9.375L14.919,3.125z"/>
              <path d="M40.121,0c-2.513,0-7.569,0-10.081,0l10.081,6.25l5.04,6.25V0H40.121z"/>
            </svg>
          </nuxt-link>
        </component>
      </div>

      <div id="menu-open-btn" class="header-wrapper__inner--menu header-inner__menu">
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
            <div class="glMenu-wrapper-top">
              <ul class="glMenu-wrapper-top__list">
                <li class="glMenu-wrapper-top__list--item" @mouseover="mouseoverProject" @mouseleave="mouseleaveProject">
                  <nuxt-link
                    to="#"
                    class="glMenu-item-project"
                    >
                    <div id="link-wrapper-project" class="link-wrapper-glMenu">
                      <span class="link-wrapper-glMenu__list">
                        <span class="link-wrapper-glMenu__list--item">PROJECT</span>
                        <span class="link-wrapper-glMenu__list--item">PROJECT</span>
                      </span>
                    </div>
                  </nuxt-link>
                </li>
                <li class="glMenu-wrapper-top__list--item" @mouseover="mouseoverAbout" @mouseleave="mouseleaveAbout">
                  <nuxt-link
                    to="#"
                    class="glMenu-item-about"
                    >
                    <div id="link-wrapper-about" class="link-wrapper-glMenu">
                      <span class="link-wrapper-glMenu__list">
                        <span class="link-wrapper-glMenu__list--item">ABOUT</span>
                        <span class="link-wrapper-glMenu__list--item">ABOUT</span>
                      </span>
                    </div>
                  </nuxt-link>
                </li>
                <li class="glMenu-wrapper-top__list--item" @mouseover="mouseoverBlog" @mouseleave="mouseleaveBlog">
                  <a
                    href="#"
                    target="_blank">
                    <div id="link-wrapper-blog" class="link-wrapper-glMenu">
                      <span class="link-wrapper-glMenu__list">
                        <span class="link-wrapper-glMenu__list--item">BLOG</span>
                        <span class="link-wrapper-glMenu__list--item">BLOG</span>
                      </span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div id="menu-close-btn" class="glMenu__close">
          <div
            class="glMenu__close--g"
            @mouseover="mouseoverMenuClose"
            @mouseleave="mouseleaveMenuClose">
            <div id="link-wrapper-menuClose" class="link-wrapper-menu">
              <span class="link-wrapper-menu__list link-wrapper-menu">
                <span class="link-wrapper-menu__list--item">CLOSE</span>
                <span class="link-wrapper-menu__list--item">CLOSE</span>
              </span>
            </div>
          </div>
        </div>
      </div>

    </div>
  </header>
</template>

<script>
import { gsap } from 'gsap';

/* eslint-disable */
export default {
  name: 'TheHeader',
  computed: {
    isTopPage() {
      if (this.$route.name === 'index') return true
      return false
    },
  },
  mounted() {
    // Set Fill Height
    this.$setFillHeight()
    let viewWindowWidth = window.innerWidth
    window.addEventListener('resize', () => {
      if (viewWindowWidth === window.innerWidth) return
      viewWindowWidth = window.innerWidth
      this.$setFillHeight()
    })

    // Global Menu
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
    mouseoverMenuClose() {
      const linkWrapperMenuClose = document.getElementById('link-wrapper-menuClose')
      linkWrapperMenuClose.classList.add('isHover')
    },
    mouseleaveMenuClose() {
      const linkWrapperMenuClose = document.getElementById('link-wrapper-menuClose')
      linkWrapperMenuClose.classList.remove('isHover')
    },
    mouseoverProject() {
      const linkWrapperProject = document.getElementById('link-wrapper-project')
      linkWrapperProject.classList.add('isHover')
    },
    mouseleaveProject() {
      const linkWrapperProject = document.getElementById('link-wrapper-project')
      linkWrapperProject.classList.remove('isHover')
    },
    mouseoverAbout() {
      const linkWrapperAbout = document.getElementById('link-wrapper-about')
      linkWrapperAbout.classList.add('isHover')
    },
    mouseleaveAbout() {
      const linkWrapperAbout = document.getElementById('link-wrapper-about')
      linkWrapperAbout.classList.remove('isHover')
    },
    mouseoverBlog() {
      const linkWrapperBlog = document.getElementById('link-wrapper-blog')
      linkWrapperBlog.classList.add('isHover')
    },
    mouseleaveBlog() {
      const linkWrapperBlog = document.getElementById('link-wrapper-blog')
      linkWrapperBlog.classList.remove('isHover')
    },

    // Global Menu
    glMenu() {
      const glMenu = document.getElementById('glMenu')
      const menuOpenBtn = document.getElementById('menu-open-btn')
      const menuCloseBtn = document.getElementById('menu-close-btn')
      const headerWrapper = document.getElementById('header-wrapper')
      const wallPaperWrapper = document.getElementById('wallPaper-wrapper')

      // this -> アロー関数で指定するとトップレベルのthisを参照する
      menuOpenBtn.addEventListener('click', () => {
        gsap.timeline()
          .killTweensOf(glMenu)
          .killTweensOf(menuCloseBtn)
          .set(glMenu, {
            display: 'block',
            x: '-100%'
          })
          .to(glMenu, 0.5, {
            x: '0%',
            ease: 'Power3.easeIn',
            onComplete: () => {
              gsap.timeline()
                .killTweensOf(menuCloseBtn)
                .to(menuCloseBtn, 0.3, {
                  opacity: 1,
                  ease: 'Power3.easeOut'
                })
              }
          })
        this.$bodyScrollPrevent(true)
        headerWrapper.classList.add('isMenuOpen')
        wallPaperWrapper.classList.add('isMenuOpen')
      })

      menuCloseBtn.addEventListener('click', () => {
        gsap.timeline()
          .killTweensOf(glMenu)
          .killTweensOf(menuOpenBtn)
          .to(glMenu, 0.4, {
            delay: .2,
            x: '-100%',
            ease: 'Power2.easeIn',
            onComplete: () => {
              glMenu.style.display = 'none'
            }
          }
        )
        this.$bodyScrollPrevent(false)
        headerWrapper.classList.remove('isMenuOpen')
        wallPaperWrapper.classList.remove('isMenuOpen')
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
  z-index: 98;

    &--image {
      width: auto;
      height: 4rem;
      fill: $key-color-purple;
    }
  }

  &__menu {
    font-size: 1.25vw;

    @include mq() {
      font-size: 1.2rem;
    }
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
    top: calc(4rem + 1.25vw / 2); right: 4rem;
    font-size: 1.25vw;
    color: $key-color-white;
    opacity: 0;

    @include mq() {
      top: 5.2rem;
      font-size: 1.2rem;
    }
  }

}

.header-wrapper.isMenuOpen {
  z-index: 98;

  .header-inner__logo--image {
    fill: $key-color-white;
  }
}

.glMenu-wrapper {
  width: 100%;
  height: 100%;
  min-height: calc(var(--vh, 1vh) * 100);
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  color: $key-color-white;
}

.glMenu-wrapper-top {

  &__list {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    font-size: 3vw;

    @include mq() {
      flex-flow: column nowrap;
      font-size: 2.4rem;
    }

    &--item {
      margin-left: 6rem;

      &:first-of-type {
        margin-left: 0;
      }

      @include mq() {
        margin-bottom: 6rem;
        margin-left: 0;
      }
    }
  }
}

</style>