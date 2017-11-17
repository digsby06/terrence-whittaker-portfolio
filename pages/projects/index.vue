<template lang="html">
  <div>
    <section>
      <page-header
        :quote="quote"
        :artist="artist"
        :page="page">
      </page-header>

      <main class="cf w-100">

        <div
        v-if="!loading"
        v-for="project of projects"
        class="fl w-50 w-third-m w-25-ns">
          <div class="aspect-ratio aspect-ratio--7x5">

              <a :href="`projects/${project.uid}`" :style="{ 'background-image': 'url(' + project.data.feature_image_sm.url + ')' }" class="db link hide-child cover bg-center aspect-ratio--object">
                <h2 v-for="title in project.data.project_name" class="tc white child bg-black-60 flex justify-center items-center aspect-ratio--object">
                  {{title.text}}
                </h2>
              </a>

          </div>
        </div>

      </main>

    </section>

    <custom-footer/>
  </div>

</template>

<script>
import {mapState} from 'vuex'
import PageHeader from '~/components/page-header/PageHeader'
import Footer from '~/components/footer/Footer'

export default {
  async created () {
    if (this.loading) {
      await this.$store.dispatch('getProjects')
      console.log(this.projects)
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
      quote: 'Turnin\' nothin\' into somethin\' is God work, and you get nothin\' without struggle and hard work',
      artist: 'Nas',
      page: 'Projects',
      loading: true
    }
  },
  computed: {
    ...mapState({
      projects: state => state.projects
    })
  }
}
</script>

<style lang="css">
</style>
