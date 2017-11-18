<template lang="html">
<section class="section-blog pa4 pa5-ns mw9 center">

  <div class="section-headline">
    <h1 class="avenir f2 f1-ns fw7 lh-title mt0">
      Featured Posts
      <span class="underlined-tw"></span>
    </h1>
  </div>

  <div class="container--blogs cf w-100">
      <article v-if="!loading" v-for="blog of blogs" class="fl w-100 w-50-m w-25-ns pa2-ns mb4">
        <div class="aspect-ratio aspect-ratio--1x1">
          <a :href="`blog/${blog.uid}`" class="link">
            <img :style="{ 'background-image': 'url(' + blog.data.feature_image_sm.url + ')' }"
            class="db bg-center cover aspect-ratio--object" />
          </a>

        </div>
        <a :href="`blog/${blog.uid}`" class="pt3 ph2 ph0-ns pb3 link db">
          <small class="gray db pv2">{{getDate(blog.data.date)}}</small>
          <h3 v-for="headline in blog.data.headline" class="f5 f4-ns mb0 black-90">{{headline.text}}</h3>
          <h3 v-for="sub_title in blog.data.sub_title" class="f6 f5 fw4 mt2 black-60">{{sub_title.text}}</h3>
        </a>
      </article>
  </div>

  <div v-if="this.blogs.length > 1" class="pa3 pa4-ns mw8 tc center">
      <nuxt-link class="f6 grow no-underline br-pill ph4 pv2 mb2 dib white bg-black" to="/blog">View All</nuxt-link>
  </div>

</section>
</template>

<script>
import {mapState} from 'vuex'
import moment from 'moment'

export default {
  name: 'section-blog',
  data () {
    return {
      loading: true
    }
  },
  async created () {
    if (this.loading) {
      await this.$store.dispatch('getBlogs')
      this.loading = false
    } else {
      this.loading = false
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

<style lang="css" scoped>
.underlined-tw:before {
    content: "";
    display: block;
    width: 45px;
    height: 8px;
    margin-top: 5px;
    background-color: #000000;
}
</style>
