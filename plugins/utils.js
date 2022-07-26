// 画面の高さいっぱいに要素を表示させる
const setFillHeight = () => {
  const viewWindowHeight = window.innerHeight * 0.01
  document.documentElement.style.setProperty('--vh', ''.concat(viewWindowHeight, 'px'))
}

// 背景を固定する
const bodyScrollPrevent = (flag) => {
  let currentPosition = document.getElementsByTagName('body')[0]
  const body = document.getElementsByTagName('body')[0]
  const getUserAgent = window.navigator.userAgent.toLowerCase()
  const isUserAgent = getUserAgent.includes('iphone') === true || getUserAgent.includes('ipad') === true || getUserAgent.includes('macintosh') === true && 'ontouchend' in document
  const scrollBarWidth = window.innerWidth - document.body.clientWidth
  if (flag) {
    body.style.paddingRight = scrollBarWidth + 'px'
    if (isUserAgent) {
      currentPosition =- window.pageYOffset
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
  inject('setFillHeight', setFillHeight)
  inject('bodyScrollPrevent', bodyScrollPrevent)
}