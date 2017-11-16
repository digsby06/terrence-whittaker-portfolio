<template lang="html">
  <div class="nav-bar" :class="navClassObj">

      <div class="nav-bar__bg">
        <div class="nav-bar__container">


          <a class="nav-bar__logo grow" href="/">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 110.2 110.2">
              <title>T Whitt</title>
              <g id="Layer_2" data-name="Layer 2">
                <g id="Layer_1-2" data-name="Layer 1">
                  <path d="M54.66,0A55.1,55.1,0,1,1,0,55.54,55.16,55.16,0,0,1,54.66,0Zm.82,104.2A49.1,49.1,0,1,0,6,55.49,49.16,49.16,0,0,0,55.49,104.2Z"/>
                  <polygon points="71.45 26.14 71.45 61.66 58.73 48.93 51.47 48.93 51.19 49.22 38.75 61.66 38.75 26.14 31.48 26.14 31.48 72.13 38.55 72.13 55.1 55.58 71.65 72.13 78.72 72.13 78.72 26.14 71.45 26.14"/>
                  <polygon points="51.47 44.38 58.73 44.38 58.73 33.41 66.91 33.41 66.91 26.14 43.32 26.14 43.32 33.41 51.47 33.41 51.47 44.38"/>
                  <rect x="31.48" y="76.79" width="47.23" height="7.27"/>
                </g>
              </g>
            </svg>
          </a>


          <button id="toggle-navigation" @click="toggleNavigation()" class="nav-bar__toggle-navigation reset-button">
            <div class="nav-bar__toggle-navigation__icon">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        </div>
      </div>

      <nav id="navigation" class="navigation">
        <div class="navigation__blocks"><span></span></div>

        <ul id="navigation-list" class="navigation__list list-unstyled">
          <li class="navigation__item" style="transform: translateX(0px);">
            <nuxt-link class="navigation__link no-underline f6 fw4 hover-black black-70" to="/">Home</nuxt-link>
          </li>
          <li class="navigation__item" style="transform: translateX(0px);">
            <nuxt-link class="navigation__link no-underline f6 fw4 hover-black black-70" to="/bio">About Me</nuxt-link>
          </li>
          <li class="navigation__item" style="transform: translateX(0px);">
            <nuxt-link class="navigation__link no-underline f6 fw4 hover-black black-70" to="/projects">Projects</nuxt-link>
          </li>
          <li class="navigation__item" style="transform: translateX(0px);">
            <nuxt-link class="navigation__link no-underline f6 fw4 hover-black black-70" to="/blog">Blog</nuxt-link>
          </li>
          <li class="navigation__item" style="transform: translateX(0px);">
            <nuxt-link class="navigation__link no-underline f6 fw4 hover-black black-70" to="/contact">Contact</nuxt-link>
          </li>
        </ul>
      </nav>
  </div>
</template>

<script>
export default {
  name: 'navigation-bar',
  data () {
    return {
      showNavigationClose: false,
      showMenu: false
    }
  },
  computed: {
    navClassObj: function () {
      return {
        'navigation-closed': !this.showNavigationClose,
        'navigation-initialised': this.showNavigationClose && this.showMenu
      }
    }
  },
  methods: {
    toggleNavigation () {
      if (this.showNavigationClose === true) {
        this.showNavigationClose = false
        this.showMenu = false
      } else {
        this.showNavigationClose = true
        this.showMenu = true
      }
    }
  }
}
</script>

<style scoped>
*:focus {
    outline: none;
}

.bw1 {
  border-width: .2rem;
}
</style>
