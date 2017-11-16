<template>
  <div id="home-page-content">
      <navigation-bar class="avenir"/>
      <hero/>
      <section-bio/>
      <section-tools/>
      <section-projects/>
      <section-blog/>
      <section-contact/>
      <custom-footer/>
  </div>
</template>

<script>
import NavigationBar from '~/components/navigation-bar/NavigationBar'
import Hero from '~/components/hero/Hero'
import SectionBio from '~/components/pages/home/SectionBio'
import SectionTools from '~/components/pages/home/SectionTools'
import SectionProjects from '~/components/pages/home/SectionProjects'
import SectionBlog from '~/components/pages/home/SectionBlog'
import SectionInterests from '~/components/pages/home/SectionInterests'
import SectionContact from '~/components/pages/home/SectionContact'
import Footer from '~/components/footer/Footer'

export default {
  components: {
    NavigationBar,
    Hero,
    'custom-footer': Footer,
    SectionBio,
    SectionTools,
    SectionProjects,
    SectionBlog,
    SectionInterests,
    SectionContact
  }
}
</script>
