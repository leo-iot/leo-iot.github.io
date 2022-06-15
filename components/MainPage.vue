<template>
  <div id="main-page">
    <Navigation />
    <div id="home" class="anchor" />
    <HomeSegment />

    <div id="wrapper">
      <div id="about" class="anchor" />
      <AboutSegment />
      <div id="preview" class="anchor" />
      <PreviewSegment />
      <div id="video" class="anchor"></div>
      <VideoSegment />
      <div id="technology" class="anchor" />
      <TechnologySegment />
      <div id="architecture" class="anchor" />
      <ArchitectureSegment />
      <div id="footer" class="anchor" />
      <Footer />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import HomeSegment from '~/components/HomeSegment.vue'
import AboutSegment from '~/components/AboutSegment.vue'
import PreviewSegment from '~/components/PreviewSegment.vue'
import TeamSegment from '~/components/TeamSegment.vue'
import TechnologySegment from '~/components/TechnologySegment.vue'
import ArchitectureSegment from '~/components/ArchitectureSegment.vue'
import VideoSegment from '~/components/VideoSegment.vue'

@Component({
  components: {
    PreviewSegment,
    AboutSegment,
    HomeSegment,
    TeamSegment,
    TechnologySegment,
    ArchitectureSegment,
    VideoSegment,
  },
})
export default class MainPage extends Vue {}
</script>

<style scoped>
#main-page {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

#wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 70vw;
}

.anchor {
  height: 100px;
  width: 100vw;
}
</style>
