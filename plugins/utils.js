// 画面の高さいっぱいに要素を表示させる
const setFillHeight = () => {
  const VIEW_WINDOW_HEIGHT = window.innerHeight * 0.01
  document.documentElement.style.setProperty('--vh', ''.concat(VIEW_WINDOW_HEIGHT, 'px'))
}

// エクスポート
export default (context, inject) => {
  inject('setFillHeight', setFillHeight)
}