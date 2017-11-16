<template lang="html">
    <div>
      <article>
        <page-header
          :quote="quote"
          :artist="artist"
          :page="page">
        </page-header>

        <section class="pa5 ph7-l avenir mw9-l center cf">


            <article
              v-if="!loading"
              v-for="blog of blogs"
              class="fl w-100 w-50-m w-50-ns pa4-ns flexbox-row flexbox-wrap">

              <div class="aspect-ratio aspect-ratio--1x1">
                <a :href="`blog/${blog.uid}`" class="link">
                  <img :style="{ 'background-image': 'url(' + blog.data.feature_image_sm.url + ')' }"
                  class="db bg-center cover aspect-ratio--object" />
                </a>
              </div>


              <a :href="`blog/${blog.uid}`"  class="pt3 ph2 ph0-ns pb3 link db">
                <small class="gray db pv2">{{getDate(blog.data.date)}}</small>
                <h3 v-for="headline in blog.data.headline" class="f5 f4-ns mb0 black-90">{{headline.text}}</h3>
                <h3 v-for="sub_title in blog.data.sub_title" class="f6 f5 fw4 mt2 black-60">{{sub_title.text}}</h3>
              </a>
            </article>

        </section>
      </article>

      <custom-footer/>
    </div>
</template>

<script>
import {mapState} from 'vuex'
import moment from 'moment'
import PageHeader from '~/components/page-header/PageHeader'
import Footer from '~/components/footer/Footer'

export default {
  async created () {
    if (this.loading) {
      await this.$store.dispatch('getBlogs')
      this.loading = false
    } else {
      this.loading = false
    }
  },
  components: {
    PageHeader,
    'custom-footer': Footer
  },
  data () {
    return {
      quote: 'My eyes is the photography lens. Properly push pens and show quality gems.',
      artist: 'Rakim',
      page: 'Blog',
      loading: true
    }
  },
  computed: {
    ...mapState({
      blogs: state => state.blogs
    })
  },
  methods: {
    getDate (date) {
      return moment(date).format('ddd, DD MMMM YYYY')
    }
  }
}
</script>
