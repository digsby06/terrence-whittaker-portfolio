<template lang="html">
  <div>
    <nav class="pa3 ph5-ns flex row items-center justify-between">

      <div class="nav-logo">
        <a href="/" class="dib w3 h3 pa1 grow-large">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 110.2 110.2">
            <title>T Whitt</title>
            <g id="Layer_2" data-name="Layer 2">
              <g id="Layer_1-2" data-name="Layer 1"><path d="M54.66,0A55.1,55.1,0,1,1,0,55.54,55.16,55.16,0,0,1,54.66,0Zm.82,104.2A49.1,49.1,0,1,0,6,55.49,49.16,49.16,0,0,0,55.49,104.2Z"/><polygon points="71.45 26.14 71.45 61.66 58.73 48.93 51.47 48.93 51.19 49.22 38.75 61.66 38.75 26.14 31.48 26.14 31.48 72.13 38.55 72.13 55.1 55.58 71.65 72.13 78.72 72.13 78.72 26.14 71.45 26.14"/><polygon points="51.47 44.38 58.73 44.38 58.73 33.41 66.91 33.41 66.91 26.14 43.32 26.14 43.32 33.41 51.47 33.41 51.47 44.38"/><rect x="31.48" y="76.79" width="47.23" height="7.27"/></g>
            </g>
          </svg>
        </a>
      </div>

      <div class="nav-items dtc v-mid w-75 tr">
          <nuxt-link class="link dim dark-gray f5 f5-ns mr3 mr4-ns hover-black black-70" to="/">Home</nuxt-link>

          <nuxt-link class="link dim dark-gray f5 f5-ns mr3 mr4-ns hover-black black-70" to="/bio">About Me</nuxt-link>

          <nuxt-link class="link dim dark-gray f5 f5-ns mr3 mr4-ns hover-black black-70" to="/projects">Projects</nuxt-link>

          <nuxt-link class="link dim dark-gray f5 f5-ns mr3 mr4-ns hover-black black-70" to="/blog">Blog</nuxt-link>

          <nuxt-link class="link dim dark-gray f5 f5-ns hover-black black-70" to="/contact">Contact</nuxt-link>
      </div>

      <div @click="openMenu" :class="[!showMenu ? 'hamburger-menu' : 'hamburger-menu fixed']">
          <div :class="[!showMenu ? 'bar' : 'bar animate']"></div>
      </div>
    </nav>

    <div class="button_container" id="toggle"><span class="top"></span><span class="middle"></span><span class="bottom"></span></div>

    <div :class="[!showMenu ? 'overlay' : 'overlay open']" id="overlay">
      <nav class="overlay-menu">
        <ul>
          <li><nuxt-link to="/">Home</nuxt-link></li>

          <li><nuxt-link to="/bio">About Me</nuxt-link></li>

          <li><nuxt-link to="/projects">Projects</nuxt-link></li>

          <li><nuxt-link to="/blog">Blog</nuxt-link></li>

          <li><nuxt-link to="/contact">Contact</nuxt-link></li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: 'multi-navigation-bar',
  props: {
    bg: String
  },
  mounted () {
    this.$nextTick(function () {
      window.addEventListener('resize', this.getWindowWidth)

      // Init
      this.getWindowWidth()
    })
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.getWindowWidth)
  },
  data () {
    return {
      showNavigationClose: false,
      showMenu: false,
      windowWidth: 0
    }
  },
  methods: {
    openMenu () {
      if (this.showMenu) {
        this.showMenu = false
      } else {
        this.showMenu = true
      }
    },
    getWindowWidth (event) {
      this.windowWidth = document.documentElement.clientWidth
      if (this.windowWidth >= 800) {
        this.showMenu = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
*:focus {
    outline: none;
}

$bar-width: 30px;
$bar-height: 4px;
$bar-spacing: 10px;

// Hamburger
.hamburger-menu {
  display: none;
}

@media (max-width: 800px) {
  .nav-items {
    display: none;
  }

  .hamburger-menu {
    display: block;
  }

  .hamburger-menu {
    width: $bar-width;
  	height: $bar-height + $bar-spacing *2;
  	cursor: pointer;
    z-index: 1000;
  }

  .fixed {
    position: fixed;
    right: 30px;
  }

  .bar,
  .bar:after,
  .bar:before {
    width: $bar-width;
  	height: $bar-height;
  }

  .bar {
  	position: relative;
  	transform: translateY($bar-spacing);
  	background: rgba(0, 0, 0, 1);
  	transition: all 0ms 300ms;

    &.animate {
      background: rgba(0, 0, 0, 0);
    }
  }

  .bar:before {
  	content: "";
  	position: absolute;
  	left: 0;
  	bottom: $bar-spacing;
  	background: rgba(0, 0, 0, 1);
  	transition: bottom 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms cubic-bezier(0.23, 1, 0.32, 1);
  }

  .bar:after {
  	content: "";
  	position: absolute;
  	left: 0;
  	top: $bar-spacing;
  	background: rgba(0, 0, 0, 1);
  	transition: top 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms cubic-bezier(0.23, 1, 0.32, 1);
  }

  .bar.animate:after {
  	top: 0;
  	transform: rotate(45deg);
  	transition: top 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1);;
  }

  .bar.animate:before {
  	bottom: 0;
  	transform: rotate(-45deg);
  	transition: bottom 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1);;
  }
}

// Overlay

$color-main: #F5B940;
$color-active: #000;
$color-link: #000;

$button-height: 27px;
$button-width: 35px;


.overlay {
  position: fixed;
  background: $color-main;
  top: 0;
  left: 0;
  width: 100%;
  height: 0%;
  opacity: 0;
  visibility: hidden;
  transition: opacity .35s, visibility .35s, height .35s;
  z-index: 999;
  overflow: hidden;

  &.open {
    opacity: 1;
    visibility: visible;
    height: 100%;

    li {
      animation: fadeInRight .5s ease forwards;
      animation-delay: .35s;

      &:nth-of-type(2) {
        animation-delay: .4s;
      }
      &:nth-of-type(3) {
        animation-delay: .45s;
      }
      &:nth-of-type(4) {
        animation-delay: .50s;
      }
    }
  }
  nav {
    position: relative;
    height: 70%;
    top: 50%;
    transform: translateY(-50%);
    font-size: 50px;
    font-family: 'Avenir', sans-serif;
    font-weight: 900;
    text-align: center;
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0 auto;
    display: inline-block;
    position: relative;
    height: 100%;

    li {
      display: block;
      height: 25%;
      height: calc(100% / 4);
      min-height: 50px;
      position: relative;
      opacity: 0;

      a {
        display: block;
        position: relative;
        color: $color-link;
        text-decoration: none;
        padding-bottom: 15px;
        overflow: hidden;

        &:hover:after,
         &:focus:after,
         &:active:after {
           width: 100%;
         }

        &:after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 0%;
          transform: translateX(-50%);
          height: 10px;
          background: $color-link;
          transition: .35s;
        }
      }
    }
  }
}

@keyframes fadeInRight {
  0% {
    opacity: 0;
    left: 20%;
  }
  100% {
    opacity: 1;
    left: 0;
  }
}
</style>
