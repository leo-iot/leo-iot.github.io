<template>
  <div id="about-segment" class="wrapped-content">
    <div id="text">
      <nuxt-content :document="text"/>
    </div>
    <div id="image">
      <div id="image-container">
        <img :src="image" alt="">
      </div>
    </div>
  </div>
</template>

<script lang="ts">


import {Component, Vue} from "vue-property-decorator";
import AboutData from "~/src/typings/AboutData";

@Component
export default class AboutSegment extends Vue{

  data: AboutData | null = null
  text: any = {}

  async created() {
    this.data = await this.$nuxt
      .context.$content('about/about-data').fetch() as any

    this.text = await this.$nuxt
      .context.$content('about/about-text').fetch()
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
  height: 500px;
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
  width: 20vw;
  height: 20vw;
  background-color: white;
  box-shadow: 0 0 12px -4px #000;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

#about-segment #image #image-container img{
  width: 70%;
}
</style>
