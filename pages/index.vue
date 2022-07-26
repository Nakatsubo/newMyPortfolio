<template>
  <div class="index-wrapper">

    <section class="index-wrapper__section isFirst blue">
      <div class="index-wrapper__section--introduction section-inner introduction-wrapper">
        <div class="section-inner__title introduction-wrapper__greet">
          <h1 class="introduction-wrapper__greet--title isSerif">
            WELCOME TO<br>
            THE WORKSPACE OF<br>
            <span class="isDetail isColoring">YUSUKE NAKATSUBO</span>
          </h1>
           <p class="introduction-wrapper__greet--subtitle">
             WEB DESIGNER, WEB DEVELOPER & WEB DIRECTER IN TOKYO.
           </p>
        </div>
      </div>
      <div class="introduction-arrow">
        <object type="image/svg+xml" data="/img/arrow.svg" class="introduction-arrow__image"></object>
      </div>
    </section>

    <section class="index-wrapper__section red">
      <div class="index-wrapper__section--project section-inner project-wrapper">
        <div class="section-inner__title project-wrapper__title">
          <h1 class="section-inner__title--text project-wrapper--text">
            PROJECT
          </h1>
        </div>
        <div class="section-inner__heading project-wrapper__heading">
          <p class="section-inner__heading--text project-wrapper__heading--text isSerif">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div class="section-inner__body project-wrapper__body">
          <p class="section-inner__body--text project-wrapper__body--text">
            これは生涯おそらくいわゆる学習通りにおいてもののために思っなな。とうてい晩に想像年は無論こういう批評ですうなどが入ってならんをは関係するたですし、どうにも聴きありましないなかっ。弁当に忘れるないものはようやく時間がどうしてもでないん。とうとう久原さんから注意性全く開始がありでしょ先生その支私か滅亡がというご区別ませますですでしば、その今日はおれか仕儀仕合せが思いて、岡田さんの事を数のそれにけっしてご努力とできて私自己をご意味をするように無論お教育で思わべきですば、常に何だか蹂躙にできるだておりなのに見せるでしょまし。
          </p>
        </div>
      </div>
      <div class="index-wrapper__section--link">
        <a
          href="#"
          @mouseover="mouseoverProject"
          @mouseleave="mouseleaveProject">
          <div id="link-wrapper-project" class="link-wrapper-viewmore">
            <span class="link-wrapper-viewmore__list">
              <span class="link-wrapper-viewmore__list--item">VIEW MORE</span>
              <span class="link-wrapper-viewmore__list--item">VIEW MORE</span>
            </span>
          </div>
        </a>
      </div>
    </section>

    <section class="index-wrapper__section orange">
      <div class="index-wrapper__section--about section-inner about-wrapper">
        <div class="section-inner__title about-wrapper__title">
          <h1 class="section-inner__title--text about-wrapper__heading--text">
            ABOUT
          </h1>
        </div>
        <div class="section-inner__heading about-wrapper__heading">
           <p class="section-inner__heading--text about-wrapper__heading--text isSerif">
             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
           </p>
        </div>
        <div class="section-inner__body about-wrapper__body">
          <p class="section-inner__body--text about-wrapper__body--text">
            これは生涯おそらくいわゆる学習通りにおいてもののために思っなな。とうてい晩に想像年は無論こういう批評ですうなどが入ってならんをは関係するたですし、どうにも聴きありましないなかっ。弁当に忘れるないものはようやく時間がどうしてもでないん。とうとう久原さんから注意性全く開始がありでしょ先生その支私か滅亡がというご区別ませますですでしば、その今日はおれか仕儀仕合せが思いて、岡田さんの事を数のそれにけっしてご努力とできて私自己をご意味をするように無論お教育で思わべきですば、常に何だか蹂躙にできるだておりなのに見せるでしょまし。
          </p>
        </div>
      </div>
      <div class="index-wrapper__section--link">
        <a
          href="#"
          @mouseover="mouseoverAbout"
          @mouseleave="mouseleaveAbout">
          <div id="link-wrapper-about" class="link-wrapper-viewmore">
            <span class="link-wrapper-viewmore__list">
              <span class="link-wrapper-viewmore__list--item">VIEW MORE</span>
              <span class="link-wrapper-viewmore__list--item">VIEW MORE</span>
            </span>
          </div>
        </a>
      </div>
    </section>

    <section class="index-wrapper__section purple">
      <div class="index-wrapper__section--blog section-inner blog-wrapper">
        <div class="section-inner__title blog-wrapper__title">
          <h1 class="section-inner__title--text blog-wrapper__title--text">
            BLOG
          </h1>
        </div>
        <div class="section-inner__heading blog-wrapper__heading">
          <p class="section-inner__heading--text blog-wrapper__heading--text isSerif">
            COMING SOON
          </p>
        </div>
        <!-- <div class="section-inner__body blog-wrapper__body">
          <p class="section-inner__body--text blog-wrapper__body--text">

          </p>
        </div> -->
      </div>
      <!-- <div class="index-wrapper__section--link">
        <a
          href="#"
          target="_blank"
          @mouseover="mouseoverBlog"
          @mouseleave="mouseleaveBlog">
          <div id="link-wrapper-blog" class="link-wrapper-viewmore">
            <span class="link-wrapper-viewmore__list">
              <span class="link-wrapper-viewmore__list--item">VISIT BLOG</span>
              <span class="link-wrapper-viewmore__list--item">VISIT BLOG</span>
            </span>
          </div>
        </a>
      </div> -->
    </section>

    <section class="index-wrapper__section green">
      <div class="index-wrapper__section--contact section-inner contact-wrapper">
        <div class="section-inner__title contact-wrapper__title">
          <h1 class="section-inner__title--text contact-wrapper__title--text">
            CONTACT
          </h1>
        </div>
        <div class="section-inner__heading contact-wrapper__heading">
          <a
            href="mailto:info@yusukenakatsubo.com"
            class="section-inner__heading--text contact-wrapper__heading--text isSerif"
            @mouseover="mouseoverContact"
            @mouseleave="mouseleaveContact">
            <div id="link-wrapper-contact" class="link-wrapper-contact">
              <span>DROP ME AN</span>
              <span class="link-wrapper-contact__list isColoring">
                <span class="link-wrapper-contact__list--item">MAIL FORM</span>
                <span class="link-wrapper-contact__list--item">MAIL FORM</span>
              </span>
            </div>
          </a>
        </div>
      </div>
      <div class="index-wrapper__section--sns-wrapper sns-wrapper">
        <ul class="index-wrapper__section--sns-wrapper__sns-list sns-wrapper__sns-list">
          <li class="sns-wrapper__sns-list--item">
            <a
              href="#"
              target="_blank"
              class="sns-item-linkedin"
              @mouseover="mouseoverLinkedin"
              @mouseleave="mouseleaveLinkedin">
              <div id="link-wrapper-linkedin" class="link-wrapper-sns">
                <span class="link-wrapper-sns__list">
                  <span class="link-wrapper-sns__list--item">LINKEDIN</span>
                  <span class="link-wrapper-sns__list--item">LINKEDIN</span>
                </span>
              </div>
            </a>
          </li>
          <li class="sns-wrapper__sns-list--item">
            <a
              href="#"
              target="_blank"
              class="sns-item-facebbook"
              @mouseover="mouseoverFacebook"
              @mouseleave="mouseleaveFacebook">
              <div id="link-wrapper-facebook" class="link-wrapper-sns">
                <span class="link-wrapper-sns__list">
                  <span class="link-wrapper-sns__list--item">FACEBOOK</span>
                  <span class="link-wrapper-sns__list--item">FACEBOOK</span>
                </span>
              </div>
            </a>
          </li>
          <li class="sns-wrapper__sns-list--item">
            <a
              href="#"
              target="_blank"
              class="sns-item-twitter"
              @mouseover="mouseoverTwitter"
              @mouseleave="mouseleaveTwitter">
              <div id="link-wrapper-twitter" class="link-wrapper-sns">
                <span class="link-wrapper-sns__list">
                  <span class="link-wrapper-sns__list--item">TWITTER</span>
                  <span class="link-wrapper-sns__list--item">TWITTER</span>
                </span>
              </div>
            </a>
          </li>
          <li class="sns-wrapper__sns-list--item">
            <a
              href="#"
              target="_blank"
              class="sns-item-instagram"
              @mouseover="mouseoverInstagram"
              @mouseleave="mouseleaveInstagram">
              <div id="link-wrapper-instagram" class="link-wrapper-sns">
                <span class="link-wrapper-sns__list">
                  <span class="link-wrapper-sns__list--item">INSTAGRAM</span>
                  <span class="link-wrapper-sns__list--item">INSTAGRAM</span>
                </span>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </section>

    <div class="index-wrapper__list">
      <div class="index-wrapper__list--item item-wrapper">
        <div class="item-wrapper__number">01</div>
        <div class="item-wrapper__border"></div>
        <div class="item-wrapper__text">INTRODUCTION</div>
      </div>
      <div class="index-wrapper__list--item item-wrapper">
        <div class="item-wrapper__number">02</div>
        <div class="item-wrapper__border"></div>
        <div class="item-wrapper__text">PROJECT</div>
      </div>
      <div class="index-wrapper__list--item item-wrapper">
        <div class="item-wrapper__number">03</div>
        <div class="item-wrapper__border"></div>
        <div class="item-wrapper__text">ABOUT</div>
      </div>
      <div class="index-wrapper__list--item item-wrapper">
        <div class="item-wrapper__number">04</div>
        <div class="item-wrapper__border"></div>
        <div class="item-wrapper__text">BLOG</div>
      </div>
      <div class="index-wrapper__list--item item-wrapper">
        <div class="item-wrapper__number">05</div>
        <div class="item-wrapper__border"></div>
        <div class="item-wrapper__text">CONTACT</div>
      </div>
    </div>

  </div>
</template>

<script>
// gsap
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
if (process.client) {
  gsap.registerPlugin(ScrollTrigger)
}

/* eslint-disable */
export default {
  name: 'IndexPage',
  // data() {
  //   return {
  //   }
  // },
  mounted() {
    this.$setFillHeight()
    let viewWindowWidth = window.innerWidth
    window.addEventListener('resize', () => {
      if (viewWindowWidth === window.innerWidth) return
      viewWindowWidth = window.innerWidth
      this.$setFillHeight()
    })

    // Adobe Fonts
    this.$adobeFonts(document)

    // Section transition
    const sections = gsap.utils.toArray('.index-wrapper__section')
    const lists = gsap.utils.toArray('.index-wrapper__list--item')

    let currentSection = sections[0]

    gsap.defaults({
      overwrite: 'auto',
      duration: 1
    })

    gsap.set('body', {
      height: (sections.length * 100) + '%'
    })

    sections.forEach((section, i) => {
      ScrollTrigger.create({
        start: () => (i - 0.5) * innerHeight,
        end: () => (i + 0.5) * innerHeight,
        scrub: true,
        markers: true,
        toggleActions: 'play reset play reset',
        onToggle: self => self.isActive && setSection(section),
        onEnter: () => {
          lists.forEach((e) => {
            e.classList.remove('isActive')
          })
          lists[i].classList.add('isActive')
        },
        onEnterBack: () => {
          lists.forEach((e) => {
            e.classList.remove('isActive')
          })
          lists[i].classList.add('isActive')
        }
      })
    })

    function setSection(newSection) {
      if (newSection !== currentSection) {
        gsap.timeline()
          .to(currentSection, {
            autoAlpha: 0,
            duration: 0.45
          })
          .to(currentSection.querySelector('.section-inner__title'), {
            y: -10,
            autoAlpha: 0,
            duration: 0.3
          })
          .to(currentSection.querySelector('.section-inner__heading'), {
            y: -10,
            autoAlpha: 0,
            duration: 0.3
          })
          .to(currentSection.querySelector('.section-inner__body'), {
            y: -10,
            autoAlpha: 0,
            duration: 0.3
          })

        gsap.timeline()
          .to(newSection, {
            autoAlpha: 1,
            duration: 0.45
          })
          .fromTo(newSection.querySelector('.section-inner__title'), {
            y: 10,
            autoAlpha: 0
          },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.3
          })
          .fromTo(newSection.querySelector('.section-inner__heading'), {
            y: 10,
            autoAlpha: 0
          },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.3
          })
          .fromTo(newSection.querySelector('.section-inner__body'), {
            y: 10,
            autoAlpha: 0
          },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.3
          })

        currentSection = newSection

      }
    }

  },
  methods: {
    // for internal link
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
    // for Blog
    mouseoverBlog() {
      const linkWrapperBlog = document.getElementById('link-wrapper-blog')
      linkWrapperBlog.classList.add('isHover')
    },
    mouseleaveBlog() {
      const linkWrapperBlog = document.getElementById('link-wrapper-blog')
      linkWrapperBlog.classList.remove('isHover')
    },
    // for Contact
    mouseoverContact() {
      const linkWrapperContact = document.getElementById('link-wrapper-contact')
      linkWrapperContact.classList.add('isHover')
    },
    mouseleaveContact() {
      const linkWrapperContact = document.getElementById('link-wrapper-contact')
      linkWrapperContact.classList.remove('isHover')
    },
    // for SNS
    mouseoverLinkedin() {
      const linkWrapperLinkedin = document.getElementById('link-wrapper-linkedin')
      linkWrapperLinkedin.classList.add('isHover')
    },
    mouseleaveLinkedin() {
      const linkWrapperLinkedin = document.getElementById('link-wrapper-linkedin')
      linkWrapperLinkedin.classList.remove('isHover')
    },
    mouseoverFacebook() {
      const linkWrapperFacebook = document.getElementById('link-wrapper-facebook')
      linkWrapperFacebook.classList.add('isHover')
    },
    mouseleaveFacebook() {
      const linkWrapperFacebook = document.getElementById('link-wrapper-facebook')
      linkWrapperFacebook.classList.remove('isHover')
    },
    mouseoverTwitter() {
      const linkWrapperTwitter = document.getElementById('link-wrapper-twitter')
      linkWrapperTwitter.classList.add('isHover')
    },
    mouseleaveTwitter() {
      const linkWrapperTwitter = document.getElementById('link-wrapper-twitter')
      linkWrapperTwitter.classList.remove('isHover')
    },
    mouseoverInstagram() {
      const linkWrapperInstagram = document.getElementById('link-wrapper-instagram')
      linkWrapperInstagram.classList.add('isHover')
    },
    mouseleaveInstagram() {
      const linkWrapperInstagram = document.getElementById('link-wrapper-instagram')
      linkWrapperInstagram.classList.remove('isHover')
    },
  },
}
</script>

<style lang="scss" scoped>
/* stylelint-disable */

// common
.index-wrapper {

  // section
  &__section {
    width: 100%;
    height: 100%;
    // padding: 0 8vw;
    position: fixed;
    top: 0; left: 0;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;

    &:not(.isFirst) {
      opacity: 0;
      visibility: hidden;
    }

    // link
    &--link {
      position: absolute;
      bottom: 8rem; right: 8rem;
      font-size: 1vw;
      // font-weight: 600;
      &:after {
        position: absolute;
        top: 0.45vw;
        right: -8rem;
        content: '';
        display: inline-block;
        width: 7.5rem;
        height: auto;
        border-top: 1px solid $key-color-black;
        margin-left: 0.5rem;
      }
    }

    // sns
    &--sns-wrapper {
      position: absolute;
      bottom: calc(8rem - 1vw);
    }
  }

  // list
  &__list {
    position: fixed;
    bottom: 2rem; left: 2rem;
    z-index: 98;
  }
}

// list
.item-wrapper {
  padding: 0.75rem 1.5rem;
  // margin-bottom: 0.25rem;
  font-size: 1vw;
  font-weight: 500;
  color: $text-color-primary;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;

  &__border {
    width: 0.5rem;
    height: auto;
    margin: 0 0.5rem;
    border-top: 1px solid $key-color-black;
  }

  // isActive
  &.isActive {
    border: 1px solid $key-color-black;
    border-radius: 1.5rem;
    font-weight: 600;
  }
}

.item-wrapper.isActive {
  .item-wrapper__border {
    border-top: 2px solid $key-color-black;
  }
}

.section-inner {
  padding: 0 8vw;
  text-align: center;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  position: relative;

  // title
  &__title {
    position: fixed;
    top: 8rem;

    &--text {
      font-size: 2vw;
      font-weight: 500;
    }
  }

  // heading
  &__heading {
    margin-bottom: 2rem;
    line-height: 1.25;
    font-size: 4.5vw;
  }

  // body
  &__body {
    line-height: 1.5;
    font-size: 1.5vw;
  }

}

// introduction
.introduction-wrapper {
  position: relative;

  // greet
  &__greet {
    text-align: center;
    position: static;

    &--title {
      // line-height: 1.25;
      margin: 0 auto 2rem;
      font-size: 6vw;
    }

    &--subtitle {
      margin: 2rem auto 0;
      font-size: 1.5vw;
      // font-weight: 600;
    }
  }
}

.introduction-arrow {
  position: absolute;
  bottom: 8rem;
  text-align: center;

  &__image {
    max-width: 3.3rem;
    width: 100%;
    height: auto;
  }
}

// contact
.contact-wrapper {

  &__heading {
    margin-bottom: 0;
    font-size: 6vw;

    // &--text {
    //   height: 6vw;
    //   overflow: hidden;
    // }
  }
}

.sns-wrapper {

  &__sns-list {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;

    &--item {
      margin-left: 2rem;
      font-size: 1vw;
      font-weight: 600;

      &:first-of-type {
        margin-left: 0;
      }
    }
  }
}


/* dummy colors */
// .blue {
//   background-color: blue;
// }
// .red {
//   background-color: red;
// }
// .orange {
//   background-color: orange;
// }
// .purple {
//   background-color: purple;
// }
// .green {
//   background-color: green;
// }
</style>
