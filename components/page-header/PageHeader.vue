<template lang="html">
  <header class="bg-gold avenir">
    <multi-navigation-bar bg="gold"/>
    <div class="mw9 center pa4 pt5-ns ph7-l">
      <div class="pb3">
        <h1 class="f3 f2-ns fw1 georgia i tc">"{{quote}}"</h1>
        <h1 class="f3 f2-ns fw1 georgia i tr">- {{artist}}</h1>
      </div>

      <h1 class="f2 f1-ns lh-title">
        {{page}}
        <span class="underlined-tw"></span>
      </h1>
    </div>
  </header>
</template>

<script>
import MultiNavigationBar from '~/components/navigation-bar/MultiNavigationBar'

export default {
  name: 'page-header',
  components: {
    MultiNavigationBar
  },
  props: [
    'quote',
    'artist',
    'page'
  ]
}
</script>

<style lang="css" scoped>
.underlined-tw:before {
    content: "";
    display: block;
    width: 60px;
    height: 8px;
    margin-top: 5px;
    background-color: #000000;
}
</style>
