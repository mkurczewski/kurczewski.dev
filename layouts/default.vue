<template>
  <div class="wrapper">
    <Nuxt />
    <Footer />
  </div>
</template>

<script lang="ts">
import Footer from "~/components/project/Footer.vue"
export default {
  components: { Footer },
}
</script>

<style lang="scss">
html {
  font-family: "Open Sans Condensed", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 10px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}

html,
body,
#__nuxt,
#__layout {
  height: 100%;
}

.wrapper {
  height: 100%;
  display: flex;
  flex-direction: column;

  footer {
    flex: 1;
  }
}
</style>
