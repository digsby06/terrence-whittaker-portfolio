<template lang="html">
  <nav class="dt w-100 center pa4">
    <div class="dtc w2 v-mid pa3">
      <a href="/" class="dib w3 h3 pa1 grow-large">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 110.2 110.2">
          <title>T Whitt</title>
          <g id="Layer_2" data-name="Layer 2">
            <g id="Layer_1-2" data-name="Layer 1"><path d="M54.66,0A55.1,55.1,0,1,1,0,55.54,55.16,55.16,0,0,1,54.66,0Zm.82,104.2A49.1,49.1,0,1,0,6,55.49,49.16,49.16,0,0,0,55.49,104.2Z"/><polygon points="71.45 26.14 71.45 61.66 58.73 48.93 51.47 48.93 51.19 49.22 38.75 61.66 38.75 26.14 31.48 26.14 31.48 72.13 38.55 72.13 55.1 55.58 71.65 72.13 78.72 72.13 78.72 26.14 71.45 26.14"/><polygon points="51.47 44.38 58.73 44.38 58.73 33.41 66.91 33.41 66.91 26.14 43.32 26.14 43.32 33.41 51.47 33.41 51.47 44.38"/><rect x="31.48" y="76.79" width="47.23" height="7.27"/></g>
          </g>
        </svg>
      </a>
    </div>
    <div class="db v-mid tr pa3">
      <nuxt-link class="f6 fw4 hover-black no-underline black-70 dn dib-l pv2 ph3" to="/">Home</nuxt-link>
      <nuxt-link class="f6 fw4 hover-black no-underline black-70 dn dib-ns pv2 ph3" to="/bio">About Me</nuxt-link>
      <nuxt-link class="f6 fw4 hover-black no-underline black-70 dn dib-ns pv2 ph3" to="/projects">Projects</nuxt-link>
      <nuxt-link class="f6 fw4 hover-black no-underline black-70 dn dib-l pv2 ph3" to="/blog">Blog</nuxt-link>
      <nuxt-link class="f6 no-underline br-pill ba bw1 ph3 pv2 mb2 dib black grow" to="/contact">Contact</nuxt-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'pages-navigation-bar'
}
</script>

<style lang="css" scoped>
.bw1 {
  border-width: .2rem;
}
</style>
