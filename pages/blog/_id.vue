<template lang="html">
    <div id="page--blog--ind">
      <article>
        <!-- Header -->
        <blog-header
          :headline="currentPost.headline"
          :subHead="currentPost.subTitle">
        </blog-header>

        <!-- Blog Body  -->
        <section class="pa5 ph7-l georgia mw9-l center">
            <article v-if="!loading" class="w-100 pa2-ns">
              <div class="blog--body" v-html="currentPost.body"></div>
            </article>
        </section>
      </article>

      <custom-footer/>
      <tools/>
    </div>
</template>

<script>
import {mapState} from 'vuex'
import Footer from '~/components/footer/Footer'
import BlogHeader from '~/components/blog-header/BlogHeader'
import Tools from '~/components/tools/Tools'

export default {
  async created () {
    const params = this.$route.params.id

    if (this.loading) {
      await this.$store.dispatch('getBlog', params)
      this.loading = false
    } else {
      this.loading = false
    }
  },
  transition: 'fadeOpacity',
  components: {
    'custom-footer': Footer,
    'blog-header': BlogHeader,
    Tools
  },
  data () {
    return {
      loading: true
    }
  },
  computed: {
    ...mapState({
      currentPost: state => state.currentPost
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
