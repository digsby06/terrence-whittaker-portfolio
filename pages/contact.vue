<template lang="html">
    <div>
      <article>
        <page-header
          :quote="quote"
          :artist="artist"
          :page="page">
        </page-header>

        <section class="pa5 ph7-l georgia mw9-l center tc ">
          <h1 class="avenir">Get in touch</h1>
          <p class="lh-copy pb3 avenir f5 f4-ns fw5">Call Me: <a class="link black dim" href="tel:2162245579">2162245579</a></p>
          <p class="lh-copy pb3 avenir f5 f4-ns fw5">Email Me: <a class="link black dim" href="mailto:terr.whittakerjr@gmail.com">Terr.whittakerjr@gmail.com</a></p>
        </section>
      </article>

      <custom-footer/>
      <tools/>
    </div>
</template>

<script>
import PageHeader from '~/components/page-header/PageHeader'
import Footer from '~/components/footer/Footer'
import Tools from '~/components/tools/Tools'

export default {
  components: {
    PageHeader,
    'custom-footer': Footer,
    Tools
  },
  data () {
    return {
      quote: 'Stay far from timid, only make moves when your heart\'s in it. And live the phrase Sky\'s the limit',
      artist: 'Biggie Smalls',
      page: 'Contact'
    }
  }
}
</script>

<style lang="css">
</style>
