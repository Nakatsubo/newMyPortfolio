/* eslint-disable */

// 画面の高さいっぱいに要素を表示させる
const setFillHeight = () => {
  const viewWindowHeight = window.innerHeight * 0.01
  document.documentElement.style.setProperty('--vh', ''.concat(viewWindowHeight, 'px'))
}

// 背景を固定する
const bodyScrollPrevent = (flag) => {
  let currentPosition, body = document.getElementsByTagName('body')[0]
  let getuserAgent = window.navigator.userAgent.toLowerCase()
  let isUserAgent = getuserAgent.indexOf('iphone') > -1 || getuserAgent.indexOf('ipad') > -1 || getuserAgent.indexOf('macintosh')>-1 && 'ontouchend' in document
  let scrollBarWidth = window.innerWidth - document.body.clientWidth
  if (flag) {
    body.style.paddingRight = scrollBarWidth + 'px'
    if (isUserAgent) {
      currentPosition =- window.pageYOffset,
      body.style.position = 'fixed'
      body.style.width = '100%'
      body.style.top = currentPosition +'px'
    }
    else {
      body.style.overflow = 'hidden'
    }
  } else if (!flag) {
    body.style.paddingRight = ''
    if (isUserAgent) {
      currentPosition = parseInt(body.style.top.replace(/[^0-9]/g,''))
      body.style.position = ''
      body.style.width = ''
      body.style.top = ''
      window.scrollTo(0, currentPosition)
    }
    else {
      body.style.overflow = ''
    }
  }
}

// エクスポート
export default (context, inject) => {
  // inject('bodyScrollPrevent', bodyScrollPrevent)
  inject('setFillHeight', setFillHeight)
}