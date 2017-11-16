<template lang="html">
<section class="bg-black-10 flex vh-100 items-center justify-end">
  <div class="terrence--visible"></div>
  <div class="tc tl-ns ph3 pa0-ns pa0-m mr5-m mr6-l mr7-ns bb-ns bw4-ns">
      <h1 class="f1 f1-l fw6 fw7-ns mb2 mt4 mt0-ns avenir">Terrence Whittaker Jr.</h1>
      <h2 class="f4 f3-l fw3 mb3 lh-title avenir">Front-End Developer & Creative</h2>
  </div>
</section>
</template>

<script>
export default {
  name: 'hero'
}
</script>

<style lang="css" scoped>

.terrence--visible {
  position: absolute;
  background-image: url('~/assets/terrence-hero-trans.png');
  background-repeat: no-repeat;
  opacity: .3;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1000;
}
</style>
