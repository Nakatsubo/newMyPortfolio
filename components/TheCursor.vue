<template>
  <div id="cursor-wrapper" class="cursor-wrapper">
    <div id="mouse-cursor" class="cursor-wrapper__cursor"></div>
  </div>
</template>

<script>
import { gsap } from 'gsap';

export default {
  name: 'TheCursor',
  mounted() {
    // Mouse stalker
    const mouseCursor = document.getElementById('mouse-cursor')
    const mouseLinks = document.getElementsByClassName('mouse-link')
    const mouseSpeed = 1
    const cursorPosition = {
      x: 0,
      y: 0
    }
    const mousePosition = {
      x: cursorPosition.x,
      y: cursorPosition.y
    }

    const cursorSetX = gsap.quickSetter(mouseCursor, 'x', 'px')
    const cursorSetY = gsap.quickSetter(mouseCursor, 'y', 'px')

    document.addEventListener('mousemove', (e) => {
      mousePosition.x = e.pageX;
      mousePosition.y = e.pageY;
    })

    gsap.ticker.add(() => {
      const dt = 1.0 - Math.pow(1.0 - mouseSpeed, gsap.ticker.deltaRatio())

      cursorPosition.x += (mousePosition.x - cursorPosition.x) * dt;
      cursorPosition.y += (mousePosition.y - cursorPosition.y) * dt;
      cursorSetX(cursorPosition.x);
      cursorSetY(cursorPosition.y);
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

}

// dark-mode
html.dark-mode .cursor-wrapper {

  &__cursor {
    background-color: $key-color-white;
  }
}

</style>