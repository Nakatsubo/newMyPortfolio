<template>
  <div class="index-wrapper">

    <section class="index-wrapper__section isFirst">
      <div class="index-wrapper__section--introduction section-inner introduction-wrapper">
        <div class="section-inner__number blog-wrapper__number">
          <p class="section-inner__number--text blog-wrapper__number--text">
            01
            <span class="number-border"></span>
            05
          </p>
        </div>
        <div class="section-inner__title introduction-wrapper__greet">
          <h1 class="introduction-wrapper__greet--title isSerif">
            WELCOME TO<br>
            THE WORKSPACE <br class="isSp">OF<br>
            <span class="isDetail isColoring">YUSUKE <br class="isSp">NAKATSUBO</span>
          </h1>
           <p class="introduction-wrapper__greet--subtitle">
             WEB DESIGNER, WEB DEVELOPER & <br class="isSp">WEB DIRECTER IN TOKYO.
           </p>
        </div>
      </div>
      <div class="introduction-arrow">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke-width="3.4091" stroke-miterlimit="13.6364" viewBox="0 0 300 300" class="introduction-arrow__image">
        <title>arrow</title>
        <path d="M150.068,0,150.068,300"/>
        <path d="M150.67,300,c0-68.945,47.052-126.903,110.795-143.512"/>
        <path d="M38.67,156.488,C102.414,173.097,149.466,231.055,149.466,300"/>
      </svg>

      </div>
    </section>

    <section class="index-wrapper__section">
      <div class="index-wrapper__section--project section-inner project-wrapper">
        <div class="section-inner__number blog-wrapper__number">
          <p class="section-inner__number--text blog-wrapper__number--text">
            02
            <span class="number-border"></span>
            05
          </p>
        </div>
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

    <section class="index-wrapper__section">
      <div class="index-wrapper__section--about section-inner about-wrapper">
        <div class="section-inner__number blog-wrapper__number">
          <p class="section-inner__number--text blog-wrapper__number--text">
            03
            <span class="number-border"></span>
            05
          </p>
        </div>
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

    <section class="index-wrapper__section">
      <div class="index-wrapper__section--blog section-inner blog-wrapper">
        <div class="section-inner__number blog-wrapper__number">
          <p class="section-inner__number--text blog-wrapper__number--text">
            04
            <span class="number-border"></span>
            05
          </p>
        </div>
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

    <section id="index-contact" class="index-wrapper__section">
      <div class="index-wrapper__section--contact section-inner contact-wrapper">
        <div class="section-inner__number blog-wrapper__number">
          <p class="section-inner__number--text blog-wrapper__number--text">
            05
            <span class="number-border"></span>
            05
          </p>
        </div>
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
      <div class="index-wrapper__section--sns-wrapper sns-wrapper section-inner__body">
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
gsap.config({
  nullTargetWarn: false,
});

// /* eslint-disable */
export default {
  name: 'IndexPage',
  mounted() {
    // Set Fill Height
    this.$setFillHeight()
    let viewWindowWidth = window.innerWidth
    window.addEventListener('resize', () => {
      if (viewWindowWidth === window.innerWidth) return
      viewWindowWidth = window.innerWidth
      this.$setFillHeight()
    })

    // Adobe Fonts
    this.$adobeFonts(document)

    // Section Transition
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
        // markers: true,
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
          .to(currentSection.querySelector('.section-inner__number'), {
            y: -10,
            autoAlpha: 0,
            duration: 0.3
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
          .to(currentSection.querySelector('.sns-wrapper'), {
            y: -10,
            autoAlpha: 0,
            duration: 0.3
          })

        gsap.timeline()
          .to(newSection, {
            autoAlpha: 1,
            duration: 0.45
          })
          .fromTo(newSection.querySelector('.section-inner__number'), {
            y: 10,
            autoAlpha: 0
          },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.3
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
          .fromTo(newSection.querySelector('.sns-wrapper'), {
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
      bottom: 16rem; right: 16rem;
      font-size: 1vw;
      // font-weight: 600;

      @include mq() {
        bottom: 12rem;
        font-size: 1.2rem;
      }

      &:after {
        position: absolute;
        top: 0.45vw;
        right: -16rem;
        content: '';
        display: inline-block;
        width: 15rem;
        height: auto;
        border-top: 1px solid $key-color-black;
        margin-left: 0.5rem;

        @include mq() {
          top: 0.55rem;
        }
      }

    }

    // sns
    &--sns-wrapper {
      position: absolute;
      bottom: 13rem;
    }
  }

  // list
  &__list {
    position: fixed;
    bottom: 4rem; left: 4rem;
    z-index: 1;

    @include mq() {
      display: none;
    }
  }
}

// dark-mode
html.dark-mode .index-wrapper__section--link::after {
  border-top: 1px solid $key-color-white
}


// list
.item-wrapper {
  padding: 1rem 1.5rem;
  margin-bottom: 0.5rem;
  font-size: 1vw;
  font-weight: 500;
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
    border-radius: 16.5rem;
    font-weight: 600;
  }
}

.item-wrapper.isActive {
  .item-wrapper__border {
    border-top: 2px solid $key-color-black;
  }
}

// dark-mode
html.dark-mode .item-wrapper__border {
  border-top: 1px solid $key-color-white;
}
html.dark-mode .item-wrapper.isActive {
  border: 1px solid $key-color-white;
}
html.dark-mode .item-wrapper.isActive .item-wrapper__border {
  border-top: 2px solid $key-color-white;
}

.section-inner {
  padding: 0 8vw;
  text-align: center;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  position: relative;

  // number
  &__number {
    display: none;
    position: fixed;
    top: 12rem;
    font-size: 4vw;

    &--text {

      .number-border {
        display: inline-block;
        content: '';
        width: 2rem;
        border-top: 1px solid $key-color-black;
        padding-bottom: 1.25vw;
        margin: 0 1rem;
      }
    }

    @include mq() {
      display: block;
    }
  }

  // title
  &__title {
    position: fixed;
    top: 12rem;

    @include mq() {
      top: 16rem;
    }

    &--text {
      font-size: 2vw;
      font-weight: 500;

      @include mq() {
        font-size: 4vw;
      }
    }
  }

  // heading
  &__heading {
    margin-bottom: 2rem;
    line-height: 1.25;
    font-size: 4.5vw;

    @include mq() {
      font-size: 6vw;
    }
  }

  // body
  &__body {
    line-height: 2;
    font-size: 1.5vw;

    @include mq() {
      font-size: 3vw;
    }
  }

}

// dark-mode
html.dark-mode .section-inner__number--text .number-border {
  border-top: 1px solid $key-color-white;
}

// introduction
.introduction-wrapper {
  position: relative;

  // greet
  &__greet {
    text-align: center;
    position: static;

    @include mq() {
      text-align: left;
    }

    &--title {
      // line-height: 1.25;
      margin: 0 auto 2rem;
      font-size: 6vw;

      @include mq() {
        font-size: 9vw;
      }
    }

    &--subtitle {
      line-height: 1.5;
      margin: 2rem auto 0;
      font-size: 1.5vw;
      // font-weight: 600;

      @include mq() {
        font-size: 2.25vw;
      }
    }
  }
}

.introduction-arrow {
  position: absolute;
  bottom: 12rem;
  text-align: center;

  &__image {
    max-width: 6.6rem;
    width: 100%;
    height: auto;
    stroke: $key-color-black;
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
      font-size: 1.5vw;
      font-weight: 600;

      &:first-of-type {
        margin-left: 0;
      }

      @include mq() {
        font-size: 1.2rem;
      }
    }
  }
}
</style>
