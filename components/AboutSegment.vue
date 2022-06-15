<template>
  <div id="about-segment" class="wrapped-content">
    <div id="text">
      <nuxt-content :document="text" />
    </div>
    <div id="image">
      <div id="image-container">
        <img :src="image" alt="" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import AboutData from '~/src/typings/AboutData'

@Component
export default class AboutSegment extends Vue {
  data: AboutData | null = null
  text: any = {}

  async created() {
    this.data = (await this.$nuxt.context
      .$content('about/about-data')
      .fetch()) as any

    this.text = await this.$nuxt.context.$content('about/about-text').fetch()
  }

  get image() {
    if (this.data) {
      return require(`~/assets/${this.data.img}`)
    } else {
      return ''
    }
  }
}
</script>

<style scoped>
#about-segment {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

#about-segment #text {
  height: 100%;
  width: 50%;
  padding: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
}

#about-segment #image {
  height: 100%;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

#about-segment #image #image-container {
  --logo-scale-factor: 0.7;
  --size-value: 400px;

  width: var(--size-value);
  aspect-ratio: 1/1;
  background-color: white;
  box-shadow: 0 0 12px -4px #000;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

#about-segment #image #image-container img {
  width: calc(var(--logo-scale-factor) * var(--size-value));
  aspect-ratio: 19/16;
}

@media (max-width: 1290px) {
  #about-segment #image #image-container {
    --resize-value: 250px;

    width: var(--resize-value);
    aspect-ratio: 1/1;
  }

  #about-segment #image #image-container img {
    width: calc(var(--logo-scale-factor) * var(--resize-value));
    aspect-ratio: 19/16;
  }
}

@media (max-width: 812px) {
  #about-segment #image {
    display: none;
  }

  #about-segment #text {
    width: 100%;
  }
}
</style>

<style>
#text h1 {
  font-size: 8vw;
  line-height: 6vw;
  margin: 0;
}

#text p {
  font-size: 1.8vw;
  margin: 0;
}

</style>
