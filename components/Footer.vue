<template>
  <div v-if="footerData" id="footer">
    <div id="background"></div>

    <div id="content">
      <div id="cols">
        <div class="col">
          <div class="col-content">
            <h1>Links</h1>
            <a
              v-for="(entry, index) in footerData.links"
              :key="index"
              :href="entry.url"
              ><img :src="fetchImage(entry.icon)" :alt="entry.text" />{{
                entry.text
              }}</a
            >
          </div>
        </div>
        <div class="col">
          <div class="col-content">
            <h1>Content</h1>
            <a
              v-for="(entry, index) in footerData.navigation"
              :key="index"
              :href="entry.element"
            >
              {{ entry.text }}
            </a>
          </div>
        </div>
        <div class="col">
          <div class="col-content">
            <h1>Languages</h1>
            <a
              v-for="(language, index) in footerData.languages"
              :key="index"
              :href="language.url"
              ><img v-if="language.icon" :src="language.icon" alt="" />
              {{ language.name }}</a
            >
          </div>
        </div>
        <div class="col">
          <div id="logo-container">
            <img :src="fetchImage(footerData.logo)" alt="logo" />
          </div>
        </div>
      </div>

      <div id="copyright">Copyright © 2022 LeoIOT</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import FooterData from '~/src/typings/FooterData'

@Component
export default class Footer extends Vue {
  footerData: FooterData | null = null

  async created() {
    this.footerData = (await this.$nuxt.context
      .$content('footer/footer-data')
      .fetch()) as any
  }

  fetchImage(path: string) {
    return require(`~/assets/${path}`)
  }
}
</script>

<style scoped>
#footer {
  width: 100vw;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

#footer #background {
  position: absolute;
  height: 100%;
  width: 100vw;
  z-index: -1;
  border-radius: 50px 50px 0 0;
  box-shadow: 0 0 12px -4px #000;
  background: rgb(233 78 27);
  background: linear-gradient(
    90deg,
    rgba(233 78 27 / 100%) 0%,
    rgba(191 23 34 / 100%) 100%
  );
}

#footer #content {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

#footer #content #cols {
  position: relative;
  width: 100vw;
  display: grid;
  padding: 3vw;
  grid-template-columns: repeat(4, 1fr);
}

#footer #content #cols .col {
  display: flex;
  justify-content: center;
}

#footer #content #cols .col .col-content {
  display: flex;
  flex-direction: column;
  color: white;
  line-height: 5vh;
  font-size: 1.5vw;
}

#footer #content #cols .col .col-content a {
  color: white;
  cursor: pointer;
  transition: all 0.5s;
  display: flex;
  gap: 0.3vw;
}

#footer #content #cols .col .col-content a:hover {
  color: rgba(255 255 255 / 60%);
}

#footer #content #cols .col .col-content a img {
  width: 2vw;
}

#footer #content #cols .col .col-content h1 {
  font-size: 2vw;
  color: white;
  cursor: pointer;
  line-height: 0.2vw;
}

#footer #content #cols .col #logo-container {
  width: 15vw;
  height: 15vw;
  border-radius: 100%;
  aspect-ratio: 1 / 1;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 12px -4px #000;
}

#footer #content #cols .col #logo-container img {
  width: 60%;
}

#footer #copyright {
  color: white;
  font-size: 2vw;
}
</style>
