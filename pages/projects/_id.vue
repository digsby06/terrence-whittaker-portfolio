<template lang="html">
    <div id="page--blog--ind">
      <article>
        <!-- Header -->
        <blog-header
        :headline="currentProject.projectName"
        >
        </blog-header>

        <section class="cf ph3 ph5-ns pv5">
            <header class="fn fl-ns w-50-ns pr4-ns">
              <img class="mb3 mt0" :src="currentProject.featuredMedia">
              <h2 class="f4 black lh-title">{{currentProject.caption}}</h2>
            </header>

            <div class="fn fl-ns w-50-ns">
              <div class="f5 lh-copy measure mt0-ns" v-html="currentProject.projectText"></div>
            </div>
        </section>

      </article>

      <custom-footer/>
    </div>
</template>

<script>
import {mapState} from 'vuex'
import Footer from '~/components/footer/Footer'
import BlogHeader from '~/components/blog-header/BlogHeader'

export default {
  async created () {
    const params = this.$route.params.id

    if (this.loading) {
      await this.$store.dispatch('getProject', params)
      this.loading = false
    } else {
      this.loading = false
    }
  },
  transition: 'fadeOpacity',
  components: {
    'custom-footer': Footer,
    'blog-header': BlogHeader
  },
  data () {
    return {
      loading: true
    }
  },
  computed: {
    ...mapState({
      currentProject: state => state.currentProject
    })
  }
}
</script>

<style lang="scss" scoped>
  .fadeOpacity-enter-active, .fadeOpacity-leave-active {
    transition: opacity .35s ease-out;
  }

  .fadeOpacity-enter, .fadeOpacity-leave-active {
    opacity: 0;
  }
</style>
