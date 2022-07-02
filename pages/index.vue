<template>
  <div class="index-wrapper">
    <section class="first panel blue" id="one">
      <h1>Fading Transitions</h1>
      <div class="scroll-down">Scroll up or down<div class="arrow"></div></div>
    </section>
    <section class="panel red" id="two">
      <h1>section 2 red</h1>
    </section>
    <section class="panel orange" id="three">
      <h1>section 3 orange</h1>
    </section>
    <section class="panel purple" id="four">
      <h1>section 4 purple</h1>
    </section>
    <section class="panel green" id="five">
      <h1>section 5 green</h1>
    </section>
    
    <nav>
      <div><a href="#one" class="js-scroll">Section one</a></div>
      <div><a href="#two" class="js-scroll">Section two</a></div>
      <div><a href="#three" class="js-scroll">Section three</a></div>
      <div><a href="#four" class="js-scroll">Section four</a></div>
      <div><a href="#five" class="js-scroll">Section five</a></div>
    </nav>
  </div>  
</template>

<script>
// gsap
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
if (process.client) {
  gsap.registerPlugin(ScrollTrigger)
}

// /* eslint-disable */
export default {
  name: 'IndexPage',
  mounted() {
    this.$adobeFonts(document)

    const sections = gsap.utils.toArray("section")
    let currentSection = sections[0]

    gsap.defaults({overwrite: 'auto', duration: 1})

    const links = gsap.utils.toArray("nav a")

    gsap.set("body", {height: (sections.length * 100) + "%"})

    sections.forEach((section, i) => {
      ScrollTrigger.create({
        start: () => (i - 0.5) * innerHeight,
        end: () => (i + 0.5) * innerHeight,
        scrub: true,
        markers: true,
        toggleActions: "play reset play reset",
        onToggle: self => self.isActive && setSection(section),
        onEnter: () => {
          links.forEach((e) => {
            e.classList.remove("active")
          })
          links[i].classList.add("active")
        },
        onEnterBack: () => {
          links.forEach((e) => {
            e.classList.remove("active")
          })
          links[i].classList.add("active")
        }
      })
    })

    function setSection(newSection) {
      if (newSection !== currentSection) {
       gsap.timeline()
         .to(currentSection.querySelector("h1"), {y:-30, autoAlpha:0, duration:0.3})
         .to(currentSection, {autoAlpha:0, duration:0.5})

        gsap.timeline()
          .to(newSection, {autoAlpha:1, duration:0.5})
          .fromTo(newSection.querySelector("h1"), {y:30, autoAlpha:0}, {autoAlpha: 1, y: 0, duration:.3})

        currentSection = newSection    
      }
    }

  },
}
</script>

<style>
/* stylelint-disable */
html, body {
  height: 100%;
}
body { 
  background-color: #000;
  font-size: 18px;
  font-weight: 300;
}
.panel {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}
/* .panel h1 {
  font-size: 1.8em;
  color: black;
  font-weight: 300;
  margin: 0 auto;
  z-index:5;
}  */

section:not(.first) {
  opacity: 0;
  visibility: hidden;
}

nav {
  position: fixed;
  top: 10px;
  right: 10px;
  background: black;
  padding: 0px 10px;
}
nav a {
  color: white;
  font-size: 1.3em;
  line-height: 1.7;
  text-decoration: none;
}
nav a:hover {
  text-decoration: underline;
}
nav a.active {
  color: red;
}

.blue {
  background-color: blue;
}
.red {
  background-color: red;
}
.orange {
  background-color: orange;
}
.purple {
  background-color: purple;
}
.green {
  background-color: green;
}
</style>
