<template lang="html">
    <section class="section-tools pa4 pa5-ns center tools--bg">

      <div class="section-headline pa4 pa5-ns mw9 tc center">
        <h1 class="f2 f1-m lh-title mt0 mb0 mb3-ns">
          Tools
        </h1>
      </div>

      <div class="flex flex-row justify-between flex-wrap georgia mb5">

          <div class="w-50-ns w-100 w-100-m mb4 tl-ns tc-m tc">
            <p class="f5 f4-ns lh-copy measure-wide center-m center">As a developer, I try to solve problems using the appropriate tools. I'm beginning to specialize in front-end technologies, but I have no problem getting my hands dirty on the back end.</p>
          </div>

          <div class="w-50-ns w-100 w-100-m flex row justify-around">
            <ul class="pl0">
              <li class="list pl0 pb3 f6 f4-ns fw6" v-for="tool of tools.frontend">{{tool}}</li>
            </ul>

            <ul class="pl0">
              <li class="list pl0 pb3 f6 f4-ns fw6" v-for="tool of tools.backend">{{tool}}</li>
            </ul>
          </div>

      </div>


    </section>
</template>

<script>
export default {
  name: 'section-bio',
  data () {
    return {
      tools: {
        backend: [
          'Laravel',
          'Ruby on Rails',
          'Meteor',
          'Firebase',
          'Nativescript',
          'Ionic',
          'Prismic'
        ],
        frontend: [
          'HTML5',
          'Javascript (ES6)',
          'Adobe CC',
          'SASS/SCSS',
          'Node.js',
          'Vue',
          'React'
        ]
      }
    }
  }
}
</script>

<style lang="css" scoped>
.tools--bg {
  background-image: url('~/assets/frontend.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}


</style>
