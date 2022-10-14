<template>
  <div class="index-wrapper">

    <section class="index-wrapper__section isFirst">
      <div class="section-inner introduction-wrapper">
        <div class="section-inner__title introduction-wrapper__greet">
          <h1 class="introduction-wrapper__greet--title isSerif">
            ABOUT
          </h1>
        </div>
        <div class="section-inner__body introduction-wrapper__lead">
          <p class="section-inner__body--text">
            ディレクション、デザイン、コーディングと、<br>
            各制作フェーズにおいて精度の高いクリエイティブが構築できるよう全体管理を行なった上で、<br>
            効率よく一気通貫で成果物を提供いたします。
          </p>
        </div>
      </div>
    </section>

    <section class="index-wrapper__section">
      <div class="section-inner contact-wrapper">
        <div class="section-inner__title">
          <h1 class="section-inner__title--text">
            CONTACT
          </h1>
        </div>
        <div class="section-inner__heading contact-wrapper__heading">
          <a
            href="mailto:info@yusukenakatsubo.com"
            class="section-inner__heading--text contact-wrapper__heading--text isSerif"
            @mouseover="mouseoverContact"
            @mouseleave="mouseleaveContact">
            <div id="link-wrapper-contact" class="link-wrapper-contact mouse-link">
              <span>DROP ME AN</span>
              <span class="link-wrapper-contact__list isColoring">
                <span class="link-wrapper-contact__list--item">MAIL FORM</span>
                <span class="link-wrapper-contact__list--item">MAIL FORM</span>
              </span>
            </div>
          </a>
        </div>
      </div>
      <div class="sns-wrapper">
        <ul class="sns-wrapper__sns-list">
          <li class="sns-wrapper__sns-list--item">
            <a
              href="https://www.linkedin.com/in/office-yusuke-nakatsubo-736ba924a/"
              target="_blank"
              class="sns-item-linkedin"
              @mouseover="mouseoverLinkedin"
              @mouseleave="mouseleaveLinkedin">
              <div id="link-wrapper-linkedin" class="link-wrapper-sns mouse-link">
                <span class="link-wrapper-sns__list">
                  <span class="link-wrapper-sns__list--item">LINKEDIN</span>
                  <span class="link-wrapper-sns__list--item">LINKEDIN</span>
                </span>
              </div>
            </a>
          </li>
          <li class="sns-wrapper__sns-list--item">
            <a
              href="https://www.facebook.com/office.yusuke.nakatsubo"
              target="_blank"
              class="sns-item-facebbook"
              @mouseover="mouseoverFacebook"
              @mouseleave="mouseleaveFacebook">
              <div id="link-wrapper-facebook" class="link-wrapper-sns mouse-link">
                <span class="link-wrapper-sns__list">
                  <span class="link-wrapper-sns__list--item">FACEBOOK</span>
                  <span class="link-wrapper-sns__list--item">FACEBOOK</span>
                </span>
              </div>
            </a>
          </li>
          <li class="sns-wrapper__sns-list--item">
            <a
              href="https://twitter.com/office_y_n"
              target="_blank"
              class="sns-item-twitter"
              @mouseover="mouseoverTwitter"
              @mouseleave="mouseleaveTwitter">
              <div id="link-wrapper-twitter" class="link-wrapper-sns mouse-link">
                <span class="link-wrapper-sns__list">
                  <span class="link-wrapper-sns__list--item">TWITTER</span>
                  <span class="link-wrapper-sns__list--item">TWITTER</span>
                </span>
              </div>
            </a>
          </li>
          <li class="sns-wrapper__sns-list--item">
            <a
              href="https://www.instagram.com/office.yusuke.nakatsubo/"
              target="_blank"
              class="sns-item-instagram"
              @mouseover="mouseoverInstagram"
              @mouseleave="mouseleaveInstagram">
              <div id="link-wrapper-instagram" class="link-wrapper-sns mouse-link">
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

  </div>
</template>

<script>
// gsap
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
if (process.client) {
  gsap.registerPlugin(ScrollTrigger)
}
gsap.config({
  nullTargetWarn: false,
})

// /* eslint-disable */
export default {
  name: 'ProjectPage',
  mounted() {
    // Set Fill Height
    this.$setFillHeight()
    let viewWindowWidth = window.innerWidth
    window.addEventListener('resize', () => {
      if (viewWindowWidth === window.innerWidth) return
      viewWindowWidth = window.innerWidth
      this.$setFillHeight()
    })

    // Section Transition
    const sections = gsap.utils.toArray('.index-wrapper__section')

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

// introduction
.introduction-wrapper {

  // greet
  &__greet {

    &--title {
      margin: 0 auto 8rem;
      font-size: max(4vw, 4rem);

      @include mq(sm) {
        font-size: 8vw;
      }
    }
  }

  &__lead {
    padding: 0 8vw;
    text-align: left;

    @include mq(sm) {
      padding: 0;
      text-align: left;
    }
  }

}

</style>