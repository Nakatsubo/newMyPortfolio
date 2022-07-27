/* eslint-disable */

// 画面の高さいっぱいに要素を表示させる
const setFillHeight = () => {
  const viewWindowHeight = window.innerHeight * 0.01
  document.documentElement.style.setProperty('--vh', ''.concat(viewWindowHeight, 'px'))
}

// 背景を固定する
const bodyScrollPrevent = (flag) => {
  let currentPosition = document.getElementsByTagName('body')[0]
  const setbody = document.getElementsByTagName('body')[0]
  const getuserAgent = window.navigator.userAgent.toLowerCase()
  const isUserAgent = getuserAgent.indexOf('iphone') > -1 || getuserAgent.indexOf('ipad') > -1 || getuserAgent.indexOf('macintosh')>-1 && 'ontouchend' in document
  let scrollBarWidth = window.innerWidth - document.body.clientWidth
  if (flag) {
    setbody.style.paddingRight = scrollBarWidth + 'px'
    if (isUserAgent) {
      currentPosition =- window.pageYOffset,
      setbody.style.position = 'fixed'
      setbody.style.width = '100%'
      setbody.style.top = currentPosition +'px'
    }
    else {
      setbody.style.overflow = 'hidden'
    }
  } else if (!flag) {
    setbody.style.paddingRight = ''
    if (isUserAgent) {
      currentPosition = parseInt(setbody.style.top.replace(/[^0-9]/g,''))
      setbody.style.position = ''
      setbody.style.width = ''
      setbody.style.top = ''
      window.scrollTo(0, currentPosition)
    }
    else {
      setbody.style.overflow = ''
    }
  }
}

// エクスポート
export default (context, inject) => {
  inject('setFillHeight', setFillHeight)
  inject('bodyScrollPrevent', bodyScrollPrevent)
}