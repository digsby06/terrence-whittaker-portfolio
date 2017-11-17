<template lang="html">
    <div id="page--blog--ind">
      <article>
        <!-- Header -->
        <blog-header
        :headline="currentProject.projectName"
        :subHead="currentProject.projectType"
        >
        </blog-header>

        <section class="cf ph3 ph5-ns pv5">
          <article class="avenir">

              <header class="avenir tc-l ph3 ph4-ns pt3 pt3-ns">
                <img class="w-100 dib measure f3" :src="currentProject.headerImageUrl"/>
                <h2 class="pa3 tc">{{currentProject.projectSummary}}</h2>
              </header>


              <div class="ph3 ph4-m ph5-l pt4">

                <div class="measure db center f5 f4-ns lh-copy">
                  <div class="project--body avenir" v-html="currentProject.projectDescription"></div>

                  <div class="flex row justify-between avenir tc">
                    <div class="w-50" v-if="currentProject.projectViewProject">
                      <a class="link fw7 black dim" :href="currentProject.projectViewProject">See it live</a>
                    </div>

                    <div class="w-50" v-if="currentProject.projectViewCode">
                      <a class="link fw7 black dim" :href="currentProject.projectViewCode">Show the code</a>
                    </div>
                  </div>

                  <div class="center mt4 mt5-ns embed-container embed-container-16x9" v-show="currentProject.projectEmbedMedia">
                    <iframe :src="currentProject.projectEmbedMedia" allowfullscreen></iframe>
                  </div>

                  <img class="db center mt4 mt5-ns" :src="currentProject.projectMedia">

                  <div class="w-100 center mt4 tc">
                    <a class="f6 link dim br-pill ph3 pv2 mb2 dib white bg-black" href="/projects">Go Back</a>
                  </div>
                </div>

              </div>

            </article>


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
  .embed-container {
  position: relative;
  height: 0;
  overflow: hidden;
  }

  /* 16x9 Aspect Ratio */
  .embed-container-16x9 {
  padding-bottom: 56.25%;
  }

  /* 4x3 Aspect Ratio */
  .iembed-container-4x3 {
  padding-bottom: 75%;
  }

  .embed-container iframe {
  position: absolute;
  top:0;
  left: 0;
  width: 100%;
  height: 100%;
  }

  .fadeOpacity-enter-active, .fadeOpacity-leave-active {
    transition: opacity .35s ease-out;
  }

  .fadeOpacity-enter, .fadeOpacity-leave-active {
    opacity: 0;
  }
</style>
