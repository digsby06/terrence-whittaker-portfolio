<template lang="html">
<home class="flex vh-100">
  <div class="leftside-bg bg-desktop">
    <img :src="`${bgImage}`">
  </div>

  <div class="leftside-bg bg-mobile">
    <img :src="`${bgImageMobile}`">
  </div>

  <div class="hero bb-ns bw4-ns">
    <h1 class="f4 f1-ns fw7 mb2 mt0 avenir tc tl-ns">Terrence Whittaker Jr.</h1>
    <h2 class="f5 f3-l fw3 mb3 lh-title avenir tc tl-ns">Front-End Developer & Creative</h2>
  </div>
</home>
</template>

<script>
import BigT from '~/assets/home-img-org-nocompress.jpg'
import LilT from '~/assets/home-mobile.jpg'

export default {
  name: 'hero',
  data () {
    return {
      bgImage: BigT,
      bgImageMobile: LilT
    }
  }
}
</script>

<style lang="scss" scoped>
.bg-mobile {
  display: none !important;
}

.leftside-bg {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    z-index: 1;
    width: 40%;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;

    img {
      opacity: .65;
    }
}
@media (max-width: 600px) {
    .hero {
      width: 70%;
    }
}

@media (max-width: 515px){
  .bg-desktop {
    display: none;
  }

  .hero {
    top: 40% !important;
    width: 80%;
  }

  .bg-mobile {
    display: inherit !important;
  }

  .leftside-bg {
      height: 50%;
      bottom: 0;
      top: auto;
      width: 70%;
      left: 50%;
      right: auto;
      -webkit-transform: translateX(-50%);
      transform: translateX(-50%);
  }

  .leftside-bg img {
    width: 100%;
  }
}

.hero {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  z-index: 2;
  text-align: left;
}
</style>
