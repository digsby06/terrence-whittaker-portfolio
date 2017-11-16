<template lang="html">
    <section class="section-bio pa4 pa5-ns mw9 center">

      <div class="section-headline">
        <h1 class="f2 f1-m lh-title mt0">
          Bio
          <span class="underlined-tw"></span>
        </h1>
      </div>

      <div class="flex flex-row justify-between flex-wrap georgia">
          <div class="w-50-ns w-100 w-100-m mb4">
            <p class="f5 f4-ns lh-copy measure-wide">There was a time when I dreamed of becoming a great marketer. I followed those dreams, worked hard, but couldn't escape the feeling that something was missing.</p>
            <p class="f5 f4-ns lh-copy measure-wide pt3">With only my gut instinct and a desire to learn, I left a promising career in brand strategy and design to create applications and user-friendly experiences.</p>
            <nuxt-link class="f6 grow mt4 no-underline br-pill ph4 pv2 mb2 dib white bg-black avenir" to="/bio">Read More</nuxt-link>
          </div>

          <div class="w-50-ns w-100 w-100-m">
            <h1 class="f3 f2-ns fw1 georgia i tc">"{{quote}}"</h1>
            <h1 class="f3 f2-ns fw1 georgia i tr">- {{artist}}</h1>
          </div>
      </div>

    </section>
</template>

<script>
export default {
  name: 'section-bio',
  data () {
    return {
      quote: 'Everybody look at you strange, say you changed... Like you work that hard to stay the same?',
      artist: 'JAY Z'
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
