<template lang="html">
  <div class="projects--accordion">
      <article class="project--item">
          <h2>Movement Bank</h2>
          <div class="project--item--desc">
              <h3>Website</h3>
              <p>Th'art nesh thee nay lad soft lad wacken thi sen up t'foot o' our stairs. Nay lad where's tha bin. Th'art nesh thee a pint ‘o mild any rooad t'foot o' our stairs. Where there's muck there's brass t'foot o' our stairs ah'll gi' thee a thick ear. Ah'll learn thi tintintin tell thi summat for nowt soft lad mardy bum. Chuffin'</p>

              <a class="f6 grow mt4 no-underline br-pill ph4 pv2 mb2 dib white bg-black" href="/projects">Read More</a>
          </div>
      </article>

      <article class="project--item">
          <h2>Master Your Money</h2>
          <div class="project--item--desc">
              <h3>Mobile App</h3>
              <p>Th'art nesh thee nay lad soft lad wacken thi sen up t'foot o' our stairs. Nay lad where's tha bin. Th'art nesh thee a pint ‘o mild any rooad t'foot o' our stairs. Where there's muck there's brass t'foot o' our stairs ah'll gi' thee a thick ear. Ah'll learn thi tintintin tell thi summat for nowt soft lad mardy bum. Chuffin'</p>
              <a class="f6 grow mt4 no-underline br-pill ph4 pv2 mb2 dib white bg-black" href="/projects">Read More</a>
          </div>
      </article>

      <article class="project--item">
          <h2>Movement Lead Form</h2>
          <div class="project--item--desc">
              <h3>Web App</h3>
              <p>Th'art nesh thee nay lad soft lad wacken thi sen up t'foot o' our stairs. Nay lad where's tha bin. Th'art nesh thee a pint ‘o mild any rooad t'foot o' our stairs. Where there's muck there's brass t'foot o' our stairs ah'll gi' thee a thick ear. Ah'll learn thi tintintin tell thi summat for nowt soft lad mardy bum. Chuffin'</p>
              <a class="f6 grow mt4 no-underline br-pill ph4 pv2 mb2 dib white bg-black" href="/projects/movement-mortgage-lead-forms">Read More</a>
          </div>
      </article>

      <article class="project--item">
          <h2>AT&T Digital Life</h2>
          <div class="project--item--desc">
              <h3>App Development</h3>
              <p>Th'art nesh thee nay lad soft lad wacken thi sen up t'foot o' our stairs. Nay lad where's tha bin. Th'art nesh thee a pint ‘o mild any rooad t'foot o' our stairs. Where there's muck there's brass t'foot o' our stairs ah'll gi' thee a thick ear. Ah'll learn thi tintintin tell thi summat for nowt soft lad mardy bum. Chuffin'</p>
              <a class="f6 grow mt4 no-underline br-pill ph4 pv2 mb2 dib white bg-black" href="/projects">Read More</a>
          </div>
      </article>

      <article class="project--item">
          <h2>AT&T Shine Moments</h2>
          <div class="project--item--desc">
              <h3>App Development</h3>
              <p>Th'art nesh thee nay lad soft lad wacken thi sen up t'foot o' our stairs. Nay lad where's tha bin. Th'art nesh thee a pint ‘o mild any rooad t'foot o' our stairs. Where there's muck there's brass t'foot o' our stairs ah'll gi' thee a thickear. Ah'll learn thi tintintin tell thi summat for nowt soft lad mardy bum. Chuffin'</p>
              <a class="f6 grow mt4 no-underline br-pill ph4 pv2 mb2 dib white bg-black" href="/projects">Read More</a>
          </div>
      </article>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
* { transition: all .3s ease 0s; }

/* Background colours */

.project--item:nth-child(1) { background: #2d2d2d; }

.project--item:nth-child(2) { background: #6b6b6b; }

.project--item:nth-child(3) { background: #F5B940; }

.project--item:nth-child(4) { background: #212121; }

.project--item:nth-child(5) { background: #bcbcbc; }

/* Main layout */

.projects--accordion {
  width: 100%;
  height: 375px;
}

.projects--accordion {
  list-style: none;
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: stretch;
  overflow: hidden;
}

/* Articles */

.project--item {
  flex: initial;
  width: 20%;
  height: 100%;
  text-align: center;
  color: #fff;
  text-decoration: none;
  vertical-align: bottom;
  box-sizing: border-box;
  padding: 2vh 1vw;
  position: relative;
}

/* Hover interaction */

.projects--accordion:hover .project--item {
  flex: initial;
  width: 11.5%;
}

.projects--accordion .project--item:hover {
  width: 55%;
}

.project--item > .project--item--desc {
  opacity: 0;
  transition: opacity .2s ease 0;
}

.project--item:hover > .project--item--desc {
  opacity: 1;
  transition: opacity .3s ease .3s;
}

/*
.project--item:hover {
  width: 40%;
}

.project--item--desc {
  opacity: 0;
  transition: opacity .2s ease 0;
}

.project--item:hover > .project--item--desc {
  opacity: 1;
  transition: opacity .3s ease .3s;
}*/

/* navigation */

.project--item h2 {
  bottom: 2vh;
  text-align: center;
  width: 100%;
  margin: 0;
  font-size: 3vh;
}

/* Article layouts */

.project--item--desc {
  text-align: left;
  width: 58vw;
}

.project--item--desc p {
  margin-top: 10px;
  width: 20vw;
}

/*@media (max-width: 900px) {

  div + div article { padding: 2vh 3vw; }

  div + div article > h2 {
    transform: rotate(90deg);
    bottom: 23vh;
    min-width: 12em;
    text-align: left;
    transform: rotate(-90deg);
    transform-origin: 0 0 0;
    opacity: 1;
  }

  div + div article:hover > h2 { opacity: 0; }

  article div p { width: 50vw; }

  article div {
    max-height: calc(72%);
    overflow-y: auto;
  }
}*/

</style>


<!--
<style>
* { transition: all .3s ease 0s; }



/* Main layout */

div + div {
  width: 100vw;
  height: 100vh;
}

div + div {
  list-style: none;
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: stretch;
  overflow: hidden;
}

/* Articles */

div + div article {
  flex: initial;
  width: 20%;
  height: 100%;
  text-align: center;
  color: #fff;
  text-decoration: none;
  vertical-align: bottom;
  box-sizing: border-box;
  padding: 2vh 1vw;
  position: relative;
}

/* Big Headings */

body > div:first-child {
  position: fixed;
  bottom: 8vh;
  background: #fff;
  width: 100%;
  text-align: center;
 padding: .5rem;
  z-index: 2;
}

body > div:first-child h1, body > div:first-child h2 {
  margin: 0;
  padding: 0;
}

/* Hover interaction */

div + div:hover article {
  flex: initial;
  width: 10%;
}

div + div article:hover { width: 60%; }

article > div {
  opacity: 0;
  transition: opacity .2s ease 0;
}

div + div article:hover > div {
  opacity: 1;
  transition: opacity .3s ease .3s;
}

/* navigation */

div + div article > h2 {
  bottom: 2vh;
  position: absolute;
  text-align: center;
  width: 100%;
  margin: 0;
  font-size: 3vh;
}

/* Article layouts */

article div {
  text-align: left;
  width: 58vw;
}

article div p, article div div h2, article div h3 { margin: 0 0 1em 0; }

h1, h2, h3, h4, h5, h6 { text-transform: uppercase; }

article div p { width: 40vw; }
@media (max-width: 900px) {

div + div article { padding: 2vh 3vw; }

div + div article > h2 {
  transform: rotate(90deg);
  bottom: 23vh;
  min-width: 12em;
  text-align: left;
  transform: rotate(-90deg);
  transform-origin: 0 0 0;
  opacity: 1;
}

div + div article:hover > h2 { opacity: 0; }

article div p { width: 50vw; }

article div {
  max-height: calc(72%);
  overflow-y: auto;
}
}
</style> -->
