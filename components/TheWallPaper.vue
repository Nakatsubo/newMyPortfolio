<template>
  <div id="wallPaper-wrapper" class="wallPaper-wrapper">
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      viewBox="0 0 200 200"
      class="wallPaper-wrapper__wallPaper wallPaper01">
      <path></path>
    </svg>
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      viewBox="0 0 200 200"
      class="wallPaper-wrapper__wallPaper wallPaper02">
      <path></path>
    </svg>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'TheWallPaper',
  mounted() {
    // Create Random Number
    const createRandomNumber = (num1, num2) => {
      return Math.floor(Math.random() * (num1 - num2 + 1)) + num2
    }

    // Create PathLine
    function createPathLine(array, boolean) {
      for (let i = 0; i < 8; i ++) {
        const options = {
          counter: createRandomNumber(0, 50),
          startX: createRandomNumber(0, 200),
          startY: 0,
          endX: createRandomNumber(0, 200),
          endY: 200,
          sin: createRandomNumber(100, 300),
          cos: createRandomNumber(100, 300),
          pointX: createRandomNumber(0, 3),
          pointY: createRandomNumber(0, 3),
          direction: boolean // -> boolean
        }
        array.push(options)
      }
      return array
    }

    // Create PathLine Options
    function setAttributeValue(array) {
      let attribute = ''
      for (let i = 0; i < 8; i ++) {
        let predefinedOption = array[i],
            direction = predefinedOption.direction ? 1 : -1,
            newdefinedOption = {
              x: 500 * Math.sin(predefinedOption.counter / predefinedOption.sin) * direction,
              y: 500 * Math.cos(predefinedOption.counter / predefinedOption.cos) * direction
            };
        attribute += `\nM${(newdefinedOption.x * (predefinedOption.pointX / 150) + predefinedOption.startX).toFixed(3)},\n${predefinedOption.startY}\n\nT${(newdefinedOption.x * (predefinedOption.pointY / 150) + predefinedOption.startX).toFixed(3)},\n${predefinedOption.endY}\n`;
        predefinedOption.counter ++
      }
      return attribute
    }

    const wallPapers = document.querySelectorAll('.wallPaper-wrapper__wallPaper path')
    const wallPapersArr = Array.from(wallPapers)

    let isWallPaper01 = true,
        wallPaper01Options = []
    createPathLine(wallPaper01Options, isWallPaper01)
    const changeWallPaper01Value = () => {
      wallPapersArr[0].setAttribute('d', setAttributeValue(wallPaper01Options))
      requestAnimationFrame(changeWallPaper01Value)
    }
    changeWallPaper01Value()

    let isWallPaper02 = true,
        wallPaper02Options = []
    createPathLine(wallPaper02Options, isWallPaper02)
    const changeWallPaper02Value = () => {
      wallPapersArr[1].setAttribute('d', setAttributeValue(wallPaper02Options))
      requestAnimationFrame(changeWallPaper02Value)
    }
    changeWallPaper02Value()
  }
}
</script>

<style lang="scss" scoped>
// /* stylelint-disable */

.wallPaper-wrapper {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0; right: 0; bottom: 0; left: 0;
  z-index: -1;
  overflow: hidden;
  pointer-events: none;

  &__wallPaper {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0; left: 0;
  }

  .wallPaper01 {
    fill: none;
    stroke: rgba(54, 53, 54, 0.08);
    stroke-width: 0.1px;
  }

  .wallPaper02 {
    fill: none;
    stroke: rgba(54, 53, 54, 0.16);
    stroke-width: 0.1px;
  }
}

.wallPaper-wrapper.isMenuOpen {
  z-index: 99;

  .wallPaper01 {
    stroke: rgba(255, 255, 255, 0.08);
  }

  .wallPaper02 {
    stroke: rgba(255, 255, 255, 0.16);
  }
}

// dark-mode
html.dark-mode .wallPaper-wrapper {

  .wallPaper01 {
    stroke: rgba(255, 255, 255, 0.32);
  }

  .wallPaper02 {
    stroke: rgba(255, 255, 255, 0.4);
  }
}
</style>