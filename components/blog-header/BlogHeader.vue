<template lang="html">
  <header class="bg-blue avenir">
    <multi-navigation-bar/>
    <div class="mw9 center pa4 pt3-ns ph7-l">
      <div class="pb3">
        <h1 class="f1 lh-title avenir tc pb0 mb0">{{headline}}</h1>
        <h1 class="f2 fw3 lh-subtitle avenir tc mt0 pt0">{{subHead}}</h1>
      </div>
    </div>
  </header>
</template>

<script>
import MultiNavigationBar from '~/components/navigation-bar/MultiNavigationBar'

export default {
  name: 'blog-header',
  components: {
    MultiNavigationBar
  },
  props: [
    'headline',
    'subHead'
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
