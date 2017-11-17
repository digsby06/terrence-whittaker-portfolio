<template lang="html">
<section class="section-projects bg-gold w-100">

  <div class="section-headline pa4 pa5-ns mw9 tc center">
    <h1 class="f2 f1-m f1-ns mt0 mb0 avenir">
      The Work.
    </h1>
  </div>

  <no-ssr>
    <div v-masonry transition-duration=".5s" item-selector=".item" class="masonry-container">

      <div v-masonry-tile v-for="project in projects" class="item square aspect-ratio">
      	<a :href="`${project.pageUrl}`" class="pointer grow--bg link hide-child cover bg-center aspect-ratio--object">
      		<figure class="ma0">
      			<img class="w-100" :src="`${project.imageUrl}`" alt="Yo">
      			<figcaption class="tc white child bg-black-70 flex justify-center items-center aspect-ratio--object">
      				<span class="avenir f3 fw7">{{project.title}}</span>
      			</figcaption>
      		</figure>
      	</a>
      </div>

    </div>
  </no-ssr>

  <div class="pa3 pa4-ns mw8 tc center">
      <a class="f6 grow mt4 no-underline br-pill ph4 pv2 mb4 dib white bg-black" href="/projects">More Projects</a>
  </div>

</section>
</template>

<script>
import NoSSR from 'vue-no-ssr'
import ShineMoments from '~/assets/project-shinemoment.jpg'
import DigitalLife from '~/assets/digitallife.jpg'
import ConversionFunnel from '~/assets/conversion-funnel.jpg'
import MovementBank from '~/assets/movementbank.jpg'
import MYM from '~/assets/mym.jpg'
import Tutor from '~/assets/tutor.jpg'

export default {
  name: 'section-projects',
  components: {
    'no-ssr': NoSSR
  },
  data () {
    return {
      projects: [
        {
          title: 'Movement Bank',
          type: 'Website',
          pageUrl: '/projects/movement-bank',
          imageUrl: MovementBank
        },
        {
          title: 'Master Your Money',
          type: 'Mobile App',
          pageUrl: '/projects/master-your-money',
          imageUrl: MYM
        },
        {
          title: 'Conversion Funnel',
          type: 'Web App',
          pageUrl: '/projects/movement-mortgage-lead-forms',
          imageUrl: ConversionFunnel
        },
        {
          title: 'AT&T Digital Life',
          type: 'App Development',
          pageUrl: '/projects/digital-life-att',
          imageUrl: DigitalLife
        },
        {
          title: 'AT&T Shine Moments',
          type: 'App Development',
          pageUrl: '/projects/shine-moments-att',
          imageUrl: ShineMoments
        },
        {
          title: 'Tutor2You LLC',
          type: 'Website',
          pageUrl: '/projects/tutor2you',
          imageUrl: Tutor
        }
      ]
    }
  },
  mounted () {
    if (typeof this.$redrawVueMasonry === 'function') {
      this.$redrawVueMasonry()
    }
  }
}
</script>

<style lang="scss" scoped>

.underlined-tw:before {
    content: "";
    display: block;
    width: 45px;
    height: 8px;
    margin-top: 5px;
    background-color: #000000;
}


// Masonry container

.masonry-container {
  width: 1125px;
  margin: 0 auto;
}

.item.square {
  background-color: #fff;
  width: 375px;
  height: 275px;
  overflow: hidden;
}

.item img {
  width: 500px;
  display: block;
  vertical-align: middle;
  margin: auto;

  -moz-transition: all 0.3s;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
}

.item:hover img {
  -moz-transform: scale(1.1);
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

// Responsive styles for masonry container

@media (max-width: 1125px) {
  .masonry-container {
    width: 750px;
    margin: 0 auto;
  }
}

@media (max-width: 750px) {
  .masonry-container {
    width: 375px;
    margin: 0 auto;
  }
}

@media (max-width: 400px) {
  .masonry-container {
    width: 100%;
    margin: 0 auto;
  }

  .item {
    width: 400px !important;
    height: 200px !important;
  }
}

</style>
