<template>
  <div class="index-wrapper">

    <section class="index-wrapper__section isFirst">
      <div class="section-inner introduction-wrapper">
        <div class="section-inner__number">
          <p class="section-inner__number--text">
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
      <div class="section-inner">
        <div class="section-inner__number">
          <p class="section-inner__number--text">
            02
            <span class="number-border"></span>
            05
          </p>
        </div>
        <div class="section-inner__title">
          <h1 class="section-inner__title--text">
            PROJECT
          </h1>
        </div>
        <div class="section-inner__heading">
          <p class="section-inner__heading--text isSerif">
            Your creative web development partner.
          </p>
        </div>
        <div class="section-inner__body">
          <p class="section-inner__body--text">
            デジタル領域を中心としたクライアント様の課題解決やビジネスチャンスのサポートをさせていただきます。<br>
            Webコンテンツのプランニングから、クリエイティブ、PDCAサイクルに則った継続的な改善まで一気通貫で実行いたします。また、課題やビジネスに応じて動画コンテンツの制作も可能です。<br>
            多種多様な業界のサイト構築の制作実績がございますので、 クライアント様の目的に応じた最適な形をご提案いたします。
          </p>
        </div>
      </div>
      <div class="section-link">
        <a
          href="/project"
          @mouseover="mouseoverProject"
          @mouseleave="mouseleaveProject">
          <div id="link-wrapper-project" class="link-wrapper-viewmore mouse-link">
            <span class="link-wrapper-viewmore__list">
              <span class="link-wrapper-viewmore__list--item">VIEW MORE</span>
              <span class="link-wrapper-viewmore__list--item">VIEW MORE</span>
            </span>
          </div>
        </a>
      </div>
    </section>

    <section class="index-wrapper__section">
      <div class="section-inner">
        <div class="section-inner__number">
          <p class="section-inner__number--text">
            03
            <span class="number-border"></span>
            05
          </p>
        </div>
        <div class="section-inner__title">
          <h1 class="section-inner__title--text">
            ABOUT
          </h1>
        </div>
        <div class="section-inner__heading">
           <p class="section-inner__heading--text isSerif">
            Engaging, purposeful, and creative.
           </p>
        </div>
        <div class="section-inner__body">
          <p class="section-inner__body--text">
            映像のポストプロダクションを経て、Web制作会社へジョイン。
            プロダクションマネージャー、ディレクターとして、多種多様な業界のクライアント様のデジタル領域制作を担い、実績を積みました。<br>
            並行して、デザイン、フロントエンド開発、バックエンド構築、動画制作などの業務を実行し、制作スキル一式をブラッシュアップ。<br>
            数社を経て、現在はフリーランスとして、Webサイト構築、サイトの保守・運用メインに活動しています。
          </p>
        </div>
      </div>
      <div class="section-link">
        <a
          href="/about"
          @mouseover="mouseoverAbout"
          @mouseleave="mouseleaveAbout">
          <div id="link-wrapper-about" class="link-wrapper-viewmore mouse-link">
            <span class="link-wrapper-viewmore__list">
              <span class="link-wrapper-viewmore__list--item">VIEW MORE</span>
              <span class="link-wrapper-viewmore__list--item">VIEW MORE</span>
            </span>
          </div>
        </a>
      </div>
    </section>

    <section class="index-wrapper__section">
      <div class="section-inner">
        <div class="section-inner__number">
          <p class="section-inner__number--text">
            04
            <span class="number-border"></span>
            05
          </p>
        </div>
        <div class="section-inner__title">
          <h1 class="section-inner__title--text">
            BLOG
          </h1>
        </div>
        <div class="section-inner__heading">
          <p class="section-inner__heading--text isSerif">
            COMING SOON
          </p>
        </div>
        <!-- <div class="section-inner__body">
          <p class="section-inner__body--text">

          </p>
        </div> -->
      </div>
      <!-- <div class="section-link">
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

    <section class="index-wrapper__section">
      <div class="section-inner contact-wrapper">
        <div class="section-inner__number">
          <p class="section-inner__number--text">
            05
            <span class="number-border"></span>
            05
          </p>
        </div>
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

    <div class="index-wrapper__list">
      <div class="list-item-wrapper">
        <div class="list-item-wrapper__number">01</div>
        <div class="list-item-wrapper__border"></div>
        <div class="list-item-wrapper__text">INTRODUCTION</div>
      </div>
      <div class="list-item-wrapper">
        <div class="list-item-wrapper__number">02</div>
        <div class="list-item-wrapper__border"></div>
        <div class="list-item-wrapper__text">PROJECT</div>
      </div>
      <div class="list-item-wrapper">
        <div class="list-item-wrapper__number">03</div>
        <div class="list-item-wrapper__border"></div>
        <div class="list-item-wrapper__text">ABOUT</div>
      </div>
      <div class="list-item-wrapper">
        <div class="list-item-wrapper__number">04</div>
        <div class="list-item-wrapper__border"></div>
        <div class="list-item-wrapper__text">BLOG</div>
      </div>
      <div class="list-item-wrapper">
        <div class="list-item-wrapper__number">05</div>
        <div class="list-item-wrapper__border"></div>
        <div class="list-item-wrapper__text">CONTACT</div>
      </div>
    </div>

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

    // Section Transition
    const sections = gsap.utils.toArray('.index-wrapper__section')
    const lists = gsap.utils.toArray('.list-item-wrapper')

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
          .to(currentSection.querySelector('.introduction-arrow'), {
            y: -10,
            autoAlpha: 0,
            duration: 0.3
          })
          .to(currentSection.querySelector('.sns-wrapper'), {
            y: -10,
            autoAlpha: 0,
            duration: 0.3
          })
          .to(currentSection.querySelector('.section-link'), {
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
          .fromTo(newSection.querySelector('.introduction-arrow'), {
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
          .fromTo(newSection.querySelector('.section-link'), {
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
    // for Internal Link
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

// list
.list-item-wrapper {
  padding: 1rem 1.5rem;
  margin-bottom: 0.4rem;
  font-size: 0.8rem;
  font-weight: 500;
  opacity: 0.8;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;

  &:last-of-type {
    margin-bottom: 0;
  }

  &__border {
    width: 0.5rem;
    height: auto;
    margin: 0 0.5rem;
    border-top: 1px solid rgba(0, 0, 0, 0.8);
  }
}

.list-item-wrapper.isActive {
  border: 1.5px solid rgba(0, 0, 0, 0.8);
  border-radius: 16.5rem;
  font-weight: 600;

  .list-item-wrapper__border {
    border-top: 2px solid rgba(0, 0, 0, 0.8);
  }
}

// dark-mode
html.dark-mode .list-item-wrapper__border {
  border-top: 1px solid $key-color-white;
}
html.dark-mode .list-item-wrapper.isActive {
  border: 1px solid $key-color-white;
}
html.dark-mode .list-item-wrapper.isActive .list-item-wrapper__border {
  border-top: 2px solid $key-color-white;
}

</style>
