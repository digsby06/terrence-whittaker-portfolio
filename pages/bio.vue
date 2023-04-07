<template lang="html">
    <div>
      <article>
        <page-header
          :quote="quote"
          :artist="artist"
          :page="page">
        </page-header>

        <section class="pa4 ph7-l avenir mw9-l center">
          <h1 class="lh-title pb3"><b>Hey, it's Terrence.</b></h1>

          <p class="lh-copy pb3">So maybe you’ve clicked around my website, gazed at <a class="link dim black" href="/projects"><b>my projects</b></a> and learned a bit about what I can do. Here’s the part where I tell you a bit about myself.</p>

          <p class="lh-copy pb3">I was born in Cleveland, Ohio, and enrolled at the University of Cincinnati when I was just 16. In 2010, I graduated with a marketing degree with a focus in advertising and began working jobs that ranged from social media manager to brand strategist.</p>

          <p class="lh-copy pb3">After an unexpected layoff, I asked myself, “What’s next?” Sure, I had been a successful marketer but I needed a change. I wanted to take control of my life and pursue a career that would be challenging, make me uncomfortable and force me to grow.</p>

          <p class="lh-copy pb3">That’s when I decided to learn how to code. In January 2016, I was accepted into the Tech Talent South program in Charlotte, N.C., with the idea that if I was going to change my career, I’d have to put my money where my mouth is.</p>

          <p class="lh-copy pb3">So, I did.</p>

          <p class="lh-copy pb3">After finishing TTS’ 12-week code immersion program, I was hooked. I learned the basics of front-end development and gained experience building with Ruby on Rails. I later went back to finish a 10-week javascript application development course. Using the skills I learned in those classes, I’ve completed several freelance projects. I was hired on as a software engineer for a startup. And today, I work as Software Engineer at Iterable, a growth marketing platform based in San Francisco.</p>

          <p class="lh-copy pb3">I love coding but life’s about balance. When I’m not attached to a Mac, music and movies are life. I’m reading about cryptocurrency/blockchain development. I love cooking pasta. And, most importantly, I’m learning how to be a father to a beautiful little girl.</p>

          <p class="lh-copy pb3">I believe I have the know-how and acumen to meet your development needs. Plus, I’m a self-taught graphic designer and marketer who’s developed a passion for thinking creatively to solve business challenges.</p>

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
      quote: 'Everything I\'m not made me everything I am.',
      artist: 'Kanye West',
      page: 'About Me'
    }
  }
}
</script>

<style lang="css">
</style>
