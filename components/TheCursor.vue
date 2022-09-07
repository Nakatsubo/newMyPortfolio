<template>
  <div id="cursor-wrapper" class="cursor-wrapper">
    <div id="mouse-cursor" class="cursor-wrapper__cursor"></div>
    <div id="mouse-follower" class="cursor-wrapper__follower"></div>
  </div>
</template>

<script>
import { gsap } from 'gsap';

/* eslint-disable */
export default {
  name: 'TheCursor',
  mounted() {
    // Mouse stalker
    const mouseCursor = document.getElementById('mouse-cursor')
    // const mouseFollower = document.getElementById('mouse-follower')
    const mouseLinks = document.getElementsByClassName('mouse-link')
    const mouseSpeed = 1
    let cursorPosition = {
      x: 0,
      y: 0
    }
    let mousePosition = {
      x: cursorPosition.x,
      y: cursorPosition.y
    }

    let cursorSetX = gsap.quickSetter(mouseCursor, 'x', 'px')
    let cursorSetY = gsap.quickSetter(mouseCursor, 'y', 'px')

    // let followerSetX = gsap.quickSetter(mouseFollower, 'x', 'px')
    // let followerSetY = gsap.quickSetter(mouseFollower, 'y', 'px')

    document.addEventListener('mousemove', (e) => {
      mousePosition.x = e.pageX;
      mousePosition.y = e.pageY;
    })

    gsap.ticker.add(() => {
      let dt = 1.0 - Math.pow(1.0 - mouseSpeed, gsap.ticker.deltaRatio())

      cursorPosition.x += (mousePosition.x - cursorPosition.x) * dt;
      cursorPosition.y += (mousePosition.y - cursorPosition.y) * dt;
      cursorSetX(cursorPosition.x);
      cursorSetY(cursorPosition.y);
      // followerSetX(cursorPosition.x);
      // followerSetY(cursorPosition.y);
    })

    for(let i = 0; i < mouseLinks.length; i += 1) {
      mouseLinks[i].addEventListener('mouseenter', () => {
        mouseCursor.classList.add('isActive')
      })

      mouseLinks[i].addEventListener('mouseleave', () => {
        mouseCursor.classList.remove('isActive')
      })
    }

  },
}
</script>

<style lang="scss" scoped>
.cursor-wrapper {

  &__cursor {
    width: .8rem;
    height: .8rem;
    border-radius: 50%;
    background-color: $key-color-black;
    position: absolute;
    top: 0; left: 0;
    pointer-events: none;
    transform: translate(-50%, -50%);
    opacity: 0.2;
    z-index: 101;

    @include mq() {
      display: none;
    }

    &.isActive {
      width: 4rem;
      height: 4rem;
      transition: $transition-primary;
    }
  }

  // &__follower {
  //   width: 4rem;
  //   height: 4rem;
  //   background-color: $key-color-black;
  //   border-radius: 50%;
  //   position: absolute;
  //   top: 0; left: 0;
  //   pointer-events: none;
  //   transform: translate(-50%, -50%);
  //   transition: $transition-primary;
  //   opacity: 0.4;
  //   z-index: 100;
  //   display: none;

  //   &.isActive {
  //     display: block;
  //   }
  // }
}
</style>