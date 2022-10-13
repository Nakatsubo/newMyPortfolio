<template>
  <header id="header-wrapper" class="header-wrapper">
    <div class="header-wrapper__inner header-inner mouse-link">
      <div class="header-wrapper__inner--logo header-inner__logo link-wrapper-glMenu mouse-link">
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

      <div id="menu-open-btn" class="header-wrapper__inner--menu header-inner__menu mouse-link">
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
                    to="/project"
                    class="glMenu-item-project"
                    >
                    <div id="link-wrapper-project" class="link-wrapper-glMenu mouse-link">
                      <span class="link-cover"></span>
                      <span class="link-wrapper-glMenu__list">
                        <span class="link-wrapper-glMenu__list--item">PROJECT</span>
                        <span class="link-wrapper-glMenu__list--item">PROJECT</span>
                      </span>
                    </div>
                  </nuxt-link>
                </li>
                <li class="glMenu-wrapper-top__list--item" @mouseover="mouseoverAbout" @mouseleave="mouseleaveAbout">
                  <nuxt-link
                    to="/about"
                    class="glMenu-item-about"
                    >
                    <div id="link-wrapper-about" class="link-wrapper-glMenu mouse-link">
                      <span class="link-cover"></span>
                      <span class="link-wrapper-glMenu__list">
                        <span class="link-wrapper-glMenu__list--item">ABOUT</span>
                        <span class="link-wrapper-glMenu__list--item">ABOUT</span>
                      </span>
                    </div>
                  </nuxt-link>
                </li>
                <li class="glMenu-wrapper-top__list--item" @mouseover="mouseoverBlog" @mouseleave="mouseleaveBlog">
                  <nuxt-link
                    to="/blog"
                    class="glMenu-item-blog"
                    >
                    <div id="link-wrapper-blog" class="link-wrapper-glMenu mouse-link">
                      <span class="link-cover"></span>
                      <span class="link-wrapper-glMenu__list">
                        <span class="link-wrapper-glMenu__list--item">BLOG</span>
                        <span class="link-wrapper-glMenu__list--item">BLOG</span>
                      </span>
                    </div>
                  </nuxt-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div id="menu-close-btn" class="glMenu__close mouse-link">
          <div
            class="glMenu__close--g"
            @mouseover="mouseoverMenuClose"
            @mouseleave="mouseleaveMenuClose">
            <div id="link-wrapper-menuClose" class="link-wrapper-menu">
              <span class="link-cover"></span>
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
      const linkWrapperGlMenu = document.getElementsByClassName('link-wrapper-glMenu')

      function showMenuItem() {
        const linkCovers = document.querySelectorAll('.link-cover')

        linkCovers.forEach((linkCover) => {
          gsap.timeline()
            .add(showTimeline(linkCover))
        })
      }

      function showTimeline(target) {
        const tl =
          gsap.timeline()
          .set(target, {
            x: '0%',
            ease: 'Power3.easeIn'
          })
          .to(target, {
            x: '100%',
            duration: 0.25,
          })
        return tl;
      }

      function hideMenuItem() {
        const linkCovers = document.querySelectorAll('.link-cover')

        linkCovers.forEach((linkCover) => {
          gsap.timeline()
            .add(hideTimeline(linkCover))
        })
      }

      function hideTimeline(target) {
        const tl =
          gsap.timeline()
          .set(target, {
            x: '100%',
            ease: 'Power3.easeIn'
          })
          .to(target, {
            x: '0%',
            duration: 0.25,
          })
        return tl;
      }

      // this -> アロー関数で指定するとトップレベルのthisを参照する
      menuOpenBtn.addEventListener('click', () => {
        gsap.timeline()
          .set(glMenu, {
            display: 'block',
            y: '100%'
          })
          .to(glMenu, 0.4, {
            delay: 0.2,
            y: '0%',
            ease: 'Power3.easeIn',
            onComplete: () => {
              gsap.timeline()
                .to(menuCloseBtn, 0.3, {
                  opacity: 1,
                  ease: 'Power3.easeOut'
                })
              }
          })
          .call(showMenuItem)
        setTimeout(() => {
          headerWrapper.classList.add('isMenuOpen')
          wallPaperWrapper.classList.add('isMenuOpen')
        }, 600)
      })

      menuCloseBtn.addEventListener('click', () => {
        gsap.timeline()
          .call(hideMenuItem)
          .set(glMenu, {
            display: 'block',
            y: '0%'
          })
          .to(glMenu, 0.4, {
            delay: 0.2,
            y: '-100%',
            ease: 'Power3.easeOut',
            onComplete: () => {
              glMenu.style.display = 'none'
            }
          })
        setTimeout(() => {
          wallPaperWrapper.classList.remove('isMenuOpen')
          headerWrapper.classList.remove('isMenuOpen')
        }, 600)
      })

      for(let i = 0; i < linkWrapperGlMenu.length; i += 1) {
        linkWrapperGlMenu[i].addEventListener('click', () => {
          gsap.timeline()
            .call(hideMenuItem)
            .to(glMenu, 0.4, {
              delay: 0.2,
              y: '-100%',
              ease: 'Power3.easeOut',
              onComplete: () => {
                glMenu.style.display = 'none'
              }
            }
          )
          headerWrapper.classList.remove('isMenuOpen')
          wallPaperWrapper.classList.remove('isMenuOpen')
        })
      }
    },
  },
}
</script>

<style lang="scss" scoped>

// Layout
.header-wrapper {
  width: 100%;
  height: auto;
  padding: 4rem 4rem 0;
  position: fixed;
  top: 0; left: 0;

  @include mq() {
    padding: 3.6rem 2.4rem 0 2.4rem;
  }
}

.header-inner {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;

  &__logo {
  z-index: 98;

    a {
      display: inline-block;
    }

    &--image {
      width: auto;
      height: 3.2rem;
      fill: $key-color-purple;
    }
  }

  &__menu {
    padding-top: 1.1rem;
    font-size: 1.2rem;
    font-weight: 500;
    letter-spacing: 0.08rem;

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
    padding-top: 1.1rem;
    position: absolute;
    top: 4rem; right: 4rem;
    font-size: 1.2rem;
    font-weight: 500;
    letter-spacing: 0.08rem;
    color: $key-color-white;
    opacity: 0;

    @include mq() {
      top: 3.6rem; right: 2.4rem;
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

    @include mq() {
      flex-flow: column nowrap;
    }

    &--item {
      margin-left: 8rem;
      font-size: max(2vw, 2rem);
      font-weight: 400;
      letter-spacing: 0.08em;

      &:first-of-type {
        margin-left: 0;
      }

      @include mq() {
        margin-bottom: 3rem;
        margin-left: 0;
        font-size: 2rem;

        &:last-of-type {
          margin-bottom: 0;
        }
      }
    }
  }
}

</style>