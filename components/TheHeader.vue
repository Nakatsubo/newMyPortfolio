<template>
  <header class="header">
    <div class="header__wrapper">
      <component :is="isTopPage ? 'h1' : 'p'" class="header__wrapper--logo">
        <nuxt-link to="/">Yusuke Nakatsubo</nuxt-link>
      </component>
    </div>

    <nav class="navigation">Dummy Navigation</nav>
  </header>
</template>

<script>
export default {
  computed: {
    // TOPページかどうか
    isTopPage() {
      if (this.$route.name === 'index') return true
      return false
    },
  },
}
</script>