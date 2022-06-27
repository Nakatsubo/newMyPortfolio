<template>
  <Tutorial />
</template>

<script>
export default {
  name: 'IndexPage',
  mounted() {
    this.$adobeFonts(document)
  },
}
</script>
